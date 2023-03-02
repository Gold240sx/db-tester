import { useState } from 'react';
import { useDatabase } from '../../../hooks/useDatabase';
import { useForm } from '../../../hooks/useForm';
import SignInFormVanilla from './signInFormVanilla.jsx';
import SignInFormRHF from './signInFormRHF.tsx';
import SignUpFormVanilla from './signInFormVanilla.jsx';
import SignUpFormRHF from './signInFormRHF.tsx';
import BeachBG from '../../../assets/images/beach.jpeg';
import SignInFormDUI from './signInFormDUI';

export default function SignIn(AuthFunct) {
	const { form, authFunction } = useForm();
	const { database } = useDatabase();

	return (
		<div className="relative mt-5 w-full rounded-lg bg-white p-5 dark:bg-white/10">
			<div className=" text-white">
				{database &&
					form === 'vanilla' &&
					authFunction === 'SignIn' && <SignInFormVanilla />}
				{database &&
					form === 'reactHookForm' &&
					authFunction === 'SignIn' && <SignInFormRHF />}
				{database &&
					form === 'daisyUI' &&
					authFunction === 'SignIn' && <SignInFormDUI />}
			</div>
		</div>
	);
}
