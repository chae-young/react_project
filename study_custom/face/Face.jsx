
import React,{Component} from 'react';
import bgImg from './images/face.jpg'

const x = 180;
const y = 245;

const FaceObj = ['Oval','Circl','Oblong','Heart','Square','Triangle'];

class Face extends Component{

    state={
        boxCoordX:0,
        boxCoordY:0,
        result:'',
        count:0,
    }

    interval;
    componentDidMount(){
        console.log(this.state.count) 
        this.interval = setInterval(this.interactiveCheck,1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    interactiveCheck = () =>{     
        const {boxCoordX,boxCoordY,count} = this.state;

        if(boxCoordX === 0){
            this.setState( (prevState)=>({
                boxCoordX:x,
                count:prevState.count+1
            }))  
          //  console.log(this.state.count)             
        }else if(boxCoordX === x){
            this.setState( (prevState)=>({
                boxCoordX:x*2,
                count:prevState.count+1
            }))  
           // console.log(this.state.count)   
        }else if(boxCoordX === x*2){
            this.setState( (prevState)=>({
                boxCoordX:0,
                count:prevState.count+1
            })) 
                  
            if(count === 2){
                this.setState({
                    boxCoordY:y
                })                    
            } 
            if(count === 5){
                this.setState({
                    boxCoordX:0,
                    boxCoordY:0,
                    count:0
                })                    
            }  
            //console.log(this.state.count)                        
        }        
    }

    onClickStop = () =>{
        clearInterval(this.interval)
        this.setState({
            status:true,
            result:FaceObj[this.state.count]
        })
    }

    onClickReplay = () =>{
        this.interval = setInterval(this.interactiveCheck,1000)
        
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
                </div>
                <button onClick={this.onClickStop}>STOP</button>
                {this.state.status && <button onClick={this.onClickReplay}>REPLAY</button>}
                <div>{this.state.result}</div>
            </>
        )
    }
}

export default Face;

