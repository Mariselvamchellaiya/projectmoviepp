import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import TrendMoviesTable from "./components/TrendingMovies/Trendingmovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieBoxHome from "./components/MovieBox/MovieBoxHome";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<TrendMoviesTable />}></Route>
            <Route path="/search" element={<MovieBoxHome />}></Route>
          </Routes>
        </Router>

        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </div>
  );
}

export default App;

// import React from "react";
// import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import MoviesTable from "./components/TrendingMovies/MovieTable/MoviesTable ";
// const queryClient = new QueryClient();
// function App() {
//   return (
//     <div>
//       <QueryClientProvider client={queryClient}>
//         <MoviesTable />
//         <ReactQueryDevtools initialIsOpen />
//       </QueryClientProvider>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import Moviebox from "./components/MovieBox/Moviebox";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import {
//   Button,
//   Container,
//   Form,
//   FormControl,
//   Nav,
//   Navbar,
// } from "react-bootstrap";

// const API_URL =
//   "https://api.themoviedb.org/3/trending/movie/week?api_key=07da2eaeeb1b1cb5154bcf3f5259bc8d";
// const API_SEARCH =
//   "https://api.themoviedb.org/3/search/movie?api_key=07da2eaeeb1b1cb5154bcf3f5259bc8d&query";
// function App() {
//   const [movies, setMovies] = useState([]);
//   const [query, setquery] = useState("");

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log("Data", data);
//         setMovies(data.results);
//       });
//   }, []);

//   const searchmovie = async (e) => {
//     e.preventDefault();
//     console.log("searching");
//     try {
//       const url = `https://api.themoviedb.org/3/search/movie?api_key=07da2eaeeb1b1cb5154bcf3f5259bc8d&query=${query}`;
//       const res = await fetch(url);
//       const data = await res.json();
//       setMovies(data.results);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handlesearch = (e) => {
//     setquery(e.target.value);
//   };

//   console.log("results", movies);
//   return (
//     <>
//       <Navbar bg="dark" expand="lg" variant="dark">
//         <Container fluid>
//           <Navbar.Brand href="/home">BotFlix App</Navbar.Brand>
//           <Navbar.Brand href="/home">Trending</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-3"
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             ></Nav>
//             <Form className="d-flex" onSubmit={searchmovie}>
//               <FormControl
//                 type="search"
//                 placeholder="Movie search"
//                 className="me-2"
//                 aria-label="search"
//                 name="query"
//                 value={query}
//                 onChange={handlesearch}
//               ></FormControl>
//               <Button variant="secondary" type="submit">
//                 Search
//               </Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <div>
//         {movies.length > 0 ? (
//           <div className="container">
//             <div className="grid">
//               {movies.map((moviesdata) => (
//                 <Moviebox key={moviesdata._id} {...moviesdata} />
//               ))}
//             </div>
//           </div>
//         ) : (
//           <h2>Sorry !! No Movies Found</h2>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
