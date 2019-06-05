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
    static isTablet(): boolean;
    static is24Hour(): boolean;
    static isEmulator(): boolean;
    static isBatteryCharging(): boolean;
}
