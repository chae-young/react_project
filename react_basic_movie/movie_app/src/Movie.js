import React,{Component} from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

class Movie extends Component{
    
    //부모요소에게서 받는 prop을 체크
    static propTypes ={
        title:propTypes.string.isRequired,
        image:propTypes.string.isRequired,
        genres:propTypes.array.isRequired,
        synopsis:propTypes.string.isRequired,
    }
    render(){
        console.log(this.props)
        return(
            <>
            <div className="movie__Columns">
                <MoviePoster image={this.props.image} alt={this.props.title}/>
            </div>
            <div className="movie__Columns">           
                <h1>{this.props.title}</h1>
                <div className="movie__Genres">
                    {this.props.genres.map((genre,index)=><MovieGenre genres={genre}/>)}
                </div>
                <div className="movie__Synopsis">
                    <LinesEllipsis 
                    text={this.props.synopsis} 
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'                    
                    />
                    
                </div>
            </div>
            </>
        )
    }
}

/*
class MoviePoster extends Component{
    static propTypes ={
        image:propTypes.string.isRequired,
    }

    render(){
        return(
            <img src={this.props.image} alt=""/>
        )
    }
}
*/
function MovieGenre({genre}){
    return(
        <span className="movie__Genre">{genre}</span>
    )
}

//state필요없고 리턴만 할경우..only..props받고..
function MoviePoster({image,alt}){
    return(
        <img src={image} alt={alt} title={alt}/>
    )   
}

MovieGenre.propTypes={
    genres:propTypes.string.isRequired
}
MoviePoster.propTypes={
    image:propTypes.string
}

export default Movie;