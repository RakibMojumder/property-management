"use client";

import { ContactIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { LogsIcon } from "lucide-react";
import { UsersIcon } from "lucide-react";
import { LayoutDashboardIcon, LandPlotIcon, XIcon } from "lucide-react";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    name: "Property",
    icon: LandPlotIcon,
  },
  {
    name: "Agent",
    icon: UsersIcon,
  },
  {
    name: "Customers",
    icon: ContactIcon,
  },
  {
    name: "Orders",
    icon: LogsIcon,
  },
  {
    name: "Messages",
    icon: MailIcon,
  },
];

const SidebarItems = ({ setOpen }) => {
  return (
    <div>
      <h3 className="mt-5 mb-3 font-semibold pl-8 pr-4 text-xs text-muted-foreground flex justify-between">
        Menu
        <XIcon
          onClick={() => setOpen(false)}
          size={20}
          className="md:hidden cursor-pointer"
        />
      </h3>
      <ul className="pl-4 pr-4 md:pr-0">
        {sidebarItems.map((item, index) => {
          const { name, icon: Icon } = item;
          return (
            <li
              key={index + name}
              className="flex items-center gap-x-4 py-3 pl-4 hover:bg-neutral-200/80 dark:hover:bg-[#27272A] cursor-pointer duration-300"
            >
              <Icon size={20} />
              <h3 className="text-sm">{name}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarItems;
