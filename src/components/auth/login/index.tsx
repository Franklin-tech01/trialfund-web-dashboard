"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='min-h-screen flex items-center justify-center bg-[#131313] p-4'>
			<Card className='w-full max-w-md shadow-lg'>
				<CardHeader>
					<Image
						src='/assets/images/logo.JPG'
						alt='TrialFund Logo'
						width={150}
						height={50}
						className='mx-auto mb-4'
					/>
				</CardHeader>
				<CardContent>
					<form className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='email'>
								Email <span className='text-red-500'>*</span>
							</Label>
							<Input id='email' type='email' placeholder='you@example.com' />
						</div>

						<div className='space-y-2'>
							<Label htmlFor='password'>
								Password <span className='text-red-500'>*</span>
							</Label>
							<div className='relative'>
								<Input
									id='password'
									type={showPassword ? "text" : "password"}
									placeholder='••••••••'
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

						<Button className='w-full bg-yellow-400 hover:bg-yellow-600'>
							Login
						</Button>

						<div className='text-center'>
							<Link
								href='/auth/forget-password'
								className='text-sm text-yellow-400 hover:underline'>
								Forgot Password?
							</Link>
						</div>

						<div className='flex items-center space-x-2'>
							<Separator className='flex-1' />
							<span className='text-xs text-gray-500'>or</span>
							<Separator className='flex-1' />
						</div>

						<div className='flex justify-center gap-4'>
							<Button variant='outline' size='icon'>
								<img src='/google.svg' alt='Google' className='w-5 h-5' />
							</Button>
							<Button variant='outline' size='icon'>
								<img src='/linkedin.svg' alt='LinkedIn' className='w-5 h-5' />
							</Button>
						</div>

						<p className='text-center text-sm'>
							Don’t have an account?{" "}
							<Link
								href='/auth/register'
								className='text-yellow-400 hover:underline'>
								Sign up
							</Link>
						</p>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
