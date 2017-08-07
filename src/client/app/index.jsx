import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

import Form from './components/form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    
  }

  sendStuff(name, msg){
    console.log('SENDSTUFF CALLED');
    console.log('SENDSTUFF name: ', name);
    console.log('SENDSTUFF msg: ', msg);

    // server gets empty obj
    // axios.post('/msgs', {
    //   name: name,
    //   msg: msg
    // })
    // .then((res) => {
    //   console.log('FROM POST: ');
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    // server gets values but does not console.log 
     $.ajax({
      type: "POST",
      url: "/msgs",
      data: {name, msg},
      success: function(data){
        console.log('POST SUCCESS!!!');
      },
      error: function(err){
        console.log('FUCK', err);
      }
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