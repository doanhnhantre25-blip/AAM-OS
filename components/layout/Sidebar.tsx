"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Bot,
  ShoppingBag,
  Store,
  Workflow,
  BarChart3,
  Settings,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "AI Agents",
    icon: Bot,
    href: "/ai-agents",
  },
  {
    title: "TikTok",
    icon: ShoppingBag,
    href: "/tiktok",
  },
  {
    title: "Shopee",
    icon: Store,
    href: "/shopee",
  },
  {
    title: "Workflow",
    icon: Workflow,
    href: "/workflow",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r bg-white flex flex-col">
      <div className="h-16 flex items-center px-6 border-b">
        <h1 className="text-xl font-bold">
          AAM<span className="text-blue-600">-OS</span>
        </h1>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4 text-sm text-gray-500">
        AAM-OS v1.0
      </div>
    </aside>
  );
}