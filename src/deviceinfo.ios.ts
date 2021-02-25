import {
  Carrier,
  DeviceInfoInterface,
  DisplayMetrics,
  RadioAccessTechnology,
  StorageVolume,
  wirelessCellularGenerator
} from './deviceinfo.interface';

import { networkProviderByMccMnc } from './network-provider';
import { round } from "./utility";

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

  // A big thanks goes to the maintainer of react native
  // https://github.com/react-native-device-info/react-native-device-info/blob/master/ios/RNDeviceInfo/RNDeviceInfo.m
  private static deviceNameByCode = {
    "i386": "iPhone Simulator",
    "x86_64": "iPhone Simulator",

    "iPod1,1": "iPod Touch", // (Original)
    "iPod2,1": "iPod Touch", // (Second Generation)
    "iPod3,1": "iPod Touch", // (Third Generation)
    "iPod4,1": "iPod Touch", // (Fourth Generation)
    "iPod5,1": "iPod Touch", // (Fifth Generation)
    "iPod7,1": "iPod Touch", // (Sixth Generation)
    "iPod9,1": "iPod Touch", // (Seventh Generation)

    "iPhone1,1": "iPhone", // (Original)
    "iPhone1,2": "iPhone 3G", // (3G)
    "iPhone2,1": "iPhone 3GS", // (3GS)
    "iPhone3,1": "iPhone 4", // (GSM)
    "iPhone3,2": "iPhone 4", // iPhone 4
    "iPhone3,3": "iPhone 4", // (CDMA/Verizon/Sprint)
    "iPhone4,1": "iPhone 4S", //
    "iPhone5,1": "iPhone 5", // (model A1428, AT&T/Canada)
    "iPhone5,2": "iPhone 5", // (model A1429, everything else)
    "iPhone5,3": "iPhone 5c", // (model A1456, A1532 | GSM)
    "iPhone5,4": "iPhone 5c", // (model A1507, A1516, A1526 (China), A1529 | Global)
    "iPhone6,1": "iPhone 5s", // (model A1433, A1533 | GSM)
    "iPhone6,2": "iPhone 5s", // (model A1457, A1518, A1528 (China), A1530 | Global)
    "iPhone7,1": "iPhone 6 Plus", //
    "iPhone7,2": "iPhone 6", //
    "iPhone8,1": "iPhone 6s", //
    "iPhone8,2": "iPhone 6s Plus", //
    "iPhone8,4": "iPhone SE", //
    "iPhone9,1": "iPhone 7", // (model A1660 | CDMA)
    "iPhone9,3": "iPhone 7", // (model A1778 | Global)
    "iPhone9,2": "iPhone 7 Plus", // (model A1661 | CDMA)
    "iPhone9,4": "iPhone 7 Plus", // (model A1784 | Global)
    "iPhone10,3": "iPhone X", // (model A1865, A1902)
    "iPhone10,6": "iPhone X", // (model A1901)
    "iPhone10,1": "iPhone 8", // (model A1863, A1906, A1907)
    "iPhone10,4": "iPhone 8", // (model A1905)
    "iPhone10,2": "iPhone 8 Plus", // (model A1864, A1898, A1899)
    "iPhone10,5": "iPhone 8 Plus", // (model A1897)
    "iPhone11,2": "iPhone XS", // (model A2097, A2098)
    "iPhone11,4": "iPhone XS Max", // (model A1921, A2103)
    "iPhone11,6": "iPhone XS Max", // (model A2104)
    "iPhone11,8": "iPhone XR", // (model A1882, A1719, A2105)
    "iPhone12,1": "iPhone 11",
    "iPhone12,3": "iPhone 11 Pro",
    "iPhone12,5": "iPhone 11 Pro Max",
    "iPhone13,1": "iPhone 12 mini",
    "iPhone13,2": "iPhone 12",
    "iPhone13,3": "iPhone 12 Pro",
    "iPhone13,4": "iPhone 12 Pro Max",
    "iPhone12,8": "iPhone SE", // (2nd Generation iPhone SE)

    "iPad1,1": "iPad", // (Original)
    "iPad2,1": "iPad 2", //
    "iPad2,2": "iPad 2", //
    "iPad2,3": "iPad 2", //
    "iPad2,4": "iPad 2", //
    "iPad2,5": "iPad Mini", // (Original)
    "iPad2,6": "iPad Mini", // (Original)
    "iPad2,7": "iPad Mini", // (Original)
    "iPad3,1": "iPad", // (3rd Generation)
    "iPad3,2": "iPad", // (3rd Generation)
    "iPad3,3": "iPad", // (3rd Generation)
    "iPad3,4": "iPad", // (4th Generation)
    "iPad3,5": "iPad", // (4th Generation)
    "iPad3,6": "iPad", // (4th Generation)
    "iPad4,1": "iPad Air", // 5th Generation iPad (iPad Air) - Wifi
    "iPad4,2": "iPad Air", // 5th Generation iPad (iPad Air) - Cellular
    "iPad4,3": "iPad Air", // 5th Generation iPad (iPad Air)
    "iPad4,4": "iPad Mini 2", // (2nd Generation iPad Mini - Wifi)
    "iPad4,5": "iPad Mini 2", // (2nd Generation iPad Mini - Cellular)
    "iPad4,6": "iPad Mini 2", // (2nd Generation iPad Mini)
    "iPad4,7": "iPad Mini 3", // (3rd Generation iPad Mini)
    "iPad4,8": "iPad Mini 3", // (3rd Generation iPad Mini)
    "iPad4,9": "iPad Mini 3", // (3rd Generation iPad Mini)
    "iPad5,1": "iPad Mini 4", // (4th Generation iPad Mini)
    "iPad5,2": "iPad Mini 4", // (4th Generation iPad Mini)
    "iPad5,3": "iPad Air 2", // 6th Generation iPad (iPad Air 2)
    "iPad5,4": "iPad Air 2", // 6th Generation iPad (iPad Air 2)
    "iPad6,3": "iPad Pro 9.7-inch", // iPad Pro 9.7-inch
    "iPad6,4": "iPad Pro 9.7-inch", // iPad Pro 9.7-inch
    "iPad6,7": "iPad Pro 12.9-inch", // iPad Pro 12.9-inch
    "iPad6,8": "iPad Pro 12.9-inch", // iPad Pro 12.9-inch
    "iPad6,11": "iPad (5th generation)", // Apple iPad 9.7 inch (5th generation) - WiFi
    "iPad6,12": "iPad (5th generation)", // Apple iPad 9.7 inch (5th generation) - WiFi + cellular
    "iPad7,1": "iPad Pro 12.9-inch", // 2nd Generation iPad Pro 12.5-inch - Wifi
    "iPad7,2": "iPad Pro 12.9-inch", // 2nd Generation iPad Pro 12.5-inch - Cellular
    "iPad7,3": "iPad Pro 10.5-inch", // iPad Pro 10.5-inch - Wifi
    "iPad7,4": "iPad Pro 10.5-inch", // iPad Pro 10.5-inch - Cellular
    "iPad7,5": "iPad (6th generation)", // iPad (6th generation) - Wifi
    "iPad7,6": "iPad (6th generation)", // iPad (6th generation) - Cellular
    "iPad7,11": "iPad (7th generation)", // iPad 10.2 inch (7th generation) - Wifi
    "iPad7,12": "iPad (7th generation)", // iPad 10.2 inch (7th generation) - Wifi + cellular
    "iPad8,1": "iPad Pro 11-inch (3rd generation)", // iPad Pro 11 inch (3rd generation) - Wifi
    "iPad8,2": "iPad Pro 11-inch (3rd generation)", // iPad Pro 11 inch (3rd generation) - 1TB - Wifi
    "iPad8,3": "iPad Pro 11-inch (3rd generation)", // iPad Pro 11 inch (3rd generation) - Wifi + cellular
    "iPad8,4": "iPad Pro 11-inch (3rd generation)", // iPad Pro 11 inch (3rd generation) - 1TB - Wifi + cellular
    "iPad8,5": "iPad Pro 12.9-inch (3rd generation)", // iPad Pro 12.9 inch (3rd generation) - Wifi
    "iPad8,6": "iPad Pro 12.9-inch (3rd generation)", // iPad Pro 12.9 inch (3rd generation) - 1TB - Wifi
    "iPad8,7": "iPad Pro 12.9-inch (3rd generation)", // iPad Pro 12.9 inch (3rd generation) - Wifi + cellular
    "iPad8,8": "iPad Pro 12.9-inch (3rd generation)", // iPad Pro 12.9 inch (3rd generation) - 1TB - Wifi + cellular
    "iPad11,1": "iPad Mini 5", // (5th Generation iPad Mini)
    "iPad11,2": "iPad Mini 5", // (5th Generation iPad Mini)
    "iPad11,3": "iPad Air (3rd generation)",
    "iPad11,4": "iPad Air (3rd generation)",

    "AppleTV2,1": "Apple TV", // Apple TV (2nd Generation)
    "AppleTV3,1": "Apple TV", // Apple TV (3rd Generation)
    "AppleTV3,2": "Apple TV", // Apple TV (3rd Generation - Rev A)
    "AppleTV5,3": "Apple TV", // Apple TV (4th Generation)
    "AppleTV6,2": "Apple TV 4K", // Apple TV 4K

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
    "Watch5,1": "Apple Watch Series 5 40mm case (GPS)",
    "Watch5,2": "Apple Watch Series 5 44mm case (GPS)",
    "Watch5,3": "Apple Watch Series 5 40mm case (GPS+Cellular)",
    "Watch5,4": "Apple Watch Series 5 44mm case (GPS+Cellular)",
    "Watch5,9": "Apple Watch SE 40mm case (GPS)",
    "Watch5,10": "Apple Watch SE 44mm case (GPS)",
    "Watch5,11": "Apple Watch SE 40mm case (GPS+Cellular)",
    "Watch5,12": "Apple Watch SE 44mm case (GPS+Cellular)",
    "Watch6,1": "Apple Watch Series 6 40mm case (GPS)",
    "Watch6,2": "Apple Watch Series 6 44mm case (GPS)",
    "Watch6,3": "Apple Watch Series 6 40mm case (GPS+Cellular)",
    "Watch6,4": "Apple Watch Series 6 44mm case (GPS+Cellular)"
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
    const _SYS_NAMELEN = 256;
    const utsnamePtr = interop.alloc(interop.sizeof(utsname));
    uname(utsnamePtr);

    const sysName = NSString.stringWithUTF8String(utsnamePtr.add(_SYS_NAMELEN * 0)).toString() // sysname
    const nodeName = NSString.stringWithUTF8String(utsnamePtr.add(_SYS_NAMELEN * 1)).toString() // nodename
    const release = NSString.stringWithUTF8String(utsnamePtr.add(_SYS_NAMELEN * 2)).toString() // release
    const version = NSString.stringWithUTF8String(utsnamePtr.add(_SYS_NAMELEN * 3)).toString() // version
    const machine = NSString.stringWithUTF8String(utsnamePtr.add(_SYS_NAMELEN * 4)).toString() // machine
    return machine;

    // const systemInfo =  new interop.Reference<utsname>();
    // uname(systemInfo);
    // // For some reason stringWithUTF8String is crashing! The systemInfo.value.machine
    // // contains the value. JS bytes array to string is possible.
    // const deviceId = NSString.stringWithUTF8String(systemInfo.value.machine).toString();
    // return deviceId;
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

  static userAgent(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const wkWebView = WKWebView.alloc().init();
      wkWebView.evaluateJavaScriptCompletionHandler("window.navigator.userAgent;", (result, error) => {
        if (error) {
          return reject(NSString.stringWithUTF8String(error.localizedDescription).toString());
        } else {
          return resolve(NSString.stringWithUTF8String(result).toString());
        }
      });
    });
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
    if (interfaces && interfaces.count) {
      const interfaceName = CFArrayGetValueAtIndex(interfaces, 0);
      const dict = CNCopyCurrentNetworkInfo(interfaceName as unknown as string);
      if (dict !== null && dict.count) {
        return dict.objectForKey(kCNNetworkInfoKeySSID);
      }
    }
    return "";
  }

  static displayMetrics(): DisplayMetrics {
    const nativeScale = UIScreen.mainScreen.nativeScale;
    let pixelPerInch = 0.0;
    if (UIDevice.currentDevice.userInterfaceIdiom === UIUserInterfaceIdiom.Phone) {
      pixelPerInch = 163 * nativeScale;
    }
    else if (UIDevice.currentDevice.userInterfaceIdiom === UIUserInterfaceIdiom.Pad) {
      pixelPerInch = 132 * nativeScale;
    }
    else {
      pixelPerInch = 160 * nativeScale;
    }

    let dm = {} as DisplayMetrics;
    dm.scale = nativeScale;
    dm.pixelPerInch = pixelPerInch;
    dm.widthInPixels = UIScreen.mainScreen.bounds.size.width * nativeScale;
    dm.heightInPixels = UIScreen.mainScreen.bounds.size.height * nativeScale;
    const vertical = dm.heightInPixels / pixelPerInch;
    const horizontal = dm.widthInPixels / pixelPerInch;
    const diagnoalInInches = Math.sqrt(Math.pow(horizontal, 2) + Math.pow(vertical, 2));
    dm.diagonalInInches = round(diagnoalInInches, 1);
    return dm;
  }

  static isPortrait(): boolean {
    return UIDevice.currentDevice.orientation === UIDeviceOrientation.Portrait ||
      UIDevice.currentDevice.orientation === UIDeviceOrientation.PortraitUpsideDown;
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

  static isLocationEnabled(): Promise<boolean> {
    return new Promise<boolean>((resolv) => {
      if (CLLocationManager.locationServicesEnabled()) {
        switch (CLLocationManager.authorizationStatus()) {
          case CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedWhenInUse:
          case CLAuthorizationStatus.kCLAuthorizationStatusAuthorizedAlways:
          case CLAuthorizationStatus.kCLAuthorizationStatusAuthorized:
            return resolv(true);
        }
      }
      resolv(false);
    });
  }

  static isBluetoothEnabled(): Promise<boolean> {
    return new Promise<boolean>((resolv) => {
      let bmDelegate = BluetoothManagerDelegate.new();
      CBCentralManager.alloc().initWithDelegateQueueOptions(
        bmDelegate.initWithResolverCallback(resolv),
        null,
        NSDictionary.dictionaryWithObjectForKey(
          NSNumber.numberWithInt(0),
          CBCentralManagerOptionShowPowerAlertKey));
    });
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

@NativeClass()
class BluetoothManagerDelegate extends NSObject implements CBCentralManagerDelegate {
  // Note: This ObjCProtocols is needed.
  public static ObjCProtocols = [CBCentralManagerDelegate];

  private resolve: any;

  static new(): BluetoothManagerDelegate {
    return <BluetoothManagerDelegate>super.new();
  }

  initWithResolverCallback(resolve: any) {
    this.resolve = resolve;
    return this;
  }

  centralManagerDidUpdateState(central: CBCentralManager): void {
    this.resolve(central.state === CBManagerState.PoweredOn);
  }
}
