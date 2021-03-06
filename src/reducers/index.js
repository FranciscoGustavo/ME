const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };
            break;
        default:
            return state;
    }
};

export default reducer;