import React from 'react'
import { createGlobalStyle } from 'styled-components'


const Globalstyle = createGlobalStyle`


    li{
        list-style: none;
        
    }
    p{
        @font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}
    }
`

export default Globalstyle