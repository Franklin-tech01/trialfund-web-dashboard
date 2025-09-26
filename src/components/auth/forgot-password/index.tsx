"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-[#131313] p-4'>
			<Card className='w-full max-w-md shadow-lg'>
				<CardHeader>
					<CardTitle className='text-center text-2xl font-bold'>
						Forgot <span className='text-yellow-500'>Password</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='email'>Email</Label>
							<Input id='email' type='email' placeholder='you@example.com' />
						</div>

						<Button className='w-full bg-yellow-400 hover:bg-yellow-500'>
							Send Reset Link
						</Button>

						<p className='text-center text-sm'>
							Remembered your password?{" "}
							<a href='/auth/login' className='text-yellow-400 hover:underline'>
								Back to Login
							</a>
						</p>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
