import React from 'react';

/*function Form(props) {
  return (
    <div>
      <input placeholder="name"/>
      <input placeholder="message"/>
      <button onClick={props.submit}>Submit</button>
      <button>Show Messages</button>
    </div>
  );
}*/
class Form  extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      msg: ''
    };
  }

  onChangeName (e) {
    this.setState({
      name: e.target.value 
    });
  }

   onChangeMsg (e) {
    this.setState({
      msg: e.target.value 
    });
  }

  render(){
    return (
    <div>
      <input onChange={this.onChangeName.bind(this)} placeholder="name"/>
      <input onChange={this.onChangeMsg.bind(this)}  placeholder="message"/>
      <button onClick={()=>{
        this.props.submit(this.state.name, this.state.msg)
        }}>Submit</button>
      <button onClick={this.props.grab}>Show Messages</button>
    </div>
    )

  }
}

export default Form;