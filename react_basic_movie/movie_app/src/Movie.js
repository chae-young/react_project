import React,{Component} from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
    
    //부모요소에게서 받는 prop을 체크
    static propTypes ={
        title:propTypes.string.isRequired,
        image:propTypes.string.isRequired,
    }

    render(){
        return(
            <>
            <MoviePoster image={this.props.image}/>
            <h1>{this.props.title}</h1>
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

//state필요없고 리턴만 할경우..only..props받고..
function MoviePoster({image}){
    return(
        <img src={image} alt=""/>
    )   
}

MoviePoster.prototype={
    image:propTypes.string
}

export default Movie;