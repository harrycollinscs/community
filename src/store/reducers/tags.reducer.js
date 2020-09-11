const initial = {
    tags: [],
    isLoading: true,
};

export default (state = initial, action) => {
    switch (action.type) {
        case 'get_tags_fulfilled':
            return {...state, tags: action.payload.data.data, isLoading: false };

        case 'get_tags_rejected':
            return {...state, isLoading: false };

        default:
            return state;
    }
}