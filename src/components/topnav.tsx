// "use client";

// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// export function TopNav() {
// 	return (
// 		<header className='flex items-center justify-between bg-white shadow px-6 py-3'>
// 			<div>
// 				<h1 className='text-xl font-bold'>Accounts</h1>
// 				<p className='text-sm text-gray-500'>
// 					Unlock your trading potential with TrialFund. Start trading now!
// 				</p>
// 			</div>
// 			<div className='flex items-center gap-4'>
// 				<Button variant='outline' className='text-indigo-900'>
// 					Free Trial
// 				</Button>
// 				<Button className='bg-yellow-500 hover:bg-yellow-600 text-black'>
// 					Start Challenge
// 				</Button>
// 				<Avatar>
// 					<AvatarFallback>FM</AvatarFallback>
// 				</Avatar>
// 			</div>
// 		</header>
// 	);
// }

"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu } from "lucide-react";

export function TopNav({
	setMobileOpen,
}: {
	setMobileOpen: (val: boolean) => void;
}) {
	return (
		<header className='flex items-center justify-between bg-white shadow px-4 py-3'>
			<div className='flex items-center gap-2'>
				<Button
					variant='ghost'
					size='icon'
					className='md:hidden'
					onClick={() => setMobileOpen(true)}>
					<Menu />
				</Button>
				<div>
					<h1 className='text-xl font-bold'>Accounts</h1>
					<p className='text-sm text-gray-500 hidden sm:block'>
						Unlock your trading potential with TrialFund. Start trading now!
					</p>
				</div>
			</div>
			<div className='flex items-center gap-2'>
				<Button variant='outline' className='text-indigo-900 text-sm'>
					Free Trial
				</Button>
				<Button className='bg-yellow-500 hover:bg-yellow-600 text-black text-sm'>
					Start Challenge
				</Button>
				<Avatar>
					<AvatarFallback>FM</AvatarFallback>
				</Avatar>
			</div>
		</header>
	);
}
