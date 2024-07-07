export default function ButtonNumorphism({ children }: { children: string }) {
	return (
		<button
			type="button"
			className="group relative flex items-center gap-2 rounded-full px-4 py-2 text-slate-500
            shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
            transition-all hover:text-slate-600
            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
            dark:text-slate-200 dark:hover:text-slate-300
            dark:shadow-none dark:hover:shadow-none
            dark:bg-[#18181b] dark:hover:bg-[#242429]
            dark:backdrop-filter dark:backdrop-blur-lg dark:border dark:border-gray-700
            dark:hover:border-gray-600
            before:absolute before:-inset-1 before:rounded-full before:filter before:blur-2xl
            dark:before:bg-white/30 dark:before:shadow-2xl dark:before:shadow-white/70 group-hover:before:shadow-white/80 group-hover:before:bg-white/40 "
		>
			{children}
		</button>
	);
}
