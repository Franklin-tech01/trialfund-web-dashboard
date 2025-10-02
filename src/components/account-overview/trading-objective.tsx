"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const objectives = [
	{
		title: "Daily Loss Limit",
		status: "Ongoing",
		info: [
			"Max Daily Limit: $1,250",
			"Daily Loss: $0",
			"Today's Permitted: $2,500",
		],
		color: "bg-purple-100 text-purple-700",
	},
	{
		title: "Maximum Loss Limit",
		status: "Ongoing",
		info: [
			"Max Loss Limit: $2,500",
			"Loss till now: $0",
			"Max Permitted: $5,000",
		],
		color: "bg-purple-100 text-purple-700",
	},
	{
		title: "Minimum Trading Days",
		status: "Passed",
		info: ["Minimum: 10 Days"],
		color: "bg-green-100 text-green-700",
	},
	{
		title: "Profit Target",
		status: "Passed",
		info: ["Minimum: $6,250"],
		color: "bg-green-100 text-green-700",
	},
];

export function TradingObjectives() {
	return (
		<Card className='rounded-xl shadow-sm'>
			<CardContent className='p-4 space-y-4'>
				<div className='flex items-center justify-between'>
					<h3 className='text-lg font-semibold'>Trading Objective</h3>
					<p className='text-sm text-indigo-600'>Refreshing in 03:20</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{objectives.map((obj) => (
						<Card key={obj.title} className='border border-gray-100 rounded-lg'>
							<CardContent className='p-4 space-y-2'>
								<div className='flex items-center justify-between'>
									<p className='font-medium'>{obj.title}</p>
									<Badge className={obj.color}>{obj.status}</Badge>
								</div>
								<ul className='text-sm text-gray-600 list-disc pl-4'>
									{obj.info.map((line) => (
										<li key={line}>{line}</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
