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
  }
  render(){
    return (
    <div>
      <input placeholder="name"/>
      <input placeholder="message"/>
      <button onClick={this.props.submit}>Submit</button>
      <button>Show Messages</button>
    </div>
    )

  }
}

export default Form;