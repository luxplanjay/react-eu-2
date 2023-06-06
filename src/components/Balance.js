import { useSelector } from 'react-redux';

export const Balance = () => {
  const balance = useSelector(state => state.account.balance);

  return (
    <div>
      <b>Balance: {balance}</b>
    </div>
  );
};
