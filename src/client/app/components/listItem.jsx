import React from 'react';

function ListItem(props) {
  return (
    <div>
      <span>{props.item.name}<span>: </span> {props.item.msg}</span>
    </div>
  );
}

export default ListItem;