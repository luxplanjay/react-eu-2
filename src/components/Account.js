import { useDispatch } from 'react-redux';
import { deposit, withdraw } from 'redux/accountSlice';
import { Balance } from './Balance';
import { useState } from 'react';

export const Account = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <>
      <Balance />
      <input
        type="number"
        value={value}
        onChange={e => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(value))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(value))}>Withdraw</button>
    </>
  );
};
