import {
  Carrier,
  DeviceInfoInterface,
  RadioAccessTechnology,
  StorageVolume,
  wirelessCellularGenerator
} from './deviceinfo.interface';

import { networkProviderByMccMnc } from './network-provider';

export function staticDecorator<T>() {
  return (constructor: T) => { };
}

@staticDecorator<DeviceInfoInterface>()
export class DeviceInfo {
  private static radioAccessTechnology = new Map([
    [CTRadioAccessTechnologyGPRS, RadioAccessTechnology.GPRS],
    [CTRadioAccessTechnologyEdge, RadioAccessTechnology.EDGE],
    [CTRadioAccessTechnologyWCDMA, RadioAccessTechnology.WCDMA],
    [CTRadioAccessTechnologyHSDPA, RadioAccessTechnology.HSDPA],
    [CTRadioAccessTechnologyHSUPA, RadioAccessTechnology.HSUPA],
    [CTRadioAccessTechnologyCDMA1x, RadioAccessTechnology.CDMA],
    [CTRadioAccessTechnologyCDMAEVDORev0, RadioAccessTechnology.CDMAEVDORev0],
    [CTRadioAccessTechnologyCDMAEVDORevA, RadioAccessTechnology.CDMAEVDORevA],
    [CTRadioAccessTechnologyCDMAEVDORevB, RadioAccessTechnology.CDMAEVDORevB],
    [CTRadioAccessTechnologyeHRPD, RadioAccessTechnology.EHRPD],
    [CTRadioAccessTechnologyLTE, RadioAccessTechnology.LTE],
  ]);

