import { Address, Carrier, StorageVolume, DisplayMetrics, RadioAccessTechnology, WCTGeneration } from './deviceinfo.interface';

export { RadioAccessTechnology, WCTGeneration };

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
  static userAgent(): Promise<string>;
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
  static wifiIpv4Address(): string;
  static cellularIpv4Address(): string;
  static dumpIpAddresses(): Address[];
  static audioVolumeLevel(): number;
  static setAudioVolumeLevel(level: number);
  static screenBrightnessLevel(): number;
  static setScreenBrightnessLevel(level: number);
  static isBluetoothHeadsetConnected(): boolean;
  static isMicAvailable(): boolean;
  static isBuiltInMicAvailable(): boolean;
  static isHeadsetMicAvailable(): boolean;
  static isPortrait(): boolean;
  static isTablet(): boolean;
  static is24Hour(): boolean;
  static isEmulator(): boolean;
  static isBatteryCharging(): boolean;
  static isLocationEnabled(): Promise<boolean>
  static isBluetoothEnabled(): Promise<boolean>;
}
