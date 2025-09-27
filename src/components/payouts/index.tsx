// "use client";

// import * as React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
// 	Table,
// 	TableBody,
// 	TableCell,
// 	TableHead,
// 	TableHeader,
// 	TableRow,
// } from "@/components/ui/table";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
// import { Skeleton } from "@/components/ui/skeleton";
// import { cn } from "@/lib/utils";

// export default function PayoutPage() {
// 	const [loading, setLoading] = React.useState(true);

// 	React.useEffect(() => {
// 		setLoading(true);
// 		const timer = setTimeout(() => setLoading(false), 1500);
// 		return () => clearTimeout(timer);
// 	}, []);

// 	return (
// 		<div className='p-6 bg-gray-50 min-h-screen space-y-6'>
// 			{/* Top Payout Cards */}
// 			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
// 				{[
// 					{ title: "Withdrawable Profit", amount: "$0" },
// 					{ title: "Pending Amount", amount: "$0" },
// 					{ title: "Disbursed Amount", amount: "$0" },
// 				].map((card, idx) => (
// 					<Card key={idx} className='border-0 rounded-2xl shadow-sm bg-white'>
// 						<CardContent className='p-4'>
// 							<div className='flex justify-between items-center'>
// 								<div>
// 									<p className='text-2xl font-bold text-gray-800'>
// 										{card.amount}
// 									</p>
// 									<p className='text-gray-500 text-sm'>{card.title}</p>
// 								</div>
// 								<div className='w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center text-yellow-700 font-bold'>
// 									i
// 								</div>
// 							</div>
// 						</CardContent>
// 					</Card>
// 				))}
// 			</div>

// 			{/* Request Payout Section */}
// 			<Card className='border-0 rounded-2xl shadow-sm bg-gradient-to-r from-yellow-400 to-yellow-500 text-white'>
// 				<CardHeader className='pb-2'>
// 					<CardTitle className='text-lg font-semibold'>
// 						Request Your Payouts
// 					</CardTitle>
// 				</CardHeader>
// 				<CardContent>
// 					<p className='text-sm mb-2'>
// 						Minimum payout amount for withdrawal is $20
// 					</p>
// 					<p className='text-sm mb-4'>
// 						Complete KYC verification to enable payout requests.
// 					</p>
// 					<div className='flex gap-2 mt-2'>
// 						<span className='px-3 py-1 rounded-full bg-white text-yellow-700 text-sm font-medium'>
// 							Rise
// 						</span>
// 						<span className='px-3 py-1 rounded-full bg-white text-yellow-700 text-sm font-medium'>
// 							USDT
// 						</span>
// 						<span className='px-3 py-1 rounded-full bg-white text-yellow-700 text-sm font-medium'>
// 							USDC
// 						</span>
// 					</div>
// 				</CardContent>
// 			</Card>

// 			{/* Notes Section */}
// 			<Card className='border-0 rounded-2xl shadow-sm bg-white'>
// 				<CardContent className='p-4 space-y-1 text-sm text-gray-600'>
// 					<p>
// 						1. The 24-hour payout guarantee starts after you request the payout
// 						with correct details.
// 					</p>
// 					<p>
// 						2. Withdraw the 15% profit share once you make 10% growth in your
// 						account.
// 					</p>
// 					<p>
// 						3. If flagged for Due Diligence, re-submit with correct information
// 						to avoid delays.
// 					</p>
// 					<p>
// 						4. First payout includes Reward Bonus for Stellar Lite at the third
// 						payout.
// 					</p>
// 					<p>5. Contact support if unable to request payout.</p>
// 					<p>6. Provider fees up to 3.5% apply to all payout requests.</p>
// 				</CardContent>
// 			</Card>

// 			{/* Table Section */}
// 			<Card className='border-0 rounded-2xl shadow-sm bg-white'>
// 				<CardHeader className='flex flex-row items-center justify-between'>
// 					<CardTitle className='text-gray-800 text-lg'>Payouts</CardTitle>
// 					<Select>
// 						<SelectTrigger className='w-[180px]'>
// 							<SelectValue placeholder='Select Filter' />
// 						</SelectTrigger>
// 						<SelectContent>
// 							<SelectItem value='all'>All</SelectItem>
// 							<SelectItem value='pending'>Pending</SelectItem>
// 							<SelectItem value='completed'>Completed</SelectItem>
// 						</SelectContent>
// 					</Select>
// 				</CardHeader>
// 				<CardContent>
// 					<div className='overflow-x-auto'>
// 						{loading ? (
// 							<SkeletonTable />
// 						) : (
// 							<Table>
// 								<TableHeader>
// 									<TableRow className='bg-gray-100'>
// 										<TableHead>Login</TableHead>
// 										<TableHead>Date</TableHead>
// 										<TableHead>Withdrawal ID</TableHead>
// 										<TableHead>Requested Amount</TableHead>
// 										<TableHead>News Trade</TableHead>
// 										<TableHead>Account Type</TableHead>
// 										<TableHead>Status</TableHead>
// 										<TableHead>Disbursed Amount</TableHead>
// 									</TableRow>
// 								</TableHeader>
// 								<TableBody>
// 									<TableRow>
// 										<TableCell colSpan={8}>
// 											<div className='flex flex-col items-center py-6 text-gray-400'>
// 												<div className='w-10 h-10 bg-gray-100 rounded-full mb-2'></div>
// 												<p>No data</p>
// 											</div>
// 										</TableCell>
// 									</TableRow>
// 								</TableBody>
// 							</Table>
// 						)}
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</div>
// 	);
// }

