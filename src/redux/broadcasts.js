const initialState = {
    loading: true,
    broadcasts: [],
    opened: null
};

export default function broadcasts(state = initialState, action) {
    switch (action.type) {
        case "load_broadcasts_start":
            return {
                ...state,
                loading: true,
            };

        case "load_broadcasts_success":
            return {
                ...state,
                loading: false,
                broadcasts: action.payload,
            };

        default:
            return state;
    }
}
