import Menulist from "./Menulist";
function Treeview({ menus = [] }) {
  return (
    <>
      <div className="tree-view-container">
        <Menulist list={menus} />
      </div>
    </>
  );
}

export default Treeview;
