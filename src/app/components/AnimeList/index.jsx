import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`}
                    className="border border-solid rounded-sm shadow-lg cursor-pointer text-color-black hover:text-pink-300 transition-all"
                    key={index}
                    > 
                        <Image
                            src={anime.images.webp.image_url}
                            alt="..."
                            width={350}
                            height={350}
                            className="w-full max-h-64 object-cover"
                        />
                        <h1 className="cursor-pointer font-bold md:text-lg text-md py-3 text-center leading-none hover:text-pink-300">{anime.title}</h1>
                    </Link>
                    )
                })}
            
            </div>
        )
    }

    export default AnimeList