import { Moviecard } from "../components"
import { useFetch,useTitle } from "../hooks"

export default function Movielist({api,path}) {
    const url = `https://api.themoviedb.org/3/${api}/?api_key=40259ed3429271d7edde0045c98da4f7`
    const {data:movie} = useFetch(url);
    // console.log(movie)

   useTitle(path)

    return (
        <main>
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
