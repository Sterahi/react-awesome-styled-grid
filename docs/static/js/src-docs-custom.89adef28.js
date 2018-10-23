(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/docs/custom.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js"),r=a("./node_modules/docz/dist/index.m.js"),A=a("./src/index.js"),l=a("./node_modules/styled-components/dist/styled-components.browser.esm.js");function s(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components,a=s(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"custom-configuration"}},"Custom configuration"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"using-a-custom-configuration"}},"Using a custom configuration"),m.a.createElement(o.MDXTag,{name:"p",components:n},"To use a custom config, import the ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"ThemeProvider"),"\nfrom Styled-components ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import { ThemeProvider } from 'styled-components'"),",\nand pass a named object ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"awesomegrid")," to the theme prop, as the example below.\nThe properties of your custom configuration will overwrite the default settings. Just set properties that are different from the default."),m.a.createElement(o.MDXTag,{name:"p",components:n},"Try changing any property in customConf below and see what happens."),m.a.createElement(r.Playground,{__position:0,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAR0aFcNAMiWUVRiWRwoCWZxyC6Og727NIlnCaB2HkN0TXaT04AEchAwFe1oKsTZTwABSEP5Z2I0i5XaVFElgdALU-LcaDgGioPYEMpU400tUDMxdFRY5TgAL2cAhePgdhuHYYB1iiARnlQK52gABnYVMZiwdpDzrGZuxYecjIAFgs9gADYLKs9YwFAgAxH1oESIz-GcQ5EUdTB2BYyh-CWIhqEoOBbMRTy628mhnAgJTLnYABGRzrPkVUg1QeSpgAQTmTT2GjGDyBsKB0EjYjOU0sRqrjGR2B42BuGAY8VLU7F5F3etgDq6BGuCAAyKbxkSeZKGacaGqa7g1vlMBQhKvtUHadgAH4NgmyNoxaq5lsm1B5DjfdZDMT8zFhDVjhgMAwigKZTta9q60YCq1zrCxgC-7g2p0wH61Kno8giIhHFQZotPB-sUfYU8WFcABFRkBEC9heF4dpqCSLqsKCINCes1HIcoKBQiIVB7m09dqawJn8pZ1G4CIK4AA4qep-siHQPmBcF9goBSK4coAJjFwWsCgaW5c5iwlFV1JwloAQAHUuAmK5kfF9g2el-Xqe5s2NYsYXpZwABWc3Uclu3Hetk2ldyh2nbVn3Bzsgo9fQA3mYh1mmZyv2LEt3Ko7RkWvbdsPnalxO48V12_fV5OLF0Ah4JdStQ-Nk2mYJ9pNoSculkefHCcrqBy6qqIsAtXFg7waXjOMgBSd2Y_Lhvq_YWvB9CKvCeb1xW_bkOcu7vuc6FhOx4nqyR8kOuK_HxvJ60lu2_1zvcoX92XfYABOYya83g_Z-PvLHOMiz3Yzy_r43tHp8Pjvpccp-X5L2zuLDwZpthCjQAQJmRtxam1jv3Hm7BHL80_gAdlcrzQBJdbZuXyp_eeMtnJYDPqnK-N9cr_2fsQpeFg36yw_rXHKF8ZZUI1sA1G11k5dAIH0cwsYl6MGsDAZirEuAZAJMImAvUYKuBGPASIMAUj9ATr0VEkR4bNHkMNd2jB4b5wQgIEaJdGDIRGEYkuDZMLYVQLhdAaQR7mOMWhF6HgMSl16o5Ei3Ner2xIsLXqqZtE0MFowRK7hpy0ykfwAUhQQAhH6K4C0UBXCBCgHwEAcAxxUFpuId2sC4B8GCeLYAniupEEKRYwWwBfHxwqZU1GwBAl5NRlIMJqBHHGykGhDp4tdG0xcW4tmHivHlMaX4ng1Sgn1PrKE2y5ghA9WiUQWJ8SICJOSak9JmSSw5JAD0ixQzmnUxKSMup0ygaBNqUchpF9OHnIbJINp-zqZdNps8mZkhTHvOTF865fSoADIXEM4AMtTnAFcuMnxJFJa9Qhd81GhyikNNBWUs59TwWQuuUDGpMKsXaQhX8yQ3S_nOMwK4oFBSQVgpRf4sZEsUiwqmecxF9yqWorxWy_xHLUHQoZRyglSK9zEqRVIX5wTXlwQMfsqQQiRG_DEYYzmn4UZaJuv9WsnJfwZKopIVQ2AgJkB0KBfQDBaLPT0QXcRxouKekEtQfQcAnjKMBKBS1Ah2h2meqYqS5EXVZgdU6rgkghAjA9agM1DpnHWo9H6oSUDA3oBdVAMNEapgADVbAQA8LAH1tqnT2uEpIQiUBJB_HyNmmAKaxIAAkuCYHMNG31drszxuLZIGwPY6BVrouwKx5NbH2MbXm_1ha21wDJjhPClbwThrEjBC8fa6D2GSXAOASwLwZpgCMJiz0SJDtjQW1tMQS3jusSJGdUNi1VSNguidqBl3-DXesDdEAt07pFGYThj0sA9pghagxSEUKOnQuwDN5bYBLFrZ21AGE70DpgARY9xEzBasouQA9LbHVKKDXnN1BrtB5xNRBVNkVhyWHmhpRtQ5KAzAtGpeY57Z09u6tkJYRszhwE_T6lj_Fm0OrDZ6h0uhIApDY-sbUDR9SXgAHLOAaLqWTXGh2ehwHmhGEAUgCZKtQBS_7C5VR4zgGQxRdKuH0mgC0_QUiECuGECIRUbZmYMkk16BBbPhEoEVdYAASYAMxvocZMxDXzEmpOyfk7JnAUQZjRhyKDdcwmNPRhmJyD4rqDEAG1jjsAALrsBmiWdTKRkupfRmsrLOQctBeprZHsBQXNgDc-wXziXispZwLV-yKQg4TAq7l-QXQiAOdRp1-rVmbPNbGtQETJWOsB3nD1vAfWcsDeEcNkonI7nsGKFtmdFhfP-dBuwAAhDMHAYA6ZcHy7NQL64QuSZk3JhTzgouzFi61BL02kvtdw5l7LeWCutdm2V1wy3quo18_RmAi1CszZ--lwuGX0B5bWlpdoqB6aBHdQdbbd8j5XBa19trqXfuI_-6tobxR2BXGKHj3-J9e7Kh2-uYom31jM-Kvt4GMEyVuPkC1I7vOFyA9XeDiwHhJTbCUW0DAAlabCiuAAYntlfHK3Yn7rb2OEKACEldGjAM0TJOucg5UHFgYbHOgtmD0xkIzthySuESNJn03Q0c2_dTO93HWyMUbsEjLyl2E5RRmORhjOAvC0wFhdSMVxg-h_gDgH4mABZC9jz7sPEfG5XRnU9B0mA3rjymO7lDShtXob44W7DiaQ34ZAnocCIBBNTB42xnoq6OKNp43LkdUDu3PTj77n11HaNQ8YyR1rrfQuPYi84Dv7pyIqbUyJrTUNvVaUM8Z9Y1QLT5CUgUK4XgBCzgtNUYbLBErJLxhd7Aw3r9YGluwUydnPMB-wFaCAXQpQDEMhEkYt_YAzyZAzBXAjBAFeac6TaHZtS3bBbABT7hbPavYxZxbmJA7tagISjgKUCQJwBI4A43ZE7A7ZDlbI5i71gHZ9YADU8o4orAGQcAlauW1222d-7-n-O0VwIalmMAdBAgDBTOW2G2W2HOPm3OgKzU30QuzBMBKMEuOw0uW0vG8uRcyuqu6uxkmu-wOuLoSuBuhutMV2OUFkFunCVuqApiduF-juzup4VU7QpiWmFhw-8efuxcpctB9B2UA-Gewg6E6w3MHhfBXh6eCemeAswsgRDBaeNGLh4evhAskskRwRMRvucRke6wisSR0RIeqRYR6w0edA2RsRSeCG6wqepGKRPhOS2exUueUw-e70YoowJeygaGGGAaVeSateRq9eBgxGYkLe2kbedge68-XeFeveTeFRORDGQ-w4dGvufeQmROk-D2CBsmc-ZEqmkg2xrWK-OmRe_S6-g02QdurA4O2-u---7Ah-x-p-r-9-uUj-IQHmw2dOc8C8Z-9ul-Vwd-_-b-LA7B3-50tM9MqA4BXOUBJ2Z2PwAA4lrOIiLnAGQfdmFk9pFtFu9vFhDGgalhga4FgTgXgdIYQe1iDngWQRYKNvOJZhphNoTkVrNikAibrEfMSZvKCoNprlSfNikA1k1gyXDqlsyTcBkItuyewJyWtizmznWCIXWAdgFqLndnAWseiS9piSgZ9oyegWAhAsJMSYDqSaVsQaDqQZzBQcjswZSfWHfg_qbr5slhKbiWlnTAzLgcji1EYAzvID3NyULN_PfATsDDMM6caa6WCR6Tll6T6X6ZzBzijKzsIV-gqX5kqciSqfAeqUgViageGfiYSQaVaUaTqSaRjBSRaX5lQfKLqAbgwe-EwQVrTk5hZrAI1sGU6dltQe0LWWAPWXtHlpvC6VQG6YzHgTGfPMZL6TtprkmezimZCemSiaqWiTPjmVqTifmXqdgUWfgbDt9mWSQVVpWaGV2TQTwZ4QOdaawYCVsBwSWKOdwbwQwTOTKcmXtpNjVOIfzpITAOStIcqRDHIVLkIIoXLlAAruwKocZGrugBruuFobrlBXoV1AYSbsYfOWYGYWhJYQ7k7i7nYWhPsYzFMBjkQFjrqAIKpHOAuFpN4QnvarWfHtGBlusPRXADgKiDRQLOxYnpjmCKgNGZ7rTN7pURpP7nWHAmRRRVRWiAUALDHNJRkJRdRfJbpAnEpQICpXJfOAkanJpdpdxRkZ7AZbJUZZJXAL2fWVcKZapbpf4UQFZRODZfxVpWZWpXWMLE5U1rZTpaJusJLN5S5eRcpe5fZZJVAEFewL5eZbQnAFkdMbEXkXWAEReUEUUbkfEepQlbxclRYIkWlVEYlZlekRFTlSERxXldFZQPCaKUXLlVlXWAUT_rxSUSnn-RiBlVUVnimXUS9AXh9MBi0WXu0aOseqWpmhWt0YRg3iRhJAQK3puIepsVxGaEqFMexXMTRgsQxksfRLetYg-u3qMVsZ6GOnemPmJBMEIDcDmvutdSIAQLAHtUMUWHgLKt0CdVxOMfmphiviunYGBlmjmtgGBOgHYEtS2m4aiNELEP1Y0cHq4TAqXL8fEAwfLDHG9FAOjeuDgljTjRDOfPjaURDG_MTesFtqVOiFKMKNVC1MjQyHCKdOuBMLYJxfnLQNeqeuTEZGzO0FtpTb9foHrAkPqDLp9PTSzYSJxROIuqgMzRDBAM0NGFDjDriBgKMCdutO0Ioa9AhOgB-G4SjOrScCMDgHZJeHQTQAADK2BgQxhEzwhwQ7R1TuBpDrwPW3UwAq3S31ly1LAsLGSchLDE3Kqowm2jDm09iW36C22ojpACAvhdC76VpLCe1PXe2s0cV-13oB3dzB1Gho0wBh1qwU3-Gy13pVQgxgzriwBTAroEBy1HWuFZ3s1ZCcV3rakKTmihDxBN0A1VQHXkzN0-1s3D5wAl2cDK3HYN392PrsAAA-C91Us9d6zdWtWkPdfda9ANnIktycq9h1A9m9UovdUAc9q6nMrdftHN3twA3NhRIQp929R9j6_O64AtH5ExItUAAAqqgHFFtBLUbYWKoJHYNr8DADHTbXbQnS-MKK-s7d_q7fOKnQSGzTndYpPRHWbRA3QdAwQHHfbYnQqCnR7b7RXVg2XRAbYEDRWnTSA1DDBGzEsNzLFIsPSksIrBxFpK3ePeuHAEWHVNVNfbfR3VgyA7nJSPKHzYgBrNwrwqXJzHEAwfKNzO0HI0vAowIOYNzMo9I-0MLBo_IxOIo8LPo6o-0JLMY1o6Yzo_ShY90O0IrDY-LNo-YIrJzA0YXpo243Yw2kXR_dQ-sDOOIl9MjUw0dCtMECRLw9LfwxARYErdVMdq3bQ5NbAKdC1O44XdjUyBDDk_wi8vNTgD5JkCkLeAQPsmNPVJdIIR8iU2U64BU_oOYmHZwimXQ36OfnhTYa7vKF09OsVIM6JTMeJW4XAg1aVdHIglM34Z5UHhVWkfM_lanHMwLG_Os_kbUzHsVWHiUZ-jnj-s9N44NW9R9dGIM5-KhjqhMY6m2h2vWtNcarNWJPNYtULTmF9dJOaC9ZtVRvMaPi9fOpQ8PQPd8wvkWuNQ_YzC9enXdfPp6PC0MyRjBOc4xJ9dxicUoT3oxnJAPVBvWjCFgGDRDZ89BP4RzXDacwQIjdeuuHAsTRjYgky7jQnKy4TanByyjGTYE3WILSRdTREEcOEwI6EEzZPaI1kFzXerzSJJ_U1eSz_WLUAww8jdfaC3QArSjMkyrRRmrWA2MMdtrbrZAC6AbfvdTDg1HegAQ0Q3A47Yg1S9QCg-7WnXgDdRnaPdnZqzBpKfnSHUXZPRYNaxbVbYQ7A4XEnfAJlGg8i96zLY3bnf60HYG3k5PQq9HL61XQLjXYTROBLP4Em6_e3nExg2IzC13VMFvefTvfPVpEPUugDQm-PZPbqzPUWxfXYEvSvZ23W-3sayfTwi_WC4-nvZI4W6iF21VDW121fRQ43bfTVDC7Zs_bWyW3AO_RDAq_kUq9AH_QA-LWq-uNa3g1A-G_a1G46_oLDS634Kg-Qxg769g4axGMIpA3a5Gw7cnbG4-z68W-TO0x-bYIS8EKK5uSRUMSw2Uuw0sJLFwwCrE-gxxQkyjIIy8MIwmzDbQOI4BxOyo047IyYzwvY2zI42ozaL44LDk3o8nAR_KEY1R9TDk-Y3RwY9Y0x6jDk5LOR848mpxyjDk548nDSwJ_WDk2iIyEE_yx-aEyK5azTJB7VDszE1VHw8OJxok1PSI9LSB3Wlq-Ozk-TQU_4z9MU1qKU-U5U9U81fU3uI01Z60-uEBzUWYKB6gLhZfn03Ye51pu56My4fSxZV1aEY1TMyF5VWF_HBF8s3pTF1VZs0s1Vc1TFwc65y6Mc3nq9I0aAxMBc-59c6Xm0Xc1C9AI8nBlOs870aagMdi2Jk1ZfVdFi-pDi3Gni0xs9BPm4VmTPkpoi4vi6kVsRQpHLfBgZti2cWQUpBaHqo8fPJrkKPkPeZADUOgJrmlJaCna7FyeuBt23DAHSU1l4A1JruNk1vPBhUBY9ZEF3Jd8bfjuwPbFQprpsId1cKmM9-uMBQobLiOZBdBbBfBRDD0z8UaAAZrrcRkJZt2BAHkFcPbHd_WOoDDErYkHLr0edPoBkJrvEBpqgDN7QEQEzIiHoAIMNoqUdjIeQSudPogZqR9hB0KeHtuUScWQQaWVFqaRWcnIgIgIEN5F0BO7nC801u0L5ugPIGGtTPU3OXKaYTOqN5VyD9YQRWjor3YkM9-j2jS72hVxr8NcV-S_c9CxdVV2BH0ZBD2l1zBD189itR6AN3sUcz2ptNtN_uOAQJutus9OB0k8rarc0DgxvfKKa_rXtAVta2gIXItgpxYDk5H6gNH0fNQ3H6ZxjlXOl31a71_iyI2_egPclhpwp1DDC83eM7b4poq5BwWfqVAlVGgUX8z5gbX5p7u5B0ICID5KBGp_q4H4a8HzrVGGa9kFL_WIdNaxeJuOENkKpOpLFqcPTGeAAI44yJDOBLh3nCgviEAkAfjCkTjB4ZBqRprxCMgvh7dkOpZdAO6IgvgeRLDtAfjrjSyuRt8KQWR3gs_CRVS6geDqB3k4BWAp_eANGBr47koEpWN7B4ChLQD2A3pDvgQC740AHodYOuqTA3Zv8pgfwLdD2gbYTgve76AgNq207RhsBIwOiLH3QGjtS2VApto-ngAZZjIOWdcLqw_5f8oEGWHKHuTIE9oxAWkNgc33AG4EuBLUUvsfVoH596Bwg5gYrWVoCCCSLfDLDLG4GvpyBz0PgWbk_6CCiSyg0Qf21cJiCpBSgmQTqzkFYAtBCgoQRllTAqCcB6g_geYPYG4EbBegjdgZn0EMCbBLAswRYMLIcDHItgtQQ6A0HyC_BuBAIa4OoEGCPB4QkwchjrA0d9Bn6IqDc3LxE4zeRGS3s9FqjHVmufEbvG12G5F5f6zgSwAaAAD69gBTD5DsKyJ5Ep4KvGGj6pQwK-s-LSBlmcYiQH-6jB_kYwf7WMH-LjGQc0IOLsA7wZUZwJeEqHVCguNsU0tjAyB4wiYqAEmDCxSjC9Ry0CBluzGZaiw2WewzlsrHlh0IZYFNAWCKW1iLZDY2wq2BDBjiRx9hacWuqnByjewGWnsV4fbDOHrBqS3WB7sjTgQPC7hiCIESjBwSfD5Y58CEe8NdjfCq--iQuNcNJpMxt4CQdeLXFRHJop4M8B7pOUXhodEEmI9EZvCJHYif4HxXuI8KJHkJSR-8QMriNPiHD345Cd4g_EoRYJ6wb8K-J_FZF_wAE1CX2FvicFIieWEcXYUghQS1x0EmCAUcvCuCuQ8EjCYyIQg5GrMrgZCfBOyNlG0IPhLCfBMwlYQyd0uUMVrK4QywyCoYfgOAPYBhjqJpsVUcet9AABSzgBTOzRoqo9owhfGjBxQmCSJmC49HAH6NPAZZ7AJQsofqGmHSYfI0ZResvWABbsoYydWmHQQ0QaYHRGnb6OxlGHBiYAGiKuoGNzEBiNOQYjFqGPDEVCqh0Y2MT2wTFf1RhwmWYfWFUw4BxhkwqMT5HlgtjcxGiYJlXzACc8MYP_P_gAO2AwBEgcAaMMJib6WCcCV_bIKEFv7RgQcSwMAZAlzaMNRha4mgItnr7TYZxYQjLNuIIBxC5h5ZY8Sji_hjj9QppIpqjFYpLxpxIOBYbjD9jHjg-pkJssuIsxBlJsx4xbBTk5A2lTxqMc7NAG1jRg7wvhCUF-A1j-gdyL4EIBgHlCT1J6LHU0mcO0hbsQmpnYTIc1qKZd6i2XQvEaC2g59zArWaqI6KRg_lsxkHVRLDHzFaQrRNotRHDGmzei7gYdXVqaMYEo51oDEu0QjEoE5NeJXAvscL3on2itIyYqAKmNJJF96xRWXAkwPr62j2JCMNviJmkF7jNJEBUSdNnwlmBs-O0K8TABvFDjlxppBToUxbFOYJ6S5dcAAAEQck2EHCRGRpc4OM0YOyfpAnr1NhC-E1IaNSPRldkWGQhvMYFMDaZIO97dALAAADS4402uYDiaetMm0YYulmLf6RIcAEFYrIBHzj6QJwgA4AZ-CUBmR86_IVADMHCA2tP28dK9mOMSApT14cUxKclNGCwTUAvILXic2ImDUTJ7vZFtVDiAJBgKSwEYPBAWqFZaAJLNToSAU5oCYgp4fYFVHT5Z58qBbMaVAGAplQ_J60neEpIUjJJtYObbKTiXiC7TJc5tOYEkCnHGoSWSwHaXtL8mSsBQ0OcIIdIz6l19JpnIaSyF971h22K0z6QQEoFSNxpkufaSkFcJOZF-wkK-h9LWnr4JwlgZGeEGjCnTEIhYaaRm2oYpkopRQb0tJmFBRAAUF5GgMTJhDhtqYy9ZeqjAXrUzQZqMC0GzPZkczOZFoamS9Mlz1h6ZdM4mdTPsBXSuoEoKiPiGiBowEoBwEqN0DhCVTjIRPQsPVG6DNSUp1M9WV1MZmL0dZi9ZmR9NZlczjZ7M6mQwTMzCNjYDMxmdTMqQL0Puxka2fbO7hMzzAvU1AFqiSjbBmmgETQNQENQzULeRsfgKgBdz8Arg_AIEMSCqDeAoe_4ckEyBAACx-Az5b_OHPxggBjIOALOcZBijrB-A5QLCBABmA7R05_AMqF1Fogg0sAPoBOS9HJCUBEgBYPIAUGnBag5c5QEELHIEB5y6w_AKIGgDLkqAowGgTjEnPzkgBMA8wKMCVFfRjyRR9YfgD9VxZDyAAeo5Gzk4BTh48iGPwDWqiAkAGc1eTlFcgOwt5vclGPwGHw7V4Aa8nKPbBwCnzt58sPee3OtB3zT5D87eQTNQxdzcArWICP7IIwi8GAOkEAITwdy0Bw5kcs0LQG4LmgLQswGYPwHkAKAtEQAA",__code:"{() => {\n  const customConf = {\n    mediaQuery: 'only screen',\n    columns: {\n      xs: 4,\n      sm: 8,\n      md: 8,\n      lg: 12,\n      xl: 12,\n    },\n    gutterWidth: {\n      xs: 1,\n      sm: 1,\n      md: 1.5,\n      lg: 1.5,\n      xl: 1.5,\n    },\n    paddingWidth: {\n      xs: 1,\n      sm: 1,\n      md: 1.5,\n      lg: 1.5,\n      xl: 1.5,\n    },\n    container: {\n      xs: 'full', // 'full' = max-width: 100%\n      sm: 'full', // 'full' = max-width: 100%\n      md: 'full', // 'full' = max-width: 100%\n      lg: 90, // max-width: 1440px\n      xl: 90, // max-width: 1440px\n    },\n    breakpoints: {\n      xs: 1,\n      sm: 48, // 768px\n      md: 64, // 1024px\n      lg: 90, // 1440px\n      xl: 120, // 1920px\n    },\n  }\n  return (\n    <ThemeProvider theme={{ awesomegrid: customConf }}>\n      <Container>\n        <Row>\n          <ScreenBadge />\n          <Col debug xs={4} sm={5} md={3}>\n            <span role=\"img\" aria-label=\"so cool\">\n              xs=\n              {4} sm=\n              {5} md=\n              {3}\n            </span>\n          </Col>\n          <Col debug xs={4} sm={3} md={5}>\n            <span role=\"img\" aria-label=\"so cool\">\n              xs=\n              {4} sm=\n              {3} md=\n              {9}\n            </span>\n          </Col>\n        </Row>\n        <Row>\n          <Col debug xs={2} sm={6} md={5} lg={6}>\n            xs=\n            {2} sm=\n            {6} md=\n            {5} lg=\n            {6}\n          </Col>\n          <Col debug xs={2} sm={2} md={3} lg={6}>\n            xs=\n            {2} sm=\n            {2} md=\n            {7} lg=\n            {6}\n          </Col>\n        </Row>\n      </Container>\n    </ThemeProvider>\n  )\n}}",__scope:{props:a,Container:A.b,Row:A.d,Col:A.a,ScreenBadge:A.e,util:A.g,ThemeProvider:l.a}},function(){return m.a.createElement(l.a,{theme:{awesomegrid:{mediaQuery:"only screen",columns:{xs:4,sm:8,md:8,lg:12,xl:12},gutterWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},paddingWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},container:{xs:"full",sm:"full",md:"full",lg:90,xl:90},breakpoints:{xs:1,sm:48,md:64,lg:90,xl:120}}}},m.a.createElement(A.b,null,m.a.createElement(A.d,null,m.a.createElement(A.e,null),m.a.createElement(A.a,{debug:!0,xs:4,sm:5,md:3},m.a.createElement("span",{role:"img","aria-label":"so cool"},"xs=",4," sm=",5," md=",3)),m.a.createElement(A.a,{debug:!0,xs:4,sm:3,md:5},m.a.createElement("span",{role:"img","aria-label":"so cool"},"xs=",4," sm=",3," md=",9))),m.a.createElement(A.d,null,m.a.createElement(A.a,{debug:!0,xs:2,sm:6,md:5,lg:6},"xs=",2," sm=",6," md=",5," lg=",6),m.a.createElement(A.a,{debug:!0,xs:2,sm:2,md:3,lg:6},"xs=",2," sm=",2," md=",7," lg=",6))))}),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"default-values"}},"Default values"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"prop"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"default value"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"columns"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 4 sm: 8, md: 12, lg: 12, xl: 12 }"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number of columns on grid")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"gutterWidth"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 1 sm: 1, md: 1.5, lg: 1.5, xl: 1.5}"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"gutter width in rem")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"paddingWidth"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 1 sm: 1, md: 1.5, lg: 1.5, xl: 1.5}"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"size of outer padding on container in rem")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"mediaQuery"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"'only screen'"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"media type of media query")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"container"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"shape"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 'full', sm: 'full', md: 'full', lg: 90, xl: 90 }"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"size of containers in rem")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"breakpoints"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"shape"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 1, sm: 48, md: 64, lg: 90, xl: 120 }"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"breakpoints in rem")))))}}}]);