// import { name } from "./module";
// import "./style.css";
// import isEmail from 'validator/lib/isEmail';
// import isURL from 'validator/lib/isURL';
// import toDate from 'validator/lib/toDate';
import * as $ from 'jquery';
import { createStore } from 'redux'


// console.log("Your name: " + name);



// console.log(isEmail('foo@bar.com'));
// console.log(isURL('https://www.youtube.com/'));
// console.log(toDate("02.02.2023"));

// var moment = require("moment");

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// console.log(moment().format("MMM Do YY"));

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}
let store = createStore(counterReducer)
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}