"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

type NavLinkProps = {
    href: string;
    className?: string;
    isActiveClass?: string;
};

const NavLink: React.FC<PropsWithChildren<NavLinkProps>> = ({ href, isActiveClass, className, children }) => {
    const isActive = href === usePathname();
    return (
        <Link href={href} className={classNames(className, { [`${isActiveClass}`]: isActive })}>
            {children}
        </Link>
    );
};

export default NavLink;
