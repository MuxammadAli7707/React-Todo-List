import React from 'react';
import '../Todo.css'

function Adding(props) {
  const inputText = (e) => {
    props.setText(e.target.value)
  }

  const submitText = (e) => {
    e.preventDefault();

    const changes = {
      text : props.text,
      isTrue : false
    }
    props.setArr(changing => [...changing,  changes]);
    e.target.reset()
  }

  return (
    <form className="form d-flex align-items-center justify-content-between mb-3" onSubmit={submitText}>
      <input
        className="form__input"
        type="text"
        name="text"
        id="text"
        placeholder="Your Todo list"
        required
        onChange={inputText}
      />
      <button type="submit" className="form__plus" typeof="submit">
        <i className="bx bx-plus"></i>
      </button>
    </form>
  )
}

export default Adding