  private static deviceNameByCode = {
    "i386": "iPhone Simulator",
    "x86_64": "iPhone Simulator",
    "iPhone1,1": "iPhone",
    "iPhone1,2": "iPhone 3G",
    "iPhone2,1": "iPhone 3GS",
    "iPhone3,1": "iPhone 4",
    "iPhone3,2": "iPhone 4 GSM Rev A",
    "iPhone3,3": "iPhone 4 CDMA",
    "iPhone4,1": "iPhone 4S",
    "iPhone5,1": "iPhone 5 (GSM)",
    "iPhone5,2": "iPhone 5 (GSM+CDMA)",
    "iPhone5,3": "iPhone 5C (GSM)",
    "iPhone5,4": "iPhone 5C (Global)",
    "iPhone6,1": "iPhone 5S (GSM)",
    "iPhone6,2": "iPhone 5S (Global)",
    "iPhone7,1": "iPhone 6 Plus",
    "iPhone7,2": "iPhone 6",
    "iPhone8,1": "iPhone 6s",
    "iPhone8,2": "iPhone 6s Plus",
    "iPhone8,3": "iPhone SE (GSM+CDMA)",
    "iPhone8,4": "iPhone SE (GSM)",
    "iPhone9,1": "iPhone 7",
    "iPhone9,2": "iPhone 7 Plus",
    "iPhone9,3": "iPhone 7",
    "iPhone9,4": "iPhone 7 Plus",
    "iPhone10,1": "iPhone 8",
    "iPhone10,2": "iPhone 8 Plus",
    "iPhone10,3": "iPhone X Global",
    "iPhone10,4": "iPhone 8",
    "iPhone10,5": "iPhone 8 Plus",
    "iPhone10,6": "iPhone X GSM",
    "iPhone11,2": "iPhone XS",
    "iPhone11,4": "iPhone XS Max",
    "iPhone11,6": "iPhone XS Max Global",
    "iPhone11,8": "iPhone XR",

    "iPod1,1": "1st Gen iPod",
    "iPod2,1": "2nd Gen iPod",
    "iPod3,1": "3rd Gen iPod",
    "iPod4,1": "4th Gen iPod",
    "iPod5,1": "5th Gen iPod",
    "iPod7,1": "6th Gen iPod",

    "iPad1,1": "iPad",
    "iPad1,2": "iPad 3G",
    "iPad2,1": "2nd Gen iPad",
    "iPad2,2": "2nd Gen iPad GSM",
    "iPad2,3": "2nd Gen iPad CDMA",
    "iPad2,4": "2nd Gen iPad New Revision",
    "iPad3,1": "3rd Gen iPad",
    "iPad3,2": "3rd Gen iPad CDMA",
    "iPad3,3": "3rd Gen iPad GSM",
    "iPad2,5": "iPad mini",
    "iPad2,6": "iPad mini GSM+LTE",
    "iPad2,7": "iPad mini CDMA+LTE",
    "iPad3,4": "4th Gen iPad",
    "iPad3,5": "4th Gen iPad GSM+LTE",
    "iPad3,6": "4th Gen iPad CDMA+LTE",
    "iPad4,1": "iPad Air (WiFi)",
    "iPad4,2": "iPad Air (GSM+CDMA)",
    "iPad4,3": "1st Gen iPad Air (China)",
    "iPad4,4": "iPad mini Retina (WiFi)",
    "iPad4,5": "iPad mini Retina (GSM+CDMA)",
    "iPad4,6": "iPad mini Retina (China)",
    "iPad4,7": "iPad mini 3 (WiFi)",
    "iPad4,8": "iPad mini 3 (GSM+CDMA)",
    "iPad4,9": "iPad Mini 3 (China)",
    "iPad5,1": "iPad mini 4 (WiFi)",
    "iPad5,2": "iPad mini 4 (WiFi+Cellular)",
    "iPad5,3": "iPad Air 2 (WiFi)",
    "iPad5,4": "iPad Air 2 (Cellular)",
    "iPad6,3": "iPad Pro (9.7 inch, WiFi)",
    "iPad6,4": "iPad Pro (9.7 inch, WiFi+LTE)",
    "iPad6,7": "iPad Pro (12.9 inch, WiFi)",
    "iPad6,8": "iPad Pro (12.9 inch, WiFi+LTE)",
    "iPad6,11": "iPad (2017)",
    "iPad6,12": "iPad (2017)",
    "iPad7,1": "iPad Pro 2nd Gen (WiFi)",
    "iPad7,2": "iPad Pro 2nd Gen (WiFi+Cellular)",
    "iPad7,3": "iPad Pro 10.5-inch",
    "iPad7,4": "iPad Pro 10.5-inch",
    "iPad7,5": "iPad 6th Gen (WiFi)",
    "iPad7,6": "iPad 6th Gen (WiFi+Cellular)",
    "iPad8,1": "iPad Pro 3rd Gen (11 inch, WiFi)",
    "iPad8,2": "iPad Pro 3rd Gen (11 inch, 1TB, WiFi)",
    "iPad8,3": "iPad Pro 3rd Gen (11 inch, WiFi+Cellular)",
    "iPad8,4": "iPad Pro 3rd Gen (11 inch, 1TB, WiFi+Cellular)",
    "iPad8,5": "iPad Pro 3rd Gen (12.9 inch, WiFi)",
    "iPad8,6": "iPad Pro 3rd Gen (12.9 inch, 1TB, WiFi)",
    "iPad8,7": "iPad Pro 3rd Gen (12.9 inch, WiFi+Cellular)",
    "iPad8,8": "iPad Pro 3rd Gen (12.9 inch, 1TB, WiFi+Cellular)",

    "Watch1,1": "Apple Watch 38mm case",
    "Watch1,2": "Apple Watch 38mm case",
    "Watch2,6": "Apple Watch Series 1 38mm case",
    "Watch2,7": "Apple Watch Series 1 42mm case",
    "Watch2,3": "Apple Watch Series 2 38mm case",
    "Watch2,4": "Apple Watch Series 2 42mm case",
    "Watch3,1": "Apple Watch Series 3 38mm case (GPS+Cellular)",
    "Watch3,2": "Apple Watch Series 3 42mm case (GPS+Cellular)",
    "Watch3,3": "Apple Watch Series 3 38mm case (GPS)",
    "Watch3,4": "Apple Watch Series 3 42mm case (GPS)",
    "Watch4,1": "Apple Watch Series 4 40mm case (GPS)",
    "Watch4,2": "Apple Watch Series 4 44mm case (GPS)",
    "Watch4,3": "Apple Watch Series 4 40mm case (GPS+Cellular)",
    "Watch4,4": "Apple Watch Series 4 44mm case (GPS+Cellular)",
  };

