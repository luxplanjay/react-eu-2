const initialState = {
  locale: 'uk',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'profile/changeLang':
      return {
        ...state,
        locale: action.payload,
      };

    default:
      return state;
  }
};

export const changeLang = lang => {
  return {
    type: 'profile/changeLang',
    payload: lang,
  };
};
