/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  opacity: string;
  fillOpacity: string;
  className: any;
}

export const Icon21 = ({ opacity = "unset", fillOpacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-21 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18.2587 28.878H13.7533C13.4647 28.878 13.21 28.7956 12.9893 28.6307C12.7686 28.4658 12.6479 28.239 12.627 27.9505L12.1264 24.8585C11.7927 24.7348 11.4245 24.5624 11.0217 24.3413C10.619 24.1202 10.2676 23.8906 9.96762 23.6526L7.08923 24.9512C6.83893 25.0955 6.56719 25.1137 6.27401 25.0057C5.98086 24.8978 5.76243 24.7147 5.61874 24.4565L3.36608 20.437C3.19922 20.1858 3.1575 19.9248 3.24093 19.654C3.32437 19.3831 3.4808 19.17 3.71024 19.0147L6.30705 17.1044C6.28619 16.9571 6.27055 16.7714 6.26012 16.5473C6.24969 16.3231 6.24448 16.1252 6.24448 15.9536C6.24448 15.7999 6.24969 15.6193 6.26012 15.4117C6.27055 15.2042 6.28619 15.0138 6.30705 14.8405L3.71024 12.9853C3.45994 12.8204 3.30351 12.5994 3.24093 12.3223C3.17836 12.0453 3.22008 11.7819 3.36608 11.5321L5.61874 7.54346C5.7856 7.29611 6.00461 7.12089 6.27577 7.01783C6.54692 6.91476 6.81807 6.92507 7.08923 7.04875L9.90505 8.34737C10.1971 8.12063 10.5516 7.88873 10.9688 7.65168C11.386 7.41463 11.7718 7.23427 12.1264 7.11059L12.627 4.04954C12.6479 3.76096 12.7686 3.53421 12.9893 3.36931C13.21 3.2044 13.4647 3.12195 13.7533 3.12195H18.2587C18.5499 3.12195 18.8068 3.20513 19.0294 3.3715C19.252 3.53789 19.381 3.7639 19.4163 4.04954L19.8856 7.11059C20.2402 7.23427 20.6312 7.41463 21.0588 7.65168C21.4864 7.88873 21.8358 8.12063 22.1069 8.34737L24.9228 7.04875C25.1731 6.92507 25.4448 6.91526 25.738 7.01931C26.0311 7.12335 26.2496 7.29806 26.3933 7.54346L28.6459 11.5012C28.7919 11.7461 28.8336 12.0135 28.7711 12.3033C28.7085 12.5931 28.5625 12.8204 28.333 12.9853L25.6737 14.8096C25.6945 14.9951 25.7154 15.2012 25.7362 15.428C25.7571 15.6547 25.7675 15.8506 25.7675 16.0155C25.7675 16.1804 25.7571 16.371 25.7362 16.5875C25.7154 16.8039 25.7049 16.9946 25.7049 17.1595L28.3018 19.0147C28.5312 19.1875 28.6824 19.4111 28.7554 19.6854C28.8284 19.9597 28.7919 20.2205 28.6459 20.4679L26.3933 24.4874C26.2264 24.7554 26.0022 24.9358 25.7206 25.0285C25.439 25.1213 25.1731 25.0955 24.9228 24.9512L22.0444 23.6526C21.7524 23.8794 21.4082 24.1113 21.0119 24.3483C20.6156 24.5854 20.2506 24.7554 19.9169 24.8585L19.4163 27.9505C19.3746 28.239 19.2433 28.4658 19.0227 28.6307C18.802 28.7956 18.5473 28.878 18.2587 28.878ZM15.9747 20.437C17.222 20.437 18.2847 20.0035 19.1628 19.1365C20.041 18.2696 20.48 17.2204 20.48 15.9889C20.48 14.7574 20.041 13.7068 19.1628 12.8369C18.2847 11.967 17.222 11.5321 15.9747 11.5321C14.7232 11.5321 13.6595 11.9656 12.7834 12.8326C11.9074 13.6995 11.4694 14.7487 11.4694 15.9802C11.4694 17.2116 11.9074 18.2623 12.7834 19.1322C13.6595 20.002 14.7232 20.437 15.9747 20.437ZM15.9554 18.1798C15.3425 18.1798 14.8223 17.9652 14.3947 17.5359C13.9671 17.1066 13.7533 16.5883 13.7533 15.9809C13.7533 15.3735 13.9693 14.8564 14.4012 14.4295C14.8331 14.0027 15.3545 13.7892 15.9655 13.7892C16.5765 13.7892 17.101 14.0039 17.5391 14.4332C17.9771 14.8625 18.1961 15.3808 18.1961 15.9882C18.1961 16.5956 17.9758 17.1127 17.5354 17.5395C17.0949 17.9664 16.5682 18.1798 15.9554 18.1798ZM14.6294 26.6209H17.3893L17.8285 23.127C18.5324 22.9621 19.1964 22.7035 19.8203 22.3514C20.4442 21.9992 21.0206 21.5672 21.5495 21.0554L24.8289 22.4777L26.0804 20.2515L23.1707 18.118C23.2541 17.7751 23.3271 17.425 23.3897 17.0678C23.4523 16.7107 23.4836 16.348 23.4836 15.98C23.4836 15.612 23.4575 15.2579 23.4054 14.9178C23.3532 14.5777 23.2854 14.2221 23.202 13.8511L26.0804 11.7485L24.8602 9.52232L21.5438 10.9137C21.064 10.3778 20.5106 9.92124 19.8833 9.54412C19.256 9.167 18.5643 8.92269 17.8081 8.81117L17.4139 5.37909H14.5981L14.1914 8.81117C13.4405 8.97607 12.7469 9.23889 12.1108 9.59962C11.4746 9.96035 10.9167 10.3984 10.4369 10.9137L7.19194 9.52232L5.90032 11.7485L8.81001 13.882C8.72657 14.253 8.65879 14.6086 8.60664 14.9487C8.5545 15.2888 8.52842 15.6288 8.52842 15.9686C8.52842 16.309 8.5545 16.6545 8.60664 17.0049C8.65879 17.3553 8.72657 17.7263 8.81001 18.118L5.90032 20.2515L7.18309 22.4777L10.4682 21.0554C11.0105 21.5913 11.5945 22.0345 12.2203 22.3849C12.846 22.7353 13.503 22.993 14.1914 23.1579L14.6294 26.6209Z"
        fill="#F8F7FA"
        fillOpacity={fillOpacity}
        opacity={opacity}
      />
    </svg>
  );
};

Icon21.propTypes = {
  opacity: PropTypes.string,
  fillOpacity: PropTypes.string,
};
