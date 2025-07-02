'use client'

interface ButtonProps {
  text: string;
}

export default function Button({text}: ButtonProps) {
	return <button className="p-2 rounded-xl bg-orange-500 w-fit min-w-20">{text}</button>;
}
