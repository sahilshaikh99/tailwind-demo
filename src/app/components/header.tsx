export const Header = () => {
    return (
        <>
        <nav className="mx-auto container">
            <div className="">
                <div className="flex justify-between py-5">
                    <span className="font-bold text-2xl">MyLogo</span>
                    <ul className="flex gap-6 font-bold py-2">
                            <li>About</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                    </ul>
                    <div className="flex inline-flex gap-4 mt-0">

                        <button className="border-slate-400 border-1 rounded-3xl px-5 py-2">
                            Try for free
                        </button>
                        <button className="bg-emerald-500 text-white font-bold rounded-3xl px-5 py-2">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}