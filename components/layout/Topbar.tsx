"use client";

import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Topbar() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <Input
          placeholder="Search..."
          className="pl-10"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="cursor-pointer" />

        <Avatar>
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}