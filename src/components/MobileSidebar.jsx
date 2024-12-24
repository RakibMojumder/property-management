import SidebarItems from "./SidebarItems";

const MobileSidebar = ({ setOpen }) => {
  return (
    <div className="fixed inset-0 z-[50] md:hidden">
      <div className="w-[350px] border-r bg-background h-screen overflow-y-auto">
        <SidebarItems setOpen={setOpen} />
      </div>
    </div>
  );
};

export default MobileSidebar;
