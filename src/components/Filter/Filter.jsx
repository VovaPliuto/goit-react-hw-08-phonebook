import { useDispatch, useSelector } from 'react-redux';

import { filterChange } from 'redux/filtersSlice';
import { selectFilter } from 'redux/selectors';

import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();


  const handleFilterChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <FilterInput
          type="text"
          onChange={handleFilterChange}
          name="filter"
          value={filterValue}
        />
      </label>
    </div>
  );
};
