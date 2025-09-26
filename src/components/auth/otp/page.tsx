"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function OtpVerificationPage() {
	const [otp, setOtp] = useState(["", "", "", "", "", ""]);

	const handleChange = (value: string, index: number) => {
		if (value.length > 1) return;
		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-300 to-yellow-100 p-4'>
			<Card className='w-full max-w-md shadow-lg'>
				<CardHeader>
					<CardTitle className='text-center text-2xl font-bold'>
						Enter <span className='text-yellow-500'>OTP</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form className='space-y-6'>
						<div className='flex justify-center gap-2'>
							{otp.map((digit, i) => (
								<Input
									key={i}
									type='text'
									inputMode='numeric'
									maxLength={1}
									value={digit}
									onChange={(e) => handleChange(e.target.value, i)}
									className='w-12 h-12 text-center text-xl'
								/>
							))}
						</div>

						<Button className='w-full bg-yellow-500 hover:bg-yellow-600'>
							Verify
						</Button>

						<p className='text-center text-sm text-gray-600'>
							Didn’t receive a code?{" "}
							<a href='#' className='text-yellow-600 hover:underline'>
								Resend OTP
							</a>
						</p>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
