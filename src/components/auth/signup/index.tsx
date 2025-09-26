"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-300 to-yellow-100 p-4'>
			<Card className='w-full max-w-3xl shadow-lg'>
				<CardHeader>
					<CardTitle className='text-center text-2xl font-bold'>
						TRIAL<span className='text-yellow-500'>FUND</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form className='space-y-6'>
						{/* Grid for inputs */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<Label>
									First Name <span className='text-red-500'>*</span>
								</Label>
								<Input placeholder='as per Government ID' />
							</div>
							<div>
								<Label>
									Last Name <span className='text-red-500'>*</span>
								</Label>
								<Input placeholder='as per Government ID' />
							</div>
							<div>
								<Label>
									Gender <span className='text-red-500'>*</span>
								</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder='Select Gender' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='male'>Male</SelectItem>
										<SelectItem value='female'>Female</SelectItem>
										<SelectItem value='other'>Other</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Label>
									Date of Birth <span className='text-red-500'>*</span>
								</Label>
								<Input type='date' placeholder='mm/dd/yyyy' />
							</div>
							<div>
								<Label>
									Country <span className='text-red-500'>*</span>
								</Label>
								<Input placeholder='as per Government ID' />
							</div>
							<div>
								<Label>
									City <span className='text-red-500'>*</span>
								</Label>
								<Input placeholder='Please enter city' />
							</div>
							<div>
								<Label>
									Email <span className='text-red-500'>*</span>
								</Label>
								<Input type='email' placeholder='example@gmail.com' />
							</div>
							<div>
								<Label>
									Phone <span className='text-red-500'>*</span>
								</Label>
								<Input type='tel' placeholder='Please enter phone' />
							</div>
							<div>
								<Label>
									Password <span className='text-red-500'>*</span>
								</Label>
								<div className='relative'>
									<Input
										type={showPassword ? "text" : "password"}
										placeholder='Password'
										className='pr-10'
									/>
									<button
										type='button'
										onClick={() => setShowPassword(!showPassword)}
										className='absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700'>
										{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
									</button>
								</div>
							</div>
							<div>
								<Label>
									Confirm Password <span className='text-red-500'>*</span>
								</Label>
								<div className='relative'>
									<Input
										type={showConfirmPassword ? "text" : "password"}
										placeholder='Re-type password'
										className='pr-10'
									/>
									<button
										type='button'
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
										className='absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700'>
										{showConfirmPassword ? (
											<EyeOff size={18} />
										) : (
											<Eye size={18} />
										)}
									</button>
								</div>
							</div>
						</div>

						{/* Checkboxes */}
						<div className='space-y-2'>
							<div className='flex items-start space-x-2'>
								<Checkbox id='policy' />
								<Label htmlFor='policy' className='text-sm'>
									I agree to the processing of personal data according to{" "}
									<a href='#' className='text-yellow-600 hover:underline'>
										Privacy Policy
									</a>
								</Label>
							</div>
							<div className='flex items-start space-x-2'>
								<Checkbox id='name' />
								<Label htmlFor='name' className='text-sm'>
									I acknowledge my name is correct and corresponds to the
									government-issued identification
								</Label>
							</div>
							<div className='flex items-start space-x-2'>
								<Checkbox id='marketing' />
								<Label htmlFor='marketing' className='text-sm'>
									I agree to receive news, updates, promotions, surveys, and
									other communications from FundedNext via phone.
								</Label>
							</div>
						</div>

						{/* Info box */}
						<div className='rounded-md border border-yellow-200 bg-yellow-50 p-3 text-sm text-gray-600'>
							<strong>ℹ️ Note:</strong> Once registered, your name and country
							cannot be modified. Please double-check this information before
							proceeding.
						</div>

						{/* Submit button */}
						<Link href='/auth/otp'>
							<Button className='w-full bg-yellow-500 hover:bg-yellow-600'>
								Register
							</Button>
						</Link>

						<p className='text-center mt-3   text-sm'>
							Already have an account?{" "}
							<Link
								href='/auth/login'
								className='text-yellow-600 hover:underline'>
								Login
							</Link>
						</p>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
