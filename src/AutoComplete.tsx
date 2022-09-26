import { useState } from "react";
import SearchField from "./SearchField";
import List from "./ListItems";
import {DEBOUNCE_DELAY, debounce, searchFunction}from './utils';

const debouncedSearch = debounce(searchFunction, DEBOUNCE_DELAY);

const AutoComplete = () => {
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const isShownResults = !!results.length;
  const isShownNotFound = !results.length && !isLoading && searchText;

  const onSerach = (v = '') => {
    const search = debouncedSearch;
    if (!v) {
      setSearchText('');
      setResults([]);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      search(v, setResults, setIsLoading).then(() => setSearchText(v));
    }
  };

  const onSelect = (selectedItem = '') => alert(selectedItem);

  return (
    <>
      <SearchField
        onSearch={onSerach}
        isLoading={isLoading}
      />
      {isShownResults && (
        <List
          items={results}
          onSelect={onSelect}
          searchText={searchText}
        />
      )}
      {isShownNotFound && <p>not found</p>} 
    </>
  );
};

export default AutoComplete;