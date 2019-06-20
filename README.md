
# NativeScript DNA Device Info

![nativescript-dna-deviceinfo](https://raw.githubusercontent.com/DeepakArora76/nativescript-dna-deviceinfo/master/dna-deviceinfo.png)

NativeScript plugin to acquire device info.


## Features

- Cross-platform APIs for Android and iOS.
- Offers APIs to obtain device related info.


## Changelogs:
- 1.0.0: First release.
- 1.0.1: Minor document correction.
- 1.1.0: New APIs related to battery charging status and its charge level.
- 1.1.1: Updated document.
- 1.2.0: Added an API to retrieve Network Providers, Carriers, related information.
- 1.2.1: Removed unwanted dependencies.
- 1.3.0: Added externalStoragePaths API. Fixed crashes and compatibility issues with the Android platform.
- 1.4.0: Added storageVolumeInfo API.


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

Returns total memory(RAM) size of a device in bytes.

```javascript
DeviceInfo.totalMemory();
```

### - freeMemory

Returns free memory(RAM) size of a device in bytes.

```javascript
DeviceInfo.freeMemory();
```

### - totalStorageSpace

Returns total storage(internal) space of a device in bytes.

```javascript
DeviceInfo.totalStorageSpace();
```

### - freeStorageSpace

Returns free storage(internal) space of a device in bytes.

```javascript
DeviceInfo.freeStorageSpace();
```

### - deviceId

Returns a device ID.

```javascript
DeviceInfo.deviceId();
```

### - deviceName

Returns a device name.

```javascript
DeviceInfo.deviceName();
```

- Note for Android users:
  * Permission BLUETOOTH is needed.

### - deviceLocale

Returns the locale of a device.

```javascript
DeviceInfo.deviceLocale();
```

### - deviceCountry

Returns the device country.

```javascript
DeviceInfo.deviceCountry();
```

### - timezone

Returns the time zone of a device.

```javascript
DeviceInfo.timezone();
```

### - userAgent

Returns the user agent string of a device.

```javascript
DeviceInfo.userAgent();
```

### - appName

Returns an app name.

```javascript
DeviceInfo.appName();
```

### - appVersion

Returns an app version.

```javascript
DeviceInfo.appVersion();
```

### - bundleId

Returns an app bundle id.

```javascript
DeviceInfo.bundleId();
```

### - bundleNumber

Returns an app bundle number.

```javascript
DeviceInfo.bundleNumber();
```

### - systemManufacturer

Returns a device manufacturer.

```javascript
DeviceInfo.systemManufacturer();
```

### - batteryLevel

Returns the charge level of a device battery.

```javascript
DeviceInfo.batteryLevel();
```

### - isTablet

Returns 'true' if a device is a tablet, otherwise 'false'.

```javascript
DeviceInfo.isTablet();
```

### - is24Hour

Returns 'true' if a device configured to a 24-hour clock, otherwise 'false'.

```javascript
DeviceInfo.is24Hour();
```

### - isEmulator

Returns 'true' if an app is running on an emulator, otherwise 'false'.

```javascript
DeviceInfo.isEmulator();
```

### - isBatteryCharging

Returns 'true' if a device is plugged in and charging, otherwise  'false'.

```javascript
DeviceInfo.isBatteryCharging();
```

### - cellularServiceProvider

Returns a list of GSM network providers, *Carrier*, of a device is equipped with.

```javascript
let carriers = DeviceInfo.cellularServiceProvider();
console.log(carriers);
```

Below is the **Carrier** interface:

```javascript
interface Carrier {
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
```

Besides other helpful information returned from the API, it can be used to know whether the device has a fast internet connection or not.

- Note for Android users: 
  * If the **targetSdkVersion is 17**, a device with dual sim, the API returns an "active" carrier. Permission ACCESS_COARSE_LOCATION is needed.
  * If the **targetSdkVersion is >= 22**, a device with dual sim, the API returns both the carriers. Permission READ_PHONE_STATE is needed. To know more about the request permissions process, please visit the link [Request App Permissions](https://developer.android.com/training/permissions/requesting).

### - externalStoragePaths

Returns a list of paths for all mountable volumes (external storage cards, USB O-T-G). The empty list means that no mountable volumes found.

```javascript
DeviceInfo.externalStoragePaths();
```

### - storageVolumeInfo

Returns a list of *StorageVolume*. An empty list means that no mountable volumes found.

```javascript
let storageVolumes = DeviceInfo.storageVolumeInfo();
console.log(storageVolumes);
```

Below is **StorageVolume** interface:

```javascript
interface StorageVolume {
  path: string;
  totalSize: number;
  availableSize: number;
  lowBytesLimit: number;
  fullBytesLimit: number;
  description: string;
  isRemovableStorage: boolean;
  isAllowMassStorage: boolean;
  isEmulated: boolean;
  isPrimary: boolean;
}
```


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
    console.log("Battery level: ",  Math.round(DeviceInfo.batteryLevel()));
    console.log("Storage paths: ", DeviceInfo.externalStoragePaths());
    console.log("Is tablet: ", DeviceInfo.isTablet());
    console.log("Is 24 hour: ", DeviceInfo.is24Hour());
    console.log("Is emulator: ", DeviceInfo.isEmulator());
    console.log("Is battery charing: ",  DeviceInfo.isBatteryCharging());
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
