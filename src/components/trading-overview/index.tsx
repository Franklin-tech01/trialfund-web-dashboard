// "use client";
// import { useState } from "react";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
// 	Table,
// 	TableHeader,
// 	TableRow,
// 	TableHead,
// 	TableBody,
// 	TableCell,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { Briefcase, Globe, HelpCircle } from "lucide-react";

// export default function TradingOverviewPage() {
// 	const [tab, setTab] = useState("stats");
// 	const [analyticsTab, setAnalyticsTab] = useState("symbol");

// 	return (
// 		<div className='min-h-screen bg-gradient-to-b from-zinc-50 to-white p-6 space-y-6'>
// 			{/* Trading Overview */}
// 			<Card className='shadow-sm'>
// 				<CardHeader className='border-b bg-white'>
// 					<CardTitle className='flex items-center gap-2 text-lg font-semibold'>
// 						<Briefcase className='w-5 h-5' />
// 						Trading Overview
// 					</CardTitle>
// 				</CardHeader>
// 				<CardContent className='p-6'>
// 					<Tabs defaultValue='stats' value={tab} onValueChange={setTab}>
// 						<TabsList className='mb-6 bg-zinc-100'>
// 							<TabsTrigger
// 								value='stats'
// 								className='data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-900'>
// 								Detailed Stats
// 							</TabsTrigger>
// 							<TabsTrigger
// 								value='analytics'
// 								className='data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-900'>
// 								Analytics
// 							</TabsTrigger>
// 						</TabsList>

// 						{/* Detailed Stats Tab */}
// 						<TabsContent value='stats'>
// 							<div className='grid md:grid-cols-3 gap-8'>
// 								{/* Column 1 */}
// 								<div className='space-y-4'>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600 flex items-center gap-1'>
// 											Equity <HelpCircle className='w-3 h-3 text-zinc-400' />
// 										</span>
// 										<span className='font-medium'>$50,000</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600 flex items-center gap-1'>
// 											Balance <HelpCircle className='w-3 h-3 text-zinc-400' />
// 										</span>
// 										<span className='font-medium'>$50,000</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600'>Profitability</span>
// 										<div className='w-24 h-3 bg-zinc-300 rounded'></div>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600 flex items-center gap-1'>
// 											Avg. Winning Trade{" "}
// 											<HelpCircle className='w-3 h-3 text-zinc-400' />
// 										</span>
// 										<span className='font-medium'>$0</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600 flex items-center gap-1'>
// 											Avg. Losing Trade{" "}
// 											<HelpCircle className='w-3 h-3 text-zinc-400' />
// 										</span>
// 										<span className='font-medium'>$0</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2'>
// 										<span className='text-zinc-600 flex items-center gap-1'>
// 											Trades <HelpCircle className='w-3 h-3 text-zinc-400' />
// 										</span>
// 										<span className='font-medium'>0</span>
// 									</div>
// 								</div>

// 								{/* Column 2 */}
// 								<div className='space-y-4'>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600 flex items-center gap-1'>
// 											Lots <HelpCircle className='w-3 h-3 text-zinc-400' />
// 										</span>
// 										<span className='font-medium'>0</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600 flex items-center gap-1'>
// 											Avg. RRR <HelpCircle className='w-3 h-3 text-zinc-400' />
// 										</span>
// 										<span className='font-medium'>0</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600 flex items-center gap-1'>
// 											Win Rate <HelpCircle className='w-3 h-3 text-zinc-400' />
// 										</span>
// 										<span className='font-medium'>0%</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600'>Loss Rate</span>
// 										<span className='font-medium'>0%</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600'>Profit Factor</span>
// 										<span className='font-medium'>0</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2'>
// 										<span className='text-zinc-600'>Best Trade</span>
// 										<span className='font-medium'>$0</span>
// 									</div>
// 								</div>

