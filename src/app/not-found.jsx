"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center flex-col gap-1">
                    <div className="flex items-center">
                        <FileSearch size={25} className="text-stone-800"/>
                        <h1 className="text-stone-800 text-2xl font-bold">YAH GA NEMU, KAMU TERLALU SEPUH</h1>                        
                    </div>
                <Link href="/" className="text-blue-400 hover:text-pink-300 transition-all underline">BALIK AJA</Link>
            </div>
        </div>
    )
}

export default Page