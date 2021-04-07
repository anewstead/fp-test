import * as React from "react";
import styled from "styled-components";
import { gridGutter } from "../helpers";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ useNegativeGutter }) =>
    useNegativeGutter &&
    `
    margin-left: -${gridGutter};
    margin-right: -${gridGutter};
  `}
`;

const grid = (props) => <Grid useNegativeGutter={false}>{props.children}</Grid>;

export default grid;
