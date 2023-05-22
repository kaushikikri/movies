import { Routes, Route } from 'react-router-dom';

import { Moviedetail, Movielist, Searchpage, Pagenotfound } from "../pages";

export default function Allroutes() {

    return (
        <Routes>
            <Route path="" element={<Movielist api="movie/now_playing" path="movieApp - Home"/>} />

            <Route path="movie/:id" element={<Moviedetail />} />

            <Route path="movies/popular" element={<Movielist api="movie/popular" path="movieApp - Popular"/>}/>
            <Route path="movies/popular/movie/:id" element={<Moviedetail />} />

            <Route path="movies/top" element={<Movielist api="movie/top_rated" path="movieApp - Top"/>} />
            <Route path="movies/top/movie/:id" element={<Moviedetail />} />

            <Route path="movies/upcoming" element={<Movielist api="movie/upcoming" path="movieApp - Upcoming"/>} />
            <Route path="movies/upcoming/movie/:id" element={<Moviedetail />} />

            <Route path="search" element={<Searchpage api="search/movie"/>} />
            <Route path="search/movie/:id" element={<Moviedetail />} />
            
            <Route path="*" element={<Pagenotfound path="movieApp - Page not found"/>} />
        </Routes>
    )
}