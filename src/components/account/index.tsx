"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Accounts() {
	return (
		<div className='space-y-6'>
			{/* Tabs */}
			<Tabs defaultValue='active' className='w-full'>
				<TabsList>
					<TabsTrigger value='active'>Active</TabsTrigger>
					<TabsTrigger value='inactive'>Inactive</TabsTrigger>
					<TabsTrigger value='breached'>Breached</TabsTrigger>
				</TabsList>
			</Tabs>

			{/* Search & Filters */}
			<div className='flex items-center gap-2'>
				<Input placeholder='Search login ID' className='max-w-xs' />
				<Button variant='outline'>Select Filters</Button>
			</div>

			{/* Accounts List */}
			<div className='space-y-4'>
				<Card>
					<CardHeader>
						<CardTitle>Free Dashboard Tour | Login: 00000</CardTitle>
					</CardHeader>
					<CardContent>
						<p className='text-sm text-gray-600'>
							You are given a demo account to experience the dashboard.
						</p>
						<Button className='mt-4 bg-yellow-500 hover:bg-yellow-600'>
							Dashboard
						</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Free Trial | 50K | Login: 32222913</CardTitle>
					</CardHeader>
					<CardContent className='space-y-2'>
						<p>Server Type: MT5</p>
						<p>Equity: $50,000</p>
						<p>Balance: $50,000</p>
						<p>Account Type: Challenge Account</p>
						<Button className='mt-4 bg-yellow-500 hover:bg-yellow-600'>
							Dashboard
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
