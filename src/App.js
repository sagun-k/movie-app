import React,{useState,useEffect} from 'react'
import './App.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import AddtoFavourites from './components/AddtoFavourites'
import MovieListHeading from './components/MovieListHeading';
import RemoveFavourites from './components/RemoveFavourites'
function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([])
  const [searchvalue,setSearchvalue]=useState("")
  const getMoviesRequest= async ()=>{
      const url=  `http://www.omdbapi.com/?s=${searchvalue}&apikey=b49f8f7c`
      
      // 
      const response= await fetch(url);
      const responseJ= await response.json();
      if(responseJ.Search){
        setMovies(responseJ.Search)
    } 
      
      console.log(responseJ)
}
  useEffect(() => {
     getMoviesRequest(); 
     
  }, [searchvalue])
  useEffect(() => {
    const storedFavourites=JSON.parse(
      localStorage.getItem('react-movies-app-favourites')
    );
    setFavourites(storedFavourites);
  },[])
  const addToLocalStorage=(movies)=>{
    localStorage.setItem('react-movies-app-favourites',JSON.stringify(movies))

  }
  const addFavouriteMovie=(movie)=>{
    const newFavouriteList= [...favourites,movie];
    setFavourites(newFavouriteList);
    addToLocalStorage(newFavouriteList);

  }
  const removeFromFavourites =(movie)=>{
    const newFavouriteList= favourites.filter(
      (favourite)=> favourite.imdbID !== movie.imdbID 
      );
      setFavourites(newFavouriteList);
  }
  return (
      <>
      <Navbar searchvalue={searchvalue} setSearchvalue={setSearchvalue} />
    <div className="container-fluid movie-app">
    
        <div className="row " >
     
      <MovieList  movies={movies} handleFavouriteClick={addFavouriteMovie} FavouriteComponent={AddtoFavourites} />
      </div>
    <div>
      <MovieListHeading heading="Favourites" />
    </div>
      <div className="row " >
    
       
      <MovieList  movies={favourites} handleFavouriteClick={removeFromFavourites} FavouriteComponent={RemoveFavourites} />
  
      </div>
    </div>
    </>
  );
}

export default App;
