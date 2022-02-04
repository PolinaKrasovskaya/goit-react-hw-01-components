import User from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return <div>
    <User 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />, 
    <Statistics title="Upload stats" stats={statistics} />;
    <FriendList friends={friends} />,
    <TransactionHistory items={transactions} />;
  </div>;
}