const initialState = {
  records: [],
};

export default function records(state = initialState, action) {
  switch (action.type) {
    case "load_records_start":
      return {
        ...state,
        records: action.payload,
      };

    case "load_records_success":
      return {
        ...state,
      };

    default:
      return state;
  }
}
