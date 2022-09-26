import Highlighted from './Highlighted';

type TListItems = {
  items: string[],
  onSelect: (item: string) => void,
  searchText: string, 
}

const ListItems = ({
  items,
  onSelect,
  searchText,
}: TListItems) => {
  const onClick = (item = '') => () => onSelect(item);

  console.log(searchText);
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li
            key={item + index}
            onClick={onClick(item)}
          >
            <Highlighted text={item} search={searchText} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListItems;