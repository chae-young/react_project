
import React,{Component} from 'react';
import bgImg from './images/face.jpg'

const x = 180;
const y = 245;
let count = 0;

class Face extends Component{

    state={
        boxCoordX:0,
        boxCoordY:0,
        result:''
    }

    interval;
    componentDidMount(){
        setInterval(()=>{
            if(this.state.boxCoordX === 0){
                count++
                this.setState({
                    boxCoordX:x,
                })               
            }else if(this.state.boxCoordX === x){
                count++
                this.setState({
                    boxCoordX:x*2
                }) 
            }else if(this.state.boxCoordX === x*2){
                count++
                this.setState({
                    boxCoordX:0
                })
                if(count === 3){
                    this.setState({
                        boxCoordY:y
                    })                    
                }
                if(count === 6){
                    this.setState({
                        boxCoordX:0,                        
                        boxCoordY:0
                    }) 
                    count=0;                  
                }                
            }
        },1000)
    }

    render(){
        const style = {
            position:'relative',
            width:550,
            height:500,
            background:`url(${bgImg}) center no-repeat`
        }

        return(
            <>
                <h1>얼굴형 선택하기</h1>
                <div className="box-wrap" style={style}>
                    <div className='box' style={ {left:this.state.boxCoordX,top:this.state.boxCoordY } }></div>
                    {this.state.result}
                </div>
            </>
        )
    }
}

export default Face;

