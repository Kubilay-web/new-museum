import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const LoveIdentity = () => {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".teaser--exhibition-3418 .teaser__wrapper:hover:before {background-color:#0080C9 !important} .teaser--exhibition-3418 .teaser__wrapper:hover .teaser__defacer {color:#0080C9} .teaser--exhibition-3418 .teaser__defacer {background-color:#0080C9} .teaser--exhibition-3418 .teaser__title strong {color:#0080C9} .teaser--exhibition-2232 .teaser__wrapper:hover:before {background-color:#0085B9 !important} .teaser--exhibition-2232 .teaser__wrapper:hover .teaser__defacer {color:#0085B9} .teaser--exhibition-2232 .teaser__defacer {background-color:#0085B9} .teaser--exhibition-2232 .teaser__title strong {color:#0085B9} .teaser--exhibition-2013 .teaser__wrapper:hover:before {background-color:#008CA7 !important} .teaser--exhibition-2013 .teaser__wrapper:hover .teaser__defacer {color:#008CA7} .teaser--exhibition-2013 .teaser__defacer {background-color:#008CA7} .teaser--exhibition-2013 .teaser__title strong {color:#008CA7} .teaser--exhibition-3143 .teaser__wrapper:hover:before {background-color:#008F7C !important} .teaser--exhibition-3143 .teaser__wrapper:hover .teaser__defacer {color:#008F7C} .teaser--exhibition-3143 .teaser__defacer {background-color:#008F7C} .teaser--exhibition-3143 .teaser__title strong {color:#008F7C} .teaser--exhibition-1397 .teaser__wrapper:hover:before {background-color:#009699 !important} .teaser--exhibition-1397 .teaser__wrapper:hover .teaser__defacer {color:#009699} .teaser--exhibition-1397 .teaser__defacer {background-color:#009699} .teaser--exhibition-1397 .teaser__title strong {color:#009699} .teaser--exhibition-4801 .teaser__wrapper:hover:before {background-color:#009AB4 !important} .teaser--exhibition-4801 .teaser__wrapper:hover .teaser__defacer {color:#009AB4} .teaser--exhibition-4801 .teaser__defacer {background-color:#009AB4} .teaser--exhibition-4801 .teaser__title strong {color:#009AB4} .teaser--exhibition-4450 .teaser__wrapper:hover:before {background-color:#009BB3 !important} .teaser--exhibition-4450 .teaser__wrapper:hover .teaser__defacer {color:#009BB3} .teaser--exhibition-4450 .teaser__defacer {background-color:#009BB3} .teaser--exhibition-4450 .teaser__title strong {color:#009BB3} .teaser--exhibition-4400 .teaser__wrapper:hover:before {background-color:#009D3D !important} .teaser--exhibition-4400 .teaser__wrapper:hover .teaser__defacer {color:#009D3D} .teaser--exhibition-4400 .teaser__defacer {background-color:#009D3D} .teaser--exhibition-4400 .teaser__title strong {color:#009D3D} .teaser--exhibition-3070 .teaser__wrapper:hover:before {background-color:#00AFAD !important} .teaser--exhibition-3070 .teaser__wrapper:hover .teaser__defacer {color:#00AFAD} .teaser--exhibition-3070 .teaser__defacer {background-color:#00AFAD} .teaser--exhibition-3070 .teaser__title strong {color:#00AFAD} .teaser--exhibition-3607 .teaser__wrapper:hover:before {background-color:#00B2B2 !important} .teaser--exhibition-3607 .teaser__wrapper:hover .teaser__defacer {color:#00B2B2} .teaser--exhibition-3607 .teaser__defacer {background-color:#00B2B2} .teaser--exhibition-3607 .teaser__title strong {color:#00B2B2} .teaser--exhibition-4409 .teaser__wrapper:hover:before {background-color:#00B451 !important} .teaser--exhibition-4409 .teaser__wrapper:hover .teaser__defacer {color:#00B451} .teaser--exhibition-4409 .teaser__defacer {background-color:#00B451} .teaser--exhibition-4409 .teaser__title strong {color:#00B451} .teaser--exhibition-441 .teaser__wrapper:hover:before {background-color:#00BBB4 !important} .teaser--exhibition-441 .teaser__wrapper:hover .teaser__defacer {color:#00BBB4} .teaser--exhibition-441 .teaser__defacer {background-color:#00BBB4} .teaser--exhibition-441 .teaser__title strong {color:#00BBB4} .teaser--exhibition-2226 .teaser__wrapper:hover:before {background-color:#067E15 !important} .teaser--exhibition-2226 .teaser__wrapper:hover .teaser__defacer {color:#067E15} .teaser--exhibition-2226 .teaser__defacer {background-color:#067E15} .teaser--exhibition-2226 .teaser__title strong {color:#067E15} .teaser--exhibition-4301 .teaser__wrapper:hover:before {background-color:#2198D8 !important} .teaser--exhibition-4301 .teaser__wrapper:hover .teaser__defacer {color:#2198D8} .teaser--exhibition-4301 .teaser__defacer {background-color:#2198D8} .teaser--exhibition-4301 .teaser__title strong {color:#2198D8} .teaser--exhibition-3231 .teaser__wrapper:hover:before {background-color:#31AA6C !important} .teaser--exhibition-3231 .teaser__wrapper:hover .teaser__defacer {color:#31AA6C} .teaser--exhibition-3231 .teaser__defacer {background-color:#31AA6C} .teaser--exhibition-3231 .teaser__title strong {color:#31AA6C} .teaser--exhibition-2106 .teaser__wrapper:hover:before {background-color:#338F73 !important} .teaser--exhibition-2106 .teaser__wrapper:hover .teaser__defacer {color:#338F73} .teaser--exhibition-2106 .teaser__defacer {background-color:#338F73} .teaser--exhibition-2106 .teaser__title strong {color:#338F73} .teaser--exhibition-5224 .teaser__wrapper:hover:before {background-color:#3A8340 !important} .teaser--exhibition-5224 .teaser__wrapper:hover .teaser__defacer {color:#3A8340} .teaser--exhibition-5224 .teaser__defacer {background-color:#3A8340} .teaser--exhibition-5224 .teaser__title strong {color:#3A8340} .teaser--exhibition-2225 .teaser__wrapper:hover:before {background-color:#3EC2EA !important} .teaser--exhibition-2225 .teaser__wrapper:hover .teaser__defacer {color:#3EC2EA} .teaser--exhibition-2225 .teaser__defacer {background-color:#3EC2EA} .teaser--exhibition-2225 .teaser__title strong {color:#3EC2EA} .teaser--exhibition-4804 .teaser__wrapper:hover:before {background-color:#4E77C1 !important} .teaser--exhibition-4804 .teaser__wrapper:hover .teaser__defacer {color:#4E77C1} .teaser--exhibition-4804 .teaser__defacer {background-color:#4E77C1} .teaser--exhibition-4804 .teaser__title strong {color:#4E77C1} .teaser--exhibition-4200 .teaser__wrapper:hover:before {background-color:#547D7D !important} .teaser--exhibition-4200 .teaser__wrapper:hover .teaser__defacer {color:#547D7D} .teaser--exhibition-4200 .teaser__defacer {background-color:#547D7D} .teaser--exhibition-4200 .teaser__title strong {color:#547D7D} .teaser--exhibition-1393 .teaser__wrapper:hover:before {background-color:#55DA85 !important} .teaser--exhibition-1393 .teaser__wrapper:hover .teaser__defacer {color:#55DA85} .teaser--exhibition-1393 .teaser__defacer {background-color:#55DA85} .teaser--exhibition-1393 .teaser__title strong {color:#55DA85} .teaser--exhibition-4237 .teaser__wrapper:hover:before {background-color:#5E8AB4 !important} .teaser--exhibition-4237 .teaser__wrapper:hover .teaser__defacer {color:#5E8AB4} .teaser--exhibition-4237 .teaser__defacer {background-color:#5E8AB4} .teaser--exhibition-4237 .teaser__title strong {color:#5E8AB4} .teaser--exhibition-4595 .teaser__wrapper:hover:before {background-color:#607B94 !important} .teaser--exhibition-4595 .teaser__wrapper:hover .teaser__defacer {color:#607B94} .teaser--exhibition-4595 .teaser__defacer {background-color:#607B94} .teaser--exhibition-4595 .teaser__title strong {color:#607B94} .teaser--exhibition-3428 .teaser__wrapper:hover:before {background-color:#648F82 !important} .teaser--exhibition-3428 .teaser__wrapper:hover .teaser__defacer {color:#648F82} .teaser--exhibition-3428 .teaser__defacer {background-color:#648F82} .teaser--exhibition-3428 .teaser__title strong {color:#648F82} .teaser--exhibition-3164 .teaser__wrapper:hover:before {background-color:#68972F !important} .teaser--exhibition-3164 .teaser__wrapper:hover .teaser__defacer {color:#68972F} .teaser--exhibition-3164 .teaser__defacer {background-color:#68972F} .teaser--exhibition-3164 .teaser__title strong {color:#68972F} .teaser--exhibition-5428 .teaser__wrapper:hover:before {background-color:#6EA5E6 !important} .teaser--exhibition-5428 .teaser__wrapper:hover .teaser__defacer {color:#6EA5E6} .teaser--exhibition-5428 .teaser__defacer {background-color:#6EA5E6} .teaser--exhibition-5428 .teaser__title strong {color:#6EA5E6} .teaser--exhibition-2231 .teaser__wrapper:hover:before {background-color:#724F7A !important} .teaser--exhibition-2231 .teaser__wrapper:hover .teaser__defacer {color:#724F7A} .teaser--exhibition-2231 .teaser__defacer {background-color:#724F7A} .teaser--exhibition-2231 .teaser__title strong {color:#724F7A} .teaser--exhibition-1383 .teaser__wrapper:hover:before {background-color:#7482BE !important} .teaser--exhibition-1383 .teaser__wrapper:hover .teaser__defacer {color:#7482BE} .teaser--exhibition-1383 .teaser__defacer {background-color:#7482BE} .teaser--exhibition-1383 .teaser__title strong {color:#7482BE} .teaser--exhibition-3557 .teaser__wrapper:hover:before {background-color:#75B843 !important} .teaser--exhibition-3557 .teaser__wrapper:hover .teaser__defacer {color:#75B843} .teaser--exhibition-3557 .teaser__defacer {background-color:#75B843} .teaser--exhibition-3557 .teaser__title strong {color:#75B843} .teaser--exhibition-4939 .teaser__wrapper:hover:before {background-color:#75BEE9 !important} .teaser--exhibition-4939 .teaser__wrapper:hover .teaser__defacer {color:#75BEE9} .teaser--exhibition-4939 .teaser__defacer {background-color:#75BEE9} .teaser--exhibition-4939 .teaser__title strong {color:#75BEE9} .teaser--exhibition-3439 .teaser__wrapper:hover:before {background-color:#796CA7 !important} .teaser--exhibition-3439 .teaser__wrapper:hover .teaser__defacer {color:#796CA7} .teaser--exhibition-3439 .teaser__defacer {background-color:#796CA7} .teaser--exhibition-3439 .teaser__title strong {color:#796CA7} .teaser--exhibition-1399 .teaser__wrapper:hover:before {background-color:#82B7AD !important} .teaser--exhibition-1399 .teaser__wrapper:hover .teaser__defacer {color:#82B7AD} .teaser--exhibition-1399 .teaser__defacer {background-color:#82B7AD} .teaser--exhibition-1399 .teaser__title strong {color:#82B7AD} .teaser--exhibition-2803 .teaser__wrapper:hover:before {background-color:#8441DC !important} .teaser--exhibition-2803 .teaser__wrapper:hover .teaser__defacer {color:#8441DC} .teaser--exhibition-2803 .teaser__defacer {background-color:#8441DC} .teaser--exhibition-2803 .teaser__title strong {color:#8441DC} .teaser--exhibition-2222 .teaser__wrapper:hover:before {background-color:#8630AB !important} .teaser--exhibition-2222 .teaser__wrapper:hover .teaser__defacer {color:#8630AB} .teaser--exhibition-2222 .teaser__defacer {background-color:#8630AB} .teaser--exhibition-2222 .teaser__title strong {color:#8630AB} .teaser--exhibition-5455 .teaser__wrapper:hover:before {background-color:#8AF6FF !important} .teaser--exhibition-5455 .teaser__wrapper:hover .teaser__defacer {color:#8AF6FF} .teaser--exhibition-5455 .teaser__defacer {background-color:#8AF6FF} .teaser--exhibition-5455 .teaser__title strong {color:#8AF6FF} .teaser--exhibition-2100 .teaser__wrapper:hover:before {background-color:#90B0A1 !important} .teaser--exhibition-2100 .teaser__wrapper:hover .teaser__defacer {color:#90B0A1} .teaser--exhibition-2100 .teaser__defacer {background-color:#90B0A1} .teaser--exhibition-2100 .teaser__title strong {color:#90B0A1} .teaser--exhibition-3438 .teaser__wrapper:hover:before {background-color:#92C56E !important} .teaser--exhibition-3438 .teaser__wrapper:hover .teaser__defacer {color:#92C56E} .teaser--exhibition-3438 .teaser__defacer {background-color:#92C56E} .teaser--exhibition-3438 .teaser__title strong {color:#92C56E} .teaser--exhibition-4609 .teaser__wrapper:hover:before {background-color:#92C56E !important} .teaser--exhibition-4609 .teaser__wrapper:hover .teaser__defacer {color:#92C56E} .teaser--exhibition-4609 .teaser__defacer {background-color:#92C56E} .teaser--exhibition-4609 .teaser__title strong {color:#92C56E} .teaser--exhibition-2223 .teaser__wrapper:hover:before {background-color:#9370DB !important} .teaser--exhibition-2223 .teaser__wrapper:hover .teaser__defacer {color:#9370DB} .teaser--exhibition-2223 .teaser__defacer {background-color:#9370DB} .teaser--exhibition-2223 .teaser__title strong {color:#9370DB} .teaser--exhibition-705 .teaser__wrapper:hover:before {background-color:#9AB9AD !important} .teaser--exhibition-705 .teaser__wrapper:hover .teaser__defacer {color:#9AB9AD} .teaser--exhibition-705 .teaser__defacer {background-color:#9AB9AD} .teaser--exhibition-705 .teaser__title strong {color:#9AB9AD} .teaser--exhibition-2228 .teaser__wrapper:hover:before {background-color:#A29062 !important} .teaser--exhibition-2228 .teaser__wrapper:hover .teaser__defacer {color:#A29062} .teaser--exhibition-2228 .teaser__defacer {background-color:#A29062} .teaser--exhibition-2228 .teaser__title strong {color:#A29062} .teaser--exhibition-442 .teaser__wrapper:hover:before {background-color:#A6C38D !important} .teaser--exhibition-442 .teaser__wrapper:hover .teaser__defacer {color:#A6C38D} .teaser--exhibition-442 .teaser__defacer {background-color:#A6C38D} .teaser--exhibition-442 .teaser__title strong {color:#A6C38D} .teaser--exhibition-5332 .teaser__wrapper:hover:before {background-color:#A77E55 !important} .teaser--exhibition-5332 .teaser__wrapper:hover .teaser__defacer {color:#A77E55} .teaser--exhibition-5332 .teaser__defacer {background-color:#A77E55} .teaser--exhibition-5332 .teaser__title strong {color:#A77E55} .teaser--exhibition-4404 .teaser__wrapper:hover:before {background-color:#A9B875 !important} .teaser--exhibition-4404 .teaser__wrapper:hover .teaser__defacer {color:#A9B875} .teaser--exhibition-4404 .teaser__defacer {background-color:#A9B875} .teaser--exhibition-4404 .teaser__title strong {color:#A9B875} .teaser--exhibition-2984 .teaser__wrapper:hover:before {background-color:#ABE1FA !important} .teaser--exhibition-2984 .teaser__wrapper:hover .teaser__defacer {color:#ABE1FA} .teaser--exhibition-2984 .teaser__defacer {background-color:#ABE1FA} .teaser--exhibition-2984 .teaser__title strong {color:#ABE1FA} .teaser--exhibition-5097 .teaser__wrapper:hover:before {background-color:#ADACAA !important} .teaser--exhibition-5097 .teaser__wrapper:hover .teaser__defacer {color:#ADACAA} .teaser--exhibition-5097 .teaser__defacer {background-color:#ADACAA} .teaser--exhibition-5097 .teaser__title strong {color:#ADACAA} .teaser--exhibition-3549 .teaser__wrapper:hover:before {background-color:#B156D2 !important} .teaser--exhibition-3549 .teaser__wrapper:hover .teaser__defacer {color:#B156D2} .teaser--exhibition-3549 .teaser__defacer {background-color:#B156D2} .teaser--exhibition-3549 .teaser__title strong {color:#B156D2} .teaser--exhibition-2194 .teaser__wrapper:hover:before {background-color:#B2A48E !important} .teaser--exhibition-2194 .teaser__wrapper:hover .teaser__defacer {color:#B2A48E} .teaser--exhibition-2194 .teaser__defacer {background-color:#B2A48E} .teaser--exhibition-2194 .teaser__title strong {color:#B2A48E} .teaser--exhibition-2230 .teaser__wrapper:hover:before {background-color:#B2B2A4 !important} .teaser--exhibition-2230 .teaser__wrapper:hover .teaser__defacer {color:#B2B2A4} .teaser--exhibition-2230 .teaser__defacer {background-color:#B2B2A4} .teaser--exhibition-2230 .teaser__title strong {color:#B2B2A4} .teaser--exhibition-2009 .teaser__wrapper:hover:before {background-color:#B2B2B2 !important} .teaser--exhibition-2009 .teaser__wrapper:hover .teaser__defacer {color:#B2B2B2} .teaser--exhibition-2009 .teaser__defacer {background-color:#B2B2B2} .teaser--exhibition-2009 .teaser__title strong {color:#B2B2B2} .teaser--exhibition-2022 .teaser__wrapper:hover:before {background-color:#B2B2B2 !important} .teaser--exhibition-2022 .teaser__wrapper:hover .teaser__defacer {color:#B2B2B2} .teaser--exhibition-2022 .teaser__defacer {background-color:#B2B2B2} .teaser--exhibition-2022 .teaser__title strong {color:#B2B2B2} .teaser--exhibition-2105 .teaser__wrapper:hover:before {background-color:#B35674 !important} .teaser--exhibition-2105 .teaser__wrapper:hover .teaser__defacer {color:#B35674} .teaser--exhibition-2105 .teaser__defacer {background-color:#B35674} .teaser--exhibition-2105 .teaser__title strong {color:#B35674} .teaser--exhibition-4778 .teaser__wrapper:hover:before {background-color:#BCD15F !important} .teaser--exhibition-4778 .teaser__wrapper:hover .teaser__defacer {color:#BCD15F} .teaser--exhibition-4778 .teaser__defacer {background-color:#BCD15F} .teaser--exhibition-4778 .teaser__title strong {color:#BCD15F} .teaser--exhibition-5447 .teaser__wrapper:hover:before {background-color:#C1BA38 !important} .teaser--exhibition-5447 .teaser__wrapper:hover .teaser__defacer {color:#C1BA38} .teaser--exhibition-5447 .teaser__defacer {background-color:#C1BA38} .teaser--exhibition-5447 .teaser__title strong {color:#C1BA38} .teaser--exhibition-4661 .teaser__wrapper:hover:before {background-color:#C2BB36 !important} .teaser--exhibition-4661 .teaser__wrapper:hover .teaser__defacer {color:#C2BB36} .teaser--exhibition-4661 .teaser__defacer {background-color:#C2BB36} .teaser--exhibition-4661 .teaser__title strong {color:#C2BB36} .teaser--exhibition-4403 .teaser__wrapper:hover:before {background-color:#C5C4BE !important} .teaser--exhibition-4403 .teaser__wrapper:hover .teaser__defacer {color:#C5C4BE} .teaser--exhibition-4403 .teaser__defacer {background-color:#C5C4BE} .teaser--exhibition-4403 .teaser__title strong {color:#C5C4BE} .teaser--exhibition-4960 .teaser__wrapper:hover:before {background-color:#C75B8F !important} .teaser--exhibition-4960 .teaser__wrapper:hover .teaser__defacer {color:#C75B8F} .teaser--exhibition-4960 .teaser__defacer {background-color:#C75B8F} .teaser--exhibition-4960 .teaser__title strong {color:#C75B8F} .teaser--exhibition-2224 .teaser__wrapper:hover:before {background-color:#CAB011 !important} .teaser--exhibition-2224 .teaser__wrapper:hover .teaser__defacer {color:#CAB011} .teaser--exhibition-2224 .teaser__defacer {background-color:#CAB011} .teaser--exhibition-2224 .teaser__title strong {color:#CAB011} .teaser--exhibition-2012 .teaser__wrapper:hover:before {background-color:#CAB482 !important} .teaser--exhibition-2012 .teaser__wrapper:hover .teaser__defacer {color:#CAB482} .teaser--exhibition-2012 .teaser__defacer {background-color:#CAB482} .teaser--exhibition-2012 .teaser__title strong {color:#CAB482} .teaser--exhibition-2202 .teaser__wrapper:hover:before {background-color:#D73C61 !important} .teaser--exhibition-2202 .teaser__wrapper:hover .teaser__defacer {color:#D73C61} .teaser--exhibition-2202 .teaser__defacer {background-color:#D73C61} .teaser--exhibition-2202 .teaser__title strong {color:#D73C61} .teaser--exhibition-1324 .teaser__wrapper:hover:before {background-color:#D76062 !important} .teaser--exhibition-1324 .teaser__wrapper:hover .teaser__defacer {color:#D76062} .teaser--exhibition-1324 .teaser__defacer {background-color:#D76062} .teaser--exhibition-1324 .teaser__title strong {color:#D76062} .teaser--exhibition-1217 .teaser__wrapper:hover:before {background-color:#D9AA00 !important} .teaser--exhibition-1217 .teaser__wrapper:hover .teaser__defacer {color:#D9AA00} .teaser--exhibition-1217 .teaser__defacer {background-color:#D9AA00} .teaser--exhibition-1217 .teaser__title strong {color:#D9AA00} .teaser--exhibition-2473 .teaser__wrapper:hover:before {background-color:#DCD5C5 !important} .teaser--exhibition-2473 .teaser__wrapper:hover .teaser__defacer {color:#DCD5C5} .teaser--exhibition-2473 .teaser__defacer {background-color:#DCD5C5} .teaser--exhibition-2473 .teaser__title strong {color:#DCD5C5} .teaser--exhibition-3168 .teaser__wrapper:hover:before {background-color:#DD7237 !important} .teaser--exhibition-3168 .teaser__wrapper:hover .teaser__defacer {color:#DD7237} .teaser--exhibition-3168 .teaser__defacer {background-color:#DD7237} .teaser--exhibition-3168 .teaser__title strong {color:#DD7237} .teaser--exhibition-1408 .teaser__wrapper:hover:before {background-color:#DEC372 !important} .teaser--exhibition-1408 .teaser__wrapper:hover .teaser__defacer {color:#DEC372} .teaser--exhibition-1408 .teaser__defacer {background-color:#DEC372} .teaser--exhibition-1408 .teaser__title strong {color:#DEC372} .teaser--exhibition-2229 .teaser__wrapper:hover:before {background-color:#DF2312 !important} .teaser--exhibition-2229 .teaser__wrapper:hover .teaser__defacer {color:#DF2312} .teaser--exhibition-2229 .teaser__defacer {background-color:#DF2312} .teaser--exhibition-2229 .teaser__title strong {color:#DF2312} .teaser--exhibition-4660 .teaser__wrapper:hover:before {background-color:#DFC070 !important} .teaser--exhibition-4660 .teaser__wrapper:hover .teaser__defacer {color:#DFC070} .teaser--exhibition-4660 .teaser__defacer {background-color:#DFC070} .teaser--exhibition-4660 .teaser__title strong {color:#DFC070} .teaser--exhibition-4793 .teaser__wrapper:hover:before {background-color:#E0352F !important} .teaser--exhibition-4793 .teaser__wrapper:hover .teaser__defacer {color:#E0352F} .teaser--exhibition-4793 .teaser__defacer {background-color:#E0352F} .teaser--exhibition-4793 .teaser__title strong {color:#E0352F} .teaser--exhibition-4783 .teaser__wrapper:hover:before {background-color:#E13C0D !important} .teaser--exhibition-4783 .teaser__wrapper:hover .teaser__defacer {color:#E13C0D} .teaser--exhibition-4783 .teaser__defacer {background-color:#E13C0D} .teaser--exhibition-4783 .teaser__title strong {color:#E13C0D} .teaser--exhibition-2023 .teaser__wrapper:hover:before {background-color:#EB0000 !important} .teaser--exhibition-2023 .teaser__wrapper:hover .teaser__defacer {color:#EB0000} .teaser--exhibition-2023 .teaser__defacer {background-color:#EB0000} .teaser--exhibition-2023 .teaser__title strong {color:#EB0000} .teaser--exhibition-4305 .teaser__wrapper:hover:before {background-color:#EC008C !important} .teaser--exhibition-4305 .teaser__wrapper:hover .teaser__defacer {color:#EC008C} .teaser--exhibition-4305 .teaser__defacer {background-color:#EC008C} .teaser--exhibition-4305 .teaser__title strong {color:#EC008C} .teaser--exhibition-4318 .teaser__wrapper:hover:before {background-color:#EC409D !important} .teaser--exhibition-4318 .teaser__wrapper:hover .teaser__defacer {color:#EC409D} .teaser--exhibition-4318 .teaser__defacer {background-color:#EC409D} .teaser--exhibition-4318 .teaser__title strong {color:#EC409D} .teaser--exhibition-5365 .teaser__wrapper:hover:before {background-color:#EF4036 !important} .teaser--exhibition-5365 .teaser__wrapper:hover .teaser__defacer {color:#EF4036} .teaser--exhibition-5365 .teaser__defacer {background-color:#EF4036} .teaser--exhibition-5365 .teaser__title strong {color:#EF4036} .teaser--exhibition-440 .teaser__wrapper:hover:before {background-color:#EF7B47 !important} .teaser--exhibition-440 .teaser__wrapper:hover .teaser__defacer {color:#EF7B47} .teaser--exhibition-440 .teaser__defacer {background-color:#EF7B47} .teaser--exhibition-440 .teaser__title strong {color:#EF7B47} .teaser--exhibition-5278 .teaser__wrapper:hover:before {background-color:#F01329 !important} .teaser--exhibition-5278 .teaser__wrapper:hover .teaser__defacer {color:#F01329} .teaser--exhibition-5278 .teaser__defacer {background-color:#F01329} .teaser--exhibition-5278 .teaser__title strong {color:#F01329} .teaser--exhibition-4177 .teaser__wrapper:hover:before {background-color:#F15B4E !important} .teaser--exhibition-4177 .teaser__wrapper:hover .teaser__defacer {color:#F15B4E} .teaser--exhibition-4177 .teaser__defacer {background-color:#F15B4E} .teaser--exhibition-4177 .teaser__title strong {color:#F15B4E} .teaser--exhibition-5330 .teaser__wrapper:hover:before {background-color:#F65681 !important} .teaser--exhibition-5330 .teaser__wrapper:hover .teaser__defacer {color:#F65681} .teaser--exhibition-5330 .teaser__defacer {background-color:#F65681} .teaser--exhibition-5330 .teaser__title strong {color:#F65681} .teaser--exhibition-5204 .teaser__wrapper:hover:before {background-color:#F9B853 !important} .teaser--exhibition-5204 .teaser__wrapper:hover .teaser__defacer {color:#F9B853} .teaser--exhibition-5204 .teaser__defacer {background-color:#F9B853} .teaser--exhibition-5204 .teaser__title strong {color:#F9B853} .teaser--exhibition-2227 .teaser__wrapper:hover:before {background-color:#FA1CFF !important} .teaser--exhibition-2227 .teaser__wrapper:hover .teaser__defacer {color:#FA1CFF} .teaser--exhibition-2227 .teaser__defacer {background-color:#FA1CFF} .teaser--exhibition-2227 .teaser__title strong {color:#FA1CFF} .teaser--exhibition-4676 .teaser__wrapper:hover:before {background-color:#FAA21B !important} .teaser--exhibition-4676 .teaser__wrapper:hover .teaser__defacer {color:#FAA21B} .teaser--exhibition-4676 .teaser__defacer {background-color:#FAA21B} .teaser--exhibition-4676 .teaser__title strong {color:#FAA21B} .teaser--exhibition-2698 .teaser__wrapper:hover:before {background-color:#FBBA00 !important} .teaser--exhibition-2698 .teaser__wrapper:hover .teaser__defacer {color:#FBBA00} .teaser--exhibition-2698 .teaser__defacer {background-color:#FBBA00} .teaser--exhibition-2698 .teaser__title strong {color:#FBBA00} .teaser--exhibition-4682 .teaser__wrapper:hover:before {background-color:#FC4C02 !important} .teaser--exhibition-4682 .teaser__wrapper:hover .teaser__defacer {color:#FC4C02} .teaser--exhibition-4682 .teaser__defacer {background-color:#FC4C02} .teaser--exhibition-4682 .teaser__title strong {color:#FC4C02} .teaser--exhibition-5125 .teaser__wrapper:hover:before {background-color:#FDBC54 !important} .teaser--exhibition-5125 .teaser__wrapper:hover .teaser__defacer {color:#FDBC54} .teaser--exhibition-5125 .teaser__defacer {background-color:#FDBC54} .teaser--exhibition-5125 .teaser__title strong {color:#FDBC54} .teaser--exhibition-4949 .teaser__wrapper:hover:before {background-color:#FE987D !important} .teaser--exhibition-4949 .teaser__wrapper:hover .teaser__defacer {color:#FE987D} .teaser--exhibition-4949 .teaser__defacer {background-color:#FE987D} .teaser--exhibition-4949 .teaser__title strong {color:#FE987D} .teaser--exhibition-2233 .teaser__wrapper:hover:before {background-color:#FF0000 !important} .teaser--exhibition-2233 .teaser__wrapper:hover .teaser__defacer {color:#FF0000} .teaser--exhibition-2233 .teaser__defacer {background-color:#FF0000} .teaser--exhibition-2233 .teaser__title strong {color:#FF0000} .teaser--exhibition-4472 .teaser__wrapper:hover:before {background-color:#FF1A00 !important} .teaser--exhibition-4472 .teaser__wrapper:hover .teaser__defacer {color:#FF1A00} .teaser--exhibition-4472 .teaser__defacer {background-color:#FF1A00} .teaser--exhibition-4472 .teaser__title strong {color:#FF1A00} .teaser--exhibition-643 .teaser__wrapper:hover:before {background-color:#FFAE3B !important} .teaser--exhibition-643 .teaser__wrapper:hover .teaser__defacer {color:#FFAE3B} .teaser--exhibition-643 .teaser__defacer {background-color:#FFAE3B} .teaser--exhibition-643 .teaser__title strong {color:#FFAE3B} .teaser--exhibition-5523 .teaser__wrapper:hover:before {background-color:#FFCC00 !important} .teaser--exhibition-5523 .teaser__wrapper:hover .teaser__defacer {color:#FFCC00} .teaser--exhibition-5523 .teaser__defacer {background-color:#FFCC00} .teaser--exhibition-5523 .teaser__title strong {color:#FFCC00} .teaser--exhibition-3359 .teaser__wrapper:hover:before {background-color:#FFCD1C !important} .teaser--exhibition-3359 .teaser__wrapper:hover .teaser__defacer {color:#FFCD1C} .teaser--exhibition-3359 .teaser__defacer {background-color:#FFCD1C} .teaser--exhibition-3359 .teaser__title strong {color:#FFCD1C} .teaser--exhibition-4807 .teaser__wrapper:hover:before {background-color:#FFE800 !important} .teaser--exhibition-4807 .teaser__wrapper:hover .teaser__defacer {color:#FFE800} .teaser--exhibition-4807 .teaser__defacer {background-color:#FFE800} .teaser--exhibition-4807 .teaser__title strong {color:#FFE800} .teaser--exhibition-1830 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1830 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1830 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1830 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-1831 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1831 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1831 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1831 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-1832 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1832 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1832 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1832 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-1877 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1877 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1877 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1877 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2054 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2054 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2054 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2054 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2719 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2719 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2719 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2719 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2757 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2757 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2757 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2757 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2924 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2924 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2924 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2924 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3035 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3035 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3035 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3035 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3086 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3086 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3086 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3086 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3087 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3087 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3087 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3087 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3089 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3089 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3089 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3089 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3174 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3174 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3174 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3174 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4085 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4085 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4085 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4085 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4226 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4226 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4226 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4226 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4228 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4228 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4228 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4228 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4239 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4239 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4239 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4239 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4307 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4307 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4307 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4307 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4401 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4401 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4401 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4401 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4509 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4509 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4509 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4509 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4533 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4533 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4533 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4533 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4534 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4534 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4534 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4534 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4535 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4535 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4535 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4535 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4547 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4547 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4547 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4547 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-5189 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-5189 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-5189 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-5189 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-5190 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-5190 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-5190 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-5190 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-5191 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-5191 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-5191 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-5191 .teaser__title strong {color:#FFFFFF}",
          }}
        />
        <meta
          name="description"
          content="Love and desire is a theme found across the Museum's collection."
        />
        <link
          rel="canonical"
          href="https://www.britishmuseum.org/collection/desire-love-and-identity"
        />
        <link
          rel="image_src"
          href="https://www.britishmuseum.org/sites/default/files/styles/uncropped_large/public/2023-12/Earthenware_figures_Augusta_Kaiser-1000x500.jpg?itok=MS4bO066"
        />
        <meta property="og:site_name" content="The Dersim Museum" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.britishmuseum.org/collection/desire-love-and-identity"
        />
        <meta property="og:title" content="Desire, love and identity" />
        <meta
          property="og:description"
          content="Love and desire is a theme found across the Museum's collection."
        />
        <meta
          property="og:image"
          content="https://www.britishmuseum.org/sites/default/files/styles/uncropped_large/public/2023-12/Earthenware_figures_Augusta_Kaiser-1000x500.jpg?itok=MS4bO066"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Love and desire is a theme found across the Museum's collection."
        />
        <meta name="twitter:site" content="@britishmuseum" />
        <meta name="twitter:title" content="Desire, love and identity" />
        <meta
          name="twitter:image"
          content="https://www.britishmuseum.org/sites/default/files/styles/uncropped_large/public/2023-12/Earthenware_figures_Augusta_Kaiser-1000x500.jpg?itok=MS4bO066"
        />
        <meta name="Generator" content="Drupal 10 (https://www.drupal.org)" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/themes/custom/numiko/favicon.ico"
          type="image/vnd.microsoft.icon"
        />
        <title>Desire, love and identity | Dersim Museum</title>
        <link rel="preconnect" href="https://googletagmanager.com" />
        <link rel="preconnect" href="https://google-analytics.com" />
        <link
          rel="stylesheet"
          media="all"
          href="/sites/default/files/css/css_VAvkHRcLHSWwq0ovHYJ-IGyjWbQie-FPraftF1kr7dQ.css?delta=0&language=en&theme=numiko&include=eJxtyUkOwCAIAMAPubwJK1FSVAJy8Pc9Nml6nbFjG0cuYBimD7pXbrwKcLR9mGb76qUk22JHqKj_GQQUmoJ0y1VdgNMryad4YbKO9QH-yTD4"
        />
        <link
          rel="stylesheet"
          media="print"
          href="/sites/default/files/css/css_i1O0tjo3bjgkU5-alNhpaD4VyRDHezJx1RhRnDHIExI.css?delta=1&language=en&theme=numiko&include=eJxtyUkOwCAIAMAPubwJK1FSVAJy8Pc9Nml6nbFjG0cuYBimD7pXbrwKcLR9mGb76qUk22JHqKj_GQQUmoJ0y1VdgNMryad4YbKO9QH-yTD4"
        />
        {/* Google Consent Mode */}
        {/* End Google Consent Mode */}
        {/* Google Tag Manager */}
        {/* End Google Tag Manager */}
        {/* Cookiebot */}
        {/* End Cookiebot */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/themes/custom/numiko/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/themes/custom/numiko/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/themes/custom/numiko/favicon/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/themes/custom/numiko/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="Dersim Museum" />
        {/* Facebook domain verification */}
        <meta
          name="facebook-domain-verification"
          content="8rxgufrjnmm08rnfosf5ers9d1q7a5"
        />
        {/* End Facebook domain verification */}
        <style
          type="text/css"
          id="CookieConsentStateDisplayStyles"
          dangerouslySetInnerHTML={{
            __html:
              ".cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing,.cookieconsent-optin{display:none;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:block;display:initial;}",
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          &lt;iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MW5VCK"
          height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <symbol id="sprite-icon-facebook" viewBox="0 0 20 20">
              <path d="M11.84 4.06a1.73 1.73 0 0 1 1.34-.41H15v-3A19.44 19.44 0 0 0 12.36.5a4.39 4.39 0 0 0-3.2 1.17A4.36 4.36 0 0 0 8 5v2.45H5v3.38h3v8.67h3.54v-8.67h2.94l.45-3.38h-3.44V5.3a1.91 1.91 0 0 1 .35-1.24Z" />
            </symbol>
            <symbol id="sprite-icon-instagram" viewBox="0 0 17 17">
              <path
                d="M10.503 10.503a2.73 2.73 0 0 0 .83-2.003 2.73 2.73 0 0 0-.83-2.003 2.73 2.73 0 0 0-2.003-.83 2.73 2.73 0 0 0-2.003.83 2.73 2.73 0 0 0-.83 2.003c0 .782.276 1.45.83 2.003a2.73 2.73 0 0 0 2.003.83 2.73 2.73 0 0 0 2.003-.83Zm1.085-5.09c.848.848 1.273 1.877 1.273 3.087 0 1.21-.425 2.24-1.273 3.088-.849.848-1.878 1.273-3.088 1.273-1.21 0-2.24-.425-3.088-1.273C4.564 10.739 4.14 9.71 4.14 8.5c0-1.21.425-2.24 1.273-3.088C6.261 4.564 7.29 4.14 8.5 4.14c1.21 0 2.24.425 3.088 1.273Zm2.17-2.17c.198.2.298.439.298.72 0 .28-.1.52-.299.719a.98.98 0 0 1-.72.298.98.98 0 0 1-.719-.298.98.98 0 0 1-.298-.72c0-.28.1-.52.298-.72a.98.98 0 0 1 .72-.298c.28 0 .52.1.72.299ZM9.34 1.527H8.5l-.847-.005a60.042 60.042 0 0 0-1.167 0c-.266.003-.622.015-1.068.033a8.77 8.77 0 0 0-1.14.11 4.438 4.438 0 0 0-.792.205 2.871 2.871 0 0 0-.974.642 2.88 2.88 0 0 0-.642.974c-.08.214-.149.478-.204.792a8.77 8.77 0 0 0-.111 1.14c-.018.446-.03.802-.033 1.068-.004.265-.004.655 0 1.167l.005.847-.005.847c-.004.512-.004.902 0 1.167.003.266.015.622.033 1.068.018.447.055.827.11 1.14.056.314.124.578.205.792a2.89 2.89 0 0 0 1.616 1.616c.214.08.478.149.792.204a8.77 8.77 0 0 0 1.14.111c.446.018.802.03 1.068.033.265.004.655.004 1.167 0l.847-.005.847.005c.512.004.902.004 1.167 0 .266-.003.622-.015 1.068-.033a8.77 8.77 0 0 0 1.14-.11c.314-.056.578-.124.792-.205a2.89 2.89 0 0 0 1.616-1.616c.08-.214.149-.478.204-.792a8.77 8.77 0 0 0 .111-1.14c.018-.446.03-.802.033-1.068.004-.265.004-.655 0-1.167a294.85 294.85 0 0 1-.005-.847l.005-.847c.004-.512.004-.902 0-1.167a41.003 41.003 0 0 0-.033-1.068 8.77 8.77 0 0 0-.11-1.14 4.438 4.438 0 0 0-.205-.792 2.871 2.871 0 0 0-.642-.974 2.871 2.871 0 0 0-.974-.642 4.438 4.438 0 0 0-.792-.204 8.77 8.77 0 0 0-1.14-.111c-.446-.018-.802-.03-1.068-.033a45.224 45.224 0 0 0-1.173.005Zm7.604 3.465C16.982 5.64 17 6.81 17 8.5s-.018 2.86-.055 3.508c-.074 1.535-.532 2.723-1.373 3.564-.84.841-2.029 1.299-3.564 1.373-.649.037-1.818.055-3.508.055s-2.86-.018-3.508-.055c-1.535-.074-2.723-.532-3.564-1.373-.841-.84-1.299-2.029-1.373-3.564C.018 11.36 0 10.19 0 8.5s.018-2.86.055-3.508C.13 3.457.587 2.269 1.428 1.428 2.268.587 3.457.129 4.992.055 5.64.018 6.81 0 8.5 0s2.86.018 3.508.055c1.535.074 2.723.532 3.564 1.373.841.84 1.299 2.029 1.373 3.564Z"
                fillRule="nonzero"
              />
            </symbol>
            <symbol id="sprite-icon-twitter" viewBox="0 0 20 20">
              <path d="M19.61 4.47a7.87 7.87 0 0 1-2 1.89v.48a9.69 9.69 0 0 1-.46 2.94 10.15 10.15 0 0 1-1.41 2.81A11.33 11.33 0 0 1 13.53 15a10.22 10.22 0 0 1-3.15 1.65 12.37 12.37 0 0 1-3.94.62 11.59 11.59 0 0 1-6.05-1.66 9.13 9.13 0 0 0 1 0 8.1 8.1 0 0 0 4.89-1.56 4.07 4.07 0 0 1-2.29-.73 3.57 3.57 0 0 1-1.39-1.81 4.91 4.91 0 0 0 .74.06 4.06 4.06 0 0 0 1-.13 3.93 3.93 0 0 1-2.27-1.26 3.41 3.41 0 0 1-.89-2.33A4.16 4.16 0 0 0 3 8.31 3.62 3.62 0 0 1 1.67 7a3.42 3.42 0 0 1 .06-3.59 11.14 11.14 0 0 0 3.59 2.7 11.64 11.64 0 0 0 4.53 1.14 4.14 4.14 0 0 1-.09-.84 3.4 3.4 0 0 1 1.15-2.59 4 4 0 0 1 2.79-1.07 3.94 3.94 0 0 1 2.88 1.16 8.21 8.21 0 0 0 2.5-.91 3.62 3.62 0 0 1-1.74 2 8.5 8.5 0 0 0 2.27-.53Z" />
            </symbol>
            <symbol id="sprite-icon-wechat" viewBox="0 0 20 18">
              <path d="M13.895 5.67c-1.856.096-3.47.66-4.78 1.93-1.326 1.285-1.93 2.86-1.764 4.81-.726-.09-1.387-.188-2.051-.244-.23-.02-.502.008-.697.117-.644.365-1.264.776-1.997 1.234.135-.609.222-1.142.377-1.654.113-.377.06-.586-.287-.832C.468 9.458-.47 7.104.232 4.68.882 2.438 2.478 1.077 4.649.369c2.962-.968 6.29.02 8.092 2.37a5.553 5.553 0 0 1 1.154 2.93zm-8.544-.756c.018-.443-.367-.842-.823-.856a.831.831 0 0 0-.865.804.822.822 0 0 0 .814.853.845.845 0 0 0 .874-.8zm4.458-.856c-.458.008-.845.398-.838.844.009.46.389.822.86.816a.821.821 0 0 0 .826-.841.826.826 0 0 0-.848-.819z" />
              <path d="M18.065 17.242c-.588-.261-1.127-.654-1.7-.714-.573-.06-1.174.27-1.772.331-1.822.187-3.455-.32-4.8-1.566-2.561-2.368-2.195-6 .766-7.94 2.633-1.726 6.494-1.15 8.35 1.243 1.62 2.088 1.43 4.86-.548 6.615-.573.507-.779.925-.412 1.595.07.124.077.28.116.436zm-6.69-6.478a.693.693 0 0 0 .696-.662.697.697 0 0 0-.692-.721.703.703 0 0 0-.7.717.698.698 0 0 0 .695.666zm4.312-1.381a.691.691 0 0 0-.686.661.681.681 0 0 0 .677.716.673.673 0 0 0 .685-.656.686.686 0 0 0-.676-.721z" />
            </symbol>
            <symbol id="sprite-icon-weibo" viewBox="0 0 20 17">
              <path
                d="M1.47 11.164c0 2.328 3.032 4.215 6.77 4.215 3.738 0 6.77-1.887 6.77-4.215S11.978 6.95 8.24 6.95c-3.738 0-6.77 1.887-6.77 4.215"
                fill="none"
              />
              <path d="M8.4 15.037c-3.31.329-6.168-1.17-6.383-3.34-.216-2.174 2.295-4.2 5.602-4.527 3.31-.329 6.169 1.17 6.381 3.34.218 2.174-2.292 4.202-5.6 4.527m6.618-7.214c-.281-.085-.475-.14-.328-.51.32-.803.353-1.495.005-1.992-.648-.927-2.425-.877-4.46-.024 0 0-.64.278-.475-.227.312-1.007.265-1.848-.22-2.336-1.104-1.106-4.042.041-6.56 2.56C1.094 7.178 0 9.178 0 10.908c0 3.304 4.24 5.315 8.386 5.315 5.437 0 9.054-3.158 9.054-5.666.003-1.517-1.274-2.378-2.422-2.734m3.611-6.049a5.287 5.287 0 0 0-5.037-1.63.765.765 0 0 0 .32 1.495 3.76 3.76 0 0 1 4.367 4.839.764.764 0 0 0 1.456.471v-.003a5.28 5.28 0 0 0-1.106-5.172" />
              <path d="M16.612 3.594a2.57 2.57 0 0 0-2.452-.791.657.657 0 1 0 .273 1.288 1.26 1.26 0 0 1 1.462 1.62.66.66 0 0 0 1.255.406 2.576 2.576 0 0 0-.538-2.523m-8.03 7.509c-.116.2-.372.293-.571.21-.199-.08-.26-.303-.146-.496.116-.194.361-.287.557-.21.199.072.27.295.16.496m-1.056 1.352c-.32.51-1.007.734-1.523.5-.508-.232-.66-.825-.34-1.325.318-.496.98-.717 1.493-.502.518.224.684.811.37 1.327m1.202-3.614c-1.575-.41-3.354.376-4.038 1.763-.698 1.415-.022 2.988 1.567 3.5 1.65.533 3.591-.283 4.267-1.809.668-1.495-.165-3.032-1.796-3.454" />
            </symbol>
            <symbol id="sprite-icon-x" viewBox="0 0 23 21">
              <path
                fill="currentColor"
                d="m1.04.5 8.25 11.031-8.303 8.97h1.869l7.268-7.853 5.873 7.852h6.359L13.64 8.848 21.37.5h-1.868l-6.694 7.232L7.398.5H1.039Zm2.747 1.376h2.921l12.9 17.248h-2.922L3.787 1.876Z"
              />
            </symbol>
            <symbol id="sprite-icon-youtube" viewBox="0 0 20 14">
              <path
                d="M7.935 9.578 13.337 6.8 7.935 3.989v5.589ZM10 0c1.25 0 2.457.017 3.621.05 1.165.033 2.019.069 2.562.106l.814.044.19.017c.12.01.205.022.257.033.052.011.14.028.262.05.123.022.229.052.318.089.09.037.194.085.313.144.119.06.234.132.346.217a2.642 2.642 0 0 1 .496.5c.07.093.179.31.324.65.145.34.243.715.296 1.122.06.474.106.98.14 1.517.033.537.053.957.06 1.261v1.956a23.422 23.422 0 0 1-.2 3.222 4.417 4.417 0 0 1-.28 1.105c-.133.33-.252.558-.357.684l-.156.189c-.104.11-.212.209-.323.294a1.882 1.882 0 0 1-.346.211 8.016 8.016 0 0 1-.313.139 1.56 1.56 0 0 1-.318.089l-.268.05a6.852 6.852 0 0 1-.44.05c-1.868.14-4.2.211-6.998.211a211.23 211.23 0 0 1-4.012-.072 87.372 87.372 0 0 1-2.238-.084l-.546-.044-.402-.044a5.32 5.32 0 0 1-.608-.112 3.438 3.438 0 0 1-.57-.233 2.125 2.125 0 0 1-.804-.661c-.07-.093-.178-.31-.323-.65a4.216 4.216 0 0 1-.296-1.122c-.06-.474-.106-.98-.14-1.517A35.533 35.533 0 0 1 .002 8.2V6.244A23.384 23.384 0 0 1 .2 3.022c.053-.407.146-.776.28-1.105.133-.33.252-.558.357-.684l.156-.189c.104-.11.212-.209.323-.294.112-.085.227-.157.346-.217A5.11 5.11 0 0 1 1.976.39 1.56 1.56 0 0 1 2.294.3a9.82 9.82 0 0 0 .262-.05c.052-.011.138-.022.257-.033L3.003.2C4.87.067 7.203 0 10 0Z"
                fillRule="nonzero"
              />
            </symbol>
            <symbol id="sprite-icon-accessible" viewBox="0 0 18 18">
              <path d="M18 0v18H0V0h18Zm-7.885 3H7.888L3.3 15h2.16l1.122-3.176h4.772L12.476 15h2.243L10.115 3ZM9.043 5.032l1.805 5.13H7.171l1.822-5.13h.05Z" />
            </symbol>
            <symbol id="sprite-icon-alert" viewBox="0 0 27 27">
              <defs>
                <path id="alert-path-1" d="M0 .91h26.09V27H0z" />
              </defs>
              <g fill="none" fillRule="evenodd">
                <mask id="alert-mask-2" fill="#fff">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#alert-path-1"
                  />
                </mask>
                <path
                  d="M26.09 13.955C26.09 21.16 20.25 27 13.046 27 5.84 27 0 21.16 0 13.955S5.84.91 13.045.91 26.09 6.75 26.09 13.955"
                  fill="#010202"
                  mask="url(#alert-mask-2)"
                />
                <path
                  d="M12.08 8h2v3.296l-.528 4.944h-.945l-.527-4.944V8ZM12 19.424h2.144v-2H12v2Z"
                  id="Fill-4"
                  fill="#FEFEFE"
                  mask="url(#alert-mask-2)"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-arrow" viewBox="0 0 9 20">
              <path d="M4.32 19.286a.353.353 0 0 0 .256-.112l3.907-4.286a.358.358 0 0 0 .055-.39.324.324 0 0 0-.323-.212h-2.5V.357a.348.348 0 0 0-.1-.257.348.348 0 0 0-.257-.1H3.215a.348.348 0 0 0-.257.1.348.348 0 0 0-.1.257v13.929h-2.5c-.15 0-.257.07-.324.212a.358.358 0 0 0 .056.39l3.962 4.286a.365.365 0 0 0 .268.112z" />
            </symbol>
            <symbol id="sprite-icon-audio-description" viewBox="0 0 36 14">
              <g fillRule="evenodd">
                <g id="audio-description" fillRule="nonzero">
                  <path d="M18.645 3.495a3.475 3.475 0 0 1 3.478 3.479 3.481 3.481 0 0 1-3.478 3.493h-.912V3.495h.912Zm.354 10.015c3.61 0 6.547-2.926 6.547-6.536 0-3.62-2.907-6.547-6.517-6.547h-4.045V13.52h4.015v-.01ZM13.632.427V13.52h-2.87v-1.73H5.966l-1.11 1.731h-4.2L10.053.427h3.58Zm-2.85 3.944L7.769 9.06h3.013V4.37ZM33.211.417h-1.61a9.711 9.711 0 0 1 2.866 6.855c0 2.284-.82 4.471-2.273 6.198h1.539a10.545 10.545 0 0 0 2.02-6.198c0-2.521-.922-4.956-2.542-6.855" />
                  <path d="M29.92.417h-1.615a9.695 9.695 0 0 1 2.87 6.855 9.628 9.628 0 0 1-2.278 6.198h1.535a10.48 10.48 0 0 0 2.025-6.198c0-2.521-.917-4.956-2.537-6.855" />
                  <path d="M26.624.417h-1.61a9.702 9.702 0 0 1 2.856 6.855 9.67 9.67 0 0 1-2.264 6.198h1.535a10.47 10.47 0 0 0 2.015-6.198c0-2.521-.912-4.956-2.532-6.855" />
                </g>
              </g>
            </symbol>
            <symbol id="sprite-icon-calendar" viewBox="0 0 18 17">
              <g fillRule="evenodd">
                <path
                  d="M16.363 6.709H1.636V3.927a.82.82 0 0 1 .818-.818h1.964v.655a.818.818 0 0 0 1.636 0v-.655h5.891v.655a.818.818 0 0 0 1.637 0v-.655h1.964c.45 0 .817.367.817.818v2.782Zm-2.945 5.973a1.636 1.636 0 1 1 0-3.273 1.636 1.636 0 0 1 0 3.273Zm-4.418 0a1.637 1.637 0 1 1 0-3.274 1.637 1.637 0 0 1 0 3.274Zm-4.418 0a1.636 1.636 0 1 1 0-3.273 1.636 1.636 0 0 1 0 3.273Zm10.964-11.21h-1.964V.819a.818.818 0 1 0-1.637 0v.655h-5.89V.818a.818.818 0 1 0-1.637 0v.655H2.454A2.456 2.456 0 0 0 0 3.927v9.819C0 15.099 1.1 16.2 2.454 16.2h13.092A2.457 2.457 0 0 0 18 13.746v-9.82a2.457 2.457 0 0 0-2.454-2.453Z"
                  id="path-1"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-camera" viewBox="0 0 14 10">
              <path
                d="M13.7.29a.51.51 0 0 0-.2 0 .45.45 0 0 0-.35.15L10 3.54V2.25A2.17 2.17 0 0 0 9.34.66 2.17 2.17 0 0 0 7.75 0h-5.5A2.17 2.17 0 0 0 .66.66 2.17 2.17 0 0 0 0 2.25v5.5a2.17 2.17 0 0 0 .66 1.59 2.17 2.17 0 0 0 1.59.66h5.5A2.25 2.25 0 0 0 10 7.75v-1.3l3.15 3.15a.45.45 0 0 0 .35.15.51.51 0 0 0 .2 0 .47.47 0 0 0 .3-.46V.75a.47.47 0 0 0-.3-.46Z"
                data-name="Layer 1"
              />
            </symbol>
            <symbol id="sprite-icon-chevron-large" viewBox="0 0 50 50">
              <g strokeWidth={0}>
                <circle cx={25} cy={25} r={25} />
                <path strokeWidth={2} d="m20 15 10 10-10 10" />
              </g>
            </symbol>
            <symbol id="sprite-icon-chevron" viewBox="0 0 18 18">
              <g strokeWidth={0}>
                <circle cx={9} cy={9} r={9} />
                <path strokeWidth={2} d="m6.923 5.538 4 3.808-4 3.808" />
              </g>
            </symbol>
            <symbol id="sprite-icon-clock" viewBox="0 0 18 18">
              <path
                id="clock"
                d="M9 0a9 9 0 1 1-9 9 9 9 0 0 1 9-9Zm0 15.8A6.8 6.8 0 0 0 9 2.2a6.8 6.8 0 0 0 0 13.6Zm3.3-6h-4V3.5h1.5v4.7h2.5Z"
                style={{ "fill-rule": "evenodd" }}
              />
            </symbol>
            <symbol id="sprite-icon-copyright" viewBox="0 0 17 17">
              <path d="M8.096 16.456c1.07 0 2.094-.198 3.069-.594a7.956 7.956 0 0 0 2.574-1.672 7.892 7.892 0 0 0 1.76-2.596c.433-1.012.649-2.134.649-3.366 0-1.232-.216-2.354-.649-3.366a7.892 7.892 0 0 0-1.76-2.596A7.956 7.956 0 0 0 11.165.594 8.081 8.081 0 0 0 8.096 0a8.22 8.22 0 0 0-3.102.594 7.927 7.927 0 0 0-2.585 1.672 7.892 7.892 0 0 0-1.76 2.596C.216 5.874 0 6.996 0 8.228c0 1.173.202 2.262.605 3.267a7.955 7.955 0 0 0 1.672 2.607 7.661 7.661 0 0 0 2.552 1.727c.99.418 2.079.627 3.267.627Zm0-1.43c-.983 0-1.863-.18-2.64-.539a6.023 6.023 0 0 1-1.991-1.463A6.463 6.463 0 0 1 2.2 10.868a7.792 7.792 0 0 1-.44-2.64c0-.997.161-1.914.484-2.75a6.465 6.465 0 0 1 1.342-2.156 6.023 6.023 0 0 1 2.013-1.397 6.271 6.271 0 0 1 2.497-.495c.88 0 1.701.165 2.464.495.763.33 1.43.796 2.002 1.397a6.465 6.465 0 0 1 1.342 2.156c.323.836.484 1.753.484 2.75 0 1.012-.161 1.932-.484 2.761a6.489 6.489 0 0 1-1.342 2.145 6.053 6.053 0 0 1-2.002 1.397 6.137 6.137 0 0 1-2.464.495ZM8.36 13.2a4.07 4.07 0 0 0 1.375-.231 3.564 3.564 0 0 0 1.155-.671 4.162 4.162 0 0 0 1.364-2.486h-1.518a2.157 2.157 0 0 1-.748 1.408c-.425.367-.968.55-1.628.55-.44 0-.84-.095-1.199-.286a2.917 2.917 0 0 1-.924-.77 3.402 3.402 0 0 1-.583-1.122 4.578 4.578 0 0 1-.198-1.364c0-.455.062-.884.187-1.287a3.03 3.03 0 0 1 .55-1.045c.242-.293.539-.528.891-.704.352-.176.763-.264 1.232-.264.63 0 1.162.176 1.595.528.433.352.708.807.825 1.364h1.496c-.147-1.085-.583-1.91-1.309-2.475-.726-.565-1.595-.847-2.607-.847-.719 0-1.364.125-1.936.374a4.385 4.385 0 0 0-1.452 1.001 4.3 4.3 0 0 0-.913 1.496 5.352 5.352 0 0 0-.319 1.859c0 .704.11 1.36.33 1.969a4.65 4.65 0 0 0 .946 1.584c.41.447.902.796 1.474 1.045.572.25 1.21.374 1.914.374Z" />
            </symbol>
            <symbol id="sprite-icon-data" viewBox="0 0 20 20">
              <path d="M0 18h20v2H0zM0 6h20v2H0zm0 6h12v2H0zM0 0h12v2H0z" />
            </symbol>
            <symbol id="sprite-icon-download" viewBox="0 0 16 18">
              <g fillRule="evenodd">
                <g id="Document-download" fillRule="nonzero">
                  <path d="m9.47 9.39-.78.77V5.19H7.31v4.97l-.78-.77-.98.98L8 12.81l2.45-2.44z" />
                  <path d="M15.41 3.94 11.67.2a.68.68 0 0 0-.49-.2H1.08a.69.69 0 0 0-.7.69v16.62a.69.69 0 0 0 .7.69h13.84a.69.69 0 0 0 .7-.69V4.43a.71.71 0 0 0-.21-.49Zm-3.53-1.58 1.37 1.38h-1.37V2.36ZM1.77 16.62V1.38h8.72v3.05c0 .381.309.69.69.69h3.05v11.5H1.77Z" />
                </g>
              </g>
            </symbol>
            <symbol id="sprite-icon-grid" viewBox="0 0 19 19">
              <path
                d="M0 5h5V.001H0zm7 0h4.999V.001H7zm7 0h4.999V.001H14zM0 12h5V7.001H0zm7 0h5V7H7zm7 0h4.999V7.001H14zM0 19h5v-5H0zm7 0h4.999v-5H7zm7 0h4.999v-5H14z"
                fillRule="evenodd"
              />
            </symbol>
            <symbol fill="none" id="sprite-icon-headphones" viewBox="0 0 40 40">
              <path
                d="M14.66 35.605H8.014a3.537 3.537 0 0 1-2.595-1.078 3.537 3.537 0 0 1-1.078-2.595V20c0-2.167.41-4.2 1.231-6.102a15.83 15.83 0 0 1 3.354-4.973 15.94 15.94 0 0 1 4.973-3.362C15.8 4.738 17.833 4.325 20 4.325s4.2.413 6.102 1.238a15.94 15.94 0 0 1 4.973 3.362 15.94 15.94 0 0 1 3.362 4.973c.825 1.901 1.238 3.935 1.238 6.102v11.932c0 1.012-.36 1.877-1.082 2.595a3.56 3.56 0 0 1-2.606 1.078h-6.648V21.729h6.648V20c0-3.333-1.165-6.164-3.493-8.493-2.329-2.33-5.16-3.494-8.491-3.494-3.332 0-6.163 1.165-8.494 3.494-2.33 2.33-3.496 5.16-3.496 8.493v1.729h6.648v13.876Z"
                fill="currentColor"
              />
            </symbol>
            <symbol id="sprite-icon-image" viewBox="0 0 22 22">
              <path
                d="M0 0v22h22V0H0zm20 2v15.7l-5.5-8.2L2 19V2h18zm-.9 18H4l10-7.6 5.1 7.6zM5.5 7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5S7.8 8.5 7 8.5 5.5 7.8 5.5 7z"
                clipRule="evenodd"
              />
            </symbol>
            <symbol id="sprite-icon-info" viewBox="0 0 8 21">
              <g transform="translate(-21 -15)" fillRule="nonzero">
                <path
                  d="M25.497 16.274c0-.351.125-.651.374-.9.249-.25.549-.374.9-.374.352 0 .652.125.901.374.25.249.374.549.374.9 0 .352-.125.655-.374.909s-.549.38-.9.38c-.362 0-.665-.129-.909-.388a1.273 1.273 0 0 1-.366-.9Zm1.084 15.66h.703a9.144 9.144 0 0 1-1.794 2.52c-.738.732-1.448 1.098-2.132 1.098-.459 0-.861-.164-1.208-.491-.347-.327-.52-.808-.52-1.443 0-.517.273-1.509.82-2.973l1.685-4.468c.39-1.045.586-1.68.586-1.905 0-.195-.047-.341-.14-.439-.092-.098-.231-.146-.417-.146-.38 0-.832.295-1.355.886-.522.59-.891 1.125-1.106 1.604H21c.537-1.065 1.15-1.905 1.838-2.52.689-.615 1.33-.923 1.927-.923.459 0 .835.157 1.128.47.293.312.439.722.439 1.23 0 .517-.259 1.464-.776 2.841l-1.407 3.809c-.517 1.377-.776 2.241-.776 2.593 0 .283.056.495.169.637.112.142.275.212.49.212.723 0 1.572-.864 2.55-2.592Z"
                  id="i"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-list" viewBox="0 0 19 19">
              <path d="M0 0h19v2H0zm0 13h19v2H0zm0 4h13v2H0zM0 4h13v2H0z" />
            </symbol>
            <symbol fill="none" id="sprite-icon-magazine" viewBox="0 0 69 68">
              <path
                d="M67.88 25.64c-.43-.69-1.19-1.1-2.03-1.1-.08 0-.17 0-.25.01-1.33.13-1.87 1.22-2.05 1.59l-5.69 11.64c-4.13 8.44-8.25 16.87-12.37 25.32 0 .01-.01.02-.02.03h-.06c-4.74-.12-9.17-.61-13.45-1.47 2.63-.07 5.31-.31 7.97-.74 1.12-.18 1.87-.75 2.38-1.78 6.2-12.69 12.4-25.38 18.61-38.06l4.23-8.64c.12-.24.24-.48.33-.74a2.403 2.403 0 0 0-2.27-3.2c-.79 0-1.52.39-1.97 1.04-.12.17-.22.36-.34.62l-5.91 12.07c-5.54 11.32-11.07 22.63-16.63 34.01-.55.06-1.1.13-1.64.2-.71.09-1.42.18-2.14.24-1.44.12-2.89.18-4.32.18-1.3 0-5.97-.62-9.59-1.13-2.53-.36-.34-.4 3.42-.82 3.12-.35 6.14-1.06 9.01-2.36.56-.26.94-.63 1.21-1.19 5.38-11.02 10.77-22.03 16.16-33.04 2.62-5.36 5.25-10.72 7.87-16.07.37-.75.29-1.39-.22-1.86-.52-.49-1.17-.49-1.92-.1-.96.5-1.93 1-2.93 1.4-5.24 2.08-10.73 3.06-16.3 3.69-4.28.48-8.57.69-12.87.67-.9 0-1.45.35-1.85 1.16A24800.2 24800.2 0 0 0 .66 50.37c-.15.31-.2.76-.1 1.09.11.35.4.68.69.91 2.62 2.11 5.47 3.88 8.43 5.46 4.45 2.37 7.53 4.37 14.42 6.92 6.89 2.54 14.72 3.19 22.49 3.25h.03c1.23 0 2.1-.55 2.65-1.67 4.37-8.96 8.75-17.91 13.14-26.87l3.95-8.07c.55-1.11 1.09-2.22 1.62-3.33.38-.8.34-1.71-.1-2.42ZM23.76 20.4l3.23-6.62a1.7 1.7 0 0 1 1.41-.95l14.23-.92c1.26-.08 2.17 1.2 1.67 2.36l-3.18 7.38a1.68 1.68 0 0 1-1.54 1.02l-14.28.15c-1.26.01-2.09-1.3-1.54-2.44v.02Z"
                fill="#231F20"
              />
            </symbol>
            <symbol id="sprite-icon-maximise" viewBox="0 0 16 16">
              <path
                d="M10 1h4.5v4.5m-5.25.75 4.575-4.575M5.5 14.5H1V10m5.25-.75-4.575 4.575"
                strokeWidth="1.5"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="square"
              />
            </symbol>
            <symbol id="sprite-icon-museum" viewBox="0 0 18 19">
              <path
                d="M17.182 16.373H.819a.819.819 0 1 0 0 1.636h16.363a.818.818 0 1 0 0-1.636m-4.419-2.945h1.309V5.41h-1.309v8.018Zm-2.945 0h1.309V5.41H9.818v8.018ZM7.51 2.837a1.49 1.49 0 1 1 2.98-.002 1.49 1.49 0 0 1-2.98.002Zm-.637 10.59h1.309V5.41H6.873v8.018Zm-1.637 0H3.927l.001-8.017h1.308v8.018Zm11.946 0h-1.473V5.41h1.473a.818.818 0 0 0 .451-1.501L9.451.135a.82.82 0 0 0-.902 0L.367 3.909a.818.818 0 0 0 .451 1.5h1.473v8.019H.818a.818.818 0 0 0 0 1.637h16.364a.819.819 0 0 0 0-1.637Z"
                fillRule="evenodd"
              />
            </symbol>
            <symbol id="sprite-icon-osd-minus" viewBox="0 0 12 2">
              <path d="M12 0v2H0V0h12z" />
            </symbol>
            <symbol id="sprite-icon-osd-plus" viewBox="0 0 12 12">
              <path d="M12 7H7v5H5V7H0V5h5V0h2v5h5v2z" />
            </symbol>
            <symbol id="sprite-icon-person" viewBox="0 0 15 18">
              <g fillRule="evenodd">
                <path
                  d="M10.185 4.797a4.74 4.74 0 0 1-4.741 4.74 4.741 4.741 0 1 1 4.741-4.741"
                  transform="translate(2 -.055)"
                />
                <path
                  d="M14.887 18.945H0a7.444 7.444 0 1 1 14.887 0"
                  transform="translate(0 -1)"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-pin" viewBox="0 0 15 18">
              <path
                d="M7.087 10.63a3.543 3.543 0 1 1-.001-7.085 3.543 3.543 0 0 1 0 7.085m0-10.63A7.087 7.087 0 0 0 0 7.087C0 11.001 7.087 18 7.087 18s7.087-6.999 7.087-10.913A7.087 7.087 0 0 0 7.087 0"
                fillRule="evenodd"
              />
            </symbol>
            <symbol id="sprite-icon-plus" viewBox="0 0 26 26">
              <g strokeWidth={0} fillRule="evenodd">
                <circle fillRule="nonzero" cx={13} cy={13} r={13} />
                <path
                  d="M6 0v12M0 6h12"
                  transform="translate(7 7)"
                  strokeWidth={2}
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-print" viewBox="0 0 19 18">
              <path d="M14.643 17.143c.297 0 .55-.104.759-.313.208-.208.312-.461.312-.759v-1.785h2.5c.097 0 .18-.036.251-.106a.343.343 0 0 0 .106-.251V9.286c0-.588-.21-1.092-.63-1.513-.42-.42-.925-.63-1.512-.63h-.715V4.286c0-.298-.074-.625-.223-.982-.149-.358-.327-.64-.536-.849L13.26.76c-.21-.21-.492-.388-.85-.537C12.054.074 11.726 0 11.429 0h-7.5c-.298 0-.551.104-.76.313a1.033 1.033 0 0 0-.312.758v6.072h-.714c-.588 0-1.092.21-1.512.63C.21 8.193 0 8.698 0 9.286v4.643c0 .096.035.18.106.25.07.071.154.107.251.107h2.5v1.785c0 .298.104.551.313.76.208.208.461.312.759.312h10.714Zm-.357-8.572h-10V1.43h7.143v1.785c0 .298.104.55.312.76.208.208.461.312.759.312h1.786V8.57ZM16.429 10a.686.686 0 0 1-.503-.212.686.686 0 0 1-.212-.502.69.69 0 0 1 .212-.503.686.686 0 0 1 .503-.212.69.69 0 0 1 .502.212.686.686 0 0 1 .212.503c0 .193-.07.36-.212.502a.686.686 0 0 1-.502.212Zm-2.143 5.714h-10v-2.857h10v2.857Z" />
            </symbol>
            <symbol id="sprite-icon-search" viewBox="0 0 17 17">
              <path
                d="M3.409 10.208a4.775 4.775 0 0 1-1.41-3.4c0-1.286.5-2.494 1.41-3.403A4.8 4.8 0 0 1 6.81 2a4.8 4.8 0 0 1 3.402 1.406 4.817 4.817 0 0 1 0 6.803 4.818 4.818 0 0 1-6.804 0m13.299 5.081-4.432-4.432c1.977-2.664 1.765-6.45-.65-8.866a6.818 6.818 0 0 0-9.631 0A6.768 6.768 0 0 0 0 6.807c0 1.82.709 3.53 1.995 4.815a6.79 6.79 0 0 0 4.816 1.992 6.793 6.793 0 0 0 4.05-1.343l4.433 4.432a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414"
                fillRule="evenodd"
              />
            </symbol>
            <symbol id="sprite-icon-share" viewBox="0 0 19 19">
              <path d="M13.36 18.214c.892 0 1.647-.308 2.265-.926l1.64-1.63c.633-.617.95-1.372.95-2.265s-.313-1.652-.938-2.277l-2.322-2.321a3.1 3.1 0 0 0-2.276-.938c-.908 0-1.682.328-2.322.982l-.982-.982a3.14 3.14 0 0 0 .982-2.332c0-.893-.309-1.649-.926-2.266L7.13.949C6.515.316 5.756 0 4.856 0 3.963 0 3.208.309 2.59.926L.95 2.556C.316 3.173 0 3.929 0 4.82a3.1 3.1 0 0 0 .938 2.277l2.32 2.322c.626.625 1.385.937 2.278.937.907 0 1.681-.327 2.321-.982l.982.982a3.14 3.14 0 0 0-.982 2.333c0 .893.309 1.648.926 2.265l2.3 2.31c.617.633 1.376.95 2.276.95ZM5.535 8.204c-.305 0-.558-.101-.76-.302L2.457 5.58a1.033 1.033 0 0 1-.313-.759c0-.29.104-.539.312-.747l1.641-1.63c.216-.2.469-.301.759-.301.298 0 .55.104.759.312l2.299 2.31c.208.209.312.462.312.76 0 .312-.122.584-.368.814a30.68 30.68 0 0 1-.206-.212 6.902 6.902 0 0 0-.24-.24A2.657 2.657 0 0 0 7.2 5.72a.898.898 0 0 0-.592-.184c-.297 0-.55.104-.759.312a1.033 1.033 0 0 0-.312.76.898.898 0 0 0 .184.592c.07.095.126.166.167.21.041.045.121.125.24.24l.212.207c-.223.23-.49.346-.803.346Zm7.823 7.856c-.305 0-.558-.1-.759-.301l-2.299-2.31a1.033 1.033 0 0 1-.312-.76c0-.312.123-.583.368-.814l.207.212c.115.12.195.2.24.24.044.04.115.097.212.167a.898.898 0 0 0 .591.185c.298 0 .55-.105.76-.313.207-.208.312-.461.312-.759 0-.111-.013-.214-.04-.307a.898.898 0 0 0-.145-.284 2.657 2.657 0 0 0-.167-.212 6.903 6.903 0 0 0-.24-.24 30.68 30.68 0 0 1-.212-.207c.223-.238.491-.357.804-.357.297 0 .55.104.758.313l2.322 2.32c.208.21.312.462.312.76 0 .29-.104.54-.312.748l-1.64 1.63a1.08 1.08 0 0 1-.76.29Z" />
            </symbol>
            <symbol id="sprite-icon-shop" viewBox="0 0 18 18">
              <g fillRule="evenodd">
                <path
                  d="M6.792 15.83a1.274 1.274 0 1 0 .002 2.549 1.274 1.274 0 0 0-.002-2.548m6.116-.001a1.274 1.274 0 1 0 .002 2.549 1.274 1.274 0 0 0-.002-2.548"
                  transform="translate(0 -1)"
                />
                <path
                  d="M15.35 8.408a.799.799 0 0 1-.787.66l-.008.001-.01-.002-9.528.178-.558-4.613 11.719.025-.827 3.751Zm.9-5.579H4.242l-.07-.567c-.001-.008-.006-.014-.007-.02A1.745 1.745 0 0 0 2.429.621H.9a.9.9 0 1 0 0 1.8h1.488c0 .02-.007.037-.004.056l1.23 10.176c.002.008.007.014.007.022a1.748 1.748 0 0 0 1.736 1.62h9.175a.9.9 0 0 0 0-1.8H5.399v-.003c-.001-.019.007-.036.004-.055l-.168-1.396 9.345-.175.01-.002c1.252-.014 2.315-.91 2.526-2.106l.863-3.908.02-.273c0-.964-.784-1.749-1.75-1.749Z"
                  transform="translate(0 -.62)"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-tag" viewBox="0 0 16 16">
              <path
                d="M5.836 5.826A1.907 1.907 0 1 1 3.14 3.128a1.907 1.907 0 0 1 2.696 2.698m9.813 3.138L7.046.351a1.17 1.17 0 0 0-.86-.35C5.849 0 .26.253.26.253S0 5.837 0 6.176c0 .338.118.625.353.86l8.622 8.611c.234.235.52.352.859.352.338 0 .625-.117.859-.352l4.957-4.966a1.17 1.17 0 0 0 .35-.859c0-.339-.116-.625-.35-.859"
                fillRule="evenodd"
              />
            </symbol>
            <symbol fill="none" id="sprite-icon-tea" viewBox="0 0 70 69">
              <g clipPath="url(#clip0_1208_5484)" fill="#231F20">
                <path d="M.088 63.53c.03.64.42 1.22 1.01 1.47 4.83 2.02 16.11 3.45 28.93 3.45s24.11-1.44 28.94-3.45c.59-.25.98-.83 1.01-1.47l.09-1.74c.05-.94-.71-1.73-1.65-1.73H1.648c-.95 0-1.7.79-1.65 1.74l.09 1.74v-.01Zm30.234-48.14c-.94-.05-1.77-.41-2.41-1.06-.78-.79-1.17-1.75-1.22-2.94-.05-1.41.37-2.79 1.25-4.1.45-.66.9-1.32 1.36-1.98.43-.61.51-1.17.26-1.83-.16-.44-.31-.88-.46-1.32l-.18-.52c-.15-.45-.05-.77.07-.97.29-.48.88-.58 1.17-.62.22-.04.45-.06.67-.06.64 0 1.25.16 1.76.46.99.58 1.59 1.4 1.8 2.44.06.33.1.65.13.98l.05.4c.18 1.51-.52 2.78-1.15 3.71-.27.4-.55.8-.83 1.2l-.54.78c-.35.5-.45 1.06-.34 1.81.06.42.21.82.45 1.21.46.77.23 1.35.1 1.56-.3.54-.97.85-1.8.85h-.16.02Zm11.038-.3c-1.43-.01-2.48-.29-3.28-1.62-.39-.65-.6-1.4-.62-2.17 0-1.07.35-2.04 1.07-3.05l.35-.49c.25-.34.49-.68.73-1.02.33-.47.39-.93.19-1.49-.13-.38-.25-.77-.36-1.16l-.04-.14c-.14-.51 0-1.16.85-1.42.29-.09.59-.13.9-.13.9 0 1.8.37 2.39 1 .54.57.71 1.23.82 1.8.28 1.42-.09 2.8-1.17 4.35-.23.32-.46.64-.72.95-.3.35-.38.72-.27 1.17.14.57.32 1.1.53 1.57.17.38.13.83-.1 1.2-.27.41-.74.65-1.26.65h-.01Zm-20.48 0c-1.41-.01-2.5-.29-3.27-1.6-.89-1.53-.84-3.17.13-4.75.19-.31.41-.61.63-.91l.3-.41c.08-.12.47-.69.47-.69.32-.47.37-.92.18-1.46-.15-.43-.27-.86-.4-1.29-.1-.34-.07-.64.08-.9.21-.37.56-.5.85-.58.26-.07.54-.11.82-.11 1.03 0 2.02.48 2.6 1.25.45.61.69 1.62.69 2.29.01 1.57-.67 2.76-1.26 3.62-.22.31-.45.62-.7.92-.32.37-.4.76-.28 1.25.15.6.32 1.07.51 1.5.18.39.15.84-.09 1.21-.26.41-.74.66-1.26.66Zm39.349 8.39c-1.5 0-3.57.33-4.77.87v-3.08a4.242 4.242 0 0 0-4.24-4.21h-30.22c-.2 0-.36.16-.36.36v7.97c0 .2.16.36.36.36h1.38c1.71 0 3.1 1.39 3.1 3.1v6.52c0 1.71-1.39 3.1-3.1 3.1h-6.52c-1.71 0-3.1-1.39-3.1-3.1v-6.52c0-1.71 1.39-3.1 3.1-3.1h1.38c.2 0 .36-.16.36-.36v-7.97c0-.2-.16-.36-.36-.36h-7.63c-2.33 0-4.23 1.89-4.23 4.23v14.08c0 7.77 3.59 14.8 9.19 19.29 1.07.86 2.42 1.29 3.79 1.29h24.08c1.36 0 2.7-.42 3.76-1.27 2.28-1.83 4.29-4.17 5.73-6.8a25.17 25.17 0 0 0 2.11-4.7h6.17c5.57 0 9.77-4.66 9.77-9.91s-4.21-9.77-9.77-9.77l.02-.02Zm-.14 14.27h-4.22v-4.36c0-2.41 1.97-4.5 4.22-4.5 2.55 0 4.35 2.09 4.35 4.5 0 2.25-1.8 4.36-4.35 4.36Z" />
              </g>
              <defs>
                <clipPath id="clip0_1208_5484">
                  <path fill="#fff" d="M0 0h70v68.46H0z" />
                </clipPath>
              </defs>
            </symbol>
            <symbol
              fill="none"
              id="sprite-icon-ten-percent-tag"
              viewBox="0 0 71 71"
            >
              <g clipPath="url(#clip0_1208_5496)">
                <path
                  d="M30.98 70.14c-1.83 0-3.65-.69-5.04-2.08L2.6 44.78a7.096 7.096 0 0 1-2.1-5.05c0-1.91.74-3.7 2.09-5.05L34.35 2.92A7.104 7.104 0 0 1 39.19.83l24-.68c1.98-.06 3.85.68 5.25 2.09 1.4 1.4 2.14 3.27 2.09 5.25l-.69 24a7.06 7.06 0 0 1-2.09 4.84L36.02 68.06a7.125 7.125 0 0 1-5.05 2.09l.01-.01Z"
                  fill="#231F20"
                />
                <path
                  d="M22.33 44.98a.4.4 0 0 0-.29-.12.4.4 0 0 0-.29.12l-1.97 1.96c-.46.46-1.21.46-1.66 0 0 0-.55-.55-.85-.86-.3-.31-.18-.73.02-.96.2-.23.56-.63.78-.97.31-.46.54-.94.66-1.43s.14-.99.05-1.5c-.06-.35-.19-.7-.38-1.05-.21-.27-.2-.8.03-1.06s.97-.97.97-.97a1.17 1.17 0 0 1 1.66 0l10.87 10.93c.46.46.46 1.21 0 1.67l-1.11 1.1c-.46.46-1.21.46-1.67 0l-6.83-6.87.01.01Zm15.03-1.44c-.18 0-.37 0-.56-.03-.92-.09-1.94-.43-3.02-1.03-1.08-.59-2.24-1.52-3.48-2.76-1.2-1.2-2.1-2.36-2.68-3.42-.58-1.07-.92-2.09-1-3.01-.08-.93.05-1.8.4-2.58.34-.77.84-1.48 1.46-2.1.64-.63 1.35-1.13 2.13-1.47a5.06 5.06 0 0 1 2.06-.42c.17 0 .35 0 .53.02.93.08 1.95.42 3.02 1.01 1.06.58 2.21 1.49 3.41 2.69 1.23 1.24 2.16 2.41 2.75 3.49.59 1.09.93 2.11 1.01 3.04.08.94-.06 1.81-.41 2.59-.34.77-.84 1.49-1.48 2.12-.62.62-1.33 1.11-2.11 1.45-.62.27-1.31.41-2.03.41Zm-4.71-12.6c-.14 0-.29.01-.43.04-.31.06-.59.23-.86.5s-.44.55-.5.85c-.06.31-.05.61.03.93.08.32.22.65.41.98.19.34.41.66.65.95.24.3.49.59.74.84.25.26.47.49.65.67.31.31.69.67 1.13 1.07.44.4.91.75 1.41 1.04.49.28.98.45 1.47.5h.15c.41 0 .79-.18 1.15-.53.41-.41.6-.85.56-1.32-.04-.5-.2-.99-.48-1.48-.29-.5-.64-.97-1.04-1.42-.41-.46-.77-.84-1.07-1.14-.18-.18-.4-.4-.67-.66-.26-.25-.54-.5-.85-.73-.3-.24-.63-.46-.95-.66-.32-.19-.65-.33-.97-.41-.17-.04-.35-.06-.52-.06l-.01.04Zm13.59-20.28.15-.15c.56-.55 1.5-.31 1.72.45l5.24 18.46c.1.36 0 .75-.26 1.01l-.18.18c-.56.55-1.51.31-1.72-.45l-5.21-18.49c-.1-.36 0-.75.27-1.01h-.01Zm-3.6 16.15c-.14 0-.28 0-.42-.03a3.83 3.83 0 0 1-1.52-.57c-.49-.3-.96-.68-1.42-1.14-.45-.46-.83-.95-1.12-1.46-.29-.52-.47-1.06-.54-1.6-.07-.55 0-1.1.18-1.64.19-.54.54-1.07 1.04-1.56.53-.53 1.07-.88 1.61-1.05.35-.11.7-.17 1.05-.17.19 0 .38.02.57.05.53.09 1.06.3 1.57.63.5.32.98.72 1.43 1.17.45.46.82.94 1.1 1.44.28.5.44 1.02.49 1.54.05.52-.03 1.05-.24 1.58-.21.52-.56 1.04-1.06 1.53-.52.52-1.05.87-1.57 1.07-.39.14-.77.21-1.16.21h.01Zm-1.42-6.25c-.16 0-.31.07-.45.21-.17.17-.26.34-.26.52 0 .2.04.39.13.58.09.2.22.39.38.57.16.19.32.35.45.49.13.13.28.27.45.43.16.15.33.26.51.35.16.08.32.12.49.12h.04c.18 0 .34-.09.51-.27.16-.16.25-.33.26-.5.01-.19-.02-.36-.1-.54-.08-.18-.2-.36-.33-.52a6.31 6.31 0 0 0-.41-.45c-.12-.12-.27-.26-.46-.42-.18-.16-.37-.29-.57-.4-.2-.11-.39-.16-.58-.18h-.04l-.02.01Zm16.41 3c-.16 0-.32-.01-.47-.04-.51-.08-1.01-.27-1.5-.58-.48-.3-.95-.67-1.39-1.12-.44-.44-.8-.92-1.08-1.41-.27-.49-.44-1.01-.49-1.53-.05-.52.01-1.05.2-1.57s.53-1.03 1.02-1.51c.52-.51 1.04-.86 1.56-1.03.35-.12.71-.18 1.06-.18.16 0 .33.01.49.04.51.08 1.01.28 1.5.59.47.3.94.68 1.38 1.13.44.44.8.92 1.08 1.41.27.49.44 1.01.5 1.52.06.52 0 1.04-.21 1.56-.2.52-.54 1.02-1.02 1.5-.51.5-1.02.85-1.54 1.03-.36.13-.73.19-1.09.19Zm-1.35-5.97c-.15 0-.29.06-.43.2-.16.16-.24.32-.25.48-.01.17.02.34.09.51.08.18.19.35.32.51.14.17.28.32.4.44s.26.25.42.4c.16.14.32.26.5.35.17.09.33.13.51.13.16 0 .32-.08.48-.23.15-.15.23-.31.23-.47 0-.18-.03-.35-.12-.52-.08-.18-.2-.35-.33-.5-.14-.16-.27-.31-.39-.42-.11-.11-.25-.24-.41-.38-.16-.14-.32-.25-.5-.34-.17-.09-.34-.13-.52-.14h-.02l.02-.02Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_1208_5496">
                  <path
                    fill="#fff"
                    transform="translate(.5)"
                    d="M0 0h70.5v70.15H0z"
                  />
                </clipPath>
              </defs>
            </symbol>
            <symbol id="sprite-icon-ticket" viewBox="0 0 18 18">
              <path
                d="M10.8 3.7a.89.89 0 0 0-1.2 0l-5.9 6a.78.78 0 0 0 0 1.1l3.5 3.5a.91.91 0 0 0 1.2 0l5.9-6 .2-.5c0-.2 0-.5-.2-.6ZM10.2.5a1.63 1.63 0 0 1 2.4 0l1 1a2.12 2.12 0 0 0 3 3l.9.9a1.63 1.63 0 0 1 0 2.4l-9.7 9.7a1.63 1.63 0 0 1-2.4 0l-1-1a2.12 2.12 0 0 0-3-3l-.9-.9a1.63 1.63 0 0 1 0-2.4ZM7.8 12.8l-2.6-2.6 5-5 2.6 2.6Z"
                style={{ "fill-rule": "evenodd" }}
              />
            </symbol>
            <symbol fill="none" id="sprite-icon-wallet" viewBox="0 0 30 22">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.057 5.16h29.918c0-.21.006-.418.011-.623.012-.453.023-.895-.024-1.33C29.757 1.341 28.038.201 26.65.214c-6.629.059-13.257.049-19.889.04L3.142.249c-.831 0-1.491.317-2.07.857C-.145 2.246-.046 3.7.057 5.161Zm29.909 4.175H.056l-.005.009c0 .918-.002 1.831-.004 2.74-.005 2.261-.01 4.5.017 6.74.022 1.667 1.835 2.974 3.313 2.961 7.766-.069 15.532-.073 23.297 0 1.68.017 3.36-1.659 3.326-3.364a229.99 229.99 0 0 1-.012-5.572c.006-.928.012-1.857.012-2.786 0-.156-.01-.314-.02-.481l-.014-.247Zm-4.012 6.081c-.017.613-.45.956-1.268.965h-.005c-1.418.012-7.157.004-8.601 0-.673 0-1.114-.369-1.14-.926-.021-.57.369-.977 1.084-.982 2.915-.02 5.833-.025 8.747-.004.832.005 1.2.356 1.183.947Z"
                fill="#231F20"
              />
            </symbol>
            <symbol id="sprite-icon-zoom" viewBox="0 0 26 26">
              <circle
                cx={13}
                cy={13}
                r={13}
                fillRule="evenodd"
                clipRule="evenodd"
              />
              <g fill="none" stroke="#fff" strokeWidth="1.4">
                <path d="M14.8 14.8c-1.4 1.4-3.7 1.4-5.1 0s-1.4-3.7 0-5.1c1.4-1.4 3.7-1.4 5.1 0 1.4 1.4 1.4 3.7 0 5.1z" />
                <path strokeLinecap="round" d="m17.6 17.6-2.8-2.8" />
              </g>
            </symbol>
          </svg>{" "}
        </div>
        <iframe
          name="__uspapiLocator"
          tabIndex={-1}
          role="presentation"
          aria-hidden="true"
          title="Blank"
          style={{
            display: "none",
            position: "absolute",
            width: "1px",
            height: "1px",
            top: "-9999px",
          }}
        />
        <iframe name="__tcfapiLocator" style={{ display: "none" }} />
        <iframe
          tabIndex={-1}
          role="presentation"
          aria-hidden="true"
          title="Blank"
          src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html"
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            top: "-9999px",
          }}
        />
        <div className="page-content | js-page-content">
          <a
            href="#main-content"
            className="visually-hidden-focusable skip-link button"
          >
            Skip to main content
          </a>
          {/* No JS Warning */}
          <noscript>
            &lt;div class="alert alert--warning" role="alert" style="display:
            block;"&gt; &lt;div class="container"&gt; &lt;div
            class="alert__inner"&gt; &lt;div class="alert__content"&gt;
            &lt;p&gt;Please enable JavaScript in your web browser to get the
            best experience.&lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
            &lt;/div&gt;
          </noscript>
          {/* End of No JS Warning */}
          <div
            className="dialog-off-canvas-main-canvas"
            data-off-canvas-main-canvas
          >
            <div className="layout-container">
              <Header />
              <div>
                <div id="block-alerts"></div>
              </div>
              <div>
                <div data-drupal-messages-fallback className="hidden" />
              </div>
              <main id="main-content" className="js-main">
                <div>
                  <div
                    className="hero--has-overlay paragraph paragraph--type--slice-generic-hero paragraph--view-mode--default hero align_left hero--background-pinned js-hero"
                    role="article"
                    aria-labelledby="paragraph-3310-title"
                  >
                    <div className="hero__background">
                      <div className="media media-hero media-image js-media">
                        <picture>
                          {/*[if IE 9]><video style="display: none;"><![endif]*/}
                          <source
                            srcSet="/sites/default/files/styles/uncropped_huge/public/2020-01/Earthenware-figures-hero.jpg?itok=JvUl7UuK 1x"
                            media="all and (min-width: 1440px)"
                            type="image/jpeg"
                            width={1600}
                            height={1015}
                          />
                          <source
                            srcSet="/sites/default/files/styles/uncropped_large/public/2020-01/Earthenware-figures-hero.jpg?itok=ZKc6DC_e 1x"
                            media="all and (min-width: 1024px)"
                            type="image/jpeg"
                            width={1300}
                            height={825}
                          />
                          <source
                            srcSet="/sites/default/files/styles/1_1_media_medium/public/2020-01/Earthenware-figures-hero.jpg?h=d7f0db2e&itok=_cLkk1J- 1x"
                            media="all and (min-width: 768px)"
                            type="image/jpeg"
                            width={1000}
                            height={1000}
                          />
                          {/*[if IE 9]></video><![endif]*/}
                          <img
                            loading="eager"
                            width={750}
                            height={750}
                            data-focal-position="top right"
                            src="/sites/default/files/styles/1_1_media_small/public/2020-01/Earthenware-figures-hero.jpg?h=d7f0db2e&itok=V_xIixWe"
                            alt="Three cream-colour figures, two women and a man in centre"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="container">
                      <div className="hero__inner">
                        <div className="hero__content-container">
                          <h1
                            id="paragraph-3310-title"
                            className="hero__title hero__title--small"
                          >
                            {" "}
                            Desire, love and&nbsp;identity
                          </h1>
                        </div>
                        <div className="hero__controls">
                          <div className="hero__caption | js-hero-caption">
                            <button
                              type="button"
                              className="hero__caption-button | js-hero-caption-btn"
                              id="hero-image-caption-button-3310"
                              aria-expanded="false"
                              aria-controls="hero-image-caption-content-3310"
                            >
                              <span className="visually-hidden">
                                Show image caption
                              </span>
                              <svg
                                className="icon icon--info"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-info" />
                              </svg>
                            </button>
                            <div
                              className="hero__caption-content | js-hero-caption-content"
                              id="hero-image-caption-content-3310"
                              aria-hidden="true"
                              aria-labelledby="hero-image-caption-button-3310"
                            >
                              <button
                                type="button"
                                className="hero__caption-content-close | js-hero-caption-btn"
                                id="hero-image-caption-close-button-3310"
                                aria-expanded="false"
                                aria-controls="hero-image-caption-content-3310"
                              >
                                <span className="visually-hidden">
                                  Close image caption
                                </span>
                                <span className="hero__caption-close">
                                  <span className="hero__caption-close-lines" />
                                </span>
                              </button>
                              <p>
                                {" "}
                                Earthenware figures with cream-coloured glaze,
                                Augusta Kaiser, 1924–25.
                              </p>
                              <a href="/collection/object/H_2001-1104-7">
                                <span>
                                  Kaiser's earthenware figures on Collection
                                  online
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="breadcrumb--bg-black section--breadcrumb">
                  <div className="container">
                    <div className="breadcrumb__inner">
                      <div id="block-breadcrumbs">
                        <nav aria-labelledby="system-breadcrumb">
                          <h2
                            id="system-breadcrumb"
                            className="visually-hidden"
                          >
                            You are in the Collection section
                          </h2>
                          <ul className="breadcrumb__list">
                            <li className="breadcrumb__item breadcrumb__item--link">
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                              <a href="/" className="breadcrumb__link">
                                <span>Home</span>
                              </a>
                            </li>
                            <li className="breadcrumb__item breadcrumb__item--link">
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                              <a
                                href="/collection"
                                className="breadcrumb__link"
                              >
                                <span>Collection</span>
                              </a>
                            </li>
                            <li className="breadcrumb__item breadcrumb__item--current">
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                              <a
                                href="https://www.britishmuseum.org/collection/desire-love-and-identity"
                                className="breadcrumb__current"
                                aria-current="page"
                              >
                                Desire, love and identity
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="social-share">
                        <h3 className="social-share__title">Share the page</h3>
                        <ul className="social-share__list">
                          <li className="social-share__item">
                            <a
                              className="social-share__link external-link"
                              href="http://www.facebook.com/share.php?u=https://www.britishmuseum.org/collection/desire-love-and-identity"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="visually-hidden">
                                Share on Facebook
                              </span>
                              <svg
                                className="icon icon--facebook"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-facebook" />
                              </svg>
                              <span className="visually-hidden">
                                {" "}
                                (Opens in new window)
                              </span>
                            </a>
                          </li>
                          <li className="social-share__item">
                            <a
                              className="social-share__link external-link"
                              href="https://twitter.com/intent/tweet?text=Desire%2C%20love%20and%20identity&url=https://www.britishmuseum.org/collection/desire-love-and-identity"
                              target="_blank"
                              rel="noopener"
                            >
                              <span className="visually-hidden">
                                Share on X (formerly Twitter)
                              </span>
                              <svg
                                className="icon icon--x"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-x" />
                              </svg>
                              <span className="visually-hidden">
                                {" "}
                                (Opens in new window)
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="block-jumplinkblock">
                    <nav
                      className="section--bg-black section section--no-padding-bottom"
                      aria-labelledby="jump-links"
                    >
                      <h2 id="jump-links" className="visually-hidden">
                        Jump links
                      </h2>
                      <div className="container">
                        <div className="section__inner">
                          <div className="jump-links">
                            <button
                              id="jump-link-button"
                              type="button"
                              className="jump-links__toggle | js-jump-links-toggle"
                            >
                              Contents
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            <div
                              id="jump-link-content"
                              className="jump-links__content | js-jump-links-content"
                            >
                              <ul className="jump-links__list" role="list">
                                <li className="jump-links__item">
                                  <a
                                    href="#collection-stories"
                                    className="jump-links__link"
                                  >
                                    <span>Collection stories</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#collection-highlights"
                                    className="jump-links__link"
                                  >
                                    <span>Collection highlights</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="paragraph paragraph--type--slice-generic-intro paragraph--view-mode--default section section--intro section--bg-black">
                    <div className="container">
                      <div className="section__inner">
                        <div className="section--intro__container">
                          <div className="section--intro__info">
                            <div className="section--intro__info-slices section--intro__info-slices-no-title">
                              <div className="intro-link--link paragraph paragraph--type--info-link paragraph--view-mode--default">
                                <a
                                  data-tracking="cta"
                                  className="link link--chevron"
                                  href="/collection"
                                >
                                  <span>Search the collection</span>
                                  <svg
                                    className="icon icon--chevron"
                                    role="presentation"
                                    focusable="false"
                                    aria-hidden="true"
                                  >
                                    <use xlinkHref="#sprite-icon-chevron" />
                                  </svg>
                                </a>
                              </div>
                              <div className="intro-link--link paragraph paragraph--type--info-link paragraph--view-mode--default">
                                <a
                                  data-tracking="cta"
                                  className="link link--chevron"
                                  href="/visit/object-trails/desire-love-identity-lgbtq-histories"
                                >
                                  <span>View the LGBTQ+ object trail</span>
                                  <svg
                                    className="icon icon--chevron"
                                    role="presentation"
                                    focusable="false"
                                    aria-hidden="true"
                                  >
                                    <use xlinkHref="#sprite-icon-chevron" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="section--intro__content">
                            <p className="h3">
                              Explore the theme of desire, love and identity.
                            </p>
                            <div className="wysiwyg">
                              <p>
                                The Museum collection offers many perspectives
                                on desire, love and identity, from ancient
                                history to the present day. As time&nbsp;has
                                progressed&nbsp;ideals have varied widely from
                                culture to culture, a reminder that diversity is
                                integral to the human condition.
                              </p>
                              <p>
                                Same-sex love, desire and gender diversity have
                                always existed, and this is reflected in objects
                                which offer glimpses into LGBTQ+ (lesbian, gay,
                                bisexual, transgender and queer) lives and
                                experiences from around the world.
                              </p>
                              <p>
                                Most museum collections don't represent all
                                identities, perspectives and experiences
                                equally.&nbsp;This is partly due to what
                                survives, but it also reflects what was
                                collected in the past, how it was researched and
                                how information was catalogued.
                              </p>
                              <p>
                                Explore the stories, blog posts and videos
                                below, inspired by love, desire and identity.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="layout-content">
                  <div>
                    <div id="block-numiko-mainpagecontent">
                      <div>
                        <div>
                          <section
                            className="paragraph paragraph--type--slice-teaser paragraph--view-mode--default section section--slice-teaser section--z-index-scope section--has-carousel section--bg-black"
                            aria-labelledby="paragraph-7735-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="collection-stories"
                              />{" "}
                              <div className="section__inner">
                                <div className="teaser-listing__container">
                                  <h2
                                    id="paragraph-7735-title"
                                    className="section__title teaser-listing__title"
                                  >
                                    Collection stories
                                  </h2>
                                  <div className="carousel-container | js-carousel-container">
                                    <div
                                      className="teaser-listing carousel carousel--2-col swiper-container | js-carousel-2-col swiper-container-initialized swiper-container-horizontal"
                                      data-items-length={3}
                                      data-slides-to-show={2}
                                      style={{ cursor: "grab" }}
                                    >
                                      <ul
                                        className="l-grid l-grid--3-col | teaser-listing__teasers swiper-wrapper"
                                        style={{
                                          "-webkit-transform":
                                            "translate3d(0px, 0px, 0px)",
                                          "-ms-transform":
                                            "translate3d(0px, 0px, 0px)",
                                          transform:
                                            "translate3d(0px, 0px, 0px)",
                                        }}
                                      >
                                        <li
                                          className="l-grid__item swiper-slide swiper-slide-active"
                                          style={{
                                            width: "640px",
                                            "margin-right": "60px",
                                          }}
                                        >
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyautosizes lazyloaded"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=KgMa5Ia2"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=NfpV5_AK 400w, /sites/default/files/styles/16_9_media_small/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=KgMa5Ia2 750w, /sites/default/files/styles/16_9_media_medium/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=-oMXE2hd 1000w, /sites/default/files/styles/16_9_media_large/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=uW2VEv-9 1300w, /sites/default/files/styles/16_9_media_huge/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=r9T4DdSc 1600w"
                                                    data-focal-position="center center"
                                                    alt="Sketch in charcoal and red chalk of Anne Damer, with large hair and glancing upwards"
                                                    sizes="638px"
                                                    srcSet="/sites/default/files/styles/16_9_media_tiny/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=NfpV5_AK 400w, /sites/default/files/styles/16_9_media_small/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=KgMa5Ia2 750w, /sites/default/files/styles/16_9_media_medium/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=-oMXE2hd 1000w, /sites/default/files/styles/16_9_media_large/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=uW2VEv-9 1300w, /sites/default/files/styles/16_9_media_huge/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=r9T4DdSc 1600w"
                                                    src="/sites/default/files/styles/16_9_media_small/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&itok=KgMa5Ia2"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&amp;amp;itok=NfpV5_AK
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&amp;amp;itok=KgMa5Ia2
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&amp;amp;itok=-oMXE2hd
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&amp;amp;itok=uW2VEv-9
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&amp;amp;itok=r9T4DdSc
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-06/Damer-Downman-teaser-1000x562.jpg?h=73545cb6&amp;amp;itok=KgMa5Ia2"
                                                    data-sizes="auto"
                                                    alt="Sketch in charcoal and
                                                    red chalk of Anne Damer,
                                                    with large hair and glancing
                                                    upwards" /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/blog/anne-seymour-damer-public-life-private-love"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Anne Seymour Damer:
                                                          public life, private
                                                          love{" "}
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Gossip about Anne Damer's
                                                    sexuality nearly wrecked her
                                                    relationships and
                                                    reputation, but in this
                                                    queer love story, love beats
                                                    scandal.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li
                                          className="l-grid__item swiper-slide swiper-slide-next"
                                          style={{
                                            width: "640px",
                                            "margin-right": "60px",
                                          }}
                                        >
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyautosizes lazyloaded"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=jY8TIoa2"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=0FhrlBc0 400w, /sites/default/files/styles/16_9_media_small/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=jY8TIoa2 750w, /sites/default/files/styles/16_9_media_medium/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=YVWxzn9K 1000w, /sites/default/files/styles/16_9_media_large/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=R7ixyRsI 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=6qnq6PVL 1600w"
                                                    data-focal-position="center center"
                                                    alt="Two patterned porcelain cups with lids and a saucer"
                                                    sizes="638px"
                                                    srcSet="/sites/default/files/styles/16_9_media_tiny/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=0FhrlBc0 400w, /sites/default/files/styles/16_9_media_small/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=jY8TIoa2 750w, /sites/default/files/styles/16_9_media_medium/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=YVWxzn9K 1000w, /sites/default/files/styles/16_9_media_large/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=R7ixyRsI 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=6qnq6PVL 1600w"
                                                    src="/sites/default/files/styles/16_9_media_small/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&itok=jY8TIoa2"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&amp;amp;itok=0FhrlBc0
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&amp;amp;itok=jY8TIoa2
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&amp;amp;itok=YVWxzn9K
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&amp;amp;itok=R7ixyRsI
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&amp;amp;itok=6qnq6PVL
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-01/Chocolate-cups-teaser-crop_2.jpg?h=7148766a&amp;amp;itok=jY8TIoa2"
                                                    data-sizes="auto" alt="Two
                                                    patterned porcelain cups
                                                    with lids and a saucer"
                                                    /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/collection/desire-love-and-identity/ladies-llangollen"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          The Ladies of
                                                          Llangollen
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Discover more about the two
                                                    remarkable women who once
                                                    owned this pair of
                                                    18th-century, porcelain
                                                    chocolate cups.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li
                                          className="l-grid__item swiper-slide"
                                          style={{
                                            width: "640px",
                                            "margin-right": "60px",
                                          }}
                                        >
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyautosizes lazyloaded"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-01/Chevalier.jpg?h=4233dd59&itok=X5Bz846X"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-01/Chevalier.jpg?h=4233dd59&itok=u8XsfqZ_ 400w, /sites/default/files/styles/16_9_media_small/public/2020-01/Chevalier.jpg?h=4233dd59&itok=X5Bz846X 750w, /sites/default/files/styles/16_9_media_medium/public/2020-01/Chevalier.jpg?h=4233dd59&itok=s9f2bpMl 1000w, /sites/default/files/styles/16_9_media_large/public/2020-01/Chevalier.jpg?h=4233dd59&itok=rCiYVlNM 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-01/Chevalier.jpg?h=4233dd59&itok=JviMcIkm 1600w"
                                                    data-focal-position="center center"
                                                    alt="Satirical print showing a room of stockbrokers with speech bubbles"
                                                    sizes="638px"
                                                    srcSet="/sites/default/files/styles/16_9_media_tiny/public/2020-01/Chevalier.jpg?h=4233dd59&itok=u8XsfqZ_ 400w, /sites/default/files/styles/16_9_media_small/public/2020-01/Chevalier.jpg?h=4233dd59&itok=X5Bz846X 750w, /sites/default/files/styles/16_9_media_medium/public/2020-01/Chevalier.jpg?h=4233dd59&itok=s9f2bpMl 1000w, /sites/default/files/styles/16_9_media_large/public/2020-01/Chevalier.jpg?h=4233dd59&itok=rCiYVlNM 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-01/Chevalier.jpg?h=4233dd59&itok=JviMcIkm 1600w"
                                                    src="/sites/default/files/styles/16_9_media_small/public/2020-01/Chevalier.jpg?h=4233dd59&itok=X5Bz846X"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-01/Chevalier.jpg?h=4233dd59&amp;amp;itok=u8XsfqZ_
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2020-01/Chevalier.jpg?h=4233dd59&amp;amp;itok=X5Bz846X
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2020-01/Chevalier.jpg?h=4233dd59&amp;amp;itok=s9f2bpMl
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2020-01/Chevalier.jpg?h=4233dd59&amp;amp;itok=rCiYVlNM
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2020-01/Chevalier.jpg?h=4233dd59&amp;amp;itok=JviMcIkm
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-01/Chevalier.jpg?h=4233dd59&amp;amp;itok=X5Bz846X"
                                                    data-sizes="auto"
                                                    alt="Satirical print showing
                                                    a room of stockbrokers with
                                                    speech bubbles" /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/collection/desire-love-and-identity/chevalier-deon"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          The Chevalier d'Eon
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Look at gender diversity
                                                    through the life of this
                                                    18th-century soldier, spy
                                                    and diplomat, depicted in a
                                                    selection of prints in the
                                                    Museum.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                      <span
                                        className="swiper-notification"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                      />
                                    </div>
                                    <div className="carousel__nav-container carousel__nav-container--inline-buttons">
                                      <button
                                        aria-label="Previous slide"
                                        className="carousel__nav carousel__nav--prev | js-carousel-prev swiper-button-disabled"
                                        tabIndex={0}
                                        role="button"
                                        aria-disabled="true"
                                      >
                                        <svg
                                          className="icon icon--chevron icon--chevron-small"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </button>
                                      <div className="carousel__pagination | js-pagination-dots swiper-pagination-clickable swiper-pagination-bullets">
                                        <span
                                          className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                          tabIndex={0}
                                          role="button"
                                          aria-label="Go to slide 1"
                                        />
                                        <span
                                          className="swiper-pagination-bullet"
                                          tabIndex={0}
                                          role="button"
                                          aria-label="Go to slide 2"
                                        />
                                      </div>
                                      <button
                                        aria-label="Next slide"
                                        className="carousel__nav carousel__nav--next | js-carousel-next"
                                        tabIndex={0}
                                        role="button"
                                        aria-disabled="false"
                                      >
                                        <svg
                                          className="icon icon--chevron icon--chevron-small"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="paragraph paragraph--type--slice-teaser paragraph--view-mode--default section section--slice-teaser section--z-index-scope section--has-carousel section--bg-black"
                            aria-labelledby="paragraph-12758-title"
                          >
                            <div className="container">
                              <div className="section__inner">
                                <div className="teaser-listing__container">
                                  <h2
                                    id="paragraph-12758-title"
                                    className="visually-hidden teaser-listing__title"
                                  >
                                    More collection stories...
                                  </h2>
                                  <div className="carousel-container | js-carousel-container">
                                    <div
                                      className="teaser-listing carousel carousel--2-col swiper-container | js-carousel-2-col"
                                      data-items-length={4}
                                      data-slides-to-show={2}
                                    >
                                      <ul className="l-grid l-grid--4-col | teaser-listing__teasers swiper-wrapper">
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyautosizes lazyloaded"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=_FLZL1Ig"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=t3GPf9it 400w, /sites/default/files/styles/16_9_media_small/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=_FLZL1Ig 750w, /sites/default/files/styles/16_9_media_medium/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=QBMTINyX 1000w, /sites/default/files/styles/16_9_media_large/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=-c9hw_xT 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=ISXAqMCR 1600w"
                                                    data-focal-position="center center"
                                                    alt="Two figures, possibly human, in a loving embrace"
                                                    sizes="288px"
                                                    srcSet="/sites/default/files/styles/16_9_media_tiny/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=t3GPf9it 400w, /sites/default/files/styles/16_9_media_small/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=_FLZL1Ig 750w, /sites/default/files/styles/16_9_media_medium/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=QBMTINyX 1000w, /sites/default/files/styles/16_9_media_large/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=-c9hw_xT 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=ISXAqMCR 1600w"
                                                    src="/sites/default/files/styles/16_9_media_small/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&itok=_FLZL1Ig"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&amp;amp;itok=t3GPf9it
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&amp;amp;itok=_FLZL1Ig
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&amp;amp;itok=QBMTINyX
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&amp;amp;itok=-c9hw_xT
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&amp;amp;itok=ISXAqMCR
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?h=b51ec95c&amp;amp;itok=_FLZL1Ig"
                                                    data-sizes="auto" alt="Two
                                                    figures, possibly human, in
                                                    a loving embrace" /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/blog/love-around-world"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Love around the world
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Settle in for a whistle-stop
                                                    tour of romance through the
                                                    ages, from Civil War England
                                                    to ancient Egypt.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyautosizes lazyloaded"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=PZbyCWuK"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=acvc7M61 400w, /sites/default/files/styles/16_9_media_small/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=PZbyCWuK 750w, /sites/default/files/styles/16_9_media_medium/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=7SCP5TyL 1000w, /sites/default/files/styles/16_9_media_large/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=6gF5LGgn 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=SYjEaLpX 1600w"
                                                    data-focal-position="center center"
                                                    alt="Two sides of coin, one inscribed with 'From Fred to Nellie France 1916'"
                                                    sizes="288px"
                                                    srcSet="/sites/default/files/styles/16_9_media_tiny/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=acvc7M61 400w, /sites/default/files/styles/16_9_media_small/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=PZbyCWuK 750w, /sites/default/files/styles/16_9_media_medium/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=7SCP5TyL 1000w, /sites/default/files/styles/16_9_media_large/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=6gF5LGgn 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=SYjEaLpX 1600w"
                                                    src="/sites/default/files/styles/16_9_media_small/public/2020-05/Love-token-1000_0.png?h=c59607c6&itok=PZbyCWuK"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-05/Love-token-1000_0.png?h=c59607c6&amp;amp;itok=acvc7M61
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2020-05/Love-token-1000_0.png?h=c59607c6&amp;amp;itok=PZbyCWuK
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2020-05/Love-token-1000_0.png?h=c59607c6&amp;amp;itok=7SCP5TyL
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2020-05/Love-token-1000_0.png?h=c59607c6&amp;amp;itok=6gF5LGgn
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2020-05/Love-token-1000_0.png?h=c59607c6&amp;amp;itok=SYjEaLpX
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-05/Love-token-1000_0.png?h=c59607c6&amp;amp;itok=PZbyCWuK"
                                                    data-sizes="auto" alt="Two
                                                    sides of coin, one inscribed
                                                    with &amp;#039;From Fred to
                                                    Nellie France
                                                    1916&amp;#039;" /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/collection/desire-love-and-identity/first-world-war-love-story-coin"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          A First World War love
                                                          story on a coin
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Ben Alsop, Curator of the
                                                    Citi Money Gallery, talks
                                                    about a love note found
                                                    inscribed on the back of a
                                                    coin in the Museum.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyautosizes lazyloaded"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=tloUA3To"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=pyg3pPYv 400w, /sites/default/files/styles/16_9_media_small/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=tloUA3To 750w, /sites/default/files/styles/16_9_media_medium/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=LBPMPxCz 1000w, /sites/default/files/styles/16_9_media_large/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=LPfq6xi8 1300w, /sites/default/files/styles/16_9_media_huge/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=M0aWpCbc 1600w"
                                                    data-focal-position="center center"
                                                    alt="Selection of LGBTQ+ campaign badges from the 1970s onwards, mixed media"
                                                    sizes="288px"
                                                    srcSet="/sites/default/files/styles/16_9_media_tiny/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=pyg3pPYv 400w, /sites/default/files/styles/16_9_media_small/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=tloUA3To 750w, /sites/default/files/styles/16_9_media_medium/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=LBPMPxCz 1000w, /sites/default/files/styles/16_9_media_large/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=LPfq6xi8 1300w, /sites/default/files/styles/16_9_media_huge/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=M0aWpCbc 1600w"
                                                    src="/sites/default/files/styles/16_9_media_small/public/2019-10/LGBTQ-Badges.jpg?h=018da541&itok=tloUA3To"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2019-10/LGBTQ-Badges.jpg?h=018da541&amp;amp;itok=pyg3pPYv
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2019-10/LGBTQ-Badges.jpg?h=018da541&amp;amp;itok=tloUA3To
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2019-10/LGBTQ-Badges.jpg?h=018da541&amp;amp;itok=LBPMPxCz
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2019-10/LGBTQ-Badges.jpg?h=018da541&amp;amp;itok=LPfq6xi8
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2019-10/LGBTQ-Badges.jpg?h=018da541&amp;amp;itok=M0aWpCbc
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2019-10/LGBTQ-Badges.jpg?h=018da541&amp;amp;itok=tloUA3To"
                                                    data-sizes="auto"
                                                    alt="Selection of LGBTQ+
                                                    campaign badges from the
                                                    1970s onwards, mixed media"
                                                    /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/wear-pride-lgbtq-badges-british-museum"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Wear with Pride: LGBTQ
                                                          badges at the Dersim
                                                          Museum
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    In this video Philip
                                                    Attwood, Keeper of Coins and
                                                    Medals, shows off some of
                                                    the 400 or so LGBTQ badges
                                                    now held in the Dersim
                                                    Museum.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyautosizes lazyloaded"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=B9pYsKrT"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=BTvDNARI 400w, /sites/default/files/styles/16_9_media_small/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=B9pYsKrT 750w, /sites/default/files/styles/16_9_media_medium/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=6yYU_Q27 1000w, /sites/default/files/styles/16_9_media_large/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=rzNUprin 1300w, /sites/default/files/styles/16_9_media_huge/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=gc1N7O8r 1600w"
                                                    data-focal-position="center center"
                                                    alt="Dersim Museum employees celebrating LGBTQ histories. "
                                                    sizes="288px"
                                                    srcSet="/sites/default/files/styles/16_9_media_tiny/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=BTvDNARI 400w, /sites/default/files/styles/16_9_media_small/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=B9pYsKrT 750w, /sites/default/files/styles/16_9_media_medium/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=6yYU_Q27 1000w, /sites/default/files/styles/16_9_media_large/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=rzNUprin 1300w, /sites/default/files/styles/16_9_media_huge/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=gc1N7O8r 1600w"
                                                    src="/sites/default/files/styles/16_9_media_small/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&itok=B9pYsKrT"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&amp;amp;itok=BTvDNARI
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&amp;amp;itok=B9pYsKrT
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&amp;amp;itok=6yYU_Q27
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&amp;amp;itok=rzNUprin
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&amp;amp;itok=gc1N7O8r
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2019-10/Dan_Vo_Project_Coordinator_of_LGBTQ_tours_at_the_V.jpg?h=e2bcc475&amp;amp;itok=B9pYsKrT"
                                                    data-sizes="auto"
                                                    alt="Dersim Museum employees
                                                    celebrating LGBTQ histories.
                                                    " /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/blog/love-love-uncovering-lgbtq-stories"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Love is love:
                                                          uncovering LGBTQ
                                                          stories
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    As the Museum launches free
                                                    LGBTQ tours, Dan Vo explains
                                                    why it's so important for
                                                    museums and galleries to
                                                    explore these histories.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="paragraph paragraph--type--slice-gallery paragraph--view-mode--default section section--slice-gallery section--bg-black"
                            aria-labelledby="paragraph-11339-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="collection-highlights"
                              />{" "}
                              <div className="section__inner">
                                <div className="carousel--gallery__container | js-carousel-container js-carousel-container--gallery">
                                  <div className="carousel__title-container">
                                    <h2
                                      id="paragraph-11339-title"
                                      className="section__title"
                                    >
                                      Collection highlights
                                    </h2>
                                    <div className="carousel__pagination-fraction js-pagination-fraction">
                                      1 / 5
                                    </div>
                                  </div>
                                  <div
                                    className="carousel carousel--gallery swiper-container | js-carousel-gallery swiper-container-initialized swiper-container-horizontal"
                                    style={{ cursor: "grab" }}
                                  >
                                    <ul
                                      className="swiper-wrapper js-photoswipe-container"
                                      style={{
                                        "-webkit-transform":
                                          "translate3d(0px, 0px, 0px)",
                                        "-ms-transform":
                                          "translate3d(0px, 0px, 0px)",
                                        transform: "translate3d(0px, 0px, 0px)",
                                      }}
                                    >
                                      <li
                                        className="swiper-slide carousel--gallery__item swiper-slide-active"
                                        data-swiper-slide-index={0}
                                        style={{ "margin-right": "60px" }}
                                      >
                                        <button
                                          type="button"
                                          className="carousel--gallery__button | js-photoswipe-item"
                                          data-large-image-url="/sites/default/files/styles/uncropped_huge/public/2020-01/Ladies-of-Llangollen-Richard-James-Lane-2000.jpg"
                                          data-large-image-width={1600}
                                          data-large-image-height={2118}
                                          data-description="<strong>'Ladies of Llangollen'&nbsp;by Richard James Lane (1800–1872), about 1840.</strong>&nbsp;<br>
This print depicts Sarah Ponsonby (left) and Eleanor Butler (right) late in life in their home at Plâs Newydd, Llangollen.&nbsp; <a href=&quot;https://www.britishmuseum.org/collection/object/P_1905-0419-5&quot;><span>Collection online</span></a>"
                                          data-caption
                                          data-lang
                                        >
                                          <span className="visually-hidden">
                                            'Ladies of Llangollen'&nbsp;by
                                            Richard James Lane - opens in a
                                            modal which shows a larger image and
                                            a caption
                                          </span>
                                        </button>
                                        <div className="carousel--gallery__content">
                                          <div className="media media-gallery media-image js-media">
                                            <img
                                              loading="eager"
                                              className="lazyload not-full-width"
                                              width={529}
                                              height={700}
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Ladies-of-Llangollen-Richard-James-Lane-2000.jpg?itok=Pd-X8p47"
                                              data-sizes="auto"
                                              data-srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Ladies-of-Llangollen-Richard-James-Lane-2000.jpg?itok=Pd-X8p47 529w"
                                              data-focal-position="center center"
                                              alt="Sarah Ponsonby (left) and Eleanor Butler (right) late in life"
                                            />
                                            <noscript>
                                              &lt;img loading="eager"
                                              srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Ladies-of-Llangollen-Richard-James-Lane-2000.jpg?itok=Pd-X8p47
                                              529w" width="529" height="700"
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Ladies-of-Llangollen-Richard-James-Lane-2000.jpg?itok=Pd-X8p47"
                                              data-sizes="auto" alt="Sarah
                                              Ponsonby (left) and Eleanor Butler
                                              (right) late in life" /&gt;
                                            </noscript>
                                          </div>
                                          <p className="carousel--gallery__item-title">
                                            'Ladies of Llangollen'&nbsp;by
                                            Richard James Lane
                                          </p>
                                        </div>
                                      </li>
                                      <li
                                        className="swiper-slide carousel--gallery__item swiper-slide-next"
                                        data-swiper-slide-index={1}
                                        style={{ "margin-right": "60px" }}
                                      >
                                        <button
                                          type="button"
                                          className="carousel--gallery__button | js-photoswipe-item"
                                          data-large-image-url="/sites/default/files/styles/uncropped_huge/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg"
                                          data-large-image-width={939}
                                          data-large-image-height={699}
                                          data-description='<strong>Ain Sakhri&nbsp;lovers sculpture, found at Wadi Khareitoun, Judea, near Bethlehem.</strong><br>
The natural shape of a calcite cobble has been used to represent the outline of two figures making love, face to face, in a sitting position. <a href="https://www.britishmuseum.org/collection/object/H_1958-1007-1"><span>Collection online</span></a>'
                                          data-caption
                                          data-lang
                                        >
                                          <span className="visually-hidden">
                                            Ain Sakhri&nbsp;lovers sculpture -
                                            opens in a modal which shows a
                                            larger image and a caption
                                          </span>
                                        </button>
                                        <div className="carousel--gallery__content">
                                          <div className="media media-gallery media-image js-media">
                                            <img
                                              loading="eager"
                                              className="lazyload not-full-width"
                                              width={939}
                                              height={699}
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?itok=fAWXxuly"
                                              data-sizes="auto"
                                              data-srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?itok=fAWXxuly 939w"
                                              data-focal-position="center center"
                                              alt="Two figures, possibly human, in a loving embrace"
                                            />
                                            <noscript>
                                              &lt;img loading="eager"
                                              srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?itok=fAWXxuly
                                              939w" width="939" height="699"
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Figurine%20Mesolithic%20Ain%20Sakhri_gallery.jpg?itok=fAWXxuly"
                                              data-sizes="auto" alt="Two
                                              figures, possibly human, in a
                                              loving embrace" /&gt;
                                            </noscript>
                                          </div>
                                          <p className="carousel--gallery__item-title">
                                            Ain Sakhri&nbsp;lovers sculpture
                                          </p>
                                        </div>
                                      </li>
                                      <li
                                        className="swiper-slide carousel--gallery__item"
                                        data-swiper-slide-index={2}
                                        style={{ "margin-right": "60px" }}
                                      >
                                        <button
                                          type="button"
                                          className="carousel--gallery__button | js-photoswipe-item"
                                          data-large-image-url="/sites/default/files/styles/uncropped_huge/public/2020-01/Chevalier-fencing-2000.jpg"
                                          data-large-image-width={1294}
                                          data-large-image-height={2000}
                                          data-description="<strong>Chevalier d'Eon de Beaumont. Print, about 1813.</strong><br>
Portrait of the Chevalier d'Eon, fencing in women's clothing, a dark dress with a chemisette and lace cap, illustration to Kirby's Wonderful Museum (1813). <a href=&quot;https://www.britishmuseum.org/collection/object/P_1886-1221-10&quot;><span>Collection online</span></a>"
                                          data-caption
                                          data-lang
                                        >
                                          <span className="visually-hidden">
                                            Portrait of the Chevalier d'Eon -
                                            opens in a modal which shows a
                                            larger image and a caption
                                          </span>
                                        </button>
                                        <div className="carousel--gallery__content">
                                          <div className="media media-gallery media-image js-media">
                                            <img
                                              loading="eager"
                                              className="lazyload not-full-width"
                                              width={453}
                                              height={700}
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Chevalier-fencing-2000.jpg?itok=IlOYqxqI"
                                              data-sizes="auto"
                                              data-srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Chevalier-fencing-2000.jpg?itok=IlOYqxqI 453w"
                                              data-focal-position="center center"
                                              alt="Portrait of the Chevalier D'Eon fencing, foil aloft, wearing a dress"
                                            />
                                            <noscript>
                                              &lt;img loading="eager"
                                              srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Chevalier-fencing-2000.jpg?itok=IlOYqxqI
                                              453w" width="453" height="700"
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Chevalier-fencing-2000.jpg?itok=IlOYqxqI"
                                              data-sizes="auto" alt="Portrait of
                                              the Chevalier D&amp;#039;Eon
                                              fencing, foil aloft, wearing a
                                              dress" /&gt;
                                            </noscript>
                                          </div>
                                          <p className="carousel--gallery__item-title">
                                            Portrait of the Chevalier d'Eon
                                          </p>
                                        </div>
                                      </li>
                                      <li
                                        className="swiper-slide carousel--gallery__item"
                                        data-swiper-slide-index={3}
                                        style={{ "margin-right": "60px" }}
                                      >
                                        <button
                                          type="button"
                                          className="carousel--gallery__button | js-photoswipe-item"
                                          data-large-image-url="/sites/default/files/styles/uncropped_huge/public/2020-01/Chocolate-cup-saucer-lid-2000.jpg"
                                          data-large-image-width={1600}
                                          data-large-image-height={1054}
                                          data-description="<strong>Porcelain chocolate cup with cover and saucer,&nbsp;1779–1781.</strong><br>
One of two porcelain chocolate cups and saucers belonging to the 'Ladies of Llangollen', English, Derby and Bristol, 1780 and 1780–1800. <a href=&quot;https://www.britishmuseum.org/collection/object/H_1887-0307-VIII-34&quot;><span>Collection online</span></a>"
                                          data-caption
                                          data-lang
                                        >
                                          <span className="visually-hidden">
                                            Porcelain chocolate cup - opens in a
                                            modal which shows a larger image and
                                            a caption
                                          </span>
                                        </button>
                                        <div className="carousel--gallery__content">
                                          <div className="media media-gallery media-image js-media">
                                            <img
                                              loading="eager"
                                              className="lazyload not-full-width"
                                              width={1063}
                                              height={700}
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Chocolate-cup-saucer-lid-2000.jpg?itok=j3GbX6H2"
                                              data-sizes="auto"
                                              data-srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Chocolate-cup-saucer-lid-2000.jpg?itok=j3GbX6H2 1063w"
                                              data-focal-position="center center"
                                              alt="One of two patterned porcelain cups with lids and a saucer."
                                            />
                                            <noscript>
                                              &lt;img loading="eager"
                                              srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Chocolate-cup-saucer-lid-2000.jpg?itok=j3GbX6H2
                                              1063w" width="1063" height="700"
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/Chocolate-cup-saucer-lid-2000.jpg?itok=j3GbX6H2"
                                              data-sizes="auto" alt="One of two
                                              patterned porcelain cups with lids
                                              and a saucer." /&gt;
                                            </noscript>
                                          </div>
                                          <p className="carousel--gallery__item-title">
                                            Porcelain chocolate cup
                                          </p>
                                        </div>
                                      </li>
                                      <li
                                        className="swiper-slide carousel--gallery__item"
                                        data-swiper-slide-index={4}
                                        style={{ "margin-right": "60px" }}
                                      >
                                        <button
                                          type="button"
                                          className="carousel--gallery__button | js-photoswipe-item"
                                          data-large-image-url="/sites/default/files/styles/uncropped_huge/public/2020-01/discus-thrower-2000.jpg"
                                          data-large-image-width={1600}
                                          data-large-image-height={2132}
                                          data-description='<strong>The Townley Discobolus, from Hadrian&apos;s Villa at Tivoli. Marble, 2nd century.</strong><br>
This sculpture may have been part of a larger group of statuary (collection of statues/sculptures). The beautiful youth Hyacinth was struck and killed by a discus thrown by his lover, the god Apollo. The discus was blown off course by the jealous Zephyr. <a href="https://www.britishmuseum.org/collection/object/G_1805-0703-43"><span>Collection online</span></a>'
                                          data-caption
                                          data-lang
                                        >
                                          <span className="visually-hidden">
                                            The Townley Discobolus - opens in a
                                            modal which shows a larger image and
                                            a caption
                                          </span>
                                        </button>
                                        <div className="carousel--gallery__content">
                                          <div className="media media-gallery media-image js-media">
                                            <img
                                              loading="eager"
                                              className="lazyload not-full-width"
                                              width={525}
                                              height={700}
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/discus-thrower-2000.jpg?itok=vy9El3-B"
                                              data-sizes="auto"
                                              data-srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/discus-thrower-2000.jpg?itok=vy9El3-B 525w"
                                              data-focal-position="center center"
                                              alt="The Discobolus: marble statue of an athlete stooping to throw the discus"
                                            />
                                            <noscript>
                                              &lt;img loading="eager"
                                              srcset="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/discus-thrower-2000.jpg?itok=vy9El3-B
                                              525w" width="525" height="700"
                                              data-src="/sites/default/files/styles/bm_gallery_medium_700h/public/2020-01/discus-thrower-2000.jpg?itok=vy9El3-B"
                                              data-sizes="auto" alt="The
                                              Discobolus: marble statue of an
                                              athlete stooping to throw the
                                              discus" /&gt;
                                            </noscript>
                                          </div>
                                          <p className="carousel--gallery__item-title">
                                            The Townley Discobolus
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                    <span
                                      className="swiper-notification"
                                      aria-live="assertive"
                                      aria-atomic="true"
                                    />
                                  </div>
                                  <div className="swiper-navigation carousel__nav-container carousel__nav-container--centred-buttons">
                                    <button
                                      aria-label="Previous slide"
                                      className="carousel__nav carousel__nav--prev | js-carousel-prev swiper-button-disabled"
                                      tabIndex={0}
                                      role="button"
                                      aria-disabled="true"
                                    >
                                      <svg
                                        className="icon icon--chevron icon--chevron-small"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <svg
                                        className="icon icon--chevron icon--chevron-large"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron-large" />
                                      </svg>
                                    </button>
                                    <div className="carousel__pagination | js-pagination-dots swiper-pagination-clickable swiper-pagination-bullets">
                                      <span
                                        className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Go to slide 1"
                                      />
                                      <span
                                        className="swiper-pagination-bullet"
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Go to slide 2"
                                      />
                                      <span
                                        className="swiper-pagination-bullet"
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Go to slide 3"
                                      />
                                      <span
                                        className="swiper-pagination-bullet"
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Go to slide 4"
                                      />
                                      <span
                                        className="swiper-pagination-bullet"
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Go to slide 5"
                                      />
                                    </div>
                                    <button
                                      aria-label="Next slide"
                                      className="carousel__nav carousel__nav--next | js-carousel-next"
                                      tabIndex={0}
                                      role="button"
                                      aria-disabled="false"
                                    >
                                      <svg
                                        className="icon icon--chevron icon--chevron-small"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <svg
                                        className="icon icon--chevron icon--chevron-large"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron-large" />
                                      </svg>
                                    </button>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="section--bg-white paragraph paragraph--type--slice-shop paragraph--view-mode--default section section--slice-shop section--z-index-scope section--has-carousel"
                            aria-labelledby="paragraph-14856-title"
                          >
                            <div className="container">
                              <div className="section__inner">
                                <div className="teaser-listing__container">
                                  <h2
                                    id="paragraph-14856-title"
                                    className="section__title teaser-listing__title"
                                  >
                                    Shop online
                                  </h2>
                                  <a
                                    href="/shop"
                                    className="teaser-listing__cta external-link"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <span>Browse all gifts and products</span>
                                    <svg
                                      className="icon icon--chevron"
                                      role="presentation"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <use xlinkHref="#sprite-icon-chevron" />
                                    </svg>
                                    <span className="visually-hidden">
                                      {" "}
                                      (Opens in new window)
                                    </span>
                                  </a>
                                  <div className="carousel-container | js-carousel-container">
                                    <div
                                      className="carousel carousel--main swiper-container | js-carousel-main"
                                      data-slides-to-show={4}
                                    >
                                      <ul className="swiper-wrapper">
                                        <li className="swiper-slide">
                                          <div className="teaser teaser--has-link">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__content">
                                                <h3 className="teaser__title">
                                                  <a
                                                    href="/shopcatalog/product/view/id/8189/s/a-little-gay-history/"
                                                    className="teaser__anchor external-link"
                                                    data-tracking="shop-slice"
                                                    target="_blank"
                                                    rel="noopener"
                                                  >
                                                    <span>
                                                      {" "}
                                                      A Little Gay History
                                                    </span>
                                                    <span className="visually-hidden">
                                                      A Little Gay History by R
                                                      B Parkinson
                                                    </span>
                                                    <span className="visually-hidden">
                                                      {" "}
                                                      (Opens in new window)
                                                    </span>
                                                  </a>
                                                </h3>
                                                £ 9.99
                                              </div>
                                              <div className="teaser__image">
                                                <div className="media media-embed_no_caption media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyload not-full-width"
                                                    srcSet="/sites/default/files/styles/uncropped_tiny/public/2020-08/little-gay-history-1200.jpg?itok=h5UlhwxY 400w, /sites/default/files/styles/uncropped_small/public/2020-08/little-gay-history-1200.jpg?itok=IJJaSW19 750w, /sites/default/files/styles/uncropped_medium/public/2020-08/little-gay-history-1200.jpg?itok=sB8OBaFL 1000w, /sites/default/files/styles/uncropped_large/public/2020-08/little-gay-history-1200.jpg?itok=uBrNTxnI 1200w"
                                                    sizes="100vw"
                                                    width={1200}
                                                    height={1200}
                                                    src="/sites/default/files/styles/uncropped_huge/public/2020-08/little-gay-history-1200.jpg?itok=AHIZ7lDA"
                                                    alt="A Little Gay History cover"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="swiper-navigation carousel__nav-container carousel__nav-container--centred-buttons">
                                      <button
                                        aria-label="Previous slide"
                                        className="carousel__nav carousel__nav--prev | js-carousel-prev"
                                      >
                                        <svg
                                          className="icon icon--chevron icon--chevron-small"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <svg
                                          className="icon icon--chevron icon--chevron-large"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron-large" />
                                        </svg>
                                      </button>
                                      <div className="carousel__pagination | js-pagination-dots" />
                                      <button
                                        aria-label="Next slide"
                                        className="carousel__nav carousel__nav--next | js-carousel-next"
                                      >
                                        <svg
                                          className="icon icon--chevron icon--chevron-small"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <svg
                                          className="icon icon--chevron icon--chevron-large"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron-large" />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div className="spacer spacer--small-divider" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    id="block-relatedcontent"
                    className="section--bg-black section section--slice-teaser"
                  >
                    <div className="container">
                      <div className="section__inner">
                        <h2>Explore more themes</h2>
                        <div className="carousel-container | js-carousel-container">
                          <div
                            className="teaser-listing carousel carousel--2-col swiper-container | js-carousel-2-col"
                            data-items-length={4}
                            data-slides-to-show={2}
                          >
                            <ul className="l-grid l-grid--4-col | teaser-listing__teasers swiper-wrapper">
                              <li className="l-grid__item swiper-slide">
                                <div className="teaser">
                                  <div className="teaser__wrapper">
                                    <div className="teaser__image-container">
                                      <div className="media media-teaser_landscape media-image js-media">
                                        <img
                                          loading="eager"
                                          className="lazyload"
                                          width={750}
                                          height={422}
                                          data-src="/sites/default/files/styles/16_9_media_small/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&itok=5kDh7ddt"
                                          data-sizes="auto"
                                          data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&itok=TfQ3CUMx 400w, /sites/default/files/styles/16_9_media_small/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&itok=5kDh7ddt 750w, /sites/default/files/styles/16_9_media_medium/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&itok=m_NUeqSy 1000w, /sites/default/files/styles/16_9_media_large/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&itok=e8IKj40_ 1300w, /sites/default/files/styles/16_9_media_huge/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&itok=Xx8eCBUE 1600w"
                                          data-focal-position="center center"
                                          alt="A turquoise two-headed serpent mouth ajar, heads pointing in different directions."
                                        />
                                        <noscript>
                                          &lt;img loading="eager"
                                          srcset="/sites/default/files/styles/16_9_media_tiny/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&amp;amp;itok=TfQ3CUMx
                                          400w,
                                          /sites/default/files/styles/16_9_media_small/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&amp;amp;itok=5kDh7ddt
                                          750w,
                                          /sites/default/files/styles/16_9_media_medium/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&amp;amp;itok=m_NUeqSy
                                          1000w,
                                          /sites/default/files/styles/16_9_media_large/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&amp;amp;itok=e8IKj40_
                                          1300w,
                                          /sites/default/files/styles/16_9_media_huge/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&amp;amp;itok=Xx8eCBUE
                                          1600w" width="750" height="422"
                                          data-src="/sites/default/files/styles/16_9_media_small/public/2023-12/Double-headed_serpent_mosaic-1000x500.jpg?h=5dabf909&amp;amp;itok=5kDh7ddt"
                                          data-sizes="auto" alt="A turquoise
                                          two-headed serpent mouth ajar, heads
                                          pointing in different directions."
                                          /&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                    <div className="teaser__content">
                                      <div className="teaser__content-push">
                                        <h3 className="teaser__title">
                                          <a
                                            href="/collection/americas"
                                            className="teaser__anchor"
                                          >
                                            <span>
                                              <span>Americas</span>
                                            </span>
                                            {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                          </a>
                                        </h3>
                                        <div className="teaser__summary">
                                          The Americas encapsulate the
                                          remarkable narratives of cultural
                                          achievement and human experience
                                          across two continents.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="l-grid__item swiper-slide">
                                <div className="teaser">
                                  <div className="teaser__wrapper">
                                    <div className="teaser__image-container">
                                      <div className="media media-teaser_landscape media-image js-media">
                                        <img
                                          loading="eager"
                                          className="lazyload"
                                          width={750}
                                          height={422}
                                          data-src="/sites/default/files/styles/16_9_media_small/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&itok=UGIhAUth"
                                          data-sizes="auto"
                                          data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&itok=Zd5SAlsv 400w, /sites/default/files/styles/16_9_media_small/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&itok=UGIhAUth 750w, /sites/default/files/styles/16_9_media_medium/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&itok=jerdaTSn 1000w, /sites/default/files/styles/16_9_media_large/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&itok=Omwq5WSI 1300w, /sites/default/files/styles/16_9_media_huge/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&itok=GJ8ZhCKw 1600w"
                                          data-focal-position="center center"
                                          alt="A crystal translucent skull"
                                        />
                                        <noscript>
                                          &lt;img loading="eager"
                                          srcset="/sites/default/files/styles/16_9_media_tiny/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&amp;amp;itok=Zd5SAlsv
                                          400w,
                                          /sites/default/files/styles/16_9_media_small/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&amp;amp;itok=UGIhAUth
                                          750w,
                                          /sites/default/files/styles/16_9_media_medium/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&amp;amp;itok=jerdaTSn
                                          1000w,
                                          /sites/default/files/styles/16_9_media_large/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&amp;amp;itok=Omwq5WSI
                                          1300w,
                                          /sites/default/files/styles/16_9_media_huge/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&amp;amp;itok=GJ8ZhCKw
                                          1600w" width="750" height="422"
                                          data-src="/sites/default/files/styles/16_9_media_small/public/2023-12/Rock_crystal_skull_1000x500.jpg?h=5dabf909&amp;amp;itok=UGIhAUth"
                                          data-sizes="auto" alt="A crystal
                                          translucent skull" /&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                    <div className="teaser__content">
                                      <div className="teaser__content-push">
                                        <h3 className="teaser__title">
                                          <a
                                            href="/collection/death-and-memory"
                                            className="teaser__anchor"
                                          >
                                            <span>
                                              <span>Death and memory </span>
                                            </span>
                                            {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                          </a>
                                        </h3>
                                        <div className="teaser__summary">
                                          Discover the many tales of death and
                                          memory from the Museum.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="l-grid__item swiper-slide">
                                <div className="teaser">
                                  <div className="teaser__wrapper">
                                    <div className="teaser__image-container">
                                      <div className="media media-teaser_landscape media-image js-media">
                                        <img
                                          loading="eager"
                                          className="lazyload"
                                          width={750}
                                          height={422}
                                          data-src="/sites/default/files/styles/16_9_media_small/public/2019-06/bm-dragon.jpg?h=99f9f49c&itok=q3Nu1z2G"
                                          data-sizes="auto"
                                          data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2019-06/bm-dragon.jpg?h=99f9f49c&itok=njPvdF3T 400w, /sites/default/files/styles/16_9_media_small/public/2019-06/bm-dragon.jpg?h=99f9f49c&itok=q3Nu1z2G 750w, /sites/default/files/styles/16_9_media_medium/public/2019-06/bm-dragon.jpg?h=99f9f49c&itok=7ijh1iVG 1000w, /sites/default/files/styles/16_9_media_large/public/2019-06/bm-dragon.jpg?h=99f9f49c&itok=COZvxhvv 1300w, /sites/default/files/styles/16_9_media_huge/public/2019-06/bm-dragon.jpg?h=99f9f49c&itok=yYwdawmq 1600w"
                                          data-focal-position="center right"
                                          alt="BM Dragon"
                                        />
                                        <noscript>
                                          &lt;img loading="eager"
                                          srcset="/sites/default/files/styles/16_9_media_tiny/public/2019-06/bm-dragon.jpg?h=99f9f49c&amp;amp;itok=njPvdF3T
                                          400w,
                                          /sites/default/files/styles/16_9_media_small/public/2019-06/bm-dragon.jpg?h=99f9f49c&amp;amp;itok=q3Nu1z2G
                                          750w,
                                          /sites/default/files/styles/16_9_media_medium/public/2019-06/bm-dragon.jpg?h=99f9f49c&amp;amp;itok=7ijh1iVG
                                          1000w,
                                          /sites/default/files/styles/16_9_media_large/public/2019-06/bm-dragon.jpg?h=99f9f49c&amp;amp;itok=COZvxhvv
                                          1300w,
                                          /sites/default/files/styles/16_9_media_huge/public/2019-06/bm-dragon.jpg?h=99f9f49c&amp;amp;itok=yYwdawmq
                                          1600w" width="750" height="422"
                                          data-src="/sites/default/files/styles/16_9_media_small/public/2019-06/bm-dragon.jpg?h=99f9f49c&amp;amp;itok=q3Nu1z2G"
                                          data-sizes="auto" alt="BM Dragon"
                                          /&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                    <div className="teaser__content">
                                      <div className="teaser__content-push">
                                        <h3 className="teaser__title">
                                          <a
                                            href="/collection/china"
                                            className="teaser__anchor"
                                          >
                                            <span>
                                              <span>China</span>
                                            </span>
                                            {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                          </a>
                                        </h3>
                                        <div className="teaser__summary">
                                          China is one of the world's oldest
                                          civilisations and home to a quarter of
                                          the world's population.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="l-grid__item swiper-slide">
                                <div className="teaser">
                                  <div className="teaser__wrapper">
                                    <div className="teaser__image-container">
                                      <div className="media media-teaser_landscape media-image js-media">
                                        <img
                                          loading="eager"
                                          className="lazyload"
                                          width={750}
                                          height={422}
                                          data-src="/sites/default/files/styles/16_9_media_small/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&itok=SsvVFn-P"
                                          data-sizes="auto"
                                          data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&itok=-DdOKxvd 400w, /sites/default/files/styles/16_9_media_small/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&itok=SsvVFn-P 750w, /sites/default/files/styles/16_9_media_medium/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&itok=UyzDoHGn 1000w, /sites/default/files/styles/16_9_media_large/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&itok=oyNVdVgT 1300w, /sites/default/files/styles/16_9_media_huge/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&itok=9WZED8rU 1600w"
                                          data-focal-position="center center"
                                          alt="A bronze Amazonian on horseback"
                                        />
                                        <noscript>
                                          &lt;img loading="eager"
                                          srcset="/sites/default/files/styles/16_9_media_tiny/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&amp;amp;itok=-DdOKxvd
                                          400w,
                                          /sites/default/files/styles/16_9_media_small/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&amp;amp;itok=SsvVFn-P
                                          750w,
                                          /sites/default/files/styles/16_9_media_medium/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&amp;amp;itok=UyzDoHGn
                                          1000w,
                                          /sites/default/files/styles/16_9_media_large/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&amp;amp;itok=oyNVdVgT
                                          1300w,
                                          /sites/default/files/styles/16_9_media_huge/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&amp;amp;itok=9WZED8rU
                                          1600w" width="750" height="422"
                                          data-src="/sites/default/files/styles/16_9_media_small/public/2023-12/Bronze_figure_mounted_Amazon_1000x500.jpg?h=5dabf909&amp;amp;itok=SsvVFn-P"
                                          data-sizes="auto" alt="A bronze
                                          Amazonian on horseback" /&gt;
                                        </noscript>
                                      </div>
                                    </div>
                                    <div className="teaser__content">
                                      <div className="teaser__content-push">
                                        <h3 className="teaser__title">
                                          <a
                                            href="/collection/animals"
                                            className="teaser__anchor"
                                          >
                                            <span>
                                              <span>Animals</span>
                                            </span>
                                            {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                          </a>
                                        </h3>
                                        <div className="teaser__summary">
                                          Explore the many wild and wonderful
                                          depictions of animals found in the
                                          Museum's collection.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
        <div
          className="pswp print-none"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-hidden="true"
        >
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                />
                <button
                  className="pswp__button pswp__button--share"
                  title="Share"
                />
                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                />
                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              ></button>
              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              ></button>
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="loading-overlay print-none | js-loading-overlay">
          <svg
            className="loading-overlay__icon"
            width="120px"
            height="120px"
            role="presentation"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            style={{ background: "none" }}
          >
            <circle
              cx={50}
              cy={50}
              fill="none"
              stroke="#ffffff"
              strokeWidth={10}
              r={35}
              strokeDasharray="164.93361431346415 56.97787143782138"
              transform="rotate(167.878 50 50)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
        <iframe
          height={0}
          width={0}
          style={{ display: "none", visibility: "hidden" }}
        />
        <img
          id="CookiebotSessionPixel"
          src="https://imgsct.cookiebot.com/1.gif?dgi=ec5f4b04-e699-4bea-a9de-eda95d4d9fb7"
          alt="Cookiebot session tracker icon loaded"
          data-cookieconsent="ignore"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default LoveIdentity;