  static totalMemory(): number {
    return NSProcessInfo.processInfo.physicalMemory;
  }

  static freeMemory(): number {
    const KERN_SUCCESS = 0;
    const HOST_VM_INFO = 2;
    const VM_STATISTICS_SIZE = 15 * 4; // sizeof(vm_statistics_data_t) * sizeof(integer_t);
    const hostSize = new interop.Reference(15);
    const hostPort = mach_host_self();

    const pageSize = new interop.Reference(0);
    host_page_size(hostPort, pageSize);

    const vmStat = interop.alloc(VM_STATISTICS_SIZE);

    let freeMem = -1;
    if (host_statistics(hostPort, HOST_VM_INFO, vmStat, hostSize) === KERN_SUCCESS) {
      const vmStatRef = new interop.Reference(vm_statistics, vmStat);
      freeMem = vmStatRef.value.free_count * pageSize.value;
    }
    return freeMem;
  }

  static totalStorageSpace(): number {
    let totalSpace = 0;
    const storage = DeviceInfo.fileSystemAttributes();
    if (storage) {
      const fileSystemSizeInBytes = storage.objectForKey(NSFileSystemSize);
      totalSpace = fileSystemSizeInBytes;
    }
    return totalSpace;
  }

  static freeStorageSpace(): number {
    let freeStorageSpace = -1;
    const sysVer = Number.parseInt(UIDevice.currentDevice.systemVersion);
    const sysName = UIDevice.currentDevice.systemName.toLocaleLowerCase();
    if ((sysName === "ios" && sysVer >= 11) || sysName !== "ios") {
      const fileURL = NSURL.alloc().initFileURLWithPath(NSHomeDirectory());
      const results = fileURL.resourceValuesForKeysError([NSURLVolumeAvailableCapacityForImportantUsageKey]);
      if (results) {
        freeStorageSpace = <number>results.objectForKey(NSURLVolumeAvailableCapacityForImportantUsageKey);
      }
    }
    else {
      const storage = DeviceInfo.fileSystemAttributes();
      if (storage) {
        const fileSystemSizeInBytes = storage.objectForKey(NSFileSystemFreeSize);
        freeStorageSpace = fileSystemSizeInBytes;
      }
    }
    return freeStorageSpace;
  }

  static totalExternalStorageSpace(): number {
    return null;
  }

  static freeExternalStorageSpace(): number {
    return null;
  }

  static deviceId(): string {
    let systemInfo = new interop.Reference<utsname>();
    uname(systemInfo);
    return NSString.stringWithUTF8String(systemInfo.value.machine).toString();
  }

  static deviceName(): string {
    const dId = DeviceInfo.deviceId();
    const deviceFound = dId in DeviceInfo.deviceNameByCode;
    if (!deviceFound) {
      if (dId.includes("iPod")) {
        return "iPod Touch";
      }
      else if (dId.includes("iPad")) {
        return "iPad";
      }
      else if (dId.includes("iPhone")) {
        return "iPhone";
      }
      else if (dId.includes("AppleTV")) {
        return "AppleTV";
      }
    }
    return DeviceInfo.deviceNameByCode[dId];
  }

  static deviceLocale(): string {
    return NSLocale.preferredLanguages.objectAtIndex(0);
  }

  static deviceCountry(): string {
    return NSLocale.currentLocale.objectForKey(NSLocaleCountryCode);
  }

  static timezone(): string {
    return NSTimeZone.localTimeZone.name;
  }

  static userAgent(): string {
    const webView = UIWebView.alloc().initWithFrame(CGRectZero);
    return webView.stringByEvaluatingJavaScriptFromString("navigator.userAgent");
  }

  static appName(): string {
    return NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleDisplayName");
  }

  static appVersion(): string {
    return NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
  }

  static bundleId(): string {
    return NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleIdentifier");
  }

  static bundleNumber(): string {
    return NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleVersion");
  }

  static systemManufacturer(): string {
    return "Apple";
  }

  static batteryLevel(): number {
    UIDevice.currentDevice.batteryMonitoringEnabled = true;
    const level = UIDevice.currentDevice.batteryLevel * 100;
    UIDevice.currentDevice.batteryMonitoringEnabled = false;
    return level;
  }

  static cellularServiceProviders(): Carrier[] {
    let carriers = [] as Carrier[];
    const telephonyInfo = CTTelephonyNetworkInfo.alloc().init();
    const sysVer = Number.parseInt(UIDevice.currentDevice.systemVersion);
    const sysName = UIDevice.currentDevice.systemName.toLocaleLowerCase();
    if (sysName === "ios" && sysVer >= 12) {
      const cellularProviders = telephonyInfo.serviceSubscriberCellularProviders.allValues;
      for (let i = 0; i < cellularProviders.count; i++) {
        let carrier = DeviceInfo.prepareCarrier(cellularProviders[i]);
        const ratValues = telephonyInfo.serviceCurrentRadioAccessTechnology.allValues;
        if (ratValues.count) {
          const rat = DeviceInfo.radioAccessTechnology.get(ratValues.objectAtIndex(0));
          carrier.networkType = rat ? rat : RadioAccessTechnology.UNKNOWN;
          carrier.generation = wirelessCellularGenerator(rat);
        }
        carriers.push(carrier);
      }
    } else {
      const cellularProvider = telephonyInfo.subscriberCellularProvider;
      if (cellularProvider) {
        let carrier = DeviceInfo.prepareCarrier(cellularProvider);
        const ratValues = telephonyInfo.serviceCurrentRadioAccessTechnology.allValues;
        if (ratValues.count) {
          const rat = DeviceInfo.radioAccessTechnology.get(ratValues.objectAtIndex(0));
          carrier.networkType = rat ? rat : RadioAccessTechnology.UNKNOWN;
          carrier.generation = wirelessCellularGenerator(rat);
        }
        carriers.push(carrier);
      }
    }
    return carriers;
  }

  static externalStoragePaths(): string[] {
    return [];
  }

  static storageVolumes(): StorageVolume[] {
    return [];
  }

  static wifiSSID(): string {
    const interfaces = CNCopySupportedInterfaces();
    if (interfaces.count) {
      const interfaceName = CFArrayGetValueAtIndex(interfaces, 0);
      const dict = CNCopyCurrentNetworkInfo(interfaceName as unknown as string);
      if (dict !== null && dict.count) {
        return dict.objectForKey(kCNNetworkInfoKeySSID);
      }
    }
    return "";
  }

  static isTablet(): boolean {
    return UIDevice.currentDevice.userInterfaceIdiom === UIUserInterfaceIdiom.Pad;
  }

  static is24Hour(): boolean {
    const format = NSDateFormatter.dateFormatFromTemplateOptionsLocale("j", 0, NSLocale.currentLocale);
    return format.includes("a") === false;
  }

  static isEmulator(): boolean {
    return DeviceInfo.deviceId() === "i386" || DeviceInfo.deviceId() === "x86_64";
  }

  static isBatteryCharging(): boolean {
    UIDevice.currentDevice.batteryMonitoringEnabled = true;
    const batteryStatus = UIDevice.currentDevice.batteryState;
    UIDevice.currentDevice.batteryMonitoringEnabled = false;
    return batteryStatus === UIDeviceBatteryState.Charging;
  }

  private static fileSystemAttributes() {
    const path = NSSearchPathForDirectoriesInDomains(
      NSSearchPathDirectory.DocumentDirectory,
      NSSearchPathDomainMask.UserDomainMask,
      true);

    return NSFileManager.defaultManager.
      attributesOfFileSystemForPathError(path.lastObject);
  }

  private static prepareCarrier(cellularProvider: CTCarrier) {
    let carrier = {} as Carrier;
    carrier.isoCountryCode = cellularProvider.isoCountryCode;
    carrier.mobileCountryCode = cellularProvider.mobileCountryCode;
    carrier.mobileNetworkCode = cellularProvider.mobileNetworkCode;

    const provider = networkProviderByMccMnc(carrier.mobileCountryCode,
      carrier.mobileNetworkCode);
    carrier.country = provider ? provider.country : "";
    carrier.countryCode = provider ? provider.country_code : "";
    carrier.displayName = provider ? provider.network : cellularProvider.carrierName;
    carrier.carrierName = cellularProvider.carrierName;
    return carrier;
  }
}
