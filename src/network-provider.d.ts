export interface NetworkProviderInterface {
    network: string;
    country: string;
    mcc: string;
    iso: string;
    country_code: string;
    mnc: string;
}
export declare function networkProviderByMccMnc(mcc: string, mnc: string): NetworkProviderInterface;
export declare function networkProviderByMcc(mcc: string): NetworkProviderInterface;
export declare const jsonMccMnc: {
    "network": string;
    "country": string;
    "mcc": string;
    "iso": string;
    "country_code": string;
    "mnc": string;
}[];
