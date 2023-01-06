import React from 'react';

import { useInput } from '../../hook/useInput';
import { useColors } from '../../hook/useColors';

export const AddColor = () => {
  const { addColor } = useColors();

  const [titleProps, resetTitle] = useInput('')
  const [colorProps, resetColor] = useInput('#000000')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = titleProps.value;
    const color = colorProps.value;

    addColor(title, color);
    resetTitle();
    resetColor();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        {...titleProps}
        type="text"
        placeholder='color title...'
        required />
      <input
        {...colorProps}
        type="color"
        required />
      <button>ADD</button>
    </form>
  )
}
