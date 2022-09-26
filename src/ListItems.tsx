type TListItems = {
  items: string[],
  onSelect: (item: string) => void,
}

const ListItems = ({
  items,
  onSelect,
}: TListItems) => {
  const onClick = (item = '') => () => onSelect(item);
  
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li
            key={item + index}
            onClick={onClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListItems;