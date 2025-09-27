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
// import { cn } from "@/lib/utils";

// const tabs = [
// 	{ id: "billing", label: "Billing History" },
// 	{ id: "payout", label: "Payout History" },
// ];

// export default function BillingPaymentMethod() {
// 	const [activeTab, setActiveTab] = React.useState("billing");

// 	return (
// 		<div className='p-6 bg-gray-50 min-h-screen'>
// 			<div className='flex gap-6'>
// 				{/* Sidebar */}
// 				<Card className='w-1/4 rounded-2xl shadow-md bg-yellow-100'>
// 					<CardHeader>
// 						<CardTitle className='text-yellow-800 text-lg'>
// 							Transactions
// 						</CardTitle>
// 					</CardHeader>
// 					<CardContent className='space-y-2'>
// 						{tabs.map((tab) => (
// 							<div
// 								key={tab.id}
// 								onClick={() => setActiveTab(tab.id)}
// 								className={cn(
// 									"p-2 rounded-xl cursor-pointer font-medium transition-colors",
// 									activeTab === tab.id
// 										? "bg-yellow-400 text-white"
// 										: "hover:bg-yellow-200 text-yellow-800"
// 								)}>
// 								{tab.label}
// 							</div>
// 						))}
// 					</CardContent>
// 				</Card>

// 				{/* Main Content */}
// 				<Card className='flex-1 rounded-2xl shadow-md bg-white'>
// 					<CardHeader>
// 						<CardTitle className='text-lg text-gray-800'>
// 							{activeTab === "billing" ? "Billing History" : "Payout History"}
// 						</CardTitle>
// 					</CardHeader>
// 					<CardContent>
// 						<div className='overflow-x-auto'>
// 							<Table>
// 								<TableHeader>
// 									<TableRow>
// 										<TableHead>SN</TableHead>
// 										<TableHead>Account No</TableHead>
// 										<TableHead>Payment Method</TableHead>
// 										<TableHead>Invoice</TableHead>
// 										<TableHead>Status</TableHead>
// 										<TableHead>Date</TableHead>
// 										<TableHead>Transaction ID</TableHead>
// 										<TableHead>Transition Type</TableHead>
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
// 						</div>
// 					</CardContent>
// 				</Card>
// 			</div>
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
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const tabs = [
	{ id: "billing", label: "Billing History" },
	{ id: "payout", label: "Payout History" },
];

export default function BillingPaymentMethod() {
	const [activeTab, setActiveTab] = React.useState("billing");
	const [loading, setLoading] = React.useState(true);

	// Simulate loading for 1.5s
	React.useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => setLoading(false), 1500);
		return () => clearTimeout(timer);
	}, [activeTab]);

	return (
		<div className='p-6 bg-gray-50 min-h-screen'>
			<div className='flex gap-6'>
				{/* Sidebar */}
				<Card className='w-1/4 rounded-2xl shadow-sm bg-yellow-100 border-0'>
					<CardHeader className='pb-2'>
						<CardTitle className='text-yellow-800 text-lg'>
							Transactions
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-2'>
						{tabs.map((tab) => (
							<div
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={cn(
									"p-2 rounded-md cursor-pointer font-medium transition-colors",
									activeTab === tab.id
										? "bg-yellow-400 text-white shadow-sm"
										: "hover:bg-yellow-200 text-yellow-800"
								)}>
								{tab.label}
							</div>
						))}
					</CardContent>
				</Card>

				{/* Main Content */}
				<Card className='flex-1 rounded-2xl shadow-sm bg-white border-0'>
					<CardHeader className='pb-2'>
						<CardTitle className='text-lg text-gray-800'>
							{activeTab === "billing" ? "Billing History" : "Payout History"}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='overflow-x-auto rounded-lg border border-gray-100'>
							{loading ? (
								<SkeletonTable />
							) : (
								<Table>
									<TableHeader>
										<TableRow className='bg-gray-100'>
											<TableHead>SN</TableHead>
											<TableHead>Account No</TableHead>
											<TableHead>Payment Method</TableHead>
											<TableHead>Invoice</TableHead>
											<TableHead>Status</TableHead>
											<TableHead>Date</TableHead>
											<TableHead>Transaction ID</TableHead>
											<TableHead>Transition Type</TableHead>
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
		</div>
	);
}

function SkeletonTable() {
	return (
		<div className='w-full'>
			{/* Skeleton Header */}
			<div className='grid grid-cols-8 bg-gray-100'>
				{Array.from({ length: 8 }).map((_, i) => (
					<Skeleton key={i} className='h-8 m-2 rounded' />
				))}
			</div>
			{/* Skeleton Rows */}
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
