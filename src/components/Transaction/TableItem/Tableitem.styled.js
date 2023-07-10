import { styled } from "styled-components"

export const RowItem = styled.tr`
  &:nth-of-type(2n) {
    background-color: #d4fffc;
  }
  background-color:white;
`;

export const ItemVal = styled.td`
  margin: 0;

  padding: 10px 0;

  color: #797979;
  text-align: center;

  font-size: 16px;

  &:not(:last-child) {
    border-right: 1px solid #e9e9e9;
  }
`;