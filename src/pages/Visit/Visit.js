import React from "react";
import Header from "../../components/Header/Header";

const Visit = () => {
  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".teaser--exhibition-3418 .teaser__wrapper:hover:before {background-color:#0080C9 !important} .teaser--exhibition-3418 .teaser__wrapper:hover .teaser__defacer {color:#0080C9} .teaser--exhibition-3418 .teaser__defacer {background-color:#0080C9} .teaser--exhibition-3418 .teaser__title strong {color:#0080C9} .teaser--exhibition-2232 .teaser__wrapper:hover:before {background-color:#0085B9 !important} .teaser--exhibition-2232 .teaser__wrapper:hover .teaser__defacer {color:#0085B9} .teaser--exhibition-2232 .teaser__defacer {background-color:#0085B9} .teaser--exhibition-2232 .teaser__title strong {color:#0085B9} .teaser--exhibition-2013 .teaser__wrapper:hover:before {background-color:#008CA7 !important} .teaser--exhibition-2013 .teaser__wrapper:hover .teaser__defacer {color:#008CA7} .teaser--exhibition-2013 .teaser__defacer {background-color:#008CA7} .teaser--exhibition-2013 .teaser__title strong {color:#008CA7} .teaser--exhibition-3143 .teaser__wrapper:hover:before {background-color:#008F7C !important} .teaser--exhibition-3143 .teaser__wrapper:hover .teaser__defacer {color:#008F7C} .teaser--exhibition-3143 .teaser__defacer {background-color:#008F7C} .teaser--exhibition-3143 .teaser__title strong {color:#008F7C} .teaser--exhibition-1397 .teaser__wrapper:hover:before {background-color:#009699 !important} .teaser--exhibition-1397 .teaser__wrapper:hover .teaser__defacer {color:#009699} .teaser--exhibition-1397 .teaser__defacer {background-color:#009699} .teaser--exhibition-1397 .teaser__title strong {color:#009699} .teaser--exhibition-4801 .teaser__wrapper:hover:before {background-color:#009AB4 !important} .teaser--exhibition-4801 .teaser__wrapper:hover .teaser__defacer {color:#009AB4} .teaser--exhibition-4801 .teaser__defacer {background-color:#009AB4} .teaser--exhibition-4801 .teaser__title strong {color:#009AB4} .teaser--exhibition-4450 .teaser__wrapper:hover:before {background-color:#009BB3 !important} .teaser--exhibition-4450 .teaser__wrapper:hover .teaser__defacer {color:#009BB3} .teaser--exhibition-4450 .teaser__defacer {background-color:#009BB3} .teaser--exhibition-4450 .teaser__title strong {color:#009BB3} .teaser--exhibition-4400 .teaser__wrapper:hover:before {background-color:#009D3D !important} .teaser--exhibition-4400 .teaser__wrapper:hover .teaser__defacer {color:#009D3D} .teaser--exhibition-4400 .teaser__defacer {background-color:#009D3D} .teaser--exhibition-4400 .teaser__title strong {color:#009D3D} .teaser--exhibition-3070 .teaser__wrapper:hover:before {background-color:#00AFAD !important} .teaser--exhibition-3070 .teaser__wrapper:hover .teaser__defacer {color:#00AFAD} .teaser--exhibition-3070 .teaser__defacer {background-color:#00AFAD} .teaser--exhibition-3070 .teaser__title strong {color:#00AFAD} .teaser--exhibition-3607 .teaser__wrapper:hover:before {background-color:#00B2B2 !important} .teaser--exhibition-3607 .teaser__wrapper:hover .teaser__defacer {color:#00B2B2} .teaser--exhibition-3607 .teaser__defacer {background-color:#00B2B2} .teaser--exhibition-3607 .teaser__title strong {color:#00B2B2} .teaser--exhibition-4409 .teaser__wrapper:hover:before {background-color:#00B451 !important} .teaser--exhibition-4409 .teaser__wrapper:hover .teaser__defacer {color:#00B451} .teaser--exhibition-4409 .teaser__defacer {background-color:#00B451} .teaser--exhibition-4409 .teaser__title strong {color:#00B451} .teaser--exhibition-441 .teaser__wrapper:hover:before {background-color:#00BBB4 !important} .teaser--exhibition-441 .teaser__wrapper:hover .teaser__defacer {color:#00BBB4} .teaser--exhibition-441 .teaser__defacer {background-color:#00BBB4} .teaser--exhibition-441 .teaser__title strong {color:#00BBB4} .teaser--exhibition-2226 .teaser__wrapper:hover:before {background-color:#067E15 !important} .teaser--exhibition-2226 .teaser__wrapper:hover .teaser__defacer {color:#067E15} .teaser--exhibition-2226 .teaser__defacer {background-color:#067E15} .teaser--exhibition-2226 .teaser__title strong {color:#067E15} .teaser--exhibition-4301 .teaser__wrapper:hover:before {background-color:#2198D8 !important} .teaser--exhibition-4301 .teaser__wrapper:hover .teaser__defacer {color:#2198D8} .teaser--exhibition-4301 .teaser__defacer {background-color:#2198D8} .teaser--exhibition-4301 .teaser__title strong {color:#2198D8} .teaser--exhibition-3231 .teaser__wrapper:hover:before {background-color:#31AA6C !important} .teaser--exhibition-3231 .teaser__wrapper:hover .teaser__defacer {color:#31AA6C} .teaser--exhibition-3231 .teaser__defacer {background-color:#31AA6C} .teaser--exhibition-3231 .teaser__title strong {color:#31AA6C} .teaser--exhibition-2106 .teaser__wrapper:hover:before {background-color:#338F73 !important} .teaser--exhibition-2106 .teaser__wrapper:hover .teaser__defacer {color:#338F73} .teaser--exhibition-2106 .teaser__defacer {background-color:#338F73} .teaser--exhibition-2106 .teaser__title strong {color:#338F73} .teaser--exhibition-5224 .teaser__wrapper:hover:before {background-color:#3A8340 !important} .teaser--exhibition-5224 .teaser__wrapper:hover .teaser__defacer {color:#3A8340} .teaser--exhibition-5224 .teaser__defacer {background-color:#3A8340} .teaser--exhibition-5224 .teaser__title strong {color:#3A8340} .teaser--exhibition-2225 .teaser__wrapper:hover:before {background-color:#3EC2EA !important} .teaser--exhibition-2225 .teaser__wrapper:hover .teaser__defacer {color:#3EC2EA} .teaser--exhibition-2225 .teaser__defacer {background-color:#3EC2EA} .teaser--exhibition-2225 .teaser__title strong {color:#3EC2EA} .teaser--exhibition-4804 .teaser__wrapper:hover:before {background-color:#4E77C1 !important} .teaser--exhibition-4804 .teaser__wrapper:hover .teaser__defacer {color:#4E77C1} .teaser--exhibition-4804 .teaser__defacer {background-color:#4E77C1} .teaser--exhibition-4804 .teaser__title strong {color:#4E77C1} .teaser--exhibition-4200 .teaser__wrapper:hover:before {background-color:#547D7D !important} .teaser--exhibition-4200 .teaser__wrapper:hover .teaser__defacer {color:#547D7D} .teaser--exhibition-4200 .teaser__defacer {background-color:#547D7D} .teaser--exhibition-4200 .teaser__title strong {color:#547D7D} .teaser--exhibition-1393 .teaser__wrapper:hover:before {background-color:#55DA85 !important} .teaser--exhibition-1393 .teaser__wrapper:hover .teaser__defacer {color:#55DA85} .teaser--exhibition-1393 .teaser__defacer {background-color:#55DA85} .teaser--exhibition-1393 .teaser__title strong {color:#55DA85} .teaser--exhibition-4237 .teaser__wrapper:hover:before {background-color:#5E8AB4 !important} .teaser--exhibition-4237 .teaser__wrapper:hover .teaser__defacer {color:#5E8AB4} .teaser--exhibition-4237 .teaser__defacer {background-color:#5E8AB4} .teaser--exhibition-4237 .teaser__title strong {color:#5E8AB4} .teaser--exhibition-4595 .teaser__wrapper:hover:before {background-color:#607B94 !important} .teaser--exhibition-4595 .teaser__wrapper:hover .teaser__defacer {color:#607B94} .teaser--exhibition-4595 .teaser__defacer {background-color:#607B94} .teaser--exhibition-4595 .teaser__title strong {color:#607B94} .teaser--exhibition-3428 .teaser__wrapper:hover:before {background-color:#648F82 !important} .teaser--exhibition-3428 .teaser__wrapper:hover .teaser__defacer {color:#648F82} .teaser--exhibition-3428 .teaser__defacer {background-color:#648F82} .teaser--exhibition-3428 .teaser__title strong {color:#648F82} .teaser--exhibition-3164 .teaser__wrapper:hover:before {background-color:#68972F !important} .teaser--exhibition-3164 .teaser__wrapper:hover .teaser__defacer {color:#68972F} .teaser--exhibition-3164 .teaser__defacer {background-color:#68972F} .teaser--exhibition-3164 .teaser__title strong {color:#68972F} .teaser--exhibition-5428 .teaser__wrapper:hover:before {background-color:#6EA5E6 !important} .teaser--exhibition-5428 .teaser__wrapper:hover .teaser__defacer {color:#6EA5E6} .teaser--exhibition-5428 .teaser__defacer {background-color:#6EA5E6} .teaser--exhibition-5428 .teaser__title strong {color:#6EA5E6} .teaser--exhibition-2231 .teaser__wrapper:hover:before {background-color:#724F7A !important} .teaser--exhibition-2231 .teaser__wrapper:hover .teaser__defacer {color:#724F7A} .teaser--exhibition-2231 .teaser__defacer {background-color:#724F7A} .teaser--exhibition-2231 .teaser__title strong {color:#724F7A} .teaser--exhibition-1383 .teaser__wrapper:hover:before {background-color:#7482BE !important} .teaser--exhibition-1383 .teaser__wrapper:hover .teaser__defacer {color:#7482BE} .teaser--exhibition-1383 .teaser__defacer {background-color:#7482BE} .teaser--exhibition-1383 .teaser__title strong {color:#7482BE} .teaser--exhibition-3557 .teaser__wrapper:hover:before {background-color:#75B843 !important} .teaser--exhibition-3557 .teaser__wrapper:hover .teaser__defacer {color:#75B843} .teaser--exhibition-3557 .teaser__defacer {background-color:#75B843} .teaser--exhibition-3557 .teaser__title strong {color:#75B843} .teaser--exhibition-4939 .teaser__wrapper:hover:before {background-color:#75BEE9 !important} .teaser--exhibition-4939 .teaser__wrapper:hover .teaser__defacer {color:#75BEE9} .teaser--exhibition-4939 .teaser__defacer {background-color:#75BEE9} .teaser--exhibition-4939 .teaser__title strong {color:#75BEE9} .teaser--exhibition-3439 .teaser__wrapper:hover:before {background-color:#796CA7 !important} .teaser--exhibition-3439 .teaser__wrapper:hover .teaser__defacer {color:#796CA7} .teaser--exhibition-3439 .teaser__defacer {background-color:#796CA7} .teaser--exhibition-3439 .teaser__title strong {color:#796CA7} .teaser--exhibition-1399 .teaser__wrapper:hover:before {background-color:#82B7AD !important} .teaser--exhibition-1399 .teaser__wrapper:hover .teaser__defacer {color:#82B7AD} .teaser--exhibition-1399 .teaser__defacer {background-color:#82B7AD} .teaser--exhibition-1399 .teaser__title strong {color:#82B7AD} .teaser--exhibition-2803 .teaser__wrapper:hover:before {background-color:#8441DC !important} .teaser--exhibition-2803 .teaser__wrapper:hover .teaser__defacer {color:#8441DC} .teaser--exhibition-2803 .teaser__defacer {background-color:#8441DC} .teaser--exhibition-2803 .teaser__title strong {color:#8441DC} .teaser--exhibition-2222 .teaser__wrapper:hover:before {background-color:#8630AB !important} .teaser--exhibition-2222 .teaser__wrapper:hover .teaser__defacer {color:#8630AB} .teaser--exhibition-2222 .teaser__defacer {background-color:#8630AB} .teaser--exhibition-2222 .teaser__title strong {color:#8630AB} .teaser--exhibition-5455 .teaser__wrapper:hover:before {background-color:#8AF6FF !important} .teaser--exhibition-5455 .teaser__wrapper:hover .teaser__defacer {color:#8AF6FF} .teaser--exhibition-5455 .teaser__defacer {background-color:#8AF6FF} .teaser--exhibition-5455 .teaser__title strong {color:#8AF6FF} .teaser--exhibition-2100 .teaser__wrapper:hover:before {background-color:#90B0A1 !important} .teaser--exhibition-2100 .teaser__wrapper:hover .teaser__defacer {color:#90B0A1} .teaser--exhibition-2100 .teaser__defacer {background-color:#90B0A1} .teaser--exhibition-2100 .teaser__title strong {color:#90B0A1} .teaser--exhibition-3438 .teaser__wrapper:hover:before {background-color:#92C56E !important} .teaser--exhibition-3438 .teaser__wrapper:hover .teaser__defacer {color:#92C56E} .teaser--exhibition-3438 .teaser__defacer {background-color:#92C56E} .teaser--exhibition-3438 .teaser__title strong {color:#92C56E} .teaser--exhibition-4609 .teaser__wrapper:hover:before {background-color:#92C56E !important} .teaser--exhibition-4609 .teaser__wrapper:hover .teaser__defacer {color:#92C56E} .teaser--exhibition-4609 .teaser__defacer {background-color:#92C56E} .teaser--exhibition-4609 .teaser__title strong {color:#92C56E} .teaser--exhibition-2223 .teaser__wrapper:hover:before {background-color:#9370DB !important} .teaser--exhibition-2223 .teaser__wrapper:hover .teaser__defacer {color:#9370DB} .teaser--exhibition-2223 .teaser__defacer {background-color:#9370DB} .teaser--exhibition-2223 .teaser__title strong {color:#9370DB} .teaser--exhibition-705 .teaser__wrapper:hover:before {background-color:#9AB9AD !important} .teaser--exhibition-705 .teaser__wrapper:hover .teaser__defacer {color:#9AB9AD} .teaser--exhibition-705 .teaser__defacer {background-color:#9AB9AD} .teaser--exhibition-705 .teaser__title strong {color:#9AB9AD} .teaser--exhibition-2228 .teaser__wrapper:hover:before {background-color:#A29062 !important} .teaser--exhibition-2228 .teaser__wrapper:hover .teaser__defacer {color:#A29062} .teaser--exhibition-2228 .teaser__defacer {background-color:#A29062} .teaser--exhibition-2228 .teaser__title strong {color:#A29062} .teaser--exhibition-442 .teaser__wrapper:hover:before {background-color:#A6C38D !important} .teaser--exhibition-442 .teaser__wrapper:hover .teaser__defacer {color:#A6C38D} .teaser--exhibition-442 .teaser__defacer {background-color:#A6C38D} .teaser--exhibition-442 .teaser__title strong {color:#A6C38D} .teaser--exhibition-5332 .teaser__wrapper:hover:before {background-color:#A77E55 !important} .teaser--exhibition-5332 .teaser__wrapper:hover .teaser__defacer {color:#A77E55} .teaser--exhibition-5332 .teaser__defacer {background-color:#A77E55} .teaser--exhibition-5332 .teaser__title strong {color:#A77E55} .teaser--exhibition-4404 .teaser__wrapper:hover:before {background-color:#A9B875 !important} .teaser--exhibition-4404 .teaser__wrapper:hover .teaser__defacer {color:#A9B875} .teaser--exhibition-4404 .teaser__defacer {background-color:#A9B875} .teaser--exhibition-4404 .teaser__title strong {color:#A9B875} .teaser--exhibition-2984 .teaser__wrapper:hover:before {background-color:#ABE1FA !important} .teaser--exhibition-2984 .teaser__wrapper:hover .teaser__defacer {color:#ABE1FA} .teaser--exhibition-2984 .teaser__defacer {background-color:#ABE1FA} .teaser--exhibition-2984 .teaser__title strong {color:#ABE1FA} .teaser--exhibition-5097 .teaser__wrapper:hover:before {background-color:#ADACAA !important} .teaser--exhibition-5097 .teaser__wrapper:hover .teaser__defacer {color:#ADACAA} .teaser--exhibition-5097 .teaser__defacer {background-color:#ADACAA} .teaser--exhibition-5097 .teaser__title strong {color:#ADACAA} .teaser--exhibition-3549 .teaser__wrapper:hover:before {background-color:#B156D2 !important} .teaser--exhibition-3549 .teaser__wrapper:hover .teaser__defacer {color:#B156D2} .teaser--exhibition-3549 .teaser__defacer {background-color:#B156D2} .teaser--exhibition-3549 .teaser__title strong {color:#B156D2} .teaser--exhibition-2194 .teaser__wrapper:hover:before {background-color:#B2A48E !important} .teaser--exhibition-2194 .teaser__wrapper:hover .teaser__defacer {color:#B2A48E} .teaser--exhibition-2194 .teaser__defacer {background-color:#B2A48E} .teaser--exhibition-2194 .teaser__title strong {color:#B2A48E} .teaser--exhibition-2230 .teaser__wrapper:hover:before {background-color:#B2B2A4 !important} .teaser--exhibition-2230 .teaser__wrapper:hover .teaser__defacer {color:#B2B2A4} .teaser--exhibition-2230 .teaser__defacer {background-color:#B2B2A4} .teaser--exhibition-2230 .teaser__title strong {color:#B2B2A4} .teaser--exhibition-2009 .teaser__wrapper:hover:before {background-color:#B2B2B2 !important} .teaser--exhibition-2009 .teaser__wrapper:hover .teaser__defacer {color:#B2B2B2} .teaser--exhibition-2009 .teaser__defacer {background-color:#B2B2B2} .teaser--exhibition-2009 .teaser__title strong {color:#B2B2B2} .teaser--exhibition-2022 .teaser__wrapper:hover:before {background-color:#B2B2B2 !important} .teaser--exhibition-2022 .teaser__wrapper:hover .teaser__defacer {color:#B2B2B2} .teaser--exhibition-2022 .teaser__defacer {background-color:#B2B2B2} .teaser--exhibition-2022 .teaser__title strong {color:#B2B2B2} .teaser--exhibition-2105 .teaser__wrapper:hover:before {background-color:#B35674 !important} .teaser--exhibition-2105 .teaser__wrapper:hover .teaser__defacer {color:#B35674} .teaser--exhibition-2105 .teaser__defacer {background-color:#B35674} .teaser--exhibition-2105 .teaser__title strong {color:#B35674} .teaser--exhibition-4778 .teaser__wrapper:hover:before {background-color:#BCD15F !important} .teaser--exhibition-4778 .teaser__wrapper:hover .teaser__defacer {color:#BCD15F} .teaser--exhibition-4778 .teaser__defacer {background-color:#BCD15F} .teaser--exhibition-4778 .teaser__title strong {color:#BCD15F} .teaser--exhibition-5447 .teaser__wrapper:hover:before {background-color:#C1BA38 !important} .teaser--exhibition-5447 .teaser__wrapper:hover .teaser__defacer {color:#C1BA38} .teaser--exhibition-5447 .teaser__defacer {background-color:#C1BA38} .teaser--exhibition-5447 .teaser__title strong {color:#C1BA38} .teaser--exhibition-4661 .teaser__wrapper:hover:before {background-color:#C2BB36 !important} .teaser--exhibition-4661 .teaser__wrapper:hover .teaser__defacer {color:#C2BB36} .teaser--exhibition-4661 .teaser__defacer {background-color:#C2BB36} .teaser--exhibition-4661 .teaser__title strong {color:#C2BB36} .teaser--exhibition-4403 .teaser__wrapper:hover:before {background-color:#C5C4BE !important} .teaser--exhibition-4403 .teaser__wrapper:hover .teaser__defacer {color:#C5C4BE} .teaser--exhibition-4403 .teaser__defacer {background-color:#C5C4BE} .teaser--exhibition-4403 .teaser__title strong {color:#C5C4BE} .teaser--exhibition-4960 .teaser__wrapper:hover:before {background-color:#C75B8F !important} .teaser--exhibition-4960 .teaser__wrapper:hover .teaser__defacer {color:#C75B8F} .teaser--exhibition-4960 .teaser__defacer {background-color:#C75B8F} .teaser--exhibition-4960 .teaser__title strong {color:#C75B8F} .teaser--exhibition-2224 .teaser__wrapper:hover:before {background-color:#CAB011 !important} .teaser--exhibition-2224 .teaser__wrapper:hover .teaser__defacer {color:#CAB011} .teaser--exhibition-2224 .teaser__defacer {background-color:#CAB011} .teaser--exhibition-2224 .teaser__title strong {color:#CAB011} .teaser--exhibition-2012 .teaser__wrapper:hover:before {background-color:#CAB482 !important} .teaser--exhibition-2012 .teaser__wrapper:hover .teaser__defacer {color:#CAB482} .teaser--exhibition-2012 .teaser__defacer {background-color:#CAB482} .teaser--exhibition-2012 .teaser__title strong {color:#CAB482} .teaser--exhibition-2202 .teaser__wrapper:hover:before {background-color:#D73C61 !important} .teaser--exhibition-2202 .teaser__wrapper:hover .teaser__defacer {color:#D73C61} .teaser--exhibition-2202 .teaser__defacer {background-color:#D73C61} .teaser--exhibition-2202 .teaser__title strong {color:#D73C61} .teaser--exhibition-1324 .teaser__wrapper:hover:before {background-color:#D76062 !important} .teaser--exhibition-1324 .teaser__wrapper:hover .teaser__defacer {color:#D76062} .teaser--exhibition-1324 .teaser__defacer {background-color:#D76062} .teaser--exhibition-1324 .teaser__title strong {color:#D76062} .teaser--exhibition-1217 .teaser__wrapper:hover:before {background-color:#D9AA00 !important} .teaser--exhibition-1217 .teaser__wrapper:hover .teaser__defacer {color:#D9AA00} .teaser--exhibition-1217 .teaser__defacer {background-color:#D9AA00} .teaser--exhibition-1217 .teaser__title strong {color:#D9AA00} .teaser--exhibition-2473 .teaser__wrapper:hover:before {background-color:#DCD5C5 !important} .teaser--exhibition-2473 .teaser__wrapper:hover .teaser__defacer {color:#DCD5C5} .teaser--exhibition-2473 .teaser__defacer {background-color:#DCD5C5} .teaser--exhibition-2473 .teaser__title strong {color:#DCD5C5} .teaser--exhibition-3168 .teaser__wrapper:hover:before {background-color:#DD7237 !important} .teaser--exhibition-3168 .teaser__wrapper:hover .teaser__defacer {color:#DD7237} .teaser--exhibition-3168 .teaser__defacer {background-color:#DD7237} .teaser--exhibition-3168 .teaser__title strong {color:#DD7237} .teaser--exhibition-1408 .teaser__wrapper:hover:before {background-color:#DEC372 !important} .teaser--exhibition-1408 .teaser__wrapper:hover .teaser__defacer {color:#DEC372} .teaser--exhibition-1408 .teaser__defacer {background-color:#DEC372} .teaser--exhibition-1408 .teaser__title strong {color:#DEC372} .teaser--exhibition-2229 .teaser__wrapper:hover:before {background-color:#DF2312 !important} .teaser--exhibition-2229 .teaser__wrapper:hover .teaser__defacer {color:#DF2312} .teaser--exhibition-2229 .teaser__defacer {background-color:#DF2312} .teaser--exhibition-2229 .teaser__title strong {color:#DF2312} .teaser--exhibition-4660 .teaser__wrapper:hover:before {background-color:#DFC070 !important} .teaser--exhibition-4660 .teaser__wrapper:hover .teaser__defacer {color:#DFC070} .teaser--exhibition-4660 .teaser__defacer {background-color:#DFC070} .teaser--exhibition-4660 .teaser__title strong {color:#DFC070} .teaser--exhibition-4793 .teaser__wrapper:hover:before {background-color:#E0352F !important} .teaser--exhibition-4793 .teaser__wrapper:hover .teaser__defacer {color:#E0352F} .teaser--exhibition-4793 .teaser__defacer {background-color:#E0352F} .teaser--exhibition-4793 .teaser__title strong {color:#E0352F} .teaser--exhibition-4783 .teaser__wrapper:hover:before {background-color:#E13C0D !important} .teaser--exhibition-4783 .teaser__wrapper:hover .teaser__defacer {color:#E13C0D} .teaser--exhibition-4783 .teaser__defacer {background-color:#E13C0D} .teaser--exhibition-4783 .teaser__title strong {color:#E13C0D} .teaser--exhibition-2023 .teaser__wrapper:hover:before {background-color:#EB0000 !important} .teaser--exhibition-2023 .teaser__wrapper:hover .teaser__defacer {color:#EB0000} .teaser--exhibition-2023 .teaser__defacer {background-color:#EB0000} .teaser--exhibition-2023 .teaser__title strong {color:#EB0000} .teaser--exhibition-4305 .teaser__wrapper:hover:before {background-color:#EC008C !important} .teaser--exhibition-4305 .teaser__wrapper:hover .teaser__defacer {color:#EC008C} .teaser--exhibition-4305 .teaser__defacer {background-color:#EC008C} .teaser--exhibition-4305 .teaser__title strong {color:#EC008C} .teaser--exhibition-4318 .teaser__wrapper:hover:before {background-color:#EC409D !important} .teaser--exhibition-4318 .teaser__wrapper:hover .teaser__defacer {color:#EC409D} .teaser--exhibition-4318 .teaser__defacer {background-color:#EC409D} .teaser--exhibition-4318 .teaser__title strong {color:#EC409D} .teaser--exhibition-5365 .teaser__wrapper:hover:before {background-color:#EF4036 !important} .teaser--exhibition-5365 .teaser__wrapper:hover .teaser__defacer {color:#EF4036} .teaser--exhibition-5365 .teaser__defacer {background-color:#EF4036} .teaser--exhibition-5365 .teaser__title strong {color:#EF4036} .teaser--exhibition-440 .teaser__wrapper:hover:before {background-color:#EF7B47 !important} .teaser--exhibition-440 .teaser__wrapper:hover .teaser__defacer {color:#EF7B47} .teaser--exhibition-440 .teaser__defacer {background-color:#EF7B47} .teaser--exhibition-440 .teaser__title strong {color:#EF7B47} .teaser--exhibition-5278 .teaser__wrapper:hover:before {background-color:#F01329 !important} .teaser--exhibition-5278 .teaser__wrapper:hover .teaser__defacer {color:#F01329} .teaser--exhibition-5278 .teaser__defacer {background-color:#F01329} .teaser--exhibition-5278 .teaser__title strong {color:#F01329} .teaser--exhibition-4177 .teaser__wrapper:hover:before {background-color:#F15B4E !important} .teaser--exhibition-4177 .teaser__wrapper:hover .teaser__defacer {color:#F15B4E} .teaser--exhibition-4177 .teaser__defacer {background-color:#F15B4E} .teaser--exhibition-4177 .teaser__title strong {color:#F15B4E} .teaser--exhibition-5330 .teaser__wrapper:hover:before {background-color:#F65681 !important} .teaser--exhibition-5330 .teaser__wrapper:hover .teaser__defacer {color:#F65681} .teaser--exhibition-5330 .teaser__defacer {background-color:#F65681} .teaser--exhibition-5330 .teaser__title strong {color:#F65681} .teaser--exhibition-5204 .teaser__wrapper:hover:before {background-color:#F9B853 !important} .teaser--exhibition-5204 .teaser__wrapper:hover .teaser__defacer {color:#F9B853} .teaser--exhibition-5204 .teaser__defacer {background-color:#F9B853} .teaser--exhibition-5204 .teaser__title strong {color:#F9B853} .teaser--exhibition-2227 .teaser__wrapper:hover:before {background-color:#FA1CFF !important} .teaser--exhibition-2227 .teaser__wrapper:hover .teaser__defacer {color:#FA1CFF} .teaser--exhibition-2227 .teaser__defacer {background-color:#FA1CFF} .teaser--exhibition-2227 .teaser__title strong {color:#FA1CFF} .teaser--exhibition-4676 .teaser__wrapper:hover:before {background-color:#FAA21B !important} .teaser--exhibition-4676 .teaser__wrapper:hover .teaser__defacer {color:#FAA21B} .teaser--exhibition-4676 .teaser__defacer {background-color:#FAA21B} .teaser--exhibition-4676 .teaser__title strong {color:#FAA21B} .teaser--exhibition-2698 .teaser__wrapper:hover:before {background-color:#FBBA00 !important} .teaser--exhibition-2698 .teaser__wrapper:hover .teaser__defacer {color:#FBBA00} .teaser--exhibition-2698 .teaser__defacer {background-color:#FBBA00} .teaser--exhibition-2698 .teaser__title strong {color:#FBBA00} .teaser--exhibition-4682 .teaser__wrapper:hover:before {background-color:#FC4C02 !important} .teaser--exhibition-4682 .teaser__wrapper:hover .teaser__defacer {color:#FC4C02} .teaser--exhibition-4682 .teaser__defacer {background-color:#FC4C02} .teaser--exhibition-4682 .teaser__title strong {color:#FC4C02} .teaser--exhibition-5125 .teaser__wrapper:hover:before {background-color:#FDBC54 !important} .teaser--exhibition-5125 .teaser__wrapper:hover .teaser__defacer {color:#FDBC54} .teaser--exhibition-5125 .teaser__defacer {background-color:#FDBC54} .teaser--exhibition-5125 .teaser__title strong {color:#FDBC54} .teaser--exhibition-4949 .teaser__wrapper:hover:before {background-color:#FE987D !important} .teaser--exhibition-4949 .teaser__wrapper:hover .teaser__defacer {color:#FE987D} .teaser--exhibition-4949 .teaser__defacer {background-color:#FE987D} .teaser--exhibition-4949 .teaser__title strong {color:#FE987D} .teaser--exhibition-2233 .teaser__wrapper:hover:before {background-color:#FF0000 !important} .teaser--exhibition-2233 .teaser__wrapper:hover .teaser__defacer {color:#FF0000} .teaser--exhibition-2233 .teaser__defacer {background-color:#FF0000} .teaser--exhibition-2233 .teaser__title strong {color:#FF0000} .teaser--exhibition-4472 .teaser__wrapper:hover:before {background-color:#FF1A00 !important} .teaser--exhibition-4472 .teaser__wrapper:hover .teaser__defacer {color:#FF1A00} .teaser--exhibition-4472 .teaser__defacer {background-color:#FF1A00} .teaser--exhibition-4472 .teaser__title strong {color:#FF1A00} .teaser--exhibition-643 .teaser__wrapper:hover:before {background-color:#FFAE3B !important} .teaser--exhibition-643 .teaser__wrapper:hover .teaser__defacer {color:#FFAE3B} .teaser--exhibition-643 .teaser__defacer {background-color:#FFAE3B} .teaser--exhibition-643 .teaser__title strong {color:#FFAE3B} .teaser--exhibition-3359 .teaser__wrapper:hover:before {background-color:#FFCD1C !important} .teaser--exhibition-3359 .teaser__wrapper:hover .teaser__defacer {color:#FFCD1C} .teaser--exhibition-3359 .teaser__defacer {background-color:#FFCD1C} .teaser--exhibition-3359 .teaser__title strong {color:#FFCD1C} .teaser--exhibition-4807 .teaser__wrapper:hover:before {background-color:#FFE800 !important} .teaser--exhibition-4807 .teaser__wrapper:hover .teaser__defacer {color:#FFE800} .teaser--exhibition-4807 .teaser__defacer {background-color:#FFE800} .teaser--exhibition-4807 .teaser__title strong {color:#FFE800} .teaser--exhibition-1830 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1830 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1830 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1830 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-1831 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1831 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1831 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1831 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-1832 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1832 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1832 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1832 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-1877 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1877 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1877 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1877 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2054 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2054 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2054 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2054 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2719 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2719 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2719 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2719 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2757 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2757 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2757 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2757 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2924 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2924 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2924 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2924 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3035 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3035 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3035 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3035 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3086 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3086 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3086 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3086 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3087 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3087 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3087 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3087 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3089 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3089 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3089 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3089 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3174 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3174 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3174 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3174 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4085 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4085 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4085 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4085 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4226 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4226 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4226 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4226 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4228 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4228 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4228 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4228 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4239 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4239 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4239 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4239 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4307 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4307 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4307 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4307 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4401 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4401 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4401 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4401 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4509 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4509 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4509 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4509 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4533 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4533 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4533 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4533 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4534 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4534 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4534 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4534 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4535 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4535 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4535 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4535 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4547 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4547 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4547 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4547 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-5189 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-5189 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-5189 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-5189 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-5190 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-5190 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-5190 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-5190 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-5191 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-5191 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-5191 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-5191 .teaser__title strong {color:#FFFFFF}",
          }}
        />
        <meta
          name="description"
          content="Find out the latest information on visiting the British Museum."
        />
        <link rel="canonical" href="https://www.britishmuseum.org/visit" />
        <link
          rel="image_src"
          href="https://www.britishmuseum.org/sites/default/files/styles/uncropped_large/public/2019-10/Great%20Court%2004.jpg?itok=PKKEIUbn"
        />
        <meta property="og:site_name" content="The British Museum" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.britishmuseum.org/visit" />
        <meta property="og:title" content="Visit" />
        <meta
          property="og:description"
          content="Find opening times, entry, travel and facilities information and also details of our Museum activities. "
        />
        <meta property="og:image" content="images/Great%20Court%2004_1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Find opening times, entry, travel and facilities information and also details of our Museum activities. "
        />
        <meta name="twitter:site" content="@britishmuseum" />
        <meta name="twitter:title" content="Visit" />
        <meta
          name="twitter:image"
          content="https://www.britishmuseum.org/sites/default/files/styles/uncropped_large/public/2019-10/Great%20Court%2004.jpg?itok=PKKEIUbn"
        />
        <meta name="Generator" content="Drupal 10 (https://www.drupal.org)" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" type="image/vnd.microsoft.icon" />
        <title>Visit | British Museum</title>
        <link rel="preconnect" href="https://googletagmanager.com" />
        <link rel="preconnect" href="https://google-analytics.com" />
        <link
          rel="stylesheet"
          media="all"
          href="css/css_7drspl528YvTkAp-JrSnd2eJZWED2mZFH7c7fgR4QI4.css"
        />
        <link
          rel="stylesheet"
          media="all"
          href="css/css_VAvkHRcLHSWwq0ovHYJ-IGyjWbQie-FPraftF1kr7dQ.css"
        />
        <link
          rel="stylesheet"
          media="print"
          href="css/css_i1O0tjo3bjgkU5-alNhpaD4VyRDHezJx1RhRnDHIExI.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="images/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="images/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="British Museum" />
        {/* Facebook domain verification */}
        <meta
          name="facebook-domain-verification"
          content="8rxgufrjnmm08rnfosf5ers9d1q7a5"
        />
        {/* End Facebook domain verification */}
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
                    aria-labelledby="paragraph-1329-title"
                  >
                    <div className="hero__background">
                      <div className="media media-hero media-image js-media">
                        <picture>
                          {/*[if IE 9]><video style="display: none;"><![endif]*/}
                          <source
                            srcSet="images/Great%20Court%2004_3.jpg 1x"
                            media="all and (min-width: 1440px)"
                            type="image/jpeg"
                            width={1600}
                            height={800}
                          />
                          <source
                            srcSet="images/Great%20Court%2004_1.jpg 1x"
                            media="all and (min-width: 1024px)"
                            type="image/jpeg"
                            width={1300}
                            height={650}
                          />
                          <source
                            srcSet="images/Great%20Court%2004_2.jpg 1x"
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
                            data-focal-position="center right"
                            src="images/Great%20Court%2004.jpg"
                            alt="A wide shot of the Great Court with the roof and Reading Room in view"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="container">
                      <div className="hero__inner">
                        <div className="hero__content-container">
                          <h1 id="paragraph-1329-title" className="hero__title">
                            {" "}
                            Plan your visit
                          </h1>
                          <a
                            href="https://ticketing.britishmuseum.org/events?k=general%20admission"
                            className="hero__button button button--white button--chevron"
                            data-tracking="cta"
                          >
                            <span>Book now</span>
                          </a>
                        </div>
                        <div className="hero__controls">
                          <div className="hero__caption | js-hero-caption">
                            <button
                              type="button"
                              className="hero__caption-button | js-hero-caption-btn"
                              id="hero-image-caption-button-1329"
                              aria-expanded="false"
                              aria-controls="hero-image-caption-content-1329"
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
                              id="hero-image-caption-content-1329"
                              aria-hidden="true"
                              aria-labelledby="hero-image-caption-button-1329"
                            >
                              <button
                                type="button"
                                className="hero__caption-content-close | js-hero-caption-btn"
                                id="hero-image-caption-close-button-1329"
                                aria-expanded="false"
                                aria-controls="hero-image-caption-content-1329"
                              >
                                <span className="visually-hidden">
                                  Close image caption
                                </span>
                                <span className="hero__caption-close">
                                  <span className="hero__caption-close-lines" />
                                </span>
                              </button>
                              <p> Roof and centre of the Great Court</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="breadcrumb--bg-white section--breadcrumb">
                  <div className="container">
                    <div className="breadcrumb__inner">
                      <div id="block-breadcrumbs">
                        <nav aria-labelledby="system-breadcrumb">
                          <h2
                            id="system-breadcrumb"
                            className="visually-hidden"
                          >
                            You are here:
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
                                href="https://www.britishmuseum.org/visit"
                                className="breadcrumb__current"
                                aria-current="page"
                              >
                                Visit
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
                              className="social-share__link"
                              href="http://www.facebook.com/share.php?u=https://www.britishmuseum.org/visit"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
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
                            </a>
                          </li>
                          <li className="social-share__item">
                            <a
                              className="social-share__link"
                              href="https://twitter.com/intent/tweet?text=Visit&url=https://www.britishmuseum.org/visit"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
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
                      className="section--bg-white section section--no-padding-bottom"
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
                                    href="#ticket-information"
                                    className="jump-links__link"
                                  >
                                    <span>Ticket information</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#gallery-information"
                                    className="jump-links__link"
                                  >
                                    <span>Gallery information</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#exhibitions"
                                    className="jump-links__link"
                                  >
                                    <span>Exhibitions</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#opening-hours"
                                    className="jump-links__link"
                                  >
                                    <span>Opening hours</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#getting-here"
                                    className="jump-links__link"
                                  >
                                    <span>Getting here</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#entering-the-museum"
                                    className="jump-links__link"
                                  >
                                    <span>Entering the Museum</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#accessibility"
                                    className="jump-links__link"
                                  >
                                    <span>Accessibility</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#facilities"
                                    className="jump-links__link"
                                  >
                                    <span>Facilities</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#food-and-drink"
                                    className="jump-links__link"
                                  >
                                    <span>Food and drink</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="paragraph paragraph--type--slice-generic-intro paragraph--view-mode--default section section--intro section--bg-white">
                    <div className="container">
                      <div className="section__inner">
                        <div className="section--intro__container">
                          <div className="section--intro__info">
                            <h2 className="section--intro__info-title">
                              {" "}
                              Free entry
                            </h2>
                            <div className="section--intro__info-slices">
                              <div className="paragraph paragraph--type--info-content paragraph--view-mode--default section--intro__info-content wysiwyg">
                                <h3 className="section--intro__info-content-title">
                                  <svg
                                    className="icon icon--clock"
                                    role="presentation"
                                    focusable="false"
                                    aria-hidden="true"
                                  >
                                    <use xlinkHref="#sprite-icon-clock" />
                                  </svg>
                                  Opening times
                                </h3>
                                <p>
                                  Daily: 10.00–17.00 (
                                  <a
                                    href="/visit/late-opening-on-fridays"
                                    data-entity-type="node"
                                    data-entity-uuid="961906cc-8c75-4712-ad29-df331e30fbdd"
                                  >
                                    Fridays: 20.30
                                  </a>
                                  )&nbsp;
                                  <br />
                                  See full{" "}
                                  <a href="https://www.britishmuseum.org/visit#opening-hours">
                                    opening hours
                                  </a>
                                  <br />
                                  The Museum is closed 24–26 December.
                                </p>
                              </div>
                              <div className="paragraph paragraph--type--info-content paragraph--view-mode--default section--intro__info-content wysiwyg">
                                <h3 className="section--intro__info-content-title">
                                  <svg
                                    className="icon icon--pin"
                                    role="presentation"
                                    focusable="false"
                                    aria-hidden="true"
                                  >
                                    <use xlinkHref="#sprite-icon-pin" />
                                  </svg>
                                  The British Museum
                                </h3>
                                <p>
                                  Great Russell Street, London, WC1B 3DG
                                  <br />
                                  See <a href="#getting-here">getting here</a>
                                </p>
                              </div>
                              <div className="paragraph paragraph--type--info-content paragraph--view-mode--default section--intro__info-content wysiwyg">
                                <h3 className="section--intro__info-content-title">
                                  <svg
                                    className="icon icon--headphones"
                                    role="presentation"
                                    focusable="false"
                                    aria-hidden="true"
                                  >
                                    <use xlinkHref="#sprite-icon-headphones" />
                                  </svg>
                                  Gallery audio guides
                                </h3>
                                <p>
                                  Listen on the{" "}
                                  <a href="https://audioapp.britishmuseum.org/">
                                    Audio app
                                  </a>
                                  , available on the{" "}
                                  <a href="https://apps.apple.com/gb/app/british-museum-audio/id1609255954">
                                    App Store
                                  </a>
                                  ,{" "}
                                  <a href="https://apps.apple.com/cn/app/%E5%A4%A7%E8%8B%B1%E5%8D%9A%E7%89%A9%E9%A6%86%E5%AE%98%E6%96%B9%E5%AF%BC%E8%A7%88/id6446355034">
                                    App Store (China mainland)
                                  </a>{" "}
                                  and{" "}
                                  <a href="https://play.google.com/store/apps/details?id=org.britishmuseum.tapartme">
                                    Google Play
                                  </a>
                                  .&nbsp;
                                </p>
                              </div>
                              <div className="paragraph paragraph--type--info-content paragraph--view-mode--default section--intro__info-content wysiwyg">
                                <h3 className="section--intro__info-content-title">
                                  <svg
                                    className="icon icon--ticket"
                                    role="presentation"
                                    focusable="false"
                                    aria-hidden="true"
                                  >
                                    <use xlinkHref="#sprite-icon-ticket" />
                                  </svg>
                                  Advance booking recommended
                                </h3>
                                <p>
                                  See{" "}
                                  <a href="https://www.britishmuseum.org/visit#ticket-information">
                                    ticket information
                                  </a>
                                </p>
                              </div>
                              <div className="intro-link--button paragraph paragraph--type--info-link paragraph--view-mode--default">
                                <a
                                  data-tracking="cta"
                                  className="button button--chevron"
                                  href="https://ticketing.britishmuseum.org/events?k=general%20admission"
                                >
                                  <span>Book tickets</span>
                                </a>
                              </div>
                              <div className="intro-link--button paragraph paragraph--type--info-link paragraph--view-mode--default">
                                <a
                                  data-tracking="cta"
                                  className="button button--chevron"
                                  href="/files/museum-map.pdf"
                                >
                                  <span>View Museum map</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="section--intro__content">
                            <p className="h3">
                              Immerse yourself in two million years of human
                              history, art and culture.
                            </p>
                            <div className="wysiwyg">
                              <p>
                                <a href="https://ticketing.britishmuseum.org/events?k=general%20admission">
                                  Book your free ticket
                                </a>
                                &nbsp;for Museum entry in advance to receive key
                                information and updates before your visit and
                                priority entry during busy periods.&nbsp;In our
                                galleries come face-to-face with objects from
                                the&nbsp;
                                <a
                                  href="/collection/galleries/sutton-hoo-and-europe"
                                  data-entity-type="node"
                                  data-entity-uuid="044abbe3-1935-45df-ac17-78bb9a6e0f39"
                                >
                                  Sutton Hoo
                                </a>
                                &nbsp;ship burial, explore the wonderful
                                collection of the&nbsp;
                                <a href="https://islamicworld.britishmuseum.org/">
                                  Islamic world
                                </a>
                                &nbsp;and learn more about&nbsp;
                                <a
                                  href="/collection/galleries/egyptian-death-and-afterlife-mummies"
                                  data-entity-type="node"
                                  data-entity-uuid="db4504fd-a7cb-4c56-beb1-8e684358d50a"
                                >
                                  Egyptian mummies
                                </a>
                                .&nbsp;Please see the&nbsp;
                                <a href="https://www.britishmuseum.org/visit#gallery-information">
                                  list of available galleries
                                </a>
                                &nbsp;to visit.
                              </p>
                              <p>
                                Exhibition tickets are available to book for:
                              </p>
                              <ul>
                                <li>
                                  <a href="https://www.britishmuseum.org/exhibitions/silk-roads">
                                    <em>Silk Roads</em>
                                  </a>{" "}
                                  (26 September 2024 – 23 February 2025)
                                </li>
                                <li>
                                  <a
                                    href="/exhibitions/hew-locke-what-have-we-here"
                                    data-entity-type="node"
                                    data-entity-uuid="a19886e6-5fa1-4655-93f0-6a44291033cd"
                                    data-entity-substitution="canonical"
                                  >
                                    <em>Hew Locke: what have we here?</em>
                                  </a>
                                  <em> </em>(17 October 2024 – 9 February 2025)
                                </li>
                                <li>
                                  <a href="https://www.britishmuseum.org/exhibitions/picasso-printmaker">
                                    <em>Picasso: printmaker</em>
                                  </a>{" "}
                                  (7 November 2024 – 30 March 2025)
                                </li>
                              </ul>
                              <p>
                                Occasionally we may need to close galleries at
                                short notice. We regret that we are not always
                                able to alert visitors in advance of their
                                visit.
                              </p>
                              <p>We look forward to welcoming you.</p>
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
                            className="paragraph paragraph--type--slice-teaser paragraph--view-mode--default section section--slice-teaser section--z-index-scope section--has-carousel section--bg-white"
                            aria-labelledby="paragraph-2817-title"
                          >
                            <div className="container">
                              <div className="section__inner">
                                <div className="teaser-listing__container">
                                  <h2
                                    id="paragraph-2817-title"
                                    className="section__title teaser-listing__title"
                                  >
                                    Ways to explore
                                  </h2>
                                  <div className="carousel-container | js-carousel-container">
                                    <div
                                      className="teaser-listing carousel carousel--2-col swiper-container | js-carousel-2-col"
                                      data-items-length={3}
                                      data-slides-to-show={2}
                                    >
                                      <ul className="l-grid l-grid--3-col | teaser-listing__teasers swiper-wrapper">
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
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&itok=F2P248nF"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&itok=Ovw2OYuU 400w, /sites/default/files/styles/16_9_media_small/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&itok=F2P248nF 750w, /sites/default/files/styles/16_9_media_medium/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&itok=25jKgdgS 1000w, /sites/default/files/styles/16_9_media_large/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&itok=NIckVnoI 1300w, /sites/default/files/styles/16_9_media_huge/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&itok=kgVkB40A 1600w"
                                                    data-focal-position="center center"
                                                    alt="Woman looking at the Lewis Chessmen on a red and white chessboard."
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&amp;itok=Ovw2OYuU
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&amp;itok=F2P248nF
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&amp;itok=25jKgdgS
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&amp;itok=NIckVnoI
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&amp;itok=kgVkB40A
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2021-02/bep-gallery-lewis-chessmen-1920.jpg?h=d1cb525d&amp;itok=F2P248nF"
                                                    data-sizes="auto" alt="Woman
                                                    looking at the Lewis
                                                    Chessmen on a red and white
                                                    chessboard." /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/collection/galleries"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>Galleries </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Walk through two million
                                                    years of history and culture
                                                    across more than 50
                                                    galleries.
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
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&itok=iOjrJ66m"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&itok=YibwCFtV 400w, /sites/default/files/styles/16_9_media_small/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&itok=iOjrJ66m 750w, /sites/default/files/styles/16_9_media_medium/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&itok=xaYlX0q8 1000w, /sites/default/files/styles/16_9_media_large/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&itok=44P-usNz 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&itok=E2NfjKB- 1600w"
                                                    data-focal-position="top right"
                                                    alt="A family looking at objects in Room 27: Mexico"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&amp;itok=YibwCFtV
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&amp;itok=iOjrJ66m
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&amp;itok=xaYlX0q8
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&amp;itok=44P-usNz
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&amp;itok=E2NfjKB-
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-08/R27%20Mexico%20family%20.jpg?h=1262f808&amp;itok=iOjrJ66m"
                                                    data-sizes="auto" alt="A
                                                    family looking at objects in
                                                    Room 27: Mexico" /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/visit/family-visits"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Family visits
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    From object trails to
                                                    information on pushchairs,
                                                    find out what family
                                                    activities are running and
                                                    which family facilities are
                                                    open.
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
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=Ef0XY0UQ"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=73k-AqJa 400w, /sites/default/files/styles/16_9_media_small/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=Ef0XY0UQ 750w, /sites/default/files/styles/16_9_media_medium/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=sOrwHw5e 1000w, /sites/default/files/styles/16_9_media_large/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=IkIcINR5 1300w, /sites/default/files/styles/16_9_media_huge/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=frHfjMMM 1600w"
                                                    data-focal-position="center center"
                                                    alt="Procession of camels with lone figure leading in shadow against orange sky"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=73k-AqJa
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=Ef0XY0UQ
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=sOrwHw5e
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=IkIcINR5
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=frHfjMMM
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=Ef0XY0UQ"
                                                    data-sizes="auto"
                                                    alt="Procession of camels
                                                    with lone figure leading in
                                                    shadow against orange sky"
                                                    /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="https://www.britishmuseum.org/exhibitions-events"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Exhibitions and events
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Discover our latest
                                                    exhibitions and events,
                                                    including&nbsp;'Silk Roads'.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="carousel__nav-container carousel__nav-container--inline-buttons">
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
                                      </button>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="paragraph paragraph--type--slice-banner paragraph--view-mode--default section section--slice-banner section--maintain-spacer-top section--bg-white banner"
                            aria-labelledby="paragraph-12858-title"
                          >
                            <div className="container">
                              <div className="banner__outer">
                                <div className="banner__inner">
                                  <div className="banner__title">
                                    <h2
                                      id="paragraph-12858-title"
                                      className="section__title"
                                    >
                                      Sign up to our newsletters
                                    </h2>
                                  </div>
                                  <div className="banner__content">
                                    <p>
                                      Stay connected to the British Museum for
                                      the latest news, stories, exhibitions,
                                      events and visitor information.
                                    </p>
                                    <div className="banner__button-container">
                                      <a
                                        href="https://emails.britishmuseum.org/k/British-Museum/sign_up_form_from_website_box"
                                        className="button button--chevron"
                                        data-tracking="cta"
                                      >
                                        <span>Sign up</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="accordion section--no-keyline-next js-accordion paragraph paragraph--type--slice-accordion paragraph--view-mode--default section section--slice-accordion section--bg-white"
                            aria-labelledby="paragraph-18453-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="ticket-information"
                              />
                              <div className="section__inner">
                                <h2
                                  id="paragraph-18453-title"
                                  className="section__title"
                                >
                                  Ticket information
                                </h2>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-30859"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-30859"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> How to book</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-30859"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-30859"
                                  >
                                    <ul>
                                      <li>
                                        We're limiting numbers of people in the
                                        Museum to ensure there's room for you to
                                        safely enjoy your visit. You're advised
                                        to{" "}
                                        <a href="https://ticketing.britishmuseum.org/events?k=general%20admission">
                                          book a free ticket
                                        </a>{" "}
                                        in advance to receive key information
                                        and updates before your visit and
                                        priority entry during busy periods.
                                      </li>
                                      <li>
                                        To book simply{" "}
                                        <a href="https://ticketing.britishmuseum.org/events?k=general%20admission">
                                          pick the date and time
                                        </a>{" "}
                                        you'd like to visit.
                                      </li>
                                      <li>
                                        If the date or time you wish to visit
                                        has no availability, please note that
                                        walk-up visits are available each day
                                        for those who arrive at the Montague
                                        Place entrance of the Museum, without
                                        advance bookings. If visitor numbers are
                                        very high, non-ticket holders may have a
                                        longer wait to gain entry.
                                      </li>
                                      <li>
                                        To book tickets for exhibitions,{" "}
                                        <a
                                          href="/exhibitions-events"
                                          data-entity-type="node"
                                          data-entity-uuid="47fc42eb-e975-4646-8f5d-b1440831e6b5"
                                          data-entity-substitution="canonical"
                                          title="Exhibitions and events"
                                        >
                                          visit our exhibition pages
                                        </a>
                                        . Your exhibition ticket also gives you
                                        access to the permanent collection.
                                      </li>
                                      <li>
                                        If you need any access assistance,
                                        please see our{" "}
                                        <a
                                          href="/visit/accessibility-museum"
                                          data-entity-type="node"
                                          data-entity-uuid="377d1eaf-caa3-4fba-8eeb-7eb62bb562e9"
                                          data-entity-substitution="canonical"
                                          title="Accessibility at the Museum"
                                        >
                                          Accessibility page
                                        </a>
                                        .
                                      </li>
                                    </ul>
                                    <p className="h3">
                                      Important information about your ticket
                                      booking
                                    </p>
                                    <ul>
                                      <li>
                                        Tickets to the permanent collection are
                                        free.
                                      </li>
                                      <li>
                                        You can book tickets up to a maximum of
                                        nine people in your group.
                                      </li>
                                      <li>
                                        Your ticket(s) will be emailed to you.
                                      </li>
                                      <li>
                                        Tickets will be released on a regular
                                        basis, so if there's no availability
                                        showing then please check again soon.
                                      </li>
                                      <li>
                                        General admission ticket holders are
                                        asked to arrive within 30 minutes of
                                        their entry time. If you arrive earlier
                                        or later than this, we will do our best
                                        to accommodate you, but there may be
                                        delays to your entry.
                                      </li>
                                      <li>
                                        <a href="https://emails.britishmuseum.org/k/British-Museum/sign_up_form_from_website_box">
                                          Sign up to our newsletter
                                        </a>{" "}
                                        to receive the latest updates.
                                        <a
                                          className="ck-anchor"
                                          id="gallery"
                                          name="gallery"
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18452"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18452"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Members</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18452"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18452"
                                  >
                                    <ul>
                                      <li>
                                        Members do not need to book for the
                                        permanent collection or our exhibitions:
                                        <ul>
                                          <li>
                                            <a href="https://www.britishmuseum.org/exhibitions/silk-roads">
                                              <em>Silk Roads</em>
                                            </a>{" "}
                                            (26 September 2024 – 23 February
                                            2025)
                                          </li>
                                          <li>
                                            <a
                                              href="/exhibitions/hew-locke-what-have-we-here"
                                              data-entity-type="node"
                                              data-entity-uuid="a19886e6-5fa1-4655-93f0-6a44291033cd"
                                              data-entity-substitution="canonical"
                                              title="Hew Locke: what have we here?"
                                            >
                                              <em>
                                                Hew Locke: what have we here?
                                              </em>
                                            </a>
                                            <em> </em>(17 October 2024 – 9
                                            February 2025)
                                          </li>
                                          <li>
                                            <a href="https://www.britishmuseum.org/exhibitions/picasso-printmaker">
                                              <em>Picasso: printmaker</em>
                                            </a>{" "}
                                            (7 November 2024 – 30 March 2025)
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        You'll need to show your Membership card
                                        to gain entry.
                                      </li>
                                      <li>
                                        If you can't find your card,
                                        please&nbsp;contact&nbsp;
                                        <a
                                          href="/cdn-cgi/l/email-protection#1274607b777c76615270607b667b617a7f676177677f3c7d6075"
                                          data-rawhref="mailto:friends@britishmuseum.org"
                                          target="_blank"
                                        >
                                          <span
                                            className="__cf_email__"
                                            data-cfemail="0e687c676b606a7d4e6c7c677a677d66637b7d6b7b6320617c69"
                                          >
                                            [email&nbsp;protected]
                                          </span>
                                        </a>
                                        &nbsp;or visit the Membership Desk in
                                        the Great Court.&nbsp;
                                      </li>
                                      <li>
                                        <a
                                          href="/membership"
                                          data-entity-type="node"
                                          data-entity-uuid="09aff57c-7b58-4166-9383-16c339dffc2e"
                                          data-entity-substitution="canonical"
                                          title="Membership"
                                        >
                                          Visit our Membership page
                                        </a>{" "}
                                        for enquiries or to find out about
                                        becoming a Member.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-30825"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-30825"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Groups of 10 or more people</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-30825"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-30825"
                                  >
                                    <p>
                                      Self-led groups of 10 or more people will
                                      need to book a{" "}
                                      <a href="https://ticketing.britishmuseum.org/events?k=group%20bookings">
                                        group ticket
                                      </a>
                                      . Please see the{" "}
                                      <a
                                        href="/visit/group-visits"
                                        data-entity-type="node"
                                        data-entity-uuid="95117d04-3113-4d26-8801-88f53e60344b"
                                        data-entity-substitution="canonical"
                                        title="Group visits"
                                      >
                                        Group visits
                                      </a>{" "}
                                      page for more details.&nbsp;
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-30826"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-30826"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> School groups</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-30826"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-30826"
                                  >
                                    <p>
                                      School groups should contact the Box
                                      Office on +44 (0)20 7323 8181 to book
                                      their visit to the Museum. More
                                      information can be found on our{" "}
                                      <a
                                        href="/learn/schools/school-visits"
                                        data-entity-type="node"
                                        data-entity-uuid="f7e767c7-1f58-409d-afe3-c402d83613ae"
                                        data-entity-substitution="canonical"
                                        title="School visits"
                                      >
                                        School visits
                                      </a>{" "}
                                      page.&nbsp;
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="paragraph paragraph--type--slice-banner paragraph--view-mode--default section section--slice-banner section--maintain-spacer-top section--bg-white banner"
                            aria-labelledby="paragraph-2822-title"
                          >
                            <div className="container">
                              <div className="banner__outer">
                                <div className="banner__inner">
                                  <div className="banner__title">
                                    <h2
                                      id="paragraph-2822-title"
                                      className="section__title"
                                    >
                                      10% off for Members
                                    </h2>
                                  </div>
                                  <div className="banner__content">
                                    <p>
                                      Become a Member and enjoy a
                                      10%&nbsp;discount at all of the Museum's
                                      cafés, restaurants and shops.&nbsp;
                                    </p>
                                    <div className="banner__button-container">
                                      <a
                                        href="/membership"
                                        className="button button--chevron"
                                        data-tracking="cta"
                                      >
                                        <span>Become a Member</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="accordion section--no-keyline-next js-accordion paragraph paragraph--type--slice-accordion paragraph--view-mode--default section section--slice-accordion section--bg-white"
                            aria-labelledby="paragraph-19094-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="gallery-information"
                              />
                              <div className="section__inner">
                                <h2
                                  id="paragraph-19094-title"
                                  className="section__title"
                                >
                                  Gallery information
                                </h2>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-19091"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-19091"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Make the most of your visit</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-19091"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-19091"
                                  >
                                    <p>
                                      Explore world cultures from the
                                      Mediterranean to the Middle East and from
                                      the Americas to Africa.
                                    </p>
                                    <ul>
                                      <li>
                                        View a{" "}
                                        <a
                                          href="/visit/museum-map"
                                          data-entity-type="node"
                                          data-entity-uuid="7c536aee-22b1-4d7e-acf3-63102d8b003f"
                                          data-entity-substitution="canonical"
                                          title="Museum map"
                                        >
                                          map of the Museum
                                        </a>
                                        .
                                      </li>
                                      <li>
                                        Explore more of the Museum with our{" "}
                                        <a
                                          href="/visit/object-trails"
                                          data-entity-type="node"
                                          data-entity-uuid="8e54ee70-2fc1-452f-8483-cd752b3ac61e"
                                          data-entity-substitution="canonical"
                                          title="Object trails"
                                        >
                                          object trails
                                        </a>
                                        &nbsp;or try a selection of our{" "}
                                        <a
                                          href="/visit/family-visits/museum-missions"
                                          data-entity-type="node"
                                          data-entity-uuid="9c2dbc92-9b61-4c6a-ab74-04a1ad3dd01c"
                                          data-entity-substitution="canonical"
                                          title="Museum Missions"
                                        >
                                          Museum Missions
                                        </a>
                                        .&nbsp;
                                      </li>
                                      <li>
                                        Take a self-guided tour of the Museum
                                        using our{" "}
                                        <a
                                          href="/visit/audio-app"
                                          data-entity-type="node"
                                          data-entity-uuid="4dc67409-f364-4bc6-9513-a1dac2f34f84"
                                          data-entity-substitution="canonical"
                                          title="Audio app"
                                        >
                                          Audio app
                                        </a>{" "}
                                        (available in various&nbsp;languages
                                        including British Sign Language).
                                        Download via the&nbsp;
                                        <a href="https://apps.apple.com/gb/app/british-museum-audio/id1609255954">
                                          App Store
                                        </a>
                                        &nbsp;or&nbsp;
                                        <a href="https://play.google.com/store/apps/details?id=org.britishmuseum.tapartme">
                                          Google Play Store
                                        </a>
                                        . Please bring your headphones with you
                                        or purchase earbuds from the Guide Desk
                                        or British Museum Shop.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-19092"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-19092"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> List of available galleries</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-19092"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-19092"
                                  >
                                    <p>
                                      See the list of available
                                      galleries&nbsp;for you to enjoy (please
                                      note this list is subject to change):
                                      <a
                                        className="ck-anchor"
                                        id="gallery"
                                        name="gallery"
                                      />
                                    </p>
                                    <p>Lower floor</p>
                                    <ul>
                                      <li>
                                        <a
                                          href="/collection/galleries/africa"
                                          data-entity-type="node"
                                          data-entity-uuid="c09075ed-2b8b-4607-96fc-1ccc52f156a3"
                                          data-entity-substitution="canonical"
                                          title="Africa"
                                        >
                                          Room 25: Africa (
                                          <em>The Sainsbury Galleries</em>)
                                        </a>
                                        &nbsp;
                                      </li>
                                    </ul>
                                    <p>Ground floor</p>
                                    <ul>
                                      <li>
                                        <a
                                          href="/collection/galleries/great-court"
                                          data-entity-type="node"
                                          data-entity-uuid="7755178c-fa3c-4172-937b-865889f2e744"
                                          data-entity-substitution="canonical"
                                          title="Great Court "
                                        >
                                          Great Court
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/enlightenment"
                                          data-entity-type="node"
                                          data-entity-uuid="6e4b9f7c-2739-4f56-a367-f3bbc821f644"
                                          data-entity-substitution="canonical"
                                          title="Enlightenment"
                                        >
                                          Room 1: Enlightenment
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/collecting-world"
                                          data-entity-type="node"
                                          data-entity-uuid="af0c1fa2-e201-4943-8d5d-2c6b8b8cbe7d"
                                          data-entity-substitution="canonical"
                                          title="Collecting the world "
                                        >
                                          Room 2: Collecting&nbsp;the world
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/waddesdon-bequest"
                                          data-entity-type="node"
                                          data-entity-uuid="289b5802-e80b-4a98-8291-55ec633394b7"
                                          data-entity-substitution="canonical"
                                          title="The Waddesdon Bequest"
                                        >
                                          Room 2a: The Waddesdon Bequest (funded
                                          by <em>The Rothschild Foundation</em>)
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/egyptian-sculpture"
                                          data-entity-type="node"
                                          data-entity-uuid="918e1211-0af3-4fb9-9645-620724aa8d29"
                                          data-entity-substitution="canonical"
                                          title="Egyptian sculpture"
                                        >
                                          Room 4: Egyptian sculpture
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/assyrian-sculpture-and-balawat-gates"
                                          data-entity-type="node"
                                          data-entity-uuid="62d978a7-250f-4bb0-87ec-b8633150cb5a"
                                          data-entity-substitution="canonical"
                                          title="Assyrian sculpture and Balawat Gates"
                                        >
                                          Room 6: Assyrian sculpture and Balawat
                                          Gates
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/assyria-nimrud"
                                          data-entity-type="node"
                                          data-entity-uuid="33a6eab8-0545-4369-9ef5-7f068779fe17"
                                          data-entity-substitution="canonical"
                                          title="Assyria: Nimrud"
                                        >
                                          Rooms 7–8: Assyria: Nimrud
                                        </a>
                                        *
                                      </li>
                                      <li>
                                        <a href="https://www.britishmuseum.org/collection/galleries/assyria-nineveh">
                                          Room 9: Assyria: Nineveh
                                        </a>
                                        *
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/assyria-lion-hunts"
                                          data-entity-type="node"
                                          data-entity-uuid="ed72acc0-5e00-4c08-99cf-54f043df4eb1"
                                          data-entity-substitution="canonical"
                                          title="Assyria lion hunts"
                                        >
                                          Room 10: Assyria: Lion hunts, Siege of
                                          Lachish and Khorsabad
                                        </a>
                                        *
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greece-minoans-and-mycenaeans"
                                          data-entity-type="node"
                                          data-entity-uuid="6080c4c5-9746-4f2c-98ba-141712909c38"
                                          data-entity-substitution="canonical"
                                          title="Greece: Minoans and Mycenaeans"
                                        >
                                          Room 12: Greece: Minoans and
                                          Mycenaeans (
                                          <em>
                                            The Arthur I Fleischman Gallery
                                          </em>
                                          )
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greece-1050-520-bc"
                                          data-entity-type="node"
                                          data-entity-uuid="388a6dd7-ae21-42b4-ad44-7af548acaaee"
                                          data-entity-substitution="canonical"
                                          title="Greece 1050–520 BC"
                                        >
                                          Room 13: Greece 1050–520 BC
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greek-vases"
                                          data-entity-type="node"
                                          data-entity-uuid="2fc166fd-4301-48b5-8bec-2e0f0a81aee0"
                                          data-entity-substitution="canonical"
                                          title="Greek vases"
                                        >
                                          Room 14: Greek vases
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greece-athens-and-lycia"
                                          data-entity-type="node"
                                          data-entity-uuid="3255e1a8-f4b2-4dca-8bbf-06e49a1759da"
                                          data-entity-substitution="canonical"
                                          title="Greece: Athens and Lycia"
                                        >
                                          Room 15: Greece: Athens and Lycia
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greece-bassai-sculptures"
                                          data-entity-type="node"
                                          data-entity-uuid="3ffe6de0-3574-402c-b876-8d86e3b09431"
                                          data-entity-substitution="canonical"
                                          title="Greece: Bassai sculptures"
                                        >
                                          Room 16: Greece: Bassai sculptures
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/nereid-monument"
                                          data-entity-type="node"
                                          data-entity-uuid="5f500daf-8b10-4277-aa57-49794b3ac47c"
                                          data-entity-substitution="canonical"
                                          title="Nereid Monument"
                                        >
                                          Room 17: Nereid Monument
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greece-parthenon"
                                          data-entity-type="node"
                                          data-entity-uuid="d0f2c51d-4052-4981-a54f-f493540003d8"
                                          data-entity-substitution="canonical"
                                          title="Greece: Parthenon"
                                        >
                                          Room 18: Greece: Parthenon
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greece-athens"
                                          data-entity-type="node"
                                          data-entity-uuid="54de122a-1160-4434-bb59-27e78bffd9ce"
                                          data-entity-substitution="canonical"
                                          title="Greece: Athens"
                                        >
                                          Room 19: Greece: Athens
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greeks-and-lycians-400-325-bc"
                                          data-entity-type="node"
                                          data-entity-uuid="04f9fee6-4ec2-4d7f-a027-a7b7b9cb5fc4"
                                          data-entity-substitution="canonical"
                                          title="Greeks and Lycians 400–325 BC"
                                        >
                                          Room 20: Greeks and Lycians, 400–325
                                          BC
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/mausoleum-halikarnassos"
                                          data-entity-type="node"
                                          data-entity-uuid="96044c10-5c61-4aac-a0f4-965b187c346c"
                                          data-entity-substitution="canonical"
                                          title="Mausoleum of Halikarnassos"
                                        >
                                          Room 21: Mausoleum of Halikarnassos
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/world-alexander"
                                          data-entity-type="node"
                                          data-entity-uuid="4cfa31e0-04c6-4fff-96dd-db99362ea12c"
                                          data-entity-substitution="canonical"
                                          title="The world of Alexander"
                                        >
                                          Room 22: The world of Alexander
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greek-and-roman-sculpture"
                                          data-entity-type="node"
                                          data-entity-uuid="c9ea6274-8da5-4cc7-8243-1a599f96c6c1"
                                          data-entity-substitution="canonical"
                                          title="Greek and Roman sculpture"
                                        >
                                          Room 23: Greek and Roman sculpture
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/living-and-dying"
                                          data-entity-type="node"
                                          data-entity-uuid="fbd1bdd0-6e33-4a10-9c03-b5833ddd1c6f"
                                          data-entity-substitution="canonical"
                                          title="Living and Dying"
                                        >
                                          Room 24: Living and Dying&nbsp;(
                                          <em>The Wellcome Trust Gallery</em>)
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/north-america"
                                          data-entity-type="node"
                                          data-entity-uuid="9cae5860-6f23-4df6-8cc4-0a5466993b26"
                                          data-entity-substitution="canonical"
                                          title="North America"
                                        >
                                          Room 26: North America
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/mexico"
                                          data-entity-type="node"
                                          data-entity-uuid="970a6aa3-0e63-4e32-8e3b-b13d7d919df1"
                                          data-entity-substitution="canonical"
                                          title="Mexico"
                                        >
                                          Room 27: Mexico
                                        </a>
                                      </li>
                                    </ul>
                                    <p>Upper floors</p>
                                    <ul>
                                      <li>
                                        <a
                                          href="/collection/galleries/clocks-and-watches"
                                          data-entity-type="node"
                                          data-entity-uuid="9635b4b0-0e4e-4350-85a0-e381921243b1"
                                          data-entity-substitution="canonical"
                                          title="Clocks and watches"
                                        >
                                          Rooms 38–39: Clocks and watches (
                                          <em>
                                            The Sir Harry and Lady Djanogly
                                            Gallery
                                          </em>
                                          )
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/medieval-europe"
                                          data-entity-type="node"
                                          data-entity-uuid="62f62ea4-348b-46c7-b815-e55c0e4043e0"
                                          data-entity-substitution="canonical"
                                          title="Medieval Europe"
                                        >
                                          Room 40: Medieval Europe, 1050–1500 (
                                          <em>
                                            The Sir Paul and Lady Ruddock
                                            Gallery
                                          </em>
                                          )
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/sutton-hoo-and-europe"
                                          data-entity-type="node"
                                          data-entity-uuid="044abbe3-1935-45df-ac17-78bb9a6e0f39"
                                          data-entity-substitution="canonical"
                                          title="Sutton Hoo and Europe"
                                        >
                                          Room 41: Sutton Hoo and Europe, AD
                                          300–1100 (
                                          <em>
                                            The Sir Paul and Lady Ruddock
                                            Gallery
                                          </em>
                                          )
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://islamicworld.britishmuseum.org/">
                                          Rooms 42–43: The Islamic world (
                                          <em>
                                            The Albukhary Foundation Gallery
                                          </em>
                                          )
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/europe-1400-1800"
                                          data-entity-type="node"
                                          data-entity-uuid="670a605a-b5c8-4cbd-95db-c468522048a1"
                                          data-entity-substitution="canonical"
                                          title="Europe 1400–1800"
                                        >
                                          Room 46: Europe 1400–1800
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/europe-1800-1900"
                                          data-entity-type="node"
                                          data-entity-uuid="c8e28fb2-ee83-4944-bbe8-76352d9915a4"
                                          data-entity-substitution="canonical"
                                          title="Europe 1800–1900"
                                        >
                                          Room 47: Europe 1800–1900
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/europe-1900-present"
                                          data-entity-type="node"
                                          data-entity-uuid="e703051e-ad87-4b1c-8b37-cd0873075f8f"
                                          data-entity-substitution="canonical"
                                          title="Europe 1900 to the present"
                                        >
                                          Room 48: Europe 1900 to the present
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/roman-britain"
                                          data-entity-type="node"
                                          data-entity-uuid="57904f64-d258-4d2c-add2-c2842cd6213c"
                                          data-entity-substitution="canonical"
                                          title="Roman Britain"
                                        >
                                          Room 49: Roman Britain (
                                          <em>The Weston Gallery</em>)
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/britain-and-europe-800-bc-ad-43"
                                          data-entity-type="node"
                                          data-entity-uuid="47f38c2a-8831-47a8-9ac4-a617c83c0e35"
                                          data-entity-substitution="canonical"
                                          title="Britain and Europe 800 BC–AD 43"
                                        >
                                          Room 50: Britain and Europe 800
                                          BC–AD43
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/europe-and-middle-east"
                                          data-entity-type="node"
                                          data-entity-uuid="0f8e69ff-826e-4608-b678-8bda090feaa5"
                                          data-entity-substitution="canonical"
                                          title="Europe and Middle East"
                                        >
                                          Room 51: Europe and Middle East,
                                          10,000–800 BC (
                                          <em>
                                            The Sheikh Zayed Bin Sultan Al
                                            Nahyan Gallery
                                          </em>
                                          )
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/ancient-iran"
                                          data-entity-type="node"
                                          data-entity-uuid="2e4e9d1d-39c1-4dad-9ca7-8ea63dd6955c"
                                          data-entity-substitution="canonical"
                                          title="Ancient Iran"
                                        >
                                          Room 52: Ancient Iran (
                                          <em>The Rahim Irvani Gallery</em>)
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/ancient-south-arabia"
                                          data-entity-type="node"
                                          data-entity-uuid="d878fbf9-3a3b-46f1-a6e4-5f21da08e5cf"
                                          data-entity-substitution="canonical"
                                          title="Ancient South Arabia"
                                        >
                                          Room 53: Ancient South Arabia
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/anatolia-and-urartu-7000-300-bc"
                                          data-entity-type="node"
                                          data-entity-uuid="8385188b-64f8-4e63-a682-84f22e77cd6f"
                                          data-entity-substitution="canonical"
                                          title="Anatolia and Urartu 7000–300 BC"
                                        >
                                          Room 54: Anatolia and Urartu, 7000–300
                                          BC
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/mesopotamia-1500-539-bc"
                                          data-entity-type="node"
                                          data-entity-uuid="0f73723e-263c-4b13-a45c-8da4696a6f7f"
                                          data-entity-substitution="canonical"
                                          title="Mesopotamia 1500–539 BC"
                                        >
                                          Room 55: Mesopotamia, 1500–539 BC
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/mesopotamia"
                                          data-entity-type="node"
                                          data-entity-uuid="4723e74b-7ccd-464b-8d45-f1fc21fd6d44"
                                          data-entity-substitution="canonical"
                                          title="Mesopotamia"
                                        >
                                          Room 56: Mesopotamia, 6000–1500 BC
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/ancient-levant"
                                          data-entity-type="node"
                                          data-entity-uuid="3082b85a-4f56-4b0a-8703-e2fe1ee3f541"
                                          data-entity-substitution="canonical"
                                          title="Ancient Levant"
                                        >
                                          Rooms 57–59: Ancient Levant
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/egyptian-life-and-death"
                                          data-entity-type="node"
                                          data-entity-uuid="fe61455b-4285-4095-8b30-d1fc98c8c9ac"
                                          data-entity-substitution="canonical"
                                          title="Egyptian life and death"
                                        >
                                          Room 61: Egyptian life and death: the
                                          tomb-chapel of Nebamun (
                                          <em>The Michael Cohen Gallery</em>)
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/egyptian-death-and-afterlife-mummies"
                                          data-entity-type="node"
                                          data-entity-uuid="db4504fd-a7cb-4c56-beb1-8e684358d50a"
                                          data-entity-substitution="canonical"
                                          title="Egyptian death and afterlife: mummies"
                                        >
                                          Rooms 62–63: Egyptian death and
                                          afterlife: mummies (
                                          <em>The Roxie Walker Galleries</em>)
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/early-egypt"
                                          data-entity-type="node"
                                          data-entity-uuid="b941bf96-86cf-4ea7-bd0e-5bf1ab5c406e"
                                          data-entity-substitution="canonical"
                                          title="Early Egypt"
                                        >
                                          Room 64: Early Egypt
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/sudan-egypt-and-nubia"
                                          data-entity-type="node"
                                          data-entity-uuid="dcc4e9f1-aac6-40bc-9348-7235623e9d2d"
                                          data-entity-substitution="canonical"
                                          title="Sudan, Egypt and Nubia"
                                        >
                                          Room 65: Sudan, Egypt and Nubia
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/ethiopia-and-coptic-egypt"
                                          data-entity-type="node"
                                          data-entity-uuid="a2a2828f-e2cb-42ca-8a36-68f0dfa7d92f"
                                          data-entity-substitution="canonical"
                                          title="Ethiopia and Coptic Egypt"
                                        >
                                          Room 66: Ethiopia and Coptic Egypt
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/korea"
                                          data-entity-type="node"
                                          data-entity-uuid="f91d3f3b-ecf8-4f94-ae78-51008919fbdf"
                                          data-entity-substitution="canonical"
                                          title="Korea"
                                        >
                                          Room 67: Korea (
                                          <em>The Korea Foundation Gallery</em>)
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/money"
                                          data-entity-type="node"
                                          data-entity-uuid="a52c61be-e49d-44c5-8245-5fe7a9b7f57f"
                                          data-entity-substitution="canonical"
                                          title="Money"
                                        >
                                          Room 68: Money
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greek-and-roman-life"
                                          data-entity-type="node"
                                          data-entity-uuid="5b6775e8-b865-4415-93d0-fce8efd36c57"
                                          data-entity-substitution="canonical"
                                          title="Greek and Roman life"
                                        >
                                          Room 69: Greek and Roman life
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/roman-empire"
                                          data-entity-type="node"
                                          data-entity-uuid="ee8458b5-f990-4288-916d-08e53a8f216b"
                                          data-entity-substitution="canonical"
                                          title="Roman Empire"
                                        >
                                          Room 70: Roman Empire (
                                          <em>The Wolfson Gallery</em>)
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/etruscan-world"
                                          data-entity-type="node"
                                          data-entity-uuid="e89fc918-66cf-4a5e-b5fd-091a8091ea7c"
                                          data-entity-substitution="canonical"
                                          title="Etruscan world"
                                        >
                                          Room 71: Etruscan world
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/ancient-cyprus"
                                          data-entity-type="node"
                                          data-entity-uuid="a027006a-d96a-4b69-b776-f8bb7ed86629"
                                          data-entity-substitution="canonical"
                                          title="Ancient Cyprus"
                                        >
                                          Room 72: Ancient Cyprus (
                                          <em>The A.G. Leventis Gallery</em>)
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/greeks-italy"
                                          data-entity-type="node"
                                          data-entity-uuid="790fce96-16d6-40e4-847d-d60575713f0a"
                                          data-entity-substitution="canonical"
                                          title="Greeks in Italy"
                                        >
                                          Room 73: Greeks in Italy
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/prints-and-drawings-galleries-90-and-90a"
                                          data-entity-type="node"
                                          data-entity-uuid="62a37279-3329-46c9-ab40-235cc879b73a"
                                          data-entity-substitution="canonical"
                                          title="Prints and drawings galleries 90 and 90a"
                                        >
                                          Rooms 90–90a: Prints and drawings
                                          displays
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/japan"
                                          data-entity-type="node"
                                          data-entity-uuid="f6bada9b-84f8-4d96-90b8-1fe2f124708f"
                                          data-entity-substitution="canonical"
                                          title="Japan"
                                        >
                                          Rooms 92–94: Japan (
                                          <em>
                                            The Mitsubishi Corporation Japanese
                                            Galleries
                                          </em>
                                          )
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/chinese-ceramics"
                                          data-entity-type="node"
                                          data-entity-uuid="3e735048-809e-4473-afbe-3c4c5a07b648"
                                          data-entity-substitution="canonical"
                                          title="Chinese ceramics"
                                        >
                                          Room 95: Chinese Ceramics – Sir
                                          Percival David Collection (
                                          <em>
                                            The Sir Joseph Hotung Centre for
                                            Ceramic Studies
                                          </em>
                                          )
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      *Limited opening: Rooms 7, 9, 10, 19, 20,
                                      57 and 58 are open 11:00–15:00 daily.
                                    </p>
                                    <p>
                                      For more information on access to the
                                      galleries visit our&nbsp;
                                      <a
                                        href="/visit/accessibility-museum"
                                        data-entity-type="node"
                                        data-entity-uuid="377d1eaf-caa3-4fba-8eeb-7eb62bb562e9"
                                        data-entity-substitution="canonical"
                                        title="Accessibility at the Museum"
                                      >
                                        Accessibility at the Museum
                                      </a>
                                      &nbsp;page.&nbsp;
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-19093"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-19093"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Planned gallery closures</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-19093"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-19093"
                                  >
                                    <p>
                                      Galleries in the Museum may be closed for
                                      maintenance, refurbishment or private
                                      events. Where possible, we'll list the
                                      time and date of the closures below. All
                                      planned closures will also be detailed on
                                      the affected{" "}
                                      <a
                                        href="/collection/galleries"
                                        data-entity-type="node"
                                        data-entity-uuid="649ba3ba-7ce8-43fe-b37b-0fb00825b06c"
                                        data-entity-substitution="canonical"
                                        title="Galleries"
                                      >
                                        gallery pages
                                      </a>
                                      .&nbsp;Occasionally we may need to close
                                      galleries at short notice for safety
                                      reasons. We regret that in these cases
                                      we're not always able to alert the public
                                      in advance.
                                    </p>
                                    <p>
                                      Due to regular maintenance, the following
                                      galleries will be temporarily
                                      closed:&nbsp;
                                    </p>
                                    <p>Lower floor</p>
                                    <ul>
                                      <li>
                                        <a
                                          href="/collection/africa"
                                          data-entity-type="node"
                                          data-entity-uuid="b9431896-7bda-48ca-93d2-48342eaa9a62"
                                          data-entity-substitution="canonical"
                                          title="Africa"
                                        >
                                          Room 25: Africa (
                                          <em>The Sainsbury Galleries</em>)
                                        </a>{" "}
                                        from 10–21 March 2025
                                      </li>
                                    </ul>
                                    <p>Ground floor</p>
                                    <ul>
                                      <li>
                                        <a
                                          href="/collection/galleries/egyptian-sculpture"
                                          data-entity-type="node"
                                          data-entity-uuid="918e1211-0af3-4fb9-9645-620724aa8d29"
                                          data-entity-substitution="canonical"
                                          title="Egyptian sculpture"
                                        >
                                          Room 4: Egyptian sculpture
                                        </a>{" "}
                                        from 13–24 January 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/assyrian-sculpture-and-balawat-gates"
                                          data-entity-type="node"
                                          data-entity-uuid="62d978a7-250f-4bb0-87ec-b8633150cb5a"
                                          data-entity-substitution="canonical"
                                          title="Assyrian sculpture and Balawat Gates"
                                        >
                                          Room 6a: Assyrian sculpture and
                                          Balawat Gates
                                        </a>{" "}
                                        from 13–24 January 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/assyria-nineveh"
                                          data-entity-type="node"
                                          data-entity-uuid="c1d966e3-d57b-44f6-900d-6fffb54abade"
                                          data-entity-substitution="canonical"
                                          title="Assyria: Nineveh"
                                        >
                                          Room 9: Assyria: Nineveh
                                        </a>
                                        * from 13–24 January 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/collecting-world"
                                          data-entity-type="node"
                                          data-entity-uuid="af0c1fa2-e201-4943-8d5d-2c6b8b8cbe7d"
                                          data-entity-substitution="canonical"
                                          title="Collecting the world "
                                        >
                                          Room 2: Collecting the world
                                        </a>{" "}
                                        from from 27 January – 7 February 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/waddesdon-bequest"
                                          data-entity-type="node"
                                          data-entity-uuid="289b5802-e80b-4a98-8291-55ec633394b7"
                                          data-entity-substitution="canonical"
                                          title="The Waddesdon Bequest"
                                        >
                                          Room 2a: The Waddesdon Bequest (
                                          <em>
                                            funded by The Rothschild Foundation
                                          </em>
                                          )
                                        </a>{" "}
                                        from 27 January – 7 February 2025
                                      </li>
                                      <li>
                                        <a href="https://www.britishmuseum.org/collection/galleries/enlightenment">
                                          Room 1: Enlightenment
                                        </a>{" "}
                                        from 27 January – 14 February 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/assyrian-sculpture-and-balawat-gates"
                                          data-entity-type="node"
                                          data-entity-uuid="62d978a7-250f-4bb0-87ec-b8633150cb5a"
                                          data-entity-substitution="canonical"
                                          title="Assyrian sculpture and Balawat Gates"
                                        >
                                          Room 6b: Assyrian sculpture and
                                          Balawat Gates
                                        </a>{" "}
                                        from 10–21 February 2025
                                      </li>
                                      <li>
                                        <a href="https://www.britishmuseum.org/collection/galleries/assyria-nimrud">
                                          Rooms 7–8: Assyria: Nimrud
                                        </a>
                                        * from 10–21 February 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/living-and-dying"
                                          data-entity-type="node"
                                          data-entity-uuid="fbd1bdd0-6e33-4a10-9c03-b5833ddd1c6f"
                                          data-entity-substitution="canonical"
                                          title="Living and Dying"
                                        >
                                          Room 24: Living and Dying (
                                          <em>The Wellcome Trust Gallery</em>)
                                        </a>{" "}
                                        partially closed from 27 February – 7
                                        March 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/north-america"
                                          data-entity-type="node"
                                          data-entity-uuid="9cae5860-6f23-4df6-8cc4-0a5466993b26"
                                          data-entity-substitution="canonical"
                                          title="North America"
                                        >
                                          Room 26: North America
                                        </a>{" "}
                                        from 27 February – 7 March 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/mexico"
                                          data-entity-type="node"
                                          data-entity-uuid="970a6aa3-0e63-4e32-8e3b-b13d7d919df1"
                                          data-entity-substitution="canonical"
                                          title="Mexico"
                                        >
                                          Room 27: Mexico
                                        </a>{" "}
                                        from 27 February – 7 March 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/living-and-dying"
                                          data-entity-type="node"
                                          data-entity-uuid="fbd1bdd0-6e33-4a10-9c03-b5833ddd1c6f"
                                          data-entity-substitution="canonical"
                                          title="Living and Dying"
                                        >
                                          Room 24: Living and Dying (
                                          <em>The Wellcome Trust Gallery</em>)
                                        </a>{" "}
                                        partially closed from 10–21 March 2025
                                      </li>
                                    </ul>
                                    <p>Upper floors</p>
                                    <ul>
                                      <li>
                                        <a
                                          href="/collection/galleries/china-and-south-asia"
                                          data-entity-type="node"
                                          data-entity-uuid="b7a989f4-3561-47ed-a786-f0f723756df3"
                                          data-entity-substitution="canonical"
                                          title="China and South Asia"
                                        >
                                          Room 33: China and South Asia (
                                          <em>Sir Joseph Hotung Gallery</em>)
                                        </a>{" "}
                                        from 2–13 December 2024
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/india-amaravati"
                                          data-entity-type="node"
                                          data-entity-uuid="1ee7d5e6-d9ac-42f3-84b2-110b6c267898"
                                          data-entity-substitution="canonical"
                                          title="India: Amaravati"
                                        >
                                          Room 33a: India: Amaravati (
                                          <em>The Asahi Shimbun Gallery</em>)
                                        </a>{" "}
                                        from 2–13 December 2024
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/chinese-jade"
                                          data-entity-type="node"
                                          data-entity-uuid="b3babc18-8de7-4c36-8131-1078febd44b0"
                                          data-entity-substitution="canonical"
                                          title="Chinese jade"
                                        >
                                          Room 33b: Chinese jade (
                                          <em>
                                            The Selwyn and Ellie Alleyne Gallery
                                          </em>
                                          )
                                        </a>{" "}
                                        from 2–13 December 2024
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/korea"
                                          data-entity-type="node"
                                          data-entity-uuid="f91d3f3b-ecf8-4f94-ae78-51008919fbdf"
                                          data-entity-substitution="canonical"
                                          title="Korea"
                                        >
                                          Room 67: Korea (
                                          <em>The Korea Foundation Gallery</em>)
                                        </a>{" "}
                                        from 27–31 January 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/chinese-ceramics"
                                          data-entity-type="node"
                                          data-entity-uuid="3e735048-809e-4473-afbe-3c4c5a07b648"
                                          data-entity-substitution="canonical"
                                          title="Chinese ceramics"
                                        >
                                          Room 95: Chinese Ceramics – Sir
                                          Percival David Collection (
                                          <em>
                                            The Sir Joseph Hotung Centre for
                                            Ceramic Studies
                                          </em>
                                          )
                                        </a>{" "}
                                        from 27–31 January 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/clocks-and-watches"
                                          data-entity-type="node"
                                          data-entity-uuid="9635b4b0-0e4e-4350-85a0-e381921243b1"
                                          data-entity-substitution="canonical"
                                          title="Clocks and watches"
                                        >
                                          Rooms 38–39: Clocks and watches (
                                          <em>
                                            The Sir Harry and Lady Djanogly
                                            Gallery
                                          </em>
                                          )
                                        </a>{" "}
                                        from 24–28 March 2025
                                      </li>
                                      <li>
                                        <a
                                          href="/collection/galleries/japan"
                                          data-entity-type="node"
                                          data-entity-uuid="f6bada9b-84f8-4d96-90b8-1fe2f124708f"
                                          data-entity-substitution="canonical"
                                          title="Japan"
                                        >
                                          Rooms 92–94: Japan (
                                          <em>
                                            The Mitsubishi Corporation Japanese
                                            Galleries
                                          </em>
                                          )
                                        </a>{" "}
                                        from 31 March – 11 April 2025
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="paragraph paragraph--type--slice-banner paragraph--view-mode--default section section--slice-banner section--maintain-spacer-top section--bg-white banner"
                            aria-labelledby="paragraph-9625-title"
                          >
                            <div className="container">
                              <div className="banner__outer">
                                <div className="banner__inner">
                                  <div className="banner__title">
                                    <h2
                                      id="paragraph-9625-title"
                                      className="section__title"
                                    >
                                      Support the Museum
                                    </h2>
                                  </div>
                                  <div className="banner__content">
                                    <p>
                                      Your support is vital, now more than
                                      ever,&nbsp;and helps the Museum to share
                                      the collection with the world.
                                      <a name="shop" />
                                    </p>
                                    <div className="banner__button-container">
                                      <a
                                        href="/support-us/donate"
                                        className="button button--chevron"
                                        data-tracking="cta"
                                      >
                                        <span>Make a donation</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="paragraph paragraph--type--slice-content paragraph--view-mode--default section section--slice-content section--slice-content--align-left section--bg-white"
                            aria-labelledby="paragraph-18679-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="exhibitions"
                              />{" "}
                              <div className="section__inner">
                                <h2
                                  id="paragraph-18679-title"
                                  className="section__title section--slice-content__title"
                                >
                                  Exhibitions
                                </h2>
                                <div className="section--slice-content__main">
                                  <div className="section--slice-content__wysiwyg wysiwyg">
                                    <p>
                                      Tickets are available to book for{" "}
                                      <a href="https://www.britishmuseum.org/exhibitions/silk-roads">
                                        <em>Silk Roads</em>
                                      </a>{" "}
                                      (26 September 2024 – 23 February 2025),{" "}
                                      <a
                                        href="/exhibitions/hew-locke-what-have-we-here"
                                        data-entity-type="node"
                                        data-entity-uuid="a19886e6-5fa1-4655-93f0-6a44291033cd"
                                        data-entity-substitution="canonical"
                                        title="Hew Locke: what have we here?"
                                      >
                                        <em>Hew Locke: what have we here?</em>
                                      </a>
                                      <em> </em>(17 October 2024 – 9 February
                                      2025) and{" "}
                                      <a href="https://www.britishmuseum.org/exhibitions/picasso-printmaker">
                                        <em>Picasso: printmaker</em>
                                      </a>{" "}
                                      (7 November 2024 – 30 March 2025).
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="paragraph paragraph--type--slice-teaser paragraph--view-mode--default section section--slice-teaser section--z-index-scope section--has-carousel section--bg-white"
                            aria-labelledby="paragraph-18680-title"
                          >
                            <div className="container">
                              <div className="section__inner">
                                <div className="teaser-listing__container">
                                  <h2
                                    id="paragraph-18680-title"
                                    className="visually-hidden teaser-listing__title"
                                  >
                                    Exhibitions
                                  </h2>
                                  <div className="carousel-container | js-carousel-container">
                                    <div
                                      className="teaser-listing carousel carousel--2-col swiper-container | js-carousel-2-col"
                                      data-items-length={3}
                                      data-slides-to-show={2}
                                    >
                                      <ul className="l-grid l-grid--3-col | teaser-listing__teasers swiper-wrapper">
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser teaser--has-meta-top">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyload"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=Ef0XY0UQ"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=73k-AqJa 400w, /sites/default/files/styles/16_9_media_small/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=Ef0XY0UQ 750w, /sites/default/files/styles/16_9_media_medium/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=sOrwHw5e 1000w, /sites/default/files/styles/16_9_media_large/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=IkIcINR5 1300w, /sites/default/files/styles/16_9_media_huge/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&itok=frHfjMMM 1600w"
                                                    data-focal-position="center center"
                                                    alt="Procession of camels with lone figure leading in shadow against orange sky"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=73k-AqJa
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=Ef0XY0UQ
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=sOrwHw5e
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=IkIcINR5
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=frHfjMMM
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-06/Silk-Roads-teaser-2000x1159.jpg?h=bacbf645&amp;itok=Ef0XY0UQ"
                                                    data-sizes="auto"
                                                    alt="Procession of camels
                                                    with lone figure leading in
                                                    shadow against orange sky"
                                                    /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <div className="teaser__defacer teaser__defacer-exhibition-events">
                                                    Book now
                                                  </div>
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/exhibitions/silk-roads"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>Silk Roads</span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                      <span className="visually-hidden">
                                                        . Book now .
                                                      </span>
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Go beyond sand and spices to
                                                    discover how the journeys of
                                                    people, objects and ideas
                                                    across three continents
                                                    shaped cultures and
                                                    histories.
                                                  </div>
                                                </div>
                                                <span className="teaser__button | button button--chevron">
                                                  Find out more{" "}
                                                  <span className="visually-hidden">
                                                    about{" "}
                                                    <span>Silk Roads</span>
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser teaser--has-meta-top">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyload"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&itok=2U2LQ4z6"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&itok=bBQ9Fzq8 400w, /sites/default/files/styles/16_9_media_small/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&itok=2U2LQ4z6 750w, /sites/default/files/styles/16_9_media_medium/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&itok=LMuBMahJ 1000w, /sites/default/files/styles/16_9_media_large/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&itok=L6qjUiGy 1300w, /sites/default/files/styles/16_9_media_huge/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&itok=fhhOqZBV 1600w"
                                                    data-focal-position="bottom center"
                                                    alt="Bust of Queen, adorned with regalia of empire including skulls, tropical foliage, brass plaques, and replicas of military insignia including medals of imperial conflicts. "
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&amp;itok=bBQ9Fzq8
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&amp;itok=2U2LQ4z6
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&amp;itok=LMuBMahJ
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&amp;itok=L6qjUiGy
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&amp;itok=fhhOqZBV
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-10/Hew_Locke_Souvenir_20_1920x1080.jpg?h=70c8bc7d&amp;itok=2U2LQ4z6"
                                                    data-sizes="auto" alt="Bust
                                                    of Queen, adorned with
                                                    regalia of empire including
                                                    skulls, tropical foliage,
                                                    brass plaques, and replicas
                                                    of military insignia
                                                    including medals of imperial
                                                    conflicts. " /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <div className="teaser__defacer teaser__defacer-exhibition-events">
                                                    Book now
                                                  </div>
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/exhibitions/hew-locke-what-have-we-here"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Hew Locke: what have
                                                          we here?
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                      <span className="visually-hidden">
                                                        . Book now .
                                                      </span>
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    The renowned
                                                    Guyanese-British artist
                                                    turns his lens on the
                                                    British Museum collection,
                                                    exploring histories of
                                                    British imperial power.
                                                  </div>
                                                </div>
                                                <span className="teaser__button | button button--chevron">
                                                  Find out more{" "}
                                                  <span className="visually-hidden">
                                                    about{" "}
                                                    <span>
                                                      Hew Locke: what have we
                                                      here?
                                                    </span>
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser teaser--has-meta-top">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyload"
                                                    width={750}
                                                    height={422}
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&itok=4FLk7aFK"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&itok=f2LwjbQc 400w, /sites/default/files/styles/16_9_media_small/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&itok=4FLk7aFK 750w, /sites/default/files/styles/16_9_media_medium/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&itok=AJ1rXJ5o 1000w, /sites/default/files/styles/16_9_media_large/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&itok=fjPsUgQt 1300w, /sites/default/files/styles/16_9_media_huge/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&itok=rjI-2OsI 1600w"
                                                    data-focal-position="center center"
                                                    alt="A colourful Picasso print in red, green, yellow and black showing a lightbulb from a ceiling lamp lighting up a table with apples and a goblet on it."
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&amp;itok=f2LwjbQc
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&amp;itok=4FLk7aFK
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&amp;itok=AJ1rXJ5o
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&amp;itok=fjPsUgQt
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&amp;itok=rjI-2OsI
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2024-08/Picasso_teaser.jpg?h=d1cb525d&amp;itok=4FLk7aFK"
                                                    data-sizes="auto" alt="A
                                                    colourful Picasso print in
                                                    red, green, yellow and black
                                                    showing a lightbulb from a
                                                    ceiling lamp lighting up a
                                                    table with apples and a
                                                    goblet on it." /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <div className="teaser__defacer teaser__defacer-exhibition-events">
                                                    Book now
                                                  </div>
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/exhibitions/picasso-printmaker"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Picasso: printmaker
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                      <span className="visually-hidden">
                                                        . Book now .
                                                      </span>
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Spanning his entire career,
                                                    this exhibition follows
                                                    Picasso's prolific work as a
                                                    printmaker, offering
                                                    insights into his life via
                                                    his art.
                                                  </div>
                                                </div>
                                                <span className="teaser__button | button button--chevron">
                                                  Find out more{" "}
                                                  <span className="visually-hidden">
                                                    about{" "}
                                                    <span>
                                                      Picasso: printmaker
                                                    </span>
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="carousel__nav-container carousel__nav-container--inline-buttons">
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
                                      </button>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </section>
                          <div className="spacer spacer--small-divider" />
                          <section
                            className="accordion section--no-keyline-next js-accordion paragraph paragraph--type--slice-accordion paragraph--view-mode--default section section--slice-accordion section--bg-white"
                            aria-labelledby="paragraph-18458-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="opening-hours"
                              />
                              <div className="section__inner">
                                <h2
                                  id="paragraph-18458-title"
                                  className="section__title"
                                >
                                  Full opening hours
                                </h2>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18454"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18454"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Museum</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18454"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18454"
                                  >
                                    <p>
                                      Our opening hours are daily, 10.00–17.00 (
                                      <a
                                        href="/visit/late-opening-on-fridays"
                                        data-entity-type="node"
                                        data-entity-uuid="961906cc-8c75-4712-ad29-df331e30fbdd"
                                        data-entity-substitution="canonical"
                                        title="Late opening on Fridays"
                                      >
                                        Fridays: 20.30
                                      </a>
                                      )<br />
                                      Last entry: 16.45 (Fridays: 20.15)
                                    </p>
                                    <ul>
                                      <li>
                                        Box Office: 10.00–16.50, Monday to
                                        Friday (excluding Bank Holidays)
                                      </li>
                                      <li>
                                        Cloakroom: 10.00–17.00 (20.30 on
                                        Fridays). Last deposit is one hour
                                        before closing.
                                      </li>
                                      <li>
                                        Families Desk: 10.00–12.30 and
                                        13.15–16.30, weekends and London Borough
                                        of Camden&nbsp;
                                        <a
                                          href="https://www.camden.gov.uk/term-dates"
                                          rel="noopener"
                                          target="_blank"
                                        >
                                          school holidays
                                        </a>
                                        &nbsp;only.
                                      </li>
                                      <li>
                                        Ford Centre for Young Visitors:
                                        10.00–16.30, weekends and London Borough
                                        of Camden&nbsp;
                                        <a
                                          href="https://www.camden.gov.uk/term-dates"
                                          rel="noopener"
                                          target="_blank"
                                        >
                                          school holidays
                                        </a>
                                        &nbsp;only
                                      </li>
                                      <li>
                                        Galleries: 10.00–17.00 (20.30 on
                                        Fridays). Please note: we begin clearing
                                        galleries 10 minutes before they close.
                                      </li>
                                      <li>
                                        Great Court: 10.00–17.30 (Fridays 20.30)
                                      </li>
                                      <li>Guide Desk:&nbsp;10.00–16.30</li>
                                      <li>Information Desk: 10.00–17.00</li>
                                      <li>Ticket Desk: 10.00–16.30</li>
                                    </ul>
                                    <p>
                                      Find out about upcoming&nbsp;
                                      <a
                                        href="/visit/late-opening-on-fridays"
                                        data-entity-type="node"
                                        data-entity-uuid="961906cc-8c75-4712-ad29-df331e30fbdd"
                                        data-entity-substitution="canonical"
                                        title="Late opening on Fridays"
                                      >
                                        late opening&nbsp;on Fridays
                                      </a>
                                      . There will be no late night opening on
                                      Good Friday (18 April 2025).
                                    </p>
                                    <p>
                                      The Museum is closed 24–26 December.&nbsp;
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18455"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18455"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Exhibitions</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18455"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18455"
                                  >
                                    <p>
                                      <a href="https://www.britishmuseum.org/exhibitions-events">
                                        Special exhibitions
                                      </a>
                                      &nbsp;are open daily 10.00–17.00 (last
                                      entry at 16.45) and on Fridays until
                                      20.30&nbsp;(last entry at 20.15).
                                      <br />
                                      <br />
                                      Please arrive at the time stated on your
                                      ticket – we cannot guarantee admission
                                      before or after your allotted time slot.
                                    </p>
                                    <p>
                                      We begin clearing galleries 10 minutes
                                      before they close.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18456"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18456"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Shops</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18456"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18456"
                                  >
                                    <ul>
                                      <li>Bookshop: daily, 10.00–17.00</li>
                                      <li>
                                        Family shop: daily, 10.00–17.00&nbsp;
                                      </li>
                                      <li>
                                        Collections shop and Grenville Room:
                                        daily, 10.00–17.00
                                      </li>
                                      <li>
                                        <a href="https://www.britishmuseumshoponline.org/">
                                          Online shop
                                        </a>
                                        : open 24 hours a day
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18457"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18457"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Cafés and restaurants</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18457"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18457"
                                  >
                                    <ul>
                                      <li>Court Cafés: daily, 10.00–17.00</li>
                                      <li>
                                        <a
                                          href="/visit/food-and-drink/great-court-restaurant"
                                          data-entity-type="node"
                                          data-entity-uuid="11a37713-3038-40b6-8068-eeee441576f6"
                                          data-entity-substitution="canonical"
                                          title="Great Court Restaurant"
                                        >
                                          Great Court Restaurant
                                        </a>
                                        : daily, 11.30–17.00 (last sitting
                                        16.00).
                                      </li>
                                      <li>
                                        Pizzeria: Monday to Friday, 12.00–15.00
                                        and Saturday to Sunday, 11.00–16.00
                                      </li>
                                      <li>Coffee Lounge: 10.30–16.30</li>
                                      <li>Outside dining:&nbsp;10.00–17.00</li>
                                    </ul>
                                    <p>
                                      Find out more about the Museum's{" "}
                                      <a
                                        href="/visit/food-and-drink"
                                        data-entity-type="node"
                                        data-entity-uuid="04adabbd-eeac-4f2d-b0c0-512e6c60636b"
                                        data-entity-substitution="canonical"
                                        title="Food and drink"
                                      >
                                        cafés and restaurants
                                      </a>
                                      .&nbsp;
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-19449"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-19449"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Library, archive and study rooms
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-19449"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-19449"
                                  >
                                    <p>
                                      Booking requests for the department{" "}
                                      <a
                                        href="/resources/study-rooms"
                                        data-entity-type="node"
                                        data-entity-uuid="e278369e-c760-4e2a-927e-3c4a59b35b79"
                                        data-entity-substitution="canonical"
                                        title="Study rooms"
                                      >
                                        study rooms
                                      </a>{" "}
                                      at the British Museum main site can now be
                                      accepted. Opening hours vary.
                                      <br />
                                      <br />
                                      Our{" "}
                                      <a
                                        href="/resources/library-and-archive"
                                        data-entity-type="node"
                                        data-entity-uuid="89b463b6-4e49-41a8-a9bb-908e1b56bfb1"
                                        data-entity-substitution="canonical"
                                        title="Library and Archive"
                                      >
                                        library
                                      </a>
                                      &nbsp;and&nbsp;
                                      <a
                                        href="/resources/library-and-archive"
                                        data-entity-type="node"
                                        data-entity-uuid="89b463b6-4e49-41a8-a9bb-908e1b56bfb1"
                                        data-entity-substitution="canonical"
                                        title="Library and Archive"
                                      >
                                        archive
                                      </a>
                                      &nbsp;are open by
                                      appointment:&nbsp;Tuesday – Thursday,
                                      10.00–13.00 and 14.00–16.00.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div className="spacer spacer--small-divider" />
                          <section
                            className="object-embed paragraph paragraph--type--slice-object-embed paragraph--view-mode--default section section--slice-object-embed section--bg-white"
                            aria-labelledby="paragraph-5704-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="getting-here"
                              />{" "}
                              <div className="section__inner">
                                <h2
                                  id="paragraph-5704-title"
                                  className="section__title"
                                >
                                  Getting here
                                </h2>
                                <div className="object-embed__container">
                                  <div className="object-embed__object">
                                    <div className="paragraph paragraph--type--embed-google-map paragraph--view-mode--default">
                                      <div
                                        className="geolocation-map-wrapper"
                                        id="map-675b2fe6c1eb9"
                                        data-map-type="google_maps"
                                      >
                                        <div className="geolocation-map-controls"></div>
                                        <div className="geolocation-map-container js-show" />
                                        <div
                                          className="geolocation-location js-hide"
                                          id="675b2fe6c3323"
                                          data-lat="51.519413319978"
                                          data-lng="-0.12695659999997"
                                          data-set-marker="true"
                                          typeof="Place"
                                        >
                                          <span
                                            property="geo"
                                            typeof="GeoCoordinates"
                                          >
                                            <meta
                                              property="latitude"
                                              content="51.519413319978"
                                            />
                                            <meta
                                              property="longitude"
                                              content="-0.12695659999997"
                                            />
                                          </span>
                                          <h2
                                            className="location-title"
                                            property="name"
                                          >
                                            51.519413319978, -0.12695659999997
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="object-embed__content">
                                    <p>
                                      Main entrance:&nbsp;
                                      <br />
                                      The British Museum
                                      <br />
                                      Great Russell Street,
                                      <br />
                                      London WC1B 3DG
                                      <br />
                                      (what3words:{" "}
                                      <a href="https://w3w.co/young.verge.moves">
                                        ///young.verge.moves
                                      </a>
                                      )
                                    </p>
                                    <p>
                                      Second entrance:
                                      <br />
                                      Montague Place
                                      <br />
                                      London&nbsp;WC1E 7JW
                                      <br />
                                      (what3words:{" "}
                                      <a href="https://w3w.co/cooks.waddled.cook">
                                        ///cooks.waddled.cook
                                      </a>
                                      )
                                    </p>
                                    <p>
                                      We recommend using&nbsp;the Transport For
                                      London (TFL){" "}
                                      <a href="https://tfl.gov.uk/plan-a-journey/">
                                        Journey Planner
                                      </a>{" "}
                                      to plan your trip to the Museum.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="accordion section--no-keyline-current section--no-keyline-next js-accordion paragraph paragraph--type--slice-accordion paragraph--view-mode--default section section--slice-accordion section--bg-white"
                            aria-labelledby="paragraph-18464-title"
                          >
                            <div className="container">
                              <div className="section__inner">
                                <h2
                                  id="paragraph-18464-title"
                                  className="visually-hidden"
                                >
                                  Getting here
                                </h2>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18459"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18459"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> By bicycle</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18459"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18459"
                                  >
                                    <ul>
                                      <li>
                                        Bicycle racks are available inside the
                                        gates of the Main Entrance on Great
                                        Russell Street (please note that folding
                                        bikes are not allowed inside the
                                        premises).&nbsp;
                                      </li>
                                      <li>
                                        The Museum can't assume responsibility
                                        for damage or theft of bicycles left
                                        on-site.
                                      </li>
                                      <li>
                                        You may wish to use the&nbsp;
                                        <a
                                          data-gc-link="https://tfl.gov.uk/modes/cycling/santander-cycles"
                                          href="https://tfl.gov.uk/modes/cycling/santander-cycles"
                                        >
                                          Santander Cycle Hire scheme
                                        </a>
                                        &nbsp;on your journey. If so, a docking
                                        station can be found on the corner of
                                        Great Russell Street and Montague
                                        Street, a two-minute walk from&nbsp;the
                                        Main Entrance.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18460"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18460"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> By car</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18460"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18460"
                                  >
                                    <p>
                                      If you're planning to visit by car, please
                                      be aware that the Museum doesn't offer
                                      parking facilities, except for visitors
                                      with access requirements (visit the{" "}
                                      <a
                                        data-entity-substitution="canonical"
                                        data-entity-type="node"
                                        data-entity-uuid="377d1eaf-caa3-4fba-8eeb-7eb62bb562e9"
                                        href="/visit/accessibility-museum"
                                        title="Accessibility at the Museum"
                                      >
                                        Accessibility at the Museum page
                                      </a>
                                      &nbsp;for&nbsp;details).
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18461"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18461"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> By taxi or minicab</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18461"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18461"
                                  >
                                    <ul>
                                      <li>
                                        Black cabs can be pre-booked, hailed on
                                        the street or found at designated taxi
                                        ranks around Central London.
                                      </li>
                                      <li>
                                        There is a taxi rank on Great Russell
                                        Street at the Museum's main gates.
                                      </li>
                                      <li>
                                        Minicabs must be booked in advance
                                        through a licensed private hire
                                        operator.
                                      </li>
                                      <li>
                                        More information can be found on
                                        TFL's&nbsp;
                                        <a
                                          data-gc-link="https://tfl.gov.uk/modes/taxis-and-minicabs/book-a-taxi"
                                          href="https://tfl.gov.uk/modes/taxis-and-minicabs/book-a-taxi"
                                        >
                                          London taxis and minicabs
                                        </a>
                                        &nbsp;page.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18462"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18462"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> By bus</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18462"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18462"
                                  >
                                    <p>
                                      The following bus routes pass within
                                      walking distance of the Museum.
                                    </p>
                                    <ul>
                                      <li>
                                        New Oxford Street: 1, 8, 19, 25, 38, 55,
                                        98, 242
                                      </li>
                                      <li>
                                        Tottenham Court Road (northbound) /
                                        Gower Street (southbound): 14, 24, 29,
                                        73, 134, 390
                                      </li>
                                      <li>
                                        Southampton Row: 59, 68, X68, 91, 168,
                                        188
                                      </li>
                                    </ul>
                                    <p>
                                      Please refer to individual routes on
                                      the&nbsp;
                                      <a
                                        data-gc-link="https://tfl.gov.uk/maps/bus"
                                        href="https://tfl.gov.uk/maps/bus"
                                      >
                                        TFL Bus Routes page
                                      </a>
                                      &nbsp;to find the best stop and to check
                                      for diversions.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18463"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18463"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> By tube</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18463"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18463"
                                  >
                                    <p>
                                      The four tube stations closest to the
                                      Museum are:
                                    </p>
                                    <ul>
                                      <li
                                        data-gc-list-depth={1}
                                        data-gc-list-style="bullet"
                                      >
                                        Tottenham Court Road: 5-minute walk
                                      </li>
                                      <li
                                        data-gc-list-depth={1}
                                        data-gc-list-style="bullet"
                                      >
                                        Holborn: 7-minute walk
                                      </li>
                                      <li
                                        data-gc-list-depth={1}
                                        data-gc-list-style="bullet"
                                      >
                                        Russell Square: 7-minute walk
                                      </li>
                                      <li
                                        data-gc-list-depth={1}
                                        data-gc-list-style="bullet"
                                      >
                                        Goodge Street: 8-minute walk
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div className="spacer spacer--small-divider" />
                          <section
                            className="paragraph paragraph--type--slice-content paragraph--view-mode--default section section--slice-content section--slice-content--align-left section--bg-white"
                            aria-labelledby="paragraph-2844-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="entering-the-museum"
                              />{" "}
                              <div className="section__inner">
                                <h2
                                  id="paragraph-2844-title"
                                  className="section__title section--slice-content__title"
                                >
                                  Entering the Museum
                                </h2>
                                <div className="section--slice-content__main">
                                  <div className="section--slice-content__wysiwyg wysiwyg">
                                    <ul>
                                      <li>
                                        You are advised to{" "}
                                        <a href="https://ticketing.britishmuseum.org/events?k=general%20admission">
                                          book a free ticket
                                        </a>{" "}
                                        in advance of your visit.&nbsp;
                                      </li>
                                      <li>
                                        Entry to the Museum is via the Main
                                        entrance on Great Russell Street or the
                                        Montague Place entrance. Please note
                                        walk-up entry will only be possible at
                                        the Montague Place entrance, and entry
                                        is dependent on capacity.
                                      </li>
                                      <li>
                                        Entry to the Museum for ticketholders is
                                        via the Main entrance on Great Russell
                                        Street.&nbsp;
                                      </li>
                                      <li>
                                        On arrival please join the back of the
                                        queue, where you may be required to
                                        wait, as longer queues can form at busy
                                        periods.&nbsp;
                                      </li>
                                      <li>
                                        General admission ticket holders are
                                        asked to arrive within 30 minutes of
                                        their entry time. If you arrive earlier
                                        or later than this, we will do our best
                                        to accommodate you, but there may be
                                        delays to your entry.
                                      </li>
                                      <li>
                                        All visitors must pass through a
                                        security check which involves a bag
                                        search.
                                      </li>
                                      <li>
                                        If you require more information on
                                        accessibility for disabled visitors,
                                        please see our&nbsp;
                                        <a
                                          href="/visit/accessibility-museum"
                                          data-entity-type="node"
                                          data-entity-uuid="377d1eaf-caa3-4fba-8eeb-7eb62bb562e9"
                                          data-entity-substitution="canonical"
                                          title="Accessibility at the Museum"
                                        >
                                          Accessibility at the Museum page
                                        </a>
                                        &nbsp;for details.
                                      </li>
                                      <li>
                                        From mid-September construction work to
                                        build our new Energy Centre will begin
                                        close to the Montague Place entrance.
                                        The north-east gate will be in constant
                                        use and marshalls will be present to
                                        direct traffic.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <aside className="section--slice-content__embed">
                                  <div className="paragraph paragraph--type--embedded-media paragraph--view-mode--default">
                                    <figure className="media media-embed media-image js-media">
                                      <img
                                        loading="eager"
                                        className="lazyload not-full-width"
                                        srcSet="images/British-Museum-aerial_3.jpg 400w, images/British-Museum-aerial_1.jpg 750w, images/British-Museum-aerial_2.jpg 1000w"
                                        sizes="100vw"
                                        width={1000}
                                        height={500}
                                        src="images/British-Museum-aerial.jpg"
                                        alt="Aerial photograph of the British Museum building."
                                      />
                                      <figcaption>
                                        Aerial photograph of the British Museum
                                        building.
                                      </figcaption>
                                    </figure>
                                  </div>
                                </aside>
                              </div>
                            </div>
                          </section>
                          <section
                            className="accordion section--no-keyline-current section--no-keyline-next js-accordion paragraph paragraph--type--slice-accordion paragraph--view-mode--default section section--slice-accordion section--bg-white"
                            aria-labelledby="paragraph-18469-title"
                          >
                            <div className="container">
                              <div className="section__inner">
                                <h2
                                  id="paragraph-18469-title"
                                  className="visually-hidden"
                                >
                                  Security and bag searches
                                </h2>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18465"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18465"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Security, bag searches and large luggage
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18465"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18465"
                                  >
                                    <ul>
                                      <li>
                                        For everyone's safety, all bags,
                                        rucksacks, packages and personal items
                                        may be searched before entry.
                                      </li>
                                      <li>
                                        Wheeled cases, sports equipment and
                                        large items of luggage are not allowed
                                        on British Museum premises.
                                      </li>
                                      <li>
                                        Storage for luggage is available at
                                        major rail stations, including Euston,
                                        King's Cross and Charing Cross.
                                      </li>
                                      <li>
                                        An easy access route is available for
                                        disabled visitors, Members and visitors
                                        with buggies and/or children under five.
                                      </li>
                                      <li>
                                        If you require assistance or the
                                        entrance into the Museum poses an
                                        accessibility barrier, please let our
                                        uniformed staff know&nbsp;and they'll be
                                        happy to assist you.
                                      </li>
                                      <li>
                                        Please don't leave your bags unattended
                                        at any point during your visit.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18466"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18466"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Restricted items</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18466"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18466"
                                  >
                                    <ul>
                                      <li>
                                        For security reasons, no large items of
                                        luggage can be brought into the
                                        Museum&nbsp;(bigger than 40cm x 40cm x
                                        50cm and heavier than 8kg) or onto the
                                        premises.
                                      </li>
                                      <li>
                                        Wheeled cases are not permitted
                                        regardless of their size and weight.
                                      </li>
                                      <li>
                                        Folding bicycles are not permitted
                                        inside the Museum.&nbsp;
                                      </li>
                                      <li>
                                        Adult scooters, skateboards and musical
                                        instruments are not allowed onto the
                                        premises.
                                      </li>
                                      <li>
                                        Pushchairs are permitted on-site.
                                        Fold-up prams and buggies can be left
                                        free of charge in the cloakroom, which
                                        is found by turning left immediately
                                        after passing through the Main entrance
                                        of the Museum.
                                      </li>
                                      <li>
                                        Offensive weapons, dangerous chemicals,
                                        and other suspicious items will be
                                        confiscated before entry is granted.
                                      </li>
                                      <li>
                                        You'll be able to retrieve any
                                        confiscated items when you leave,
                                        provided there are no legal
                                        barriers.&nbsp;
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18467"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18467"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Visitor regulations</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18467"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18467"
                                  >
                                    <ul>
                                      <li>
                                        All visitors entering the Museum agree
                                        to abide by the visitor
                                        regulations:&nbsp;
                                      </li>
                                    </ul>
                                    <div
                                      data-entity-type="media"
                                      data-entity-uuid="b9ad821d-4098-4df4-91a9-98d8889e8622"
                                      data-embed-button="document"
                                      data-entity-embed-display="view_mode:media.full"
                                      data-langcode="en"
                                      data-entity-embed-display-settings="[]"
                                      className="embedded-entity"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                      <div className="media media-full media-document js-media">
                                        <a
                                          href="https://www.britishmuseum.org/sites/default/files/2023-11/British_Museum-Visitor_Regulations.pdf"
                                          className="media-document__link"
                                          download
                                        >
                                          <div className="media-document__icon-container">
                                            <svg
                                              className="icon icon--download"
                                              role="presentation"
                                              focusable="false"
                                              aria-hidden="true"
                                            >
                                              <use xlinkHref="#sprite-icon-download" />
                                            </svg>
                                          </div>
                                          <div className="media-document__content">
                                            <span className="media-document__name">
                                              <span className="visually-hidden">
                                                Download{" "}
                                              </span>
                                              Visitor regulations
                                            </span>
                                            <div className="media-document__meta">
                                              (PDF, 74.35 KB)
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <ul>
                                      <li>
                                        The Museum reserves the right to vary or
                                        alter these regulations without prior
                                        notice.
                                      </li>
                                      <li>
                                        Special exhibitions may have additional
                                        regulations.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div className="spacer spacer--small-divider" />
                          <section
                            className="paragraph paragraph--type--slice-content paragraph--view-mode--default section section--slice-content section--slice-content--align-left section--bg-white"
                            aria-labelledby="paragraph-3069-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="accessibility"
                              />{" "}
                              <div className="section__inner">
                                <h2
                                  id="paragraph-3069-title"
                                  className="section__title section--slice-content__title"
                                >
                                  Accessibility
                                </h2>
                                <div className="section--slice-content__main">
                                  <div className="section--slice-content__wysiwyg wysiwyg">
                                    <p>
                                      We have a wide range of services for
                                      disabled visitors.&nbsp;
                                    </p>
                                    <p>
                                      Find out how to make the most of your
                                      visit and plan your trip in advance on
                                      our&nbsp;
                                      <a
                                        data-entity-substitution="canonical"
                                        data-entity-type="node"
                                        data-entity-uuid="377d1eaf-caa3-4fba-8eeb-7eb62bb562e9"
                                        href="/visit/accessibility-museum"
                                        title="Accessibility at the Museum"
                                      >
                                        Accessibility at the Museum
                                      </a>
                                      &nbsp;page.&nbsp;
                                    </p>
                                  </div>
                                </div>
                                <aside className="section--slice-content__embed">
                                  <div className="paragraph paragraph--type--embedded-media paragraph--view-mode--default">
                                    <figure className="media media-embed media-image js-media">
                                      <img
                                        loading="eager"
                                        className="lazyload not-full-width"
                                        srcSet="images/edward-richards-bsl-tour-1000x500_0_1.jpg 400w, images/edward-richards-bsl-tour-1000x500_0_3.jpg 750w, images/edward-richards-bsl-tour-1000x500_0_2.jpg 1000w"
                                        sizes="100vw"
                                        width={1000}
                                        height={501}
                                        src="images/edward-richards-bsl-tour-1000x500_0.jpg"
                                        alt="BSL tour at the American dream exhibition"
                                      />
                                      <figcaption>
                                        BSL tour at the American dream
                                        exhibition
                                      </figcaption>
                                    </figure>
                                  </div>
                                </aside>
                              </div>
                            </div>
                          </section>
                          <section
                            className="accordion section--no-keyline-next js-accordion paragraph paragraph--type--slice-accordion paragraph--view-mode--default section section--slice-accordion section--bg-white"
                            aria-labelledby="paragraph-18476-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="facilities"
                              />
                              <div className="section__inner">
                                <h2
                                  id="paragraph-18476-title"
                                  className="section__title"
                                >
                                  Facilities
                                </h2>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18470"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18470"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Visitor and Member cloakroom</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18470"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18470"
                                  >
                                    <ul>
                                      <li>
                                        Opening hours: 11.00–17.00 (20.30 on
                                        Fridays).
                                        <ul>
                                          <li>
                                            Last deposits are one hour before
                                            closing time.
                                          </li>
                                          <li>
                                            Please collect items 30 minutes
                                            before closing time.
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        The cloakroom can be found by turning
                                        left immediately after passing through
                                        the Main entrance to the Museum.&nbsp;
                                      </li>
                                      <li>
                                        Please note that items of luggage
                                        weighing more than 8kg and larger than
                                        40x40x50cm (including all wheeled
                                        suitcases) are not permitted.&nbsp;
                                        <ul>
                                          <li>
                                            Please see the{" "}
                                            <a href="https://www.britishmuseum.org/visit#entering-the-museum">
                                              restricted items
                                            </a>{" "}
                                            section for full details.
                                          </li>
                                          <li>
                                            Storage for luggage is available at
                                            major rail stations, including
                                            Euston, King's Cross and Charing
                                            Cross.
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        Use of the cloakroom is charged
                                        per-item:
                                        <ul>
                                          <li>Coats – £2</li>
                                          <li>Bags up to 4kg – £2.50</li>
                                          <li>Bags 4–8kg – £5</li>
                                          <li>Umbrellas – £1</li>
                                          <li>Fold-up pushchairs – free</li>
                                        </ul>
                                      </li>
                                      <li>
                                        Members can use the cloakroom free of
                                        charge. The same restrictions apply.
                                      </li>
                                      <li>
                                        You must retrieve items from the
                                        cloakroom before you leave the Museum
                                        site.
                                      </li>
                                      <li>
                                        In the event of a fire evacuation, the
                                        cloakroom will be closed immediately and
                                        you must follow our fire evacuation
                                        instructions. Our staff will help to
                                        retrieve your items from the cloakroom
                                        as soon as possible after the Museum
                                        reopens.
                                      </li>
                                      <li>
                                        Please note that the cloakroom has
                                        limited capacity, and when this capacity
                                        is reached, it cannot accept items until
                                        space becomes available again.
                                      </li>
                                      <li>
                                        The Museum reserves the right to vary or
                                        alter these conditions without prior
                                        notice.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18472"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18472"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Lost property</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18472"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18472"
                                  >
                                    <p>
                                      If you've lost an item while visiting the
                                      Museum, please email{" "}
                                      <a
                                        href="/cdn-cgi/l/email-protection#4a2625393e3a38253a2f383e330a2838233e233922273f392f3f276425382d"
                                        data-gc-link="mailto:lostproperty@britishmuseum.org"
                                      >
                                        <span
                                          className="__cf_email__"
                                          data-cfemail="c2aeadb1b6b2b0adb2a7b0b6bb82a0b0abb6abb1aaafb7b1a7b7afecadb0a5"
                                        >
                                          [email&nbsp;protected]
                                        </span>
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18471"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18471"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Free wifi</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18471"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18471"
                                  >
                                    <ul>
                                      <li>
                                        Free wifi is available for all visitors
                                        to the Museum.
                                      </li>
                                      <li>
                                        Please connect to 'British Museum
                                        WiFi'&nbsp;only.
                                      </li>
                                      <li>
                                        You'll be required to supply your full
                                        name and email address&nbsp;before using
                                        the service.
                                      </li>
                                      <li>
                                        Free wifi is funded by the Mayor of
                                        London and Department for Digital,
                                        Culture, Media &amp; Sport. Connectivity
                                        is supported by the Daisy Group.
                                      </li>
                                      <li>
                                        Charging phones and plugging in any
                                        other electronics is not allowed.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18473"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18473"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Facilities for babies and children
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18473"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18473"
                                  >
                                    <p>
                                      For information about facilities for
                                      parents, babies&nbsp;and young children,
                                      please see the{" "}
                                      <a
                                        href="/visit/family-visits"
                                        data-entity-type="node"
                                        data-entity-uuid="5f1e29d0-d3ce-4977-adb5-e7bc71906b38"
                                        data-entity-substitution="canonical"
                                        title="Family visits"
                                      >
                                        Family&nbsp;visits&nbsp;page
                                      </a>
                                      <strong>.</strong>
                                    </p>
                                    <p>
                                      If you need help during your visit, please
                                      speak to a uniformed member of staff.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18474"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18474"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Accessible facilities</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18474"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18474"
                                  >
                                    <p>
                                      For information about facilities and
                                      resources for disabled
                                      visitors&nbsp;please see the{" "}
                                      <a
                                        href="/visit/accessibility-museum"
                                        data-entity-type="node"
                                        data-entity-uuid="377d1eaf-caa3-4fba-8eeb-7eb62bb562e9"
                                        data-entity-substitution="canonical"
                                        title="Accessibility at the Museum"
                                      >
                                        Accessibility at the Museum page
                                      </a>
                                      .
                                    </p>
                                    <p>
                                      If you need assistance&nbsp;during your
                                      visit, please speak to a uniformed member
                                      of staff.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18475"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18475"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Photography and filming</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18475"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18475"
                                  >
                                    <ul>
                                      <li>
                                        Hand-held flash photography and video
                                        recording is allowed in most galleries
                                        for private purposes only.
                                      </li>
                                      <li>
                                        Signs will indicate where photography is
                                        restricted.
                                      </li>
                                      <li>
                                        Tripods, monopods and selfie sticks may
                                        not be used inside the Museum building.
                                      </li>
                                      <li>
                                        In special circumstances, a permit to
                                        use these items can be issued – if you
                                        have any queries, contact the Museum
                                        at&nbsp;
                                        <a
                                          href="/cdn-cgi/l/email-protection#56303f3a3b3f38311634243f223f253e3b232533233b78392431"
                                          data-gc-link="filming@britishmuseum.org"
                                        >
                                          <span
                                            className="__cf_email__"
                                            data-cfemail="63050a0f0e0a0d042301110a170a100b0e161006160e4d0c1104"
                                          >
                                            [email&nbsp;protected]
                                          </span>
                                        </a>{" "}
                                        or on +44 (0)20 7323 8016.
                                      </li>
                                      <li>
                                        For questions regarding commercial
                                        photography or filming, please see our{" "}
                                        <a
                                          href="/commercial"
                                          data-entity-type="node"
                                          data-entity-uuid="e824b0ec-6aea-4315-9fda-5ed7b54f6fa7"
                                          data-entity-substitution="canonical"
                                          title="Commercial"
                                        >
                                          Commercial page
                                        </a>
                                        .
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div className="spacer spacer--small-divider" />
                          <section
                            className="paragraph paragraph--type--slice-teaser paragraph--view-mode--default section section--slice-teaser section--z-index-scope section--has-carousel section--bg-white"
                            aria-labelledby="paragraph-2815-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="food-and-drink"
                              />{" "}
                              <div className="section__inner">
                                <div className="teaser-listing__container">
                                  <h2
                                    id="paragraph-2815-title"
                                    className="section__title teaser-listing__title"
                                  >
                                    Eat, drink, shop and enjoy
                                  </h2>
                                  <div className="carousel-container | js-carousel-container">
                                    <div
                                      className="teaser-listing carousel carousel--2-col swiper-container | js-carousel-2-col"
                                      data-items-length={3}
                                      data-slides-to-show={2}
                                    >
                                      <ul className="l-grid l-grid--3-col | teaser-listing__teasers swiper-wrapper">
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
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&itok=Vhfx6a4i"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&itok=jeh_DjHP 400w, /sites/default/files/styles/16_9_media_small/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&itok=Vhfx6a4i 750w, /sites/default/files/styles/16_9_media_medium/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&itok=P4H-_Cf1 1000w, /sites/default/files/styles/16_9_media_large/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&itok=iSG58aG0 1300w, /sites/default/files/styles/16_9_media_huge/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&itok=KHUHnMoP 1600w"
                                                    data-focal-position="center center"
                                                    alt="Cake"
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&amp;itok=jeh_DjHP
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&amp;itok=Vhfx6a4i
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&amp;itok=P4H-_Cf1
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&amp;itok=iSG58aG0
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&amp;itok=KHUHnMoP
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2019-10/cake-2000x1000.jpg?h=c9a3a702&amp;itok=Vhfx6a4i"
                                                    data-sizes="auto" alt="Cake"
                                                    /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/visit/food-and-drink"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Food and drink
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Try the refined Great Court
                                                    Restaurant, family-friendly
                                                    pizzeria, or a quick bite to
                                                    eat at one of our Great
                                                    Court cafés.
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
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&itok=MKKdiFaA"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&itok=G51avpNB 400w, /sites/default/files/styles/16_9_media_small/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&itok=MKKdiFaA 750w, /sites/default/files/styles/16_9_media_medium/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&itok=72vnPkwc 1000w, /sites/default/files/styles/16_9_media_large/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&itok=Jz1tKGHS 1300w, /sites/default/files/styles/16_9_media_huge/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&itok=sqVnl-Gq 1600w"
                                                    data-focal-position="center center"
                                                    alt="A selection of books on a mantlepiece in between two bust bookends. "
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&amp;itok=G51avpNB
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&amp;itok=MKKdiFaA
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&amp;itok=72vnPkwc
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&amp;itok=Jz1tKGHS
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&amp;itok=sqVnl-Gq
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2020-08/book-landing_0%20%281%29.jpg?h=5dabf909&amp;itok=MKKdiFaA"
                                                    data-sizes="auto" alt="A
                                                    selection of books on a
                                                    mantlepiece in between two
                                                    bust bookends. " /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="https://www.britishmuseumshoponline.org/"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          The British Museum
                                                          Shop
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Shop online for unique
                                                    gifts, replicas, books and
                                                    more.
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
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&itok=xwTL0bSI"
                                                    data-sizes="auto"
                                                    data-srcset="/sites/default/files/styles/16_9_media_tiny/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&itok=aiQ0X4yz 400w, /sites/default/files/styles/16_9_media_small/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&itok=xwTL0bSI 750w, /sites/default/files/styles/16_9_media_medium/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&itok=mOuhoms8 1000w, /sites/default/files/styles/16_9_media_large/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&itok=-_8T6H-i 1300w, /sites/default/files/styles/16_9_media_huge/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&itok=bavaiZLi 1600w"
                                                    data-focal-position="center center"
                                                    alt="Iron and tinned bronze helmet with gold features, looking face on. "
                                                  />
                                                  <noscript>
                                                    &lt;img loading="eager"
                                                    srcset="/sites/default/files/styles/16_9_media_tiny/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&amp;itok=aiQ0X4yz
                                                    400w,
                                                    /sites/default/files/styles/16_9_media_small/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&amp;itok=xwTL0bSI
                                                    750w,
                                                    /sites/default/files/styles/16_9_media_medium/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&amp;itok=mOuhoms8
                                                    1000w,
                                                    /sites/default/files/styles/16_9_media_large/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&amp;itok=-_8T6H-i
                                                    1300w,
                                                    /sites/default/files/styles/16_9_media_huge/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&amp;itok=bavaiZLi
                                                    1600w" width="750"
                                                    height="422"
                                                    data-src="/sites/default/files/styles/16_9_media_small/public/2021-02/sutton-hoo-helmet-1920.jpg?h=f3e1135c&amp;itok=xwTL0bSI"
                                                    data-sizes="auto" alt="Iron
                                                    and tinned bronze helmet
                                                    with gold features, looking
                                                    face on. " /&gt;
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/collection"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>Collection</span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Explore the British Museum
                                                    collection and journey
                                                    through two million years of
                                                    human history.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="carousel__nav-container carousel__nav-container--inline-buttons">
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
                                      </button>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <footer className="footer print-none | js-footer">
                <div className="region region--pre-footer footer-pre">
                  <div className="container">
                    <div className="footer-pre__inner footer-spacer">
                      <div className="footer-pre__content">
                        <div className="footer-pre__content-item footer-pre__content-item--title">
                          <h3 className="footer__title">Connect with us</h3>
                        </div>
                        <div className="footer-pre__content-item footer-pre__content-item--newsletter">
                          <form
                            className="footer__form"
                            id="adestra_footer_form"
                            action="https://britishmuseum.msgfocus.com/s/"
                            method="POST"
                            target="_blank"
                          >
                            <input
                              type="hidden"
                              name="_account_id"
                              defaultValue={1552}
                            />
                            <input
                              type="hidden"
                              name="_table_id"
                              defaultValue={8}
                            />
                            <input
                              type="hidden"
                              name="_list_id"
                              defaultValue={126}
                            />
                            <input
                              type="hidden"
                              name="_dedupe"
                              defaultValue={1}
                            />
                            <input
                              type="hidden"
                              name="_static_update"
                              defaultValue={1}
                            />
                            <input
                              type="hidden"
                              name="_email_field"
                              defaultValue="8.email"
                            />
                            <input
                              type="hidden"
                              id="return_page_footer"
                              name="_rp"
                              defaultValue="https://emails.britishmuseum.org/k/British-Museum/sign_up_form_from_website_box?email=[*data('email')*]"
                            />
                            <label htmlFor="email">
                              Enter your email address to receive our newsletter
                            </label>
                            <div className="footer__form-fields">
                              <input
                                type="email"
                                id="email"
                                name="8.email"
                                size={30}
                                maxLength={64}
                                autoComplete="email"
                                required
                              />
                              <button
                                className="button button--white footer__form-submit"
                                type="submit"
                                id="footer_submit_button"
                              >
                                Sign up
                                <span className="visually-hidden">
                                  {" "}
                                  - opens in a new window
                                </span>
                              </button>
                            </div>
                          </form>
                          <div className="js-email-validation-container" />
                        </div>
                        <div className="footer-pre__content-item footer-pre__content-item--social">
                          <div id="block-sociallinks">
                            <ul className="menu menu--icon-menu menu--level-0">
                              <li>
                                <a href="https://www.facebook.com/britishmuseum">
                                  <span className="menu--icon__icon-container">
                                    <svg
                                      className="icon icon--facebook"
                                      role="presentation"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <use xlinkHref="#sprite-icon-facebook" />
                                    </svg>
                                  </span>
                                  <span className="visually-hidden">
                                    Facebook
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="https://twitter.com/britishmuseum">
                                  <span className="menu--icon__icon-container">
                                    <svg
                                      className="icon icon--x"
                                      role="presentation"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <use xlinkHref="#sprite-icon-x" />
                                    </svg>
                                  </span>
                                  <span className="visually-hidden">
                                    X (formerly Twitter)
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="https://www.instagram.com/britishmuseum/">
                                  <span className="menu--icon__icon-container">
                                    <svg
                                      className="icon icon--instagram"
                                      role="presentation"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <use xlinkHref="#sprite-icon-instagram" />
                                    </svg>
                                  </span>
                                  <span className="visually-hidden">
                                    Instagram
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="https://www.youtube.com/user/britishmuseum">
                                  <span className="menu--icon__icon-container">
                                    <svg
                                      className="icon icon--youtube"
                                      role="presentation"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <use xlinkHref="#sprite-icon-youtube" />
                                    </svg>
                                  </span>
                                  <span className="visually-hidden">
                                    Youtube
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="https://weibo.com/britishmuseumlondon">
                                  <span className="menu--icon__icon-container">
                                    <svg
                                      className="icon icon--weibo"
                                      role="presentation"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <use xlinkHref="#sprite-icon-weibo" />
                                    </svg>
                                  </span>
                                  <span className="visually-hidden">weibo</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://weixin.qq.com/r/Ui7g_A7ExVO6rUqb93tA"
                                  data-js-prevent-default-hyperlink
                                  data-js-external-link-ignore
                                  data-micromodal-trigger="social-modal-wechat"
                                >
                                  <span className="menu--icon__icon-container">
                                    <svg
                                      className="icon icon--wechat"
                                      role="presentation"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <use xlinkHref="#sprite-icon-wechat" />
                                    </svg>
                                  </span>
                                  <span className="visually-hidden">
                                    wechat
                                  </span>
                                  <span className="visually-hidden">
                                    . Opens a pop-up detailing how to access
                                    wechat.
                                  </span>
                                </a>
                                <div
                                  className="modal micromodal-slide"
                                  id="social-modal-wechat"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="modal__overlay"
                                    tabIndex={-1}
                                    data-micromodal-close
                                  >
                                    <div
                                      className="modal__container"
                                      role="dialog"
                                      aria-modal="true"
                                      aria-labelledby="social-modal-wechat-title"
                                    >
                                      <button
                                        className="modal__close"
                                        aria-label="Close modal"
                                        data-micromodal-close
                                      >
                                        <span data-micromodal-close>Close</span>
                                      </button>
                                      <div className="modal__content">
                                        <div className="modal__text modal__text--full modal__text--center-content">
                                          <h3
                                            id="social-modal-wechat-title"
                                            className="visually-hidden"
                                          >
                                            wechat
                                          </h3>
                                          <p>
                                            Scan the QR code to be taken to
                                            WeChat.
                                          </p>
                                          <img
                                            className="lazyload"
                                            data-src="/themes/custom/numiko/dist/img/wechat-qr.png"
                                            alt="A QR code that directs to WeChat."
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="footer-pre__content-item footer-pre__content-item--top-link">
                          <div className="footer-pre__top-link-container">
                            <a
                              href="#page-top"
                              className="footer-pre__top-link"
                            >
                              <span>Back to the top</span>
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
                    </div>
                  </div>
                </div>
                <div className="region region--footer footer-main">
                  <div className="container">
                    <div className="footer__inner footer-spacer">
                      <img
                        className="footer__image not-full-width lazyload"
                        data-src="/themes/custom/numiko/dist/img/footer-turtle.png"
                        alt
                      />
                      <div className="footer__content">
                        <div className="footer__info">
                          <div className="footer__info-inner">
                            <div
                              id="block-freeentry"
                              className="block footer__info-block"
                            >
                              <h2 className="footer__title footer__title--small footer__title--has-icon">
                                <svg
                                  className="icon icon--ticket"
                                  role="presentation"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="#sprite-icon-ticket" />
                                </svg>
                                Free entry
                              </h2>
                              <p>
                                Great Russell Street
                                <br />
                                London WC1B 3DG
                              </p>
                              <p>
                                <a href="tel:+442073238000">
                                  <span>+44 (0)20 7323 8000</span>
                                </a>
                                <br />
                                &nbsp;
                              </p>
                            </div>
                            <div
                              id="block-openinghours"
                              className="block footer__info-block"
                            >
                              <h2 className="footer__title footer__title--small footer__title--has-icon">
                                <svg
                                  className="icon icon--clock"
                                  role="presentation"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <use xlinkHref="#sprite-icon-clock" />
                                </svg>
                                Opening hours
                              </h2>
                              <p>
                                Daily: 10.00–17.00 (Fridays: 20.30)
                                <br />
                                Last entry: 16.45&nbsp;(Fridays: 20.15)
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="footer__menu">
                          <nav
                            aria-labelledby="block-footer-menu"
                            id="block-footer"
                          >
                            <h2
                              className="visually-hidden"
                              id="block-footer-menu"
                            >
                              Footer
                            </h2>
                            <ul className="menu menu--level-0 menu--footer">
                              <li className="menu-item menu-item--expanded menu__item--level-0">
                                <a
                                  className="menu__link menu__link--level-0 menu__link--expanded"
                                  href="/about-us"
                                >
                                  <span>About us</span>
                                </a>
                                <ul className="menu menu--level-1">
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/about-us/governance"
                                    >
                                      <span>Governance</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/about-us/british-museum-story"
                                    >
                                      <span>The British Museum story</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/about-us/jobs"
                                    >
                                      <span>Jobs</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/about-us/press"
                                    >
                                      <span>Press</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/about-us/contact-us"
                                    >
                                      <span>Contact us</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item--expanded menu-item--active-trail menu__item--level-0">
                                <a
                                  className="menu__link menu__link--level-0 menu__link--expanded"
                                  href="/visit"
                                >
                                  <span>Visit</span>
                                </a>
                                <ul className="menu menu--level-1">
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/visit/museum-map"
                                    >
                                      <span>Museum map</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/exhibitions-events"
                                    >
                                      <span>Exhibitions and events</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/visit/accessibility-museum"
                                    >
                                      <span>Accessibility</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/visit/food-and-drink"
                                    >
                                      <span>Food and drink</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/visit/audio-app"
                                    >
                                      <span>Audio guide</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item--expanded menu__item--level-0">
                                <a
                                  className="menu__link menu__link--level-0 menu__link--expanded"
                                  href="/commercial"
                                >
                                  <span>Commercial</span>
                                </a>
                                <ul className="menu menu--level-1">
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/commercial/commercial-hire"
                                    >
                                      <span>Commercial hire</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/commercial/filming"
                                    >
                                      <span>Filming</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="https://www.bmimages.com/"
                                    >
                                      <span>BM Images</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/commercial/licensing"
                                    >
                                      <span>Licensing</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/commercial/british-museum-press"
                                    >
                                      <span>British Museum Press</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/commercial/travel-trade-tours"
                                    >
                                      <span>Travel trade tours</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item--expanded menu__item--level-0">
                                <a
                                  className="menu__link menu__link--level-0 menu__link--expanded"
                                  href="/our-work"
                                >
                                  <span>Our work</span>
                                </a>
                                <ul className="menu menu--level-1">
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/our-work/departments"
                                    >
                                      <span>Departments</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/our-work/national"
                                    >
                                      <span>National</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item--collapsed menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/our-work/international"
                                    >
                                      <span>International</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/our-work/how-borrow-british-museum-objects"
                                    >
                                      <span>How to borrow</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item--expanded menu__item--level-0">
                                <a
                                  className="menu__link menu__link--level-0 menu__link--expanded"
                                  href="/research"
                                >
                                  <span>Research</span>
                                </a>
                                <ul className="menu menu--level-1">
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/research/projects"
                                    >
                                      <span>Research projects</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/research/british-museum-publications"
                                    >
                                      <span>Research publications</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/scientific-study-british-museum-collection"
                                    >
                                      <span>Scientific studies</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item--expanded menu__item--level-0">
                                <a
                                  className="menu__link menu__link--level-0 menu__link--expanded"
                                  href="/resources"
                                >
                                  <span>Resources</span>
                                </a>
                                <ul className="menu menu--level-1">
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/resources/study-rooms"
                                    >
                                      <span>Study rooms</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/resources/library-and-archive"
                                    >
                                      <span>Library and archive</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="https://www.britishmuseum.org/collection"
                                    >
                                      <span>Search the collection</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu__item--level-1">
                                    <a
                                      className="menu__link menu__link--level-1"
                                      href="/blog"
                                    >
                                      <span>Blog</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="region region--post-footer footer-post">
                  <div className="container">
                    <div className="footer-post__nav">
                      <nav
                        aria-labelledby="block-footerlegallinks-menu"
                        id="block-footerlegallinks"
                        className="menu--footer-legal-container"
                      >
                        <h2
                          className="visually-hidden"
                          id="block-footerlegallinks-menu"
                        >
                          Footer Legal Links
                        </h2>
                        <ul className="menu menu--level-0 menu--footer-legal">
                          <li className="menu-item">
                            <a
                              className="menu__link menu__link--level-0"
                              href="/privacy-policy"
                            >
                              <span>Privacy policy</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                              className="menu__link menu__link--level-0"
                              href="/cookies"
                            >
                              <span>Cookies</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                              className="menu__link menu__link--level-0 menu__link--Website accessibility statement js-Website accessibility statement"
                              href="/accessibility-statement"
                            >
                              <span>Accessibility statement</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed">
                            <a
                              className="menu__link menu__link--level-0"
                              href="/terms-use"
                            >
                              <span>Terms of use</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                              className="menu__link menu__link--level-0"
                              href="/modern-slavery-act-transparency-statement"
                            >
                              <span>Modern Slavery Act Statement</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                              className="menu__link menu__link--level-0"
                              href="http://britishmuseum.org.cn/"
                            >
                              <span>Chinese site 中文</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <span className="footer-post__copyright">© 2024</span> The
                    Trustees of the British Museum
                  </div>
                </div>
              </footer>
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
      </div>
    </>
  );
};

export default Visit;