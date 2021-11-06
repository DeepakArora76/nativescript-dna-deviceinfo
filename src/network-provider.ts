export interface NetworkProviderInterface {
  network: string;
  country: string;
  mcc: string;
  iso: string;
  country_code: string;
  mnc: string;
}

/**
 * @mcc: Mobile Country Code
 * @mnc: Mobile Network Code
 */
export function networkProviderByMccMnc(mcc: string, mnc: string): NetworkProviderInterface {
  mnc = mnc.length === 1 ? `0${mnc}` : mnc;
  return jsonMccMnc.find((provider) => {
    return provider.mcc === mcc && provider.mnc === mnc;
  });
}

export function networkProviderByMcc(mcc: string): NetworkProviderInterface {
  return jsonMccMnc.find((provider) => {
    return provider.mcc === mcc;
  });
}

// The list of Mobile Country Codes (MCC) and Mobile Network Codes (MNC) comes from 
// https://github.com/musalbas/mcc-mnc-table
export const jsonMccMnc = [
  {
    "mcc": "289",
    "mnc": "88",
    "iso": "ge",
    "country": "Abkhazia",
    "country_code": "7",
    "network": "A-Mobile"
  },
  {
    "mcc": "289",
    "mnc": "68",
    "iso": "ge",
    "country": "Abkhazia",
    "country_code": "7",
    "network": "A-Mobile"
  },
  {
    "mcc": "289",
    "mnc": "67",
    "iso": "ge",
    "country": "Abkhazia",
    "country_code": "7",
    "network": "Aquafon"
  },
  {
    "mcc": "412",
    "mnc": "88",
    "iso": "af",
    "country": "Afghanistan",
    "country_code": "93",
    "network": "Afghan Telecom Corp. (AT)"
  },
  {
    "mcc": "412",
    "mnc": "80",
    "iso": "af",
    "country": "Afghanistan",
    "country_code": "93",
    "network": "Afghan Telecom Corp. (AT)"
  },
  {
    "mcc": "412",
    "mnc": "01",
    "iso": "af",
    "country": "Afghanistan",
    "country_code": "93",
    "network": "Afghan Wireless/AWCC"
  },
  {
    "mcc": "412",
    "mnc": "40",
    "iso": "af",
    "country": "Afghanistan",
    "country_code": "93",
    "network": "Areeba/MTN"
  },
  {
    "mcc": "412",
    "mnc": "30",
    "iso": "af",
    "country": "Afghanistan",
    "country_code": "93",
    "network": "Etisalat "
  },
  {
    "mcc": "412",
    "mnc": "50",
    "iso": "af",
    "country": "Afghanistan",
    "country_code": "93",
    "network": "Etisalat "
  },
  {
    "mcc": "412",
    "mnc": "20",
    "iso": "af",
    "country": "Afghanistan",
    "country_code": "93",
    "network": "Roshan/TDCA "
  },
  {
    "mcc": "412",
    "mnc": "03",
    "iso": "af",
    "country": "Afghanistan",
    "country_code": "93",
    "network": "WaselTelecom (WT)"
  },
  {
    "mcc": "276",
    "mnc": "01",
    "iso": "al",
    "country": "Albania",
    "country_code": "355",
    "network": "AMC/Cosmote"
  },
  {
    "mcc": "276",
    "mnc": "03",
    "iso": "al",
    "country": "Albania",
    "country_code": "355",
    "network": "Eagle Mobile"
  },
  {
    "mcc": "276",
    "mnc": "04",
    "iso": "al",
    "country": "Albania",
    "country_code": "355",
    "network": "PLUS Communication Sh.a"
  },
  {
    "mcc": "276",
    "mnc": "02",
    "iso": "al",
    "country": "Albania",
    "country_code": "355",
    "network": "Vodafone "
  },
  {
    "mcc": "603",
    "mnc": "01",
    "iso": "dz",
    "country": "Algeria",
    "country_code": "213",
    "network": "ATM Mobils"
  },
  {
    "mcc": "603",
    "mnc": "02",
    "iso": "dz",
    "country": "Algeria",
    "country_code": "213",
    "network": "Orascom / DJEZZY"
  },
  {
    "mcc": "603",
    "mnc": "03",
    "iso": "dz",
    "country": "Algeria",
    "country_code": "213",
    "network": "Oreedo/Wataniya / Nedjma "
  },
  {
    "mcc": "544",
    "mnc": "11",
    "iso": "as",
    "country": "American Samoa",
    "country_code": "684",
    "network": "Blue Sky Communications"
  },
  {
    "mcc": "213",
    "mnc": "03",
    "iso": "ad",
    "country": "Andorra",
    "country_code": "376",
    "network": "Mobiland"
  },
  {
    "mcc": "631",
    "mnc": "04",
    "iso": "ao",
    "country": "Angola",
    "country_code": "244",
    "network": "MoviCel"
  },
  {
    "mcc": "631",
    "mnc": "02",
    "iso": "ao",
    "country": "Angola",
    "country_code": "244",
    "network": "Unitel"
  },
  {
    "mcc": "365",
    "mnc": "840",
    "iso": "ai",
    "country": "Anguilla",
    "country_code": "1264",
    "network": "Cable and Wireless"
  },
  {
    "mcc": "365",
    "mnc": "010",
    "iso": "ai",
    "country": "Anguilla",
    "country_code": "1264",
    "network": "Digicell / Wireless Vent. Ltd "
  },
  {
    "mcc": "344",
    "mnc": "030",
    "iso": "ag",
    "country": "Antigua and Barbuda",
    "country_code": "1268",
    "network": "APUA PCS"
  },
  {
    "mcc": "344",
    "mnc": "920",
    "iso": "ag",
    "country": "Antigua and Barbuda",
    "country_code": "1268",
    "network": "C & W"
  },
  {
    "mcc": "344",
    "mnc": "930",
    "iso": "ag",
    "country": "Antigua and Barbuda",
    "country_code": "1268",
    "network": "DigiCel/Cing. Wireless"
  },
  {
    "mcc": "722",
    "mnc": "310",
    "iso": "ar",
    "country": "Argentina Republic",
    "country_code": "54",
    "network": "Claro/ CTI/AMX"
  },
  {
    "mcc": "722",
    "mnc": "330",
    "iso": "ar",
    "country": "Argentina Republic",
    "country_code": "54",
    "network": "Claro/ CTI/AMX"
  },
  {
    "mcc": "722",
    "mnc": "320",
    "iso": "ar",
    "country": "Argentina Republic",
    "country_code": "54",
    "network": "Claro/ CTI/AMX"
  },
  {
    "mcc": "722",
    "mnc": "010",
    "iso": "ar",
    "country": "Argentina Republic",
    "country_code": "54",
    "network": "Compania De Radiocomunicaciones Moviles SA"
  },
  {
    "mcc": "722",
    "mnc": "007",
    "iso": "ar",
    "country": "Argentina Republic",
    "country_code": "54",
    "network": "Movistar/Telefonica"
  },
  {
    "mcc": "722",
    "mnc": "070",
    "iso": "ar",
    "country": "Argentina Republic",
    "country_code": "54",
    "network": "Movistar/Telefonica"
  },
  {
    "mcc": "722",
    "mnc": "020",
    "iso": "ar",
    "country": "Argentina Republic",
    "country_code": "54",
    "network": "Nextel"
  },
  {
    "mcc": "722",
    "mnc": "341",
    "iso": "ar",
    "country": "Argentina Republic",
    "country_code": "54",
    "network": "Telecom Personal S.A."
  },
  {
    "mcc": "722",
    "mnc": "340",
    "iso": "ar",
    "country": "Argentina Republic",
    "country_code": "54",
    "network": "Telecom Personal S.A."
  },
  {
    "mcc": "283",
    "mnc": "01",
    "iso": "am",
    "country": "Armenia",
    "country_code": "374",
    "network": "ArmenTel/Beeline"
  },
  {
    "mcc": "283",
    "mnc": "04",
    "iso": "am",
    "country": "Armenia",
    "country_code": "374",
    "network": "Karabakh Telecom"
  },
  {
    "mcc": "283",
    "mnc": "10",
    "iso": "am",
    "country": "Armenia",
    "country_code": "374",
    "network": "Orange"
  },
  {
    "mcc": "283",
    "mnc": "05",
    "iso": "am",
    "country": "Armenia",
    "country_code": "374",
    "network": "Vivacell"
  },
  {
    "mcc": "363",
    "mnc": "20",
    "iso": "aw",
    "country": "Aruba",
    "country_code": "297",
    "network": "Digicel"
  },
  {
    "mcc": "363",
    "mnc": "02",
    "iso": "aw",
    "country": "Aruba",
    "country_code": "297",
    "network": "Digicel"
  },
  {
    "mcc": "363",
    "mnc": "01",
    "iso": "aw",
    "country": "Aruba",
    "country_code": "297",
    "network": "Setar GSM"
  },
  {
    "mcc": "505",
    "mnc": "14",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "AAPT Ltd. "
  },
  {
    "mcc": "505",
    "mnc": "24",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Advanced Comm Tech Pty."
  },
  {
    "mcc": "505",
    "mnc": "09",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Airnet Commercial Australia Ltd.."
  },
  {
    "mcc": "505",
    "mnc": "04",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Department of Defense"
  },
  {
    "mcc": "505",
    "mnc": "26",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Dialogue Communications Pty Ltd"
  },
  {
    "mcc": "505",
    "mnc": "12",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "H3G Ltd."
  },
  {
    "mcc": "505",
    "mnc": "06",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "H3G Ltd."
  },
  {
    "mcc": "505",
    "mnc": "88",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Pivotel Group Ltd"
  },
  {
    "mcc": "505",
    "mnc": "19",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Lycamobile Pty Ltd"
  },
  {
    "mcc": "505",
    "mnc": "08",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Railcorp/Vodafone"
  },
  {
    "mcc": "505",
    "mnc": "99",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Railcorp/Vodafone"
  },
  {
    "mcc": "505",
    "mnc": "13",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Railcorp/Vodafone"
  },
  {
    "mcc": "505",
    "mnc": "90",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Singtel Optus"
  },
  {
    "mcc": "505",
    "mnc": "02",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Singtel Optus"
  },
  {
    "mcc": "505",
    "mnc": "72",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Telstra Corp. Ltd."
  },
  {
    "mcc": "505",
    "mnc": "71",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Telstra Corp. Ltd."
  },
  {
    "mcc": "505",
    "mnc": "01",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Telstra Corp. Ltd."
  },
  {
    "mcc": "505",
    "mnc": "11",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Telstra Corp. Ltd."
  },
  {
    "mcc": "505",
    "mnc": "05",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "The Ozitel Network Pty."
  },
  {
    "mcc": "505",
    "mnc": "16",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Victorian Rail Track Corp. (VicTrack)"
  },
  {
    "mcc": "505",
    "mnc": "07",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Vodafone"
  },
  {
    "mcc": "505",
    "mnc": "03",
    "iso": "au",
    "country": "Australia",
    "country_code": "61",
    "network": "Vodafone"
  },
  {
    "mcc": "232",
    "mnc": "02",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "A1 MobilKom"
  },
  {
    "mcc": "232",
    "mnc": "11",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "A1 MobilKom"
  },
  {
    "mcc": "232",
    "mnc": "09",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "A1 MobilKom"
  },
  {
    "mcc": "232",
    "mnc": "01",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "A1 MobilKom"
  },
  {
    "mcc": "232",
    "mnc": "15",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "T-Mobile/Telering"
  },
  {
    "mcc": "232",
    "mnc": "00",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "Fix Line"
  },
  {
    "mcc": "232",
    "mnc": "10",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "H3G"
  },
  {
    "mcc": "232",
    "mnc": "14",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "H3G"
  },
  {
    "mcc": "232",
    "mnc": "20",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "Mtel"
  },
  {
    "mcc": "232",
    "mnc": "06",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "3/Orange/One Connect"
  },
  {
    "mcc": "232",
    "mnc": "05",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "3/Orange/One Connect"
  },
  {
    "mcc": "232",
    "mnc": "12",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "3/Orange/One Connect"
  },
  {
    "mcc": "232",
    "mnc": "17",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "Spusu/Mass Response"
  },
  {
    "mcc": "232",
    "mnc": "07",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "T-Mobile/Telering"
  },
  {
    "mcc": "232",
    "mnc": "04",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "T-Mobile/Telering"
  },
  {
    "mcc": "232",
    "mnc": "03",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "T-Mobile/Telering"
  },
  {
    "mcc": "232",
    "mnc": "13",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "T-Mobile/Telering"
  },
  {
    "mcc": "232",
    "mnc": "19",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "Tele2"
  },
  {
    "mcc": "232",
    "mnc": "08",
    "iso": "at",
    "country": "Austria",
    "country_code": "43",
    "network": "A1 MobilKom"
  },
  {
    "mcc": "400",
    "mnc": "01",
    "iso": "az",
    "country": "Azerbaijan",
    "country_code": "994",
    "network": "Azercell Telekom B.M."
  },
  {
    "mcc": "400",
    "mnc": "04",
    "iso": "az",
    "country": "Azerbaijan",
    "country_code": "994",
    "network": "Azerfon."
  },
  {
    "mcc": "400",
    "mnc": "03",
    "iso": "az",
    "country": "Azerbaijan",
    "country_code": "994",
    "network": "CATEL"
  },
  {
    "mcc": "400",
    "mnc": "02",
    "iso": "az",
    "country": "Azerbaijan",
    "country_code": "994",
    "network": "J.V. Bakcell GSM 2000"
  },
  {
    "mcc": "400",
    "mnc": "06",
    "iso": "az",
    "country": "Azerbaijan",
    "country_code": "994",
    "network": "Naxtel"
  },
  {
    "mcc": "364",
    "mnc": "490",
    "iso": "bs",
    "country": "Bahamas",
    "country_code": "1242",
    "network": "Aliv/Cable Bahamas"
  },
  {
    "mcc": "364",
    "mnc": "390",
    "iso": "bs",
    "country": "Bahamas",
    "country_code": "1242",
    "network": "Bahamas Telco. Comp."
  },
  {
    "mcc": "364",
    "mnc": "30",
    "iso": "bs",
    "country": "Bahamas",
    "country_code": "1242",
    "network": "Bahamas Telco. Comp."
  },
  {
    "mcc": "364",
    "mnc": "39",
    "iso": "bs",
    "country": "Bahamas",
    "country_code": "1242",
    "network": "Bahamas Telco. Comp."
  },
  {
    "mcc": "364",
    "mnc": "03",
    "iso": "bs",
    "country": "Bahamas",
    "country_code": "1242",
    "network": "Smart Communications"
  },
  {
    "mcc": "426",
    "mnc": "01",
    "iso": "bh",
    "country": "Bahrain",
    "country_code": "973",
    "network": "Batelco"
  },
  {
    "mcc": "426",
    "mnc": "02",
    "iso": "bh",
    "country": "Bahrain",
    "country_code": "973",
    "network": "ZAIN/Vodafone"
  },
  {
    "mcc": "426",
    "mnc": "04",
    "iso": "bh",
    "country": "Bahrain",
    "country_code": "973",
    "network": "VIVA"
  },
  {
    "mcc": "470",
    "mnc": "02",
    "iso": "bd",
    "country": "Bangladesh",
    "country_code": "880",
    "network": "Robi/Aktel"
  },
  {
    "mcc": "470",
    "mnc": "06",
    "iso": "bd",
    "country": "Bangladesh",
    "country_code": "880",
    "network": "Citycell"
  },
  {
    "mcc": "470",
    "mnc": "05",
    "iso": "bd",
    "country": "Bangladesh",
    "country_code": "880",
    "network": "Citycell"
  },
  {
    "mcc": "470",
    "mnc": "01",
    "iso": "bd",
    "country": "Bangladesh",
    "country_code": "880",
    "network": "GrameenPhone"
  },
  {
    "mcc": "470",
    "mnc": "03",
    "iso": "bd",
    "country": "Bangladesh",
    "country_code": "880",
    "network": "Orascom/Banglalink"
  },
  {
    "mcc": "470",
    "mnc": "04",
    "iso": "bd",
    "country": "Bangladesh",
    "country_code": "880",
    "network": "TeleTalk"
  },
  {
    "mcc": "470",
    "mnc": "07",
    "iso": "bd",
    "country": "Bangladesh",
    "country_code": "880",
    "network": "Airtel/Warid"
  },
  {
    "mcc": "342",
    "mnc": "600",
    "iso": "bb",
    "country": "Barbados",
    "country_code": "1246",
    "network": "LIME"
  },
  {
    "mcc": "342",
    "mnc": "810",
    "iso": "bb",
    "country": "Barbados",
    "country_code": "1246",
    "network": "Cingular Wireless"
  },
  {
    "mcc": "342",
    "mnc": "750",
    "iso": "bb",
    "country": "Barbados",
    "country_code": "1246",
    "network": "Digicel"
  },
  {
    "mcc": "342",
    "mnc": "050",
    "iso": "bb",
    "country": "Barbados",
    "country_code": "1246",
    "network": "Digicel"
  },
  {
    "mcc": "342",
    "mnc": "820",
    "iso": "bb",
    "country": "Barbados",
    "country_code": "1246",
    "network": "Sunbeach"
  },
  {
    "mcc": "257",
    "mnc": "03",
    "iso": "by",
    "country": "Belarus",
    "country_code": "375",
    "network": "BelCel JV"
  },
  {
    "mcc": "257",
    "mnc": "04",
    "iso": "by",
    "country": "Belarus",
    "country_code": "375",
    "network": "BeST"
  },
  {
    "mcc": "257",
    "mnc": "01",
    "iso": "by",
    "country": "Belarus",
    "country_code": "375",
    "network": "MDC/Velcom"
  },
  {
    "mcc": "257",
    "mnc": "02",
    "iso": "by",
    "country": "Belarus",
    "country_code": "375",
    "network": "MTS"
  },
  {
    "mcc": "206",
    "mnc": "20",
    "iso": "be",
    "country": "Belgium",
    "country_code": "32",
    "network": "Base/KPN"
  },
  {
    "mcc": "206",
    "mnc": "01",
    "iso": "be",
    "country": "Belgium",
    "country_code": "32",
    "network": "Belgacom/Proximus"
  },
  {
    "mcc": "206",
    "mnc": "06",
    "iso": "be",
    "country": "Belgium",
    "country_code": "32",
    "network": "Lycamobile Belgium"
  },
  {
    "mcc": "206",
    "mnc": "10",
    "iso": "be",
    "country": "Belgium",
    "country_code": "32",
    "network": "Mobistar/Orange"
  },
  {
    "mcc": "206",
    "mnc": "02",
    "iso": "be",
    "country": "Belgium",
    "country_code": "32",
    "network": "SNCT/NMBS"
  },
  {
    "mcc": "206",
    "mnc": "05",
    "iso": "be",
    "country": "Belgium",
    "country_code": "32",
    "network": "Telenet NV"
  },
  {
    "mcc": "206",
    "mnc": "08",
    "iso": "be",
    "country": "Belgium",
    "country_code": "32",
    "network": "VOO"
  },
  {
    "mcc": "702",
    "mnc": "67",
    "iso": "bz",
    "country": "Belize",
    "country_code": "501",
    "network": "DigiCell"
  },
  {
    "mcc": "702",
    "mnc": "68",
    "iso": "bz",
    "country": "Belize",
    "country_code": "501",
    "network": "International Telco (INTELCO)"
  },
  {
    "mcc": "616",
    "mnc": "04",
    "iso": "bj",
    "country": "Benin",
    "country_code": "229",
    "network": "Bell Benin/BBCOM"
  },
  {
    "mcc": "616",
    "mnc": "02",
    "iso": "bj",
    "country": "Benin",
    "country_code": "229",
    "network": "Etisalat/MOOV"
  },
  {
    "mcc": "616",
    "mnc": "05",
    "iso": "bj",
    "country": "Benin",
    "country_code": "229",
    "network": "GloMobile"
  },
  {
    "mcc": "616",
    "mnc": "01",
    "iso": "bj",
    "country": "Benin",
    "country_code": "229",
    "network": "Libercom"
  },
  {
    "mcc": "616",
    "mnc": "03",
    "iso": "bj",
    "country": "Benin",
    "country_code": "229",
    "network": "MTN/Spacetel"
  },
  {
    "mcc": "350",
    "mnc": "000",
    "iso": "bm",
    "country": "Bermuda",
    "country_code": "1441",
    "network": "Bermuda Digital Communications Ltd (BDC)"
  },
  {
    "mcc": "350",
    "mnc": "99",
    "iso": "bm",
    "country": "Bermuda",
    "country_code": "1441",
    "network": "CellOne Ltd"
  },
  {
    "mcc": "350",
    "mnc": "10",
    "iso": "bm",
    "country": "Bermuda",
    "country_code": "1441",
    "network": "DigiCel / Cingular"
  },
  {
    "mcc": "350",
    "mnc": "02",
    "iso": "bm",
    "country": "Bermuda",
    "country_code": "1441",
    "network": "M3 Wireless Ltd"
  },
  {
    "mcc": "350",
    "mnc": "01",
    "iso": "bm",
    "country": "Bermuda",
    "country_code": "1441",
    "network": "Telecommunications (Bermuda & West Indies) Ltd (Digicel Bermuda)"
  },
  {
    "mcc": "402",
    "mnc": "11",
    "iso": "bt",
    "country": "Bhutan",
    "country_code": "975",
    "network": "B-Mobile"
  },
  {
    "mcc": "402",
    "mnc": "17",
    "iso": "bt",
    "country": "Bhutan",
    "country_code": "975",
    "network": "Bhutan Telecom Ltd (BTL)"
  },
  {
    "mcc": "402",
    "mnc": "77",
    "iso": "bt",
    "country": "Bhutan",
    "country_code": "975",
    "network": "TashiCell"
  },
  {
    "mcc": "736",
    "mnc": "02",
    "iso": "bo",
    "country": "Bolivia",
    "country_code": "591",
    "network": "Entel Pcs"
  },
  {
    "mcc": "736",
    "mnc": "01",
    "iso": "bo",
    "country": "Bolivia",
    "country_code": "591",
    "network": "Viva/Nuevatel"
  },
  {
    "mcc": "736",
    "mnc": "03",
    "iso": "bo",
    "country": "Bolivia",
    "country_code": "591",
    "network": "Tigo"
  },
  {
    "mcc": "218",
    "mnc": "90",
    "iso": "ba",
    "country": "Bosnia & Herzegov.",
    "country_code": "387",
    "network": "BH Mobile"
  },
  {
    "mcc": "218",
    "mnc": "03",
    "iso": "ba",
    "country": "Bosnia & Herzegov.",
    "country_code": "387",
    "network": "Eronet Mobile"
  },
  {
    "mcc": "218",
    "mnc": "05",
    "iso": "ba",
    "country": "Bosnia & Herzegov.",
    "country_code": "387",
    "network": "M-Tel"
  },
  {
    "mcc": "652",
    "mnc": "04",
    "iso": "bw",
    "country": "Botswana",
    "country_code": "267",
    "network": "BeMOBILE"
  },
  {
    "mcc": "652",
    "mnc": "01",
    "iso": "bw",
    "country": "Botswana",
    "country_code": "267",
    "network": "Mascom Wireless (Pty) Ltd."
  },
  {
    "mcc": "652",
    "mnc": "02",
    "iso": "bw",
    "country": "Botswana",
    "country_code": "267",
    "network": "Orange"
  },
  {
    "mcc": "724",
    "mnc": "26",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "AmericaNet"
  },
  {
    "mcc": "724",
    "mnc": "12",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Claro/Albra/America Movil"
  },
  {
    "mcc": "724",
    "mnc": "38",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Claro/Albra/America Movil"
  },
  {
    "mcc": "724",
    "mnc": "05",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Claro/Albra/America Movil"
  },
  {
    "mcc": "724",
    "mnc": "01",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Vivo S.A./Telemig "
  },
  {
    "mcc": "724",
    "mnc": "33",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "CTBC Celular SA (CTBC)"
  },
  {
    "mcc": "724",
    "mnc": "32",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "CTBC Celular SA (CTBC)"
  },
  {
    "mcc": "724",
    "mnc": "34",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "CTBC Celular SA (CTBC)"
  },
  {
    "mcc": "724",
    "mnc": "08",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "TIM"
  },
  {
    "mcc": "724",
    "mnc": "39",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Nextel (Telet)"
  },
  {
    "mcc": "724",
    "mnc": "00",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Nextel (Telet)"
  },
  {
    "mcc": "724",
    "mnc": "30",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Oi (TNL PCS / Oi)"
  },
  {
    "mcc": "724",
    "mnc": "31",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Oi (TNL PCS / Oi)"
  },
  {
    "mcc": "724",
    "mnc": "16",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Brazil Telcom"
  },
  {
    "mcc": "724",
    "mnc": "24",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Amazonia Celular S/A"
  },
  {
    "mcc": "724",
    "mnc": "54",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "PORTO SEGURO TELECOMUNICACOES"
  },
  {
    "mcc": "724",
    "mnc": "15",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Sercontel Cel"
  },
  {
    "mcc": "724",
    "mnc": "07",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "CTBC/Triangulo "
  },
  {
    "mcc": "724",
    "mnc": "19",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Vivo S.A./Telemig "
  },
  {
    "mcc": "724",
    "mnc": "03",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "TIM"
  },
  {
    "mcc": "724",
    "mnc": "02",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "TIM"
  },
  {
    "mcc": "724",
    "mnc": "04",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "TIM"
  },
  {
    "mcc": "724",
    "mnc": "37",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Unicel do Brasil Telecomunicacoes Ltda"
  },
  {
    "mcc": "724",
    "mnc": "23",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Vivo S.A./Telemig "
  },
  {
    "mcc": "724",
    "mnc": "11",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Vivo S.A./Telemig "
  },
  {
    "mcc": "724",
    "mnc": "10",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Vivo S.A./Telemig "
  },
  {
    "mcc": "724",
    "mnc": "06",
    "iso": "br",
    "country": "Brazil",
    "country_code": "55",
    "network": "Vivo S.A./Telemig "
  },
  {
    "mcc": "348",
    "mnc": "570",
    "iso": "vg",
    "country": "British Virgin Islands",
    "country_code": "284",
    "network": "Caribbean Cellular"
  },
  {
    "mcc": "348",
    "mnc": "770",
    "iso": "vg",
    "country": "British Virgin Islands",
    "country_code": "284",
    "network": "Digicel"
  },
  {
    "mcc": "348",
    "mnc": "170",
    "iso": "vg",
    "country": "British Virgin Islands",
    "country_code": "284",
    "network": "LIME"
  },
  {
    "mcc": "528",
    "mnc": "02",
    "iso": "bn",
    "country": "Brunei Darussalam",
    "country_code": "673",
    "network": "b-mobile"
  },
  {
    "mcc": "528",
    "mnc": "11",
    "iso": "bn",
    "country": "Brunei Darussalam",
    "country_code": "673",
    "network": "Datastream (DTSCom)"
  },
  {
    "mcc": "528",
    "mnc": "01",
    "iso": "bn",
    "country": "Brunei Darussalam",
    "country_code": "673",
    "network": "Telekom Brunei Bhd (TelBru)"
  },
  {
    "mcc": "284",
    "mnc": "06",
    "iso": "bg",
    "country": "Bulgaria",
    "country_code": "359",
    "network": "BTC Mobile EOOD (vivatel)"
  },
  {
    "mcc": "284",
    "mnc": "03",
    "iso": "bg",
    "country": "Bulgaria",
    "country_code": "359",
    "network": "BTC Mobile EOOD (vivatel)"
  },
  {
    "mcc": "284",
    "mnc": "05",
    "iso": "bg",
    "country": "Bulgaria",
    "country_code": "359",
    "network": "Telenor/Cosmo/Globul"
  },
  {
    "mcc": "284",
    "mnc": "01",
    "iso": "bg",
    "country": "Bulgaria",
    "country_code": "359",
    "network": "MobilTel AD"
  },
  {
    "mcc": "613",
    "mnc": "03",
    "iso": "bf",
    "country": "Burkina Faso",
    "country_code": "226",
    "network": "TeleCel"
  },
  {
    "mcc": "613",
    "mnc": "01",
    "iso": "bf",
    "country": "Burkina Faso",
    "country_code": "226",
    "network": "TeleMob-OnaTel"
  },
  {
    "mcc": "613",
    "mnc": "02",
    "iso": "bf",
    "country": "Burkina Faso",
    "country_code": "226",
    "network": "Orange/Airte"
  },
  {
    "mcc": "642",
    "mnc": "02",
    "iso": "bi",
    "country": "Burundi",
    "country_code": "257",
    "network": "Africel / Safaris"
  },
  {
    "mcc": "642",
    "mnc": "08",
    "iso": "bi",
    "country": "Burundi",
    "country_code": "257",
    "network": "Lumitel/Viettel"
  },
  {
    "mcc": "642",
    "mnc": "03",
    "iso": "bi",
    "country": "Burundi",
    "country_code": "257",
    "network": "Onatel / Telecel "
  },
  {
    "mcc": "642",
    "mnc": "07",
    "iso": "bi",
    "country": "Burundi",
    "country_code": "257",
    "network": "Smart Mobile / LACELL "
  },
  {
    "mcc": "642",
    "mnc": "82",
    "iso": "bi",
    "country": "Burundi",
    "country_code": "257",
    "network": "Spacetel / Econet / Leo "
  },
  {
    "mcc": "642",
    "mnc": "01",
    "iso": "bi",
    "country": "Burundi",
    "country_code": "257",
    "network": "Spacetel / Econet / Leo "
  },
  {
    "mcc": "456",
    "mnc": "04",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "Cambodia Advance Communications Co. Ltd (CADCOMMS)"
  },
  {
    "mcc": "456",
    "mnc": "02",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "Smart Mobile"
  },
  {
    "mcc": "456",
    "mnc": "08",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "Viettel/Metfone"
  },
  {
    "mcc": "456",
    "mnc": "18",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "Mobitel/Cam GSM"
  },
  {
    "mcc": "456",
    "mnc": "01",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "Mobitel/Cam GSM"
  },
  {
    "mcc": "456",
    "mnc": "03",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "QB/Cambodia Adv. Comms."
  },
  {
    "mcc": "456",
    "mnc": "11",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "SEATEL"
  },
  {
    "mcc": "456",
    "mnc": "05",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "Smart Mobile"
  },
  {
    "mcc": "456",
    "mnc": "06",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "Smart Mobile"
  },
  {
    "mcc": "456",
    "mnc": "09",
    "iso": "kh",
    "country": "Cambodia",
    "country_code": "855",
    "network": "Sotelco/Beeline"
  },
  {
    "mcc": "624",
    "mnc": "01",
    "iso": "cm",
    "country": "Cameroon",
    "country_code": "237",
    "network": "MTN"
  },
  {
    "mcc": "624",
    "mnc": "04",
    "iso": "cm",
    "country": "Cameroon",
    "country_code": "237",
    "network": "Nextel"
  },
  {
    "mcc": "624",
    "mnc": "02",
    "iso": "cm",
    "country": "Cameroon",
    "country_code": "237",
    "network": "Orange"
  },
  {
    "mcc": "302",
    "mnc": "652",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "BC Tel Mobility"
  },
  {
    "mcc": "302",
    "mnc": "630",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Bell Aliant"
  },
  {
    "mcc": "302",
    "mnc": "651",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Bell Mobility"
  },
  {
    "mcc": "302",
    "mnc": "610",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Bell Mobility"
  },
  {
    "mcc": "302",
    "mnc": "670",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "CityWest Mobility"
  },
  {
    "mcc": "302",
    "mnc": "361",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Clearnet"
  },
  {
    "mcc": "302",
    "mnc": "360",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Clearnet"
  },
  {
    "mcc": "302",
    "mnc": "380",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "DMTS Mobility"
  },
  {
    "mcc": "302",
    "mnc": "710",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Globalstar Canada"
  },
  {
    "mcc": "302",
    "mnc": "640",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Latitude Wireless"
  },
  {
    "mcc": "302",
    "mnc": "370",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "FIDO (Rogers AT&T/ Microcell)"
  },
  {
    "mcc": "302",
    "mnc": "320",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "mobilicity"
  },
  {
    "mcc": "302",
    "mnc": "702",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "MT&T Mobility"
  },
  {
    "mcc": "302",
    "mnc": "655",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "MTS Mobility"
  },
  {
    "mcc": "302",
    "mnc": "660",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "MTS Mobility"
  },
  {
    "mcc": "302",
    "mnc": "701",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "NB Tel Mobility"
  },
  {
    "mcc": "302",
    "mnc": "703",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "New Tel Mobility"
  },
  {
    "mcc": "302",
    "mnc": "760",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Public Mobile"
  },
  {
    "mcc": "302",
    "mnc": "657",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Quebectel Mobility"
  },
  {
    "mcc": "302",
    "mnc": "720",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Rogers AT&T Wireless"
  },
  {
    "mcc": "302",
    "mnc": "654",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Sask Tel Mobility"
  },
  {
    "mcc": "302",
    "mnc": "780",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Sask Tel Mobility"
  },
  {
    "mcc": "302",
    "mnc": "680",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Sask Tel Mobility"
  },
  {
    "mcc": "302",
    "mnc": "656",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Tbay Mobility"
  },
  {
    "mcc": "302",
    "mnc": "653",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Telus Mobility"
  },
  {
    "mcc": "302",
    "mnc": "220",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Telus Mobility"
  },
  {
    "mcc": "302",
    "mnc": "500",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "Videotron"
  },
  {
    "mcc": "302",
    "mnc": "490",
    "iso": "ca",
    "country": "Canada",
    "country_code": "1",
    "network": "WIND"
  },
  {
    "mcc": "625",
    "mnc": "01",
    "iso": "cv",
    "country": "Cape Verde",
    "country_code": "238",
    "network": "CV Movel"
  },
  {
    "mcc": "625",
    "mnc": "02",
    "iso": "cv",
    "country": "Cape Verde",
    "country_code": "238",
    "network": "T+ Telecom"
  },
  {
    "mcc": "346",
    "mnc": "050",
    "iso": "ky",
    "country": "Cayman Islands",
    "country_code": "1345",
    "network": "Digicel Cayman Ltd"
  },
  {
    "mcc": "346",
    "mnc": "006",
    "iso": "ky",
    "country": "Cayman Islands",
    "country_code": "1345",
    "network": "Digicel Ltd."
  },
  {
    "mcc": "346",
    "mnc": "140",
    "iso": "ky",
    "country": "Cayman Islands",
    "country_code": "1345",
    "network": "LIME / Cable & Wirel."
  },
  {
    "mcc": "623",
    "mnc": "01",
    "iso": "cf",
    "country": "Central African Rep.",
    "country_code": "236",
    "network": "Centrafr. Telecom+"
  },
  {
    "mcc": "623",
    "mnc": "04",
    "iso": "cf",
    "country": "Central African Rep.",
    "country_code": "236",
    "network": "Nationlink"
  },
  {
    "mcc": "623",
    "mnc": "03",
    "iso": "cf",
    "country": "Central African Rep.",
    "country_code": "236",
    "network": "Orange/Celca"
  },
  {
    "mcc": "623",
    "mnc": "02",
    "iso": "cf",
    "country": "Central African Rep.",
    "country_code": "236",
    "network": "Telecel Centraf. "
  },
  {
    "mcc": "622",
    "mnc": "04",
    "iso": "td",
    "country": "Chad",
    "country_code": "235",
    "network": "Salam/Sotel"
  },
  {
    "mcc": "622",
    "mnc": "02",
    "iso": "td",
    "country": "Chad",
    "country_code": "235",
    "network": "Tchad Mobile"
  },
  {
    "mcc": "622",
    "mnc": "03",
    "iso": "td",
    "country": "Chad",
    "country_code": "235",
    "network": "Tigo/Milicom/Tchad Mobile"
  },
  {
    "mcc": "622",
    "mnc": "01",
    "iso": "td",
    "country": "Chad",
    "country_code": "235",
    "network": "Airtel/ZAIN/Celtel"
  },
  {
    "mcc": "730",
    "mnc": "06",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Blue Two Chile SA"
  },
  {
    "mcc": "730",
    "mnc": "11",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Celupago SA"
  },
  {
    "mcc": "730",
    "mnc": "15",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Cibeles Telecom SA"
  },
  {
    "mcc": "730",
    "mnc": "03",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Claro"
  },
  {
    "mcc": "730",
    "mnc": "10",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Entel Telefonia"
  },
  {
    "mcc": "730",
    "mnc": "01",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Entel Telefonia Mov"
  },
  {
    "mcc": "730",
    "mnc": "14",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Netline Telefonica Movil Ltda"
  },
  {
    "mcc": "730",
    "mnc": "05",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Nextel SA"
  },
  {
    "mcc": "730",
    "mnc": "04",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Nextel SA"
  },
  {
    "mcc": "730",
    "mnc": "09",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Nextel SA"
  },
  {
    "mcc": "730",
    "mnc": "19",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Sociedad Falabella Movil SPA"
  },
  {
    "mcc": "730",
    "mnc": "02",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "TELEFONICA"
  },
  {
    "mcc": "730",
    "mnc": "07",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "TELEFONICA"
  },
  {
    "mcc": "730",
    "mnc": "12",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Telestar Movil SA"
  },
  {
    "mcc": "730",
    "mnc": "00",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "TESAM SA"
  },
  {
    "mcc": "730",
    "mnc": "13",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "Tribe Mobile SPA"
  },
  {
    "mcc": "730",
    "mnc": "08",
    "iso": "cl",
    "country": "Chile",
    "country_code": "56",
    "network": "VTR Banda Ancha SA"
  },
  {
    "mcc": "460",
    "mnc": "00",
    "iso": "cn",
    "country": "China",
    "country_code": "86",
    "network": "China Mobile GSM"
  },
  {
    "mcc": "460",
    "mnc": "02",
    "iso": "cn",
    "country": "China",
    "country_code": "86",
    "network": "China Mobile GSM"
  },
  {
    "mcc": "460",
    "mnc": "07",
    "iso": "cn",
    "country": "China",
    "country_code": "86",
    "network": "China Mobile GSM"
  },
  {
    "mcc": "460",
    "mnc": "04",
    "iso": "cn",
    "country": "China",
    "country_code": "86",
    "network": "China Space Mobile Satellite Telecommunications Co. Ltd (China Spacecom)"
  },
  {
    "mcc": "460",
    "mnc": "03",
    "iso": "cn",
    "country": "China",
    "country_code": "86",
    "network": "China Telecom"
  },
  {
    "mcc": "460",
    "mnc": "05",
    "iso": "cn",
    "country": "China",
    "country_code": "86",
    "network": "China Telecom"
  },
  {
    "mcc": "460",
    "mnc": "06",
    "iso": "cn",
    "country": "China",
    "country_code": "86",
    "network": "China Unicom"
  },
  {
    "mcc": "460",
    "mnc": "01",
    "iso": "cn",
    "country": "China",
    "country_code": "86",
    "network": "China Unicom"
  },
  {
    "mcc": "732",
    "mnc": "130",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "Avantel SAS"
  },
  {
    "mcc": "732",
    "mnc": "102",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "Movistar"
  },
  {
    "mcc": "732",
    "mnc": "103",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "TIGO/Colombia Movil"
  },
  {
    "mcc": "732",
    "mnc": "001",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "TIGO/Colombia Movil"
  },
  {
    "mcc": "732",
    "mnc": "101",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "Comcel S.A. Occel S.A./Celcaribe"
  },
  {
    "mcc": "732",
    "mnc": "002",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "Edatel S.A."
  },
  {
    "mcc": "732",
    "mnc": "187",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "eTb"
  },
  {
    "mcc": "732",
    "mnc": "123",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "Movistar"
  },
  {
    "mcc": "732",
    "mnc": "111",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "TIGO/Colombia Movil"
  },
  {
    "mcc": "732",
    "mnc": "142",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "UNE EPM Telecomunicaciones SA ESP"
  },
  {
    "mcc": "732",
    "mnc": "020",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "UNE EPM Telecomunicaciones SA ESP"
  },
  {
    "mcc": "732",
    "mnc": "154",
    "iso": "co",
    "country": "Colombia",
    "country_code": "57",
    "network": "Virgin Mobile Colombia SAS"
  },
  {
    "mcc": "654",
    "mnc": "01",
    "iso": "km",
    "country": "Comoros",
    "country_code": "269",
    "network": "HURI - SNPT"
  },
  {
    "mcc": "654",
    "mnc": "02",
    "iso": "km",
    "country": "Comoros",
    "country_code": "269",
    "network": "TELMA TELCO SA"
  },
  {
    "mcc": "630",
    "mnc": "90",
    "iso": "cd",
    "country": "Congo, Dem. Rep.",
    "country_code": "243",
    "network": "Africell"
  },
  {
    "mcc": "630",
    "mnc": "86",
    "iso": "cd",
    "country": "Congo, Dem. Rep.",
    "country_code": "243",
    "network": "Orange RDC sarl"
  },
  {
    "mcc": "630",
    "mnc": "05",
    "iso": "cd",
    "country": "Congo, Dem. Rep.",
    "country_code": "243",
    "network": "SuperCell"
  },
  {
    "mcc": "630",
    "mnc": "89",
    "iso": "cd",
    "country": "Congo, Dem. Rep.",
    "country_code": "243",
    "network": "TIGO/Oasis"
  },
  {
    "mcc": "630",
    "mnc": "01",
    "iso": "cd",
    "country": "Congo, Dem. Rep.",
    "country_code": "243",
    "network": "Vodacom"
  },
  {
    "mcc": "630",
    "mnc": "88",
    "iso": "cd",
    "country": "Congo, Dem. Rep.",
    "country_code": "243",
    "network": "Yozma Timeturns sprl (YTT)"
  },
  {
    "mcc": "630",
    "mnc": "02",
    "iso": "cd",
    "country": "Congo, Dem. Rep.",
    "country_code": "243",
    "network": "Airtel/ZAIN"
  },
  {
    "mcc": "629",
    "mnc": "01",
    "iso": "cg",
    "country": "Congo, Republic",
    "country_code": "242",
    "network": "Airtel SA"
  },
  {
    "mcc": "629",
    "mnc": "02",
    "iso": "cg",
    "country": "Congo, Republic",
    "country_code": "242",
    "network": "Azur SA (ETC)"
  },
  {
    "mcc": "629",
    "mnc": "10",
    "iso": "cg",
    "country": "Congo, Republic",
    "country_code": "242",
    "network": "MTN/Libertis"
  },
  {
    "mcc": "629",
    "mnc": "07",
    "iso": "cg",
    "country": "Congo, Republic",
    "country_code": "242",
    "network": "Warid"
  },
  {
    "mcc": "548",
    "mnc": "01",
    "iso": "ck",
    "country": "Cook Islands",
    "country_code": "682",
    "network": "Telecom Cook Islands"
  },
  {
    "mcc": "712",
    "mnc": "03",
    "iso": "cr",
    "country": "Costa Rica",
    "country_code": "506",
    "network": "Claro"
  },
  {
    "mcc": "712",
    "mnc": "01",
    "iso": "cr",
    "country": "Costa Rica",
    "country_code": "506",
    "network": "ICE"
  },
  {
    "mcc": "712",
    "mnc": "02",
    "iso": "cr",
    "country": "Costa Rica",
    "country_code": "506",
    "network": "ICE"
  },
  {
    "mcc": "712",
    "mnc": "04",
    "iso": "cr",
    "country": "Costa Rica",
    "country_code": "506",
    "network": "Movistar"
  },
  {
    "mcc": "712",
    "mnc": "20",
    "iso": "cr",
    "country": "Costa Rica",
    "country_code": "506",
    "network": "Virtualis"
  },
  {
    "mcc": "219",
    "mnc": "01",
    "iso": "hr",
    "country": "Croatia",
    "country_code": "385",
    "network": "T-Mobile/Cronet"
  },
  {
    "mcc": "219",
    "mnc": "02",
    "iso": "hr",
    "country": "Croatia",
    "country_code": "385",
    "network": "Tele2"
  },
  {
    "mcc": "219",
    "mnc": "10",
    "iso": "hr",
    "country": "Croatia",
    "country_code": "385",
    "network": "VIPnet d.o.o."
  },
  {
    "mcc": "368",
    "mnc": "01",
    "iso": "cu",
    "country": "Cuba",
    "country_code": "53",
    "network": "CubaCel/C-COM"
  },
  {
    "mcc": "362",
    "mnc": "95",
    "iso": "cw",
    "country": "Curacao",
    "country_code": "599",
    "network": "EOCG Wireless NV"
  },
  {
    "mcc": "362",
    "mnc": "69",
    "iso": "cw",
    "country": "Curacao",
    "country_code": "599",
    "network": "Polycom N.V./ Digicel"
  },
  {
    "mcc": "280",
    "mnc": "10",
    "iso": "cy",
    "country": "Cyprus",
    "country_code": "357",
    "network": "MTN/Areeba"
  },
  {
    "mcc": "280",
    "mnc": "20",
    "iso": "cy",
    "country": "Cyprus",
    "country_code": "357",
    "network": "PrimeTel PLC"
  },
  {
    "mcc": "280",
    "mnc": "01",
    "iso": "cy",
    "country": "Cyprus",
    "country_code": "357",
    "network": "Vodafone/CyTa"
  },
  {
    "mcc": "230",
    "mnc": "08",
    "iso": "cz",
    "country": "Czech Rep.",
    "country_code": "420",
    "network": "Compatel s.r.o."
  },
  {
    "mcc": "230",
    "mnc": "02",
    "iso": "cz",
    "country": "Czech Rep.",
    "country_code": "420",
    "network": "O2"
  },
  {
    "mcc": "230",
    "mnc": "01",
    "iso": "cz",
    "country": "Czech Rep.",
    "country_code": "420",
    "network": "T-Mobile / RadioMobil"
  },
  {
    "mcc": "230",
    "mnc": "05",
    "iso": "cz",
    "country": "Czech Rep.",
    "country_code": "420",
    "network": "Travel Telekommunikation s.r.o."
  },
  {
    "mcc": "230",
    "mnc": "04",
    "iso": "cz",
    "country": "Czech Rep.",
    "country_code": "420",
    "network": "Ufone"
  },
  {
    "mcc": "230",
    "mnc": "99",
    "iso": "cz",
    "country": "Czech Rep.",
    "country_code": "420",
    "network": "Vodafone"
  },
  {
    "mcc": "230",
    "mnc": "03",
    "iso": "cz",
    "country": "Czech Rep.",
    "country_code": "420",
    "network": "Vodafone"
  },
  {
    "mcc": "238",
    "mnc": "05",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "ApS KBUS"
  },
  {
    "mcc": "238",
    "mnc": "23",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "Banedanmark"
  },
  {
    "mcc": "238",
    "mnc": "28",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "CoolTEL ApS"
  },
  {
    "mcc": "238",
    "mnc": "06",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "H3G"
  },
  {
    "mcc": "238",
    "mnc": "12",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "Lycamobile Ltd"
  },
  {
    "mcc": "238",
    "mnc": "03",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "Mach Connectivity ApS"
  },
  {
    "mcc": "238",
    "mnc": "07",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "Mundio Mobile"
  },
  {
    "mcc": "238",
    "mnc": "04",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "NextGen Mobile Ltd (CardBoardFish)"
  },
  {
    "mcc": "238",
    "mnc": "01",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "TDC Denmark"
  },
  {
    "mcc": "238",
    "mnc": "10",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "TDC Denmark"
  },
  {
    "mcc": "238",
    "mnc": "77",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "Telenor/Sonofon"
  },
  {
    "mcc": "238",
    "mnc": "02",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "Telenor/Sonofon"
  },
  {
    "mcc": "238",
    "mnc": "20",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "Telia"
  },
  {
    "mcc": "238",
    "mnc": "30",
    "iso": "dk",
    "country": "Denmark",
    "country_code": "45",
    "network": "Telia"
  },
  {
    "mcc": "638",
    "mnc": "01",
    "iso": "dj",
    "country": "Djibouti",
    "country_code": "253",
    "network": "Djibouti Telecom SA (Evatis)"
  },
  {
    "mcc": "366",
    "mnc": "110",
    "iso": "dm",
    "country": "Dominica",
    "country_code": "1767",
    "network": "C & W"
  },
  {
    "mcc": "366",
    "mnc": "020",
    "iso": "dm",
    "country": "Dominica",
    "country_code": "1767",
    "network": "Cingular Wireless/Digicel"
  },
  {
    "mcc": "366",
    "mnc": "050",
    "iso": "dm",
    "country": "Dominica",
    "country_code": "1767",
    "network": "Wireless Ventures (Dominica) Ltd (Digicel Dominica)"
  },
  {
    "mcc": "370",
    "mnc": "02",
    "iso": "do",
    "country": "Dominican Republic",
    "country_code": "1809",
    "network": "Claro"
  },
  {
    "mcc": "370",
    "mnc": "01",
    "iso": "do",
    "country": "Dominican Republic",
    "country_code": "1809",
    "network": "Orange"
  },
  {
    "mcc": "370",
    "mnc": "03",
    "iso": "do",
    "country": "Dominican Republic",
    "country_code": "1809",
    "network": "TRIcom"
  },
  {
    "mcc": "370",
    "mnc": "04",
    "iso": "do",
    "country": "Dominican Republic",
    "country_code": "1809",
    "network": "Viva"
  },
  {
    "mcc": "740",
    "mnc": "01",
    "iso": "ec",
    "country": "Ecuador",
    "country_code": "593",
    "network": "Claro/Port"
  },
  {
    "mcc": "740",
    "mnc": "02",
    "iso": "ec",
    "country": "Ecuador",
    "country_code": "593",
    "network": "CNT Mobile"
  },
  {
    "mcc": "740",
    "mnc": "000",
    "iso": "ec",
    "country": "Ecuador",
    "country_code": "593",
    "network": "Failed Call(s)"
  },
  {
    "mcc": "740",
    "mnc": "00",
    "iso": "ec",
    "country": "Ecuador",
    "country_code": "593",
    "network": "MOVISTAR/OteCel"
  },
  {
    "mcc": "740",
    "mnc": "03",
    "iso": "ec",
    "country": "Ecuador",
    "country_code": "593",
    "network": "Tuenti"
  },
  {
    "mcc": "602",
    "mnc": "01",
    "iso": "eg",
    "country": "Egypt",
    "country_code": "20",
    "network": "Orange/Mobinil"
  },
  {
    "mcc": "602",
    "mnc": "03",
    "iso": "eg",
    "country": "Egypt",
    "country_code": "20",
    "network": "ETISALAT"
  },
  {
    "mcc": "602",
    "mnc": "02",
    "iso": "eg",
    "country": "Egypt",
    "country_code": "20",
    "network": "Vodafone/Mirsfone "
  },
  {
    "mcc": "602",
    "mnc": "04",
    "iso": "eg",
    "country": "Egypt",
    "country_code": "20",
    "network": "WE/Telecom"
  },
  {
    "mcc": "706",
    "mnc": "01",
    "iso": "sv",
    "country": "El Salvador",
    "country_code": "503",
    "network": "CLARO/CTE"
  },
  {
    "mcc": "706",
    "mnc": "02",
    "iso": "sv",
    "country": "El Salvador",
    "country_code": "503",
    "network": "Digicel"
  },
  {
    "mcc": "706",
    "mnc": "05",
    "iso": "sv",
    "country": "El Salvador",
    "country_code": "503",
    "network": "INTELFON SA de CV"
  },
  {
    "mcc": "706",
    "mnc": "04",
    "iso": "sv",
    "country": "El Salvador",
    "country_code": "503",
    "network": "Telefonica"
  },
  {
    "mcc": "706",
    "mnc": "03",
    "iso": "sv",
    "country": "El Salvador",
    "country_code": "503",
    "network": "Telemovil"
  },
  {
    "mcc": "627",
    "mnc": "03",
    "iso": "gq",
    "country": "Equatorial Guinea",
    "country_code": "240",
    "network": "HiTs-GE"
  },
  {
    "mcc": "627",
    "mnc": "01",
    "iso": "gq",
    "country": "Equatorial Guinea",
    "country_code": "240",
    "network": "ORANGE/GETESA"
  },
  {
    "mcc": "657",
    "mnc": "01",
    "iso": "er",
    "country": "Eritrea",
    "country_code": "291",
    "network": "Eritel"
  },
  {
    "mcc": "248",
    "mnc": "01",
    "iso": "ee",
    "country": "Estonia",
    "country_code": "372",
    "network": "EMT GSM"
  },
  {
    "mcc": "248",
    "mnc": "02",
    "iso": "ee",
    "country": "Estonia",
    "country_code": "372",
    "network": "Radiolinja Eesti"
  },
  {
    "mcc": "248",
    "mnc": "03",
    "iso": "ee",
    "country": "Estonia",
    "country_code": "372",
    "network": "Tele2 Eesti AS"
  },
  {
    "mcc": "248",
    "mnc": "04",
    "iso": "ee",
    "country": "Estonia",
    "country_code": "372",
    "network": "Top Connect OU"
  },
  {
    "mcc": "636",
    "mnc": "01",
    "iso": "et",
    "country": "Ethiopia",
    "country_code": "251",
    "network": "ETH/MTN"
  },
  {
    "mcc": "750",
    "mnc": "001",
    "iso": "fk",
    "country": "Falkland Islands (Malvinas)",
    "country_code": "500",
    "network": "Cable and Wireless South Atlantic Ltd (Falkland Islands"
  },
  {
    "mcc": "288",
    "mnc": "03",
    "iso": "fo",
    "country": "Faroe Islands",
    "country_code": "298",
    "network": "Edge Mobile Sp/F"
  },
  {
    "mcc": "288",
    "mnc": "01",
    "iso": "fo",
    "country": "Faroe Islands",
    "country_code": "298",
    "network": "Faroese Telecom"
  },
  {
    "mcc": "288",
    "mnc": "02",
    "iso": "fo",
    "country": "Faroe Islands",
    "country_code": "298",
    "network": "Kall GSM"
  },
  {
    "mcc": "542",
    "mnc": "02",
    "iso": "fj",
    "country": "Fiji",
    "country_code": "679",
    "network": "DigiCell"
  },
  {
    "mcc": "542",
    "mnc": "01",
    "iso": "fj",
    "country": "Fiji",
    "country_code": "679",
    "network": "Vodafone"
  },
  {
    "mcc": "244",
    "mnc": "14",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "Alands"
  },
  {
    "mcc": "244",
    "mnc": "26",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "Compatel Ltd"
  },
  {
    "mcc": "244",
    "mnc": "04",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "DNA/Finnet"
  },
  {
    "mcc": "244",
    "mnc": "13",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "DNA/Finnet"
  },
  {
    "mcc": "244",
    "mnc": "03",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "DNA/Finnet"
  },
  {
    "mcc": "244",
    "mnc": "12",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "DNA/Finnet"
  },
  {
    "mcc": "244",
    "mnc": "05",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "Elisa/Saunalahti"
  },
  {
    "mcc": "244",
    "mnc": "21",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "Elisa/Saunalahti"
  },
  {
    "mcc": "244",
    "mnc": "82",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "ID-Mobile"
  },
  {
    "mcc": "244",
    "mnc": "11",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "Mundio Mobile (Finland) Ltd"
  },
  {
    "mcc": "244",
    "mnc": "09",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "Nokia Oyj"
  },
  {
    "mcc": "244",
    "mnc": "10",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "TDC Oy Finland"
  },
  {
    "mcc": "244",
    "mnc": "91",
    "iso": "fi",
    "country": "Finland",
    "country_code": "358",
    "network": "TeliaSonera"
  },
  {
    "mcc": "208",
    "mnc": "27",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "AFONE SA"
  },
  {
    "mcc": "208",
    "mnc": "92",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Association Plate-forme Telecom"
  },
  {
    "mcc": "208",
    "mnc": "28",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Astrium"
  },
  {
    "mcc": "208",
    "mnc": "21",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Bouygues Telecom"
  },
  {
    "mcc": "208",
    "mnc": "20",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Bouygues Telecom"
  },
  {
    "mcc": "208",
    "mnc": "88",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Bouygues Telecom"
  },
  {
    "mcc": "208",
    "mnc": "14",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Lliad/FREE Mobile"
  },
  {
    "mcc": "208",
    "mnc": "07",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "GlobalStar"
  },
  {
    "mcc": "208",
    "mnc": "06",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "GlobalStar"
  },
  {
    "mcc": "208",
    "mnc": "05",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "GlobalStar"
  },
  {
    "mcc": "208",
    "mnc": "29",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Orange"
  },
  {
    "mcc": "208",
    "mnc": "17",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Legos - Local Exchange Global Operation Services SA"
  },
  {
    "mcc": "208",
    "mnc": "16",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Lliad/FREE Mobile"
  },
  {
    "mcc": "208",
    "mnc": "15",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Lliad/FREE Mobile"
  },
  {
    "mcc": "208",
    "mnc": "25",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Lycamobile SARL"
  },
  {
    "mcc": "208",
    "mnc": "24",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "MobiquiThings"
  },
  {
    "mcc": "208",
    "mnc": "03",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "MobiquiThings"
  },
  {
    "mcc": "208",
    "mnc": "31",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Mundio Mobile (France) Ltd"
  },
  {
    "mcc": "208",
    "mnc": "26",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "NRJ"
  },
  {
    "mcc": "208",
    "mnc": "89",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Virgin Mobile/Omer"
  },
  {
    "mcc": "208",
    "mnc": "23",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Virgin Mobile/Omer"
  },
  {
    "mcc": "208",
    "mnc": "91",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Orange"
  },
  {
    "mcc": "208",
    "mnc": "02",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Orange"
  },
  {
    "mcc": "208",
    "mnc": "01",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Orange"
  },
  {
    "mcc": "208",
    "mnc": "13",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "S.F.R."
  },
  {
    "mcc": "208",
    "mnc": "11",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "S.F.R."
  },
  {
    "mcc": "208",
    "mnc": "10",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "S.F.R."
  },
  {
    "mcc": "208",
    "mnc": "09",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "S.F.R."
  },
  {
    "mcc": "208",
    "mnc": "04",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "SISTEER"
  },
  {
    "mcc": "208",
    "mnc": "00",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Tel/Te"
  },
  {
    "mcc": "208",
    "mnc": "22",
    "iso": "fr",
    "country": "France",
    "country_code": "33",
    "network": "Transatel SA"
  },
  {
    "mcc": "340",
    "mnc": "20",
    "iso": "fg",
    "country": "French Guiana",
    "country_code": "594",
    "network": "Bouygues/DigiCel"
  },
  {
    "mcc": "340",
    "mnc": "01",
    "iso": "fg",
    "country": "French Guiana",
    "country_code": "594",
    "network": "Orange Caribe"
  },
  {
    "mcc": "340",
    "mnc": "02",
    "iso": "fg",
    "country": "French Guiana",
    "country_code": "594",
    "network": "Outremer Telecom"
  },
  {
    "mcc": "340",
    "mnc": "03",
    "iso": "fg",
    "country": "French Guiana",
    "country_code": "594",
    "network": "TelCell GSM"
  },
  {
    "mcc": "340",
    "mnc": "11",
    "iso": "fg",
    "country": "French Guiana",
    "country_code": "594",
    "network": "TelCell GSM"
  },
  {
    "mcc": "547",
    "mnc": "15",
    "iso": "pf",
    "country": "French Polynesia",
    "country_code": "689",
    "network": "Pacific Mobile Telecom (PMT)"
  },
  {
    "mcc": "547",
    "mnc": "20",
    "iso": "pf",
    "country": "French Polynesia",
    "country_code": "689",
    "network": "Vini/Tikiphone"
  },
  {
    "mcc": "628",
    "mnc": "04",
    "iso": "ga",
    "country": "Gabon",
    "country_code": "241",
    "network": "Azur/Usan S.A."
  },
  {
    "mcc": "628",
    "mnc": "01",
    "iso": "ga",
    "country": "Gabon",
    "country_code": "241",
    "network": "Libertis S.A."
  },
  {
    "mcc": "628",
    "mnc": "02",
    "iso": "ga",
    "country": "Gabon",
    "country_code": "241",
    "network": "MOOV/Telecel"
  },
  {
    "mcc": "628",
    "mnc": "03",
    "iso": "ga",
    "country": "Gabon",
    "country_code": "241",
    "network": "Airtel/ZAIN/Celtel Gabon S.A."
  },
  {
    "mcc": "607",
    "mnc": "02",
    "iso": "gm",
    "country": "Gambia",
    "country_code": "220",
    "network": "Africel"
  },
  {
    "mcc": "607",
    "mnc": "03",
    "iso": "gm",
    "country": "Gambia",
    "country_code": "220",
    "network": "Comium"
  },
  {
    "mcc": "607",
    "mnc": "01",
    "iso": "gm",
    "country": "Gambia",
    "country_code": "220",
    "network": "Gamcel"
  },
  {
    "mcc": "607",
    "mnc": "04",
    "iso": "gm",
    "country": "Gambia",
    "country_code": "220",
    "network": "Q-Cell"
  },
  {
    "mcc": "282",
    "mnc": "01",
    "iso": "ge",
    "country": "Georgia",
    "country_code": "995",
    "network": "Geocell Ltd."
  },
  {
    "mcc": "282",
    "mnc": "03",
    "iso": "ge",
    "country": "Georgia",
    "country_code": "995",
    "network": "Iberiatel Ltd."
  },
  {
    "mcc": "282",
    "mnc": "02",
    "iso": "ge",
    "country": "Georgia",
    "country_code": "995",
    "network": "Magti GSM Ltd."
  },
  {
    "mcc": "282",
    "mnc": "04",
    "iso": "ge",
    "country": "Georgia",
    "country_code": "995",
    "network": "MobiTel/Beeline"
  },
  {
    "mcc": "282",
    "mnc": "05",
    "iso": "ge",
    "country": "Georgia",
    "country_code": "995",
    "network": "Silknet"
  },
  {
    "mcc": "262",
    "mnc": "17",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "E-Plus"
  },
  {
    "mcc": "262",
    "mnc": "10",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "DB Netz AG"
  },
  {
    "mcc": "262",
    "mnc": "n/a",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Debitel"
  },
  {
    "mcc": "262",
    "mnc": "77",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "E-Plus"
  },
  {
    "mcc": "262",
    "mnc": "20",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "E-Plus"
  },
  {
    "mcc": "262",
    "mnc": "03",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "E-Plus"
  },
  {
    "mcc": "262",
    "mnc": "05",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "E-Plus"
  },
  {
    "mcc": "262",
    "mnc": "12",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "E-Plus"
  },
  {
    "mcc": "262",
    "mnc": "14",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Group 3G UMTS"
  },
  {
    "mcc": "262",
    "mnc": "43",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Lycamobile"
  },
  {
    "mcc": "262",
    "mnc": "13",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Mobilcom"
  },
  {
    "mcc": "262",
    "mnc": "08",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "O2"
  },
  {
    "mcc": "262",
    "mnc": "11",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "O2"
  },
  {
    "mcc": "262",
    "mnc": "07",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "O2"
  },
  {
    "mcc": "262",
    "mnc": "33",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Sipgate"
  },
  {
    "mcc": "262",
    "mnc": "22",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Sipgate"
  },
  {
    "mcc": "262",
    "mnc": "n/a",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Talkline"
  },
  {
    "mcc": "262",
    "mnc": "01",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "T-mobile/Telekom"
  },
  {
    "mcc": "262",
    "mnc": "06",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "T-mobile/Telekom"
  },
  {
    "mcc": "262",
    "mnc": "16",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Telogic/ViStream"
  },
  {
    "mcc": "262",
    "mnc": "09",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Vodafone D2"
  },
  {
    "mcc": "262",
    "mnc": "04",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Vodafone D2"
  },
  {
    "mcc": "262",
    "mnc": "02",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Vodafone D2"
  },
  {
    "mcc": "262",
    "mnc": "42",
    "iso": "de",
    "country": "Germany",
    "country_code": "49",
    "network": "Vodafone D2"
  },
  {
    "mcc": "620",
    "mnc": "03",
    "iso": "gh",
    "country": "Ghana",
    "country_code": "233",
    "network": "Airtel/Tigo"
  },
  {
    "mcc": "620",
    "mnc": "06",
    "iso": "gh",
    "country": "Ghana",
    "country_code": "233",
    "network": "Airtel/Tigo"
  },
  {
    "mcc": "620",
    "mnc": "04",
    "iso": "gh",
    "country": "Ghana",
    "country_code": "233",
    "network": "Expresso Ghana Ltd"
  },
  {
    "mcc": "620",
    "mnc": "07",
    "iso": "gh",
    "country": "Ghana",
    "country_code": "233",
    "network": "GloMobile"
  },
  {
    "mcc": "620",
    "mnc": "01",
    "iso": "gh",
    "country": "Ghana",
    "country_code": "233",
    "network": "MTN"
  },
  {
    "mcc": "620",
    "mnc": "02",
    "iso": "gh",
    "country": "Ghana",
    "country_code": "233",
    "network": "Vodafone"
  },
  {
    "mcc": "266",
    "mnc": "06",
    "iso": "gi",
    "country": "Gibraltar",
    "country_code": "350",
    "network": "CTS Mobile"
  },
  {
    "mcc": "266",
    "mnc": "09",
    "iso": "gi",
    "country": "Gibraltar",
    "country_code": "350",
    "network": "eazi telecom"
  },
  {
    "mcc": "266",
    "mnc": "01",
    "iso": "gi",
    "country": "Gibraltar",
    "country_code": "350",
    "network": "Gibtel GSM"
  },
  {
    "mcc": "202",
    "mnc": "07",
    "iso": "gr",
    "country": "Greece",
    "country_code": "30",
    "network": "AMD Telecom SA"
  },
  {
    "mcc": "202",
    "mnc": "02",
    "iso": "gr",
    "country": "Greece",
    "country_code": "30",
    "network": "Cosmote"
  },
  {
    "mcc": "202",
    "mnc": "01",
    "iso": "gr",
    "country": "Greece",
    "country_code": "30",
    "network": "Cosmote"
  },
  {
    "mcc": "202",
    "mnc": "14",
    "iso": "gr",
    "country": "Greece",
    "country_code": "30",
    "network": "CyTa Mobile"
  },
  {
    "mcc": "202",
    "mnc": "04",
    "iso": "gr",
    "country": "Greece",
    "country_code": "30",
    "network": "Organismos Sidirodromon Ellados (OSE)"
  },
  {
    "mcc": "202",
    "mnc": "03",
    "iso": "gr",
    "country": "Greece",
    "country_code": "30",
    "network": "OTE Hellenic Telecommunications Organization SA"
  },
  {
    "mcc": "202",
    "mnc": "10",
    "iso": "gr",
    "country": "Greece",
    "country_code": "30",
    "network": "Tim/Wind"
  },
  {
    "mcc": "202",
    "mnc": "09",
    "iso": "gr",
    "country": "Greece",
    "country_code": "30",
    "network": "Tim/Wind"
  },
  {
    "mcc": "202",
    "mnc": "05",
    "iso": "gr",
    "country": "Greece",
    "country_code": "30",
    "network": "Vodafone"
  },
  {
    "mcc": "290",
    "mnc": "01",
    "iso": "gl",
    "country": "Greenland",
    "country_code": "299",
    "network": "Tele Greenland"
  },
  {
    "mcc": "352",
    "mnc": "110",
    "iso": "gd",
    "country": "Grenada",
    "country_code": "1473",
    "network": "Cable & Wireless"
  },
  {
    "mcc": "352",
    "mnc": "030",
    "iso": "gd",
    "country": "Grenada",
    "country_code": "1473",
    "network": "Digicel"
  },
  {
    "mcc": "352",
    "mnc": "050",
    "iso": "gd",
    "country": "Grenada",
    "country_code": "1473",
    "network": "Digicel"
  },
  {
    "mcc": "340",
    "mnc": "08",
    "iso": "gp",
    "country": "Guadeloupe ",
    "country_code": "590",
    "network": "Dauphin Telecom SU (Guadeloupe Telecom)"
  },
  {
    "mcc": "340",
    "mnc": "10",
    "iso": "gp",
    "country": "Guadeloupe ",
    "country_code": "590",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "370",
    "iso": "gu",
    "country": "Guam",
    "country_code": "1671",
    "network": "Docomo"
  },
  {
    "mcc": "310",
    "mnc": "470",
    "iso": "gu",
    "country": "Guam",
    "country_code": "1671",
    "network": "Docomo"
  },
  {
    "mcc": "310",
    "mnc": "140",
    "iso": "gu",
    "country": "Guam",
    "country_code": "1671",
    "network": "GTA Wireless"
  },
  {
    "mcc": "310",
    "mnc": "033",
    "iso": "gu",
    "country": "Guam",
    "country_code": "1671",
    "network": "Guam Teleph. Auth"
  },
  {
    "mcc": "310",
    "mnc": "032",
    "iso": "gu",
    "country": "Guam",
    "country_code": "1671",
    "network": "IT&E OverSeas"
  },
  {
    "mcc": "311",
    "mnc": "250",
    "iso": "gu",
    "country": "Guam",
    "country_code": "1671",
    "network": "Wave Runner LLC"
  },
  {
    "mcc": "704",
    "mnc": "01",
    "iso": "gt",
    "country": "Guatemala",
    "country_code": "502",
    "network": "Claro"
  },
  {
    "mcc": "704",
    "mnc": "03",
    "iso": "gt",
    "country": "Guatemala",
    "country_code": "502",
    "network": "Telefonica"
  },
  {
    "mcc": "704",
    "mnc": "02",
    "iso": "gt",
    "country": "Guatemala",
    "country_code": "502",
    "network": "TIGO/COMCEL"
  },
  {
    "mcc": "611",
    "mnc": "04",
    "iso": "gn",
    "country": "Guinea",
    "country_code": "224",
    "network": "MTN/Areeba"
  },
  {
    "mcc": "611",
    "mnc": "05",
    "iso": "gn",
    "country": "Guinea",
    "country_code": "224",
    "network": "Celcom"
  },
  {
    "mcc": "611",
    "mnc": "03",
    "iso": "gn",
    "country": "Guinea",
    "country_code": "224",
    "network": "Intercel"
  },
  {
    "mcc": "611",
    "mnc": "01",
    "iso": "gn",
    "country": "Guinea",
    "country_code": "224",
    "network": "Orange/Sonatel/Spacetel"
  },
  {
    "mcc": "611",
    "mnc": "02",
    "iso": "gn",
    "country": "Guinea",
    "country_code": "224",
    "network": "SotelGui"
  },
  {
    "mcc": "632",
    "mnc": "01",
    "iso": "gw",
    "country": "Guinea-Bissau",
    "country_code": "245",
    "network": "GuineTel"
  },
  {
    "mcc": "632",
    "mnc": "03",
    "iso": "gw",
    "country": "Guinea-Bissau",
    "country_code": "245",
    "network": "Orange"
  },
  {
    "mcc": "632",
    "mnc": "02",
    "iso": "gw",
    "country": "Guinea-Bissau",
    "country_code": "245",
    "network": "SpaceTel"
  },
  {
    "mcc": "738",
    "mnc": "02",
    "iso": "gy",
    "country": "Guyana",
    "country_code": "592",
    "network": "Cellink Plus"
  },
  {
    "mcc": "738",
    "mnc": "01",
    "iso": "gy",
    "country": "Guyana",
    "country_code": "592",
    "network": "DigiCel"
  },
  {
    "mcc": "372",
    "mnc": "01",
    "iso": "ht",
    "country": "Haiti",
    "country_code": "509",
    "network": "Comcel"
  },
  {
    "mcc": "372",
    "mnc": "02",
    "iso": "ht",
    "country": "Haiti",
    "country_code": "509",
    "network": "Digicel"
  },
  {
    "mcc": "372",
    "mnc": "03",
    "iso": "ht",
    "country": "Haiti",
    "country_code": "509",
    "network": "National Telecom SA (NatCom)"
  },
  {
    "mcc": "708",
    "mnc": "040",
    "iso": "hn",
    "country": "Honduras",
    "country_code": "504",
    "network": "Digicel"
  },
  {
    "mcc": "708",
    "mnc": "030",
    "iso": "hn",
    "country": "Honduras",
    "country_code": "504",
    "network": "HonduTel"
  },
  {
    "mcc": "708",
    "mnc": "001",
    "iso": "hn",
    "country": "Honduras",
    "country_code": "504",
    "network": "SERCOM/CLARO"
  },
  {
    "mcc": "708",
    "mnc": "002",
    "iso": "hn",
    "country": "Honduras",
    "country_code": "504",
    "network": "Telefonica/CELTEL"
  },
  {
    "mcc": "454",
    "mnc": "13",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "China Mobile/Peoples"
  },
  {
    "mcc": "454",
    "mnc": "12",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "China Mobile/Peoples"
  },
  {
    "mcc": "454",
    "mnc": "28",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "China Mobile/Peoples"
  },
  {
    "mcc": "454",
    "mnc": "09",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "China Motion"
  },
  {
    "mcc": "454",
    "mnc": "07",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "China Unicom Ltd"
  },
  {
    "mcc": "454",
    "mnc": "11",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "China-HongKong Telecom Ltd (CHKTL)"
  },
  {
    "mcc": "454",
    "mnc": "01",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "Citic Telecom Ltd."
  },
  {
    "mcc": "454",
    "mnc": "18",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "CSL Ltd."
  },
  {
    "mcc": "454",
    "mnc": "02",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "CSL Ltd."
  },
  {
    "mcc": "454",
    "mnc": "00",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "CSL Ltd."
  },
  {
    "mcc": "454",
    "mnc": "10",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "CSL/New World PCS Ltd."
  },
  {
    "mcc": "454",
    "mnc": "31",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "CTExcel"
  },
  {
    "mcc": "454",
    "mnc": "14",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "H3G/Hutchinson"
  },
  {
    "mcc": "454",
    "mnc": "05",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "H3G/Hutchinson"
  },
  {
    "mcc": "454",
    "mnc": "04",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "H3G/Hutchinson"
  },
  {
    "mcc": "454",
    "mnc": "03",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "H3G/Hutchinson"
  },
  {
    "mcc": "454",
    "mnc": "29",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "HKT/PCCW"
  },
  {
    "mcc": "454",
    "mnc": "16",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "HKT/PCCW"
  },
  {
    "mcc": "454",
    "mnc": "19",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "HKT/PCCW"
  },
  {
    "mcc": "454",
    "mnc": "20",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "HKT/PCCW"
  },
  {
    "mcc": "454",
    "mnc": "47",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "shared by private TETRA systems"
  },
  {
    "mcc": "454",
    "mnc": "24",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "Multibyte Info Technology Ltd"
  },
  {
    "mcc": "454",
    "mnc": "40",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "shared by private TETRA systems"
  },
  {
    "mcc": "454",
    "mnc": "08",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "Truephone"
  },
  {
    "mcc": "454",
    "mnc": "17",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "Vodafone/SmarTone"
  },
  {
    "mcc": "454",
    "mnc": "15",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "Vodafone/SmarTone"
  },
  {
    "mcc": "454",
    "mnc": "06",
    "iso": "hk",
    "country": "Hongkong, China",
    "country_code": "852",
    "network": "Vodafone/SmarTone"
  },
  {
    "mcc": "216",
    "mnc": "03",
    "iso": "hu",
    "country": "Hungary",
    "country_code": "36",
    "network": "DIGI"
  },
  {
    "mcc": "216",
    "mnc": "01",
    "iso": "hu",
    "country": "Hungary",
    "country_code": "36",
    "network": "Pannon/Telenor"
  },
  {
    "mcc": "216",
    "mnc": "30",
    "iso": "hu",
    "country": "Hungary",
    "country_code": "36",
    "network": "T-mobile/Magyar"
  },
  {
    "mcc": "216",
    "mnc": "71",
    "iso": "hu",
    "country": "Hungary",
    "country_code": "36",
    "network": "UPC Magyarorszag Kft."
  },
  {
    "mcc": "216",
    "mnc": "70",
    "iso": "hu",
    "country": "Hungary",
    "country_code": "36",
    "network": "Vodafone"
  },
  {
    "mcc": "274",
    "mnc": "09",
    "iso": "is",
    "country": "Iceland",
    "country_code": "354",
    "network": "Amitelo"
  },
  {
    "mcc": "274",
    "mnc": "07",
    "iso": "is",
    "country": "Iceland",
    "country_code": "354",
    "network": "IceCell"
  },
  {
    "mcc": "274",
    "mnc": "08",
    "iso": "is",
    "country": "Iceland",
    "country_code": "354",
    "network": "Siminn"
  },
  {
    "mcc": "274",
    "mnc": "01",
    "iso": "is",
    "country": "Iceland",
    "country_code": "354",
    "network": "Siminn"
  },
  {
    "mcc": "274",
    "mnc": "11",
    "iso": "is",
    "country": "Iceland",
    "country_code": "354",
    "network": "NOVA"
  },
  {
    "mcc": "274",
    "mnc": "04",
    "iso": "is",
    "country": "Iceland",
    "country_code": "354",
    "network": "VIKING/IMC"
  },
  {
    "mcc": "274",
    "mnc": "05",
    "iso": "is",
    "country": "Iceland",
    "country_code": "354",
    "network": "Vodafone/Tal hf"
  },
  {
    "mcc": "274",
    "mnc": "02",
    "iso": "is",
    "country": "Iceland",
    "country_code": "354",
    "network": "Vodafone/Tal hf"
  },
  {
    "mcc": "274",
    "mnc": "03",
    "iso": "is",
    "country": "Iceland",
    "country_code": "354",
    "network": "Vodafone/Tal hf"
  },
  {
    "mcc": "404",
    "mnc": "29",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Aircel"
  },
  {
    "mcc": "404",
    "mnc": "28",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Aircel"
  },
  {
    "mcc": "404",
    "mnc": "25",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Aircel"
  },
  {
    "mcc": "404",
    "mnc": "17",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Aircel"
  },
  {
    "mcc": "404",
    "mnc": "42",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Aircel"
  },
  {
    "mcc": "404",
    "mnc": "33",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Aircel"
  },
  {
    "mcc": "404",
    "mnc": "01",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Aircel Digilink India"
  },
  {
    "mcc": "404",
    "mnc": "15",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Aircel Digilink India"
  },
  {
    "mcc": "404",
    "mnc": "60",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Aircel Digilink India"
  },
  {
    "mcc": "405",
    "mnc": "53",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "AirTel"
  },
  {
    "mcc": "404",
    "mnc": "86",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Barakhamba Sales & Serv."
  },
  {
    "mcc": "404",
    "mnc": "13",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Barakhamba Sales & Serv."
  },
  {
    "mcc": "404",
    "mnc": "34",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "55",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "66",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "72",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "77",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "54",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "64",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "71",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "76",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "53",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "62",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "59",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "75",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "51",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "81",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "58",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "74",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "38",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "80",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "57",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "73",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "BSNL"
  },
  {
    "mcc": "404",
    "mnc": "10",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Bharti Airtel Limited (Delhi)"
  },
  {
    "mcc": "404",
    "mnc": "045",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Bharti Airtel Limited (Karnataka) (India)"
  },
  {
    "mcc": "404",
    "mnc": "79",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "CellOne A&N"
  },
  {
    "mcc": "404",
    "mnc": "82",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Escorts Telecom Ltd."
  },
  {
    "mcc": "404",
    "mnc": "89",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Escorts Telecom Ltd."
  },
  {
    "mcc": "404",
    "mnc": "88",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Escorts Telecom Ltd."
  },
  {
    "mcc": "404",
    "mnc": "87",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Escorts Telecom Ltd."
  },
  {
    "mcc": "404",
    "mnc": "56",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Escotel Mobile Communications"
  },
  {
    "mcc": "404",
    "mnc": "12",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Escotel Mobile Communications"
  },
  {
    "mcc": "404",
    "mnc": "19",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Escotel Mobile Communications"
  },
  {
    "mcc": "405",
    "mnc": "05",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Fascel Limited"
  },
  {
    "mcc": "404",
    "mnc": "05",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Fascel"
  },
  {
    "mcc": "404",
    "mnc": "998",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Fix Line"
  },
  {
    "mcc": "404",
    "mnc": "70",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Hexacom India"
  },
  {
    "mcc": "404",
    "mnc": "16",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Hexcom India"
  },
  {
    "mcc": "404",
    "mnc": "22",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Idea Cellular Ltd."
  },
  {
    "mcc": "404",
    "mnc": "78",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Idea Cellular Ltd."
  },
  {
    "mcc": "404",
    "mnc": "07",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Idea Cellular Ltd."
  },
  {
    "mcc": "404",
    "mnc": "04",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Idea Cellular Ltd."
  },
  {
    "mcc": "404",
    "mnc": "24",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Idea Cellular Ltd."
  },
  {
    "mcc": "404",
    "mnc": "68",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Mahanagar Telephone Nigam"
  },
  {
    "mcc": "404",
    "mnc": "69",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Mahanagar Telephone Nigam"
  },
  {
    "mcc": "404",
    "mnc": "83",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Reliable Internet Services"
  },
  {
    "mcc": "404",
    "mnc": "52",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Reliance Telecom Private"
  },
  {
    "mcc": "404",
    "mnc": "50",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Reliance Telecom Private"
  },
  {
    "mcc": "404",
    "mnc": "67",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Reliance Telecom Private"
  },
  {
    "mcc": "404",
    "mnc": "18",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Reliance Telecom Private"
  },
  {
    "mcc": "404",
    "mnc": "85",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Reliance Telecom Private"
  },
  {
    "mcc": "404",
    "mnc": "09",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Reliance Telecom Private"
  },
  {
    "mcc": "405",
    "mnc": "87",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Reliance Telecom Private"
  },
  {
    "mcc": "404",
    "mnc": "36",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Reliance Telecom Private"
  },
  {
    "mcc": "404",
    "mnc": "41",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "RPG Cellular"
  },
  {
    "mcc": "404",
    "mnc": "44",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Spice"
  },
  {
    "mcc": "404",
    "mnc": "14",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Spice"
  },
  {
    "mcc": "404",
    "mnc": "11",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Sterling Cellular Ltd."
  },
  {
    "mcc": "405",
    "mnc": "034",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "TATA / Karnataka"
  },
  {
    "mcc": "404",
    "mnc": "30",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Usha Martin Telecom"
  },
  {
    "mcc": "404",
    "mnc": "999",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Various Networks"
  },
  {
    "mcc": "404",
    "mnc": "27",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Unknown"
  },
  {
    "mcc": "404",
    "mnc": "43",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Vodafone/Essar/Hutch"
  },
  {
    "mcc": "404",
    "mnc": "20",
    "iso": "in",
    "country": "India",
    "country_code": "91",
    "network": "Unknown"
  },
  {
    "mcc": "510",
    "mnc": "08",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "Axis/Natrindo"
  },
  {
    "mcc": "510",
    "mnc": "99",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "Esia (PT Bakrie Telecom) (CDMA)"
  },
  {
    "mcc": "510",
    "mnc": "07",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "Flexi (PT Telkom) (CDMA)"
  },
  {
    "mcc": "510",
    "mnc": "89",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "H3G CP"
  },
  {
    "mcc": "510",
    "mnc": "01",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "Indosat/Satelindo/M3"
  },
  {
    "mcc": "510",
    "mnc": "21",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "Indosat/Satelindo/M3"
  },
  {
    "mcc": "510",
    "mnc": "00",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "PT Pasifik Satelit Nusantara (PSN)"
  },
  {
    "mcc": "510",
    "mnc": "27",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "PT Sampoerna Telekomunikasi Indonesia (STI)"
  },
  {
    "mcc": "510",
    "mnc": "28",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "PT Smartfren Telecom Tbk"
  },
  {
    "mcc": "510",
    "mnc": "09",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "PT Smartfren Telecom Tbk"
  },
  {
    "mcc": "510",
    "mnc": "11",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "PT. Excelcom"
  },
  {
    "mcc": "510",
    "mnc": "07",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "Telkomsel"
  },
  {
    "mcc": "510",
    "mnc": "10",
    "iso": "id",
    "country": "Indonesia",
    "country_code": "62",
    "network": "Telkomsel"
  },
  {
    "mcc": "901",
    "mnc": "13",
    "iso": "n/a",
    "country": "International Networks",
    "country_code": "882",
    "network": "Antarctica"
  },
  {
    "mcc": "432",
    "mnc": "19",
    "iso": "ir",
    "country": "Iran ",
    "country_code": "98",
    "network": "Mobile Telecommunications Company of Esfahan JV-PJS (MTCE)"
  },
  {
    "mcc": "432",
    "mnc": "70",
    "iso": "ir",
    "country": "Iran ",
    "country_code": "98",
    "network": "MTCE"
  },
  {
    "mcc": "432",
    "mnc": "35",
    "iso": "ir",
    "country": "Iran ",
    "country_code": "98",
    "network": "MTN/IranCell"
  },
  {
    "mcc": "432",
    "mnc": "20",
    "iso": "ir",
    "country": "Iran ",
    "country_code": "98",
    "network": "Rightel"
  },
  {
    "mcc": "432",
    "mnc": "32",
    "iso": "ir",
    "country": "Iran ",
    "country_code": "98",
    "network": "Taliya"
  },
  {
    "mcc": "432",
    "mnc": "11",
    "iso": "ir",
    "country": "Iran ",
    "country_code": "98",
    "network": "MCI/TCI"
  },
  {
    "mcc": "432",
    "mnc": "14",
    "iso": "ir",
    "country": "Iran ",
    "country_code": "98",
    "network": "TKC/KFZO"
  },
  {
    "mcc": "418",
    "mnc": "05",
    "iso": "iq",
    "country": "Iraq",
    "country_code": "964",
    "network": "Asia Cell"
  },
  {
    "mcc": "418",
    "mnc": "66",
    "iso": "iq",
    "country": "Iraq",
    "country_code": "964",
    "network": "Fastlink"
  },
  {
    "mcc": "418",
    "mnc": "92",
    "iso": "iq",
    "country": "Iraq",
    "country_code": "964",
    "network": "Itisaluna and Kalemat"
  },
  {
    "mcc": "418",
    "mnc": "40",
    "iso": "iq",
    "country": "Iraq",
    "country_code": "964",
    "network": "Korek"
  },
  {
    "mcc": "418",
    "mnc": "82",
    "iso": "iq",
    "country": "Iraq",
    "country_code": "964",
    "network": "Korek"
  },
  {
    "mcc": "418",
    "mnc": "45",
    "iso": "iq",
    "country": "Iraq",
    "country_code": "964",
    "network": "Mobitel (Iraq-Kurdistan) and Moutiny"
  },
  {
    "mcc": "418",
    "mnc": "30",
    "iso": "iq",
    "country": "Iraq",
    "country_code": "964",
    "network": "Orascom Telecom"
  },
  {
    "mcc": "418",
    "mnc": "20",
    "iso": "iq",
    "country": "Iraq",
    "country_code": "964",
    "network": "ZAIN/Atheer/Orascom"
  },
  {
    "mcc": "418",
    "mnc": "08",
    "iso": "iq",
    "country": "Iraq",
    "country_code": "964",
    "network": "Sanatel"
  },
  {
    "mcc": "272",
    "mnc": "04",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Access Telecom Ltd."
  },
  {
    "mcc": "272",
    "mnc": "09",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Clever Communications Ltd"
  },
  {
    "mcc": "272",
    "mnc": "07",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "eircom Ltd"
  },
  {
    "mcc": "272",
    "mnc": "11",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Tesco Mobile/Liffey Telecom"
  },
  {
    "mcc": "272",
    "mnc": "13",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Lycamobile"
  },
  {
    "mcc": "272",
    "mnc": "03",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Meteor Mobile Ltd."
  },
  {
    "mcc": "272",
    "mnc": "05",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Three"
  },
  {
    "mcc": "272",
    "mnc": "17",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Three"
  },
  {
    "mcc": "272",
    "mnc": "02",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Three"
  },
  {
    "mcc": "272",
    "mnc": "15",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Virgin Mobile"
  },
  {
    "mcc": "272",
    "mnc": "01",
    "iso": "ie",
    "country": "Ireland",
    "country_code": "353",
    "network": "Vodafone Eircell"
  },
  {
    "mcc": "425",
    "mnc": "14",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Alon Cellular Ltd"
  },
  {
    "mcc": "425",
    "mnc": "02",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Cellcom ltd."
  },
  {
    "mcc": "425",
    "mnc": "08",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Golan Telekom"
  },
  {
    "mcc": "425",
    "mnc": "15",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Home Cellular Ltd"
  },
  {
    "mcc": "425",
    "mnc": "77",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Hot Mobile/Mirs"
  },
  {
    "mcc": "425",
    "mnc": "07",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Hot Mobile/Mirs"
  },
  {
    "mcc": "425",
    "mnc": "09",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "We4G/Marathon 018"
  },
  {
    "mcc": "425",
    "mnc": "01",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Orange/Partner Co. Ltd."
  },
  {
    "mcc": "425",
    "mnc": "12",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Pelephone"
  },
  {
    "mcc": "425",
    "mnc": "03",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Pelephone"
  },
  {
    "mcc": "425",
    "mnc": "16",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Rami Levy Hashikma Marketing Communications Ltd"
  },
  {
    "mcc": "425",
    "mnc": "19",
    "iso": "il",
    "country": "Israel",
    "country_code": "972",
    "network": "Telzar/AZI "
  },
  {
    "mcc": "222",
    "mnc": "34",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "BT Italia SpA"
  },
  {
    "mcc": "222",
    "mnc": "36",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Digi Mobil"
  },
  {
    "mcc": "222",
    "mnc": "36",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Digi Mobil"
  },
  {
    "mcc": "222",
    "mnc": "02",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Elsacom"
  },
  {
    "mcc": "222",
    "mnc": "08",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Fastweb SpA"
  },
  {
    "mcc": "222",
    "mnc": "00",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Fix Line"
  },
  {
    "mcc": "222",
    "mnc": "99",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Hi3G"
  },
  {
    "mcc": "222",
    "mnc": "50",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Iliad"
  },
  {
    "mcc": "222",
    "mnc": "77",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "IPSE 2000"
  },
  {
    "mcc": "222",
    "mnc": "35",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Lycamobile Srl"
  },
  {
    "mcc": "222",
    "mnc": "07",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Noverca Italia Srl"
  },
  {
    "mcc": "222",
    "mnc": "33",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "PosteMobile SpA"
  },
  {
    "mcc": "222",
    "mnc": "00",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Premium Number(s)"
  },
  {
    "mcc": "222",
    "mnc": "30",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "RFI Rete Ferroviaria Italiana SpA"
  },
  {
    "mcc": "222",
    "mnc": "48",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Telecom Italia Mobile SpA"
  },
  {
    "mcc": "222",
    "mnc": "43",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Telecom Italia Mobile SpA"
  },
  {
    "mcc": "222",
    "mnc": "01",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "TIM"
  },
  {
    "mcc": "222",
    "mnc": "10",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Vodafone"
  },
  {
    "mcc": "222",
    "mnc": "06",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "Vodafone"
  },
  {
    "mcc": "222",
    "mnc": "00",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "VOIP Line"
  },
  {
    "mcc": "222",
    "mnc": "44",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "WIND (Blu) -"
  },
  {
    "mcc": "222",
    "mnc": "88",
    "iso": "it",
    "country": "Italy",
    "country_code": "39",
    "network": "WIND (Blu) -"
  },
  {
    "mcc": "612",
    "mnc": "07",
    "iso": "ci",
    "country": "Ivory Coast",
    "country_code": "225",
    "network": "Aircomm SA"
  },
  {
    "mcc": "612",
    "mnc": "02",
    "iso": "ci",
    "country": "Ivory Coast",
    "country_code": "225",
    "network": "Atlantik Tel./Moov"
  },
  {
    "mcc": "612",
    "mnc": "04",
    "iso": "ci",
    "country": "Ivory Coast",
    "country_code": "225",
    "network": "Comium"
  },
  {
    "mcc": "612",
    "mnc": "01",
    "iso": "ci",
    "country": "Ivory Coast",
    "country_code": "225",
    "network": "Comstar"
  },
  {
    "mcc": "612",
    "mnc": "05",
    "iso": "ci",
    "country": "Ivory Coast",
    "country_code": "225",
    "network": "MTN"
  },
  {
    "mcc": "612",
    "mnc": "03",
    "iso": "ci",
    "country": "Ivory Coast",
    "country_code": "225",
    "network": "Orange"
  },
  {
    "mcc": "612",
    "mnc": "06",
    "iso": "ci",
    "country": "Ivory Coast",
    "country_code": "225",
    "network": "OriCell"
  },
  {
    "mcc": "338",
    "mnc": "110",
    "iso": "jm",
    "country": "Jamaica",
    "country_code": "1876",
    "network": "Cable & Wireless"
  },
  {
    "mcc": "338",
    "mnc": "020",
    "iso": "jm",
    "country": "Jamaica",
    "country_code": "1876",
    "network": "Cable & Wireless"
  },
  {
    "mcc": "338",
    "mnc": "180",
    "iso": "jm",
    "country": "Jamaica",
    "country_code": "1876",
    "network": "Cable & Wireless"
  },
  {
    "mcc": "338",
    "mnc": "050",
    "iso": "jm",
    "country": "Jamaica",
    "country_code": "1876",
    "network": "DIGICEL/Mossel"
  },
  {
    "mcc": "440",
    "mnc": "00",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "Y-Mobile"
  },
  {
    "mcc": "440",
    "mnc": "74",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "70",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "89",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "51",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "75",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "56",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "441",
    "mnc": "70",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "52",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "76",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "71",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "53",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "77",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "08",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "72",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "54",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "79",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "07",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "73",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "55",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "88",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "50",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "441",
    "mnc": "44",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "13",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "23",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "01",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "21",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "99",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "34",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "69",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "16",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "25",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "64",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "37",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "43",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "27",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "02",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "22",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "31",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "87",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "17",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "92",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "65",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "36",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "58",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "28",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "03",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "12",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "91",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "32",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "61",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "18",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "93",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "40",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "66",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "35",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "29",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "09",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "49",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "90",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "33",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "60",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "19",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "94",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "41",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "67",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "14",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "30",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "10",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "62",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "39",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "45",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "24",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "98",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "441",
    "mnc": "42",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "68",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "15",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "26",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "11",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "63",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "38",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "99",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "NTT Docomo"
  },
  {
    "mcc": "440",
    "mnc": "78",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "Okinawa Cellular Telephone"
  },
  {
    "mcc": "440",
    "mnc": "47",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "95",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "41",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "441",
    "mnc": "64",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "46",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "97",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "42",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "90",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "441",
    "mnc": "65",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "92",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "98",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "93",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "43",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "48",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "06",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "441",
    "mnc": "61",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "94",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "44",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "04",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "441",
    "mnc": "62",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "96",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "45",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "20",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "40",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "441",
    "mnc": "63",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "SoftBank Mobile Corp"
  },
  {
    "mcc": "440",
    "mnc": "83",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "85",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "86",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "81",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "80",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "84",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "440",
    "mnc": "82",
    "iso": "jp",
    "country": "Japan",
    "country_code": "81",
    "network": "KDDI Corporation"
  },
  {
    "mcc": "416",
    "mnc": "77",
    "iso": "jo",
    "country": "Jordan",
    "country_code": "962",
    "network": "Orange/Petra"
  },
  {
    "mcc": "416",
    "mnc": "03",
    "iso": "jo",
    "country": "Jordan",
    "country_code": "962",
    "network": "Umniah Mobile Co."
  },
  {
    "mcc": "416",
    "mnc": "02",
    "iso": "jo",
    "country": "Jordan",
    "country_code": "962",
    "network": "Xpress"
  },
  {
    "mcc": "416",
    "mnc": "01",
    "iso": "jo",
    "country": "Jordan",
    "country_code": "962",
    "network": "ZAIN /J.M.T.S"
  },
  {
    "mcc": "401",
    "mnc": "01",
    "iso": "kz",
    "country": "Kazakhstan",
    "country_code": "7",
    "network": "Beeline/KaR-Tel LLP"
  },
  {
    "mcc": "401",
    "mnc": "07",
    "iso": "kz",
    "country": "Kazakhstan",
    "country_code": "7",
    "network": "Dalacom/Altel"
  },
  {
    "mcc": "401",
    "mnc": "02",
    "iso": "kz",
    "country": "Kazakhstan",
    "country_code": "7",
    "network": "K-Cell"
  },
  {
    "mcc": "401",
    "mnc": "77",
    "iso": "kz",
    "country": "Kazakhstan",
    "country_code": "7",
    "network": "Tele2/NEO/MTS"
  },
  {
    "mcc": "639",
    "mnc": "05",
    "iso": "ke",
    "country": "Kenya",
    "country_code": "254",
    "network": "Econet Wireless"
  },
  {
    "mcc": "639",
    "mnc": "02",
    "iso": "ke",
    "country": "Kenya",
    "country_code": "254",
    "network": "Safaricom Ltd."
  },
  {
    "mcc": "639",
    "mnc": "07",
    "iso": "ke",
    "country": "Kenya",
    "country_code": "254",
    "network": "Telkom fka. Orange"
  },
  {
    "mcc": "639",
    "mnc": "03",
    "iso": "ke",
    "country": "Kenya",
    "country_code": "254",
    "network": "Airtel/Zain/Celtel Ltd."
  },
  {
    "mcc": "545",
    "mnc": "09",
    "iso": "ki",
    "country": "Kiribati",
    "country_code": "686",
    "network": "Kiribati Frigate"
  },
  {
    "mcc": "467",
    "mnc": "193",
    "iso": "kp",
    "country": "Korea N., Dem. People's Rep.",
    "country_code": "850",
    "network": "Sun Net"
  },
  {
    "mcc": "450",
    "mnc": "02",
    "iso": "kr",
    "country": "Korea S, Republic of",
    "country_code": "82",
    "network": "KT Freetel Co. Ltd."
  },
  {
    "mcc": "450",
    "mnc": "04",
    "iso": "kr",
    "country": "Korea S, Republic of",
    "country_code": "82",
    "network": "KT Freetel Co. Ltd."
  },
  {
    "mcc": "450",
    "mnc": "08",
    "iso": "kr",
    "country": "Korea S, Republic of",
    "country_code": "82",
    "network": "KT Freetel Co. Ltd."
  },
  {
    "mcc": "450",
    "mnc": "06",
    "iso": "kr",
    "country": "Korea S, Republic of",
    "country_code": "82",
    "network": "LG Telecom"
  },
  {
    "mcc": "450",
    "mnc": "03",
    "iso": "kr",
    "country": "Korea S, Republic of",
    "country_code": "82",
    "network": "SK Telecom"
  },
  {
    "mcc": "450",
    "mnc": "05",
    "iso": "kr",
    "country": "Korea S, Republic of",
    "country_code": "82",
    "network": "SK Telecom Co. Ltd"
  },
  {
    "mcc": "221",
    "mnc": "06",
    "iso": "xk",
    "country": "Kosovo",
    "country_code": "383",
    "network": "Dardafon.Net LLC"
  },
  {
    "mcc": "221",
    "mnc": "02",
    "iso": "xk",
    "country": "Kosovo",
    "country_code": "383",
    "network": "IPKO"
  },
  {
    "mcc": "221",
    "mnc": "03",
    "iso": "xk",
    "country": "Kosovo",
    "country_code": "383",
    "network": "MTS DOO"
  },
  {
    "mcc": "221",
    "mnc": "01",
    "iso": "xk",
    "country": "Kosovo",
    "country_code": "383",
    "network": "Vala"
  },
  {
    "mcc": "419",
    "mnc": "02",
    "iso": "kw",
    "country": "Kuwait",
    "country_code": "965",
    "network": "Zain"
  },
  {
    "mcc": "419",
    "mnc": "04",
    "iso": "kw",
    "country": "Kuwait",
    "country_code": "965",
    "network": "Viva"
  },
  {
    "mcc": "419",
    "mnc": "03",
    "iso": "kw",
    "country": "Kuwait",
    "country_code": "965",
    "network": "Ooredoo"
  },
  {
    "mcc": "437",
    "mnc": "03",
    "iso": "kg",
    "country": "Kyrgyzstan",
    "country_code": "996",
    "network": "AkTel LLC"
  },
  {
    "mcc": "437",
    "mnc": "01",
    "iso": "kg",
    "country": "Kyrgyzstan",
    "country_code": "996",
    "network": "Beeline/Bitel"
  },
  {
    "mcc": "437",
    "mnc": "05",
    "iso": "kg",
    "country": "Kyrgyzstan",
    "country_code": "996",
    "network": "MEGACOM"
  },
  {
    "mcc": "437",
    "mnc": "09",
    "iso": "kg",
    "country": "Kyrgyzstan",
    "country_code": "996",
    "network": "O!/NUR Telecom"
  },
  {
    "mcc": "457",
    "mnc": "02",
    "iso": "la",
    "country": "Laos P.D.R.",
    "country_code": "856",
    "network": "ETL Mobile"
  },
  {
    "mcc": "457",
    "mnc": "01",
    "iso": "la",
    "country": "Laos P.D.R.",
    "country_code": "856",
    "network": "Lao Tel"
  },
  {
    "mcc": "457",
    "mnc": "08",
    "iso": "la",
    "country": "Laos P.D.R.",
    "country_code": "856",
    "network": "Beeline/Tigo/Millicom"
  },
  {
    "mcc": "457",
    "mnc": "03",
    "iso": "la",
    "country": "Laos P.D.R.",
    "country_code": "856",
    "network": "UNITEL/LAT"
  },
  {
    "mcc": "247",
    "mnc": "05",
    "iso": "lv",
    "country": "Latvia",
    "country_code": "371",
    "network": "Bite"
  },
  {
    "mcc": "247",
    "mnc": "01",
    "iso": "lv",
    "country": "Latvia",
    "country_code": "371",
    "network": "Latvian Mobile Phone"
  },
  {
    "mcc": "247",
    "mnc": "09",
    "iso": "lv",
    "country": "Latvia",
    "country_code": "371",
    "network": "SIA Camel Mobile"
  },
  {
    "mcc": "247",
    "mnc": "08",
    "iso": "lv",
    "country": "Latvia",
    "country_code": "371",
    "network": "SIA IZZI"
  },
  {
    "mcc": "247",
    "mnc": "07",
    "iso": "lv",
    "country": "Latvia",
    "country_code": "371",
    "network": "SIA Master Telecom"
  },
  {
    "mcc": "247",
    "mnc": "06",
    "iso": "lv",
    "country": "Latvia",
    "country_code": "371",
    "network": "SIA Rigatta"
  },
  {
    "mcc": "247",
    "mnc": "02",
    "iso": "lv",
    "country": "Latvia",
    "country_code": "371",
    "network": "Tele2"
  },
  {
    "mcc": "247",
    "mnc": "03",
    "iso": "lv",
    "country": "Latvia",
    "country_code": "371",
    "network": "TRIATEL/Telekom Baltija"
  },
  {
    "mcc": "415",
    "mnc": "35",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "Cellis"
  },
  {
    "mcc": "415",
    "mnc": "33",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "Cellis"
  },
  {
    "mcc": "415",
    "mnc": "32",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "Cellis"
  },
  {
    "mcc": "415",
    "mnc": "34",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "FTML Cellis"
  },
  {
    "mcc": "415",
    "mnc": "39",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "MIC2/LibanCell/MTC"
  },
  {
    "mcc": "415",
    "mnc": "38",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "MIC2/LibanCell/MTC"
  },
  {
    "mcc": "415",
    "mnc": "37",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "MIC2/LibanCell/MTC"
  },
  {
    "mcc": "415",
    "mnc": "01",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "MIC1 (Alfa)"
  },
  {
    "mcc": "415",
    "mnc": "03",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "MIC2/LibanCell/MTC"
  },
  {
    "mcc": "415",
    "mnc": "36",
    "iso": "lb",
    "country": "Lebanon",
    "country_code": "961",
    "network": "MIC2/LibanCell/MTC"
  },
  {
    "mcc": "651",
    "mnc": "02",
    "iso": "ls",
    "country": "Lesotho",
    "country_code": "266",
    "network": "Econet/Ezi-cel"
  },
  {
    "mcc": "651",
    "mnc": "01",
    "iso": "ls",
    "country": "Lesotho",
    "country_code": "266",
    "network": "Vodacom Lesotho"
  },
  {
    "mcc": "618",
    "mnc": "04",
    "iso": "lr",
    "country": "Liberia",
    "country_code": "231",
    "network": "Comium BVI"
  },
  {
    "mcc": "618",
    "mnc": "02",
    "iso": "lr",
    "country": "Liberia",
    "country_code": "231",
    "network": "Libercell"
  },
  {
    "mcc": "618",
    "mnc": "20",
    "iso": "lr",
    "country": "Liberia",
    "country_code": "231",
    "network": "LibTelco"
  },
  {
    "mcc": "618",
    "mnc": "01",
    "iso": "lr",
    "country": "Liberia",
    "country_code": "231",
    "network": "Lonestar"
  },
  {
    "mcc": "618",
    "mnc": "07",
    "iso": "lr",
    "country": "Liberia",
    "country_code": "231",
    "network": "Orange"
  },
  {
    "mcc": "606",
    "mnc": "02",
    "iso": "ly",
    "country": "Libya",
    "country_code": "218",
    "network": "Al-Madar"
  },
  {
    "mcc": "606",
    "mnc": "01",
    "iso": "ly",
    "country": "Libya",
    "country_code": "218",
    "network": "Al-Madar"
  },
  {
    "mcc": "606",
    "mnc": "06",
    "iso": "ly",
    "country": "Libya",
    "country_code": "218",
    "network": "Hatef"
  },
  {
    "mcc": "606",
    "mnc": "00",
    "iso": "ly",
    "country": "Libya",
    "country_code": "218",
    "network": "Libyana"
  },
  {
    "mcc": "606",
    "mnc": "03",
    "iso": "ly",
    "country": "Libya",
    "country_code": "218",
    "network": "Libyana"
  },
  {
    "mcc": "295",
    "mnc": "06",
    "iso": "li",
    "country": "Liechtenstein",
    "country_code": "423",
    "network": "CUBIC (Liechtenstein"
  },
  {
    "mcc": "295",
    "mnc": "07",
    "iso": "li",
    "country": "Liechtenstein",
    "country_code": "423",
    "network": "First Mobile AG"
  },
  {
    "mcc": "295",
    "mnc": "02",
    "iso": "li",
    "country": "Liechtenstein",
    "country_code": "423",
    "network": "Orange"
  },
  {
    "mcc": "295",
    "mnc": "01",
    "iso": "li",
    "country": "Liechtenstein",
    "country_code": "423",
    "network": "Swisscom FL AG"
  },
  {
    "mcc": "295",
    "mnc": "77",
    "iso": "li",
    "country": "Liechtenstein",
    "country_code": "423",
    "network": "Alpmobile/Tele2"
  },
  {
    "mcc": "295",
    "mnc": "05",
    "iso": "li",
    "country": "Liechtenstein",
    "country_code": "423",
    "network": "Telecom FL1 AG"
  },
  {
    "mcc": "246",
    "mnc": "02",
    "iso": "lt",
    "country": "Lithuania",
    "country_code": "370",
    "network": "Bite"
  },
  {
    "mcc": "246",
    "mnc": "01",
    "iso": "lt",
    "country": "Lithuania",
    "country_code": "370",
    "network": "Omnitel"
  },
  {
    "mcc": "246",
    "mnc": "03",
    "iso": "lt",
    "country": "Lithuania",
    "country_code": "370",
    "network": "Tele2"
  },
  {
    "mcc": "270",
    "mnc": "77",
    "iso": "lu",
    "country": "Luxembourg",
    "country_code": "352",
    "network": "Millicom Tango GSM"
  },
  {
    "mcc": "270",
    "mnc": "01",
    "iso": "lu",
    "country": "Luxembourg",
    "country_code": "352",
    "network": "P+T/Post LUXGSM"
  },
  {
    "mcc": "270",
    "mnc": "99",
    "iso": "lu",
    "country": "Luxembourg",
    "country_code": "352",
    "network": "Orange/VOXmobile S.A."
  },
  {
    "mcc": "455",
    "mnc": "01",
    "iso": "mo",
    "country": "Macao, China",
    "country_code": "853",
    "network": "C.T.M. TELEMOVEL+"
  },
  {
    "mcc": "455",
    "mnc": "04",
    "iso": "mo",
    "country": "Macao, China",
    "country_code": "853",
    "network": "C.T.M. TELEMOVEL+"
  },
  {
    "mcc": "455",
    "mnc": "02",
    "iso": "mo",
    "country": "Macao, China",
    "country_code": "853",
    "network": "China Telecom"
  },
  {
    "mcc": "455",
    "mnc": "03",
    "iso": "mo",
    "country": "Macao, China",
    "country_code": "853",
    "network": "Hutchison Telephone Co. Ltd"
  },
  {
    "mcc": "455",
    "mnc": "05",
    "iso": "mo",
    "country": "Macao, China",
    "country_code": "853",
    "network": "Hutchison Telephone Co. Ltd"
  },
  {
    "mcc": "455",
    "mnc": "06",
    "iso": "mo",
    "country": "Macao, China",
    "country_code": "853",
    "network": "Smartone Mobile"
  },
  {
    "mcc": "455",
    "mnc": "00",
    "iso": "mo",
    "country": "Macao, China",
    "country_code": "853",
    "network": "Smartone Mobile"
  },
  {
    "mcc": "294",
    "mnc": "75",
    "iso": "mk",
    "country": "Macedonia",
    "country_code": "389",
    "network": "ONE/Cosmofone"
  },
  {
    "mcc": "294",
    "mnc": "04",
    "iso": "mk",
    "country": "Macedonia",
    "country_code": "389",
    "network": "Lycamobile"
  },
  {
    "mcc": "294",
    "mnc": "02",
    "iso": "mk",
    "country": "Macedonia",
    "country_code": "389",
    "network": "ONE/Cosmofone"
  },
  {
    "mcc": "294",
    "mnc": "01",
    "iso": "mk",
    "country": "Macedonia",
    "country_code": "389",
    "network": "T-Mobile/Mobimak"
  },
  {
    "mcc": "294",
    "mnc": "03",
    "iso": "mk",
    "country": "Macedonia",
    "country_code": "389",
    "network": "VIP Mobile"
  },
  {
    "mcc": "646",
    "mnc": "01",
    "iso": "mg",
    "country": "Madagascar",
    "country_code": "261",
    "network": "Airtel/MADACOM"
  },
  {
    "mcc": "646",
    "mnc": "02",
    "iso": "mg",
    "country": "Madagascar",
    "country_code": "261",
    "network": "Orange/Soci"
  },
  {
    "mcc": "646",
    "mnc": "03",
    "iso": "mg",
    "country": "Madagascar",
    "country_code": "261",
    "network": "Sacel"
  },
  {
    "mcc": "646",
    "mnc": "04",
    "iso": "mg",
    "country": "Madagascar",
    "country_code": "261",
    "network": "Telma"
  },
  {
    "mcc": "650",
    "mnc": "01",
    "iso": "mw",
    "country": "Malawi",
    "country_code": "265",
    "network": "TNM/Telekom Network Ltd."
  },
  {
    "mcc": "650",
    "mnc": "10",
    "iso": "mw",
    "country": "Malawi",
    "country_code": "265",
    "network": "Airtel/Zain/Celtel ltd."
  },
  {
    "mcc": "502",
    "mnc": "01",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Art900"
  },
  {
    "mcc": "502",
    "mnc": "151",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Baraka Telecom Sdn Bhd"
  },
  {
    "mcc": "502",
    "mnc": "198",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "CelCom"
  },
  {
    "mcc": "502",
    "mnc": "19",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "CelCom"
  },
  {
    "mcc": "502",
    "mnc": "13",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "CelCom"
  },
  {
    "mcc": "502",
    "mnc": "10",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Digi Telecommunications"
  },
  {
    "mcc": "502",
    "mnc": "16",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Digi Telecommunications"
  },
  {
    "mcc": "502",
    "mnc": "20",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Electcoms Wireless Sdn Bhd"
  },
  {
    "mcc": "502",
    "mnc": "12",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Maxis"
  },
  {
    "mcc": "502",
    "mnc": "17",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Maxis"
  },
  {
    "mcc": "502",
    "mnc": "11",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "MTX Utara"
  },
  {
    "mcc": "502",
    "mnc": "153",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Webe/Packet One Networks (Malaysia) Sdn Bhd"
  },
  {
    "mcc": "502",
    "mnc": "155",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Samata Communications Sdn Bhd"
  },
  {
    "mcc": "502",
    "mnc": "154",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "Tron/Talk Focus Sdn Bhd"
  },
  {
    "mcc": "502",
    "mnc": "150",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "TuneTalk"
  },
  {
    "mcc": "502",
    "mnc": "18",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "U Mobile"
  },
  {
    "mcc": "502",
    "mnc": "195",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "XOX Com Sdn Bhd"
  },
  {
    "mcc": "502",
    "mnc": "152",
    "iso": "my",
    "country": "Malaysia",
    "country_code": "60",
    "network": "YES"
  },
  {
    "mcc": "472",
    "mnc": "01",
    "iso": "mv",
    "country": "Maldives",
    "country_code": "960",
    "network": "Dhiraagu/C&W"
  },
  {
    "mcc": "472",
    "mnc": "02",
    "iso": "mv",
    "country": "Maldives",
    "country_code": "960",
    "network": "Ooredo/Wataniya"
  },
  {
    "mcc": "610",
    "mnc": "03",
    "iso": "ml",
    "country": "Mali",
    "country_code": "223",
    "network": "ATEL SA"
  },
  {
    "mcc": "610",
    "mnc": "01",
    "iso": "ml",
    "country": "Mali",
    "country_code": "223",
    "network": "Malitel"
  },
  {
    "mcc": "610",
    "mnc": "02",
    "iso": "ml",
    "country": "Mali",
    "country_code": "223",
    "network": "Orange/IKATEL"
  },
  {
    "mcc": "278",
    "mnc": "21",
    "iso": "mt",
    "country": "Malta",
    "country_code": "356",
    "network": "GO Mobile"
  },
  {
    "mcc": "278",
    "mnc": "77",
    "iso": "mt",
    "country": "Malta",
    "country_code": "356",
    "network": "Melita"
  },
  {
    "mcc": "278",
    "mnc": "01",
    "iso": "mt",
    "country": "Malta",
    "country_code": "356",
    "network": "Vodafone"
  },
  {
    "mcc": "340",
    "mnc": "12",
    "iso": "mq",
    "country": "Martinique (French Department of)",
    "country_code": "596",
    "network": "UTS Caraibe"
  },
  {
    "mcc": "609",
    "mnc": "02",
    "iso": "mr",
    "country": "Mauritania",
    "country_code": "222",
    "network": "Chinguitel SA"
  },
  {
    "mcc": "609",
    "mnc": "01",
    "iso": "mr",
    "country": "Mauritania",
    "country_code": "222",
    "network": "Mattel"
  },
  {
    "mcc": "609",
    "mnc": "10",
    "iso": "mr",
    "country": "Mauritania",
    "country_code": "222",
    "network": "Mauritel"
  },
  {
    "mcc": "617",
    "mnc": "10",
    "iso": "mu",
    "country": "Mauritius",
    "country_code": "230",
    "network": "Emtel Ltd"
  },
  {
    "mcc": "617",
    "mnc": "03",
    "iso": "mu",
    "country": "Mauritius",
    "country_code": "230",
    "network": "CHILI/MTML"
  },
  {
    "mcc": "617",
    "mnc": "02",
    "iso": "mu",
    "country": "Mauritius",
    "country_code": "230",
    "network": "CHILI/MTML"
  },
  {
    "mcc": "617",
    "mnc": "01",
    "iso": "mu",
    "country": "Mauritius",
    "country_code": "230",
    "network": "Orange/Cellplus"
  },
  {
    "mcc": "334",
    "mnc": "04",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "AT&T/IUSACell"
  },
  {
    "mcc": "334",
    "mnc": "05",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "AT&T/IUSACell"
  },
  {
    "mcc": "334",
    "mnc": "50",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "AT&T/IUSACell"
  },
  {
    "mcc": "334",
    "mnc": "050",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "AT&T/IUSACell"
  },
  {
    "mcc": "334",
    "mnc": "040",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "AT&T/IUSACell"
  },
  {
    "mcc": "334",
    "mnc": "030",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "Movistar/Pegaso"
  },
  {
    "mcc": "334",
    "mnc": "03",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "Movistar/Pegaso"
  },
  {
    "mcc": "334",
    "mnc": "090",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "NEXTEL"
  },
  {
    "mcc": "334",
    "mnc": "010",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "NEXTEL"
  },
  {
    "mcc": "334",
    "mnc": "09",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "NEXTEL"
  },
  {
    "mcc": "334",
    "mnc": "01",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "NEXTEL"
  },
  {
    "mcc": "334",
    "mnc": "080",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "Operadora Unefon SA de CV"
  },
  {
    "mcc": "334",
    "mnc": "070",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "Operadora Unefon SA de CV"
  },
  {
    "mcc": "334",
    "mnc": "060",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "SAI PCS"
  },
  {
    "mcc": "334",
    "mnc": "020",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "TelCel/America Movil"
  },
  {
    "mcc": "334",
    "mnc": "02",
    "iso": "mx",
    "country": "Mexico",
    "country_code": "52",
    "network": "TelCel/America Movil"
  },
  {
    "mcc": "550",
    "mnc": "01",
    "iso": "fm",
    "country": "Micronesia",
    "country_code": "691",
    "network": "FSM Telecom"
  },
  {
    "mcc": "259",
    "mnc": "04",
    "iso": "md",
    "country": "Moldova",
    "country_code": "373",
    "network": "Eventis Mobile"
  },
  {
    "mcc": "259",
    "mnc": "99",
    "iso": "md",
    "country": "Moldova",
    "country_code": "373",
    "network": "IDC/Unite "
  },
  {
    "mcc": "259",
    "mnc": "05",
    "iso": "md",
    "country": "Moldova",
    "country_code": "373",
    "network": "IDC/Unite "
  },
  {
    "mcc": "259",
    "mnc": "03",
    "iso": "md",
    "country": "Moldova",
    "country_code": "373",
    "network": "IDC/Unite "
  },
  {
    "mcc": "259",
    "mnc": "02",
    "iso": "md",
    "country": "Moldova",
    "country_code": "373",
    "network": "Moldcell"
  },
  {
    "mcc": "259",
    "mnc": "01",
    "iso": "md",
    "country": "Moldova",
    "country_code": "373",
    "network": "Orange/Voxtel"
  },
  {
    "mcc": "212",
    "mnc": "10",
    "iso": "mc",
    "country": "Monaco",
    "country_code": "377",
    "network": "Monaco Telecom"
  },
  {
    "mcc": "212",
    "mnc": "01",
    "iso": "mc",
    "country": "Monaco",
    "country_code": "377",
    "network": "Monaco Telecom"
  },
  {
    "mcc": "428",
    "mnc": "98",
    "iso": "mn",
    "country": "Mongolia",
    "country_code": "976",
    "network": "G-Mobile Corporation Ltd"
  },
  {
    "mcc": "428",
    "mnc": "99",
    "iso": "mn",
    "country": "Mongolia",
    "country_code": "976",
    "network": "Mobicom"
  },
  {
    "mcc": "428",
    "mnc": "00",
    "iso": "mn",
    "country": "Mongolia",
    "country_code": "976",
    "network": "Skytel Co. Ltd"
  },
  {
    "mcc": "428",
    "mnc": "91",
    "iso": "mn",
    "country": "Mongolia",
    "country_code": "976",
    "network": "Skytel Co. Ltd"
  },
  {
    "mcc": "428",
    "mnc": "88",
    "iso": "mn",
    "country": "Mongolia",
    "country_code": "976",
    "network": "Unitel"
  },
  {
    "mcc": "297",
    "mnc": "02",
    "iso": "me",
    "country": "Montenegro",
    "country_code": "382",
    "network": "Monet/T-mobile"
  },
  {
    "mcc": "297",
    "mnc": "03",
    "iso": "me",
    "country": "Montenegro",
    "country_code": "382",
    "network": "Mtel"
  },
  {
    "mcc": "297",
    "mnc": "01",
    "iso": "me",
    "country": "Montenegro",
    "country_code": "382",
    "network": "Telenor/Promonte GSM"
  },
  {
    "mcc": "354",
    "mnc": "860",
    "iso": "ms",
    "country": "Montserrat",
    "country_code": "1664",
    "network": "Cable & Wireless "
  },
  {
    "mcc": "604",
    "mnc": "04",
    "iso": "ma",
    "country": "Morocco",
    "country_code": "212",
    "network": "Al Houria Telecom"
  },
  {
    "mcc": "604",
    "mnc": "99",
    "iso": "ma",
    "country": "Morocco",
    "country_code": "212",
    "network": "Al Houria Telecom"
  },
  {
    "mcc": "604",
    "mnc": "06",
    "iso": "ma",
    "country": "Morocco",
    "country_code": "212",
    "network": "IAM/Itissallat"
  },
  {
    "mcc": "604",
    "mnc": "01",
    "iso": "ma",
    "country": "Morocco",
    "country_code": "212",
    "network": "IAM/Itissallat"
  },
  {
    "mcc": "604",
    "mnc": "05",
    "iso": "ma",
    "country": "Morocco",
    "country_code": "212",
    "network": "INWI/WANA"
  },
  {
    "mcc": "604",
    "mnc": "02",
    "iso": "ma",
    "country": "Morocco",
    "country_code": "212",
    "network": "INWI/WANA"
  },
  {
    "mcc": "604",
    "mnc": "00",
    "iso": "ma",
    "country": "Morocco",
    "country_code": "212",
    "network": "Orange/Medi Telecom"
  },
  {
    "mcc": "643",
    "mnc": "01",
    "iso": "mz",
    "country": "Mozambique",
    "country_code": "258",
    "network": "mCel"
  },
  {
    "mcc": "643",
    "mnc": "03",
    "iso": "mz",
    "country": "Mozambique",
    "country_code": "258",
    "network": "Movitel"
  },
  {
    "mcc": "643",
    "mnc": "04",
    "iso": "mz",
    "country": "Mozambique",
    "country_code": "258",
    "network": "Vodacom"
  },
  {
    "mcc": "414",
    "mnc": "01",
    "iso": "mm",
    "country": "Myanmar (Burma)",
    "country_code": "95",
    "network": "Myanmar Post & Teleco."
  },
  {
    "mcc": "414",
    "mnc": "09",
    "iso": "mm",
    "country": "Myanmar (Burma)",
    "country_code": "95",
    "network": "Mytel (Myanmar"
  },
  {
    "mcc": "414",
    "mnc": "05",
    "iso": "mm",
    "country": "Myanmar (Burma)",
    "country_code": "95",
    "network": "Oreedoo"
  },
  {
    "mcc": "414",
    "mnc": "06",
    "iso": "mm",
    "country": "Myanmar (Burma)",
    "country_code": "95",
    "network": "Telenor"
  },
  {
    "mcc": "649",
    "mnc": "03",
    "iso": "na",
    "country": "Namibia",
    "country_code": "264",
    "network": "TN Mobile"
  },
  {
    "mcc": "649",
    "mnc": "01",
    "iso": "na",
    "country": "Namibia",
    "country_code": "264",
    "network": "MTC"
  },
  {
    "mcc": "649",
    "mnc": "02",
    "iso": "na",
    "country": "Namibia",
    "country_code": "264",
    "network": "Switch/Nam. Telec."
  },
  {
    "mcc": "429",
    "mnc": "02",
    "iso": "np",
    "country": "Nepal",
    "country_code": "977",
    "network": "Ncell"
  },
  {
    "mcc": "429",
    "mnc": "01",
    "iso": "np",
    "country": "Nepal",
    "country_code": "977",
    "network": "NT Mobile / Namaste"
  },
  {
    "mcc": "429",
    "mnc": "04",
    "iso": "np",
    "country": "Nepal",
    "country_code": "977",
    "network": "Smart Cell"
  },
  {
    "mcc": "204",
    "mnc": "14",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "6GMOBILE BV"
  },
  {
    "mcc": "204",
    "mnc": "23",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Aspider Solutions"
  },
  {
    "mcc": "204",
    "mnc": "05",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Elephant Talk Communications Premium Rate Services Netherlands BV"
  },
  {
    "mcc": "204",
    "mnc": "17",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Intercity Mobile Communications BV"
  },
  {
    "mcc": "204",
    "mnc": "10",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "KPN Telecom B.V."
  },
  {
    "mcc": "204",
    "mnc": "08",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "KPN Telecom B.V."
  },
  {
    "mcc": "204",
    "mnc": "69",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "KPN Telecom B.V."
  },
  {
    "mcc": "204",
    "mnc": "12",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "KPN/Telfort"
  },
  {
    "mcc": "204",
    "mnc": "28",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Lancelot BV"
  },
  {
    "mcc": "204",
    "mnc": "09",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Lycamobile Ltd"
  },
  {
    "mcc": "204",
    "mnc": "06",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Mundio/Vectone Mobile"
  },
  {
    "mcc": "204",
    "mnc": "21",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "NS Railinfrabeheer B.V."
  },
  {
    "mcc": "204",
    "mnc": "24",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Private Mobility Nederland BV"
  },
  {
    "mcc": "204",
    "mnc": "98",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "T-Mobile B.V."
  },
  {
    "mcc": "204",
    "mnc": "16",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "T-Mobile B.V."
  },
  {
    "mcc": "204",
    "mnc": "20",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "T-mobile/former Orange"
  },
  {
    "mcc": "204",
    "mnc": "02",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Tele2"
  },
  {
    "mcc": "204",
    "mnc": "07",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Teleena Holding BV"
  },
  {
    "mcc": "204",
    "mnc": "68",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Unify Mobile"
  },
  {
    "mcc": "204",
    "mnc": "18",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "UPC Nederland BV"
  },
  {
    "mcc": "204",
    "mnc": "04",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Vodafone Libertel"
  },
  {
    "mcc": "204",
    "mnc": "03",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Voiceworks Mobile BV"
  },
  {
    "mcc": "204",
    "mnc": "15",
    "iso": "nl",
    "country": "Netherlands",
    "country_code": "31",
    "network": "Ziggo BV"
  },
  {
    "mcc": "362",
    "mnc": "630",
    "iso": "an",
    "country": "Netherlands Antilles",
    "country_code": "599",
    "network": "Cingular Wireless"
  },
  {
    "mcc": "362",
    "mnc": "51",
    "iso": "an",
    "country": "Netherlands Antilles",
    "country_code": "599",
    "network": "TELCELL GSM"
  },
  {
    "mcc": "362",
    "mnc": "91",
    "iso": "an",
    "country": "Netherlands Antilles",
    "country_code": "599",
    "network": "SETEL GSM"
  },
  {
    "mcc": "362",
    "mnc": "951",
    "iso": "an",
    "country": "Netherlands Antilles",
    "country_code": "599",
    "network": "UTS Wireless"
  },
  {
    "mcc": "546",
    "mnc": "01",
    "iso": "nc",
    "country": "New Caledonia",
    "country_code": "687",
    "network": "OPT Mobilis"
  },
  {
    "mcc": "530",
    "mnc": "28",
    "iso": "nz",
    "country": "New Zealand",
    "country_code": "64",
    "network": "2degrees"
  },
  {
    "mcc": "530",
    "mnc": "05",
    "iso": "nz",
    "country": "New Zealand",
    "country_code": "64",
    "network": "Spark/NZ Telecom"
  },
  {
    "mcc": "530",
    "mnc": "02",
    "iso": "nz",
    "country": "New Zealand",
    "country_code": "64",
    "network": "Spark/NZ Telecom"
  },
  {
    "mcc": "530",
    "mnc": "04",
    "iso": "nz",
    "country": "New Zealand",
    "country_code": "64",
    "network": "Telstra"
  },
  {
    "mcc": "530",
    "mnc": "24",
    "iso": "nz",
    "country": "New Zealand",
    "country_code": "64",
    "network": "Two Degrees Mobile Ltd"
  },
  {
    "mcc": "530",
    "mnc": "01",
    "iso": "nz",
    "country": "New Zealand",
    "country_code": "64",
    "network": "Vodafone"
  },
  {
    "mcc": "530",
    "mnc": "03",
    "iso": "nz",
    "country": "New Zealand",
    "country_code": "64",
    "network": "Walker Wireless Ltd."
  },
  {
    "mcc": "710",
    "mnc": "21",
    "iso": "ni",
    "country": "Nicaragua",
    "country_code": "505",
    "network": "Empresa Nicaraguense de Telecomunicaciones SA (ENITEL)"
  },
  {
    "mcc": "710",
    "mnc": "30",
    "iso": "ni",
    "country": "Nicaragua",
    "country_code": "505",
    "network": "Movistar"
  },
  {
    "mcc": "710",
    "mnc": "73",
    "iso": "ni",
    "country": "Nicaragua",
    "country_code": "505",
    "network": "Claro"
  },
  {
    "mcc": "614",
    "mnc": "03",
    "iso": "ne",
    "country": "Niger",
    "country_code": "227",
    "network": "MOOV/TeleCel"
  },
  {
    "mcc": "614",
    "mnc": "04",
    "iso": "ne",
    "country": "Niger",
    "country_code": "227",
    "network": "Orange"
  },
  {
    "mcc": "614",
    "mnc": "01",
    "iso": "ne",
    "country": "Niger",
    "country_code": "227",
    "network": "Sahelcom"
  },
  {
    "mcc": "614",
    "mnc": "02",
    "iso": "ne",
    "country": "Niger",
    "country_code": "227",
    "network": "Airtel/Zain/CelTel"
  },
  {
    "mcc": "621",
    "mnc": "20",
    "iso": "ng",
    "country": "Nigeria",
    "country_code": "234",
    "network": "Airtel/ZAIN/Econet"
  },
  {
    "mcc": "621",
    "mnc": "60",
    "iso": "ng",
    "country": "Nigeria",
    "country_code": "234",
    "network": "ETISALAT"
  },
  {
    "mcc": "621",
    "mnc": "50",
    "iso": "ng",
    "country": "Nigeria",
    "country_code": "234",
    "network": "Glo Mobile"
  },
  {
    "mcc": "621",
    "mnc": "40",
    "iso": "ng",
    "country": "Nigeria",
    "country_code": "234",
    "network": "M-Tel/Nigeria Telecom. Ltd."
  },
  {
    "mcc": "621",
    "mnc": "30",
    "iso": "ng",
    "country": "Nigeria",
    "country_code": "234",
    "network": "MTN"
  },
  {
    "mcc": "621",
    "mnc": "99",
    "iso": "ng",
    "country": "Nigeria",
    "country_code": "234",
    "network": "Starcomms"
  },
  {
    "mcc": "621",
    "mnc": "25",
    "iso": "ng",
    "country": "Nigeria",
    "country_code": "234",
    "network": "Visafone"
  },
  {
    "mcc": "621",
    "mnc": "01",
    "iso": "ng",
    "country": "Nigeria",
    "country_code": "234",
    "network": "Visafone"
  },
  {
    "mcc": "555",
    "mnc": "01",
    "iso": "nu",
    "country": "Niue",
    "country_code": "683",
    "network": "Niue Telecom"
  },
  {
    "mcc": "242",
    "mnc": "09",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Com4 AS"
  },
  {
    "mcc": "242",
    "mnc": "14",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "ICE Nordisk Mobiltelefon AS"
  },
  {
    "mcc": "242",
    "mnc": "21",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Jernbaneverket (GSM-R)"
  },
  {
    "mcc": "242",
    "mnc": "20",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Jernbaneverket (GSM-R)"
  },
  {
    "mcc": "242",
    "mnc": "23",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Lycamobile Ltd"
  },
  {
    "mcc": "242",
    "mnc": "02",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Telia/Netcom"
  },
  {
    "mcc": "242",
    "mnc": "05",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Telia/Network Norway AS"
  },
  {
    "mcc": "242",
    "mnc": "22",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Telia/Network Norway AS"
  },
  {
    "mcc": "242",
    "mnc": "06",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "ICE Nordisk Mobiltelefon AS"
  },
  {
    "mcc": "242",
    "mnc": "08",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "TDC Mobil A/S"
  },
  {
    "mcc": "242",
    "mnc": "04",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Tele2"
  },
  {
    "mcc": "242",
    "mnc": "12",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Telenor"
  },
  {
    "mcc": "242",
    "mnc": "01",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Telenor"
  },
  {
    "mcc": "242",
    "mnc": "03",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Teletopia"
  },
  {
    "mcc": "242",
    "mnc": "017",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Ventelo AS"
  },
  {
    "mcc": "242",
    "mnc": "07",
    "iso": "no",
    "country": "Norway",
    "country_code": "47",
    "network": "Ventelo AS"
  },
  {
    "mcc": "422",
    "mnc": "03",
    "iso": "om",
    "country": "Oman",
    "country_code": "968",
    "network": "Nawras"
  },
  {
    "mcc": "422",
    "mnc": "02",
    "iso": "om",
    "country": "Oman",
    "country_code": "968",
    "network": "Oman Mobile/GTO"
  },
  {
    "mcc": "410",
    "mnc": "08",
    "iso": "pk",
    "country": "Pakistan",
    "country_code": "92",
    "network": "Instaphone"
  },
  {
    "mcc": "410",
    "mnc": "01",
    "iso": "pk",
    "country": "Pakistan",
    "country_code": "92",
    "network": "Mobilink"
  },
  {
    "mcc": "410",
    "mnc": "06",
    "iso": "pk",
    "country": "Pakistan",
    "country_code": "92",
    "network": "Telenor"
  },
  {
    "mcc": "410",
    "mnc": "03",
    "iso": "pk",
    "country": "Pakistan",
    "country_code": "92",
    "network": "UFONE/PAKTel"
  },
  {
    "mcc": "410",
    "mnc": "07",
    "iso": "pk",
    "country": "Pakistan",
    "country_code": "92",
    "network": "Warid Telecom"
  },
  {
    "mcc": "410",
    "mnc": "04",
    "iso": "pk",
    "country": "Pakistan",
    "country_code": "92",
    "network": "ZONG/CMPak"
  },
  {
    "mcc": "552",
    "mnc": "80",
    "iso": "pw",
    "country": "Palau (Republic of)",
    "country_code": "680",
    "network": "Palau Mobile Corp. (PMC) (Palau"
  },
  {
    "mcc": "552",
    "mnc": "01",
    "iso": "pw",
    "country": "Palau (Republic of)",
    "country_code": "680",
    "network": "Palau National Communications Corp. (PNCC) (Palau"
  },
  {
    "mcc": "552",
    "mnc": "02",
    "iso": "pw",
    "country": "Palau (Republic of)",
    "country_code": "680",
    "network": "PECI/PalauTel (Palau"
  },
  {
    "mcc": "425",
    "mnc": "05",
    "iso": "ps",
    "country": "Palestinian Territory",
    "country_code": "970",
    "network": "Jawwal"
  },
  {
    "mcc": "425",
    "mnc": "06",
    "iso": "ps",
    "country": "Palestinian Territory",
    "country_code": "970",
    "network": "Wataniya Mobile"
  },
  {
    "mcc": "714",
    "mnc": "01",
    "iso": "pa",
    "country": "Panama",
    "country_code": "507",
    "network": "Cable & W./Mas Movil"
  },
  {
    "mcc": "714",
    "mnc": "03",
    "iso": "pa",
    "country": "Panama",
    "country_code": "507",
    "network": "Claro"
  },
  {
    "mcc": "714",
    "mnc": "04",
    "iso": "pa",
    "country": "Panama",
    "country_code": "507",
    "network": "Digicel"
  },
  {
    "mcc": "714",
    "mnc": "020",
    "iso": "pa",
    "country": "Panama",
    "country_code": "507",
    "network": "Movistar"
  },
  {
    "mcc": "714",
    "mnc": "02",
    "iso": "pa",
    "country": "Panama",
    "country_code": "507",
    "network": "Movistar"
  },
  {
    "mcc": "537",
    "mnc": "03",
    "iso": "pg",
    "country": "Papua New Guinea",
    "country_code": "675",
    "network": "Digicel"
  },
  {
    "mcc": "537",
    "mnc": "02",
    "iso": "pg",
    "country": "Papua New Guinea",
    "country_code": "675",
    "network": "GreenCom PNG Ltd"
  },
  {
    "mcc": "537",
    "mnc": "01",
    "iso": "pg",
    "country": "Papua New Guinea",
    "country_code": "675",
    "network": "Pacific Mobile"
  },
  {
    "mcc": "744",
    "mnc": "02",
    "iso": "py",
    "country": "Paraguay",
    "country_code": "595",
    "network": "Claro/Hutchison"
  },
  {
    "mcc": "744",
    "mnc": "03",
    "iso": "py",
    "country": "Paraguay",
    "country_code": "595",
    "network": "Compa"
  },
  {
    "mcc": "744",
    "mnc": "01",
    "iso": "py",
    "country": "Paraguay",
    "country_code": "595",
    "network": "Hola/VOX"
  },
  {
    "mcc": "744",
    "mnc": "05",
    "iso": "py",
    "country": "Paraguay",
    "country_code": "595",
    "network": "TIM/Nucleo/Personal"
  },
  {
    "mcc": "744",
    "mnc": "04",
    "iso": "py",
    "country": "Paraguay",
    "country_code": "595",
    "network": "Tigo/Telecel"
  },
  {
    "mcc": "716",
    "mnc": "20",
    "iso": "pe",
    "country": "Peru",
    "country_code": "51",
    "network": "Claro /Amer.Mov./TIM"
  },
  {
    "mcc": "716",
    "mnc": "10",
    "iso": "pe",
    "country": "Peru",
    "country_code": "51",
    "network": "Claro /Amer.Mov./TIM"
  },
  {
    "mcc": "716",
    "mnc": "02",
    "iso": "pe",
    "country": "Peru",
    "country_code": "51",
    "network": "GlobalStar"
  },
  {
    "mcc": "716",
    "mnc": "01",
    "iso": "pe",
    "country": "Peru",
    "country_code": "51",
    "network": "GlobalStar"
  },
  {
    "mcc": "716",
    "mnc": "06",
    "iso": "pe",
    "country": "Peru",
    "country_code": "51",
    "network": "Movistar"
  },
  {
    "mcc": "716",
    "mnc": "17",
    "iso": "pe",
    "country": "Peru",
    "country_code": "51",
    "network": "Nextel"
  },
  {
    "mcc": "716",
    "mnc": "07",
    "iso": "pe",
    "country": "Peru",
    "country_code": "51",
    "network": "Nextel"
  },
  {
    "mcc": "716",
    "mnc": "15",
    "iso": "pe",
    "country": "Peru",
    "country_code": "51",
    "network": "Viettel Mobile"
  },
  {
    "mcc": "515",
    "mnc": "00",
    "iso": "ph",
    "country": "Philippines",
    "country_code": "63",
    "network": "Fix Line"
  },
  {
    "mcc": "515",
    "mnc": "02",
    "iso": "ph",
    "country": "Philippines",
    "country_code": "63",
    "network": "Globe Telecom"
  },
  {
    "mcc": "515",
    "mnc": "01",
    "iso": "ph",
    "country": "Philippines",
    "country_code": "63",
    "network": "Globe Telecom"
  },
  {
    "mcc": "515",
    "mnc": "88",
    "iso": "ph",
    "country": "Philippines",
    "country_code": "63",
    "network": "Next Mobile"
  },
  {
    "mcc": "515",
    "mnc": "18",
    "iso": "ph",
    "country": "Philippines",
    "country_code": "63",
    "network": "RED Mobile/Cure"
  },
  {
    "mcc": "515",
    "mnc": "03",
    "iso": "ph",
    "country": "Philippines",
    "country_code": "63",
    "network": "Smart"
  },
  {
    "mcc": "515",
    "mnc": "05",
    "iso": "ph",
    "country": "Philippines",
    "country_code": "63",
    "network": "SUN/Digitel"
  },
  {
    "mcc": "260",
    "mnc": "17",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Aero2 SP"
  },
  {
    "mcc": "260",
    "mnc": "18",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "AMD Telecom."
  },
  {
    "mcc": "260",
    "mnc": "38",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "CallFreedom Sp. z o.o."
  },
  {
    "mcc": "260",
    "mnc": "12",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Cyfrowy POLSAT S.A."
  },
  {
    "mcc": "260",
    "mnc": "08",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "e-Telko"
  },
  {
    "mcc": "260",
    "mnc": "09",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Lycamobile"
  },
  {
    "mcc": "260",
    "mnc": "16",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Mobyland"
  },
  {
    "mcc": "260",
    "mnc": "36",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Mundio Mobile Sp. z o.o."
  },
  {
    "mcc": "260",
    "mnc": "07",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Play/P4"
  },
  {
    "mcc": "260",
    "mnc": "11",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "NORDISK Polska"
  },
  {
    "mcc": "260",
    "mnc": "05",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Orange/IDEA/Centertel"
  },
  {
    "mcc": "260",
    "mnc": "03",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Orange/IDEA/Centertel"
  },
  {
    "mcc": "260",
    "mnc": "35",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "PKP Polskie Linie Kolejowe S.A."
  },
  {
    "mcc": "260",
    "mnc": "98",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Play/P4"
  },
  {
    "mcc": "260",
    "mnc": "06",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Play/P4"
  },
  {
    "mcc": "260",
    "mnc": "01",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Polkomtel/Plus"
  },
  {
    "mcc": "260",
    "mnc": "14",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Sferia"
  },
  {
    "mcc": "260",
    "mnc": "13",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Sferia"
  },
  {
    "mcc": "260",
    "mnc": "10",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Sferia"
  },
  {
    "mcc": "260",
    "mnc": "34",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "T-Mobile/ERA"
  },
  {
    "mcc": "260",
    "mnc": "02",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "T-Mobile/ERA"
  },
  {
    "mcc": "260",
    "mnc": "15",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Aero2"
  },
  {
    "mcc": "260",
    "mnc": "04",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Aero2"
  },
  {
    "mcc": "260",
    "mnc": "45",
    "iso": "pl",
    "country": "Poland",
    "country_code": "48",
    "network": "Virgin Mobile"
  },
  {
    "mcc": "268",
    "mnc": "04",
    "iso": "pt",
    "country": "Portugal",
    "country_code": "351",
    "network": "Lycamobile"
  },
  {
    "mcc": "268",
    "mnc": "03",
    "iso": "pt",
    "country": "Portugal",
    "country_code": "351",
    "network": "NOS/Optimus"
  },
  {
    "mcc": "268",
    "mnc": "07",
    "iso": "pt",
    "country": "Portugal",
    "country_code": "351",
    "network": "NOS/Optimus"
  },
  {
    "mcc": "268",
    "mnc": "06",
    "iso": "pt",
    "country": "Portugal",
    "country_code": "351",
    "network": "MEO/TMN"
  },
  {
    "mcc": "268",
    "mnc": "01",
    "iso": "pt",
    "country": "Portugal",
    "country_code": "351",
    "network": "Vodafone"
  },
  {
    "mcc": "330",
    "mnc": "11",
    "iso": "pr",
    "country": "Puerto Rico",
    "country_code": "",
    "network": "Puerto Rico Telephone Company Inc. (PRTC)"
  },
  {
    "mcc": "330",
    "mnc": "110",
    "iso": "pr",
    "country": "Puerto Rico",
    "country_code": "",
    "network": "Puerto Rico Telephone Company Inc. (PRTC)"
  },
  {
    "mcc": "427",
    "mnc": "01",
    "iso": "qa",
    "country": "Qatar",
    "country_code": "974",
    "network": "Ooredoo/Qtel"
  },
  {
    "mcc": "427",
    "mnc": "02",
    "iso": "qa",
    "country": "Qatar",
    "country_code": "974",
    "network": "Vodafone"
  },
  {
    "mcc": "647",
    "mnc": "00",
    "iso": "re",
    "country": "Reunion",
    "country_code": "262",
    "network": "Orange"
  },
  {
    "mcc": "647",
    "mnc": "02",
    "iso": "re",
    "country": "Reunion",
    "country_code": "262",
    "network": "Outremer Telecom"
  },
  {
    "mcc": "647",
    "mnc": "10",
    "iso": "re",
    "country": "Reunion",
    "country_code": "262",
    "network": "SFR"
  },
  {
    "mcc": "226",
    "mnc": "03",
    "iso": "ro",
    "country": "Romania",
    "country_code": "40",
    "network": "Telekom Romania"
  },
  {
    "mcc": "226",
    "mnc": "11",
    "iso": "ro",
    "country": "Romania",
    "country_code": "40",
    "network": "Enigma Systems"
  },
  {
    "mcc": "226",
    "mnc": "16",
    "iso": "ro",
    "country": "Romania",
    "country_code": "40",
    "network": "Lycamobile"
  },
  {
    "mcc": "226",
    "mnc": "10",
    "iso": "ro",
    "country": "Romania",
    "country_code": "40",
    "network": "Orange"
  },
  {
    "mcc": "226",
    "mnc": "05",
    "iso": "ro",
    "country": "Romania",
    "country_code": "40",
    "network": "RCS&RDS Digi Mobile"
  },
  {
    "mcc": "226",
    "mnc": "02",
    "iso": "ro",
    "country": "Romania",
    "country_code": "40",
    "network": "Romtelecom SA"
  },
  {
    "mcc": "226",
    "mnc": "06",
    "iso": "ro",
    "country": "Romania",
    "country_code": "40",
    "network": "Telekom Romania"
  },
  {
    "mcc": "226",
    "mnc": "01",
    "iso": "ro",
    "country": "Romania",
    "country_code": "40",
    "network": "Vodafone"
  },
  {
    "mcc": "226",
    "mnc": "04",
    "iso": "ro",
    "country": "Romania",
    "country_code": "40",
    "network": "Telekom Romania"
  },
  {
    "mcc": "250",
    "mnc": "12",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "Baykal Westcom"
  },
  {
    "mcc": "250",
    "mnc": "99",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "BeeLine/VimpelCom"
  },
  {
    "mcc": "250",
    "mnc": "28",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "BeeLine/VimpelCom"
  },
  {
    "mcc": "250",
    "mnc": "10",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "DTC/Don Telecom"
  },
  {
    "mcc": "250",
    "mnc": "13",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "Kuban GSM"
  },
  {
    "mcc": "250",
    "mnc": "35",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "MOTIV/LLC Ekaterinburg-2000"
  },
  {
    "mcc": "250",
    "mnc": "02",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "Megafon"
  },
  {
    "mcc": "250",
    "mnc": "01",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "MTS"
  },
  {
    "mcc": "250",
    "mnc": "03",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "NCC"
  },
  {
    "mcc": "250",
    "mnc": "16",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "NTC"
  },
  {
    "mcc": "250",
    "mnc": "19",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "OJSC Altaysvyaz"
  },
  {
    "mcc": "250",
    "mnc": "11",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "Orensot"
  },
  {
    "mcc": "250",
    "mnc": "92",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "Printelefone"
  },
  {
    "mcc": "250",
    "mnc": "04",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "Sibchallenge"
  },
  {
    "mcc": "250",
    "mnc": "44",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "StavTelesot"
  },
  {
    "mcc": "250",
    "mnc": "20",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "Tele2/ECC/Volgogr."
  },
  {
    "mcc": "250",
    "mnc": "93",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "Telecom XXL"
  },
  {
    "mcc": "250",
    "mnc": "39",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "UralTel"
  },
  {
    "mcc": "250",
    "mnc": "17",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "UralTel"
  },
  {
    "mcc": "250",
    "mnc": "05",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "Tele2/ECC/Volgogr."
  },
  {
    "mcc": "250",
    "mnc": "15",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "ZAO SMARTS"
  },
  {
    "mcc": "250",
    "mnc": "07",
    "iso": "ru",
    "country": "Russian Federation",
    "country_code": "79",
    "network": "ZAO SMARTS"
  },
  {
    "mcc": "635",
    "mnc": "14",
    "iso": "rw",
    "country": "Rwanda",
    "country_code": "250",
    "network": "Airtel"
  },
  {
    "mcc": "635",
    "mnc": "10",
    "iso": "rw",
    "country": "Rwanda",
    "country_code": "250",
    "network": "MTN/Rwandacell"
  },
  {
    "mcc": "635",
    "mnc": "13",
    "iso": "rw",
    "country": "Rwanda",
    "country_code": "250",
    "network": "TIGO"
  },
  {
    "mcc": "356",
    "mnc": "110",
    "iso": "kn",
    "country": "Saint Kitts and Nevis",
    "country_code": "1869",
    "network": "Cable & Wireless"
  },
  {
    "mcc": "356",
    "mnc": "50",
    "iso": "kn",
    "country": "Saint Kitts and Nevis",
    "country_code": "1869",
    "network": "Digicel"
  },
  {
    "mcc": "356",
    "mnc": "70",
    "iso": "kn",
    "country": "Saint Kitts and Nevis",
    "country_code": "1869",
    "network": "UTS Cariglobe"
  },
  {
    "mcc": "358",
    "mnc": "110",
    "iso": "lc",
    "country": "Saint Lucia",
    "country_code": "1758",
    "network": "Cable & Wireless"
  },
  {
    "mcc": "358",
    "mnc": "30",
    "iso": "lc",
    "country": "Saint Lucia",
    "country_code": "1758",
    "network": "Cingular Wireless"
  },
  {
    "mcc": "358",
    "mnc": "50",
    "iso": "lc",
    "country": "Saint Lucia",
    "country_code": "1758",
    "network": "Digicel (St Lucia) Limited"
  },
  {
    "mcc": "549",
    "mnc": "27",
    "iso": "ws",
    "country": "Samoa",
    "country_code": "685",
    "network": "Samoatel Mobile"
  },
  {
    "mcc": "549",
    "mnc": "01",
    "iso": "ws",
    "country": "Samoa",
    "country_code": "685",
    "network": "Telecom Samoa Cellular Ltd."
  },
  {
    "mcc": "292",
    "mnc": "01",
    "iso": "sm",
    "country": "San Marino",
    "country_code": "378",
    "network": "Prima Telecom"
  },
  {
    "mcc": "626",
    "mnc": "01",
    "iso": "st",
    "country": "Sao Tome & Principe",
    "country_code": "239",
    "network": "CSTmovel"
  },
  {
    "mcc": "901",
    "mnc": "14",
    "iso": "n/a",
    "country": "Satellite Networks",
    "country_code": "870",
    "network": "AeroMobile"
  },
  {
    "mcc": "901",
    "mnc": "11",
    "iso": "n/a",
    "country": "Satellite Networks",
    "country_code": "870",
    "network": "InMarSAT"
  },
  {
    "mcc": "901",
    "mnc": "12",
    "iso": "n/a",
    "country": "Satellite Networks",
    "country_code": "870",
    "network": "Maritime Communications Partner AS"
  },
  {
    "mcc": "901",
    "mnc": "05",
    "iso": "n/a",
    "country": "Satellite Networks",
    "country_code": "870",
    "network": "Thuraya Satellite"
  },
  {
    "mcc": "420",
    "mnc": "07",
    "iso": "sa",
    "country": "Saudi Arabia",
    "country_code": "966",
    "network": "Zain"
  },
  {
    "mcc": "420",
    "mnc": "03",
    "iso": "sa",
    "country": "Saudi Arabia",
    "country_code": "966",
    "network": "Etihad/Etisalat/Mobily"
  },
  {
    "mcc": "420",
    "mnc": "06",
    "iso": "sa",
    "country": "Saudi Arabia",
    "country_code": "966",
    "network": "Lebara Mobile"
  },
  {
    "mcc": "420",
    "mnc": "01",
    "iso": "sa",
    "country": "Saudi Arabia",
    "country_code": "966",
    "network": "STC/Al Jawal"
  },
  {
    "mcc": "420",
    "mnc": "05",
    "iso": "sa",
    "country": "Saudi Arabia",
    "country_code": "966",
    "network": "Virgin Mobile"
  },
  {
    "mcc": "420",
    "mnc": "04",
    "iso": "sa",
    "country": "Saudi Arabia",
    "country_code": "966",
    "network": "Zain"
  },
  {
    "mcc": "608",
    "mnc": "03",
    "iso": "sn",
    "country": "Senegal",
    "country_code": "221",
    "network": "Expresso/Sudatel"
  },
  {
    "mcc": "608",
    "mnc": "01",
    "iso": "sn",
    "country": "Senegal",
    "country_code": "221",
    "network": "Orange/Sonatel"
  },
  {
    "mcc": "608",
    "mnc": "02",
    "iso": "sn",
    "country": "Senegal",
    "country_code": "221",
    "network": "TIGO/Sentel GSM"
  },
  {
    "mcc": "220",
    "mnc": "03",
    "iso": "rs",
    "country": "Serbia ",
    "country_code": "381",
    "network": "MTS/Telekom Srbija"
  },
  {
    "mcc": "220",
    "mnc": "01",
    "iso": "rs",
    "country": "Serbia ",
    "country_code": "381",
    "network": "Telenor/Mobtel"
  },
  {
    "mcc": "220",
    "mnc": "02",
    "iso": "rs",
    "country": "Serbia ",
    "country_code": "381",
    "network": "Telenor/Mobtel"
  },
  {
    "mcc": "220",
    "mnc": "05",
    "iso": "rs",
    "country": "Serbia ",
    "country_code": "381",
    "network": "VIP Mobile"
  },
  {
    "mcc": "633",
    "mnc": "10",
    "iso": "sc",
    "country": "Seychelles",
    "country_code": "248",
    "network": "Airtel"
  },
  {
    "mcc": "633",
    "mnc": "01",
    "iso": "sc",
    "country": "Seychelles",
    "country_code": "248",
    "network": "C&W"
  },
  {
    "mcc": "633",
    "mnc": "02",
    "iso": "sc",
    "country": "Seychelles",
    "country_code": "248",
    "network": "Smartcom"
  },
  {
    "mcc": "619",
    "mnc": "03",
    "iso": "sl",
    "country": "Sierra Leone",
    "country_code": "232",
    "network": "Africel"
  },
  {
    "mcc": "619",
    "mnc": "01",
    "iso": "sl",
    "country": "Sierra Leone",
    "country_code": "232",
    "network": "Orange"
  },
  {
    "mcc": "619",
    "mnc": "04",
    "iso": "sl",
    "country": "Sierra Leone",
    "country_code": "232",
    "network": "Comium"
  },
  {
    "mcc": "619",
    "mnc": "05",
    "iso": "sl",
    "country": "Sierra Leone",
    "country_code": "232",
    "network": "Africel"
  },
  {
    "mcc": "619",
    "mnc": "02",
    "iso": "sl",
    "country": "Sierra Leone",
    "country_code": "232",
    "network": "Tigo/Millicom"
  },
  {
    "mcc": "619",
    "mnc": "25",
    "iso": "sl",
    "country": "Sierra Leone",
    "country_code": "232",
    "network": "Mobitel"
  },
  {
    "mcc": "619",
    "mnc": "07",
    "iso": "sl",
    "country": "Sierra Leone",
    "country_code": "232",
    "network": "Qcell"
  },
  {
    "mcc": "525",
    "mnc": "12",
    "iso": "sg",
    "country": "Singapore",
    "country_code": "65",
    "network": "GRID Communications Pte Ltd"
  },
  {
    "mcc": "525",
    "mnc": "03",
    "iso": "sg",
    "country": "Singapore",
    "country_code": "65",
    "network": "MobileOne Ltd"
  },
  {
    "mcc": "525",
    "mnc": "01",
    "iso": "sg",
    "country": "Singapore",
    "country_code": "65",
    "network": "Singtel"
  },
  {
    "mcc": "525",
    "mnc": "07",
    "iso": "sg",
    "country": "Singapore",
    "country_code": "65",
    "network": "Singtel"
  },
  {
    "mcc": "525",
    "mnc": "02",
    "iso": "sg",
    "country": "Singapore",
    "country_code": "65",
    "network": "Singtel"
  },
  {
    "mcc": "525",
    "mnc": "06",
    "iso": "sg",
    "country": "Singapore",
    "country_code": "65",
    "network": "Starhub"
  },
  {
    "mcc": "525",
    "mnc": "05",
    "iso": "sg",
    "country": "Singapore",
    "country_code": "65",
    "network": "Starhub"
  },
  {
    "mcc": "231",
    "mnc": "03",
    "iso": "sk",
    "country": "Slovakia",
    "country_code": "421",
    "network": "Swan/4Ka"
  },
  {
    "mcc": "231",
    "mnc": "06",
    "iso": "sk",
    "country": "Slovakia",
    "country_code": "421",
    "network": "O2"
  },
  {
    "mcc": "231",
    "mnc": "01",
    "iso": "sk",
    "country": "Slovakia",
    "country_code": "421",
    "network": "Orange"
  },
  {
    "mcc": "231",
    "mnc": "05",
    "iso": "sk",
    "country": "Slovakia",
    "country_code": "421",
    "network": "Orange"
  },
  {
    "mcc": "231",
    "mnc": "15",
    "iso": "sk",
    "country": "Slovakia",
    "country_code": "421",
    "network": "Orange"
  },
  {
    "mcc": "231",
    "mnc": "02",
    "iso": "sk",
    "country": "Slovakia",
    "country_code": "421",
    "network": "T-Mobile"
  },
  {
    "mcc": "231",
    "mnc": "04",
    "iso": "sk",
    "country": "Slovakia",
    "country_code": "421",
    "network": "T-Mobile"
  },
  {
    "mcc": "231",
    "mnc": "99",
    "iso": "sk",
    "country": "Slovakia",
    "country_code": "421",
    "network": "Zeleznice Slovenskej republiky (ZSR)"
  },
  {
    "mcc": "293",
    "mnc": "41",
    "iso": "si",
    "country": "Slovenia",
    "country_code": "386",
    "network": "Mobitel"
  },
  {
    "mcc": "293",
    "mnc": "40",
    "iso": "si",
    "country": "Slovenia",
    "country_code": "386",
    "network": "SI.Mobil"
  },
  {
    "mcc": "293",
    "mnc": "10",
    "iso": "si",
    "country": "Slovenia",
    "country_code": "386",
    "network": "Slovenske zeleznice d.o.o."
  },
  {
    "mcc": "293",
    "mnc": "64",
    "iso": "si",
    "country": "Slovenia",
    "country_code": "386",
    "network": "T-2 d.o.o."
  },
  {
    "mcc": "293",
    "mnc": "70",
    "iso": "si",
    "country": "Slovenia",
    "country_code": "386",
    "network": "Telemach/TusMobil/VEGA"
  },
  {
    "mcc": "540",
    "mnc": "02",
    "iso": "sb",
    "country": "Solomon Islands",
    "country_code": "677",
    "network": "bemobile"
  },
  {
    "mcc": "540",
    "mnc": "10",
    "iso": "sb",
    "country": "Solomon Islands",
    "country_code": "677",
    "network": "BREEZE"
  },
  {
    "mcc": "540",
    "mnc": "01",
    "iso": "sb",
    "country": "Solomon Islands",
    "country_code": "677",
    "network": "BREEZE"
  },
  {
    "mcc": "637",
    "mnc": "30",
    "iso": "so",
    "country": "Somalia",
    "country_code": "252",
    "network": "Golis"
  },
  {
    "mcc": "637",
    "mnc": "50",
    "iso": "so",
    "country": "Somalia",
    "country_code": "252",
    "network": "Hormuud"
  },
  {
    "mcc": "637",
    "mnc": "19",
    "iso": "so",
    "country": "Somalia",
    "country_code": "252",
    "network": "HorTel"
  },
  {
    "mcc": "637",
    "mnc": "60",
    "iso": "so",
    "country": "Somalia",
    "country_code": "252",
    "network": "Nationlink"
  },
  {
    "mcc": "637",
    "mnc": "10",
    "iso": "so",
    "country": "Somalia",
    "country_code": "252",
    "network": "Nationlink"
  },
  {
    "mcc": "637",
    "mnc": "04",
    "iso": "so",
    "country": "Somalia",
    "country_code": "252",
    "network": "Somafone"
  },
  {
    "mcc": "637",
    "mnc": "82",
    "iso": "so",
    "country": "Somalia",
    "country_code": "252",
    "network": "Somtel"
  },
  {
    "mcc": "637",
    "mnc": "71",
    "iso": "so",
    "country": "Somalia",
    "country_code": "252",
    "network": "Somtel"
  },
  {
    "mcc": "637",
    "mnc": "01",
    "iso": "so",
    "country": "Somalia",
    "country_code": "252",
    "network": "Telesom "
  },
  {
    "mcc": "655",
    "mnc": "02",
    "iso": "za",
    "country": "South Africa",
    "country_code": "27",
    "network": "Telkom/8.ta"
  },
  {
    "mcc": "655",
    "mnc": "21",
    "iso": "za",
    "country": "South Africa",
    "country_code": "27",
    "network": "Cape Town Metropolitan"
  },
  {
    "mcc": "655",
    "mnc": "07",
    "iso": "za",
    "country": "South Africa",
    "country_code": "27",
    "network": "Cell C"
  },
  {
    "mcc": "655",
    "mnc": "12",
    "iso": "za",
    "country": "South Africa",
    "country_code": "27",
    "network": "MTN"
  },
  {
    "mcc": "655",
    "mnc": "10",
    "iso": "za",
    "country": "South Africa",
    "country_code": "27",
    "network": "MTN"
  },
  {
    "mcc": "655",
    "mnc": "06",
    "iso": "za",
    "country": "South Africa",
    "country_code": "27",
    "network": "Sentech"
  },
  {
    "mcc": "655",
    "mnc": "01",
    "iso": "za",
    "country": "South Africa",
    "country_code": "27",
    "network": "Vodacom"
  },
  {
    "mcc": "655",
    "mnc": "19",
    "iso": "za",
    "country": "South Africa",
    "country_code": "27",
    "network": "Wireless Business Solutions (Pty) Ltd"
  },
  {
    "mcc": "659",
    "mnc": "03",
    "iso": "ss",
    "country": "South Sudan (Republic of)",
    "country_code": "",
    "network": "Gemtel Ltd (South Sudan"
  },
  {
    "mcc": "659",
    "mnc": "02",
    "iso": "ss",
    "country": "South Sudan (Republic of)",
    "country_code": "",
    "network": "MTN South Sudan (South Sudan"
  },
  {
    "mcc": "659",
    "mnc": "04",
    "iso": "ss",
    "country": "South Sudan (Republic of)",
    "country_code": "",
    "network": "Network of The World Ltd (NOW) (South Sudan"
  },
  {
    "mcc": "659",
    "mnc": "06",
    "iso": "ss",
    "country": "South Sudan (Republic of)",
    "country_code": "",
    "network": "Zain South Sudan (South Sudan"
  },
  {
    "mcc": "214",
    "mnc": "23",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Lycamobile SL"
  },
  {
    "mcc": "214",
    "mnc": "22",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Digi Spain Telecom SL"
  },
  {
    "mcc": "214",
    "mnc": "15",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "BT Espana  SAU"
  },
  {
    "mcc": "214",
    "mnc": "18",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Cableuropa SAU (ONO)"
  },
  {
    "mcc": "214",
    "mnc": "08",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Euskaltel SA"
  },
  {
    "mcc": "214",
    "mnc": "20",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "fonYou Wireless SL"
  },
  {
    "mcc": "214",
    "mnc": "32",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "ION Mobile"
  },
  {
    "mcc": "214",
    "mnc": "21",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Jazz Telecom SAU"
  },
  {
    "mcc": "214",
    "mnc": "26",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Lleida"
  },
  {
    "mcc": "214",
    "mnc": "25",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Lycamobile SL"
  },
  {
    "mcc": "214",
    "mnc": "07",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Movistar"
  },
  {
    "mcc": "214",
    "mnc": "05",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Movistar"
  },
  {
    "mcc": "214",
    "mnc": "03",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Orange"
  },
  {
    "mcc": "214",
    "mnc": "09",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Orange"
  },
  {
    "mcc": "214",
    "mnc": "11",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Orange"
  },
  {
    "mcc": "214",
    "mnc": "17",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "R Cable y Telec. Galicia SA"
  },
  {
    "mcc": "214",
    "mnc": "19",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Simyo/KPN "
  },
  {
    "mcc": "214",
    "mnc": "16",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Telecable de Asturias SA"
  },
  {
    "mcc": "214",
    "mnc": "27",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Truphone"
  },
  {
    "mcc": "214",
    "mnc": "01",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Vodafone"
  },
  {
    "mcc": "214",
    "mnc": "06",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Vodafone Enabler Espana SL"
  },
  {
    "mcc": "214",
    "mnc": "04",
    "iso": "es",
    "country": "Spain",
    "country_code": "34",
    "network": "Yoigo"
  },
  {
    "mcc": "413",
    "mnc": "05",
    "iso": "lk",
    "country": "Sri Lanka",
    "country_code": "94",
    "network": "Airtel"
  },
  {
    "mcc": "413",
    "mnc": "03",
    "iso": "lk",
    "country": "Sri Lanka",
    "country_code": "94",
    "network": "Etisalat/Tigo"
  },
  {
    "mcc": "413",
    "mnc": "08",
    "iso": "lk",
    "country": "Sri Lanka",
    "country_code": "94",
    "network": "H3G Hutchison "
  },
  {
    "mcc": "413",
    "mnc": "01",
    "iso": "lk",
    "country": "Sri Lanka",
    "country_code": "94",
    "network": "Mobitel Ltd."
  },
  {
    "mcc": "413",
    "mnc": "02",
    "iso": "lk",
    "country": "Sri Lanka",
    "country_code": "94",
    "network": "MTN/Dialog"
  },
  {
    "mcc": "308",
    "mnc": "01",
    "iso": "pm",
    "country": "St. Pierre & Miquelon",
    "country_code": "508",
    "network": "Ameris"
  },
  {
    "mcc": "360",
    "mnc": "110",
    "iso": "vc",
    "country": "St. Vincent & Gren.",
    "country_code": "1784",
    "network": "C & W"
  },
  {
    "mcc": "360",
    "mnc": "100",
    "iso": "vc",
    "country": "St. Vincent & Gren.",
    "country_code": "1784",
    "network": "Cingular"
  },
  {
    "mcc": "360",
    "mnc": "10",
    "iso": "vc",
    "country": "St. Vincent & Gren.",
    "country_code": "1784",
    "network": "Cingular"
  },
  {
    "mcc": "360",
    "mnc": "050",
    "iso": "vc",
    "country": "St. Vincent & Gren.",
    "country_code": "1784",
    "network": "Digicel"
  },
  {
    "mcc": "360",
    "mnc": "70",
    "iso": "vc",
    "country": "St. Vincent & Gren.",
    "country_code": "1784",
    "network": "Digicel"
  },
  {
    "mcc": "634",
    "mnc": "00",
    "iso": "sd",
    "country": "Sudan",
    "country_code": "249",
    "network": "Canar Telecom"
  },
  {
    "mcc": "634",
    "mnc": "22",
    "iso": "sd",
    "country": "Sudan",
    "country_code": "249",
    "network": "MTN"
  },
  {
    "mcc": "634",
    "mnc": "02",
    "iso": "sd",
    "country": "Sudan",
    "country_code": "249",
    "network": "MTN"
  },
  {
    "mcc": "634",
    "mnc": "15",
    "iso": "sd",
    "country": "Sudan",
    "country_code": "249",
    "network": "Sudani One"
  },
  {
    "mcc": "634",
    "mnc": "07",
    "iso": "sd",
    "country": "Sudan",
    "country_code": "249",
    "network": "Sudani One"
  },
  {
    "mcc": "634",
    "mnc": "05",
    "iso": "sd",
    "country": "Sudan",
    "country_code": "249",
    "network": "Canar Telecom"
  },
  {
    "mcc": "634",
    "mnc": "08",
    "iso": "sd",
    "country": "Sudan",
    "country_code": "249",
    "network": "Canar Telecom"
  },
  {
    "mcc": "634",
    "mnc": "06",
    "iso": "sd",
    "country": "Sudan",
    "country_code": "249",
    "network": "ZAIN/Mobitel"
  },
  {
    "mcc": "634",
    "mnc": "01",
    "iso": "sd",
    "country": "Sudan",
    "country_code": "249",
    "network": "ZAIN/Mobitel"
  },
  {
    "mcc": "746",
    "mnc": "03",
    "iso": "sr",
    "country": "Suriname",
    "country_code": "597",
    "network": "Digicel"
  },
  {
    "mcc": "746",
    "mnc": "01",
    "iso": "sr",
    "country": "Suriname",
    "country_code": "597",
    "network": "Telesur"
  },
  {
    "mcc": "746",
    "mnc": "02",
    "iso": "sr",
    "country": "Suriname",
    "country_code": "597",
    "network": "Telecommunicatiebedrijf Suriname (TELESUR)"
  },
  {
    "mcc": "746",
    "mnc": "04",
    "iso": "sr",
    "country": "Suriname",
    "country_code": "597",
    "network": "UNIQA"
  },
  {
    "mcc": "653",
    "mnc": "02",
    "iso": "sz",
    "country": "Swaziland",
    "country_code": "268",
    "network": "Swazi Mobile"
  },
  {
    "mcc": "653",
    "mnc": "10",
    "iso": "sz",
    "country": "Swaziland",
    "country_code": "268",
    "network": "Swazi MTN"
  },
  {
    "mcc": "653",
    "mnc": "01",
    "iso": "sz",
    "country": "Swaziland",
    "country_code": "268",
    "network": "SwaziTelecom"
  },
  {
    "mcc": "240",
    "mnc": "35",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "42 Telecom AB"
  },
  {
    "mcc": "240",
    "mnc": "16",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "42 Telecom AB"
  },
  {
    "mcc": "240",
    "mnc": "26",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Beepsend"
  },
  {
    "mcc": "240",
    "mnc": "30",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "NextGen Mobile Ltd (CardBoardFish)"
  },
  {
    "mcc": "240",
    "mnc": "28",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "CoolTEL Aps"
  },
  {
    "mcc": "240",
    "mnc": "25",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Digitel Mobile Srl"
  },
  {
    "mcc": "240",
    "mnc": "22",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Eu Tel AB"
  },
  {
    "mcc": "240",
    "mnc": "27",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Fogg Mobile AB"
  },
  {
    "mcc": "240",
    "mnc": "18",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Generic Mobile Systems Sweden AB"
  },
  {
    "mcc": "240",
    "mnc": "17",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Gotalandsnatet AB"
  },
  {
    "mcc": "240",
    "mnc": "04",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "H3G Access AB"
  },
  {
    "mcc": "240",
    "mnc": "02",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "H3G Access AB"
  },
  {
    "mcc": "240",
    "mnc": "36",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "ID Mobile"
  },
  {
    "mcc": "240",
    "mnc": "23",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Infobip Ltd."
  },
  {
    "mcc": "240",
    "mnc": "11",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Lindholmen Science Park AB"
  },
  {
    "mcc": "240",
    "mnc": "12",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Lycamobile Ltd"
  },
  {
    "mcc": "240",
    "mnc": "29",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Mercury International Carrier Services"
  },
  {
    "mcc": "240",
    "mnc": "19",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Mundio Mobile (Sweden) Ltd"
  },
  {
    "mcc": "240",
    "mnc": "03",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Netett Sverige AB"
  },
  {
    "mcc": "240",
    "mnc": "10",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Spring Mobil AB"
  },
  {
    "mcc": "240",
    "mnc": "05",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Svenska UMTS-N"
  },
  {
    "mcc": "240",
    "mnc": "14",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "TDC Sverige AB"
  },
  {
    "mcc": "240",
    "mnc": "07",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Tele2 Sverige AB"
  },
  {
    "mcc": "240",
    "mnc": "24",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Telenor (Vodafone)"
  },
  {
    "mcc": "240",
    "mnc": "08",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Telenor (Vodafone)"
  },
  {
    "mcc": "240",
    "mnc": "06",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Telenor (Vodafone)"
  },
  {
    "mcc": "240",
    "mnc": "01",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Telia Mobile"
  },
  {
    "mcc": "240",
    "mnc": "13",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Ventelo Sverige AB"
  },
  {
    "mcc": "240",
    "mnc": "20",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Wireless Maingate AB"
  },
  {
    "mcc": "240",
    "mnc": "15",
    "iso": "se",
    "country": "Sweden",
    "country_code": "46",
    "network": "Wireless Maingate Nordic AB"
  },
  {
    "mcc": "228",
    "mnc": "51",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "BebbiCell AG"
  },
  {
    "mcc": "228",
    "mnc": "58",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "Beeone"
  },
  {
    "mcc": "228",
    "mnc": "09",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "Comfone AG"
  },
  {
    "mcc": "228",
    "mnc": "05",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "Comfone AG"
  },
  {
    "mcc": "228",
    "mnc": "07",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "TDC Sunrise"
  },
  {
    "mcc": "228",
    "mnc": "54",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "Lycamobile AG"
  },
  {
    "mcc": "228",
    "mnc": "52",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "Mundio Mobile AG"
  },
  {
    "mcc": "228",
    "mnc": "03",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "Salt/Orange"
  },
  {
    "mcc": "228",
    "mnc": "01",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "Swisscom"
  },
  {
    "mcc": "228",
    "mnc": "12",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "TDC Sunrise"
  },
  {
    "mcc": "228",
    "mnc": "02",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "TDC Sunrise"
  },
  {
    "mcc": "228",
    "mnc": "08",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "TDC Sunrise"
  },
  {
    "mcc": "228",
    "mnc": "53",
    "iso": "ch",
    "country": "Switzerland",
    "country_code": "41",
    "network": "upc cablecom GmbH"
  },
  {
    "mcc": "417",
    "mnc": "02",
    "iso": "sy",
    "country": "Syrian Arab Republic",
    "country_code": "963",
    "network": "MTN/Spacetel"
  },
  {
    "mcc": "417",
    "mnc": "09",
    "iso": "sy",
    "country": "Syrian Arab Republic",
    "country_code": "963",
    "network": "Syriatel Holdings"
  },
  {
    "mcc": "417",
    "mnc": "01",
    "iso": "sy",
    "country": "Syrian Arab Republic",
    "country_code": "963",
    "network": "Syriatel Holdings"
  },
  {
    "mcc": "466",
    "mnc": "68",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "ACeS Taiwan - ACeS Taiwan Telecommunications Co Ltd"
  },
  {
    "mcc": "466",
    "mnc": "05",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Asia Pacific Telecom Co. Ltd (APT)"
  },
  {
    "mcc": "466",
    "mnc": "92",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Chunghwa Telecom LDM"
  },
  {
    "mcc": "466",
    "mnc": "11",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Chunghwa Telecom LDM"
  },
  {
    "mcc": "466",
    "mnc": "07",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Far EasTone"
  },
  {
    "mcc": "466",
    "mnc": "06",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Far EasTone"
  },
  {
    "mcc": "466",
    "mnc": "03",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Far EasTone"
  },
  {
    "mcc": "466",
    "mnc": "02",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Far EasTone"
  },
  {
    "mcc": "466",
    "mnc": "01",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Far EasTone"
  },
  {
    "mcc": "466",
    "mnc": "10",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Global Mobile Corp."
  },
  {
    "mcc": "466",
    "mnc": "56",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "International Telecom Co. Ltd (FITEL)"
  },
  {
    "mcc": "466",
    "mnc": "88",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "KG Telecom"
  },
  {
    "mcc": "466",
    "mnc": "90",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "T-Star/VIBO"
  },
  {
    "mcc": "466",
    "mnc": "97",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Taiwan Cellular"
  },
  {
    "mcc": "466",
    "mnc": "93",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "Mobitai"
  },
  {
    "mcc": "466",
    "mnc": "99",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "TransAsia"
  },
  {
    "mcc": "466",
    "mnc": "89",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "T-Star/VIBO"
  },
  {
    "mcc": "466",
    "mnc": "09",
    "iso": "tw",
    "country": "Taiwan",
    "country_code": "886",
    "network": "VMAX Telecom Co. Ltd"
  },
  {
    "mcc": "436",
    "mnc": "04",
    "iso": "tk",
    "country": "Tajikistan",
    "country_code": "992",
    "network": "Babilon-M"
  },
  {
    "mcc": "436",
    "mnc": "05",
    "iso": "tk",
    "country": "Tajikistan",
    "country_code": "992",
    "network": "Bee Line"
  },
  {
    "mcc": "436",
    "mnc": "02",
    "iso": "tk",
    "country": "Tajikistan",
    "country_code": "992",
    "network": "CJSC Indigo Tajikistan"
  },
  {
    "mcc": "436",
    "mnc": "12",
    "iso": "tk",
    "country": "Tajikistan",
    "country_code": "992",
    "network": "Tcell/JC Somoncom"
  },
  {
    "mcc": "436",
    "mnc": "03",
    "iso": "tk",
    "country": "Tajikistan",
    "country_code": "992",
    "network": "Megafon"
  },
  {
    "mcc": "436",
    "mnc": "01",
    "iso": "tk",
    "country": "Tajikistan",
    "country_code": "992",
    "network": "Tcell/JC Somoncom"
  },
  {
    "mcc": "640",
    "mnc": "08",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "Benson Informatics Ltd"
  },
  {
    "mcc": "640",
    "mnc": "06",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "Dovetel (T) Ltd"
  },
  {
    "mcc": "640",
    "mnc": "09",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "Halotel/Viettel Ltd"
  },
  {
    "mcc": "640",
    "mnc": "11",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "Smile Communications Tanzania Ltd"
  },
  {
    "mcc": "640",
    "mnc": "07",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "Tanzania Telecommunications Company Ltd (TTCL)"
  },
  {
    "mcc": "640",
    "mnc": "02",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "TIGO/MIC"
  },
  {
    "mcc": "640",
    "mnc": "01",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "Tri Telecomm. Ltd."
  },
  {
    "mcc": "640",
    "mnc": "04",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "Vodacom Ltd"
  },
  {
    "mcc": "640",
    "mnc": "05",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "Airtel/ZAIN/Celtel"
  },
  {
    "mcc": "640",
    "mnc": "03",
    "iso": "tz",
    "country": "Tanzania",
    "country_code": "255",
    "network": "Zantel/Zanzibar Telecom"
  },
  {
    "mcc": "520",
    "mnc": "20",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "ACeS Thailand - ACeS Regional Services Co Ltd"
  },
  {
    "mcc": "520",
    "mnc": "15",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "ACT Mobile"
  },
  {
    "mcc": "520",
    "mnc": "03",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "AIS/Advanced Info Service"
  },
  {
    "mcc": "520",
    "mnc": "01",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "AIS/Advanced Info Service"
  },
  {
    "mcc": "520",
    "mnc": "23",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "Digital Phone Co."
  },
  {
    "mcc": "520",
    "mnc": "00",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "Hutch/CAT CDMA"
  },
  {
    "mcc": "520",
    "mnc": "05",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "Total Access (DTAC)"
  },
  {
    "mcc": "520",
    "mnc": "18",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "Total Access (DTAC)"
  },
  {
    "mcc": "520",
    "mnc": "99",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "True Move/Orange"
  },
  {
    "mcc": "520",
    "mnc": "04",
    "iso": "th",
    "country": "Thailand",
    "country_code": "66",
    "network": "True Move/Orange"
  },
  {
    "mcc": "514",
    "mnc": "01",
    "iso": "tp",
    "country": "Timor-Leste",
    "country_code": "670",
    "network": "Telin/ Telkomcel"
  },
  {
    "mcc": "514",
    "mnc": "02",
    "iso": "tp",
    "country": "Timor-Leste",
    "country_code": "670",
    "network": "Timor Telecom"
  },
  {
    "mcc": "615",
    "mnc": "02",
    "iso": "tg",
    "country": "Togo",
    "country_code": "228",
    "network": "Telecel/MOOV"
  },
  {
    "mcc": "615",
    "mnc": "03",
    "iso": "tg",
    "country": "Togo",
    "country_code": "228",
    "network": "Telecel/MOOV"
  },
  {
    "mcc": "615",
    "mnc": "01",
    "iso": "tg",
    "country": "Togo",
    "country_code": "228",
    "network": "Togo Telecom/TogoCELL"
  },
  {
    "mcc": "539",
    "mnc": "88",
    "iso": "to",
    "country": "Tonga",
    "country_code": "676",
    "network": "Digicel"
  },
  {
    "mcc": "539",
    "mnc": "43",
    "iso": "to",
    "country": "Tonga",
    "country_code": "676",
    "network": "Shoreline Communication"
  },
  {
    "mcc": "539",
    "mnc": "01",
    "iso": "to",
    "country": "Tonga",
    "country_code": "676",
    "network": "Tonga Communications"
  },
  {
    "mcc": "374",
    "mnc": "12",
    "iso": "tt",
    "country": "Trinidad and Tobago",
    "country_code": "1868",
    "network": "Bmobile/TSTT"
  },
  {
    "mcc": "374",
    "mnc": "120",
    "iso": "tt",
    "country": "Trinidad and Tobago",
    "country_code": "1868",
    "network": "Bmobile/TSTT"
  },
  {
    "mcc": "374",
    "mnc": "130",
    "iso": "tt",
    "country": "Trinidad and Tobago",
    "country_code": "1868",
    "network": "Digicel"
  },
  {
    "mcc": "374",
    "mnc": "140",
    "iso": "tt",
    "country": "Trinidad and Tobago",
    "country_code": "1868",
    "network": "LaqTel Ltd."
  },
  {
    "mcc": "605",
    "mnc": "01",
    "iso": "tn",
    "country": "Tunisia",
    "country_code": "216",
    "network": "Orange"
  },
  {
    "mcc": "605",
    "mnc": "03",
    "iso": "tn",
    "country": "Tunisia",
    "country_code": "216",
    "network": "Oreedo/Orascom"
  },
  {
    "mcc": "605",
    "mnc": "06",
    "iso": "tn",
    "country": "Tunisia",
    "country_code": "216",
    "network": "TuniCell/Tunisia Telecom"
  },
  {
    "mcc": "605",
    "mnc": "02",
    "iso": "tn",
    "country": "Tunisia",
    "country_code": "216",
    "network": "TuniCell/Tunisia Telecom"
  },
  {
    "mcc": "286",
    "mnc": "03",
    "iso": "tr",
    "country": "Turkey",
    "country_code": "90",
    "network": "AVEA/Aria"
  },
  {
    "mcc": "286",
    "mnc": "04",
    "iso": "tr",
    "country": "Turkey",
    "country_code": "90",
    "network": "AVEA/Aria"
  },
  {
    "mcc": "286",
    "mnc": "01",
    "iso": "tr",
    "country": "Turkey",
    "country_code": "90",
    "network": "Turkcell"
  },
  {
    "mcc": "286",
    "mnc": "02",
    "iso": "tr",
    "country": "Turkey",
    "country_code": "90",
    "network": "Vodafone-Telsim"
  },
  {
    "mcc": "438",
    "mnc": "01",
    "iso": "tm",
    "country": "Turkmenistan",
    "country_code": "993",
    "network": "MTS/Barash Communication"
  },
  {
    "mcc": "438",
    "mnc": "02",
    "iso": "tm",
    "country": "Turkmenistan",
    "country_code": "993",
    "network": "Altyn Asyr/TM-Cell"
  },
  {
    "mcc": "376",
    "mnc": "350",
    "iso": "tc",
    "country": "Turks and Caicos Islands",
    "country_code": "",
    "network": "Cable & Wireless (TCI) Ltd"
  },
  {
    "mcc": "376",
    "mnc": "050",
    "iso": "tc",
    "country": "Turks and Caicos Islands",
    "country_code": "",
    "network": "Digicel TCI Ltd"
  },
  {
    "mcc": "376",
    "mnc": "352",
    "iso": "tc",
    "country": "Turks and Caicos Islands",
    "country_code": "",
    "network": "IslandCom Communications Ltd."
  },
  {
    "mcc": "553",
    "mnc": "01",
    "iso": "tv",
    "country": "Tuvalu",
    "country_code": "",
    "network": "Tuvalu Telecommunication Corporation (TTC)"
  },
  {
    "mcc": "641",
    "mnc": "01",
    "iso": "ug",
    "country": "Uganda",
    "country_code": "256",
    "network": "Airtel/Celtel"
  },
  {
    "mcc": "641",
    "mnc": "66",
    "iso": "ug",
    "country": "Uganda",
    "country_code": "256",
    "network": "i-Tel Ltd"
  },
  {
    "mcc": "641",
    "mnc": "30",
    "iso": "ug",
    "country": "Uganda",
    "country_code": "256",
    "network": "K2 Telecom Ltd"
  },
  {
    "mcc": "641",
    "mnc": "10",
    "iso": "ug",
    "country": "Uganda",
    "country_code": "256",
    "network": "MTN Ltd."
  },
  {
    "mcc": "641",
    "mnc": "14",
    "iso": "ug",
    "country": "Uganda",
    "country_code": "256",
    "network": "Orange"
  },
  {
    "mcc": "641",
    "mnc": "33",
    "iso": "ug",
    "country": "Uganda",
    "country_code": "256",
    "network": "Smile Communications Uganda Ltd"
  },
  {
    "mcc": "641",
    "mnc": "18",
    "iso": "ug",
    "country": "Uganda",
    "country_code": "256",
    "network": "Suretelecom Uganda Ltd"
  },
  {
    "mcc": "641",
    "mnc": "11",
    "iso": "ug",
    "country": "Uganda",
    "country_code": "256",
    "network": "Uganda Telecom Ltd."
  },
  {
    "mcc": "641",
    "mnc": "22",
    "iso": "ug",
    "country": "Uganda",
    "country_code": "256",
    "network": "Airtel/Warid"
  },
  {
    "mcc": "255",
    "mnc": "06",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Astelit/LIFE"
  },
  {
    "mcc": "255",
    "mnc": "05",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Golden Telecom"
  },
  {
    "mcc": "255",
    "mnc": "39",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Golden Telecom"
  },
  {
    "mcc": "255",
    "mnc": "04",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Intertelecom Ltd (IT)"
  },
  {
    "mcc": "255",
    "mnc": "67",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "KyivStar"
  },
  {
    "mcc": "255",
    "mnc": "03",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "KyivStar"
  },
  {
    "mcc": "255",
    "mnc": "99",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Phoenix"
  },
  {
    "mcc": "255",
    "mnc": "21",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Telesystems Of Ukraine CJSC (TSU)"
  },
  {
    "mcc": "255",
    "mnc": "07",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "TriMob LLC"
  },
  {
    "mcc": "255",
    "mnc": "50",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Vodafone/MTS"
  },
  {
    "mcc": "255",
    "mnc": "02",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Beeline"
  },
  {
    "mcc": "255",
    "mnc": "01",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Vodafone/MTS"
  },
  {
    "mcc": "255",
    "mnc": "68",
    "iso": "ua",
    "country": "Ukraine",
    "country_code": "380",
    "network": "Beeline"
  },
  {
    "mcc": "424",
    "mnc": "03",
    "iso": "ae",
    "country": "United Arab Emirates",
    "country_code": "971",
    "network": "DU"
  },
  {
    "mcc": "430",
    "mnc": "02",
    "iso": "ae",
    "country": "United Arab Emirates",
    "country_code": "971",
    "network": "Etisalat"
  },
  {
    "mcc": "424",
    "mnc": "02",
    "iso": "ae",
    "country": "United Arab Emirates",
    "country_code": "971",
    "network": "Etisalat"
  },
  {
    "mcc": "431",
    "mnc": "02",
    "iso": "ae",
    "country": "United Arab Emirates",
    "country_code": "971",
    "network": "Etisalat"
  },
  {
    "mcc": "234",
    "mnc": "03",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Airtel/Vodafone"
  },
  {
    "mcc": "234",
    "mnc": "00",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "BT Group"
  },
  {
    "mcc": "234",
    "mnc": "76",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "BT Group"
  },
  {
    "mcc": "234",
    "mnc": "77",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "BT Group"
  },
  {
    "mcc": "234",
    "mnc": "92",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Cable and Wireless "
  },
  {
    "mcc": "234",
    "mnc": "07",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Cable and Wireless "
  },
  {
    "mcc": "234",
    "mnc": "36",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Cable and Wireless Isle of Man"
  },
  {
    "mcc": "234",
    "mnc": "18",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Cloud9/wire9 Tel."
  },
  {
    "mcc": "235",
    "mnc": "02",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Everyth. Ev.wh."
  },
  {
    "mcc": "234",
    "mnc": "999",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "FIX Line"
  },
  {
    "mcc": "234",
    "mnc": "17",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "FlexTel"
  },
  {
    "mcc": "234",
    "mnc": "55",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Guernsey Telecoms"
  },
  {
    "mcc": "234",
    "mnc": "14",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "HaySystems"
  },
  {
    "mcc": "234",
    "mnc": "20",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "H3G Hutchinson"
  },
  {
    "mcc": "234",
    "mnc": "94",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "H3G Hutchinson"
  },
  {
    "mcc": "234",
    "mnc": "75",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Inquam Telecom Ltd"
  },
  {
    "mcc": "234",
    "mnc": "50",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Jersey Telecom"
  },
  {
    "mcc": "234",
    "mnc": "35",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "JSC Ingenicum"
  },
  {
    "mcc": "234",
    "mnc": "26",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Lycamobile"
  },
  {
    "mcc": "234",
    "mnc": "58",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Manx Telecom"
  },
  {
    "mcc": "234",
    "mnc": "01",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Mapesbury C. Ltd"
  },
  {
    "mcc": "234",
    "mnc": "28",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Marthon Telecom"
  },
  {
    "mcc": "234",
    "mnc": "10",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "O2 Ltd."
  },
  {
    "mcc": "234",
    "mnc": "02",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "O2 Ltd."
  },
  {
    "mcc": "234",
    "mnc": "11",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "O2 Ltd."
  },
  {
    "mcc": "234",
    "mnc": "08",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "OnePhone"
  },
  {
    "mcc": "234",
    "mnc": "16",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Opal Telecom"
  },
  {
    "mcc": "234",
    "mnc": "33",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Everyth. Ev.wh./Orange"
  },
  {
    "mcc": "234",
    "mnc": "34",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Everyth. Ev.wh./Orange"
  },
  {
    "mcc": "234",
    "mnc": "19",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "PMN/Teleware"
  },
  {
    "mcc": "234",
    "mnc": "12",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Railtrack Plc"
  },
  {
    "mcc": "234",
    "mnc": "22",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Routotelecom"
  },
  {
    "mcc": "234",
    "mnc": "57",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Sky UK Limited"
  },
  {
    "mcc": "234",
    "mnc": "24",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Stour Marine"
  },
  {
    "mcc": "234",
    "mnc": "37",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Synectiv Ltd."
  },
  {
    "mcc": "234",
    "mnc": "31",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Everyth. Ev.wh./T-Mobile"
  },
  {
    "mcc": "234",
    "mnc": "30",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Everyth. Ev.wh./T-Mobile"
  },
  {
    "mcc": "234",
    "mnc": "32",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Everyth. Ev.wh./T-Mobile"
  },
  {
    "mcc": "234",
    "mnc": "27",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Vodafone"
  },
  {
    "mcc": "234",
    "mnc": "09",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Tismi"
  },
  {
    "mcc": "234",
    "mnc": "25",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Truphone"
  },
  {
    "mcc": "234",
    "mnc": "51",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Jersey Telecom"
  },
  {
    "mcc": "234",
    "mnc": "23",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Vectofone Mobile Wifi"
  },
  {
    "mcc": "234",
    "mnc": "38",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Virgin Mobile"
  },
  {
    "mcc": "234",
    "mnc": "91",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Vodafone"
  },
  {
    "mcc": "234",
    "mnc": "15",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Vodafone"
  },
  {
    "mcc": "234",
    "mnc": "89",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Vodafone"
  },
  {
    "mcc": "234",
    "mnc": "78",
    "iso": "gb",
    "country": "United Kingdom",
    "country_code": "44",
    "network": "Wave Telecom Ltd"
  },
  {
    "mcc": "310",
    "mnc": "050",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "880",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "850",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Aeris Comm. Inc."
  },
  {
    "mcc": "310",
    "mnc": "640",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "510",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Airtel Wireless LLC"
  },
  {
    "mcc": "310",
    "mnc": "190",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Unknown"
  },
  {
    "mcc": "312",
    "mnc": "090",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Allied Wireless Communications Corporation"
  },
  {
    "mcc": "311",
    "mnc": "130",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "710",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Arctic Slope Telephone Association Cooperative Inc."
  },
  {
    "mcc": "310",
    "mnc": "150",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "AT&T Wireless Inc."
  },
  {
    "mcc": "310",
    "mnc": "680",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "AT&T Wireless Inc."
  },
  {
    "mcc": "310",
    "mnc": "070",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "AT&T Wireless Inc."
  },
  {
    "mcc": "310",
    "mnc": "560",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "AT&T Wireless Inc."
  },
  {
    "mcc": "310",
    "mnc": "410",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "AT&T Wireless Inc."
  },
  {
    "mcc": "310",
    "mnc": "380",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "AT&T Wireless Inc."
  },
  {
    "mcc": "310",
    "mnc": "170",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "AT&T Wireless Inc."
  },
  {
    "mcc": "310",
    "mnc": "980",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "AT&T Wireless Inc."
  },
  {
    "mcc": "311",
    "mnc": "810",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Bluegrass Wireless LLC"
  },
  {
    "mcc": "311",
    "mnc": "800",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Bluegrass Wireless LLC"
  },
  {
    "mcc": "311",
    "mnc": "440",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Bluegrass Wireless LLC"
  },
  {
    "mcc": "310",
    "mnc": "900",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cable & Communications Corp."
  },
  {
    "mcc": "311",
    "mnc": "590",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "California RSA No. 3 Limited Partnership"
  },
  {
    "mcc": "311",
    "mnc": "500",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cambridge Telephone Company Inc."
  },
  {
    "mcc": "310",
    "mnc": "830",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Caprock Cellular Ltd."
  },
  {
    "mcc": "311",
    "mnc": "271",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "287",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "276",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "481",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "310",
    "mnc": "013",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "281",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "486",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "270",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "286",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "275",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "480",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "310",
    "mnc": "012",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "280",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "485",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "110",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "285",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "274",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "390",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "310",
    "mnc": "010",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "279",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "484",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "310",
    "mnc": "910",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "284",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "489",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "273",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "289",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "310",
    "mnc": "004",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "278",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "483",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "310",
    "mnc": "890",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "283",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "488",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "272",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "288",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "277",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "482",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "310",
    "mnc": "590",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "282",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "311",
    "mnc": "487",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Verizon Wireless"
  },
  {
    "mcc": "312",
    "mnc": "280",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cellular Network Partnership LLC"
  },
  {
    "mcc": "312",
    "mnc": "270",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cellular Network Partnership LLC"
  },
  {
    "mcc": "310",
    "mnc": "360",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cellular Network Partnership LLC"
  },
  {
    "mcc": "311",
    "mnc": "190",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "030",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "311",
    "mnc": "120",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Choice Phone LLC"
  },
  {
    "mcc": "310",
    "mnc": "480",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Choice Phone LLC"
  },
  {
    "mcc": "310",
    "mnc": "630",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "420",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cincinnati Bell Wireless LLC"
  },
  {
    "mcc": "310",
    "mnc": "180",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cingular Wireless"
  },
  {
    "mcc": "310",
    "mnc": "620",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Coleman County Telco /Trans TX"
  },
  {
    "mcc": "311",
    "mnc": "040",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "06",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Consolidated Telcom"
  },
  {
    "mcc": "310",
    "mnc": "60",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Consolidated Telcom"
  },
  {
    "mcc": "310",
    "mnc": "26",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "312",
    "mnc": "380",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "930",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "311",
    "mnc": "240",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "080",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "700",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cross Valliant Cellular Partnership"
  },
  {
    "mcc": "312",
    "mnc": "030",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cross Wireless Telephone Co."
  },
  {
    "mcc": "311",
    "mnc": "140",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Cross Wireless Telephone Co."
  },
  {
    "mcc": "311",
    "mnc": "520",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "312",
    "mnc": "040",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Custer Telephone Cooperative Inc."
  },
  {
    "mcc": "310",
    "mnc": "440",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Dobson Cellular Systems"
  },
  {
    "mcc": "310",
    "mnc": "990",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "E.N.M.R. Telephone Coop."
  },
  {
    "mcc": "312",
    "mnc": "120",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "East Kentucky Network LLC"
  },
  {
    "mcc": "310",
    "mnc": "750",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "East Kentucky Network LLC"
  },
  {
    "mcc": "312",
    "mnc": "130",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "East Kentucky Network LLC"
  },
  {
    "mcc": "310",
    "mnc": "090",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Edge Wireless LLC"
  },
  {
    "mcc": "310",
    "mnc": "610",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Elkhart TelCo. / Epic Touch Co."
  },
  {
    "mcc": "311",
    "mnc": "210",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "311",
    "mnc": "311",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Farmers"
  },
  {
    "mcc": "311",
    "mnc": "460",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Fisher Wireless Services Inc."
  },
  {
    "mcc": "311",
    "mnc": "370",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "GCI Communication Corp."
  },
  {
    "mcc": "310",
    "mnc": "430",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "GCI Communication Corp."
  },
  {
    "mcc": "310",
    "mnc": "920",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Get Mobile Inc."
  },
  {
    "mcc": "310",
    "mnc": "970",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "311",
    "mnc": "340",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Illinois Valley Cellular RSA 2 Partnership"
  },
  {
    "mcc": "311",
    "mnc": "030",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "311",
    "mnc": "410",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Iowa RSA No. 2 Limited Partnership"
  },
  {
    "mcc": "312",
    "mnc": "170",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Iowa RSA No. 2 Limited Partnership"
  },
  {
    "mcc": "310",
    "mnc": "770",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Iowa Wireless Services LLC"
  },
  {
    "mcc": "310",
    "mnc": "650",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Jasper"
  },
  {
    "mcc": "310",
    "mnc": "870",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Kaplan Telephone Company Inc."
  },
  {
    "mcc": "312",
    "mnc": "180",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Keystone Wireless LLC"
  },
  {
    "mcc": "310",
    "mnc": "690",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Keystone Wireless LLC"
  },
  {
    "mcc": "311",
    "mnc": "310",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Lamar County Cellular"
  },
  {
    "mcc": "310",
    "mnc": "016",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Leap Wireless International Inc."
  },
  {
    "mcc": "311",
    "mnc": "090",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "040",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Matanuska Tel. Assn. Inc."
  },
  {
    "mcc": "310",
    "mnc": "780",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Message Express Co. / Airlink PCS"
  },
  {
    "mcc": "311",
    "mnc": "660",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "311",
    "mnc": "330",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Michigan Wireless LLC"
  },
  {
    "mcc": "311",
    "mnc": "000",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "400",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Minnesota South. Wirel. Co. / Hickory"
  },
  {
    "mcc": "311",
    "mnc": "020",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Missouri RSA No 5 Partnership"
  },
  {
    "mcc": "311",
    "mnc": "010",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Missouri RSA No 5 Partnership"
  },
  {
    "mcc": "312",
    "mnc": "220",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Missouri RSA No 5 Partnership"
  },
  {
    "mcc": "312",
    "mnc": "010",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Missouri RSA No 5 Partnership"
  },
  {
    "mcc": "311",
    "mnc": "920",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Missouri RSA No 5 Partnership"
  },
  {
    "mcc": "310",
    "mnc": "350",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Mohave Cellular LP"
  },
  {
    "mcc": "310",
    "mnc": "570",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "MTPCS LLC"
  },
  {
    "mcc": "310",
    "mnc": "290",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "NEP Cellcorp Inc."
  },
  {
    "mcc": "310",
    "mnc": "34",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Nevada Wireless LLC"
  },
  {
    "mcc": "311",
    "mnc": "380",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "600",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "New-Cell Inc."
  },
  {
    "mcc": "311",
    "mnc": "100",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "311",
    "mnc": "300",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Nexus Communications Inc."
  },
  {
    "mcc": "310",
    "mnc": "130",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "North Carolina RSA 3 Cellular Tel. Co."
  },
  {
    "mcc": "312",
    "mnc": "230",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "North Dakota Network Company"
  },
  {
    "mcc": "311",
    "mnc": "610",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "North Dakota Network Company"
  },
  {
    "mcc": "310",
    "mnc": "450",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Northeast Colorado Cellular Inc."
  },
  {
    "mcc": "311",
    "mnc": "710",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Northeast Wireless Networks LLC"
  },
  {
    "mcc": "310",
    "mnc": "670",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Northstar"
  },
  {
    "mcc": "310",
    "mnc": "011",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Northstar"
  },
  {
    "mcc": "311",
    "mnc": "420",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Northwest Missouri Cellular Limited Partnership"
  },
  {
    "mcc": "310",
    "mnc": "540",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "999",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Various Networks"
  },
  {
    "mcc": "310",
    "mnc": "760",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Panhandle Telephone Cooperative Inc."
  },
  {
    "mcc": "310",
    "mnc": "580",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "PCS ONE"
  },
  {
    "mcc": "311",
    "mnc": "170",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "PetroCom"
  },
  {
    "mcc": "311",
    "mnc": "670",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Pine Belt Cellular, Inc."
  },
  {
    "mcc": "311",
    "mnc": "080",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "790",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "100",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Plateau Telecommunications Inc."
  },
  {
    "mcc": "310",
    "mnc": "940",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Poka Lambro Telco Ltd."
  },
  {
    "mcc": "311",
    "mnc": "730",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "311",
    "mnc": "540",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "500",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Public Service Cellular Inc."
  },
  {
    "mcc": "312",
    "mnc": "160",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "RSA 1 Limited Partnership"
  },
  {
    "mcc": "311",
    "mnc": "430",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "RSA 1 Limited Partnership"
  },
  {
    "mcc": "311",
    "mnc": "350",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Sagebrush Cellular Inc."
  },
  {
    "mcc": "311",
    "mnc": "910",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "46",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "SIMMETRY"
  },
  {
    "mcc": "311",
    "mnc": "260",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "SLO Cellular Inc / Cellular One of San Luis"
  },
  {
    "mcc": "310",
    "mnc": "320",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Smith Bagley Inc."
  },
  {
    "mcc": "310",
    "mnc": "15",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Unknown"
  },
  {
    "mcc": "316",
    "mnc": "011",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Southern Communications Services Inc."
  },
  {
    "mcc": "312",
    "mnc": "530",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Sprint Spectrum"
  },
  {
    "mcc": "311",
    "mnc": "870",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Sprint Spectrum"
  },
  {
    "mcc": "311",
    "mnc": "490",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Sprint Spectrum"
  },
  {
    "mcc": "310",
    "mnc": "120",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Sprint Spectrum"
  },
  {
    "mcc": "316",
    "mnc": "010",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Sprint Spectrum"
  },
  {
    "mcc": "312",
    "mnc": "190",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Sprint Spectrum"
  },
  {
    "mcc": "311",
    "mnc": "880",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Sprint Spectrum"
  },
  {
    "mcc": "310",
    "mnc": "260",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "200",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "250",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "160",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "240",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "660",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "230",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "31",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "220",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "270",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "210",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "300",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "280",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "330",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "800",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "310",
    "mnc": "310",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "T-Mobile"
  },
  {
    "mcc": "311",
    "mnc": "740",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "310",
    "mnc": "740",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Telemetrix Inc."
  },
  {
    "mcc": "310",
    "mnc": "14",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Testing"
  },
  {
    "mcc": "310",
    "mnc": "950",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Unknown"
  },
  {
    "mcc": "310",
    "mnc": "860",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Texas RSA 15B2 Limited Partnership"
  },
  {
    "mcc": "311",
    "mnc": "830",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Thumb Cellular Limited Partnership"
  },
  {
    "mcc": "311",
    "mnc": "050",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Thumb Cellular Limited Partnership"
  },
  {
    "mcc": "310",
    "mnc": "460",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "TMP Corporation"
  },
  {
    "mcc": "310",
    "mnc": "490",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Triton PCS"
  },
  {
    "mcc": "312",
    "mnc": "290",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Uintah Basin Electronics Telecommunications Inc."
  },
  {
    "mcc": "311",
    "mnc": "860",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Uintah Basin Electronics Telecommunications Inc."
  },
  {
    "mcc": "310",
    "mnc": "960",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Uintah Basin Electronics Telecommunications Inc."
  },
  {
    "mcc": "310",
    "mnc": "020",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Union Telephone Co."
  },
  {
    "mcc": "311",
    "mnc": "220",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "United States Cellular Corp."
  },
  {
    "mcc": "310",
    "mnc": "730",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "United States Cellular Corp."
  },
  {
    "mcc": "311",
    "mnc": "650",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "United Wireless Communications Inc."
  },
  {
    "mcc": "310",
    "mnc": "38",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "USA 3650 AT&T"
  },
  {
    "mcc": "310",
    "mnc": "520",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "VeriSign"
  },
  {
    "mcc": "310",
    "mnc": "003",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Unknown"
  },
  {
    "mcc": "310",
    "mnc": "23",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Unknown"
  },
  {
    "mcc": "310",
    "mnc": "24",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Unknown"
  },
  {
    "mcc": "310",
    "mnc": "25",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Unknown"
  },
  {
    "mcc": "310",
    "mnc": "530",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "West Virginia Wireless"
  },
  {
    "mcc": "310",
    "mnc": "26",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Unknown"
  },
  {
    "mcc": "310",
    "mnc": "340",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Westlink Communications, LLC"
  },
  {
    "mcc": "311",
    "mnc": "150",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": ""
  },
  {
    "mcc": "311",
    "mnc": "070",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Wisconsin RSA #7 Limited Partnership"
  },
  {
    "mcc": "310",
    "mnc": "390",
    "iso": "us",
    "country": "United States",
    "country_code": "1",
    "network": "Yorkville Telephone Cooperative"
  },
  {
    "mcc": "748",
    "mnc": "01",
    "iso": "uy",
    "country": "Uruguay",
    "country_code": "598",
    "network": "Ancel/Antel"
  },
  {
    "mcc": "748",
    "mnc": "03",
    "iso": "uy",
    "country": "Uruguay",
    "country_code": "598",
    "network": "Ancel/Antel"
  },
  {
    "mcc": "748",
    "mnc": "00",
    "iso": "uy",
    "country": "Uruguay",
    "country_code": "598",
    "network": "Ancel/Antel"
  },
  {
    "mcc": "748",
    "mnc": "10",
    "iso": "uy",
    "country": "Uruguay",
    "country_code": "598",
    "network": "Claro/AM Wireless"
  },
  {
    "mcc": "748",
    "mnc": "07",
    "iso": "uy",
    "country": "Uruguay",
    "country_code": "598",
    "network": "MOVISTAR"
  },
  {
    "mcc": "434",
    "mnc": "04",
    "iso": "uz",
    "country": "Uzbekistan",
    "country_code": "998",
    "network": "Bee Line/Unitel"
  },
  {
    "mcc": "434",
    "mnc": "01",
    "iso": "uz",
    "country": "Uzbekistan",
    "country_code": "998",
    "network": "Buztel"
  },
  {
    "mcc": "434",
    "mnc": "07",
    "iso": "uz",
    "country": "Uzbekistan",
    "country_code": "998",
    "network": "MTS/Uzdunrobita"
  },
  {
    "mcc": "434",
    "mnc": "05",
    "iso": "uz",
    "country": "Uzbekistan",
    "country_code": "998",
    "network": "Ucell/Coscom"
  },
  {
    "mcc": "434",
    "mnc": "02",
    "iso": "uz",
    "country": "Uzbekistan",
    "country_code": "998",
    "network": "Uzmacom"
  },
  {
    "mcc": "541",
    "mnc": "05",
    "iso": "vu",
    "country": "Vanuatu",
    "country_code": "678",
    "network": "DigiCel"
  },
  {
    "mcc": "541",
    "mnc": "01",
    "iso": "vu",
    "country": "Vanuatu",
    "country_code": "678",
    "network": "SMILE"
  },
  {
    "mcc": "734",
    "mnc": "03",
    "iso": "ve",
    "country": "Venezuela",
    "country_code": "58",
    "network": "DigiTel C.A."
  },
  {
    "mcc": "734",
    "mnc": "02",
    "iso": "ve",
    "country": "Venezuela",
    "country_code": "58",
    "network": "DigiTel C.A."
  },
  {
    "mcc": "734",
    "mnc": "01",
    "iso": "ve",
    "country": "Venezuela",
    "country_code": "58",
    "network": "DigiTel C.A."
  },
  {
    "mcc": "734",
    "mnc": "06",
    "iso": "ve",
    "country": "Venezuela",
    "country_code": "58",
    "network": "Movilnet C.A. "
  },
  {
    "mcc": "734",
    "mnc": "04",
    "iso": "ve",
    "country": "Venezuela",
    "country_code": "58",
    "network": "Movistar/TelCel"
  },
  {
    "mcc": "452",
    "mnc": "07",
    "iso": "vn",
    "country": "Viet Nam",
    "country_code": "84",
    "network": "Gmobile"
  },
  {
    "mcc": "452",
    "mnc": "08",
    "iso": "vn",
    "country": "Viet Nam",
    "country_code": "84",
    "network": "I-Telecom"
  },
  {
    "mcc": "452",
    "mnc": "08",
    "iso": "vn",
    "country": "Viet Nam",
    "country_code": "84",
    "network": "I-Telecom"
  },
  {
    "mcc": "452",
    "mnc": "01",
    "iso": "vn",
    "country": "Viet Nam",
    "country_code": "84",
    "network": "Mobifone"
  },
  {
    "mcc": "452",
    "mnc": "03",
    "iso": "vn",
    "country": "Viet Nam",
    "country_code": "84",
    "network": "S-Fone/Telecom"
  },
  {
    "mcc": "452",
    "mnc": "05",
    "iso": "vn",
    "country": "Viet Nam",
    "country_code": "84",
    "network": "VietnaMobile"
  },
  {
    "mcc": "452",
    "mnc": "04",
    "iso": "vn",
    "country": "Viet Nam",
    "country_code": "84",
    "network": "Viettel Mobile"
  },
  {
    "mcc": "452",
    "mnc": "06",
    "iso": "vn",
    "country": "Viet Nam",
    "country_code": "84",
    "network": "Viettel Mobile"
  },
  {
    "mcc": "452",
    "mnc": "02",
    "iso": "vn",
    "country": "Viet Nam",
    "country_code": "84",
    "network": "Vinaphone"
  },
  {
    "mcc": "376",
    "mnc": "50",
    "iso": "vi",
    "country": "Virgin Islands, U.S.",
    "country_code": "1340",
    "network": "Digicel"
  },
  {
    "mcc": "421",
    "mnc": "04",
    "iso": "ye",
    "country": "Yemen",
    "country_code": "967",
    "network": "HITS/Y Unitel"
  },
  {
    "mcc": "421",
    "mnc": "02",
    "iso": "ye",
    "country": "Yemen",
    "country_code": "967",
    "network": "MTN/Spacetel"
  },
  {
    "mcc": "421",
    "mnc": "01",
    "iso": "ye",
    "country": "Yemen",
    "country_code": "967",
    "network": "Sabaphone"
  },
  {
    "mcc": "421",
    "mnc": "03",
    "iso": "ye",
    "country": "Yemen",
    "country_code": "967",
    "network": "Yemen Mob. CDMA"
  },
  {
    "mcc": "645",
    "mnc": "03",
    "iso": "zm",
    "country": "Zambia",
    "country_code": "260",
    "network": "Zamtel/Cell Z/MTS"
  },
  {
    "mcc": "645",
    "mnc": "02",
    "iso": "zm",
    "country": "Zambia",
    "country_code": "260",
    "network": "MTN/Telecel"
  },
  {
    "mcc": "645",
    "mnc": "01",
    "iso": "zm",
    "country": "Zambia",
    "country_code": "260",
    "network": "Airtel/Zain/Celtel"
  },
  {
    "mcc": "648",
    "mnc": "04",
    "iso": "zw",
    "country": "Zimbabwe",
    "country_code": "263",
    "network": "Econet"
  },
  {
    "mcc": "648",
    "mnc": "01",
    "iso": "zw",
    "country": "Zimbabwe",
    "country_code": "263",
    "network": "Net One"
  },
  {
    "mcc": "648",
    "mnc": "03",
    "iso": "zw",
    "country": "Zimbabwe",
    "country_code": "263",
    "network": "Telecel"
  }
];