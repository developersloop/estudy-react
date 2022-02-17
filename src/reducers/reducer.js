const INITIAL_STATE = {
  user: {
		name: '',
		lastname: ''
	}
};

const myFirstReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
    case 'INCREMENT':
      return {
        user: { ...action.payload }
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default myFirstReducer;