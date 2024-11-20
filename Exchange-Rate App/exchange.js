const countryList = {
  AED: { name: "United Arab Emirates", code: "AE" },
  AFN: { name: "Afghanistan", code: "AF" },
  XCD: { name: "East Caribbean Dollar", code: "AG" },
  ALL: { name: "Albania", code: "AL" },
  AMD: { name: "Armenia", code: "AM" },
  ANG: { name: "Netherlands Antilles", code: "AN" },
  AOA: { name: "Angola", code: "AO" },
  AQD: { name: "Antarctica", code: "AQ" },
  ARS: { name: "Argentina", code: "AR" },
  AUD: { name: "Australia", code: "AU" },
  AZN: { name: "Azerbaijan", code: "AZ" },
  BAM: { name: "Bosnia and Herzegovina", code: "BA" },
  BBD: { name: "Barbados", code: "BB" },
  BDT: { name: "Bangladesh", code: "BD" },
  XOF: { name: "West African CFA Franc", code: "BE" },
  BGN: { name: "Bulgaria", code: "BG" },
  BHD: { name: "Bahrain", code: "BH" },
  BIF: { name: "Burundi", code: "BI" },
  BMD: { name: "Bermuda", code: "BM" },
  BND: { name: "Brunei", code: "BN" },
  BOB: { name: "Bolivia", code: "BO" },
  BRL: { name: "Brazil", code: "BR" },
  BSD: { name: "Bahamas", code: "BS" },
  NOK: { name: "Norway", code: "BV" },
  BWP: { name: "Botswana", code: "BW" },
  BYR: { name: "Belarus", code: "BY" },
  BZD: { name: "Belize", code: "BZ" },
  CAD: { name: "Canada", code: "CA" },
  CDF: { name: "Democratic Republic of the Congo", code: "CD" },
  XAF: { name: "Central African Republic", code: "CF" },
  CHF: { name: "Switzerland", code: "CH" },
  CLP: { name: "Chile", code: "CL" },
  CNY: { name: "China", code: "CN" },
  COP: { name: "Colombia", code: "CO" },
  CRC: { name: "Costa Rica", code: "CR" },
  CUP: { name: "Cuba", code: "CU" },
  CVE: { name: "Cape Verde", code: "CV" },
  CYP: { name: "Cyprus", code: "CY" },
  CZK: { name: "Czech Republic", code: "CZ" },
  DJF: { name: "Djibouti", code: "DJ" },
  DKK: { name: "Denmark", code: "DK" },
  DOP: { name: "Dominican Republic", code: "DO" },
  DZD: { name: "Algeria", code: "DZ" },
  ECS: { name: "Ecuador", code: "EC" },
  EEK: { name: "Estonia", code: "EE" },
  EGP: { name: "Egypt", code: "EG" },
  ETB: { name: "Ethiopia", code: "ET" },
  EUR: { name: "European Union", code: "FR" },
  FJD: { name: "Fiji", code: "FJ" },
  FKP: { name: "Falkland Islands", code: "FK" },
  GBP: { name: "United Kingdom", code: "GB" },
  GEL: { name: "Georgia", code: "GE" },
  GGP: { name: "Guernsey", code: "GG" },
  GHS: { name: "Ghana", code: "GH" },
  GIP: { name: "Gibraltar", code: "GI" },
  GMD: { name: "Gambia", code: "GM" },
  GNF: { name: "Guinea", code: "GN" },
  GTQ: { name: "Guatemala", code: "GT" },
  GYD: { name: "Guyana", code: "GY" },
  HKD: { name: "Hong Kong", code: "HK" },
  HNL: { name: "Honduras", code: "HN" },
  HRK: { name: "Croatia", code: "HR" },
  HTG: { name: "Haiti", code: "HT" },
  HUF: { name: "Hungary", code: "HU" },
  IDR: { name: "Indonesia", code: "ID" },
  ILS: { name: "Israel", code: "IL" },
  INR: { name: "India", code: "IN" },
  IQD: { name: "Iraq", code: "IQ" },
  IRR: { name: "Iran", code: "IR" },
  ISK: { name: "Iceland", code: "IS" },
  JMD: { name: "Jamaica", code: "JM" },
  JOD: { name: "Jordan", code: "JO" },
  JPY: { name: "Japan", code: "JP" },
  KES: { name: "Kenya", code: "KE" },
  KGS: { name: "Kyrgyzstan", code: "KG" },
  KHR: { name: "Cambodia", code: "KH" },
  KMF: { name: "Comoros", code: "KM" },
  KPW: { name: "North Korea", code: "KP" },
  KRW: { name: "South Korea", code: "KR" },
  KWD: { name: "Kuwait", code: "KW" },
  KYD: { name: "Cayman Islands", code: "KY" },
  KZT: { name: "Kazakhstan", code: "KZ" },
  LAK: { name: "Laos", code: "LA" },
  LBP: { name: "Lebanon", code: "LB" },
  LKR: { name: "Sri Lanka", code: "LK" },
  LRD: { name: "Liberia", code: "LR" },
  LSL: { name: "Lesotho", code: "LS" },
  LTL: { name: "Lithuania", code: "LT" },
  LVL: { name: "Latvia", code: "LV" },
  LYD: { name: "Libya", code: "LY" },
  MAD: { name: "Morocco", code: "MA" },
  MDL: { name: "Moldova", code: "MD" },
  MGA: { name: "Madagascar", code: "MG" },
  MKD: { name: "North Macedonia", code: "MK" },
  MMK: { name: "Myanmar", code: "MM" },
  MNT: { name: "Mongolia", code: "MN" },
  MOP: { name: "Macau", code: "MO" },
  MRO: { name: "Mauritania", code: "MR" },
  MTL: { name: "Malta", code: "MT" },
  MUR: { name: "Mauritius", code: "MU" },
  MVR: { name: "Maldives", code: "MV" },
  MWK: { name: "Malawi", code: "MW" },
  MXN: { name: "Mexico", code: "MX" },
  MYR: { name: "Malaysia", code: "MY" },
  MZN: { name: "Mozambique", code: "MZ" },
  NAD: { name: "Namibia", code: "NA" },
  XPF: { name: "French Pacific Franc", code: "NC" },
  NGN: { name: "Nigeria", code: "NG" },
  NIO: { name: "Nicaragua", code: "NI" },
  NPR: { name: "Nepal", code: "NP" },
  NZD: { name: "New Zealand", code: "NZ" },
  OMR: { name: "Oman", code: "OM" },
  PAB: { name: "Panama", code: "PA" },
  PEN: { name: "Peru", code: "PE" },
  PGK: { name: "Papua New Guinea", code: "PG" },
  PHP: { name: "Philippines", code: "PH" },
  PKR: { name: "Pakistan", code: "PK" },
  PLN: { name: "Poland", code: "PL" },
  PYG: { name: "Paraguay", code: "PY" },
  QAR: { name: "Qatar", code: "QA" },
  RON: { name: "Romania", code: "RO" },
  RSD: { name: "Serbia", code: "RS" },
  RUB: { name: "Russia", code: "RU" },
  RWF: { name: "Rwanda", code: "RW" },
  SAR: { name: "Saudi Arabia", code: "SA" },
  SBD: { name: "Solomon Islands", code: "SB" },
  SCR: { name: "Seychelles", code: "SC" },
  SDG: { name: "Sudan", code: "SD" },
  SEK: { name: "Sweden", code: "SE" },
  SGD: { name: "Singapore", code: "SG" },
  SKK: { name: "Slovakia", code: "SK" },
  SLL: { name: "Sierra Leone", code: "SL" },
  SOS: { name: "Somalia", code: "SO" },
  SRD: { name: "Suriname", code: "SR" },
  STD: { name: "São Tomé and Príncipe", code: "ST" },
  SVC: { name: "El Salvador", code: "SV" },
  SYP: { name: "Syria", code: "SY" },
  SZL: { name: "Eswatini", code: "SZ" },
  THB: { name: "Thailand", code: "TH" },
  TJS: { name: "Tajikistan", code: "TJ" },
  TMT: { name: "Turkmenistan", code: "TM" },
  TND: { name: "Tunisia", code: "TN" },
  TOP: { name: "Tonga", code: "TO" },
  TRY: { name: "Turkey", code: "TR" },
  TTD: { name: "Trinidad and Tobago", code: "TT" },
  TWD: { name: "Taiwan", code: "TW" },
  TZS: { name: "Tanzania", code: "TZ" },
  UAH: { name: "Ukraine", code: "UA" },
  UGX: { name: "Uganda", code: "UG" },
  USD: { name: "United States", code: "US" },
  UYU: { name: "Uruguay", code: "UY" },
  UZS: { name: "Uzbekistan", code: "UZ" },
  VEF: { name: "Venezuela", code: "VE" },
  VND: { name: "Vietnam", code: "VN" },
  VUV: { name: "Vanuatu", code: "VU" },
  YER: { name: "Yemen", code: "YE" },
  ZAR: { name: "South Africa", code: "ZA" },
  ZMK: { name: "Zambia", code: "ZM" },
  ZWD: { name: "Zimbabwe", code: "ZW" },
};

