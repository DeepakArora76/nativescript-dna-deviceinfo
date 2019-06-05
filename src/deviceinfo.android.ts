import { android as Android, getNativeApplication, getResources } from 'tns-core-modules/application';
import { DeviceInfoInterface } from './deviceinfo.interface';

export function staticDecorator<T>() {
  return (constructor: T) => { };
}

declare const com: any;
declare const io: any;

@staticDecorator<DeviceInfoInterface>()
export class DeviceInfo {
  static totalMemory(): number {
    return DeviceInfo.memoryInfo().totalMem;
  }

  static freeMemory(): number {
    return DeviceInfo.memoryInfo().availMem;
  }

  static totalStorageSpace(): number {
    try {
      return DeviceInfo.totalSpace(android.os.Environment.getDataDirectory());
    } catch (exception) {
    }
    return -1;
  }

  static freeStorageSpace(): number {
    try {
      return DeviceInfo.freeSpace(
        android.os.Environment.getDataDirectory());
    } catch (exception) {
    }
    return -1;
  }

  static deviceId(): string {
    const deviceId = android.os.Build.BOARD;
    if (deviceId) {
      if (!deviceId.toLocaleLowerCase().includes("unknown")) {
        return deviceId;
      }
    }
    return android.os.Build.SERIAL;
  }

  static deviceName(): string {
    let deviceName = "Unknown";
    const ctx = <android.content.Context>Android.context;
    const res = ctx.checkCallingOrSelfPermission("android.permission.BLUETOOTH");
    if (res === android.content.pm.PackageManager.PERMISSION_GRANTED) {
      try {
        const adptr = android.bluetooth.BluetoothAdapter.getDefaultAdapter();
        if (adptr) {
          deviceName = adptr.getName();
        }
      } catch (exception) {
      }
    }
    return deviceName;
  }

  static deviceLocale(): string {
    const ctx = <android.content.Context>Android.context;
    const current = ctx.getResources().getConfiguration().locale;
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
      return current.toLanguageTag();
    } else {
      return String().concat(current.getLanguage(), "-", current.getCountry());
    }
  }

  static deviceCountry(): string {
    const ctx = <android.content.Context>Android.context;
    const current = ctx.getResources().getConfiguration().locale;
    return current.getCountry();
  }

  static timezone(): string {
    return java.util.TimeZone.getDefault().getID();
  }

  static userAgent(): string {
    return android.webkit.WebSettings.getDefaultUserAgent(Android.context);
  }

  static appName(): string {
    const ctx = <android.content.Context>Android.context;
    return ctx.getApplicationInfo().loadLabel(ctx.getPackageManager());
  }

  static appVersion(): string {
    const ctx = <android.content.Context>Android.context;
    const pckMgr = ctx.getPackageManager();
    const pckInfo = pckMgr.getPackageInfo(ctx.getPackageName(), 0);
    return pckInfo.versionName;
  }

  static bundleId(): string {
    const ctx = <android.content.Context>Android.context;
    return ctx.getPackageName();
  }

  static bundleNumber(): string {
    return "";
  }

  static systemManufacturer(): string {
    return android.os.Build.MANUFACTURER;
  }

  static batteryLevel(): number {
    const BM = android.os.BatteryManager;
    const iFilter = new android.content.IntentFilter(
      android.content.Intent.ACTION_BATTERY_CHANGED);
    const ctx = <android.content.Context>Android.context;
    const batteryStatus = ctx.registerReceiver(null, iFilter);
    const level = batteryStatus.getIntExtra(BM.EXTRA_LEVEL, -1);
    const scale = batteryStatus.getIntExtra(BM.EXTRA_SCALE, -1);
    return (level * 100) / scale;
  }

  static isTablet(): boolean {
    const Configuration = android.content.res.Configuration;
    const ctx = <android.content.Context>Android.context;
    const layout = ctx.getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK;
    if (layout !== Configuration.SCREENLAYOUT_SIZE_LARGE && layout !== Configuration.SCREENLAYOUT_SIZE_XLARGE) {
      return false;
    }

    const DisplayMetrics = android.util.DisplayMetrics;
    const metrics = ctx.getResources().getDisplayMetrics();
    if (metrics.densityDpi === DisplayMetrics.DENSITY_DEFAULT || metrics.densityDpi === DisplayMetrics.DENSITY_HIGH
      || metrics.densityDpi === DisplayMetrics.DENSITY_MEDIUM || metrics.densityDpi === DisplayMetrics.DENSITY_TV
      || metrics.densityDpi === DisplayMetrics.DENSITY_XHIGH) {
      return true;
    }
    return false;
  }

  static is24Hour(): boolean {
    return android.text.format.DateFormat.is24HourFormat(Android.context);
  }

  static isEmulator(): boolean {
    const Build = android.os.Build;
    return Build.FINGERPRINT.startsWith("generic") || Build.FINGERPRINT.startsWith("unknown")
      || Build.MODEL.includes("google_sdk") || Build.MODEL.includes("Emulator")
      || Build.MODEL.includes("Android SDK built for x86") || Build.MANUFACTURER.includes("Genymotion")
      || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
      || "google_sdk" === Build.PRODUCT;
  }

  static isBatteryCharging(): boolean {
    const BM = android.os.BatteryManager;
    const iFilter = new android.content.IntentFilter(
      android.content.Intent.ACTION_BATTERY_CHANGED);
    const ctx = <android.content.Context>Android.context;
    const batteryStatus = ctx.registerReceiver(null, iFilter);
    const chargingStatus = batteryStatus.getIntExtra(BM.EXTRA_STATUS, -1);
    return chargingStatus === BM.BATTERY_STATUS_CHARGING;
  }

  private static memoryInfo() {
    const actMgr = <android.app.ActivityManager>(getNativeApplication()
      .getSystemService(android.content.Context.ACTIVITY_SERVICE));

    const memInfo = new android.app.ActivityManager.MemoryInfo();
    actMgr.getMemoryInfo(memInfo);
    return memInfo;
  }

  private static totalSpace(file: java.io.File): number {
    const statFs = new android.os.StatFs(file.getAbsolutePath());
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.JELLY_BEAN_MR2) {
      return statFs.getBlockCountLong() * statFs.getBlockSizeLong();
    }
    return statFs.getBlockCount() * statFs.getBlockSize();
  }

  private static freeSpace(file: java.io.File): number {
    const statFs = new android.os.StatFs(file.getAbsolutePath());
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.JELLY_BEAN_MR2) {
      return statFs.getAvailableBlocksLong() * statFs.getBlockSizeLong();
    }
    return statFs.getAvailableBlocks() * statFs.getBlockSize();
  }
}
