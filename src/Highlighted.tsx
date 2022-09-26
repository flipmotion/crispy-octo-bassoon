import {useMemo} from 'react';

const SPECIAL_CHAR_RE = /([.?*+^$[\]\\(){}|-])/g;

type IHighlighted = { 
  text: string,
  search: string,
}

const Highlighted = ({
  text = '',
  search = '',
}: IHighlighted) => {
  const re = useMemo(() => {
    const escapedSearch = search.replace(SPECIAL_CHAR_RE, '\\$1');
    return new RegExp(`(${escapedSearch})`, 'i');
  }, [search]);

  return (
    <span>
      {search === ""
        ? text
        : text
            .split(re)
            .filter((part) => part !== '')
            .map((part, i) => (re.test(part) ? <b key={part + i}>{part}</b> : part))}
    </span>
  );
}

export default Highlighted;