// function SkeletonTable() {
// 	return (
// 		<div className='w-full'>
// 			{/* Header Skeleton */}
// 			<div className='grid grid-cols-8 bg-gray-100'>
// 				{Array.from({ length: 8 }).map((_, i) => (
// 					<Skeleton key={i} className='h-8 m-2 rounded' />
// 				))}
// 			</div>
// 			{/* Row Skeletons */}
// 			{Array.from({ length: 3 }).map((_, row) => (
// 				<div key={row} className='grid grid-cols-8'>
// 					{Array.from({ length: 8 }).map((_, col) => (
// 						<Skeleton key={col} className='h-6 m-2 rounded' />
// 					))}
// 				</div>
// 			))}
// 		</div>
// 	);
// }

"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function ModernPayoutPage() {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => setLoading(false), 1200);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='p-6 bg-gray-50 min-h-screen space-y-6'>
			{/* Top Summary Cards */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				{[
					{ title: "Withdrawable Profit", amount: "$0" },
					{ title: "Pending Amount", amount: "$0" },
					{ title: "Disbursed Amount", amount: "$0" },
				].map((card, idx) => (
					<Card
						key={idx}
						className='border-0 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow'>
						<CardContent className='p-5'>
							<div className='flex justify-between items-center'>
								<div>
									<p className='text-2xl font-semibold text-gray-900'>
										{card.amount}
									</p>
									<p className='text-gray-500 text-sm mt-1'>{card.title}</p>
								</div>
								<div className='w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold'>
									i
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Request Payout */}
			<Card className='border-0 rounded-2xl shadow-sm bg-gradient-to-r from-yellow-400/90 to-yellow-500 text-white'>
				<CardHeader className='pb-2'>
					<CardTitle className='text-lg font-semibold'>
						Request Your Payouts
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='text-sm mb-1 opacity-90'>
						Minimum payout amount for withdrawal is{" "}
						<span className='font-semibold'>$20</span>.
					</p>
					<p className='text-sm mb-3 opacity-90'>
						Complete KYC verification to enable payout requests.
					</p>
					<div className='flex gap-2 mt-2'>
						{["Rise", "USDT", "USDC"].map((method) => (
							<span
								key={method}
								className='px-3 py-1 rounded-full bg-white text-yellow-700 text-sm font-medium shadow-sm'>
								{method}
							</span>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Notes */}
			<Card className='border-0 rounded-2xl shadow-sm bg-white'>
				<CardHeader>
					<CardTitle className='text-base text-gray-700'>
						Important Notes
					</CardTitle>
				</CardHeader>
				<CardContent className='p-4 space-y-1 text-sm text-gray-600'>
					{[
						"The 24-hour payout guarantee applies after you request the payout with correct details.",
						"You can withdraw the 15% profit share once you hit 10% growth in your account.",
						"If flagged for Due Diligence, re-submit with correct info to avoid delays.",
						"First payout includes Reward Bonus for Stellar Lite at the third payout.",
						"Contact support if unable to request payout.",
						"Provider fees up to 3.5% apply to all payout requests.",
					].map((note, idx) => (
						<p key={idx}>
							{idx + 1}. {note}
						</p>
					))}
				</CardContent>
			</Card>

			{/* Table */}
			<Card className='border-0 rounded-2xl shadow-sm bg-white'>
				<CardHeader className='flex flex-row items-center justify-between'>
					<CardTitle className='text-gray-800 text-lg'>Payouts</CardTitle>
					<Select>
						<SelectTrigger className='w-[180px]'>
							<SelectValue placeholder='Select Filter' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='all'>All</SelectItem>
							<SelectItem value='pending'>Pending</SelectItem>
							<SelectItem value='completed'>Completed</SelectItem>
						</SelectContent>
					</Select>
				</CardHeader>
				<CardContent>
					<div className='overflow-x-auto'>
						{loading ? (
							<SkeletonTable />
						) : (
							<Table>
								<TableHeader>
									<TableRow className='bg-gray-100'>
										<TableHead>Login</TableHead>
										<TableHead>Date</TableHead>
										<TableHead>Withdrawal ID</TableHead>
										<TableHead>Requested Amount</TableHead>
										<TableHead>News Trade</TableHead>
										<TableHead>Account Type</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Disbursed Amount</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell colSpan={8}>
											<div className='flex flex-col items-center py-6 text-gray-400'>
												<div className='w-10 h-10 bg-gray-100 rounded-full mb-2'></div>
												<p>No data</p>
											</div>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

function SkeletonTable() {
	return (
		<div className='w-full'>
			<div className='grid grid-cols-8 bg-gray-100'>
				{Array.from({ length: 8 }).map((_, i) => (
					<Skeleton key={i} className='h-8 m-2 rounded' />
				))}
			</div>
			{Array.from({ length: 3 }).map((_, row) => (
				<div key={row} className='grid grid-cols-8'>
					{Array.from({ length: 8 }).map((_, col) => (
						<Skeleton key={col} className='h-6 m-2 rounded' />
					))}
				</div>
			))}
		</div>
	);
}
