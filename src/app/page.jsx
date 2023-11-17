import Header from "./components/AnimeList/Header"
import AnimeList from "./components/AnimeList"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
    <>
      {/*anime terpopuler*/}
        <section>
          <Header title="Most Popular" linkTitle="Cuma nonton wanpis ya?" linkHref="/populer"/>
          <AnimeList api={topAnime}/>
        </section>
    </>
  )
}

export default Page