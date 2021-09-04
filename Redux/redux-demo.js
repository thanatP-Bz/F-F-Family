const redux = require("redux");

/* 2 create the reducer function. it need state and action, and returns a new state. Then put this reducer to the store because the store want to know who resposible to changing   */
const counterReducer = (state = 0, action) => {
  return {
    counter: state.counter + 1,
  };
};
/* 1 create store redux.createStore() */
const store = redux.createStore(counterReducer);

/* 3 create a new subscriber And then call the store with get state function. this function will triger whenever the state changing  */
const counterSubscriber = () => {
  const lastestState = store.getState();
  console.log(lastestState);
};

/* 4 reaching out the store with subscribe function then pass the counterSubscriber */
store.subscribe(counterSubscriber);
