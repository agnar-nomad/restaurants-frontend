import { Link } from 'waku';

export default function Header() {
    return (
        <header className="sticky left-0 top-0 p-4 w-full bg-background drop-shadow-md z-10">
            <div className="w-full grid gap-4 grid-flow-col items-center justify-between max-h-24">
                <Link to='/'>
                    <div className="flex items-center gap-4">
                        <img src="images/pot-of-food.svg" alt="Food logo" className="h-auto w-auto max-h-20" />
                        <h1 className="text-5xl sm:text-[5rem] p-2 font-bold bg-gradient-to-r from-profitakBlack from-1% via-profitakRed via-30% to-profitakOrange bg-clip-text text-transparent">
                            Obědy
                        </h1>
                    </div>
                </Link>
                <img src="images/profitak-logo.svg" alt="Profitak logo" width="300px" className="w-80 h-auto max-h-24 hidden sm:block" />
            </div>
        </header>
    );
};
