'use client'

import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";      

const navItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Content Library",
        href: "/content"
    },
    {
        title: "My Subscriptions",
        href: "/subscription"
    },
    {
        title: "Login",
        href: "/login"
    }
]

const NavItems = () => {
    const pathname = usePathname();
    return (
       <nav className="flex items-center gap-4">
           {navItems.map(({ title, href }) => (
               <Link 
                    href={href} 
                    key={title}
                    className={cn(pathname === href && "text-primary", "font-semibold")}>
                   {title}
               </Link>
           ))}
       </nav>
    );
};

export default NavItems;
