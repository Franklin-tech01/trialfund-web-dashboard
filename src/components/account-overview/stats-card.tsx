"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { BadgeDollarSignIcon } from "lucide-react";
const stats = [
	{
		label: "Balance",
		value: "$50,000",
		color: "from-indigo-400 to-indigo-600",
	},
	{ label: "Profit/Loss", value: "$8,500", color: "from-blue-400 to-blue-600" },
	{ label: "Floating Loss", value: "$0", color: "from-pink-400 to-pink-600" },
	{ label: "Trading Days", value: "10", color: "from-green-400 to-green-600" },
];

export function StatsCards() {
	return (
		<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
			{stats.map((s) => (
				<Card
					key={s.label}
					className='rounded-xl shadow-sm border border-gray-100'>
					<CardContent className='p-4'>
						<div
							className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${s.color} text-white font-bold mb-2`}>
							<BadgeDollarSignIcon size={20} />
						</div>
						<p className='text-lg font-bold'>{s.value}</p>
						<p className='text-sm text-gray-600'>{s.label}</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
