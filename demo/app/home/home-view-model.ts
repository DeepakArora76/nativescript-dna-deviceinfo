
import { EventData } from "@nativescript/core/data/observable";
import { requestPermissions, hasPermission } from 'nativescript-permissions';
import { DeviceInfo } from "nativescript-dna-deviceinfo"

import { Observable } from '@nativescript/core/data/observable';

export class HomeViewModel extends Observable {
    constructor() {
        super();
    }

    async showDeviceInfo(args: EventData) {
        // Ask for permission for iOS.
        if (DeviceInfo.systemManufacturer() === "Apple") {
            let lm = CLLocationManager.alloc().init();
            lm.requestWhenInUseAuthorization();
            lm.startUpdatingLocation();
        }

        console.log("Free memory: ", this.getSize(DeviceInfo.freeMemory()));
        console.log("Total memory: ", this.getSize(DeviceInfo.totalMemory()));
        console.log("Total storage space: ", this.getSize(DeviceInfo.totalStorageSpace()));
        console.log("Free storage space: ", this.getSize(DeviceInfo.freeStorageSpace()));
        console.log("Device id: ", DeviceInfo.deviceId());
        console.log("Device name: ", DeviceInfo.deviceName());
        console.log("Device locale: ", DeviceInfo.deviceLocale());
        console.log("Device country: ", DeviceInfo.deviceCountry());
        console.log("Device timezone: ", DeviceInfo.timezone());
        console.log("Device user agent: ", await DeviceInfo.userAgent().catch(error => console.log(error)));
        console.log("App name: ", DeviceInfo.appName());
        console.log("App version: ", DeviceInfo.appVersion());
        console.log("App bundle id: ", DeviceInfo.bundleId());
        console.log("App bundle number: ", DeviceInfo.bundleNumber());
        console.log("System manufacturer: ", DeviceInfo.systemManufacturer());
        console.log("Battery level: ", Math.round(DeviceInfo.batteryLevel()));
        console.log("Storage paths: ", DeviceInfo.externalStoragePaths());
        console.log("Storage volume info: ", DeviceInfo.storageVolumes());
        console.log("WiFi SSID: ", DeviceInfo.wifiSSID());
        console.log("Display metrics: ", DeviceInfo.displayMetrics());
        console.log("Is portrait orientation: ", DeviceInfo.isPortrait());
        console.log("Is tablet: ", DeviceInfo.isTablet());
        console.log("Is 24 hour: ", DeviceInfo.is24Hour());
        console.log("Is emulator: ", DeviceInfo.isEmulator());
        console.log("Is battery charing: ", DeviceInfo.isBatteryCharging());
        console.log("Is Location service enabled: ", await DeviceInfo.isLocationEnabled().catch(error => console.log(error)));
        console.log("Is Bluetooth enabled: ", await DeviceInfo.isBluetoothEnabled().catch(error => console.log(error)));

        if (DeviceInfo.systemManufacturer() !== "Apple") {
            if (hasPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION) &&
                hasPermission(android.Manifest.permission.READ_PHONE_STATE)) {
                const provider = DeviceInfo.cellularServiceProviders();
                console.log(provider);
            }

            else {
                requestPermissions([
                    android.Manifest.permission.ACCESS_COARSE_LOCATION,
                    android.Manifest.permission.READ_PHONE_STATE],
                    "I need permission").then(
                        () => {
                            const provider = DeviceInfo.cellularServiceProviders();
                            console.log(provider);
                        }
                    );
            }
        }
        else {
            const provider = DeviceInfo.cellularServiceProviders();
            console.log(provider);
        }
    }

    formatBytes(bytes, decimals) {
        if (bytes === 0) return '0 GB'
        if (isNaN(parseInt(bytes))) return bytes
        if (typeof bytes === 'string') bytes = parseInt(bytes)
        if (bytes === 0) return '0';
        const k = 1000;
        const dm = decimals + 1 || 3;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
    }

    getSize(bytes: number) {
        return this.formatBytes(bytes, 2);
    }
}
