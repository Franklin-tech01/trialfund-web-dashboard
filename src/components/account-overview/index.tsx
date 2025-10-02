import AccountHeader from "./account-header";
import { StatsCards } from "./stats-card";
import { TradingObjectives } from "./trading-objective";
import { SideInfo } from "./side-info";

export default function AccountOverview() {
	return (
		<div className=''>
			<div className=''>
				<AccountHeader
					name='Franklin Mike'
					initialBalance='$50,000'
					planType='Free Trial I 50K'
					accountType='Swap'
					login='32222913'
					mt5Server='FundedNext-Server3'
					startDate='Sep 25, 2025'
					endDate='Oct 9, 2025'
				/>
			</div>
			<div className='grid gap-3.5 mt-3 grid-cols-1 lg:grid-cols-3'>
				<div className='lg:col-span-2 space-y-6'>
					<StatsCards />
					<TradingObjectives />
				</div>
				<div className='lg:col-span-1'>
					<SideInfo />
				</div>
			</div>
		</div>
	);
}
