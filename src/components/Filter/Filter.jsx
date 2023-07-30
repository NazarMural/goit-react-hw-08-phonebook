import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <label>
        Find contact by name
        <input type="text" onChange={onChangeFilter} value={filter} />
      </label>
    </div>
  );
}
