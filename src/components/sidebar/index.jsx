const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar__title">{props.title}</h3>
      <p><i>Coming Soon!</i></p>
      <ul className="sidebar__discription">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
