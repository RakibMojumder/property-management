"use client";

import { BellIcon } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import { SettingsIcon } from "lucide-react";
import logo from "../../public/logo.png";
import Image from "next/image";
import userImg from "../../public/user.png";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import Notifications from "./Notification";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="h-14 border-b sticky top-0 bg-white dark:bg-background px-5 flex justify-between items-center">
        {/* logo part */}
        <div className="flex items-center gap-x-5">
          <MenuIcon
            onClick={() => setOpen(true)}
            className="md:hidden cursor-pointer"
          />
          <Image src={logo} alt="logo" className="w-16" />
          <h2 className="text-xl font-bold uppercase text-blue-500 hidden sm:block">
            Homes.com
          </h2>
        </div>

        {/* Navbar menu part */}
        <div className="flex items-center gap-x-7">
          <ThemeSwitcher />
          <Notifications />
          {/* <BellIcon size={20} className="hidden sm:block" /> */}
          <SettingsIcon size={20} className="hidden sm:block" />
          <Image
            src={userImg}
            alt="user image"
            className="size-10 border rounded-full"
          />
        </div>
      </nav>
      {open && <MobileSidebar setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
