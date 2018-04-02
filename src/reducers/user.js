const userDefaultState = {
    movies: '',
    search: ''
}

export default (state = userDefaultState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_SEARCH':
            return action.user
        default:
            return state;
    }
}