import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-[#2f2f2f] lg:pb-0 pb-2">
            <div className="flex md:flex-row flex-col justify-between lg:items-center lg:p-4 p-2 gap-2">
                <Link href="/" className="font-bold text-white text-2xl lg:text-3xl">FosilAnimeList</Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default Navbar