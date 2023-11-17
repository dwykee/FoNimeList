"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searhRef = useRef()
    const router = useRouter()
    const handleKeyPress = (event) => {
        const keyword = searhRef.current.value
        if(!keyword) return
        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }
    
    return (
        <div className="relative">
            <input
                placeholder="Cari anime puh.."
                className="w-full lg:w-72 p-2 rounded-md"
                ref={searhRef}
                onKeyDown={handleKeyPress}
            />
            <button className="absolute top-2 end-2" onClick={handleKeyPress}>
                <MagnifyingGlass size={24}/>
            </button>
        </div>
    )
}

export default InputSearch