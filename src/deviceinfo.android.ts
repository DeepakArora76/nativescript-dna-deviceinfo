import { android as Android, getNativeApplication } from 'tns-core-modules/application';

import {
  Carrier,
  DeviceInfoInterface,
  RadioAccessTechnology,
  StorageVolume,
  wirelessCellularGenerator,
} from './deviceinfo.interface';

import { networkProviderByMcc, networkProviderByMccMnc } from './network-provider';

export function staticDecorator<T>() {
  return (constructor: T) => { };
}

const JELLY_BEAN_MR1 = 17;
const JELLY_BEAN_MR2 = 18;
const LOLLIPOP = 21;
const LOLLIPOP_MR1 = 22;

/** Current network is GPRS */
const NETWORK_TYPE_GPRS = 1;
/** Current network is EDGE */
const NETWORK_TYPE_EDGE = 2;
/** Current network is UMTS */
const NETWORK_TYPE_UMTS = 3;
/** Current network is CDMA: Either IS95A or IS95B*/
const NETWORK_TYPE_CDMA = 4;
/** Current network is EVDO revision 0*/
const NETWORK_TYPE_EVDO_0 = 5;
/** Current network is EVDO revision A*/
const NETWORK_TYPE_EVDO_A = 6;
/** Current network is HSDPA */
const NETWORK_TYPE_HSDPA = 8;
/** Current network is HSUPA */
const NETWORK_TYPE_HSUPA = 9;
/** Current network is HSPA */
const NETWORK_TYPE_HSPA = 10;
/** Current network is iDen */
const NETWORK_TYPE_IDEN = 11;
/** Current network is EVDO revision B*/
const NETWORK_TYPE_EVDO_B = 12;
/** Current network is LTE */
const NETWORK_TYPE_LTE = 13;
/** Current network is eHRPD */
const NETWORK_TYPE_EHRPD = 14;
/** Current network is HSPA+ */
const NETWORK_TYPE_HSPAP = 15;
/** Current network is IWLAN */
const NETWORK_TYPE_IWLAN = 18;

const Context = android.content.Context;
const StorageManager = android.os.storage.StorageManager;