let url="https://api.exchangerate-api.com/v4/latest/"
let btn=document.querySelector("button");
let input=document.querySelector("input");
//selecting <select> for flag
let dropDown=document.querySelectorAll(".drop select")
//here selecting <select> for getting values of 'from' and 'to'
let from=document.querySelector(".from2 select"); 
let to=document.querySelector(".to2 select");

//Applying loop for creating dropdown from countryList
for(let select of dropDown){
  for(let code in countryList){
    let option1=document.createElement("option");
    option1.value=code;
    option1.innerText=code+'-'+countryList[code].name//country name;
    //selecting default name
    if (select.name === "from" && code === "USD") {
      option1.selected = "selected";
    } else if (select.name === "to" && code === "INR") {
      option1.selected = "selected";
    }
    select.appendChild(option1);
  }
  //this is for changing the flag.
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
})
}
//This function is for flag.
const updateFlag = (element) => {
  let val = element.value;
  let countryCode = countryList[val].code;
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

//here is the main code
btn.addEventListener("click",async(evt)=>{
  evt.preventDefault();
  let amt=input.value;
  if(amt===''||amt<0){
    amt=1;
    input.value="1";
  }
  let code=from.value;
  let code2=to.value;
  
  let latestRates=await curr(code);
  let toValue=latestRates.rates[code2];
  let result=parseFloat(amt) * toValue;

  let res=document.querySelector(".result");
  res.innerHTML=`<b>${amt} ${code}=${result} ${code2}</b>`;
});

async function curr(code){
  try{
    let data=await axios.get(url+code);
    return data.data;
  }catch(err){
    console.log("Data not found");
    return [];
  }
}