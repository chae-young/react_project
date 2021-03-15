const React = require('react');
const { PureComponent } = React;


class List extends PureComponent{


    render(){
        return(
            <li>{this.props.ListVal}<button onClick={()=>this.props.BtnDel(this.props.index)}>삭제</button></li>
        )
    }
}

module.exports = List;