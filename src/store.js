import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "Kim",
      age: 21,
      likes : [200, 300, 400],
      likedState: [true, true, true],
    };
  },
  mutations: {
    changeLikeCount(state, payload){
        console.log('ChangeLikeCount');
        console.log(`payload: ${payload}`);
        if(state.likedState[payload]) {
            state.likes[payload] ++;
            state.likedState[payload] = false;
        } else {
            state.likes[payload] --;
            state.likedState[payload] = true;
        }
    },
    changeName(state) {
      state.name = "Park";
    },
    addAge(state, payload) {
      state.age += payload;
    },
  },
});

export default store;
