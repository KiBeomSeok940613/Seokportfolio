import React from "react";
import styled from "styled-components";

const Container = styled.div`
    color: ${({ theme}) => theme.textColor};
`
export default function Provider(){
    return <Container>Provider</Container>
}