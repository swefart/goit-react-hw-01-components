import PropTypes from 'prop-types';
import { TableItem } from './TableItem/Tableitem';
import {
  Table,
  Head,
  Title,
  TitleValue,
  Tbody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Head>
        <Title>
          <TitleValue>Type</TitleValue>
          <TitleValue>Amount</TitleValue>
          <TitleValue>Currency</TitleValue>
        </Title>
      </Head>

          <Tbody>{transactions.map((transaction) => <TableItem key={transaction.id } items={transaction}></TableItem>)}</Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};