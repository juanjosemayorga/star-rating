interface IColor {
  id: string;
  title: string;
  color: string;
  rating: number;
}

interface ColorsContextProps {
  colorsState: ColorsState;
  addColor: (title: string, color: string) => void;
  removeColor: (id: string) => void;
  rateColor: (id: string, rating: number) => void;
}

interface ColorsState {
  colors: IColor[];
}
