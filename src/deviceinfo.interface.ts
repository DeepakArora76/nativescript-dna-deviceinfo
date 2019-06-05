export interface DeviceInfoInterface {
  totalMemory(): number;
  freeMemory(): number;
  totalStorageSpace(): number;
  freeStorageSpace(): number;
  deviceId(): string;
  deviceName(): string;
  deviceLocale(): string;
  deviceCountry(): string;
  timezone(): string;
  userAgent(): string;
  appName(): string;
  appVersion(): string;
  bundleId(): string;
  bundleNumber(): string;
  systemManufacturer(): string;
  batteryLevel(): number;
  isTablet(): boolean;
  is24Hour(): boolean;
  isEmulator(): boolean;
  isBatteryCharging(): boolean;
}