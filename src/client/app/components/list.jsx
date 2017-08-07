import React from 'react';

import ListItem from './listItem.jsx';

function List(props) {
  return (
    <div>
      {props.list.map((item, i)=>{
        return <ListItem key={i} item={item}/>
      })}
    </div>
    
  );
}

export default List;