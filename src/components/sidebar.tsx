"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	LayoutDashboard,
	Wallet,
	Gift,
	Users,
	Trophy,
	FileBadge,
	HelpCircle,
	Settings,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import Image from "next/image";
const menuItems = [
	{ label: "Accounts", icon: LayoutDashboard },
	{ label: "Transactions", icon: Wallet },
	{ label: "Payouts", icon: Wallet },
	{ label: "Refer & Earn", icon: Gift },
	{ label: "My Offers", icon: Users },
	{ label: "Competitions", icon: Trophy },
	{ label: "Certificates", icon: FileBadge },
	{ label: "Resources", icon: HelpCircle },
	{ label: "Trading Rules", icon: Settings },
	{ label: "FAQ", icon: HelpCircle },
	{ label: "Ticket", icon: HelpCircle },
];

export function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<aside
			className={cn(
				"h-screen bg-black text-white flex flex-col transition-all duration-300",
				collapsed ? "w-20" : "w-64"
			)}>
			<div className='flex items-center justify-between p-4'>
				{!collapsed && (
					<Image
						src='/assets/images/logo.jpeg'
						alt='TrialFund Logo'
						width={120}
						height={20}
					/>
				)}
				<Button
					variant='ghost'
					size='icon'
					onClick={() => setCollapsed(!collapsed)}
					className='text-white'>
					{collapsed ? <ChevronRight /> : <ChevronLeft />}
				</Button>
			</div>
			<nav className='flex-1 space-y-1 px-2'>
				{menuItems.map(({ label, icon: Icon }) => (
					<Button
						key={label}
						variant='ghost'
						className={cn(
							"w-full justify-start text-white hover:bg-indigo-700",
							collapsed && "justify-center"
						)}>
						<Icon className='h-5 w-5' />
						{!collapsed && <span className='ml-3'>{label}</span>}
					</Button>
				))}
			</nav>
			<div className='p-4'>
				<Button className='w-full bg-yellow-500 hover:bg-yellow-600'>
					Start Challenge
				</Button>
			</div>
		</aside>
	);
}
