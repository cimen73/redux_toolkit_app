import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increase,
  decrease,
  setCount,
} from '../app/counterSlice';
import { Stack, Button } from 'react-bootstrap';

const CounterPage = () => {
  const state = useSelector(
    (store) => store.counterReducer
  );
  const dispatch = useDispatch();

  return (
    <div class="position-absolute top-50 start-50 translate-middle">
      <h1>{state.counter}</h1>
      <Stack direction="horizontal" gap={2}>
        <Button
          variant="success"
          onClick={() => dispatch(increase())}
        >
       Increase
        </Button>
       
        <Button
          variant="secondary"
          onClick={() => dispatch(setCount(0))}
        >
       Reset
        </Button>
        <Button
          variant="danger"
          onClick={() => dispatch(decrease())}
        >
       Decrease
        </Button>
      </Stack>
    </div>
  );
};

{
  type: 'counterSlice/setCount';
  payload: 0;
}

export default CounterPage;