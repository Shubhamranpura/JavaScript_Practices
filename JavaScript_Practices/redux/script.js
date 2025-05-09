// const { createStore } = Redux;

// const initialState = {
//   item: 0,
//   catagory: "beauty",
//   price:1000
// };

// const INCREMENT = 'type/increment';
// const CHANGENAME = 'type/changename';
// const APPLYDIS = 'type/applydis'

// const reducer = function (state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, state: state.item + 1 };
//     case CHANGENAME:
//       return { ...state, state :state.catagory = "footware"
//        };
//     case APPLYDIS:
//       return {...state,state:state.price*action.payload/100}
//     default:
//       return state;
//   }
// };


// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
// console.log(store)
// store.subscribe(()=>{
//   console.log(store.getState())
// })

// store.dispatch({type:'INCREMENT'})
// console.log(store.getState())
// store.dispatch({type:'APPLYDIS',payload :10})

// console.log(store.getState())
// console.log(store.getState())

const {createStore} = Redux

const initialState = {
  item: 0,
  catagory: "beauty",
  price: 1000,
};

const INCREMENT = 'type/increment';
const CHANGENAME = 'type/changename';
const APPLYDIS = 'type/applydis';

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, item: state.item + 1 }; 
    case CHANGENAME:
      return { ...state, catagory:state.catagory = action.payload }; 
      // we are redeclare the property of the catagory and with the  spread operater we keep same state in store
    case APPLYDIS:
      return { ...state, price: state.price * (action.payload / 100) }; 
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.() 
);

console.log("Initial State:", store.getState());
// store.subscribe(() => {
//   console.log("Updated State:", store.getState());
// });

store.dispatch({ type: INCREMENT }); 
store.dispatch({ type: INCREMENT }); 
store.dispatch({ type: INCREMENT }); 
console.log("Initial State:", store.getState());
store.dispatch({ type: CHANGENAME,payload:"footware" }); 
console.log("Initial State:", store.getState());
store.dispatch({ type: APPLYDIS, payload: 10 }); 
