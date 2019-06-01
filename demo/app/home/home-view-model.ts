const nativescript_dna_deviceinfo = require("nativescript-dna-deviceinfo");
const DeviceInfo = nativescript_dna_deviceinfo.DeviceInfo;

import { Observable } from 'tns-core-modules/data/observable';

export class HomeViewModel extends Observable {
    constructor() {
        setTimeout(()=> {
        console.log("Free memory: ", this.getSize(DeviceInfo.freeMemory()));
        console.log("Total memory: ", this.getSize(DeviceInfo.totalMemory()));
        console.log("Total storage space: ", this.getSize(DeviceInfo.totalStorageSpace()));
        console.log("Free storage space: ",this.getSize(DeviceInfo.freeStorageSpace()));
        console.log("Device id: ", DeviceInfo.deviceId());
        console.log("Device name: ",  DeviceInfo.deviceName());
        console.log("Device locale: ", DeviceInfo.deviceLocale());
        console.log("Device country: ", DeviceInfo.deviceCountry());
        console.log("Device timezone: ", DeviceInfo.timezone());
        console.log("Device user agent: ", DeviceInfo.userAgent());
        console.log("App name: ", DeviceInfo.appName());
        console.log("App version: ", DeviceInfo.appVersion());
        console.log("App bundle id: ", DeviceInfo.bundleId());
        console.log("App bundle number: ", DeviceInfo.bundleNumber());
        console.log("System manufacturer: ",  DeviceInfo.systemManufacturer());
        console.log("Is tablet: ", DeviceInfo.isTablet());
        console.log("Is 24 hour: ", DeviceInfo.is24Hour());
        console.log("Is emulator: ", DeviceInfo.isEmulator());
        }, 5000);
        super();
    }

    formatBytes (bytes, decimals) {
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
