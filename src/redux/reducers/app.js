const initialState = {
};

export const ACTION_TYPE = {
  HTTP_REQUEST: 'HTTP_REQUEST',
};

export default function movie(state = initialState, action) {
  if(action.type === ACTION_TYPE.HTTP_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }
  return state;
}
