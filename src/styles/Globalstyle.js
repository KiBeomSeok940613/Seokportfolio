import React from 'react'
import { createGlobalStyle } from 'styled-components'


const Globalstyle = createGlobalStyle`

*{margin: 0; padding: 0%; 
    
     font-family: 'S-CoreDream-3Light';
    
}
ul {
    list-style: none; /* 기본 목록 마커 제거 */
    padding: 0; /* 내부 간격 제거 */
    white-space: nowrap; /* 텍스트가 줄 바꿈 없이 한 줄에 표시되도록 설정 */
  }

    
a{text-decoration: none; color: #000}
 


 li{
        list-style: none;
        margin: 0 10px;
    }
`

export default Globalstyle