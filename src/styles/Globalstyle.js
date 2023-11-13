import React from 'react'
import { createGlobalStyle } from 'styled-components'


const Globalstyle = createGlobalStyle`

@font-face {
  font-family: 'NEXON Lv1 Gothic OTF';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
*{margin: 0; padding: 0; 
  font-family: 'NEXON Lv1 Gothic OTF';
  

}
ul {
    list-style: none; /* 기본 목록 마커 제거 */
   /* 내부 간격 제거 */  
     /* 텍스트가 줄 바꿈 없이 한 줄에 표시되도록 설정 */
  }

    
a{text-decoration: none; color: #000}
 


 li{
        list-style: none;
 }
`

export default Globalstyle