const Header = () => {
	return (
		<header className="flex justify-center items-center gap-2 py-6 border-b-2 border-neutral-700 bg-neutral-900">
			<a href="/">
				<img src="./logo.svg" alt="GifExpert" className="h-8" />
			</a>
			<h1 className="text-3xl uppercase font-extrabold tracking-widest">
				Giferch
			</h1>
		</header>
	);
};

export default Header;
