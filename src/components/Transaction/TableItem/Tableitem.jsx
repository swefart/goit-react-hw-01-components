
import { RowItem, ItemVal } from './Tableitem.styled';

export const TableItem = ({ items }) => {
    const { id, type, amount, currency } = items;
  return (
    <RowItem key={id}>
      <ItemVal>{type}</ItemVal>
      <ItemVal>{amount}</ItemVal>
      <ItemVal>{currency}</ItemVal>
    </RowItem>
  );
};