import { RadioAccessTechnology, WCTGeneration } from "./index.d";

export { RadioAccessTechnology, WCTGeneration };

export interface Carrier {
  carrierName: string;
  displayName: string;
  country: string;
  mobileCountryCode: string;
  isoCountryCode: string;
  countryCode: string;
  mobileNetworkCode: string;
  generation: WCTGeneration; // Wireless Cellular Technology
  networkType: RadioAccessTechnology;
}

export interface DisplayMetrics {
  scale: number;
  pixelPerInch: number;
  widthInPixels: number;
  heightInPixels: number;
  diagonalInInches: number;
}

export interface StorageVolume {
  // Path of the mountable volume
  path: string;

  // Total size of the mountable volume in bytes.
  totalSize: number;

  // Available size of the mountable volume in bytes.
  availableSize: number;

  // The number of available bytes at which the given path is considered.
  // running low on storage.
  lowBytesLimit: number;

  // The number of available bytes at which the given path is considered full.
  fullBytesLimit: number;

  // A user-visible description of the volume.
  description: string;

  // True if the volume is removable.
  isRemovableStorage: boolean;

  // True if this volume can be shared via USB mass storage.
  isAllowMassStorage: boolean;

  // True if the volume is emulated.
  isEmulated: boolean;

  // True if the volume is the primary shared/external storage
  isPrimary: boolean;
}

export interface DeviceInfoInterface {
  // Returns total memory(RAM) size of a device in bytes.
  totalMemory(): number;

  // Returns free memory(RAM) size of a device in bytes.
  freeMemory(): number;

  // Returns total storage(internal) space of a device in bytes.
  totalStorageSpace(): number;

  // Returns free storage(internal) space of a device in bytes.
  freeStorageSpace(): number;

  // Returns a device ID.
  deviceId(): string;

  // Returns a device name.
  deviceName(): string;

  // Returns the locale of a device.
  deviceLocale(): string;

  // Returns the device country.
  deviceCountry(): string;

  // Returns the time zone of a device.
  timezone(): string;

  // Returns the user agent string of a device.
  userAgent(): string;

  // Returns an app name.
  appName(): string;

  // Returns an app version.
  appVersion(): string;

  // Returns an app bundle id.
  bundleId(): string;

  // Returns an app bundle number.
  bundleNumber(): string;

  // Returns a device manufacturer.
  systemManufacturer(): string;

  // Returns the charge level of a device battery.
  batteryLevel(): number;

  // Returns a list of GSM network providers, carriers, of a device is equipped with.
  cellularServiceProviders(): Carrier[];

  // Returns list of paths for all mountable volumes.
  externalStoragePaths(): string[];

  // Returns a list of Storage
  storageVolumes(): StorageVolume[];

  // Returns WiFi SSID
  wifiSSID(): string;

  // Returns display metrics of a device.
  displayMetrics(): DisplayMetrics;

  // Returns  'true' if a device is in portrait mode, otherwise 'false'.
  isPortrait(): boolean;

  // Returns 'true' if a device is a tablet, otherwise 'false'.
  isTablet(): boolean;

  // Returns 'true' if a device configured to a 24-hour clock, otherwise 'false'.
  is24Hour(): boolean;

  // Returns 'true' if an app is running on an emulator, otherwise 'false'.
  isEmulator(): boolean;

  // Returns 'true' if a device is plugged in and charging, otherwise 'false'.
  isBatteryCharging(): boolean;

  // Returns Promise which resolves to 'true' if location service is enabled, otherwise 'false'.
  isLocationEnabled(): Promise<boolean>;

  // Returns Promise which resolves to 'true' if Bluetooth is the ON state, otherwise false.
  isBluetoothEnabled(): Promise<boolean>;
}

export function wirelessCellularGenerator(rat: RadioAccessTechnology): WCTGeneration {
  switch (rat) {
    case RadioAccessTechnology.CDMA:
    case RadioAccessTechnology.GPRS:
    case RadioAccessTechnology.EDGE:
    case RadioAccessTechnology.IDEN:
      return WCTGeneration._2G;

    case RadioAccessTechnology.CDMAEVDORev0:
    case RadioAccessTechnology.CDMAEVDORevA:
    case RadioAccessTechnology.CDMAEVDORevB:
    case RadioAccessTechnology.WCDMA:
    case RadioAccessTechnology.HSDPA:
    case RadioAccessTechnology.HSUPA:
    case RadioAccessTechnology.HSPAP:
    case RadioAccessTechnology.HSPA:
    case RadioAccessTechnology.EHRPD:
    case RadioAccessTechnology.UMTS:
      return WCTGeneration._3G;

    case RadioAccessTechnology.IWLAN:
    case RadioAccessTechnology.LTE:
      return WCTGeneration._4G;

    case RadioAccessTechnology.NR:
      return WCTGeneration._5G;

    default:
      return WCTGeneration._UNKNOWN;
  }
}
