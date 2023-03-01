import React, { useState, useEffect } from 'react';
// import { FirebaseContext, reactFireContext, SupabaseContext } from "./context";
// import FirebaseSignupForm from "./FirebaseSignupForm";
// import reactFireSignupForm from "./reactFireSignupForm";
// import SupabaseSignupForm from "./SupabaseSignupForm";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Si1Password } from 'react-icons/si';

import { useDatabase } from '../../../hooks/useDatabase';
import { useForm } from '../../../hooks/useForm';

const SignUpFormVanilla = () => {
	const { database } = useDatabase();
	const { form, authFunction, validation } = useForm();
	const [loading, setLoading] = useState();
	const [passwordPreview, setPasswordPreview] = useState('false');
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [functionSelected, setFunctionSelected] = useState();

	useEffect(() => {
		setLoading(false);
	}, []);

	const handleSignUp = () => {
		console.log('Sign Up with Google');
	};

	const handlePasswordPreview = () => {
		setPasswordPreview(passwordPreview === 'true' ? 'false' : 'true');
		const passwordInput = document.querySelector('#password');
		passwordPreview === 'true'
			? (passwordInput.type = 'password')
			: (passwordInput.type = 'text');
	};

	return (
		<div className=" text-gray-600 dark:text-white ">
			<h1 className="mb-4 text-center text-3xl font-semibold">
				Create an account!
			</h1>
			<form className="relative flex flex-col gap-3">
				<section>
					<h2 className=" ml-2 text-gray-400">
						Select a login provider:
					</h2>
					<div
						id="alt-login-options"
						className=" mt-4 mb-4 grid grid-cols-2 gap-2"
					>
						<button
							type="button"
							className="mr-2 mb-2 inline-flex items-center whitespace-nowrap rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
							onClick={handleSignUp}
						>
							<svg
								className="mr-2 -ml-1 h-4 w-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="google"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 488 512"
							>
								<path
									fill="currentColor"
									d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
								></path>
							</svg>
							Sign in with Google
						</button>
						<button
							type="button"
							className="mr-2 mb-2 inline-flex items-center whitespace-nowrap rounded-lg bg-[#24292F] px-5  py-2.5  text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500"
							onClick={handleSignUp}
						>
							<svg
								className="mr-2 -ml-1 h-4 w-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="github"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 496 512"
							>
								<path
									fill="currentColor"
									d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
								></path>
							</svg>
							Sign in with Github
						</button>
						<button
							type="button"
							className="dark:focus:ring-[#3b5998]/55 mr-2 mb-2 inline-flex items-center whitespace-nowrap rounded-lg bg-[#3b5998] px-5  py-2.5  text-center text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50"
							onClick={handleSignUp}
						>
							<svg
								className="mr-2 -ml-1 h-4 w-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="facebook-f"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
							>
								<path
									fill="currentColor"
									d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
								></path>
							</svg>
							Sign in with Facebook
						</button>
						<button
							type="button"
							className="mr-2 mb-2 inline-flex items-center rounded-lg bg-[#050708] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/90 focus:outline-none focus:ring-4 focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-[#050708]/50"
						>
							<svg
								className="mr-2 -ml-1 h-5 w-5"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="apple"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
							>
								<path
									fill="currentColor"
									d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
								></path>
							</svg>
							Sign in with Apple
						</button>
					</div>
				</section>
				<hr />
				<section>
					<h2 className=" relative ml-5 text-gray-400">
						...Or create a username and password:
					</h2>
					<div className="floating-label-container m-4 flex h-fit flex-col bg-orange-400">
						<div className=" absolute mr-auto flex h-fit w-fit cursor-pointer">
							{' '}
							<MdEmail
								alt=""
								className="icon icon-left mr-auto ml-2 h-8 w-8 translate-y-[20px] fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
							/>
						</div>
						<label
							htmlFor="email"
							className="floating-label z-50 mb-2 text-xl text-gray-400 dark:text-white/50"
						>
							Email
							{/* place the validation icon below: here > */}
							{email && ' ' + email}
						</label>
						<input
							type="email"
							name="email"
							id="email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
							placeholder=" "
							onFocus={() => {
								this.previousSibling.classList.add('focus');
								this.previousSibling.classList.add('focus');
							}}
							onBlur={() => {
								this.previousSibling.classList.remove('focus');
								this.previousSibling.classList.remove('focus');
							}}
							className="rounded border border-gray-300 bg-black/10 font-normal autofill:ring-transparent  focus:border-transparent  focus:ring-4 dark:border-none dark:bg-black/25 dark:text-white"
						/>
					</div>{' '}
					<div className="floating-label-container m-4 -mt-14 flex w-auto -translate-y-8 flex-col">
						<div className="flex w-auto flex-col">
							<Si1Password
								alt=""
								className="icon icon-left-dual pointer-events-none z-50 mr-auto ml-2 h-8 w-8 translate-y-[83px] fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
							/>
							<div
								onClick={() => handlePasswordPreview()}
								className="ml-auto flex w-fit cursor-pointer"
							>
								{passwordPreview === 'false' && (
									<BsFillEyeFill
										alt=""
										className="icon z-50 ml-auto mr-2 h-8 w-8 translate-y-[52px] fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
									/>
								)}
								{passwordPreview === 'true' && (
									<BsFillEyeSlashFill
										alt=""
										className="icon z-50 ml-auto mr-2 h-8 w-8 translate-y-[52px] fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
									/>
								)}
							</div>
						</div>
						<label
							htmlFor="password"
							className="floating-label z-50 mb-2 text-xl text-gray-400 dark:text-white/50"
						>
							Password
							{/* place the validation icon below: here > */}
							{password && ' ' + password}
						</label>
						{/*     const password = document.querySelector("input#password")    */}
						<input
							type="password"
							name="password"
							id="password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							value={password}
							placeholder=" "
							onFocus={() => {
								this.previousSibling.classList.add('focus');
								this.previousSibling.classList.add('focus');
							}}
							onBlur={() => {
								this.previousSibling.classList.remove('focus');
								this.previousSibling.classList.remove('focus');
							}}
							spellcheck="false"
							autocomplete="off"
							className=" rounded border border-gray-300 bg-black/10 font-normal focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-500 dark:border-transparent dark:bg-black/25  dark:text-white"
						/>
					</div>
					{/* Create validation information here */}
					{/* Password Preview: {passwordPreview} */}
					<div className="relative -mt-6 flex flex-col pb-6">
						<button
							type="button"
							className={` ${
								loading ? 'hidden' : 'block'
							} mx-auto w-1/2 rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 `}
							onClick={handleSignUp}
						>
							Create Account
						</button>
						<button
							disabled
							type="button"
							className={` ${
								loading ? 'inline-flex' : 'hidden'
							} mx-auto h-[48px] w-1/2 items-center justify-center rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
						>
							<svg
								aria-hidden="true"
								role="status"
								className="mr-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="#1C64F2"
								/>
							</svg>
							Loading...
						</button>
					</div>
					<a
						href="#"
						className="ml-2 mt-4 text-blue-400 hover:text-blue-600 hover:underline dark:text-blue-400"
					>
						Already have an account?
					</a>
				</section>
			</form>
		</div>
	);
};

export default SignUpFormVanilla;
