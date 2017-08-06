import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import Form from './components/form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    
  }

  sendStuff(name, msg){
    axios.post('/msgs', {
      name: name,
      msg: msg
    })
    .then((res) => {
      console.log('FROM POST: ', res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return(
      <div>
        <Form submit={this.sendStuff}/>
      </div>
    ) 
  }
}
render(<App/>, document.getElementById('app'));