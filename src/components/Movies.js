import React from 'react';

function Movies(props) {
    return (
        <>
            <div className="container">
                <MoviesForm ongenreCreate={(data) => props.toAddNewMovie(data)} />

                <section className="moviesContainer">
                    {props.list.map(movie => <DisplayMovies movie={movie} key={movie.id} />)}
                </section>

            </div>
        </>
    )
}


function DisplayMovies(props) {
    return (
        <>
            <div className="movie">
                <p>
                    Movie: {props.movie.name} <br />
                    Genre: {props.movie.genre} <br />
                    Rate: {props.movie.Rate} <br />
                    Director: {props.movie.Director} <br />
                    Writers: {props.movie.Writers} <br />
                    Stars: {props.movie.Stars} <br />
                </p>
            </div>
        </>
    )

}

class MoviesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: '',
            newDirector: '',
            newWriters: '',
            newStars: '',
            newgenre: '',
            newRate: ''

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let name = event.target.genreName.value
        let Director = event.target.Director.value
        let Writers = event.target.Writers.value
        let Stars = event.target.Stars.value
        let genre = event.target.genre.value
        let Rate = event.target.Rate.value

        this.setState((state, props) => ({
            newName: name,
            newDirector: Director,
            newWriters: Writers,
            newStars: Stars,
            newgenre: genre,
            newRate: Rate
        }), () => {
            console.log(this.state);
            this.props.ongenreCreate(this.state);
        });


    }

    render() {
        return (
            <>
                <div className="formContainer">
                    <h3>Place a new movie</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label >Your Name:</label><br />
                        <input type="text" required name="genreName" placeholder="Name" /><br />

                        <label>genre</label><br />
                        <select name="genre">
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Comedy">Comedy</option>
                            <option value="No">No genre</option>
                        </select><br />

                        <label>Director:</label><br />
                        <select name="Director">
                            <option value="Quentin Tarantino ">Quentin Tarantino </option>
                            <option value="Edgar Wright">Edgar Wright</option>
                            <option value="Joon-ho Bong ">Joon-ho Bong </option>
                        </select><br />

                        <label>Writers</label><br />
                        <select name="Writers">
                            <option value=" Billy Wilder">  Billy Wilder </option>
                            <option value="Joel Coen"> Joel Coen </option>
                            <option value="Ethan Coen"> Ethan Coen </option>
                            <option value="none"> None </option>
                        </select> <br />

                        <label>Stars</label><br />
                        <select name="Stars">
                            <option value=" James Stewart">  James Stewart </option>
                            <option value="Cary Grant"> Cary Grant </option>
                            <option value="Gary Cooper"> Gary Cooper</option>
                            <option value="none"> None </option>
                        </select> <br />

                        <label>genre</label><br />
                        <select name="genre">
                            <option value="Action">  Action</option>
                            <option value="Adventure"> Adventure</option>
                            <option value="Drama"> Drama</option>
                            <option value="none"> None </option>
                        </select> <br />

                        <label>Rate</label><br />
                        <select name="Rate">
                            <option value="10">  10</option>
                            <option value="9.5"> 9.5</option>
                            <option value="9"> 9</option>
                            <option value="8.5"> 8.5</option>
                            <option value="8"> 8</option>
                            <option value="7.5"> 7.5</option>
                            <option value="7"> 7</option>
                            <option value="6.5"> 6.5</option>
                            <option value="6"> 6</option>
                            <option value="none"> None </option>
                        </select> <br />



                        <button className='button' type="submit">movie </button>
                    </form>
                </div>
            </>
        )
    }
}
export default Movies;