import React from 'react';
import '../Todo.css'

function List(props) {
  const deleteItem = () => {
    let items = props.arr.filter((_, index) => {
      return index !== props.id;
    });
    
    props.setArr(items);
  }

  return (
    <li className='list__item'>
        {props.info.text}
      <button className='list__del' id={props.id} onClick={deleteItem}>
        {props.arr[props.id].isTrue ? <i className='bx bx-check'></i> : <i className='bx bx-trash'></i>}
      </button>
    </li>
  )
}

export default List
