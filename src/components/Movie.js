import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite, toggleFavorites } from '../actions/favoritesActions';


const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer.movies,
        favorite: state.favoritesReducer.displayFavorites
    }
}

const Movie = (props) => {
    const handleClick =()=>{
       props.deleteMovie(movie.id);
       push('/movies');
    }

    const handleFavClick =()=>{
        props.addFavorite(movie)
    }

    const { id } = useParams();
    const { push } = useHistory();
    const movies = props.movies;
    const movie = movies.find(movie=>movie.id===Number(id));

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            { props.favorite && <span onClick={handleFavClick} className="m-2 btn btn-dark">Favorite</span>}
                            <span onClick ={handleClick}  className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default connect(mapStateToProps, {deleteMovie, addFavorite})(Movie);