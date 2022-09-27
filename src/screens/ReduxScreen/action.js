import { DECREMENT, INCREMENT } from "../../redux/actionTypes";

export const incrementFunction = (value) => {
  return (dispatch) => {
    // axios.get().then(res => {
    //   if (res.status === 200) {
    //     dispatch({
    //       type: 'set_weather',
    //       payloaf: res.data
    //     })
    //   }
    // })
    dispatch({
      type: INCREMENT,
      payload: value,
    });
  };
};

export const decrementFunction = (value) => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT,
      payload: value,
    });
  };
};
