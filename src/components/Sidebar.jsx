import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-[260px] pl-2">
      <SidebarItems />
    </aside>
  );
};

export default Sidebar;
