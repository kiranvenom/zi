'use client';
import { useState } from 'react';

const page = () => {
	const [num, setnum] = useState(0);
	const addFun = () => {
		setnum(num + 1);
	};
	const minusFun = () => {
		setnum(num - 1);
	};

	return (
		<>
			<div className="container flex justify-center items-center w-full h-full">
				<div
					onClick={minusFun}
					className="button bg-slate-500 px-8 py-4 font-bold text-white text-4xl rounded-md cursor-pointer">
					Minus
				</div>
				<h1 className="text-4xl mx-8 font-bold">{num}</h1>
				<div
					onClick={addFun}
					className="button bg-slate-500 px-8 py-4 font-bold text-white text-4xl rounded-md cursor-pointer">
					Plus
				</div>
			</div>
		</>
	);
};

export default page;
