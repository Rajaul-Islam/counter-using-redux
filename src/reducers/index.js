import { combineReducers } from "redux";

const count = (counter = 0, action) => {
  if (action.type === "INCREMENT") {
    console.log(counter);
    return counter + 1;
  } else if (action.type === "DECREMENT") {
    console.log(counter);
    return counter - 1;
  } else return counter;
};

export default combineReducers({
  count,
});
