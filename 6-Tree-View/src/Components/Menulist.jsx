import Menuitem from "./Menuitem";

function Menulist({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => (
            <Menuitem key={listItem.to} item={listItem} />
          ))
        : null}
    </ul>
  );
}

export default Menulist;
