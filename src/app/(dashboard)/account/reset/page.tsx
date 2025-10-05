import { CreditCard, FileText } from "lucide-react";

export default function ResetPage() {
	return (
		<div className='min-h-screen bg-gray-50 p-8'>
			{/* Header */}
			<div className='mb-8'>
				<div className='flex items-center gap-3 text-gray-900'>
					<CreditCard className='w-6 h-6' />
					<h1 className='text-xl font-semibold'>Reset</h1>
				</div>
			</div>

			{/* Main Card */}
			<div className='max-w-5xl mx-auto mb-8'>
				<div className='bg-white border-2 border-dashed border-gray-300 rounded-lg p-16'>
					<div className='flex flex-col items-center justify-center text-center max-w-2xl mx-auto'>
						{/* Illustration */}
						<div className='mb-8 relative'>
							<div className='w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center relative overflow-hidden'>
								{/* Background circles */}
								<div className='absolute top-8 left-1/2 -translate-x-1/2 flex gap-3'>
									<div className='w-2 h-2 bg-gray-400 rounded-full'></div>
									<div className='w-2 h-2 bg-gray-400 rounded-full'></div>
									<div className='w-2 h-2 bg-gray-400 rounded-full'></div>
								</div>
								<div className='absolute top-16 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-300 rounded'></div>
								<div className='absolute top-8 right-12 flex gap-3'>
									<div className='w-2 h-2 bg-gray-400 rounded-full'></div>
									<div className='w-2 h-2 bg-gray-400 rounded-full'></div>
									<div className='w-2 h-2 bg-gray-400 rounded-full'></div>
								</div>

								{/* Person silhouette */}
								<div className='absolute bottom-0'>
									<svg
										width='120'
										height='160'
										viewBox='0 0 120 160'
										fill='none'>
										{/* Head */}
										<circle cx='60' cy='25' r='18' fill='#374151' />
										{/* Body */}
										<path
											d='M60 43 L55 70 L50 100 L50 160 L55 160 L58 110 L62 110 L65 160 L70 160 L70 100 L65 70 Z'
											fill='#374151'
										/>
										{/* Arms */}
										<path
											d='M55 50 L45 65 L40 75 L42 77 L50 68 L55 75'
											fill='#374151'
										/>
										<path
											d='M65 50 L75 65 L78 72'
											fill='#374151'
											stroke='#374151'
											strokeWidth='3'
										/>

										{/* Settings icon */}
										<g transform='translate(70, 55)'>
											<circle cx='15' cy='15' r='20' fill='#7C3AED' />
											<circle cx='15' cy='15' r='6' fill='white' />
											<circle cx='15' cy='2' r='2' fill='white' />
											<circle cx='28' cy='15' r='2' fill='white' />
											<circle cx='15' cy='28' r='2' fill='white' />
											<circle cx='2' cy='15' r='2' fill='white' />
											<circle cx='23' cy='7' r='2' fill='white' />
											<circle cx='23' cy='23' r='2' fill='white' />
											<circle cx='7' cy='23' r='2' fill='white' />
											<circle cx='7' cy='7' r='2' fill='white' />
										</g>
									</svg>
								</div>
							</div>
						</div>

						{/* Text Content */}
						<h2 className='text-2xl font-bold text-gray-900 mb-3'>
							Sorry! This account is not eligible for Reset
						</h2>
						<p className='text-gray-600 mb-8'>
							You are requested to proceed further with your other eligible
							accounts.
						</p>

						{/* Button */}
						<button className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors'>
							Go to Account
						</button>
					</div>
				</div>
			</div>

			{/* Reset History Card */}
			<div className='max-w-5xl mx-auto'>
				<div className='bg-white border border-gray-200 rounded-lg shadow-sm'>
					{/* Card Header */}
					<div className='p-6 border-b border-gray-200'>
						<div className='flex items-center gap-3'>
							<FileText className='w-5 h-5 text-blue-600' />
							<h3 className='text-lg font-semibold text-gray-900'>
								Reset History
							</h3>
						</div>
					</div>

					{/* Table */}
					<div className='overflow-x-auto'>
						<table className='w-full'>
							<thead className='bg-gray-50'>
								<tr>
									<th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
										Requested At
									</th>
									<th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
										Request Type
									</th>
									<th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
										Charge
									</th>
									<th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
										Status
									</th>
									<th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
										Action Date
									</th>
									<th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>
										Notes
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td colSpan={6} className='px-6 py-16'>
										<div className='flex flex-col items-center justify-center text-gray-400'>
											<svg
												className='w-16 h-16 mb-3'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'>
												<rect
													x='3'
													y='3'
													width='18'
													height='18'
													rx='2'
													strokeWidth='2'
													strokeLinecap='round'
												/>
												<line x1='3' y1='9' x2='21' y2='9' strokeWidth='2' />
												<line x1='9' y1='21' x2='9' y2='9' strokeWidth='2' />
											</svg>
											<p className='text-sm'>No data</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