// 								{/* Column 3 */}
// 								<div className='space-y-4'>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600'>Worst Trade</span>
// 										<span className='font-medium'>$0</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600'>Long Won</span>
// 										<span className='font-medium'>0%</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600'>Short Won</span>
// 										<span className='font-medium'>0%</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
// 										<span className='text-zinc-600'>Gross Profit</span>
// 										<span className='font-medium'>$0</span>
// 									</div>
// 									<div className='flex justify-between items-center py-2'>
// 										<span className='text-zinc-600'>Gross Loss</span>
// 										<span className='font-medium'>$0</span>
// 									</div>
// 								</div>
// 							</div>
// 						</TabsContent>

// 						{/* Analytics Tab */}
// 						<TabsContent value='analytics'>
// 							<div className='space-y-6'>
// 								{/* Chart Card */}
// 								<Card className='border-0 shadow-none bg-zinc-50'>
// 									<CardContent className='p-6'>
// 										<div className='flex justify-between items-center mb-6'>
// 											<p className='font-semibold text-base'>
// 												Trade Growth View
// 											</p>
// 											<div className='flex gap-2 items-center'>
// 												<span className='text-sm text-zinc-600'>
// 													Filter By Date:
// 												</span>
// 												<Input
// 													type='text'
// 													placeholder='Start date'
// 													className='w-32 h-9 text-sm'
// 												/>
// 												<span className='text-zinc-400'>→</span>
// 												<Input
// 													type='text'
// 													placeholder='End date'
// 													className='w-32 h-9 text-sm'
// 												/>
// 											</div>
// 										</div>

// 										{/* Chart */}
// 										<div className='bg-white rounded-lg p-4 border'>
// 											<div className='flex justify-end gap-4 mb-4 text-sm'>
// 												<div className='flex items-center gap-2'>
// 													<div className='w-3 h-3 rounded-full bg-red-500'></div>
// 													<span>Equity</span>
// 												</div>
// 												<div className='flex items-center gap-2'>
// 													<div className='w-3 h-3 rounded-full bg-blue-400'></div>
// 													<span>Balance</span>
// 												</div>
// 											</div>
// 											<div className='h-64 relative'>
// 												<svg className='w-full h-full'>
// 													{/* Grid lines */}
// 													{[0, 1, 2, 3, 4, 5, 6].map((i) => (
// 														<line
// 															key={i}
// 															x1='0'
// 															y1={i * 40 + 20}
// 															x2='100%'
// 															y2={i * 40 + 20}
// 															stroke='#e5e7eb'
// 															strokeWidth='1'
// 														/>
// 													))}
// 													{/* Flat line at $50,000 */}
// 													<polyline
// 														points='40,140 120,140 200,140 280,140 360,140 440,140 520,140 600,140 680,140 760,140 840,140'
// 														fill='none'
// 														stroke='#ef4444'
// 														strokeWidth='2'
// 														strokeDasharray='5,5'
// 													/>
// 													{[
// 														40, 120, 200, 280, 360, 440, 520, 600, 680, 760,
// 														840,
// 													].map((x, i) => (
// 														<circle
// 															key={i}
// 															cx={x}
// 															cy='140'
// 															r='4'
// 															fill='#ef4444'
// 														/>
// 													))}
// 												</svg>
// 												{/* X-axis labels */}
// 												<div className='absolute bottom-0 left-0 right-0 flex justify-between text-xs text-zinc-500 px-4'>
// 													<span>Sep 25</span>
// 													<span>Sep 26</span>
// 													<span>Sep 27</span>
// 													<span>Sep 28</span>
// 													<span>Sep 29</span>
// 													<span>Sep 30</span>
// 													<span>Oct 1</span>
// 													<span>Oct 2</span>
// 													<span>Oct 3</span>
// 													<span>Oct 4</span>
// 												</div>
// 												{/* Y-axis labels */}
// 												<div className='absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-zinc-500'>
// 													<span>52,500</span>
// 													<span>52,000</span>
// 													<span>51,500</span>
// 													<span>51,000</span>
// 													<span>50,500</span>
// 													<span>50,000</span>
// 													<span>49,500</span>
// 												</div>
// 											</div>
// 										</div>
// 									</CardContent>
// 								</Card>

// 								{/* Graph Tabs */}
// 								<div>
// 									<p className='font-semibold mb-4'>Graph</p>
// 									<Tabs value={analyticsTab} onValueChange={setAnalyticsTab}>
// 										<TabsList className='bg-zinc-100 flex-wrap h-auto'>
// 											<TabsTrigger
// 												value='symbol'
// 												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white'>
// 												Symbol Performance
// 											</TabsTrigger>
// 											<TabsTrigger
// 												value='weekday'
// 												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white'>
// 												PnL by Weekday
// 											</TabsTrigger>
// 											<TabsTrigger
// 												value='hours'
// 												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white'>
// 												PnL by Hours
// 											</TabsTrigger>
// 											<TabsTrigger
// 												value='order'
// 												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white'>
// 												PnL Order Type
// 											</TabsTrigger>
// 											<TabsTrigger
// 												value='ratio'
// 												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white'>
// 												Win/Loss Ratio
// 											</TabsTrigger>
// 										</TabsList>

// 										{["symbol", "weekday", "hours", "order", "ratio"].map(
// 											(value) => (
// 												<TabsContent key={value} value={value}>
// 													<div className='h-48 flex flex-col items-center justify-center text-zinc-400 bg-zinc-50 rounded-lg mt-4'>
// 														<div className='w-24 h-24 bg-zinc-300 rounded-xl flex items-center justify-center mb-4'>
// 															<svg
// 																className='w-16 h-16 text-white'
// 																fill='currentColor'
// 																viewBox='0 0 24 24'>
// 																<path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' />
// 															</svg>
// 														</div>
// 														<p className='text-base font-medium'>
// 															Trading has not started yet!
// 														</p>
// 													</div>
// 												</TabsContent>
// 											)
// 										)}
// 									</Tabs>
// 								</div>
// 							</div>
// 						</TabsContent>
// 					</Tabs>
// 				</CardContent>
// 			</Card>

// 			{/* Trading History */}
// 			<Card className='shadow-sm'>
// 				<CardHeader className='border-b bg-white'>
// 					<CardTitle className='flex items-center gap-2 text-lg font-semibold'>
// 						<Globe className='w-5 h-5' />
// 						Trading History
// 					</CardTitle>
// 				</CardHeader>
// 				<CardContent className='p-6'>
// 					<div className='overflow-x-auto'>
// 						<Table>
// 							<TableHeader>
// 								<TableRow className='bg-zinc-50'>
// 									<TableHead className='font-semibold'>SN</TableHead>
// 									<TableHead className='font-semibold'>Open Time</TableHead>
// 									<TableHead className='font-semibold'>Open Price</TableHead>
// 									<TableHead className='font-semibold'>Close Time</TableHead>
// 									<TableHead className='font-semibold'>Close Price</TableHead>
// 									<TableHead className='font-semibold'>Profit</TableHead>
// 									<TableHead className='font-semibold'>Lots</TableHead>
// 									<TableHead className='font-semibold'>Commission</TableHead>
// 									<TableHead className='font-semibold'>Swap</TableHead>
// 									<TableHead className='font-semibold flex items-center gap-1'>
// 										Net Profit <HelpCircle className='w-3 h-3 text-zinc-400' />
// 									</TableHead>
// 									<TableHead className='font-semibold'>Symbol</TableHead>
// 								</TableRow>
// 							</TableHeader>
// 							<TableBody>
// 								<TableRow>
// 									<TableCell colSpan={11}>
// 										<div className='flex flex-col items-center justify-center h-40 text-zinc-400'>
// 											<div className='w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center mb-3'>
// 												<svg
// 													className='w-10 h-10 text-zinc-400'
// 													fill='none'
// 													stroke='currentColor'
// 													viewBox='0 0 24 24'>
// 													<path
// 														strokeLinecap='round'
// 														strokeLinejoin='round'
// 														strokeWidth={2}
// 														d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
// 													/>
// 												</svg>
// 											</div>
// 											<p className='text-base'>No data</p>
// 										</div>
// 									</TableCell>
// 								</TableRow>
// 							</TableBody>
// 						</Table>
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</div>
// 	);
// }

