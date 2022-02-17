const INITIAL_STATE = {
    token: '',
    username: '',
    password: ''
}

const FormReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN':
            localStorage.setItem('token', 'asdasdad')
            return {
                token: 'asdad',
                username: action.payload.username,
                password: action.payload.password
            }
        default:
        return state;
    }
}

export default FormReducer;