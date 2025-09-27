// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import {
// 	LayoutDashboard,
// 	Wallet,
// 	Gift,
// 	Users,
// 	Trophy,
// 	FileBadge,
// 	HelpCircle,
// 	Settings,
// 	ChevronLeft,
// 	ChevronRight,
// } from "lucide-react";
// import Image from "next/image";
// const menuItems = [
// 	{ label: "Accounts", icon: LayoutDashboard },
// 	{ label: "Transactions", icon: Wallet },
// 	{ label: "Payouts", icon: Wallet },
// 	{ label: "Refer & Earn", icon: Gift },
// 	{ label: "My Offers", icon: Users },
// 	{ label: "Competitions", icon: Trophy },
// 	{ label: "Certificates", icon: FileBadge },
// 	{ label: "Resources", icon: HelpCircle },
// 	{ label: "Trading Rules", icon: Settings },
// 	{ label: "FAQ", icon: HelpCircle },
// 	{ label: "Ticket", icon: HelpCircle },
// ];

// export function Sidebar() {
// 	const [collapsed, setCollapsed] = useState(false);

// 	return (
// 		<aside
// 			className={cn(
// 				"h-screen bg-black text-white flex flex-col transition-all duration-300",
// 				collapsed ? "w-20" : "w-64"
// 			)}>
// 			<div className='flex items-center justify-between p-4'>
// 				{!collapsed && (
// 					<Image
// 						src='/assets/images/logo.jpeg'
// 						alt='TrialFund Logo'
// 						width={120}
// 						height={20}
// 					/>
// 				)}
// 				<Button
// 					variant='ghost'
// 					size='icon'
// 					onClick={() => setCollapsed(!collapsed)}
// 					className='text-white'>
// 					{collapsed ? <ChevronRight /> : <ChevronLeft />}
// 				</Button>
// 			</div>
// 			<nav className='flex-1 space-y-1 px-2'>
// 				{menuItems.map(({ label, icon: Icon }) => (
// 					<Button
// 						key={label}
// 						variant='ghost'
// 						className={cn(
// 							"w-full justify-start text-white hover:bg-indigo-700",
// 							collapsed && "justify-center"
// 						)}>
// 						<Icon className='h-5 w-5' />
// 						{!collapsed && <span className='ml-3'>{label}</span>}
// 					</Button>
// 				))}
// 			</nav>
// 			<div className='p-4'>
// 				<Button className='w-full bg-yellow-500 hover:bg-yellow-600'>
// 					Start Challenge
// 				</Button>
// 			</div>
// 		</aside>
// 	);
// }

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
	X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const menuItems = [
	{ label: "Accounts", icon: LayoutDashboard, href: "/account" },
	{ label: "Transactions", icon: Wallet, href: "/transactions" },
	{ label: "Payouts", icon: Wallet, href: "/payouts" },
	{ label: "Refer & Earn", icon: Gift, href: "/refer-and-earn" },
	{ label: "My Offers", icon: Users, href: "/my-offers" },
	{ label: "Competitions", icon: Trophy, href: "/competitions" },
	{ label: "Certificates", icon: FileBadge, href: "/certificates" },
	{ label: "Resources", icon: HelpCircle, href: "/resources" },
	{ label: "Trading Rules", icon: Settings, href: "/trading-rules" },
	{ label: "FAQ", icon: HelpCircle, href: "/faq" },
	{ label: "Ticket", icon: HelpCircle, href: "/ticket" },
];

export function Sidebar({
	mobileOpen,
	setMobileOpen,
}: {
	mobileOpen: boolean;
	setMobileOpen: (val: boolean) => void;
}) {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<>
			{/* Desktop sidebar */}
			<aside
				className={cn(
					"hidden md:flex h-screen bg-black text-white flex-col transition-all duration-300",
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
					{menuItems.map(({ label, icon: Icon, href }) => (
						<Link href={href} key={label} passHref>
							<Button
								key={label}
								variant='ghost'
								className={cn(
									"w-full justify-start text-white cursor-pointer hover:bg-yellow-400",
									collapsed && "justify-center"
								)}>
								<Icon className='h-5 w-5' />
								{!collapsed && <span className='ml-3'>{label}</span>}
							</Button>
						</Link>
					))}
				</nav>
				<div className='p-4'>
					<Button className='w-full bg-yellow-500 hover:bg-yellow-600'>
						Start Challenge
					</Button>
				</div>
			</aside>

			{/* Mobile drawer */}
			{mobileOpen && (
				<div className='fixed inset-0 z-40 flex md:hidden'>
					<div className='w-64 bg-black text-white flex flex-col'>
						<div className='flex items-center justify-between p-4'>
							<Image
								src='/assets/images/logo.jpeg'
								alt='TrialFund Logo'
								width={120}
								height={20}
							/>
							<Button
								variant='ghost'
								size='icon'
								onClick={() => setMobileOpen(false)}
								className='text-white'>
								<X />
							</Button>
						</div>
						<nav className='flex-1 space-y-1 px-2'>
							{menuItems.map(({ label, icon: Icon, href }) => (
								<Link href={href} key={label} passHref>
									<Button
										key={label}
										variant='ghost'
										className='w-full justify-start text-white hover:bg-yellow-400'>
										<Icon className='h-5 w-5' />
										<span className='ml-3'>{label}</span>
									</Button>
								</Link>
							))}
						</nav>
					</div>
					<div
						className='flex-1 bg-black/30 '
						onClick={() => setMobileOpen(false)}
					/>
				</div>
			)}
		</>
	);
}
