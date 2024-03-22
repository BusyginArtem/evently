"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerLinks } from "@/constants";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="justify-between w-full items-start md:items-center gap-5 flex flex-col md:!flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
