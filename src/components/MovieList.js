import React from 'react'



const MovieList=(props)=> {
  const FavouriteComponent=props.FavouriteComponent
    return (
        <>
        
            {props.movies.map((movie,index) =>
          <div className="card d-flex justify-content-start m-3 " 
          style={{width: "13rem",
         
                  marginRight: "1rem",
                  marginBottom: "1 rem",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  background: "#000000e6",
                  border: "2px solid white"
}}>
          <img src={movie.Poster} alt="..."   />
          {/* <div className="card-body">
            <p className="card-text text-light">{movie.Title}</p>
          </div> */}
          <div onClick={()=>props.handleFavouriteClick(movie)} className="overlay d-flex align-items-center justify-content-center" >
            <FavouriteComponent/>
          </div>
        </div>
              )}
        </>
    )
}

export default MovieList
