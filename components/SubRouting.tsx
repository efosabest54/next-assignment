import Link from "next/link";
import React from "react";
import { subRoutingNav } from "@/utils/constants";

const SubRouting = () => {
  return (
    <div>
      <div className="flex gap-3 item-center">
        <Link href={"/Services"}>Home </Link>
        {subRoutingNav.map((item, index) => (
          <Link key={index} href={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubRouting;
