import React, { useState, useReducer, useCallback, createRef } from 'react';

import { SpinnerChoice } from '../types';
import Spinner from '../components/Spinner';

enum ACTIONS {
  ADD_CHOICE,
}

const reducer = (state: SpinnerChoice[], action: { type: ACTIONS; name: string }) => {
  switch (action.type) {
    case ACTIONS.ADD_CHOICE:
      return [
        ...state,
        { name: action.name, color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`, ref: createRef() },
      ];
    default:
      return state;
  }
};

const SpinnerPage = () => {
  const [input, setInput] = useState('');
  const [choices, dispatch] = useReducer(reducer, []);

  const handleChange = useCallback(
    e => {
      setInput(e.target.value);
    },
    [setInput],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setInput('');
      dispatch({ type: ACTIONS.ADD_CHOICE, name: e.target.name.value });
    },
    [dispatch, setInput],
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Add an option:</label>
        <input name="name" type="text" required value={input} onChange={handleChange} />
        <input type="submit" value="Add" />
      </form>
      {choices.length > 1 && <Spinner choices={choices} />}
    </>
  );
};

export default SpinnerPage;
