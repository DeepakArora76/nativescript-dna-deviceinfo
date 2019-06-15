import { android as Android, getNativeApplication } from 'tns-core-modules/application';

import {
  Carrier,
  DeviceInfoInterface,
  RadioAccessTechnology,
  WCTGeneration,
  wirelessCellularGenerator,
} from './deviceinfo.interface';

import { networkProviderByMcc, networkProviderByMccMnc } from './network-provider';

interface NetworkProviderInfo {
  mcc: number;
  mnc: number;
  generation: WCTGeneration;
}

export function staticDecorator<T>() {
  return (constructor: T) => { };
}

type TelephonyManager = android.telephony.TelephonyManager;
type SubscriptionManager = android.telephony.SubscriptionManager;
type SubscriptionInfo = android.telephony.SubscriptionInfo;

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

  static cellularServiceProvider(): Carrier[] {
    let carriers = [] as Carrier[];

    const sm = DeviceInfo.subscriptionManager();
    if (sm) {
      const cellularProviders = sm.getActiveSubscriptionInfoList();
      for (let i = 0; i < cellularProviders.size(); i++) {
        let carrier = DeviceInfo.prepareCarrier(cellularProviders.get(i));
        if (carrier.mobileCountryCode === DeviceInfo.activeProviderMcc() &&
          carrier.mobileNetworkCode === DeviceInfo.activeProviderMnc()) {
          carrier.networkType = DeviceInfo.activeProviderRadioAccessTechnology();
          carrier.generation = wirelessCellularGenerator(carrier.networkType);
        }
        carriers.push(carrier);
      }
    }
    else {
      const tm = DeviceInfo.telephonyManager();
      if (tm) {
        let carrier = {} as Carrier;
        carrier.carrierName = tm.getSimOperatorName();
        carrier.displayName = tm.getNetworkOperatorName();
        carrier.isoCountryCode = tm.getNetworkCountryIso();
        carrier.mobileCountryCode = DeviceInfo.activeProviderMcc();
        carrier.mobileNetworkCode = DeviceInfo.activeProviderMnc();

        let provider = networkProviderByMccMnc(carrier.mobileCountryCode,
          carrier.mobileNetworkCode);
        if (provider == null) {
          provider = networkProviderByMcc(carrier.mobileCountryCode);
        }
        carrier.country = provider ? provider.country : "";
        carrier.countryCode = provider ? provider.country_code : "";
        carrier.carrierName = carrier.carrierName === "" && provider ?
          provider.network : carrier.carrierName;
        carrier.isoCountryCode = carrier.isoCountryCode === "" && provider ?
          provider.iso : carrier.isoCountryCode;

        carrier.networkType = DeviceInfo.activeProviderRadioAccessTechnology();
        carrier.generation = wirelessCellularGenerator(carrier.networkType);
        carriers.push(carrier);
      }
    }

    return carriers;
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

  private static prepareCarrier(cellularProvider: SubscriptionInfo): Carrier {
    let carrier = {} as Carrier;
    carrier.carrierName = cellularProvider.getCarrierName();
    carrier.displayName = cellularProvider.getDisplayName();
    carrier.isoCountryCode = cellularProvider.getCountryIso();
    carrier.mobileCountryCode = cellularProvider.getMcc().toString();

    const mnc = cellularProvider.getMnc().toString();
    carrier.mobileNetworkCode = mnc.length === 1 ? `0${mnc}` : mnc;

    let provider = networkProviderByMccMnc(carrier.mobileCountryCode, carrier.mobileNetworkCode);
    if (provider == null) {
      provider = networkProviderByMcc(carrier.mobileCountryCode);
    }
    carrier.country = provider ? provider.country : "";
    carrier.countryCode = provider ? provider.country_code : "";
    carrier.carrierName = carrier.carrierName === "" && provider ?
      provider.network : carrier.carrierName;
    carrier.isoCountryCode = carrier.isoCountryCode === "" && provider ?
      provider.iso : carrier.isoCountryCode;
    return carrier;
  }

  private static activeProviderRadioAccessTechnology(): RadioAccessTechnology {
    const TelephonyManager = android.telephony.TelephonyManager;
    const tm = DeviceInfo.telephonyManager();
    if (tm == null) {
      return RadioAccessTechnology.UNKNOWN;
    }

    const NETWORK_TYPE_NR = 20; // Added in API level 29
    switch (tm.getNetworkType()) {
      case TelephonyManager.NETWORK_TYPE_CDMA: return RadioAccessTechnology.CDMA;
      case TelephonyManager.NETWORK_TYPE_EDGE: return RadioAccessTechnology.EDGE;
      case TelephonyManager.NETWORK_TYPE_EVDO_0: return RadioAccessTechnology.CDMAEVDORev0;
      case TelephonyManager.NETWORK_TYPE_EVDO_A: return RadioAccessTechnology.CDMAEVDORevA;
      case TelephonyManager.NETWORK_TYPE_EVDO_B: return RadioAccessTechnology.CDMAEVDORevB;
      case TelephonyManager.NETWORK_TYPE_GPRS: return RadioAccessTechnology.GPRS;
      case TelephonyManager.NETWORK_TYPE_HSDPA: return RadioAccessTechnology.HSDPA;
      case TelephonyManager.NETWORK_TYPE_HSPA: return RadioAccessTechnology.HSPA;
      case TelephonyManager.NETWORK_TYPE_HSUPA: return RadioAccessTechnology.HSUPA;
      case TelephonyManager.NETWORK_TYPE_HSPAP: return RadioAccessTechnology.HSPAP;
      case TelephonyManager.NETWORK_TYPE_UMTS: return RadioAccessTechnology.UMTS;
      case TelephonyManager.NETWORK_TYPE_EHRPD: return RadioAccessTechnology.EHRPD;
      case TelephonyManager.NETWORK_TYPE_IDEN: return RadioAccessTechnology.IDEN;
      case TelephonyManager.NETWORK_TYPE_LTE: return RadioAccessTechnology.LTE;
      case TelephonyManager.NETWORK_TYPE_IWLAN: return RadioAccessTechnology.IWLAN;
      case NETWORK_TYPE_NR: return RadioAccessTechnology.NR;
      default: return RadioAccessTechnology.UNKNOWN;
    }
  }

  private static activeProviderMcc(): string {
    const tm = DeviceInfo.telephonyManager();
    if (tm) {
      const operator = tm.getSimOperator();
      if (operator !== "") {
        return operator.substring(0, 3);
      }
    }
    return "";
  }

  private static activeProviderMnc(): string {
    const tm = DeviceInfo.telephonyManager();
    if (tm) {
      const operator = tm.getSimOperator();
      if (operator !== "") {
        return operator.substring(3);
      }
    }
    return "";
  }

  private static activeProviderName(): string {
    const tm = DeviceInfo.telephonyManager();
    if (tm) {
      const operator = tm.getSimOperatorName();
      if (operator !== "") {
        return operator.substring(3);
      }
    }
    return "";
  }

  private static networkProviderInfos(): NetworkProviderInfo[] {
    const tm = DeviceInfo.telephonyManager();
    if (tm == null) {
      return [];
    }

    let networkProviderList = [] as NetworkProviderInfo[];
    const allCellInfo = tm.getAllCellInfo();
    for (let i = 0; i < allCellInfo.size(); i++) {
      let carrier = {} as Carrier;
      if (allCellInfo.get(i) instanceof android.telephony.CellInfoCdma) {
        networkProviderList.push({
          mcc: 0,
          mnc: 0,
          generation: WCTGeneration._UNKNOWN
        });
      } else if (allCellInfo.get(i) instanceof android.telephony.CellInfoGsm) {
        const ci = allCellInfo.get(i) as android.telephony.CellInfoGsm;
        networkProviderList.push({
          mcc: ci.getCellIdentity().getMcc(),
          mnc: ci.getCellIdentity().getMnc(),
          generation: WCTGeneration._2G
        });
      } else if (allCellInfo.get(i) instanceof android.telephony.CellInfoWcdma) {
        const ci = allCellInfo.get(i) as android.telephony.CellInfoWcdma;
        networkProviderList.push({
          mcc: ci.getCellIdentity().getMcc(),
          mnc: ci.getCellIdentity().getMnc(),
          generation: WCTGeneration._3G
        });
      } else if (allCellInfo.get(i) instanceof android.telephony.CellInfoLte) {
        const ci = allCellInfo.get(i) as android.telephony.CellInfoLte;
        networkProviderList.push({
          mcc: ci.getCellIdentity().getMcc(),
          mnc: ci.getCellIdentity().getMnc(),
          generation: WCTGeneration._4G
        });
      }
    }
    return networkProviderList;
  }

  private static subscriptionManager(): SubscriptionManager | null {
    const Build = android.os.Build;
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP_MR1) {
      const ctx = <android.content.Context>Android.context;
      const permission = android.Manifest.permission.READ_PHONE_STATE;
      const contextCompat = android.support.v4.content.ContextCompat;
      const permissionStatus = contextCompat.checkSelfPermission(ctx, permission);
      if (permissionStatus === android.content.pm.PackageManager.PERMISSION_GRANTED) {
        return android.telephony.SubscriptionManager.from(ctx);
      }
    }
    return null;
  }

  private static telephonyManager(): TelephonyManager | null {
    const Build = android.os.Build;
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
      const ctx = <android.content.Context>Android.context;
      const permission = android.Manifest.permission.ACCESS_COARSE_LOCATION;
      const contextCompat = android.support.v4.content.ContextCompat;
      const permissionStatus = contextCompat.checkSelfPermission(ctx, permission);
      if (permissionStatus === android.content.pm.PackageManager.PERMISSION_GRANTED) {
        return ctx.getSystemService(android.content.Context.TELEPHONY_SERVICE) as TelephonyManager;
      }
    }
    return null;
  }
}
