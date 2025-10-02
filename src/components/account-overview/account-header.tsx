// "use client";

// import { Card, CardContent } from "@/components/ui/card";

// export function AccountHeader() {
// 	return (
// 		<Card className='bg-white shadow-sm rounded-xl p-4 md:p-6'>
// 			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
// 				{/* User Info */}
// 				<CardContent className='space-y-2'>
// 					<h2 className='text-lg font-semibold'>Hello Franklin Mike!</h2>
// 					<p className='text-sm text-gray-600'>
// 						Currently, you have an Evaluation account
// 					</p>
// 					<ul className='text-sm text-gray-700 list-disc pl-4'>
// 						<li>Initial Balance: $50,000</li>
// 						<li>Plan Type: Express Demo 50k</li>
// 						<li>Account Type: Swap</li>
// 					</ul>
// 				</CardContent>

// 				{/* Account Details */}
// 				<CardContent className='space-y-2 border-t md:border-t-0 md:border-l md:pl-4'>
// 					<h3 className='text-sm font-medium text-gray-600'>Account Details</h3>
// 					<p className='text-sm'>
// 						Login: <span className='font-semibold'>123456</span>
// 					</p>
// 					<p className='text-sm'>
// 						Investor Pass: <span>@Fn2022*</span>
// 					</p>
// 					<p className='text-sm'>Server: FundedNext-Server</p>
// 				</CardContent>

// 				{/* Trading Cycle */}
// 				<CardContent className='space-y-2 border-t md:border-t-0 md:border-l md:pl-4'>
// 					<h3 className='text-sm font-medium text-gray-600'>
// 						Trading Cycle Details
// 					</h3>
// 					<p className='text-sm'>
// 						Start Date: <span className='font-semibold'>Dec 5, 2022</span>
// 					</p>
// 					<p className='text-sm'>
// 						End Date: <span className='font-semibold'>Dec 31, 2022</span>
// 					</p>
// 				</CardContent>
// 			</div>
// 		</Card>
// 	);
// }

"use client";

import { useState } from "react";
import {
	Copy,
	Check,
	User,
	Shield,
	Lock,
	Server,
	RefreshCw,
	Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AccountHeaderProps {
	name: string;
	initialBalance: string;
	planType: string;
	accountType: string;
	login: string;
	mt5Server: string;
	startDate: string;
	endDate: string;
}

export default function AccountHeader({
	name,
	initialBalance,
	planType,
	accountType,
	login,
	mt5Server,
	startDate,
	endDate,
}: AccountHeaderProps) {
	const [copied, setCopied] = useState<string | null>(null);

	const handleCopy = async (text: string, field: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(field);
			setTimeout(() => setCopied(null), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
		<Card className='w-full p-6  rounded-2xl bg-white'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
				{/* Left: User Info */}
				<div>
					<div className='flex items-center space-x-4'>
						<div className='w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center'>
							<User className='w-7 h-7 text-gray-500' />
						</div>
						<div>
							<h2 className='font-bold text-lg'>Hello {name}!</h2>
							<p className='text-gray-600 text-sm'>
								Currently, you have a Free Trial account
							</p>
						</div>
					</div>
					<ul className='mt-4 space-y-2 text-sm text-gray-700'>
						<li>
							💰 <span className='font-medium'>Initial Balance:</span>{" "}
							{initialBalance}
						</li>
						<li>
							📋 <span className='font-medium'>Plan Type:</span> {planType}
						</li>
						<li>
							🔄 <span className='font-medium'>Account Type:</span>{" "}
							{accountType}
						</li>
					</ul>
				</div>

				{/* Middle: Account Details */}
				<div className='border-l border-r px-6'>
					<h3 className='flex items-center font-semibold text-blue-900 mb-3'>
						<Shield className='w-4 h-4 mr-2' /> Account Details
					</h3>
					<div className='space-y-3 text-sm'>
						<div className='flex items-center justify-between'>
							<span className='text-gray-600'>Login</span>
							<div className='flex items-center space-x-2'>
								<span className='font-mono'>{login}</span>
								<Button
									variant='ghost'
									size='icon'
									onClick={() => handleCopy(login, "login")}>
									{copied === "login" ? (
										<Check className='w-4 h-4 text-green-500' />
									) : (
										<Copy className='w-4 h-4' />
									)}
								</Button>
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<span className='text-gray-600'>Investor Pass.</span>
							<Button variant='link' className='text-blue-600 p-0 text-xs'>
								Set Password
							</Button>
						</div>

						<div className='flex items-center justify-between'>
							<span className='text-gray-600'>Master Pass.</span>
							<div className='flex items-center space-x-2'>
								<span className='font-mono'>••••••</span>
								<Button
									variant='link'
									size='sm'
									className='text-blue-600 p-0 text-xs'>
									View
								</Button>
								<Button
									variant='link'
									size='sm'
									className='text-blue-600 p-0 text-xs'>
									Reset
								</Button>
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<span className='text-gray-600'>MT5 Server</span>
							<div className='flex items-center space-x-2'>
								<span>{mt5Server}</span>
								<Button
									variant='ghost'
									size='icon'
									onClick={() => handleCopy(mt5Server, "server")}>
									{copied === "server" ? (
										<Check className='w-4 h-4 text-green-500' />
									) : (
										<Copy className='w-4 h-4' />
									)}
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Right: Trading Cycle */}
				<div>
					<h3 className='flex items-center font-semibold text-blue-900 mb-3'>
						<Calendar className='w-4 h-4 mr-2' /> Trading Cycle Details
					</h3>
					<p className='text-sm text-gray-700'>📅 Start Date: {startDate}</p>
					<p className='text-sm text-gray-700'>📅 End Date: {endDate}</p>
				</div>
			</div>
		</Card>
	);
}
