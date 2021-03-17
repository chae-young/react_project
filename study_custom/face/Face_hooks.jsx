
import React,{useState,useEffect, useRef} from 'react';
import bgImg from './images/face.jpg'

const x = 180;
const y = 245;

const FaceObj = ['Oval','Circl','Oblong','Heart','Square','Triangle'];

const Face = () =>{

    const [boxCoordX,setBoxCoordX] = useState(0);
    const [boxCoordY,setBoxCoordY] = useState(0);
    const [result,setResult] = useState('');
    const [count,setCount] = useState(0);
    const [status,setStatus] = useState();
    const interval = useRef();

    useEffect(()=>{
        interval.current = setInterval(interactiveCheck,1000)
        return ()=>{
            clearInterval(interval.current)
        }
    },[count])

    const interactiveCheck = () =>{     
        if(boxCoordX === 0){
            setBoxCoordX(x);
            setCount((prevState)=>prevState+1) 
            console.log(count)             
        }else if(boxCoordX === x){
            setBoxCoordX(x*2);
            setCount((prevState)=>prevState+1)  
            //console.log(count)   
        }else if(boxCoordX === x*2){
            setBoxCoordX(0);
            setCount((prevState)=>prevState+1) 
                  
            if(count === 2){
                setBoxCoordY(y);                   
            } 
            if(count === 5){
                setBoxCoordX(x);                
                setBoxCoordY(y);                
                setCount(0);                
            }  
           //console.log(count)                        
        }        
    }

    const onClickStop = () =>{
        clearInterval(interval.current)
        setStatus(true);
        setResult(FaceObj[count]);
    }

    const onClickReplay = () =>{
        interval.current = setInterval(interactiveCheck,1000)
    }

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
                <div className='box' style={ {left:boxCoordX,top:boxCoordY } }></div>
            </div>
            <button onClick={onClickStop}>STOP</button>
            {status && <button onClick={onClickReplay}>REPLAY</button>}
            <div>{result}</div>
        </>
    )        
}


export default Face;

