const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }
    const handleLastPage = () => {
        setPage(lastPage)
    }
    const handleFirstPage = () => {
        setPage(1)
    }
    return (
        <div className="flex justify-center items-center py-3 px-2 gap-4 text-stone-800 text-lg">
                <div className="flex justify-center items-center py-3 px-2 gap-4 text-sky-300">
                    <button onClick={handleFirstPage} className="transition-all underline hover:text-pink-300">Go to prev</button>
                </div>
            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="transition-all hover:text-pink-300">Prev puh sepuh</button>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-pink-300">Next puh sepuh</button>
            }
                <div className="flex justify-center items-center py-3 px-2 gap-4 text-sky-300">                
                    <button onClick={handleLastPage} className="transition-all underline hover:text-pink-300">Go to last</button>
                </div>
        </div>
    )
}

export default Pagination