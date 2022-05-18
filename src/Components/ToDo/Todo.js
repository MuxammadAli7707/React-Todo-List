import React from "react";
import Adding from "./Adding/Adding";
import List from "./List/List";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="container">
      <div className="box">
        <div className="box__inner mb-3">
          <h2 className="box__title text-center">Todo List</h2>
        </div>
        <Adding
           setText={props.setText} 
           text={props.text}
           arr={props.arr}
           setArr={props.setArr}
        />
        {/* <div className="form">
          <input
            className="form__input"
            type="search"
            id="search"
            placeholder="Search"
          />
        </div> */}
        <ul className="box__list list list-unstyled">
        {props.arr.map((item, index) => {
          return <List
            key={index + 1}
            id={index} 
            info={item} 
            arr={props.arr}
            setArr={props.setArr}
          />
        })}
      </ul>
        <div className="box__footer footer d-flex align-items-center justify-content-between">
          <button className="footer__btn">All</button>
          <button className="footer__btn">Complete </button>
          <button className="footer__btn">Incomplete</button>
          {/* <button id="clear" className="footer__clear text-capitalize">
            Clear all
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Todo;
