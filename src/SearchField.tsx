import {ChangeEvent} from 'react';

type SearchFieldProps = {
  onSearch: (v: string) => void,
  isLoading: boolean,
}

const SearchField = ({
  onSearch,
  isLoading
}: SearchFieldProps) => {
  const onChange = (e : ChangeEvent<HTMLInputElement>) => onSearch(e.target.value);
  return (
    <div>
      <input
        placeholder="search"
        onChange={onChange}
      />
      {isLoading && 'loading'}
    </div>
  );
};

export default SearchField;