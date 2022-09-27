import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, SET_VARIABLE } from "../../redux/actionTypes";
import { decrementFunction, incrementFunction } from "./action";
const ReduxScreen = () => {
  const { value } = useSelector((state) => state.homeReducer);

  const dispatch = useDispatch();
  const incrementHandler = () => {
    // dispatch(incrementFunction(2));
    dispatch({
      type: INCREMENT,
      payload: value + 1,
    });
  };

  const decrementHandler = () => {
    // dispatch(decrementFunction(2));
    dispatch({
      type: DECREMENT,
      payload: value - 1,
    });
  };
  return (
    <>
      <input value={value} />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </>
  );
};

export default ReduxScreen;
