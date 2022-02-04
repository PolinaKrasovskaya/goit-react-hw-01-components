import PropTypes from 'prop-types';
import {
  TransactionList, 
  NameContainer,
  DataContainer,
  Data, 
} from './TransactionHistory.styled';


export default function TransactionHistory ({items}) {
  return  (
  <TransactionList>
    <thead>
      <NameContainer>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </NameContainer>
    </thead>
    <DataContainer>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
        <Data>{type}</Data>
        <Data>{amount}</Data>
        <Data>{currency}</Data>
      </tr>
      ))}
    </DataContainer>
  </TransactionList>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired, 
    })
  ),
}
