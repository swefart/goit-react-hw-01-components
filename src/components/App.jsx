import { Container } from "./Container/Container.styled";
import { Profile } from "./User/user"
import { StatisticsSection } from "./statistics/Statistics";
import { FriendlistEl } from "./FriendList/FriendList";
import {TransactionHistory} from "./Transaction/TransactionHistory"
import data from '../Data/data.json'
import friends from '../Data/friends.json'
import user from '../Data/user.json'
import transactions from '../Data/transactions.json'

export const App = () => {
  return (
    <Container>
      <Profile avatar={user.avatar} username={user.username} location={user.location} stats={user.stats} tag={user.tag} />
      <StatisticsSection stats={data} /> 
      <FriendlistEl friends={friends} />
      <TransactionHistory transactions={transactions } />
   </Container>
  );
};
