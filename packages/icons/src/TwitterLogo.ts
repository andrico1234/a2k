import { LitElement, svg } from "lit";

// Eventually refactor this so size is computed using 's', 'm', 'l'
export class TwitterLogo extends LitElement {
  width = 31;
  height = 27;

  render() {
    return svg`
  <svg styles="width:auto" viewBox="0 0 ${this.width} ${this.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 1H4V2H3V1Z" fill="#479DFF"/>
<path d="M3 1H4V2H3V1Z" fill="black" fill-opacity="0.2"/>
<path d="M25 1H26V2H25V1Z" fill="#479DFF"/>
<path d="M25 1H26V2H25V1Z" fill="black" fill-opacity="0.2"/>
<path d="M22 0H23V1H22V0Z" fill="#479DFF"/>
<path d="M22 0H23V1H22V0Z" fill="black" fill-opacity="0.2"/>
<path d="M23 0H24V1H23V0Z" fill="#479DFF"/>
<path d="M23 0H24V1H23V0Z" fill="black" fill-opacity="0.2"/>
<path d="M24 0H25V1H24V0Z" fill="#479DFF"/>
<path d="M24 0H25V1H24V0Z" fill="black" fill-opacity="0.2"/>
<path d="M20 0H21V1H20V0Z" fill="#479DFF"/>
<path d="M20 0H21V1H20V0Z" fill="black" fill-opacity="0.2"/>
<path d="M26 2H27V3H26V2Z" fill="#479DFF"/>
<path d="M26 2H27V3H26V2Z" fill="black" fill-opacity="0.2"/>
<path d="M28 2H29V3H28V2Z" fill="#479DFF"/>
<path d="M28 2H29V3H28V2Z" fill="black" fill-opacity="0.2"/>
<path d="M29 2H30V3H29V2Z" fill="#479DFF"/>
<path d="M29 2H30V3H29V2Z" fill="black" fill-opacity="0.2"/>
<path d="M27 3H28V4H27V3Z" fill="#479DFF"/>
<path d="M27 3H28V4H27V3Z" fill="black" fill-opacity="0.2"/>
<path d="M26 3H27V4H26V3Z" fill="#479DFF"/>
<path d="M26 3H27V4H26V3Z" fill="black" fill-opacity="0.2"/>
<path d="M27 4H28V5H27V4Z" fill="#479DFF"/>
<path d="M27 4H28V5H27V4Z" fill="black" fill-opacity="0.2"/>
<path d="M27 7H28V8H27V7Z" fill="#479DFF"/>
<path d="M27 7H28V8H27V7Z" fill="black" fill-opacity="0.2"/>
<path d="M28 7H29V8H28V7Z" fill="#479DFF"/>
<path d="M28 7H29V8H28V7Z" fill="black" fill-opacity="0.2"/>
<path d="M27 8H28V9H27V8Z" fill="#479DFF"/>
<path d="M27 8H28V9H27V8Z" fill="black" fill-opacity="0.2"/>
<path d="M28 3H29V4H28V3Z" fill="#479DFF"/>
<path d="M28 3H29V4H28V3Z" fill="black" fill-opacity="0.2"/>
<path d="M26 11H27V12H26V11Z" fill="#479DFF"/>
<path d="M26 11H27V12H26V11Z" fill="black" fill-opacity="0.2"/>
<path d="M26 12H27V13H26V12Z" fill="#479DFF"/>
<path d="M26 12H27V13H26V12Z" fill="black" fill-opacity="0.2"/>
<path d="M26 13H27V14H26V13Z" fill="#479DFF"/>
<path d="M26 13H27V14H26V13Z" fill="black" fill-opacity="0.2"/>
<path d="M26 14H27V15H26V14Z" fill="#479DFF"/>
<path d="M26 14H27V15H26V14Z" fill="black" fill-opacity="0.2"/>
<path d="M25 14H26V15H25V14Z" fill="#479DFF"/>
<path d="M25 14H26V15H25V14Z" fill="black" fill-opacity="0.2"/>
<path d="M25 15H26V16H25V15Z" fill="#479DFF"/>
<path d="M25 15H26V16H25V15Z" fill="black" fill-opacity="0.2"/>
<path d="M25 16H26V17H25V16Z" fill="#479DFF"/>
<path d="M25 16H26V17H25V16Z" fill="black" fill-opacity="0.2"/>
<path d="M25 17H26V18H25V17Z" fill="#479DFF"/>
<path d="M25 17H26V18H25V17Z" fill="black" fill-opacity="0.2"/>
<path d="M24 16H25V17H24V16Z" fill="#479DFF"/>
<path d="M24 16H25V17H24V16Z" fill="black" fill-opacity="0.2"/>
<path d="M9 25V26H8V25H9Z" fill="#479DFF"/>
<path d="M9 25V26H8V25H9Z" fill="black" fill-opacity="0.2"/>
<path d="M8 25V26H7V25H8Z" fill="#479DFF"/>
<path d="M8 25V26H7V25H8Z" fill="black" fill-opacity="0.2"/>
<path d="M7 25V26H6V25H7Z" fill="#479DFF"/>
<path d="M7 25V26H6V25H7Z" fill="black" fill-opacity="0.2"/>
<path d="M6 24V25H5V24H6Z" fill="#479DFF"/>
<path d="M6 24V25H5V24H6Z" fill="black" fill-opacity="0.2"/>
<path d="M5 24V25H4V24H5Z" fill="#479DFF"/>
<path d="M5 24V25H4V24H5Z" fill="black" fill-opacity="0.2"/>
<path d="M5 23V24H4V23H5Z" fill="#479DFF"/>
<path d="M5 23V24H4V23H5Z" fill="black" fill-opacity="0.2"/>
<path d="M6 22V23H5V22H6Z" fill="#479DFF"/>
<path d="M6 22V23H5V22H6Z" fill="black" fill-opacity="0.2"/>
<path d="M7 22V23H6V22H7Z" fill="#479DFF"/>
<path d="M7 22V23H6V22H7Z" fill="black" fill-opacity="0.2"/>
<path d="M4 23V24H3V23H4Z" fill="#479DFF"/>
<path d="M4 23V24H3V23H4Z" fill="black" fill-opacity="0.2"/>
<path d="M3 24V25H2V24H3Z" fill="#479DFF"/>
<path d="M3 24V25H2V24H3Z" fill="black" fill-opacity="0.2"/>
<path d="M2 24V25H1V24H2Z" fill="#479DFF"/>
<path d="M2 24V25H1V24H2Z" fill="black" fill-opacity="0.2"/>
<path d="M1 24V25H0L4.37114e-08 24H1Z" fill="#479DFF"/>
<path d="M1 24V25H0L4.37114e-08 24H1Z" fill="black" fill-opacity="0.2"/>
<path d="M2 25V26H1V25H2Z" fill="#479DFF"/>
<path d="M2 25V26H1V25H2Z" fill="black" fill-opacity="0.2"/>
<path d="M3 25V26H2V25H3Z" fill="#479DFF"/>
<path d="M3 25V26H2V25H3Z" fill="black" fill-opacity="0.2"/>
<path d="M4 25V26H3V25H4Z" fill="#479DFF"/>
<path d="M4 25V26H3V25H4Z" fill="black" fill-opacity="0.2"/>
<path d="M4 24V25H3V24H4Z" fill="#479DFF"/>
<path d="M4 24V25H3V24H4Z" fill="black" fill-opacity="0.2"/>
<path d="M5 25V26H4V25H5Z" fill="#479DFF"/>
<path d="M5 25V26H4V25H5Z" fill="black" fill-opacity="0.2"/>
<path d="M6 25V26H5V25H6Z" fill="#479DFF"/>
<path d="M6 25V26H5V25H6Z" fill="black" fill-opacity="0.2"/>
<path d="M28 6H29V7H28V6Z" fill="#479DFF"/>
<path d="M28 6H29V7H28V6Z" fill="black" fill-opacity="0.2"/>
<path d="M29 6H30V7H29V6Z" fill="#479DFF"/>
<path d="M29 6H30V7H29V6Z" fill="black" fill-opacity="0.2"/>
<path d="M29 5H30V6H29V5Z" fill="#479DFF"/>
<path d="M29 5H30V6H29V5Z" fill="black" fill-opacity="0.2"/>
<path d="M30 5H31V6H30V5Z" fill="#479DFF"/>
<path d="M30 5H31V6H30V5Z" fill="black" fill-opacity="0.2"/>
<path d="M25 2H26V3H25V2Z" fill="#479DFF"/>
<path d="M25 2H26V3H25V2Z" fill="black" fill-opacity="0.2"/>
<path d="M19 0H20V1H19V0Z" fill="#479DFF"/>
<path d="M19 0H20V1H19V0Z" fill="black" fill-opacity="0.2"/>
<path d="M18 1H19V2H18V1Z" fill="#479DFF"/>
<path d="M18 1H19V2H18V1Z" fill="black" fill-opacity="0.2"/>
<path d="M17 2H18V3H17V2Z" fill="#479DFF"/>
<path d="M17 2H18V3H17V2Z" fill="black" fill-opacity="0.2"/>
<path d="M16 3H17V4H16V3Z" fill="#479DFF"/>
<path d="M16 3H17V4H16V3Z" fill="black" fill-opacity="0.2"/>
<path d="M16 4H17V5H16V4Z" fill="#479DFF"/>
<path d="M16 4H17V5H16V4Z" fill="black" fill-opacity="0.2"/>
<path d="M15 5H16V6H15V5Z" fill="#479DFF"/>
<path d="M15 5H16V6H15V5Z" fill="black" fill-opacity="0.2"/>
<path d="M15 6H16V7H15V6Z" fill="#479DFF"/>
<path d="M15 6H16V7H15V6Z" fill="black" fill-opacity="0.2"/>
<path d="M15 7H16V8H15V7Z" fill="#479DFF"/>
<path d="M15 7H16V8H15V7Z" fill="black" fill-opacity="0.2"/>
<path d="M27 9H28V10H27V9Z" fill="#479DFF"/>
<path d="M27 9H28V10H27V9Z" fill="black" fill-opacity="0.2"/>
<path d="M27 10H28V11H27V10Z" fill="#479DFF"/>
<path d="M27 10H28V11H27V10Z" fill="black" fill-opacity="0.2"/>
<path d="M27 11H28V12H27V11Z" fill="#479DFF"/>
<path d="M27 11H28V12H27V11Z" fill="black" fill-opacity="0.2"/>
<path d="M7 21H8V22H7V21Z" fill="#479DFF"/>
<path d="M7 21H8V22H7V21Z" fill="black" fill-opacity="0.2"/>
<path d="M6 16H7V17H6V16Z" fill="#479DFF"/>
<path d="M6 16H7V17H6V16Z" fill="black" fill-opacity="0.2"/>
<path d="M7 16H8V17H7V16Z" fill="#479DFF"/>
<path d="M7 16H8V17H7V16Z" fill="black" fill-opacity="0.2"/>
<path d="M6 15H7V16H6V15Z" fill="#479DFF"/>
<path d="M6 15H7V16H6V15Z" fill="black" fill-opacity="0.2"/>
<path d="M7 15H8V16H7V15Z" fill="#479DFF"/>
<path d="M7 15H8V16H7V15Z" fill="black" fill-opacity="0.2"/>
<path d="M6 14H7V15H6V14Z" fill="#479DFF"/>
<path d="M6 14H7V15H6V14Z" fill="black" fill-opacity="0.2"/>
<path d="M6 13H7V14H6V13Z" fill="#479DFF"/>
<path d="M6 13H7V14H6V13Z" fill="black" fill-opacity="0.2"/>
<path d="M6 11H7V12H6V11Z" fill="#479DFF"/>
<path d="M6 11H7V12H6V11Z" fill="black" fill-opacity="0.2"/>
<path d="M6 10H7V11H6V10Z" fill="#479DFF"/>
<path d="M6 10H7V11H6V10Z" fill="black" fill-opacity="0.2"/>
<path d="M6 9H7V10H6V9Z" fill="#479DFF"/>
<path d="M6 9H7V10H6V9Z" fill="black" fill-opacity="0.2"/>
<path d="M6 8H7V9H6V8Z" fill="#479DFF"/>
<path d="M6 8H7V9H6V8Z" fill="black" fill-opacity="0.2"/>
<path d="M7 8H8V9H7V8Z" fill="#479DFF"/>
<path d="M7 8H8V9H7V8Z" fill="black" fill-opacity="0.2"/>
<path d="M6 7H7V8H6V7Z" fill="#479DFF"/>
<path d="M6 7H7V8H6V7Z" fill="black" fill-opacity="0.2"/>
<path d="M7 7H8V8H7V7Z" fill="#479DFF"/>
<path d="M7 7H8V8H7V7Z" fill="black" fill-opacity="0.2"/>
<path d="M6 6H7V7H6V6Z" fill="#479DFF"/>
<path d="M6 6H7V7H6V6Z" fill="black" fill-opacity="0.2"/>
<path d="M6 5H7V6H6V5Z" fill="#479DFF"/>
<path d="M6 5H7V6H6V5Z" fill="black" fill-opacity="0.2"/>
<path d="M7 6H8V7H7V6Z" fill="#479DFF"/>
<path d="M7 6H8V7H7V6Z" fill="black" fill-opacity="0.2"/>
<path d="M8 7H9V8H8V7Z" fill="#479DFF"/>
<path d="M8 7H9V8H8V7Z" fill="black" fill-opacity="0.2"/>
<path d="M10 7H11V8H10V7Z" fill="#479DFF"/>
<path d="M10 7H11V8H10V7Z" fill="black" fill-opacity="0.2"/>
<path d="M8 6H9V7H8V6Z" fill="#479DFF"/>
<path d="M8 6H9V7H8V6Z" fill="black" fill-opacity="0.2"/>
<path d="M9 6H10V7H9V6Z" fill="#479DFF"/>
<path d="M9 6H10V7H9V6Z" fill="black" fill-opacity="0.2"/>
<path d="M7 5H8V6H7V5Z" fill="#479DFF"/>
<path d="M7 5H8V6H7V5Z" fill="black" fill-opacity="0.2"/>
<path d="M6 4H7V5H6V4Z" fill="#479DFF"/>
<path d="M6 4H7V5H6V4Z" fill="black" fill-opacity="0.2"/>
<path d="M5 3H6V4H5V3Z" fill="#479DFF"/>
<path d="M5 3H6V4H5V3Z" fill="black" fill-opacity="0.2"/>
<path d="M4 2H5V3H4V2Z" fill="#479DFF"/>
<path d="M4 2H5V3H4V2Z" fill="black" fill-opacity="0.2"/>
<path d="M11 8H12V9H11V8Z" fill="#479DFF"/>
<path d="M11 8H12V9H11V8Z" fill="black" fill-opacity="0.2"/>
<path d="M11 7H12V8H11V7Z" fill="#479DFF"/>
<path d="M11 7H12V8H11V7Z" fill="black" fill-opacity="0.2"/>
<path d="M12 7H13V8H12V7Z" fill="#479DFF"/>
<path d="M12 7H13V8H12V7Z" fill="black" fill-opacity="0.2"/>
<path d="M6 18H7V19H6V18Z" fill="#479DFF"/>
<path d="M6 18H7V19H6V18Z" fill="black" fill-opacity="0.2"/>
<path d="M5 18H6V19H5V18Z" fill="#479DFF"/>
<path d="M5 18H6V19H5V18Z" fill="black" fill-opacity="0.2"/>
<path d="M7 18H8V19H7V18Z" fill="#479DFF"/>
<path d="M7 18H8V19H7V18Z" fill="black" fill-opacity="0.2"/>
<path d="M6 19H7V20H6V19Z" fill="#479DFF"/>
<path d="M6 19H7V20H6V19Z" fill="black" fill-opacity="0.2"/>
<path d="M5 14H6V15H5V14Z" fill="#479DFF"/>
<path d="M5 14H6V15H5V14Z" fill="black" fill-opacity="0.2"/>
<path d="M5 12H6V13H5V12Z" fill="#479DFF"/>
<path d="M5 12H6V13H5V12Z" fill="black" fill-opacity="0.2"/>
<path d="M5 11H6V12H5V11Z" fill="#479DFF"/>
<path d="M5 11H6V12H5V11Z" fill="black" fill-opacity="0.2"/>
<path d="M5 7H6V8H5V7Z" fill="#479DFF"/>
<path d="M5 7H6V8H5V7Z" fill="black" fill-opacity="0.2"/>
<path d="M5 6H6V7H5V6Z" fill="#479DFF"/>
<path d="M5 6H6V7H5V6Z" fill="black" fill-opacity="0.2"/>
<path d="M5 5H6V6H5V5Z" fill="#479DFF"/>
<path d="M5 5H6V6H5V5Z" fill="black" fill-opacity="0.2"/>
<path d="M5 4H6V5H5V4Z" fill="#479DFF"/>
<path d="M5 4H6V5H5V4Z" fill="black" fill-opacity="0.2"/>
<path d="M5 16H6V17H5V16Z" fill="#479DFF"/>
<path d="M5 16H6V17H5V16Z" fill="black" fill-opacity="0.2"/>
<path d="M5 17H6V18H5V17Z" fill="#479DFF"/>
<path d="M5 17H6V18H5V17Z" fill="black" fill-opacity="0.2"/>
<path d="M4 14H5V15H4V14Z" fill="#479DFF"/>
<path d="M4 14H5V15H4V14Z" fill="black" fill-opacity="0.2"/>
<path d="M3 13H4V14H3V13Z" fill="#479DFF"/>
<path d="M3 13H4V14H3V13Z" fill="black" fill-opacity="0.2"/>
<path d="M4 11H5V12H4V11Z" fill="#479DFF"/>
<path d="M4 11H5V12H4V11Z" fill="black" fill-opacity="0.2"/>
<path d="M4 10H5V11H4V10Z" fill="#479DFF"/>
<path d="M4 10H5V11H4V10Z" fill="black" fill-opacity="0.2"/>
<path d="M3 10H4V11H3V10Z" fill="#479DFF"/>
<path d="M3 10H4V11H3V10Z" fill="black" fill-opacity="0.2"/>
<path d="M3 11H4V12H3V11Z" fill="#479DFF"/>
<path d="M3 11H4V12H3V11Z" fill="black" fill-opacity="0.2"/>
<path d="M3 12H4V13H3V12Z" fill="#479DFF"/>
<path d="M3 12H4V13H3V12Z" fill="black" fill-opacity="0.2"/>
<path d="M2 10H3V11H2V10Z" fill="#479DFF"/>
<path d="M2 10H3V11H2V10Z" fill="black" fill-opacity="0.2"/>
<path d="M2 11H3V12H2V11Z" fill="#479DFF"/>
<path d="M2 11H3V12H2V11Z" fill="black" fill-opacity="0.2"/>
<path d="M2 12H3V13H2V12Z" fill="#479DFF"/>
<path d="M2 12H3V13H2V12Z" fill="black" fill-opacity="0.2"/>
<path d="M2 13H3V14H2V13Z" fill="#479DFF"/>
<path d="M2 13H3V14H2V13Z" fill="black" fill-opacity="0.2"/>
<path d="M2 9H3V10H2V9Z" fill="#479DFF"/>
<path d="M2 9H3V10H2V9Z" fill="black" fill-opacity="0.2"/>
<path d="M1 9H2V10H1V9Z" fill="#479DFF"/>
<path d="M1 9H2V10H1V9Z" fill="black" fill-opacity="0.2"/>
<path d="M1 8H2V9H1V8Z" fill="#479DFF"/>
<path d="M1 8H2V9H1V8Z" fill="black" fill-opacity="0.2"/>
<path d="M4 6H5V7H4V6Z" fill="#479DFF"/>
<path d="M4 6H5V7H4V6Z" fill="black" fill-opacity="0.2"/>
<path d="M4 5H5V6H4V5Z" fill="#479DFF"/>
<path d="M4 5H5V6H4V5Z" fill="black" fill-opacity="0.2"/>
<path d="M4 4H5V5H4V4Z" fill="#479DFF"/>
<path d="M4 4H5V5H4V4Z" fill="black" fill-opacity="0.2"/>
<path d="M3 3H4V4H3V3Z" fill="#479DFF"/>
<path d="M3 3H4V4H3V3Z" fill="black" fill-opacity="0.2"/>
<path d="M3 2H4V3H3V2Z" fill="#479DFF"/>
<path d="M3 2H4V3H3V2Z" fill="black" fill-opacity="0.2"/>
<path d="M3 4H4V5H3V4Z" fill="#479DFF"/>
<path d="M3 4H4V5H3V4Z" fill="black" fill-opacity="0.2"/>
<path d="M4 3H5V4H4V3Z" fill="#479DFF"/>
<path d="M4 3H5V4H4V3Z" fill="black" fill-opacity="0.2"/>
<path d="M2 2H3V3H2V2Z" fill="#479DFF"/>
<path d="M2 2H3V3H2V2Z" fill="black" fill-opacity="0.2"/>
<path d="M2 4H3V5H2V4Z" fill="#479DFF"/>
<path d="M2 4H3V5H2V4Z" fill="black" fill-opacity="0.2"/>
<path d="M3 5H4V6H3V5Z" fill="#479DFF"/>
<path d="M3 5H4V6H3V5Z" fill="black" fill-opacity="0.2"/>
<path d="M2 3H3V4H2V3Z" fill="#479DFF"/>
<path d="M2 3H3V4H2V3Z" fill="black" fill-opacity="0.2"/>
<path d="M4 16H5V17H4V16Z" fill="#479DFF"/>
<path d="M4 16H5V17H4V16Z" fill="black" fill-opacity="0.2"/>
<path d="M3 16H4V17H3V16Z" fill="#479DFF"/>
<path d="M3 16H4V17H3V16Z" fill="black" fill-opacity="0.2"/>
<path d="M4 17H5V18H4V17Z" fill="#479DFF"/>
<path d="M4 17H5V18H4V17Z" fill="black" fill-opacity="0.2"/>
<path d="M7 19H8V20H7V19Z" fill="#479DFF"/>
<path d="M7 19H8V20H7V19Z" fill="black" fill-opacity="0.2"/>
<path d="M8 19H9V20H8V19Z" fill="#479DFF"/>
<path d="M8 19H9V20H8V19Z" fill="black" fill-opacity="0.2"/>
<path d="M9 19H10V20H9V19Z" fill="#479DFF"/>
<path d="M9 19H10V20H9V19Z" fill="black" fill-opacity="0.2"/>
<path d="M8 20H9V21H8V20Z" fill="#479DFF"/>
<path d="M8 20H9V21H8V20Z" fill="black" fill-opacity="0.2"/>
<path d="M8 21H9V22H8V21Z" fill="#479DFF"/>
<path d="M8 21H9V22H8V21Z" fill="black" fill-opacity="0.2"/>
<path d="M7 22H8V23H7V22Z" fill="#479DFF"/>
<path d="M7 22H8V23H7V22Z" fill="black" fill-opacity="0.2"/>
<path d="M8 22H9V23H8V22Z" fill="#479DFF"/>
<path d="M8 22H9V23H8V22Z" fill="black" fill-opacity="0.2"/>
<path d="M6 23V24H5V23H6Z" fill="#479DFF"/>
<path d="M6 23V24H5V23H6Z" fill="black" fill-opacity="0.2"/>
<path d="M7 23V24H6V23H7Z" fill="#479DFF"/>
<path d="M7 23V24H6V23H7Z" fill="black" fill-opacity="0.2"/>
<path d="M7 23H8V24H7V23Z" fill="#479DFF"/>
<path d="M7 23H8V24H7V23Z" fill="black" fill-opacity="0.2"/>
<path d="M14 26H15V27H14V26Z" fill="#479DFF"/>
<path d="M14 26H15V27H14V26Z" fill="black" fill-opacity="0.2"/>
<path d="M15 26H16V27H15V26Z" fill="#479DFF"/>
<path d="M15 26H16V27H15V26Z" fill="black" fill-opacity="0.2"/>
<path d="M12 26H13V27H12V26Z" fill="#479DFF"/>
<path d="M12 26H13V27H12V26Z" fill="black" fill-opacity="0.2"/>
<path d="M11 26H12V27H11V26Z" fill="#479DFF"/>
<path d="M11 26H12V27H11V26Z" fill="black" fill-opacity="0.2"/>
<path d="M11 26V27H10V26H11Z" fill="#479DFF"/>
<path d="M11 26V27H10V26H11Z" fill="black" fill-opacity="0.2"/>
<path d="M10 26V27H9V26H10Z" fill="#479DFF"/>
<path d="M10 26V27H9V26H10Z" fill="black" fill-opacity="0.2"/>
<path d="M9 26V27H8V26H9Z" fill="#479DFF"/>
<path d="M9 26V27H8V26H9Z" fill="black" fill-opacity="0.2"/>
<path d="M8 26V27H7V26H8Z" fill="#479DFF"/>
<path d="M8 26V27H7V26H8Z" fill="black" fill-opacity="0.2"/>
<path d="M13 26H14V27H13V26Z" fill="#479DFF"/>
<path d="M13 26H14V27H13V26Z" fill="black" fill-opacity="0.2"/>
<path d="M13 8H14V9H13V8Z" fill="#479DFF"/>
<path d="M13 8H14V9H13V8Z" fill="black" fill-opacity="0.2"/>
<path d="M14 8H15V9H14V8Z" fill="#479DFF"/>
<path d="M14 8H15V9H14V8Z" fill="black" fill-opacity="0.2"/>
<path d="M9 25H10V26H9V25Z" fill="#479DFF"/>
<path d="M9 25H10V26H9V25Z" fill="black" fill-opacity="0.2"/>
<path d="M10 25H11V26H10V25Z" fill="#479DFF"/>
<path d="M10 25H11V26H10V25Z" fill="black" fill-opacity="0.2"/>
<path d="M11 25H12V26H11V25Z" fill="#479DFF"/>
<path d="M11 25H12V26H11V25Z" fill="black" fill-opacity="0.2"/>
<path d="M12 25H13V26H12V25Z" fill="#479DFF"/>
<path d="M12 25H13V26H12V25Z" fill="black" fill-opacity="0.2"/>
<path d="M13 25H14V26H13V25Z" fill="#479DFF"/>
<path d="M13 25H14V26H13V25Z" fill="black" fill-opacity="0.2"/>
<path d="M21 0H22V1H21V0Z" fill="#479DFF"/>
<path d="M21 0H22V1H21V0Z" fill="black" fill-opacity="0.2"/>
<path d="M24 17H25V18H24V17Z" fill="#479DFF"/>
<path d="M24 17H25V18H24V17Z" fill="black" fill-opacity="0.2"/>
<path d="M24 18H25V19H24V18Z" fill="#479DFF"/>
<path d="M24 18H25V19H24V18Z" fill="black" fill-opacity="0.2"/>
<path d="M24 19H25V20H24V19Z" fill="#479DFF"/>
<path d="M24 19H25V20H24V19Z" fill="black" fill-opacity="0.2"/>
<path d="M23 18H24V19H23V18Z" fill="#479DFF"/>
<path d="M23 18H24V19H23V18Z" fill="black" fill-opacity="0.2"/>
<path d="M23 19H24V20H23V19Z" fill="#479DFF"/>
<path d="M23 19H24V20H23V19Z" fill="black" fill-opacity="0.2"/>
<path d="M23 20H24V21H23V20Z" fill="#479DFF"/>
<path d="M23 20H24V21H23V20Z" fill="black" fill-opacity="0.2"/>
<path d="M23 21H24V22H23V21Z" fill="#479DFF"/>
<path d="M23 21H24V22H23V21Z" fill="black" fill-opacity="0.2"/>
<path d="M22 21H23V22H22V21Z" fill="#479DFF"/>
<path d="M22 21H23V22H22V21Z" fill="black" fill-opacity="0.2"/>
<path d="M22 22H23V23H22V22Z" fill="#479DFF"/>
<path d="M22 22H23V23H22V22Z" fill="black" fill-opacity="0.2"/>
<path d="M20 22H21V23H20V22Z" fill="#479DFF"/>
<path d="M20 22H21V23H20V22Z" fill="black" fill-opacity="0.2"/>
<path d="M22 19H23V20H22V19Z" fill="#479DFF"/>
<path d="M22 19H23V20H22V19Z" fill="black" fill-opacity="0.2"/>
<path d="M22 20H23V21H22V20Z" fill="#479DFF"/>
<path d="M22 20H23V21H22V20Z" fill="black" fill-opacity="0.2"/>
<path d="M20 23H21V24H20V23Z" fill="#479DFF"/>
<path d="M20 23H21V24H20V23Z" fill="black" fill-opacity="0.2"/>
<path d="M19 23H20V24H19V23Z" fill="#479DFF"/>
<path d="M19 23H20V24H19V23Z" fill="black" fill-opacity="0.2"/>
<path d="M19 24H20V25H19V24Z" fill="#479DFF"/>
<path d="M19 24H20V25H19V24Z" fill="black" fill-opacity="0.2"/>
<path d="M18 24H19V25H18V24Z" fill="#479DFF"/>
<path d="M18 24H19V25H18V24Z" fill="black" fill-opacity="0.2"/>
<path d="M16 24H17V25H16V24Z" fill="#479DFF"/>
<path d="M16 24H17V25H16V24Z" fill="black" fill-opacity="0.2"/>
<path d="M17 25H18V26H17V25Z" fill="#479DFF"/>
<path d="M17 25H18V26H17V25Z" fill="black" fill-opacity="0.2"/>
<path d="M16 25H17V26H16V25Z" fill="#479DFF"/>
<path d="M16 25H17V26H16V25Z" fill="black" fill-opacity="0.2"/>
<path d="M15 25H16V26H15V25Z" fill="#479DFF"/>
<path d="M15 25H16V26H15V25Z" fill="black" fill-opacity="0.2"/>
<path d="M14 25H15V26H14V25Z" fill="#479DFF"/>
<path d="M14 25H15V26H14V25Z" fill="black" fill-opacity="0.2"/>
<path d="M17 24H18V25H17V24Z" fill="#479DFF"/>
<path d="M17 24H18V25H17V24Z" fill="black" fill-opacity="0.2"/>
<path d="M18 23H19V24H18V23Z" fill="#479DFF"/>
<path d="M18 23H19V24H18V23Z" fill="black" fill-opacity="0.2"/>
<path d="M21 22H22V23H21V22Z" fill="#479DFF"/>
<path d="M21 22H22V23H21V22Z" fill="black" fill-opacity="0.2"/>
<path d="M21 23H22V24H21V23Z" fill="#479DFF"/>
<path d="M21 23H22V24H21V23Z" fill="black" fill-opacity="0.2"/>
<path d="M7 24V25H6V24H7Z" fill="#479DFF"/>
<path d="M7 24V25H6V24H7Z" fill="black" fill-opacity="0.2"/>
<path d="M9 22H10V23H9V22Z" fill="#479DFF"/>
<path d="M9 22H10V23H9V22Z" fill="black" fill-opacity="0.2"/>
<path d="M10 22H11V23H10V22Z" fill="#479DFF"/>
<path d="M10 22H11V23H10V22Z" fill="black" fill-opacity="0.2"/>
<path d="M11 22H12V23H11V22Z" fill="#479DFF"/>
<path d="M11 22H12V23H11V22Z" fill="black" fill-opacity="0.2"/>
<path d="M12 22H13V23H12V22Z" fill="#479DFF"/>
<path d="M12 22H13V23H12V22Z" fill="black" fill-opacity="0.2"/>
<path d="M15 22H16V23H15V22Z" fill="#479DFF"/>
<path d="M15 22H16V23H15V22Z" fill="black" fill-opacity="0.2"/>
<path d="M16 22H17V23H16V22Z" fill="#479DFF"/>
<path d="M16 22H17V23H16V22Z" fill="black" fill-opacity="0.2"/>
<path d="M17 22H18V23H17V22Z" fill="#479DFF"/>
<path d="M17 22H18V23H17V22Z" fill="black" fill-opacity="0.2"/>
<path d="M18 22H19V23H18V22Z" fill="#479DFF"/>
<path d="M18 22H19V23H18V22Z" fill="black" fill-opacity="0.2"/>
<path d="M9 23H10V24H9V23Z" fill="#479DFF"/>
<path d="M9 23H10V24H9V23Z" fill="black" fill-opacity="0.2"/>
<path d="M10 23H11V24H10V23Z" fill="#479DFF"/>
<path d="M10 23H11V24H10V23Z" fill="black" fill-opacity="0.2"/>
<path d="M8 23H9V24H8V23Z" fill="#479DFF"/>
<path d="M8 23H9V24H8V23Z" fill="black" fill-opacity="0.2"/>
<path d="M11 23H12V24H11V23Z" fill="#479DFF"/>
<path d="M11 23H12V24H11V23Z" fill="black" fill-opacity="0.2"/>
<path d="M12 23H13V24H12V23Z" fill="#479DFF"/>
<path d="M12 23H13V24H12V23Z" fill="black" fill-opacity="0.2"/>
<path d="M15 23H16V24H15V23Z" fill="#479DFF"/>
<path d="M15 23H16V24H15V23Z" fill="black" fill-opacity="0.2"/>
<path d="M16 23H17V24H16V23Z" fill="#479DFF"/>
<path d="M16 23H17V24H16V23Z" fill="black" fill-opacity="0.2"/>
<path d="M17 23H18V24H17V23Z" fill="#479DFF"/>
<path d="M17 23H18V24H17V23Z" fill="black" fill-opacity="0.2"/>
<path d="M9 24H10V25H9V24Z" fill="#479DFF"/>
<path d="M9 24H10V25H9V24Z" fill="black" fill-opacity="0.2"/>
<path d="M10 24H11V25H10V24Z" fill="#479DFF"/>
<path d="M10 24H11V25H10V24Z" fill="black" fill-opacity="0.2"/>
<path d="M7 24H8V25H7V24Z" fill="#479DFF"/>
<path d="M7 24H8V25H7V24Z" fill="black" fill-opacity="0.2"/>
<path d="M8 24H9V25H8V24Z" fill="#479DFF"/>
<path d="M8 24H9V25H8V24Z" fill="black" fill-opacity="0.2"/>
<path d="M11 24H12V25H11V24Z" fill="#479DFF"/>
<path d="M11 24H12V25H11V24Z" fill="black" fill-opacity="0.2"/>
<path d="M12 24H13V25H12V24Z" fill="#479DFF"/>
<path d="M12 24H13V25H12V24Z" fill="black" fill-opacity="0.2"/>
<path d="M15 24H16V25H15V24Z" fill="#479DFF"/>
<path d="M15 24H16V25H15V24Z" fill="black" fill-opacity="0.2"/>
<path d="M13 22H14V23H13V22Z" fill="#479DFF"/>
<path d="M13 22H14V23H13V22Z" fill="black" fill-opacity="0.2"/>
<path d="M13 23H14V24H13V23Z" fill="#479DFF"/>
<path d="M13 23H14V24H13V23Z" fill="black" fill-opacity="0.2"/>
<path d="M13 24H14V25H13V24Z" fill="#479DFF"/>
<path d="M13 24H14V25H13V24Z" fill="black" fill-opacity="0.2"/>
<path d="M14 22H15V23H14V22Z" fill="#479DFF"/>
<path d="M14 22H15V23H14V22Z" fill="black" fill-opacity="0.2"/>
<path d="M14 23H15V24H14V23Z" fill="#479DFF"/>
<path d="M14 23H15V24H14V23Z" fill="black" fill-opacity="0.2"/>
<path d="M14 24H15V25H14V24Z" fill="#479DFF"/>
<path d="M14 24H15V25H14V24Z" fill="black" fill-opacity="0.2"/>
<path d="M19 22H20V23H19V22Z" fill="#479DFF"/>
<path d="M19 22H20V23H19V22Z" fill="black" fill-opacity="0.2"/>
<path d="M20 21H21V22H20V21Z" fill="#479DFF"/>
<path d="M20 21H21V22H20V21Z" fill="black" fill-opacity="0.2"/>
<path d="M10 19H11V20H10V19Z" fill="#479DFF"/>
<path d="M10 19H11V20H10V19Z" fill="black" fill-opacity="0.2"/>
<path d="M11 19H12V20H11V19Z" fill="#479DFF"/>
<path d="M11 19H12V20H11V19Z" fill="black" fill-opacity="0.2"/>
<path d="M12 19H13V20H12V19Z" fill="#479DFF"/>
<path d="M12 19H13V20H12V19Z" fill="black" fill-opacity="0.2"/>
<path d="M15 19H16V20H15V19Z" fill="#479DFF"/>
<path d="M15 19H16V20H15V19Z" fill="black" fill-opacity="0.2"/>
<path d="M16 19H17V20H16V19Z" fill="#479DFF"/>
<path d="M16 19H17V20H16V19Z" fill="black" fill-opacity="0.2"/>
<path d="M17 19H18V20H17V19Z" fill="#479DFF"/>
<path d="M17 19H18V20H17V19Z" fill="black" fill-opacity="0.2"/>
<path d="M18 19H19V20H18V19Z" fill="#479DFF"/>
<path d="M18 19H19V20H18V19Z" fill="black" fill-opacity="0.2"/>
<path d="M19 19H20V20H19V19Z" fill="#479DFF"/>
<path d="M19 19H20V20H19V19Z" fill="black" fill-opacity="0.2"/>
<path d="M20 19H21V20H20V19Z" fill="#479DFF"/>
<path d="M20 19H21V20H20V19Z" fill="black" fill-opacity="0.2"/>
<path d="M9 20H10V21H9V20Z" fill="#479DFF"/>
<path d="M9 20H10V21H9V20Z" fill="black" fill-opacity="0.2"/>
<path d="M10 20H11V21H10V20Z" fill="#479DFF"/>
<path d="M10 20H11V21H10V20Z" fill="black" fill-opacity="0.2"/>
<path d="M11 20H12V21H11V20Z" fill="#479DFF"/>
<path d="M11 20H12V21H11V20Z" fill="black" fill-opacity="0.2"/>
<path d="M12 20H13V21H12V20Z" fill="#479DFF"/>
<path d="M12 20H13V21H12V20Z" fill="black" fill-opacity="0.2"/>
<path d="M15 20H16V21H15V20Z" fill="#479DFF"/>
<path d="M15 20H16V21H15V20Z" fill="black" fill-opacity="0.2"/>
<path d="M16 20H17V21H16V20Z" fill="#479DFF"/>
<path d="M16 20H17V21H16V20Z" fill="black" fill-opacity="0.2"/>
<path d="M17 20H18V21H17V20Z" fill="#479DFF"/>
<path d="M17 20H18V21H17V20Z" fill="black" fill-opacity="0.2"/>
<path d="M18 20H19V21H18V20Z" fill="#479DFF"/>
<path d="M18 20H19V21H18V20Z" fill="black" fill-opacity="0.2"/>
<path d="M19 20H20V21H19V20Z" fill="#479DFF"/>
<path d="M19 20H20V21H19V20Z" fill="black" fill-opacity="0.2"/>
<path d="M9 21H10V22H9V21Z" fill="#479DFF"/>
<path d="M9 21H10V22H9V21Z" fill="black" fill-opacity="0.2"/>
<path d="M10 21H11V22H10V21Z" fill="#479DFF"/>
<path d="M10 21H11V22H10V21Z" fill="black" fill-opacity="0.2"/>
<path d="M11 21H12V22H11V21Z" fill="#479DFF"/>
<path d="M11 21H12V22H11V21Z" fill="black" fill-opacity="0.2"/>
<path d="M12 21H13V22H12V21Z" fill="#479DFF"/>
<path d="M12 21H13V22H12V21Z" fill="black" fill-opacity="0.2"/>
<path d="M15 21H16V22H15V21Z" fill="#479DFF"/>
<path d="M15 21H16V22H15V21Z" fill="black" fill-opacity="0.2"/>
<path d="M16 21H17V22H16V21Z" fill="#479DFF"/>
<path d="M16 21H17V22H16V21Z" fill="black" fill-opacity="0.2"/>
<path d="M17 21H18V22H17V21Z" fill="#479DFF"/>
<path d="M17 21H18V22H17V21Z" fill="black" fill-opacity="0.2"/>
<path d="M18 21H19V22H18V21Z" fill="#479DFF"/>
<path d="M18 21H19V22H18V21Z" fill="black" fill-opacity="0.2"/>
<path d="M19 21H20V22H19V21Z" fill="#479DFF"/>
<path d="M19 21H20V22H19V21Z" fill="black" fill-opacity="0.2"/>
<path d="M13 19H14V20H13V19Z" fill="#479DFF"/>
<path d="M13 19H14V20H13V19Z" fill="black" fill-opacity="0.2"/>
<path d="M13 20H14V21H13V20Z" fill="#479DFF"/>
<path d="M13 20H14V21H13V20Z" fill="black" fill-opacity="0.2"/>
<path d="M13 21H14V22H13V21Z" fill="#479DFF"/>
<path d="M13 21H14V22H13V21Z" fill="black" fill-opacity="0.2"/>
<path d="M14 19H15V20H14V19Z" fill="#479DFF"/>
<path d="M14 19H15V20H14V19Z" fill="black" fill-opacity="0.2"/>
<path d="M14 20H15V21H14V20Z" fill="#479DFF"/>
<path d="M14 20H15V21H14V20Z" fill="black" fill-opacity="0.2"/>
<path d="M14 21H15V22H14V21Z" fill="#479DFF"/>
<path d="M14 21H15V22H14V21Z" fill="black" fill-opacity="0.2"/>
<path d="M20 20H21V21H20V20Z" fill="#479DFF"/>
<path d="M20 20H21V21H20V20Z" fill="black" fill-opacity="0.2"/>
<path d="M21 21H22V22H21V21Z" fill="#479DFF"/>
<path d="M21 21H22V22H21V21Z" fill="black" fill-opacity="0.2"/>
<path d="M21 19H22V20H21V19Z" fill="#479DFF"/>
<path d="M21 19H22V20H21V19Z" fill="black" fill-opacity="0.2"/>
<path d="M21 20H22V21H21V20Z" fill="#479DFF"/>
<path d="M21 20H22V21H21V20Z" fill="black" fill-opacity="0.2"/>
<path d="M6 17H7V18H6V17Z" fill="#479DFF"/>
<path d="M6 17H7V18H6V17Z" fill="black" fill-opacity="0.2"/>
<path d="M7 17H8V18H7V17Z" fill="#479DFF"/>
<path d="M7 17H8V18H7V17Z" fill="black" fill-opacity="0.2"/>
<path d="M7 14H8V15H7V14Z" fill="#479DFF"/>
<path d="M7 14H8V15H7V14Z" fill="black" fill-opacity="0.2"/>
<path d="M7 13H8V14H7V13Z" fill="#479DFF"/>
<path d="M7 13H8V14H7V13Z" fill="black" fill-opacity="0.2"/>
<path d="M6 12H7V13H6V12Z" fill="#479DFF"/>
<path d="M6 12H7V13H6V12Z" fill="black" fill-opacity="0.2"/>
<path d="M7 12H8V13H7V12Z" fill="#479DFF"/>
<path d="M7 12H8V13H7V12Z" fill="black" fill-opacity="0.2"/>
<path d="M7 11H8V12H7V11Z" fill="#479DFF"/>
<path d="M7 11H8V12H7V11Z" fill="black" fill-opacity="0.2"/>
<path d="M7 10H8V11H7V10Z" fill="#479DFF"/>
<path d="M7 10H8V11H7V10Z" fill="black" fill-opacity="0.2"/>
<path d="M7 9H8V10H7V9Z" fill="#479DFF"/>
<path d="M7 9H8V10H7V9Z" fill="black" fill-opacity="0.2"/>
<path d="M5 13H6V14H5V13Z" fill="#479DFF"/>
<path d="M5 13H6V14H5V13Z" fill="black" fill-opacity="0.2"/>
<path d="M4 13H5V14H4V13Z" fill="#479DFF"/>
<path d="M4 13H5V14H4V13Z" fill="black" fill-opacity="0.2"/>
<path d="M4 12H5V13H4V12Z" fill="#479DFF"/>
<path d="M4 12H5V13H4V12Z" fill="black" fill-opacity="0.2"/>
<path d="M16 5H17V6H16V5Z" fill="#479DFF"/>
<path d="M16 5H17V6H16V5Z" fill="black" fill-opacity="0.2"/>
<path d="M16 6H17V7H16V6Z" fill="#479DFF"/>
<path d="M16 6H17V7H16V6Z" fill="black" fill-opacity="0.2"/>
<path d="M16 7H17V8H16V7Z" fill="#479DFF"/>
<path d="M16 7H17V8H16V7Z" fill="black" fill-opacity="0.2"/>
<path d="M15 8H16V9H15V8Z" fill="#479DFF"/>
<path d="M15 8H16V9H15V8Z" fill="black" fill-opacity="0.2"/>
<path d="M16 8H17V9H16V8Z" fill="#479DFF"/>
<path d="M16 8H17V9H16V8Z" fill="black" fill-opacity="0.2"/>
<path d="M8 8H9V9H8V8Z" fill="#479DFF"/>
<path d="M8 8H9V9H8V8Z" fill="black" fill-opacity="0.2"/>
<path d="M9 8H10V9H9V8Z" fill="#479DFF"/>
<path d="M9 8H10V9H9V8Z" fill="black" fill-opacity="0.2"/>
<path d="M9 7H10V8H9V7Z" fill="#479DFF"/>
<path d="M9 7H10V8H9V7Z" fill="black" fill-opacity="0.2"/>
<path d="M10 8H11V9H10V8Z" fill="#479DFF"/>
<path d="M10 8H11V9H10V8Z" fill="black" fill-opacity="0.2"/>
<path d="M11 8H13V9H11V8Z" fill="#479DFF"/>
<path d="M11 8H13V9H11V8Z" fill="black" fill-opacity="0.2"/>
<path d="M24 15H25V16H24V15Z" fill="#479DFF"/>
<path d="M24 15H25V16H24V15Z" fill="black" fill-opacity="0.2"/>
<path d="M23 17H24V18H23V17Z" fill="#479DFF"/>
<path d="M23 17H24V18H23V17Z" fill="black" fill-opacity="0.2"/>
<path d="M23 16H24V17H23V16Z" fill="#479DFF"/>
<path d="M23 16H24V17H23V16Z" fill="black" fill-opacity="0.2"/>
<path d="M23 15H24V16H23V15Z" fill="#479DFF"/>
<path d="M23 15H24V16H23V15Z" fill="black" fill-opacity="0.2"/>
<path d="M23 14H24V15H23V14Z" fill="#479DFF"/>
<path d="M23 14H24V15H23V14Z" fill="black" fill-opacity="0.2"/>
<path d="M24 14H25V15H24V14Z" fill="#479DFF"/>
<path d="M24 14H25V15H24V14Z" fill="black" fill-opacity="0.2"/>
<path d="M25 12H26V13H25V12Z" fill="#479DFF"/>
<path d="M25 12H26V13H25V12Z" fill="black" fill-opacity="0.2"/>
<path d="M25 13H26V14H25V13Z" fill="#479DFF"/>
<path d="M25 13H26V14H25V13Z" fill="black" fill-opacity="0.2"/>
<path d="M27 6H28V7H27V6Z" fill="#479DFF"/>
<path d="M27 6H28V7H27V6Z" fill="black" fill-opacity="0.2"/>
<path d="M26 4H27V5H26V4Z" fill="#479DFF"/>
<path d="M26 4H27V5H26V4Z" fill="black" fill-opacity="0.2"/>
<path d="M26 5H27V6H26V5Z" fill="#479DFF"/>
<path d="M26 5H27V6H26V5Z" fill="black" fill-opacity="0.2"/>
<path d="M26 9H27V10H26V9Z" fill="#479DFF"/>
<path d="M26 9H27V10H26V9Z" fill="black" fill-opacity="0.2"/>
<path d="M26 10H27V11H26V10Z" fill="#479DFF"/>
<path d="M26 10H27V11H26V10Z" fill="black" fill-opacity="0.2"/>
<path d="M26 6H27V7H26V6Z" fill="#479DFF"/>
<path d="M26 6H27V7H26V6Z" fill="black" fill-opacity="0.2"/>
<path d="M26 7H27V8H26V7Z" fill="#479DFF"/>
<path d="M26 7H27V8H26V7Z" fill="black" fill-opacity="0.2"/>
<path d="M26 8H27V9H26V8Z" fill="#479DFF"/>
<path d="M26 8H27V9H26V8Z" fill="black" fill-opacity="0.2"/>
<path d="M17 4H18V5H17V4Z" fill="#479DFF"/>
<path d="M17 4H18V5H17V4Z" fill="black" fill-opacity="0.2"/>
<path d="M17 5H18V6H17V5Z" fill="#479DFF"/>
<path d="M17 5H18V6H17V5Z" fill="black" fill-opacity="0.2"/>
<path d="M17 6H18V7H17V6Z" fill="#479DFF"/>
<path d="M17 6H18V7H17V6Z" fill="black" fill-opacity="0.2"/>
<path d="M17 7H18V8H17V7Z" fill="#479DFF"/>
<path d="M17 7H18V8H17V7Z" fill="black" fill-opacity="0.2"/>
<path d="M17 8H18V9H17V8Z" fill="#479DFF"/>
<path d="M17 8H18V9H17V8Z" fill="black" fill-opacity="0.2"/>
<path d="M18 2H19V3H18V2Z" fill="#479DFF"/>
<path d="M18 2H19V3H18V2Z" fill="black" fill-opacity="0.2"/>
<path d="M22 1H23V2H22V1Z" fill="#479DFF"/>
<path d="M22 1H23V2H22V1Z" fill="black" fill-opacity="0.2"/>
<path d="M23 1H24V2H23V1Z" fill="#479DFF"/>
<path d="M23 1H24V2H23V1Z" fill="black" fill-opacity="0.2"/>
<path d="M24 1H25V2H24V1Z" fill="#479DFF"/>
<path d="M24 1H25V2H24V1Z" fill="black" fill-opacity="0.2"/>
<path d="M20 1H21V2H20V1Z" fill="#479DFF"/>
<path d="M20 1H21V2H20V1Z" fill="black" fill-opacity="0.2"/>
<path d="M23 2H24V3H23V2Z" fill="#479DFF"/>
<path d="M23 2H24V3H23V2Z" fill="black" fill-opacity="0.2"/>
<path d="M22 2H23V3H22V2Z" fill="#479DFF"/>
<path d="M22 2H23V3H22V2Z" fill="black" fill-opacity="0.2"/>
<path d="M20 2H21V3H20V2Z" fill="#479DFF"/>
<path d="M20 2H21V3H20V2Z" fill="black" fill-opacity="0.2"/>
<path d="M24 2H25V3H24V2Z" fill="#479DFF"/>
<path d="M24 2H25V3H24V2Z" fill="black" fill-opacity="0.2"/>
<path d="M19 2H20V3H19V2Z" fill="#479DFF"/>
<path d="M19 2H20V3H19V2Z" fill="black" fill-opacity="0.2"/>
<path d="M19 1H20V2H19V1Z" fill="#479DFF"/>
<path d="M19 1H20V2H19V1Z" fill="black" fill-opacity="0.2"/>
<path d="M21 1H22V2H21V1Z" fill="#479DFF"/>
<path d="M21 1H22V2H21V1Z" fill="black" fill-opacity="0.2"/>
<path d="M21 2H22V3H21V2Z" fill="#479DFF"/>
<path d="M21 2H22V3H21V2Z" fill="black" fill-opacity="0.2"/>
<path d="M18 3H19V4H18V3Z" fill="#479DFF"/>
<path d="M18 3H19V4H18V3Z" fill="black" fill-opacity="0.2"/>
<path d="M19 3H20V4H19V3Z" fill="#479DFF"/>
<path d="M19 3H20V4H19V3Z" fill="black" fill-opacity="0.2"/>
<path d="M20 3H21V4H20V3Z" fill="#479DFF"/>
<path d="M20 3H21V4H20V3Z" fill="black" fill-opacity="0.2"/>
<path d="M22 3H23V4H22V3Z" fill="#479DFF"/>
<path d="M22 3H23V4H22V3Z" fill="black" fill-opacity="0.2"/>
<path d="M23 3H24V4H23V3Z" fill="#479DFF"/>
<path d="M23 3H24V4H23V3Z" fill="black" fill-opacity="0.2"/>
<path d="M24 3H25V4H24V3Z" fill="#479DFF"/>
<path d="M24 3H25V4H24V3Z" fill="black" fill-opacity="0.2"/>
<path d="M18 4H19V5H18V4Z" fill="#479DFF"/>
<path d="M18 4H19V5H18V4Z" fill="black" fill-opacity="0.2"/>
<path d="M19 4H20V5H19V4Z" fill="#479DFF"/>
<path d="M19 4H20V5H19V4Z" fill="black" fill-opacity="0.2"/>
<path d="M20 4H21V5H20V4Z" fill="#479DFF"/>
<path d="M20 4H21V5H20V4Z" fill="black" fill-opacity="0.2"/>
<path d="M22 4H23V5H22V4Z" fill="#479DFF"/>
<path d="M22 4H23V5H22V4Z" fill="black" fill-opacity="0.2"/>
<path d="M23 4H24V5H23V4Z" fill="#479DFF"/>
<path d="M23 4H24V5H23V4Z" fill="black" fill-opacity="0.2"/>
<path d="M24 4H25V5H24V4Z" fill="#479DFF"/>
<path d="M24 4H25V5H24V4Z" fill="black" fill-opacity="0.2"/>
<path d="M18 5H19V6H18V5Z" fill="#479DFF"/>
<path d="M18 5H19V6H18V5Z" fill="black" fill-opacity="0.2"/>
<path d="M19 5H20V6H19V5Z" fill="#479DFF"/>
<path d="M19 5H20V6H19V5Z" fill="black" fill-opacity="0.2"/>
<path d="M20 5H21V6H20V5Z" fill="#479DFF"/>
<path d="M20 5H21V6H20V5Z" fill="black" fill-opacity="0.2"/>
<path d="M22 5H23V6H22V5Z" fill="#479DFF"/>
<path d="M22 5H23V6H22V5Z" fill="black" fill-opacity="0.2"/>
<path d="M23 5H24V6H23V5Z" fill="#479DFF"/>
<path d="M23 5H24V6H23V5Z" fill="black" fill-opacity="0.2"/>
<path d="M24 5H25V6H24V5Z" fill="#479DFF"/>
<path d="M24 5H25V6H24V5Z" fill="black" fill-opacity="0.2"/>
<path d="M18 6H19V7H18V6Z" fill="#479DFF"/>
<path d="M18 6H19V7H18V6Z" fill="black" fill-opacity="0.2"/>
<path d="M19 6H20V7H19V6Z" fill="#479DFF"/>
<path d="M19 6H20V7H19V6Z" fill="black" fill-opacity="0.2"/>
<path d="M20 6H21V7H20V6Z" fill="#479DFF"/>
<path d="M20 6H21V7H20V6Z" fill="black" fill-opacity="0.2"/>
<path d="M22 6H23V7H22V6Z" fill="#479DFF"/>
<path d="M22 6H23V7H22V6Z" fill="black" fill-opacity="0.2"/>
<path d="M23 6H24V7H23V6Z" fill="#479DFF"/>
<path d="M23 6H24V7H23V6Z" fill="black" fill-opacity="0.2"/>
<path d="M24 6H25V7H24V6Z" fill="#479DFF"/>
<path d="M24 6H25V7H24V6Z" fill="black" fill-opacity="0.2"/>
<path d="M18 7H19V8H18V7Z" fill="#479DFF"/>
<path d="M18 7H19V8H18V7Z" fill="black" fill-opacity="0.2"/>
<path d="M17 3H18V4H17V3Z" fill="#479DFF"/>
<path d="M17 3H18V4H17V3Z" fill="black" fill-opacity="0.2"/>
<path d="M19 7H20V8H19V7Z" fill="#479DFF"/>
<path d="M19 7H20V8H19V7Z" fill="black" fill-opacity="0.2"/>
<path d="M20 7H21V8H20V7Z" fill="#479DFF"/>
<path d="M20 7H21V8H20V7Z" fill="black" fill-opacity="0.2"/>
<path d="M22 7H23V8H22V7Z" fill="#479DFF"/>
<path d="M22 7H23V8H22V7Z" fill="black" fill-opacity="0.2"/>
<path d="M23 7H24V8H23V7Z" fill="#479DFF"/>
<path d="M23 7H24V8H23V7Z" fill="black" fill-opacity="0.2"/>
<path d="M24 7H25V8H24V7Z" fill="#479DFF"/>
<path d="M24 7H25V8H24V7Z" fill="black" fill-opacity="0.2"/>
<path d="M18 8H19V9H18V8Z" fill="#479DFF"/>
<path d="M18 8H19V9H18V8Z" fill="black" fill-opacity="0.2"/>
<path d="M19 8H20V9H19V8Z" fill="#479DFF"/>
<path d="M19 8H20V9H19V8Z" fill="black" fill-opacity="0.2"/>
<path d="M20 8H21V9H20V8Z" fill="#479DFF"/>
<path d="M20 8H21V9H20V8Z" fill="black" fill-opacity="0.2"/>
<path d="M22 8H23V9H22V8Z" fill="#479DFF"/>
<path d="M22 8H23V9H22V8Z" fill="black" fill-opacity="0.2"/>
<path d="M23 8H24V9H23V8Z" fill="#479DFF"/>
<path d="M23 8H24V9H23V8Z" fill="black" fill-opacity="0.2"/>
<path d="M24 8H25V9H24V8Z" fill="#479DFF"/>
<path d="M24 8H25V9H24V8Z" fill="black" fill-opacity="0.2"/>
<path d="M25 6H26V7H25V6Z" fill="#479DFF"/>
<path d="M25 6H26V7H25V6Z" fill="black" fill-opacity="0.2"/>
<path d="M25 7H26V8H25V7Z" fill="#479DFF"/>
<path d="M25 7H26V8H25V7Z" fill="black" fill-opacity="0.2"/>
<path d="M25 8H26V9H25V8Z" fill="#479DFF"/>
<path d="M25 8H26V9H25V8Z" fill="black" fill-opacity="0.2"/>
<path d="M25 3H26V4H25V3Z" fill="#479DFF"/>
<path d="M25 3H26V4H25V3Z" fill="black" fill-opacity="0.2"/>
<path d="M25 4H26V5H25V4Z" fill="#479DFF"/>
<path d="M25 4H26V5H25V4Z" fill="black" fill-opacity="0.2"/>
<path d="M25 5H26V6H25V5Z" fill="#479DFF"/>
<path d="M25 5H26V6H25V5Z" fill="black" fill-opacity="0.2"/>
<path d="M21 3H22V4H21V3Z" fill="#479DFF"/>
<path d="M21 3H22V4H21V3Z" fill="black" fill-opacity="0.2"/>
<path d="M21 4H22V5H21V4Z" fill="#479DFF"/>
<path d="M21 4H22V5H21V4Z" fill="black" fill-opacity="0.2"/>
<path d="M21 5H22V6H21V5Z" fill="#479DFF"/>
<path d="M21 5H22V6H21V5Z" fill="black" fill-opacity="0.2"/>
<path d="M21 6H22V7H21V6Z" fill="#479DFF"/>
<path d="M21 6H22V7H21V6Z" fill="black" fill-opacity="0.2"/>
<path d="M21 7H22V8H21V7Z" fill="#479DFF"/>
<path d="M21 7H22V8H21V7Z" fill="black" fill-opacity="0.2"/>
<path d="M21 8H22V9H21V8Z" fill="#479DFF"/>
<path d="M21 8H22V9H21V8Z" fill="black" fill-opacity="0.2"/>
<path d="M8 16H9V17H8V16Z" fill="#479DFF"/>
<path d="M8 16H9V17H8V16Z" fill="black" fill-opacity="0.2"/>
<path d="M9 16H10V17H9V16Z" fill="#479DFF"/>
<path d="M9 16H10V17H9V16Z" fill="black" fill-opacity="0.2"/>
<path d="M10 16H11V17H10V16Z" fill="#479DFF"/>
<path d="M10 16H11V17H10V16Z" fill="black" fill-opacity="0.2"/>
<path d="M11 16H12V17H11V16Z" fill="#479DFF"/>
<path d="M11 16H12V17H11V16Z" fill="black" fill-opacity="0.2"/>
<path d="M12 16H13V17H12V16Z" fill="#479DFF"/>
<path d="M12 16H13V17H12V16Z" fill="black" fill-opacity="0.2"/>
<path d="M15 16H16V17H15V16Z" fill="#479DFF"/>
<path d="M15 16H16V17H15V16Z" fill="black" fill-opacity="0.2"/>
<path d="M16 16H17V17H16V16Z" fill="#479DFF"/>
<path d="M16 16H17V17H16V16Z" fill="black" fill-opacity="0.2"/>
<path d="M17 16H18V17H17V16Z" fill="#479DFF"/>
<path d="M17 16H18V17H17V16Z" fill="black" fill-opacity="0.2"/>
<path d="M18 16H19V17H18V16Z" fill="#479DFF"/>
<path d="M18 16H19V17H18V16Z" fill="black" fill-opacity="0.2"/>
<path d="M19 16H20V17H19V16Z" fill="#479DFF"/>
<path d="M19 16H20V17H19V16Z" fill="black" fill-opacity="0.2"/>
<path d="M8 15H9V16H8V15Z" fill="#479DFF"/>
<path d="M8 15H9V16H8V15Z" fill="black" fill-opacity="0.2"/>
<path d="M9 15H10V16H9V15Z" fill="#479DFF"/>
<path d="M9 15H10V16H9V15Z" fill="black" fill-opacity="0.2"/>
<path d="M10 15H11V16H10V15Z" fill="#479DFF"/>
<path d="M10 15H11V16H10V15Z" fill="black" fill-opacity="0.2"/>
<path d="M11 15H12V16H11V15Z" fill="#479DFF"/>
<path d="M11 15H12V16H11V15Z" fill="black" fill-opacity="0.2"/>
<path d="M12 15H13V16H12V15Z" fill="#479DFF"/>
<path d="M12 15H13V16H12V15Z" fill="black" fill-opacity="0.2"/>
<path d="M15 15H16V16H15V15Z" fill="#479DFF"/>
<path d="M15 15H16V16H15V15Z" fill="black" fill-opacity="0.2"/>
<path d="M16 15H17V16H16V15Z" fill="#479DFF"/>
<path d="M16 15H17V16H16V15Z" fill="black" fill-opacity="0.2"/>
<path d="M17 15H18V16H17V15Z" fill="#479DFF"/>
<path d="M17 15H18V16H17V15Z" fill="black" fill-opacity="0.2"/>
<path d="M18 15H19V16H18V15Z" fill="#479DFF"/>
<path d="M18 15H19V16H18V15Z" fill="black" fill-opacity="0.2"/>
<path d="M19 15H20V16H19V15Z" fill="#479DFF"/>
<path d="M19 15H20V16H19V15Z" fill="black" fill-opacity="0.2"/>
<path d="M8 14H9V15H8V14Z" fill="#479DFF"/>
<path d="M8 14H9V15H8V14Z" fill="black" fill-opacity="0.2"/>
<path d="M9 14H10V15H9V14Z" fill="#479DFF"/>
<path d="M9 14H10V15H9V14Z" fill="black" fill-opacity="0.2"/>
<path d="M10 14H11V15H10V14Z" fill="#479DFF"/>
<path d="M10 14H11V15H10V14Z" fill="black" fill-opacity="0.2"/>
<path d="M11 14H12V15H11V14Z" fill="#479DFF"/>
<path d="M11 14H12V15H11V14Z" fill="black" fill-opacity="0.2"/>
<path d="M12 14H13V15H12V14Z" fill="#479DFF"/>
<path d="M12 14H13V15H12V14Z" fill="black" fill-opacity="0.2"/>
<path d="M15 14H16V15H15V14Z" fill="#479DFF"/>
<path d="M15 14H16V15H15V14Z" fill="black" fill-opacity="0.2"/>
<path d="M16 14H17V15H16V14Z" fill="#479DFF"/>
<path d="M16 14H17V15H16V14Z" fill="black" fill-opacity="0.2"/>
<path d="M17 14H18V15H17V14Z" fill="#479DFF"/>
<path d="M17 14H18V15H17V14Z" fill="black" fill-opacity="0.2"/>
<path d="M18 14H19V15H18V14Z" fill="#479DFF"/>
<path d="M18 14H19V15H18V14Z" fill="black" fill-opacity="0.2"/>
<path d="M19 14H20V15H19V14Z" fill="#479DFF"/>
<path d="M19 14H20V15H19V14Z" fill="black" fill-opacity="0.2"/>
<path d="M8 13H9V14H8V13Z" fill="#479DFF"/>
<path d="M8 13H9V14H8V13Z" fill="black" fill-opacity="0.2"/>
<path d="M9 13H10V14H9V13Z" fill="#479DFF"/>
<path d="M9 13H10V14H9V13Z" fill="black" fill-opacity="0.2"/>
<path d="M10 13H11V14H10V13Z" fill="#479DFF"/>
<path d="M10 13H11V14H10V13Z" fill="black" fill-opacity="0.2"/>
<path d="M11 13H12V14H11V13Z" fill="#479DFF"/>
<path d="M11 13H12V14H11V13Z" fill="black" fill-opacity="0.2"/>
<path d="M12 13H13V14H12V13Z" fill="#479DFF"/>
<path d="M12 13H13V14H12V13Z" fill="black" fill-opacity="0.2"/>
<path d="M15 13H16V14H15V13Z" fill="#479DFF"/>
<path d="M15 13H16V14H15V13Z" fill="black" fill-opacity="0.2"/>
<path d="M16 13H17V14H16V13Z" fill="#479DFF"/>
<path d="M16 13H17V14H16V13Z" fill="black" fill-opacity="0.2"/>
<path d="M17 13H18V14H17V13Z" fill="#479DFF"/>
<path d="M17 13H18V14H17V13Z" fill="black" fill-opacity="0.2"/>
<path d="M18 13H19V14H18V13Z" fill="#479DFF"/>
<path d="M18 13H19V14H18V13Z" fill="black" fill-opacity="0.2"/>
<path d="M19 13H20V14H19V13Z" fill="#479DFF"/>
<path d="M19 13H20V14H19V13Z" fill="black" fill-opacity="0.2"/>
<path d="M8 12H9V13H8V12Z" fill="#479DFF"/>
<path d="M8 12H9V13H8V12Z" fill="black" fill-opacity="0.2"/>
<path d="M9 12H10V13H9V12Z" fill="#479DFF"/>
<path d="M9 12H10V13H9V12Z" fill="black" fill-opacity="0.2"/>
<path d="M10 12H11V13H10V12Z" fill="#479DFF"/>
<path d="M10 12H11V13H10V12Z" fill="black" fill-opacity="0.2"/>
<path d="M11 12H12V13H11V12Z" fill="#479DFF"/>
<path d="M11 12H12V13H11V12Z" fill="black" fill-opacity="0.2"/>
<path d="M12 12H13V13H12V12Z" fill="#479DFF"/>
<path d="M12 12H13V13H12V12Z" fill="black" fill-opacity="0.2"/>
<path d="M15 12H16V13H15V12Z" fill="#479DFF"/>
<path d="M15 12H16V13H15V12Z" fill="black" fill-opacity="0.2"/>
<path d="M16 12H17V13H16V12Z" fill="#479DFF"/>
<path d="M16 12H17V13H16V12Z" fill="black" fill-opacity="0.2"/>
<path d="M17 12H18V13H17V12Z" fill="#479DFF"/>
<path d="M17 12H18V13H17V12Z" fill="black" fill-opacity="0.2"/>
<path d="M18 12H19V13H18V12Z" fill="#479DFF"/>
<path d="M18 12H19V13H18V12Z" fill="black" fill-opacity="0.2"/>
<path d="M19 12H20V13H19V12Z" fill="#479DFF"/>
<path d="M19 12H20V13H19V12Z" fill="black" fill-opacity="0.2"/>
<path d="M8 11H9V12H8V11Z" fill="#479DFF"/>
<path d="M8 11H9V12H8V11Z" fill="black" fill-opacity="0.2"/>
<path d="M9 11H10V12H9V11Z" fill="#479DFF"/>
<path d="M9 11H10V12H9V11Z" fill="black" fill-opacity="0.2"/>
<path d="M10 11H11V12H10V11Z" fill="#479DFF"/>
<path d="M10 11H11V12H10V11Z" fill="black" fill-opacity="0.2"/>
<path d="M11 11H12V12H11V11Z" fill="#479DFF"/>
<path d="M11 11H12V12H11V11Z" fill="black" fill-opacity="0.2"/>
<path d="M12 11H13V12H12V11Z" fill="#479DFF"/>
<path d="M12 11H13V12H12V11Z" fill="black" fill-opacity="0.2"/>
<path d="M15 11H16V12H15V11Z" fill="#479DFF"/>
<path d="M15 11H16V12H15V11Z" fill="black" fill-opacity="0.2"/>
<path d="M16 11H17V12H16V11Z" fill="#479DFF"/>
<path d="M16 11H17V12H16V11Z" fill="black" fill-opacity="0.2"/>
<path d="M17 11H18V12H17V11Z" fill="#479DFF"/>
<path d="M17 11H18V12H17V11Z" fill="black" fill-opacity="0.2"/>
<path d="M18 11H19V12H18V11Z" fill="#479DFF"/>
<path d="M18 11H19V12H18V11Z" fill="black" fill-opacity="0.2"/>
<path d="M19 11H20V12H19V11Z" fill="#479DFF"/>
<path d="M19 11H20V12H19V11Z" fill="black" fill-opacity="0.2"/>
<path d="M8 10H9V11H8V10Z" fill="#479DFF"/>
<path d="M8 10H9V11H8V10Z" fill="black" fill-opacity="0.2"/>
<path d="M9 10H10V11H9V10Z" fill="#479DFF"/>
<path d="M9 10H10V11H9V10Z" fill="black" fill-opacity="0.2"/>
<path d="M10 10H11V11H10V10Z" fill="#479DFF"/>
<path d="M10 10H11V11H10V10Z" fill="black" fill-opacity="0.2"/>
<path d="M11 10H12V11H11V10Z" fill="#479DFF"/>
<path d="M11 10H12V11H11V10Z" fill="black" fill-opacity="0.2"/>
<path d="M12 10H13V11H12V10Z" fill="#479DFF"/>
<path d="M12 10H13V11H12V10Z" fill="black" fill-opacity="0.2"/>
<path d="M15 10H16V11H15V10Z" fill="#479DFF"/>
<path d="M15 10H16V11H15V10Z" fill="black" fill-opacity="0.2"/>
<path d="M16 10H17V11H16V10Z" fill="#479DFF"/>
<path d="M16 10H17V11H16V10Z" fill="black" fill-opacity="0.2"/>
<path d="M17 10H18V11H17V10Z" fill="#479DFF"/>
<path d="M17 10H18V11H17V10Z" fill="black" fill-opacity="0.2"/>
<path d="M18 10H19V11H18V10Z" fill="#479DFF"/>
<path d="M18 10H19V11H18V10Z" fill="black" fill-opacity="0.2"/>
<path d="M19 10H20V11H19V10Z" fill="#479DFF"/>
<path d="M19 10H20V11H19V10Z" fill="black" fill-opacity="0.2"/>
<path d="M8 9H9V10H8V9Z" fill="#479DFF"/>
<path d="M8 9H9V10H8V9Z" fill="black" fill-opacity="0.2"/>
<path d="M9 9H10V10H9V9Z" fill="#479DFF"/>
<path d="M9 9H10V10H9V9Z" fill="black" fill-opacity="0.2"/>
<path d="M10 9H11V10H10V9Z" fill="#479DFF"/>
<path d="M10 9H11V10H10V9Z" fill="black" fill-opacity="0.2"/>
<path d="M11 9H12V10H11V9Z" fill="#479DFF"/>
<path d="M11 9H12V10H11V9Z" fill="black" fill-opacity="0.2"/>
<path d="M12 9H13V10H12V9Z" fill="#479DFF"/>
<path d="M12 9H13V10H12V9Z" fill="black" fill-opacity="0.2"/>
<path d="M15 9H16V10H15V9Z" fill="#479DFF"/>
<path d="M15 9H16V10H15V9Z" fill="black" fill-opacity="0.2"/>
<path d="M16 9H17V10H16V9Z" fill="#479DFF"/>
<path d="M16 9H17V10H16V9Z" fill="black" fill-opacity="0.2"/>
<path d="M17 9H18V10H17V9Z" fill="#479DFF"/>
<path d="M17 9H18V10H17V9Z" fill="black" fill-opacity="0.2"/>
<path d="M18 9H19V10H18V9Z" fill="#479DFF"/>
<path d="M18 9H19V10H18V9Z" fill="black" fill-opacity="0.2"/>
<path d="M19 9H20V10H19V9Z" fill="#479DFF"/>
<path d="M19 9H20V10H19V9Z" fill="black" fill-opacity="0.2"/>
<path d="M20 16H21V17H20V16Z" fill="#479DFF"/>
<path d="M20 16H21V17H20V16Z" fill="black" fill-opacity="0.2"/>
<path d="M20 15H21V16H20V15Z" fill="#479DFF"/>
<path d="M20 15H21V16H20V15Z" fill="black" fill-opacity="0.2"/>
<path d="M20 14H21V15H20V14Z" fill="#479DFF"/>
<path d="M20 14H21V15H20V14Z" fill="black" fill-opacity="0.2"/>
<path d="M20 13H21V14H20V13Z" fill="#479DFF"/>
<path d="M20 13H21V14H20V13Z" fill="black" fill-opacity="0.2"/>
<path d="M20 12H21V13H20V12Z" fill="#479DFF"/>
<path d="M20 12H21V13H20V12Z" fill="black" fill-opacity="0.2"/>
<path d="M20 11H21V12H20V11Z" fill="#479DFF"/>
<path d="M20 11H21V12H20V11Z" fill="black" fill-opacity="0.2"/>
<path d="M20 10H21V11H20V10Z" fill="#479DFF"/>
<path d="M20 10H21V11H20V10Z" fill="black" fill-opacity="0.2"/>
<path d="M20 9H21V10H20V9Z" fill="#479DFF"/>
<path d="M20 9H21V10H20V9Z" fill="black" fill-opacity="0.2"/>
<path d="M22 16H23V17H22V16Z" fill="#479DFF"/>
<path d="M22 16H23V17H22V16Z" fill="black" fill-opacity="0.2"/>
<path d="M8 17H9V18H8V17Z" fill="#479DFF"/>
<path d="M8 17H9V18H8V17Z" fill="black" fill-opacity="0.2"/>
<path d="M9 17H10V18H9V17Z" fill="#479DFF"/>
<path d="M9 17H10V18H9V17Z" fill="black" fill-opacity="0.2"/>
<path d="M10 17H11V18H10V17Z" fill="#479DFF"/>
<path d="M10 17H11V18H10V17Z" fill="black" fill-opacity="0.2"/>
<path d="M11 17H12V18H11V17Z" fill="#479DFF"/>
<path d="M11 17H12V18H11V17Z" fill="black" fill-opacity="0.2"/>
<path d="M12 17H13V18H12V17Z" fill="#479DFF"/>
<path d="M12 17H13V18H12V17Z" fill="black" fill-opacity="0.2"/>
<path d="M15 17H16V18H15V17Z" fill="#479DFF"/>
<path d="M15 17H16V18H15V17Z" fill="black" fill-opacity="0.2"/>
<path d="M16 17H17V18H16V17Z" fill="#479DFF"/>
<path d="M16 17H17V18H16V17Z" fill="black" fill-opacity="0.2"/>
<path d="M17 17H18V18H17V17Z" fill="#479DFF"/>
<path d="M17 17H18V18H17V17Z" fill="black" fill-opacity="0.2"/>
<path d="M18 17H19V18H18V17Z" fill="#479DFF"/>
<path d="M18 17H19V18H18V17Z" fill="black" fill-opacity="0.2"/>
<path d="M19 17H20V18H19V17Z" fill="#479DFF"/>
<path d="M19 17H20V18H19V17Z" fill="black" fill-opacity="0.2"/>
<path d="M20 17H21V18H20V17Z" fill="#479DFF"/>
<path d="M20 17H21V18H20V17Z" fill="black" fill-opacity="0.2"/>
<path d="M22 17H23V18H22V17Z" fill="#479DFF"/>
<path d="M22 17H23V18H22V17Z" fill="black" fill-opacity="0.2"/>
<path d="M8 18H9V19H8V18Z" fill="#479DFF"/>
<path d="M8 18H9V19H8V18Z" fill="black" fill-opacity="0.2"/>
<path d="M9 18H10V19H9V18Z" fill="#479DFF"/>
<path d="M9 18H10V19H9V18Z" fill="black" fill-opacity="0.2"/>
<path d="M10 18H11V19H10V18Z" fill="#479DFF"/>
<path d="M10 18H11V19H10V18Z" fill="black" fill-opacity="0.2"/>
<path d="M11 18H12V19H11V18Z" fill="#479DFF"/>
<path d="M11 18H12V19H11V18Z" fill="black" fill-opacity="0.2"/>
<path d="M12 18H13V19H12V18Z" fill="#479DFF"/>
<path d="M12 18H13V19H12V18Z" fill="black" fill-opacity="0.2"/>
<path d="M15 18H16V19H15V18Z" fill="#479DFF"/>
<path d="M15 18H16V19H15V18Z" fill="black" fill-opacity="0.2"/>
<path d="M16 18H17V19H16V18Z" fill="#479DFF"/>
<path d="M16 18H17V19H16V18Z" fill="black" fill-opacity="0.2"/>
<path d="M17 18H18V19H17V18Z" fill="#479DFF"/>
<path d="M17 18H18V19H17V18Z" fill="black" fill-opacity="0.2"/>
<path d="M18 18H19V19H18V18Z" fill="#479DFF"/>
<path d="M18 18H19V19H18V18Z" fill="black" fill-opacity="0.2"/>
<path d="M19 18H20V19H19V18Z" fill="#479DFF"/>
<path d="M19 18H20V19H19V18Z" fill="black" fill-opacity="0.2"/>
<path d="M20 18H21V19H20V18Z" fill="#479DFF"/>
<path d="M20 18H21V19H20V18Z" fill="black" fill-opacity="0.2"/>
<path d="M13 16H14V17H13V16Z" fill="#479DFF"/>
<path d="M13 16H14V17H13V16Z" fill="black" fill-opacity="0.2"/>
<path d="M13 15H14V16H13V15Z" fill="#479DFF"/>
<path d="M13 15H14V16H13V15Z" fill="black" fill-opacity="0.2"/>
<path d="M13 14H14V15H13V14Z" fill="#479DFF"/>
<path d="M13 14H14V15H13V14Z" fill="black" fill-opacity="0.2"/>
<path d="M13 13H14V14H13V13Z" fill="#479DFF"/>
<path d="M13 13H14V14H13V13Z" fill="black" fill-opacity="0.2"/>
<path d="M13 12H14V13H13V12Z" fill="#479DFF"/>
<path d="M13 12H14V13H13V12Z" fill="black" fill-opacity="0.2"/>
<path d="M13 11H14V12H13V11Z" fill="#479DFF"/>
<path d="M13 11H14V12H13V11Z" fill="black" fill-opacity="0.2"/>
<path d="M13 10H14V11H13V10Z" fill="#479DFF"/>
<path d="M13 10H14V11H13V10Z" fill="black" fill-opacity="0.2"/>
<path d="M13 9H14V10H13V9Z" fill="#479DFF"/>
<path d="M13 9H14V10H13V9Z" fill="black" fill-opacity="0.2"/>
<path d="M13 17H14V18H13V17Z" fill="#479DFF"/>
<path d="M13 17H14V18H13V17Z" fill="black" fill-opacity="0.2"/>
<path d="M13 18H14V19H13V18Z" fill="#479DFF"/>
<path d="M13 18H14V19H13V18Z" fill="black" fill-opacity="0.2"/>
<path d="M14 16H15V17H14V16Z" fill="#479DFF"/>
<path d="M14 16H15V17H14V16Z" fill="black" fill-opacity="0.2"/>
<path d="M14 15H15V16H14V15Z" fill="#479DFF"/>
<path d="M14 15H15V16H14V15Z" fill="black" fill-opacity="0.2"/>
<path d="M14 14H15V15H14V14Z" fill="#479DFF"/>
<path d="M14 14H15V15H14V14Z" fill="black" fill-opacity="0.2"/>
<path d="M14 13H15V14H14V13Z" fill="#479DFF"/>
<path d="M14 13H15V14H14V13Z" fill="black" fill-opacity="0.2"/>
<path d="M14 12H15V13H14V12Z" fill="#479DFF"/>
<path d="M14 12H15V13H14V12Z" fill="black" fill-opacity="0.2"/>
<path d="M14 11H15V12H14V11Z" fill="#479DFF"/>
<path d="M14 11H15V12H14V11Z" fill="black" fill-opacity="0.2"/>
<path d="M14 10H15V11H14V10Z" fill="#479DFF"/>
<path d="M14 10H15V11H14V10Z" fill="black" fill-opacity="0.2"/>
<path d="M14 9H15V10H14V9Z" fill="#479DFF"/>
<path d="M14 9H15V10H14V9Z" fill="black" fill-opacity="0.2"/>
<path d="M14 17H15V18H14V17Z" fill="#479DFF"/>
<path d="M14 17H15V18H14V17Z" fill="black" fill-opacity="0.2"/>
<path d="M14 18H15V19H14V18Z" fill="#479DFF"/>
<path d="M14 18H15V19H14V18Z" fill="black" fill-opacity="0.2"/>
<path d="M21 16H22V17H21V16Z" fill="#479DFF"/>
<path d="M21 16H22V17H21V16Z" fill="black" fill-opacity="0.2"/>
<path d="M21 15H22V16H21V15Z" fill="#479DFF"/>
<path d="M21 15H22V16H21V15Z" fill="black" fill-opacity="0.2"/>
<path d="M21 14H22V15H21V14Z" fill="#479DFF"/>
<path d="M21 14H22V15H21V14Z" fill="black" fill-opacity="0.2"/>
<path d="M21 13H22V14H21V13Z" fill="#479DFF"/>
<path d="M21 13H22V14H21V13Z" fill="black" fill-opacity="0.2"/>
<path d="M21 12H22V13H21V12Z" fill="#479DFF"/>
<path d="M21 12H22V13H21V12Z" fill="black" fill-opacity="0.2"/>
<path d="M21 11H22V12H21V11Z" fill="#479DFF"/>
<path d="M21 11H22V12H21V11Z" fill="black" fill-opacity="0.2"/>
<path d="M21 10H22V11H21V10Z" fill="#479DFF"/>
<path d="M21 10H22V11H21V10Z" fill="black" fill-opacity="0.2"/>
<path d="M21 9H22V10H21V9Z" fill="#479DFF"/>
<path d="M21 9H22V10H21V9Z" fill="black" fill-opacity="0.2"/>
<path d="M21 17H22V18H21V17Z" fill="#479DFF"/>
<path d="M21 17H22V18H21V17Z" fill="black" fill-opacity="0.2"/>
<path d="M21 18H22V19H21V18Z" fill="#479DFF"/>
<path d="M21 18H22V19H21V18Z" fill="black" fill-opacity="0.2"/>
<path d="M22 18H23V19H22V18Z" fill="#479DFF"/>
<path d="M22 18H23V19H22V18Z" fill="black" fill-opacity="0.2"/>
<path d="M22 15H23V16H22V15Z" fill="#479DFF"/>
<path d="M22 15H23V16H22V15Z" fill="black" fill-opacity="0.2"/>
<path d="M22 14H23V15H22V14Z" fill="#479DFF"/>
<path d="M22 14H23V15H22V14Z" fill="black" fill-opacity="0.2"/>
<path d="M22 13H23V14H22V13Z" fill="#479DFF"/>
<path d="M22 13H23V14H22V13Z" fill="black" fill-opacity="0.2"/>
<path d="M22 12H23V13H22V12Z" fill="#479DFF"/>
<path d="M22 12H23V13H22V12Z" fill="black" fill-opacity="0.2"/>
<path d="M22 11H23V12H22V11Z" fill="#479DFF"/>
<path d="M22 11H23V12H22V11Z" fill="black" fill-opacity="0.2"/>
<path d="M22 10H23V11H22V10Z" fill="#479DFF"/>
<path d="M22 10H23V11H22V10Z" fill="black" fill-opacity="0.2"/>
<path d="M22 9H23V10H22V9Z" fill="#479DFF"/>
<path d="M22 9H23V10H22V9Z" fill="black" fill-opacity="0.2"/>
<path d="M23 13H24V14H23V13Z" fill="#479DFF"/>
<path d="M23 13H24V14H23V13Z" fill="black" fill-opacity="0.2"/>
<path d="M23 12H24V13H23V12Z" fill="#479DFF"/>
<path d="M23 12H24V13H23V12Z" fill="black" fill-opacity="0.2"/>
<path d="M23 11H24V12H23V11Z" fill="#479DFF"/>
<path d="M23 11H24V12H23V11Z" fill="black" fill-opacity="0.2"/>
<path d="M23 10H24V11H23V10Z" fill="#479DFF"/>
<path d="M23 10H24V11H23V10Z" fill="black" fill-opacity="0.2"/>
<path d="M23 9H24V10H23V9Z" fill="#479DFF"/>
<path d="M23 9H24V10H23V9Z" fill="black" fill-opacity="0.2"/>
<path d="M24 13H25V14H24V13Z" fill="#479DFF"/>
<path d="M24 13H25V14H24V13Z" fill="black" fill-opacity="0.2"/>
<path d="M24 12H25V13H24V12Z" fill="#479DFF"/>
<path d="M24 12H25V13H24V12Z" fill="black" fill-opacity="0.2"/>
<path d="M24 11H25V12H24V11Z" fill="#479DFF"/>
<path d="M24 11H25V12H24V11Z" fill="black" fill-opacity="0.2"/>
<path d="M24 10H25V11H24V10Z" fill="#479DFF"/>
<path d="M24 10H25V11H24V10Z" fill="black" fill-opacity="0.2"/>
<path d="M24 9H25V10H24V9Z" fill="#479DFF"/>
<path d="M24 9H25V10H24V9Z" fill="black" fill-opacity="0.2"/>
<path d="M25 11H26V12H25V11Z" fill="#479DFF"/>
<path d="M25 11H26V12H25V11Z" fill="black" fill-opacity="0.2"/>
<path d="M25 10H26V11H25V10Z" fill="#479DFF"/>
<path d="M25 10H26V11H25V10Z" fill="black" fill-opacity="0.2"/>
<path d="M25 9H26V10H25V9Z" fill="#479DFF"/>
<path d="M25 9H26V10H25V9Z" fill="black" fill-opacity="0.2"/>
</svg>


    `;
  }
}
