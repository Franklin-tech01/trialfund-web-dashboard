"use client";

import { Card, CardContent } from "@/components/ui/card";

export function SideInfo() {
	return (
		<div className='space-y-4'>
			<Card className='bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl'>
				<CardContent className='p-6 text-center'>
					<p className='text-sm'>Account Growth</p>
					<p className='text-3xl font-bold'>0%</p>
				</CardContent>
			</Card>

			<Card>
				<CardContent className='p-4 text-center'>
					<p className='text-sm text-gray-500'>
						Today's permitted loss resets in
					</p>
					<p className='text-2xl font-bold text-indigo-600'>00:55:27</p>
					<p className='text-xs text-gray-500'>Timezone: GMT+3</p>
				</CardContent>
			</Card>

			<Card>
				<CardContent className='p-4'>
					<p className='text-sm text-gray-500'>Email Support</p>
					<p className='font-medium'>support@trialfund.com</p>
				</CardContent>
			</Card>
		</div>
	);
}
