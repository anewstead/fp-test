import * as React from "react";
import styled from "styled-components";

const Cost = styled.p`
  font-size: 18px;
  line-height: 1.5em;
  font-weight: bold;
  color: darkgreen;
  margin-top: 0.5em;
`;

const cost = (props) => {
  return <Cost>COST: {props.text}</Cost>;
};

export default cost;
