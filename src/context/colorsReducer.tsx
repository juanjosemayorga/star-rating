type ColorAction =
  | { type: 'ADD_COLOR', payload: IColor }
  | { type: 'REMOVE_COLOR', payload: { id: string } }
  | { type: 'RATE_COLOR', payload: { id: string, rating: number } }

export const colorsReducer = (state: ColorsState, action: ColorAction) => {

  switch (action.type) {
    case 'ADD_COLOR':
      return {
        ...state,
        colors: [...state.colors, action.payload]
      }
    case 'REMOVE_COLOR':
      return {
        ...state,
        colors: state.colors.filter((color: IColor) => color.id !== action.payload.id)
      }
    case 'RATE_COLOR':
      return {
        ...state,
        colors: state.colors.map((color: IColor) => (
          color.id === action.payload.id ? { ...color, rating: action.payload.rating } : color
        ))
      }

    default:
      return state;
  }

};
