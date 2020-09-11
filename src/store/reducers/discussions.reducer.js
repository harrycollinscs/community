const initial = {
    discussions: [],
    links: [],
    firstLoadComplete: false,
    isLoading: true, 
};

export default (state = initial, action) => {
    switch (action.type) {
        case 'get_discussions':
            return {...state, isLoading: true};

        case 'get_discussions_fulfilled':
            return {...state, discussions: [...state.discussions, ...action.payload.data.data], links: action.payload.links, firstLoadComplete: true, isLoading: false };

        case 'get_discussions_rejected':
            return {...state, isLoading: false };

        case 'refresh_discussions':
            return initial;

        default:
            return state;
    }
}