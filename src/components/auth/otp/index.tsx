"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import Link from "next/link";

export default function OtpVerificationPage() {
	const [otp, setOtp] = useState(["", "", "", "", "", ""]);
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const handleChange = (value: string, index: number) => {
		if (/[^0-9]/.test(value)) return; // only numbers
		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		if (value && index < otp.length - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === "Backspace" && !otp[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-[#131313] p-4'>
			<Card className='w-full max-w-md shadow-lg'>
				<CardHeader>
					<CardTitle className='text-center text-2xl font-bold'>
						Enter <span className='text-yellow-400'>OTP</span>
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
									onKeyDown={(e) => handleKeyDown(e, i)}
									ref={(el) => {
										inputRefs.current[i] = el;
									}}
									className='w-12 h-12 text-center text-xl'
								/>
							))}
						</div>
						<Link href='/account'>
							<Button className='w-full bg-yellow-400 hover:bg-yellow-600'>
								Verify OTP
							</Button>
						</Link>

						<p className='text-center text-sm text-gray-600'>
							Didn’t receive a code?{" "}
							<a href='#' className='text-yellow-400 hover:underline'>
								Resend OTP
							</a>
						</p>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
