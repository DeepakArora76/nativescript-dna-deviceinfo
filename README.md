
# NativeScript DNA Device Info

![nativescript-dna-deviceinfo](https://raw.githubusercontent.com/DeepakArora76/nativescript-dna-deviceinfo/master/dna-deviceinfo.png)

NativeScript plugin to acquire device info.

The plugin offers cross-platform, utility, APIs to retrieve or query device-related information. The utility APIs are available for iOS and Android platforms.

Kindly visit [typescript demo](https://github.com/DeepakArora76/nativescript-dna-deviceinfo/tree/master/demo) or [js demo](https://github.com/DeepakArora76/JSDeviceInfoDemo.git) repository for practical implementation guidance and hints.

The [Changelogs](#Changelogs) selection is located towards the end of the document.

I welcome an appreciation email with suggestions and feedback. It will encourage me to provide new APIs and support.
My email-id is [Deepak Arora](mailto:deepak.arora76@gmail.com?subject=nativescript-dna-deviceinfo). Enjoy and I will be looking forward to your valuable feedback.


## Installation

From the command prompt, go to your app's root folder and execute:

```javascript
tns plugin add nativescript-dna-deviceinfo
```
This command automatically installs the necessary files, as well as stores **nativescript-dna-deviceinfo** as a dependency in your project's package.json file.


## Import / require

Various device-related APIs are accessible from the DeviceInfo class. To import the class, use one of the following forms:

TypeScript:
```javascript
import { DeviceInfo } from "nativescript-dna-deviceinfo";
```
JavaScript:
```javascript
const nativescript_dna_deviceinfo = require("nativescript-dna-deviceinfo");
const DeviceInfo = nativescript_dna_deviceinfo.DeviceInfo;
```


## APIs
Below is the list of APIs with their supported platforms. 

Kindly visit [typescript demo](https://github.com/DeepakArora76/nativescript-dna-deviceinfo/tree/master/demo) or [js demo](https://github.com/DeepakArora76/JSDeviceInfoDemo.git) repository for practical implementation guidance and hints.
      
| API                                                          | Return Type            | iOS   | Android   |
| -------------------------------------------------------------| -----------------------|:-----:|:---------:|
| [totalMemory](#totalMemory)                                  | number                 |   +   |     +     |
| [freeMemory](#freeMemory)                                    | number                 |   +   |     +     |
| [totalStorageSpace](#totalStorageSpace)                      | number                 |   +   |     +     |
| [freeStorageSpace](#freeStorageSpace)                        | number                 |   +   |     +     |
| [deviceId](#deviceId)                                        | string                 |   +   |     +     |
| [deviceName](#deviceName)                                    | string                 |   +   |     +     |
| [deviceLocale](#deviceLocale)                                | string                 |   +   |     +     |
| [deviceCountry](#deviceCountry)                              | string                 |   +   |     +     |
| [timezone](#timezone)                                        | string                 |   +   |     +     |
| [userAgent](#userAgent)                                      | Promise<string>        |   +   |     +     |
| [appName](#appName)                                          | string                 |   +   |     +     |
| [appVersion](#appVersion)                                    | string                 |   +   |     +     |
| [bundleId](#bundleId)                                        | string                 |   +   |     +     |
| [bundleNumber](#bundleNumber)                                | string                 |   +   |     -     |
| [systemManufacturer](#systemManufacturer)                    | string                 |   +   |     +     |
| [batteryLevel](#batteryLevel)                                | number                 |   +   |     +     |
| [cellularServiceProviders](#cellularServiceProviders)        | Carrier[]              |   +   |     +     |
| [externalStoragePaths](#externalStoragePaths)                | string[]               |   -   |     +     |
| [storageVolumes](#storageVolumes)                            | StorageVolume[]        |   -   |     +     |
| [wifiSSID](#wifiSSID)                                        | string                 |   +   |     +     |
| [displayMetrics](#displayMetrics)                            | DisplayMetrics         |   +   |     +     |
| [wifiIpv4Address](#wifiIpv4Address)                          | string                 |   +   |     +     |
| [cellularIpv4Address](#cellularIpv4Address)                  | string                 |   +   |     +     |
| [dumpIpAddresses](#dumpIpAddresses)                          | Address[]              |   +   |     +     |
| [audioVolumeLevel](#audioVolumeLevel)                        | number                 |   +   |     +     |
| [setAudioVolumeLevel](#setAudioVolumeLevel)                  | void                   |   +   |     +     |
| [screenBrightnessLevel](#screenBrightnessLevel)              | number                 |   +   |     +     |
| [setScreenBrightnessLevel](#setScreenBrightnessLevel)        | void                   |   +   |     +     |
| [isBluetoothHeadsetConnected](#isBluetoothHeadsetConnected)  | boolean                |   +   |     +     |
| [isMicAvailable](#isMicAvailable)                            | boolean                |   +   |     +     |
| [isPortrait](#isPortrait)                                    | boolean                |   +   |     +     |
| [isTablet](#isTablet)                                        | boolean                |   +   |     +     |
| [is24Hour](#is24Hour)                                        | boolean                |   +   |     +     |
| [isEmulator](#isEmulator)                                    | boolean                |   +   |     +     |
| [isBatteryCharging](#isBatteryCharging)                      | boolean                |   +   |     +     |
| [isLocationEnabled](#isLocationEnabled)                      | Promise<boolean>       |   +   |     +     |
| [isBluetoothEnabled](#isBluetoothEnabled)                    | Promise<boolean>       |   +   |     +     |


Each of the above APIs is described in detail along with their platform requirements where it makes sense.

### totalMemory

Returns total memory(RAM) size of a device in bytes.

```javascript
DeviceInfo.totalMemory();
```

### freeMemory

Returns free memory(RAM) size of a device in bytes.

```javascript
DeviceInfo.freeMemory();
```

### totalStorageSpace

Returns total storage(internal) space of a device in bytes.

```javascript
DeviceInfo.totalStorageSpace();
```

### freeStorageSpace

Returns free storage(internal) space of a device in bytes.

```javascript
DeviceInfo.freeStorageSpace();
```

### deviceId

Returns a device ID.

```javascript
DeviceInfo.deviceId();
```

### deviceName

Returns a device name.

```javascript
DeviceInfo.deviceName();
```

- Notes for Android users:
  * Permission BLUETOOTH is needed.

### deviceLocale

Returns the locale of a device.

```javascript
DeviceInfo.deviceLocale();
```

### deviceCountry

Returns the device country.

```javascript
DeviceInfo.deviceCountry();
```

### timezone

Returns the time zone of a device.

```javascript
DeviceInfo.timezone();
```

### userAgent

Returns Promise which resolves to 'user agent' if fetched successfully, otherwise 'error'.

```javascript
DeviceInfo.userAgent();
```

### appName

Returns an app name.

```javascript
DeviceInfo.appName();
```

### appVersion

Returns an app version.

```javascript
DeviceInfo.appVersion();
```

### bundleId

Returns an app bundle id.

```javascript
DeviceInfo.bundleId();
```

### bundleNumber

Returns an app bundle number.

```javascript
DeviceInfo.bundleNumber();
```

### systemManufacturer

Returns a device manufacturer.

```javascript
DeviceInfo.systemManufacturer();
```

### batteryLevel

Returns the charge level of a device battery.

```javascript
DeviceInfo.batteryLevel();
```

### cellularServiceProviders

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

### externalStoragePaths

Returns a list of paths for all mountable volumes (external storage cards, USB O-T-G). The empty list means that no mountable volumes found.

```javascript
DeviceInfo.externalStoragePaths();
```

### storageVolumes

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

### wifiSSID

Returns service set identifier(SSID) of a wireless local area network (WLAN). In absence of right permissions, returns an empty string.

```javascript
DeviceInfo.wifiSSID();
```

- Notes for Android users:
  * Permissions ACCESS_WIFI_STATE and ACCESS_FINE_LOCATION/ACCESS_COARSE_LOCATION are required.
  * Android version 9 (Pie) requires location service in enabled(ON) state alongside above-said permissions.
  * To know more about the request permissions process, please visit the link [Request App Permissions](https://developer.android.com/training/permissions/requesting).

- Notes for iOS users:
  * To use this API on iOS 12 and earlier, enable the Access WiFi Information.
  * The API for iOS 13 and above uses NEHotspotHelper which requires "com.apple.developer.networking.HotspotHelper" entitlement by Apple.
  * To use this API on iOS 13 and above, enable the Access WiFi Information, and
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

### displayMetrics

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

### wifiIpv4Address

Returns WiFi IPv4 address.

```javascript
DeviceInfo.wifiIpv4Address();
```

- Notes for Android users:
  * Make sure that the permissions *android.permission.INTERNET*, *android.permission.ACCESS_NETWORK_STATE*, and *android.permission.ACCESS_WIFI_STATE* are in place in AndroidManifest.xml and in code too.

### cellularIpv4Address

Returns cellular IPv4 address.

```javascript
DeviceInfo.cellularIpv4Address();
```

- Notes for Android users:
  * Make sure that the permissions *android.permission.INTERNET*, *android.permission.ACCESS_NETWORK_STATE*, and *android.permission.ACCESS_WIFI_STATE* are in place in AndroidManifest.xml and in code too.

### dumpIpAddresses

Returns *Address[]*, which is a collection of IPv4 and IPv6 addresses that a device is equipped with.

```javascript
DeviceInfo.dumpIpAddresses();
```

- Notes for Android users:
  * Make sure that the permissions *android.permission.INTERNET*, *android.permission.ACCESS_NETWORK_STATE*, and *android.permission.ACCESS_WIFI_STATE* are in place in AndroidManifest.xml and in code too.

### audioVolumeLevel

Returns the audio volume level as a scalar value from 0 to 100.

```javascript
DeviceInfo.audioVolumeLevel();
```

### setAudioVolumeLevel

Sets the audio volume level. The level should be a scalar value from 0 and 100.

```javascript
DeviceInfo.setAudioVolumeLevel(50);
```

### screenBrightnessLevel

Returns the screen brightness level as a scalar value from 0 to 10.

```javascript
DeviceInfo.screenBrightnessLevel();
```
- Notes for Android users:
  * Make sure that the permissions *android.permission.WRITE_SETTINGS* is in place in AndroidManifest.xml and in code too

### setScreenBrightnessLevel

Sets the screen brightness level. The level should be a scalar value from 0 and 10.

```javascript
DeviceInfo.setScreenBrightnessLevel(0.8);
```

- Notes for Android users:
  * Make sure that the permissions *android.permission.WRITE_SETTINGS* is in place in AndroidManifest.xml and in code too

### isBluetoothHeadsetConnected

Returns 'true' if a bluetooth headset is connected with the device, otherwise 'false'.

```javascript
DeviceInfo.isBluetoothHeadsetConnected();
```

- Note for Android users:
  * Permission BLUETOOTH is needed.

### isMicAvailable

Returns 'true' if a mic, whether built-in or external, is available, otherwise 'false'.

```javascript
DeviceInfo.isMicAvailable();
```

### isPortrait
Returns 'true' if a device is in portrait mode, otherwise 'false'.

```javascript
DeviceInfo.isPortrait();
```

### isTablet

Returns 'true' if a device is a tablet, otherwise 'false'.

```javascript
DeviceInfo.isTablet();
```

### is24Hour

Returns 'true' if a device configured to a 24-hour clock, otherwise 'false'.

```javascript
DeviceInfo.is24Hour();
```

### isEmulator

Returns 'true' if an app is running on an emulator, otherwise 'false'.

```javascript
DeviceInfo.isEmulator();
```

### isBatteryCharging

Returns 'true' if a device is plugged in and charging, otherwise  'false'.

```javascript
DeviceInfo.isBatteryCharging();
```

### isLocationEnabled

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


### isBluetoothEnabled

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
    console.log("Free memory: ", getSize(DeviceInfo.freeMemory()));
    console.log("Total memory: ", getSize(DeviceInfo.totalMemory()));
    console.log("Total storage space: ", getSize(DeviceInfo.totalStorageSpace()));
    console.log("Free storage space: ", getSize(DeviceInfo.freeStorageSpace()));
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
    return formatBytes(bytes, 2);
  }
```


## Changelogs:
- 3.7.0: Bumped up various packages version. Added APIs to set and get screen brightness level. Updated Apple mobile device types with iPad Pro 11 inch and 12.9 inch.
- 3.6.1: Switch to webpack 3.0.0 version due to some security warnings.
- 3.6.0: Introducing basic audio management APIs for Android and iOS. For Andriod, memory-related APIs are updated to use non-depreciated system APIs.
- 3.5.0: Fixed runtime errors related to "NativeClass is not defined" observed on NativeScript Version 7 apps. The fix will likely benefit iOS apps.
- 3.4.0: Added "dumpIpAddresses" API. Changed "wifiIpv4Address" and "cellularIpv4Address" to return an IPv4 address string, and their Android implementation is revised.
- 3.3.1: Fixed a crash related to the retrieval of wifi SSID on iOS 13.0 version and above.
- 3.3.0: Added "wifiIpv4Address" and "cellularIpv4Address" APIs for iOS and Android. Fixed issues related to Bluetooth detection for Android.
- 3.2.1: Updated Apple's mobile device codes types a.k.a. machine ids (e.g. `iPhone1,1`, `Watch1,1`, etc.) and their matching product names.
- 3.2.0: The API "userAgent" is modified to return Promise. iOS implementation of it uses WKWebView.
- 3.1.0: Tested on iOS devices, software version 14.2.1. Fixed issues around the API "deviceId" on iOS.
- 3.0.0: Upgraded to NativeScript 7.0 version. **Note**: The plugin is not tested on iOS and Android devices.
- 2.4.3: For iOS, extended the list of devices with Watch-5, iPhone 11(Pro and Max), iPad mini 5th Gen, and Apple Watch Series 5. For Android, support for AndroidX is added. Bumped up version of various packages.
- 2.4.2: Handled crash in the API *cellularServiceProviders* for the Android platform.
- 2.4.1: Updated documentation.
- 2.4.0: Added an API to get location service state.
- 2.3.1: Updated Mobile Country Code and Mobile Network Code.
- 2.3.0: Added APIs to get device orientation and display metrics.
- 2.2.0: Added an API to get the status of Bluetooth.
- 2.1.3: Adjusted the license from Apache-2.0 to MIT.
- 2.1.2: Added the package nativescript-custom-entitlements to dev dependencies to the demo app.
- 2.1.1: The documentation is updated.
- 2.1.0: Added an API to get the service set identifier(SSID) of a wireless local area network (WLAN).
- 2.0.0: Changed APIs name for storageVolumes & cellularServiceProviders.
- 1.4.0: Added storageVolumeInfo API.
- 1.3.0: Added externalStoragePaths API. Fixed crashes and compatibility issues with the Android platform.
- 1.2.1: Removed unwanted dependencies.
- 1.2.0: Added an API to retrieve Network Providers, Carriers, related information.
- 1.1.1: Updated document.
- 1.1.0: New APIs related to battery charging status and its charge level.
- 1.0.1: Minor document correction.
- 1.0.0: First release.


## License

MIT license (see LICENSE file)
