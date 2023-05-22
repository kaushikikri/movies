import { useSearchParams } from "react-router-dom";
import { Moviecard } from "../components"
import { useFetch,useTitle } from "../hooks"

export default function Searchpage({api}) {
    const [params] = useSearchParams();
    const q = params.get("q");
    // console.log(q);
    const url = `https://api.themoviedb.org/3/${api}?api_key=40259ed3429271d7edde0045c98da4f7&query=${q}`
    const {data:movie} = useFetch(url);

     useTitle(`Searched - ${q}`);
    // console.log(movie)

    return (
        <main>
            <div className="mt-7 text-4xl tracking-tight text-gray-900 dark:text-white">{movie.length!==0 ? `Result for "${q}"` : "No movie found"}</div>
            <div className="my-12 flex flex-wrap gap-5 md:justify-evenly justify-center p-4" >
                {movie.map((movie) => {
                    const id = movie.id;
                    const img = movie.poster_path;
                    const title = movie.original_title;
                    const desc = movie.overview;
                   return <Moviecard key ={id} id={id} img={img} title={title} desc={desc}/>
                })}
            </div>
        </main>
    )
}
