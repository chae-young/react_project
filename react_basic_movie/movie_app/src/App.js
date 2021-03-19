import React,{Component} from 'react';
import './App.css';
import Movie from './Movie';



/*라이프사이클
Render:componentWillMount > render > componentDidmount
Update:componentWillReceiveProps > shouldComponentUpdate (이전 props가 다르면? 리액트는 true반환) >
componentWillUpdate > render > componentDidUpdate 
*/

//state가 바뀌면 render 실행

class App extends Component {
  
  state={

  }

  componentDidMount(){
    this._getMovies()


    /*setTimeout(()=>{
      this.setState({
        /*
        movies:[
          ...this.state.movies,//기존꺼 그대로 두고 한개만 추가
          {
            title:'abouttime',
            image:'https://cdn.joongboo.com/news/photo/201902/1325883_2033592_4853.jpg'
          }            
        ]
        */    
        /*    
        movies: [
          {
            title:'lalaland',
            image:'https://t1.daumcdn.net/movie/0e371de6f342a66143c49af3dd2b204342bbb5aa'
          },
          {
            title:'harryporter',
            image:'https://images.christiandaily.co.kr/data/images/full/68175/image.jpg?w=600'
          },
          {
            title:'abouttime',
            image:'https://cdn.joongboo.com/news/photo/201902/1325883_2033592_4853.jpg'
          }    
        ]          
      })
    },5000)*/
  }

  _renderMovie = () => {
    console.log(1)
    const movies = this.state.movies.map((movie,index)=>{
      return <Movie title={movie.title} image={movie.large_cover_image} key={movie.id}/>
    })
    return movies
  }

  //asynnchronous 는 순서와 상관없이 진행
  //await 은 끝나기를 기다린다-> callApi이 작업이 완료되고 리턴하기를!
 _getMovies =  async () =>{
    const movies = await this._callApi();
    //setState는 callApi 작업이 완료되기 전까지 실행x
    this.setState({
      movies
    })
  }

  _callApi = () =>{
    //promise 
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=raiting')
    .then(response=>
      // console.log(response)
      response.json()//json 으로 변환
      )//패치가 완료되면 작업수행 , 요소 한개가 들어옴
    .then(json=>json.data.movies)//요게 리턴값으로..!
    .catch(err=>console.log('err!'))//오류나면 캐치해서 오류알려줘
  }

  render(){
    return (
    <div className="App">

      {this.state.movies ? this._renderMovie() : 'loading'}

    </div>
    )
  }
}

export default App;
