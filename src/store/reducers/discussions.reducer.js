const initial = {
    discussions: [],
    firstLoadComplete: false,
    isLoading: true, 
};

export default (state = initial, action) => {
    switch (action.type) {
        case 'get_discussions':
            return {...state, isLoading: true};

        case 'get_discussions_fulfilled':
            return {...state, discussions: action.payload.data, firstLoadComplete: true, isLoading: false };

        case 'get_discussions_rejected':
            return {...state, isLoading: false };

        default:
            return state;
    }
}