"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Briefcase, Globe, HelpCircle } from "lucide-react";

export default function TradingOverviewPage() {
	const [tab, setTab] = useState("stats");
	const [analyticsTab, setAnalyticsTab] = useState("symbol");

	return (
		<div className='min-h-screen bg-gradient-to-b from-zinc-50 to-white p-4 md:p-6 space-y-4 md:space-y-6'>
			{/* Trading Overview */}
			<Card className='shadow-sm'>
				<CardHeader className='border-b bg-white'>
					<CardTitle className='flex items-center gap-2 text-base md:text-lg font-semibold'>
						<Briefcase className='w-4 h-4 md:w-5 md:h-5' />
						Trading Overview
					</CardTitle>
				</CardHeader>
				<CardContent className='p-4 md:p-6'>
					<Tabs defaultValue='stats' value={tab} onValueChange={setTab}>
						<TabsList className='mb-4 md:mb-6 bg-zinc-100 w-full md:w-auto'>
							<TabsTrigger
								value='stats'
								className='data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-900 flex-1 md:flex-none text-sm md:text-base'>
								Detailed Stats
							</TabsTrigger>
							<TabsTrigger
								value='analytics'
								className='data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-900 flex-1 md:flex-none text-sm md:text-base'>
								Analytics
							</TabsTrigger>
						</TabsList>

						{/* Detailed Stats Tab */}
						<TabsContent value='stats'>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
								{/* Column 1 */}
								<div className='space-y-4'>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 flex items-center gap-1 text-sm md:text-base'>
											Equity <HelpCircle className='w-3 h-3 text-zinc-400' />
										</span>
										<span className='font-medium text-sm md:text-base'>
											$50,000
										</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 flex items-center gap-1 text-sm md:text-base'>
											Balance <HelpCircle className='w-3 h-3 text-zinc-400' />
										</span>
										<span className='font-medium text-sm md:text-base'>
											$50,000
										</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 text-sm md:text-base'>
											Profitability
										</span>
										<div className='w-24 h-3 bg-zinc-300 rounded'></div>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 flex items-center gap-1 text-sm md:text-base'>
											Avg. Winning Trade{" "}
											<HelpCircle className='w-3 h-3 text-zinc-400' />
										</span>
										<span className='font-medium text-sm md:text-base'>$0</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 flex items-center gap-1 text-sm md:text-base'>
											Avg. Losing Trade{" "}
											<HelpCircle className='w-3 h-3 text-zinc-400' />
										</span>
										<span className='font-medium text-sm md:text-base'>$0</span>
									</div>
									<div className='flex justify-between items-center py-2'>
										<span className='text-zinc-600 flex items-center gap-1 text-sm md:text-base'>
											Trades <HelpCircle className='w-3 h-3 text-zinc-400' />
										</span>
										<span className='font-medium text-sm md:text-base'>0</span>
									</div>
								</div>

								{/* Column 2 */}
								<div className='space-y-4'>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 flex items-center gap-1 text-sm md:text-base'>
											Lots <HelpCircle className='w-3 h-3 text-zinc-400' />
										</span>
										<span className='font-medium text-sm md:text-base'>0</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 flex items-center gap-1 text-sm md:text-base'>
											Avg. RRR <HelpCircle className='w-3 h-3 text-zinc-400' />
										</span>
										<span className='font-medium text-sm md:text-base'>0</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 flex items-center gap-1 text-sm md:text-base'>
											Win Rate <HelpCircle className='w-3 h-3 text-zinc-400' />
										</span>
										<span className='font-medium text-sm md:text-base'>0%</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 text-sm md:text-base'>
											Loss Rate
										</span>
										<span className='font-medium text-sm md:text-base'>0%</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 text-sm md:text-base'>
											Profit Factor
										</span>
										<span className='font-medium text-sm md:text-base'>0</span>
									</div>
									<div className='flex justify-between items-center py-2'>
										<span className='text-zinc-600 text-sm md:text-base'>
											Best Trade
										</span>
										<span className='font-medium text-sm md:text-base'>$0</span>
									</div>
								</div>

								{/* Column 3 */}
								<div className='space-y-4'>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 text-sm md:text-base'>
											Worst Trade
										</span>
										<span className='font-medium text-sm md:text-base'>$0</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 text-sm md:text-base'>
											Long Won
										</span>
										<span className='font-medium text-sm md:text-base'>0%</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 text-sm md:text-base'>
											Short Won
										</span>
										<span className='font-medium text-sm md:text-base'>0%</span>
									</div>
									<div className='flex justify-between items-center py-2 border-b border-zinc-100'>
										<span className='text-zinc-600 text-sm md:text-base'>
											Gross Profit
										</span>
										<span className='font-medium text-sm md:text-base'>$0</span>
									</div>
									<div className='flex justify-between items-center py-2'>
										<span className='text-zinc-600 text-sm md:text-base'>
											Gross Loss
										</span>
										<span className='font-medium text-sm md:text-base'>$0</span>
									</div>
								</div>
							</div>
						</TabsContent>

						{/* Analytics Tab */}
						<TabsContent value='analytics'>
							<div className='space-y-6'>
								{/* Chart Card */}
								<Card className='border-0 shadow-none bg-zinc-50'>
									<CardContent className='p-4 md:p-6'>
										<div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
											<p className='font-semibold text-sm md:text-base'>
												Trade Growth View
											</p>
											<div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center'>
												<span className='text-xs md:text-sm text-zinc-600'>
													Filter By Date:
												</span>
												<div className='flex gap-2 items-center w-full sm:w-auto'>
													<Input
														type='text'
														placeholder='Start date'
														className='w-full sm:w-28 md:w-32 h-8 md:h-9 text-xs md:text-sm'
													/>
													<span className='text-zinc-400'>→</span>
													<Input
														type='text'
														placeholder='End date'
														className='w-full sm:w-28 md:w-32 h-8 md:h-9 text-xs md:text-sm'
													/>
												</div>
											</div>
										</div>

										{/* Chart */}
										<div className='bg-white rounded-lg p-2 md:p-4 border overflow-x-auto'>
											<div className='flex justify-end gap-4 mb-4 text-xs md:text-sm'>
												<div className='flex items-center gap-2'>
													<div className='w-3 h-3 rounded-full bg-red-500'></div>
													<span>Equity</span>
												</div>
												<div className='flex items-center gap-2'>
													<div className='w-3 h-3 rounded-full bg-blue-400'></div>
													<span>Balance</span>
												</div>
											</div>
											<div className='h-48 md:h-64 relative min-w-[600px] md:min-w-0'>
												<svg className='w-full h-full'>
													{/* Grid lines */}
													{[0, 1, 2, 3, 4, 5, 6].map((i) => (
														<line
															key={i}
															x1='0'
															y1={i * 40 + 20}
															x2='100%'
															y2={i * 40 + 20}
															stroke='#e5e7eb'
															strokeWidth='1'
														/>
													))}
													{/* Flat line at $50,000 */}
													<polyline
														points='40,140 120,140 200,140 280,140 360,140 440,140 520,140 600,140 680,140 760,140 840,140'
														fill='none'
														stroke='#ef4444'
														strokeWidth='2'
														strokeDasharray='5,5'
													/>
													{[
														40, 120, 200, 280, 360, 440, 520, 600, 680, 760,
														840,
													].map((x, i) => (
														<circle
															key={i}
															cx={x}
															cy='140'
															r='4'
															fill='#ef4444'
														/>
													))}
												</svg>
												{/* X-axis labels */}
												<div className='absolute bottom-0 left-0 right-0 flex justify-between text-[10px] md:text-xs text-zinc-500 px-4'>
													<span>Sep 25</span>
													<span>Sep 26</span>
													<span>Sep 27</span>
													<span>Sep 28</span>
													<span>Sep 29</span>
													<span>Sep 30</span>
													<span>Oct 1</span>
													<span>Oct 2</span>
													<span>Oct 3</span>
													<span>Oct 4</span>
												</div>
												{/* Y-axis labels */}
												<div className='absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] md:text-xs text-zinc-500'>
													<span>52,500</span>
													<span>52,000</span>
													<span>51,500</span>
													<span>51,000</span>
													<span>50,500</span>
													<span>50,000</span>
													<span>49,500</span>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>

								{/* Graph Tabs */}
								<div>
									<p className='font-semibold mb-4 text-sm md:text-base'>
										Graph
									</p>
									<Tabs value={analyticsTab} onValueChange={setAnalyticsTab}>
										<TabsList className='bg-zinc-100 flex-wrap h-auto gap-1 md:gap-0'>
											<TabsTrigger
												value='symbol'
												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white text-xs md:text-sm px-2 md:px-3'>
												Symbol Performance
											</TabsTrigger>
											<TabsTrigger
												value='weekday'
												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white text-xs md:text-sm px-2 md:px-3'>
												PnL by Weekday
											</TabsTrigger>
											<TabsTrigger
												value='hours'
												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white text-xs md:text-sm px-2 md:px-3'>
												PnL by Hours
											</TabsTrigger>
											<TabsTrigger
												value='order'
												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white text-xs md:text-sm px-2 md:px-3'>
												PnL Order Type
											</TabsTrigger>
											<TabsTrigger
												value='ratio'
												className='data-[state=active]:bg-yellow-500 data-[state=active]:text-white text-xs md:text-sm px-2 md:px-3'>
												Win/Loss Ratio
											</TabsTrigger>
										</TabsList>

										{["symbol", "weekday", "hours", "order", "ratio"].map(
											(value) => (
												<TabsContent key={value} value={value}>
													<div className='h-40 md:h-48 flex flex-col items-center justify-center text-zinc-400 bg-zinc-50 rounded-lg mt-4'>
														<div className='w-16 h-16 md:w-24 md:h-24 bg-zinc-300 rounded-xl flex items-center justify-center mb-4'>
															<svg
																className='w-10 h-10 md:w-16 md:h-16 text-white'
																fill='currentColor'
																viewBox='0 0 24 24'>
																<path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' />
															</svg>
														</div>
														<p className='text-sm md:text-base font-medium'>
															Trading has not started yet!
														</p>
													</div>
												</TabsContent>
											)
										)}
									</Tabs>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>

			{/* Trading History */}
			<Card className='shadow-sm'>
				<CardHeader className='border-b bg-white'>
					<CardTitle className='flex items-center gap-2 text-base md:text-lg font-semibold'>
						<Globe className='w-4 h-4 md:w-5 md:h-5' />
						Trading History
					</CardTitle>
				</CardHeader>
				<CardContent className='p-4 md:p-6'>
					<div className='overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0'>
						<Table className='min-w-[800px]'>
							<TableHeader>
								<TableRow className='bg-zinc-50'>
									<TableHead className='font-semibold text-xs md:text-sm'>
										SN
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm whitespace-nowrap'>
										Open Time
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm whitespace-nowrap'>
										Open Price
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm whitespace-nowrap'>
										Close Time
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm whitespace-nowrap'>
										Close Price
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm'>
										Profit
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm'>
										Lots
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm'>
										Commission
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm'>
										Swap
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm flex items-center gap-1 whitespace-nowrap'>
										Net Profit <HelpCircle className='w-3 h-3 text-zinc-400' />
									</TableHead>
									<TableHead className='font-semibold text-xs md:text-sm'>
										Symbol
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell colSpan={11}>
										<div className='flex flex-col items-center justify-center h-32 md:h-40 text-zinc-400'>
											<div className='w-12 h-12 md:w-16 md:h-16 bg-zinc-200 rounded-full flex items-center justify-center mb-3'>
												<svg
													className='w-8 h-8 md:w-10 md:h-10 text-zinc-400'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
													/>
												</svg>
											</div>
											<p className='text-sm md:text-base'>No data</p>
										</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
