const React = require('react');
const {PureComponent,createRef} = React;
const List = require('./List')
/*단어 입력시 리스트 나오고 중복단어일경우 중복단어라고 text로 알려주기*/

class WordList extends PureComponent{
    state={
        value:'',
        list:[],
        result:''
    }
    enterHandler = (e) =>{
        if(e.key === 'Enter'){
            if(!this.state.list.includes(this.state.value)){

                this.setState((prevState)=>{
                    return{
                        list:[...prevState.list,this.state.value],
                        value:'',
                        result:''
                    }
                })
                this.input.current.focus();
            }else{
                this.setState({
                    result:`${this.state.value} 는 이미 있는 단어입니다`,
                    value:'',                    
                })
                this.input.current.focus();
            }
        }
    }
    BtnDel = (removeIndex) =>{
       
        this.setState((state)=>({
            ...state,list:this.state.list.filter((item, index) => index!==removeIndex)
        }))        
    }    
    inputOn = ( {target} ) =>{
        this.setState({
            value:target.value
        })
    }
    input = createRef();


    render(){
        const {value,list,result} = this.state;

        return(
            <>
                <h1>아무단어를 입력하시오.</h1>
                <input type="text" value={value} onChange={this.inputOn} ref={this.input} onKeyPress={this.enterHandler}/>
                <ul>
                    {
                        list.map((v,i)=>{
                            return(
                                <List key={i} ListVal={v} index={i} BtnDel={this.BtnDel}/>
                            )
                        })
                    }
                </ul>
                <div>{result}</div>
            </>            
        )
    }
}


module.exports = WordList;
