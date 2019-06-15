import {RadioAccessTechnology, WCTGeneration} from "./index.d";

export {RadioAccessTechnology, WCTGeneration};

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
  cellularServiceProvider(): Carrier[];
  isTablet(): boolean;
  is24Hour(): boolean;
  isEmulator(): boolean;
  isBatteryCharging(): boolean;
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
