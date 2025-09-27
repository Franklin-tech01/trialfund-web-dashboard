// import { Sidebar } from "@/components/sidebar";
// import { TopNav } from "@/components/topnav";

// export default function DashboardLayout({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<div className='flex h-screen'>
// 			<Sidebar />
// 			<div className='flex-1 flex flex-col'>
// 				<TopNav />
// 				<main className='flex-1 p-6 bg-gray-50 overflow-y-auto'>
// 					{children}
// 				</main>
// 			</div>
// 		</div>
// 	);
// }

"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { TopNav } from "@/components/topnav";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<div className='flex h-screen overflow-hidden'>
			<Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
			<div className='flex-1 flex flex-col'>
				<TopNav setMobileOpen={setMobileOpen} />
				<main className='flex-1 p-4 bg-gray-50 overflow-y-auto'>
					{children}
				</main>
			</div>
		</div>
	);
}