type ContextType = android.content.Context;
type SubscriptionManager = android.telephony.SubscriptionManager;
type SubscriptionInfo = android.telephony.SubscriptionInfo;
type StorageManagerType = android.os.storage.StorageManager;
type TelephonyManager = android.telephony.TelephonyManager;

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

  static totalExternalStorageSpace(): number {
    return null;
  }

  static freeExternalStorageSpace(): number {
    return null;
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
    const ctx = <ContextType>Android.context;
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
    const ctx = <ContextType>Android.context;
    const current = ctx.getResources().getConfiguration().locale;
    if (android.os.Build.VERSION.SDK_INT >= LOLLIPOP) {
      return current.toLanguageTag();
    } else {
      return String().concat(current.getLanguage(), "-", current.getCountry());
    }
  }

  static deviceCountry(): string {
    const ctx = <ContextType>Android.context;
    const current = ctx.getResources().getConfiguration().locale;
    return current.getCountry();
  }

  static timezone(): string {
    return java.util.TimeZone.getDefault().getID();
  }

  static userAgent(): string {
    try {
      return android.webkit.WebSettings.getDefaultUserAgent(Android.context);
    } catch (error) {
      console.log(<Error>error.message);
    }
    return "";
  }

  static appName(): string {
    const ctx = <ContextType>Android.context;
    return ctx.getApplicationInfo().loadLabel(ctx.getPackageManager());
  }

  static appVersion(): string {
    const ctx = <ContextType>Android.context;
    const pckMgr = ctx.getPackageManager();
    const pckInfo = pckMgr.getPackageInfo(ctx.getPackageName(), 0);
    return pckInfo.versionName;
  }

  static bundleId(): string {
    const ctx = <ContextType>Android.context;
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
    const ctx = <ContextType>Android.context;
    const batteryStatus = ctx.registerReceiver(null, iFilter);
    const level = batteryStatus.getIntExtra(BM.EXTRA_LEVEL, -1);
    const scale = batteryStatus.getIntExtra(BM.EXTRA_SCALE, -1);
    return (level * 100) / scale;
  }

  static cellularServiceProviders(): Carrier[] {
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

  static externalStoragePaths(): string[] {
    let paths = [] as string[];
    const ctx = <ContextType>Android.context;
    const sm = <StorageManager>ctx.getSystemService(Context.STORAGE_SERVICE);
    try {
      const method = StorageManager.class.getMethod("getVolumePaths", []);
      method.setAccessible(true);
      const externalPaths = method.invoke(sm, []) as string[];
      for (let i = 0; i < externalPaths.length; i++) {
        const path = externalPaths[i];
        if (DeviceInfo.checkStorageMountState(path)) {
          paths.push(path);
        }
      }
    } catch (error) {
      console.log((<Error>error).message);
    }
    return paths;
  }

  static storageVolumes(): StorageVolume[] {
    let storageVolumesCollection = [] as StorageVolume[];
    const ctx = <ContextType>Android.context;
    const sm = <StorageManager>ctx.getSystemService(Context.STORAGE_SERVICE);
    try {
      const method = StorageManager.class.getMethod("getVolumeList", []);
      const storageVolumes = method.invoke(sm, []) as android.os.storage.StorageVolume[];
      if (storageVolumes == null || storageVolumes.length <= 0) {
        return [];
      }

      for (let i = 0; i < storageVolumes.length; i++) {
        try {
          const getStateMethod = storageVolumes[i].getClass().getMethod("getState", []);
          const mountState = getStateMethod.invoke(storageVolumes[i], []) as string;
          if (android.os.Environment.MEDIA_MOUNTED === mountState) {
            let sv = {} as StorageVolume;

            let method = storageVolumes[i].getClass().getMethod("getPath", []);
            sv.path = method.invoke(storageVolumes[i], []);

            method = storageVolumes[i].getClass().getMethod("getDescription", [Context.class]);
            sv.description = method.invoke(storageVolumes[i], [ctx]);

            method = storageVolumes[i].getClass().getMethod("isRemovable", []);
            sv.isRemovableStorage = method.invoke(storageVolumes[i], []).booleanValue();

            method = storageVolumes[i].getClass().getMethod("allowMassStorage", []);
            sv.isAllowMassStorage = (method.invoke(storageVolumes[i], []));

            method = storageVolumes[i].getClass().getMethod("isEmulated", []);
            sv.isEmulated = method.invoke(storageVolumes[i], []).booleanValue();

            method = storageVolumes[i].getClass().getMethod("isPrimary", []);
            sv.isPrimary = method.invoke(storageVolumes[i], []).booleanValue();

            const file = new java.io.File(sv.path);
            method = StorageManager.class.getMethod("getStorageLowBytes", [java.io.File.class]);
            sv.lowBytesLimit = method.invoke(sm, [file]).longValue();

            method = StorageManager.class.getMethod("getStorageFullBytes", [java.io.File.class]);
            sv.fullBytesLimit = method.invoke(sm, [file]).longValue();

            sv.totalSize = DeviceInfo.totalSpace(file);
            sv.availableSize = DeviceInfo.freeSpace(file);

            storageVolumesCollection.push(sv);
          }
        } catch (error) {
          console.log(<Error>error.message);
        }
      }
    } catch (error) {
      console.log(<Error>error.message);
    }
    return storageVolumesCollection;
  }

  static wifiSSID(): string {
    const ctx = <ContextType>Android.context;
    const permission = android.Manifest.permission;
    const contextCompat = android.support.v4.content.ContextCompat;
    const PackageManager = android.content.pm.PackageManager;

    const permissionCL = permission.ACCESS_COARSE_LOCATION;
    const permissionStatusCL = contextCompat.checkSelfPermission(ctx, permissionCL);
    const permissionPresentForCL = permissionStatusCL === PackageManager.PERMISSION_GRANTED;

    const permissionFL = permission.ACCESS_FINE_LOCATION;
    const permissionStatusFL = contextCompat.checkSelfPermission(ctx, permissionFL);
    const permissionPresentForFL = permissionStatusFL === PackageManager.PERMISSION_GRANTED;

    const permissionWS = permission.ACCESS_WIFI_STATE;
    const permissionStatusWS = contextCompat.checkSelfPermission(ctx, permissionWS);
    const permissionPresentForWS = permissionStatusWS === PackageManager.PERMISSION_GRANTED;

    const permissionPresent = ((permissionPresentForCL || permissionPresentForFL) && permissionPresentForWS);
    if (permissionPresent) {
      const ws = <android.net.wifi.WifiManager>ctx.getSystemService(Context.WIFI_SERVICE);
      const wifiInfo = ws.getConnectionInfo();
      if (wifiInfo.getSupplicantState() === android.net.wifi.SupplicantState.COMPLETED) {
        return wifiInfo.getSSID();
      }
    }
    return "";
  }

  static isTablet(): boolean {
    const Configuration = android.content.res.Configuration;
    const ctx = <ContextType>Android.context;
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
    const ctx = <ContextType>Android.context;
    const batteryStatus = ctx.registerReceiver(null, iFilter);
    const chargingStatus = batteryStatus.getIntExtra(BM.EXTRA_STATUS, -1);
    return chargingStatus === BM.BATTERY_STATUS_CHARGING;
  }

  static isBluetoothEnabled(): Promise<boolean> {
    type BluetoothManagerType = android.bluetooth.BluetoothManager;
    type BluetoothAdapterType = android.bluetooth.BluetoothAdapter;
    const Build = android.os.Build;
    const BluetoothAdapter = android.bluetooth.BluetoothAdapter;
    const ctx = <ContextType>Android.context;
    let btAdapter: BluetoothAdapterType = null;
    if (Build.VERSION.SDK_INT > JELLY_BEAN_MR1) {
      const btm = <BluetoothManagerType>ctx.getSystemService(Context.BLUETOOTH_SERVICE);
      btAdapter = btm.getAdapter();
    }
    else {
      btAdapter = BluetoothAdapter.getDefaultAdapter();
    }
    return new Promise<boolean>((resolve, reject) => {
      const permission = android.Manifest.permission;
      const contextCompat = android.support.v4.content.ContextCompat;
      const PackageManager = android.content.pm.PackageManager;

      const permissionStatus = contextCompat.checkSelfPermission(ctx, permission.BLUETOOTH);
      if (permissionStatus === PackageManager.PERMISSION_GRANTED) {
        resolve(btAdapter && btAdapter.getState() === BluetoothAdapter.STATE_ON);
      }
      else {
        reject(new Error("Missing bluetooth permission."));
      }
    });
  }

  private static memoryInfo() {
    const actMgr = <android.app.ActivityManager>(getNativeApplication()
      .getSystemService(Context.ACTIVITY_SERVICE));

    const memInfo = new android.app.ActivityManager.MemoryInfo();
    actMgr.getMemoryInfo(memInfo);
    return memInfo;
  }

  private static totalSpace(file: java.io.File): number {
    const statFs = new android.os.StatFs(file.getAbsolutePath());
    if (android.os.Build.VERSION.SDK_INT >= JELLY_BEAN_MR2) {
      return statFs.getBlockCountLong() * statFs.getBlockSizeLong();
    }
    return statFs.getBlockCount() * statFs.getBlockSize();
  }

  private static freeSpace(file: java.io.File): number {
    const statFs = new android.os.StatFs(file.getAbsolutePath());
    if (android.os.Build.VERSION.SDK_INT >= JELLY_BEAN_MR2) {
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
    const tm = DeviceInfo.telephonyManager();
    if (tm == null) {
      return RadioAccessTechnology.UNKNOWN;
    }

    const NETWORK_TYPE_NR = 20; // Added in API level 29
    switch (tm.getNetworkType()) {
      case NETWORK_TYPE_CDMA: return RadioAccessTechnology.CDMA;
      case NETWORK_TYPE_EDGE: return RadioAccessTechnology.EDGE;
      case NETWORK_TYPE_EVDO_0: return RadioAccessTechnology.CDMAEVDORev0;
      case NETWORK_TYPE_EVDO_A: return RadioAccessTechnology.CDMAEVDORevA;
      case NETWORK_TYPE_EVDO_B: return RadioAccessTechnology.CDMAEVDORevB;
      case NETWORK_TYPE_GPRS: return RadioAccessTechnology.GPRS;
      case NETWORK_TYPE_HSDPA: return RadioAccessTechnology.HSDPA;
      case NETWORK_TYPE_HSPA: return RadioAccessTechnology.HSPA;
      case NETWORK_TYPE_HSUPA: return RadioAccessTechnology.HSUPA;
      case NETWORK_TYPE_HSPAP: return RadioAccessTechnology.HSPAP;
      case NETWORK_TYPE_UMTS: return RadioAccessTechnology.UMTS;
      case NETWORK_TYPE_EHRPD: return RadioAccessTechnology.EHRPD;
      case NETWORK_TYPE_IDEN: return RadioAccessTechnology.IDEN;
      case NETWORK_TYPE_LTE: return RadioAccessTechnology.LTE;
      case NETWORK_TYPE_IWLAN: return RadioAccessTechnology.IWLAN;
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

  private static subscriptionManager(): SubscriptionManager | null {
    const Build = android.os.Build;
    if (Build.VERSION.SDK_INT >= LOLLIPOP_MR1) {
      const ctx = <ContextType>Android.context;
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
    if (Build.VERSION.SDK_INT >= JELLY_BEAN_MR1) {
      const ctx = <ContextType>Android.context;
      const permission = android.Manifest.permission.ACCESS_COARSE_LOCATION;
      const contextCompat = android.support.v4.content.ContextCompat;
      const permissionStatus = contextCompat.checkSelfPermission(ctx, permission);
      if (permissionStatus === android.content.pm.PackageManager.PERMISSION_GRANTED) {
        return ctx.getSystemService(Context.TELEPHONY_SERVICE) as TelephonyManager;
      }
    }
    return null;
  }

  private static checkStorageMountState(mountPoint: string): boolean {
    if (mountPoint == null) {
      return false;
    }

    const context = <ContextType>Android.context;
    const storageManager = <StorageManagerType>context.getSystemService(Context.STORAGE_SERVICE);
    try {
      const method = StorageManager.class.getDeclaredMethod(
        "getVolumeState",
        [java.lang.String.class]);
      method.setAccessible(true);

      const mountState = method.invoke(storageManager, [mountPoint]) as string;
      return android.os.Environment.MEDIA_MOUNTED === mountState;
    } catch (error) {
      console.log(<Error>error.message);
    }
    return false;
  }
}
