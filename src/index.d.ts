import { Carrier, StorageVolume, DisplayMetrics } from './deviceinfo.interface';

export const enum RadioAccessTechnology {
  UNKNOWN,
  CDMA,
  CDMAEVDORev0,
  CDMAEVDORevA,
  CDMAEVDORevB,
  EDGE,
  EHRPD,
  GPRS,
  HSPA,
  HSDPA,
  HSPAP,
  HSUPA,
  NR,
  IDEN,
  IWLAN,
  UMTS,
  LTE,
  WCDMA,
}

export const enum WCTGeneration {
  _UNKNOWN = "UnKnown",
  _2G = "2G",
  _3G = "3G",
  _4G = "4G",
  _5G = "5G"
}

export declare function staticDecorator<T>(): (constructor: T) => void;
export declare class DeviceInfo {
  static totalMemory(): number;
  static freeMemory(): number;
  static totalStorageSpace(): number;
  static freeStorageSpace(): number;
  static deviceId(): string;
  static deviceName(): string;
  static deviceLocale(): string;
  static deviceCountry(): string;
  static timezone(): string;
  static userAgent(): string;
  static appName(): string;
  static appVersion(): string;
  static bundleId(): string;
  static bundleNumber(): string;
  static systemManufacturer(): string;
  static batteryLevel(): number;
  static cellularServiceProviders(): Carrier[];
  static externalStoragePaths(): string[];
  static storageVolumes(): StorageVolume[];
  static wifiSSID(): string;
  static displayMetrics(): DisplayMetrics;
  static isPortrait(): boolean;
  static isTablet(): boolean;
  static is24Hour(): boolean;
  static isEmulator(): boolean;
  static isBatteryCharging(): boolean;
  static isLocationEnabled(): Promise<boolean>
  static isBluetoothEnabled(): Promise<boolean>;
}
