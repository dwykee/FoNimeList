import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"

const Page = async ({params: {id}}) => {

    const anime = await getAnimeResponse(`anime/${id}`)
    
    return (
        <>
        <div className="pt-4 px-4">
            <h3 className="text-2xl">{anime.data.title} - {anime.data.year}</h3>
        </div>
        <div className="pt-4 px-4 flex gap-2 overflow-x-auto">
            <div className="w-36 flex flex-col justify-center items-center rounded border border-stone-800 p-1">
                <h3>SCORE</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-stone-800 p-1">
                <h3>RANK</h3>
                <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-stone-800 p-1">
                <h3>MEMBERS</h3>
                <p>{anime.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-stone-800 p-1">
                <h3>EPISODES</h3>
                <p>{anime.data.episodes}</p>
            </div>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2">
            <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"
            />
            <p className="text-justify text-xl">{anime.data.synopsis}</p>
        </div>
        <div className="">
            <h3>CHARACTERS</h3>
            <p>{anime.data.characters}</p>
        </div>
        </>
    )
}

export default Page