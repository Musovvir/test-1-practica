const initialState = {
  loading: false,
  records: [],
};

export default function records(state = initialState, action) {
  switch (action.type) {
    case "load_records_start":
      return {
        ...state,
        loading: true,
      };

    case "load_records_success":
      return {
        ...state,
        loading: false,
        records: action.payload,
      };

    default:
      return state;
  }
}
