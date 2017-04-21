let initialState = {
  savedPosts: [],
  draft: ''
};

export default function AppReducer(currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'UPDATE_DRAFT':
      var newState = {
        draft: action.rawText
      };
      return Object.assign({}, currentState, newState);
  }

  return currentState;
}
