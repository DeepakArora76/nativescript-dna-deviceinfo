
# NativeScript DNA Device Info

![nativescript-dna-deviceinfo](https://raw.githubusercontent.com/DeepakArora76/nativescript-dna-deviceinfo/master/dna-deviceinfo.png)

NativeScript plugin to acquire device info. 

### Features

- Cross-platform APIs for Android and iOS.
- Offers APIs to obtain device related info.


## Installation

From the command prompt, go to your app's root folder and execute:

```javascript
tns plugin add nativescript-dna-deviceinfo
```
This command automatically installs the necessary files, as well as stores **nativescript-dna-deviceinfo** as a dependency in your project's package.json file.


## Import / require

Various device related utility APIs are accessible from the DeviceInfo class. To import the class, use one of the following forms:

TypeScript:
```javascript
import { DeviceInfo } from 'nativescript-dna-deviceinfo';
```
JavaScript:
```javascript
const nativescript_dna_deviceinfo = require("nativescript-dna-deviceinfo");
const DeviceInfo = nativescript_dna_deviceinfo.DeviceInfo;
```


## APIs

### - totalMemory

Retrieves total memory(RAM) size in bytes.

### - freeMemory

Retrieves available free memory(RAM) size in bytes.

### - totalStorageSpace

Retrieves total storage(internal) space in bytes.

### - freeStorageSpace

Retrieves free storage(internal) space in bytes.

### - deviceId

Retrieves device ID.

### - deviceName

Retrieves the device name.

### - deviceLocale

Retrieves the device configured locale.

### - deviceCountry

Retrieves the device country.

### - timezone

Retrieves the device time zone.

### - userAgent

Retrieves the device user agent.

### - appName

Retrieves the app name.

### - appVersion

Retrieves the app version.

### - bundleId

Retrieves the app bundle id.

### - bundleNumber

Retrieves the app bundle number.

### - systemManufacturer

Retrieves the device manufacturer.

### - isTablet

Returns 'true' if the device is tablet, otherwise 'false'.

### - is24Hour

Returns 'true' if the device configured to 24-hour clock, otherwise 'false'.

### - isEmulator

Returns 'true' if the app is running on emulator, otherwise 'false'.


## APIs in Action

```javascript
  printDeviceInfo() { 
    console.log("Free memory: ", formatBytes(DeviceInfo.freeMemory()));
    console.log("Total memory: ", formatBytes(DeviceInfo.totalMemory()));
    console.log("Total storage space: ", formatBytes(DeviceInfo.totalStorageSpace()));
    console.log("Free storage space: ",formatBytes(DeviceInfo.freeStorageSpace()));
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
```

## License

MIT license (see LICENSE file)
