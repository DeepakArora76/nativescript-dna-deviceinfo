
# NativeScript DNA Device Info

![nativescript-dna-deviceinfo](https://raw.githubusercontent.com/DeepakArora76/nativescript-dna-deviceinfo/master/dna-deviceinfo.png)

NativeScript plugin to acquire device info.

The plugin offers cross-platform, utility, APIs to retrieve or query device-related information. The utility APIs are available for iOS and Android platforms. 


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

- Notes for Android users:
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

### - cellularServiceProviders

Returns a list of GSM network providers, *Carrier*, in use by device. In absence of adequate permission, returns empty *Carrier* list.

```javascript
let carriers = DeviceInfo.cellularServiceProviders();
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

- Notes for Android users: 
  * If the **targetSdkVersion is 17**, a device with dual sim, the API returns an "active" carrier. Permission ACCESS_COARSE_LOCATION is needed.
  * If the **targetSdkVersion is >= 22**, a device with dual sim, the API returns both the carriers. Permission READ_PHONE_STATE is needed. To know more about the request permissions process, please visit the link [Request App Permissions](https://developer.android.com/training/permissions/requesting).

### - externalStoragePaths

Returns a list of paths for all mountable volumes (external storage cards, USB O-T-G). The empty list means that no mountable volumes found.

```javascript
DeviceInfo.externalStoragePaths();
```

### - storageVolumes

Returns a list of *StorageVolume*. An empty list means that no mountable volumes found.

```javascript
let storageVolumes = DeviceInfo.storageVolumes();
console.log(storageVolumes);
```

Below is the **StorageVolume** interface:

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

### - wifiSSID

Returns service set identifier(SSID) of a wireless local area network (WLAN). In absence of right permissions, returns an empty string.

```javascript
DeviceInfo.wifiSSID();
```

- Notes for Android users:
  * Permissions ACCESS_WIFI_STATE and ACCESS_FINE_LOCATION/ACCESS_COARSE_LOCATION are required.
  * Android version 9 (Pie) requires location service in enabled(ON) state alongside above-said permissions.
  * To know more about the request permissions process, please visit the link [Request App Permissions](https://developer.android.com/training/permissions/requesting).

- Notes for iOS users:
  * To use this API on iOS 12 and later, enable the Access WiFi Information.
  * To use this API on iOS 13 and later, enable the Access WiFi Information, and 
      * must also meet at least one of criteria below
        * Apps with permission to access location
        * Currently enabled VPN app
        * NEHotspotConfiguration (only Wi-Fi networks that the app configured)
  * Kindly visit the link [Access WiFi Information](https://developer.apple.com/account/ios/identifier/bundle) to enable it for your app with the id "nativescript.id" in package.json.
  * Also, add this to your App_Resources/iOS/app.entitlements (mind the name!)  file:
    ```xml
      <key>com.apple.developer.networking.wifi-info</key>
      <true/>
    ```
  * The demo app has this:
    ```xml
     <?xml version="1.0" encoding="UTF-8"?>
     <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/  PropertyList-1.0.dtd">
      <plist version="1.0">
        <dict>
          <key>com.apple.developer.networking.wifi-info</key>
            <true/>
          </dict>
      </plist>
    ```

### - displayMetrics

Returns *DisplayMetrics* of a device.

```javascript
DeviceInfo.displayMetrics();
```

Below is the **DisplayMetrics** interface:

```javascript
interface DisplayMetrics {
  scale: number;
  pixelPerInch: number;
  widthInPixels: number;
  heightInPixels: number;
  diagonalInInches: number;
}
```

- Notes for Android users:
  * A word of caution: *pixelPerInch* and *diagonalInInches* may be inaccurate and not matches to the device specs. 

### - isPortrait
Returns  'true' if a device is in portrait mode, otherwise 'false'.

```javascript
DeviceInfo.isPortrait();
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

### - isLocationEnabled

Depending on the state of Location Service and the app permission, returned Promise may resolve to 'true' or 'false'. In the absence of appropriate permission, rejected Promise is returned.

```javascript
DeviceInfo.isLocationEnabled().then(value => console.log(value))
                              .catch(error => console.log(error));
```

```javascript
async LocationServiceStatus() {
  const status = await DeviceInfo.isLocationEnabled().catch(error => console.log(error));
  console.log(status);
}
```

- Notes for Android users:
  * Permission ACCESS_FINE_LOCATION is required.


### - isBluetoothEnabled

Depending on the state of Bluetooth and the app permission, returned Promise may resolve to 'true' or 'false'. In the absence of appropriate permission, rejected Promise is returned.

```javascript
DeviceInfo.isBluetoothEnabled().then(value => console.log(value))
                               .catch(error => console.log(error));
```

```javascript
async PrintBluetoothStatus() {
  const status = await DeviceInfo.isBluetoothEnabled().catch(error => console.log(error));
  console.log(status);
}
```

- Note for Android users:
  * Permission BLUETOOTH is needed.



## APIs in Action

```javascript
  async printDeviceInfo() { 
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
    console.log("Storage volume info: ", DeviceInfo.storageVolumes());
    console.log("WiFi SSID: ", DeviceInfo.wifiSSID());
    console.log("Display metrics: ", DeviceInfo.displayMetrics());
    console.log("Is portrait orientation: ", DeviceInfo.isPortrait());
    console.log("Is tablet: ", DeviceInfo.isTablet());
    console.log("Is 24 hour: ", DeviceInfo.is24Hour());
    console.log("Is emulator: ", DeviceInfo.isEmulator());
    console.log("Is battery charing: ",  DeviceInfo.isBatteryCharging());
    console.log("Is Location service enabled: ", await DeviceInfo.isLocationEnabled()
                                                                 .catch(error => console.log(error)));
    console.log("Is Bluetooth enabled: ", await DeviceInfo.isBluetoothEnabled()
                                                          .catch(error => console.log(error)));
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


## Changelogs:
- 1.0.0: First release.
- 1.0.1: Minor document correction.
- 1.1.0: New APIs related to battery charging status and its charge level.
- 1.1.1: Updated document.
- 1.2.0: Added an API to retrieve Network Providers, Carriers, related information.
- 1.2.1: Removed unwanted dependencies.
- 1.3.0: Added externalStoragePaths API. Fixed crashes and compatibility issues with the Android platform.
- 1.4.0: Added storageVolumeInfo API.
- 2.0.0: Changed APIs name for storageVolumes & cellularServiceProviders.
- 2.1.0: Added an API to get service set identifier(SSID) of a wireless local area network (WLAN).
- 2.1.1: The documentation is updated.
- 2.1.2: Added the package nativescript-custom-entitlements to dev dependencies to the demo app.
- 2.1.3: Adjusted the license from Apache-2.0 to MIT.
- 2.2.0: Added an API to get a status of Bluetooth.
- 2.3.0: Added APIs to get device orientation and display metrics.
- 2.3.1: Updated Mobile Country Code and Mobile Network Code.
- 2.4.0: Added an API to get location service state.
- 2.4.1: Updated documentation.
- 2.4.2: Handled crash in the API *cellularServiceProviders* for the Android platform.
- 2.4.3: For iOS, extended the list of devices with Watch-5, iPhone 11(Pro and Max), iPad mini 5th Gen, and Apple Watch Series 5. For Android, support for AndroidX is added. Bumped up version of various packages.


## License

MIT license (see LICENSE file)
