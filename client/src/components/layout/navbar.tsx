"use client";

import React from "react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

type Props = {
    redirect: string;
    name: string;
    isActive: boolean;
    setSelected?: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
};

export default function Navbar({ redirect, name, isActive, className }: Props) {
    return (
        <li className="">
            <Link href={redirect} target={redirect.startsWith("http") ? "_blank" : "_self"}>
                <Button
                    variant="ghost"
                    className={cn(
                        'relative inline-block px-0 py-1 text-[16px] font-normal text-gray-300 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-center before:scale-0 before:bg-slate-100 before:transition-all before:duration-300 before:content-[""] hover:before:scale-100 hover:bg-transparent',
                        { "before:scale-100": isActive },
                        className,
                    )}
                >
                    {name}
                </Button>
            </Link>
        </li>
    );
}
