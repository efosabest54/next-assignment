import { navLinks } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex item-center gap-28">
      <Link href={"/"}>Landing</Link>
      <div className="flex item-center gap-5">
        {navLinks.map((item, index) => (
          <Link key={index} href={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
