// 1. redux import
const redux = require("redux");

// 3. reducer 함수 생성
const counterReducern = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1
    }
  }

  return state;
};

// 2. 저장소 생성
const store = redux.createStore(counterReducern);

// 5. 저장소 구독 코드 생성
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// 4. 액션, 컴포넌트 생성

// 6. action dispatch
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
