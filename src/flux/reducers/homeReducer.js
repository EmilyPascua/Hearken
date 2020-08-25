const 
	greeting = {
		morning: 'Good Morning, anything you want to tell me?',
		afternoon: 'Good Afternoon, anything you want to tell me?',
		evening: 'Good Evening, anything you want to tell me?',
		night: 'Beautiful Night, anything you want to tell me?',
	},
	initialState = {
		class: '',
		greeting: ''
	};

const homeReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'UPDATE_THEME':
			return {...state, class: action.class,greeting: greeting[action.greeting]};
		default: 
			return state;
	}
}
  
export default homeReducer;