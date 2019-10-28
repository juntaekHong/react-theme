import React from "react";
import styled from "styled-components";

const Top = props => (
    <Wrap>
        <h1>{props.title}</h1>
    </Wrap>
);

export default Top;

const Wrap = styled.div`
    text-align: center;
`;