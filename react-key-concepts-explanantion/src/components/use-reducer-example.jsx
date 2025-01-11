import { useReducer } from "react";

// here we have created a intial state
const initalState = {
  showTextFlag: false,
  changeTextStyleFlag: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

// here we have created a function reducer which take state and perfrom
// action and return a updated sttate
function reducer(state, action) {
  // each action have its type and based on this type we will execute the cases and return the state
  switch (action.type) {
    case "HIDE_TEXT":
      // console.log(state,action)
      return {
        //  ... the three dots means this. operator
        ...state,
        showTextFlag: false,
      };
    case "SHOW_TEXT":
      return {
        ...state,
        showTextFlag: true,
      };
    case "CHANGE_TEXT_STYLE":
      return {
        ...state,
        changeTextStyleFlag: !state.changeTextStyleFlag,
      };

    default:
      break;
  }
}

function UseReducerExample() {
  // the dispatch contain the action
  const [state, dispatch] = useReducer(reducer, initalState);
  /*so here the intialstate contain the intial value of state and passed into the
reducer function then the reducer function apply the actions and return the
updated state */
  console.log(state);

  return (
    <div className="">
      {state?.showTextFlag ? (
        <h1
          style={{
            backgroundColor: state?.changeTextStyleFlag ?"black": "red",
            color: state?.changeTextStyleFlag ?"white": "white",
            
          }}
        >
          use reducer hook exmaple
        </h1>
      ) : null}
      <button
        className="border-2"
        onClick={() => dispatch({ type: HIDE_TEXT })}
      >
        hide text
      </button>
      <button
        className="border-2"
        onClick={() => dispatch({ type: SHOW_TEXT })}
      >
        show text
      </button>
      <button
        className="border-2"
        onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}
      >
        change text style
      </button>
    </div>
  );
}
export default UseReducerExample;
