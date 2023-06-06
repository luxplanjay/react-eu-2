import { useSelector, useDispatch } from 'react-redux';
import { changeLang } from 'redux/profileSlice';

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.profile.locale);

  return (
    <div>
      <select value={lang} onChange={e => dispatch(changeLang(e.target.value))}>
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
};
