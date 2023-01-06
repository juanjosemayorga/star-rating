import { createContext, useReducer } from 'react'
import ColorData from '../data/color-data.json';
import { colorsReducer } from './colorsReducer';
import { v4 } from 'uuid';

export const colorsInitialState: ColorsState = {
  colors: ColorData,
}

export const ColorsContext = createContext({} as ColorsContextProps);
ColorsContext.displayName = 'ColorsContext';

export const ColorsProvider = ({ children }: any) => {
  const [colorsState, dispatch] = useReducer(colorsReducer, colorsInitialState);

  const addColor = (title: string, color: string) => {
    dispatch({
      type: 'ADD_COLOR',
      payload: {
        id: v4(),
        title,
        color,
        rating: 0
      }
    });
  }

  const removeColor = (id: string) => {
    dispatch({
      type: 'REMOVE_COLOR',
      payload: { id }
    });
  }

  const rateColor = (id: string, rating: number) => {
    dispatch({
      type: 'RATE_COLOR',
      payload: { id, rating }
    });
  }

  return (
    <ColorsContext.Provider value={{
      colorsState,
      addColor,
      removeColor,
      rateColor
    }}>
      {children}
    </ColorsContext.Provider>
  )
}
