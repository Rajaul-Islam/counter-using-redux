import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

const Counter = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={props.increment}>Increase</button>
      <button onClick={props.decrement}>decrease</button>

      <span>Count Property {props.count}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { count: state.count };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
