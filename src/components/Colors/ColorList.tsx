import { Color } from './Color';

import { useColors } from '../../hook/useColors';

export const ColorList = () => {
  const { colorsState: { colors } } = useColors();
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>

  return (
    <div style={{ width: '250px' }}>
      {
        colors.map((color: IColor) => <Color key={color.id} {...color}/>)
      }
    </div>
  )
}
