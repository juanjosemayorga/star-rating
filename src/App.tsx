import './App.css';

import { AddColor } from './components/Colors/AddColor';
import { ColorList } from './components/Colors/ColorList';
import { ColorsProvider } from './context/ColorContext';

function App() {
  return (
    <ColorState>
      <div
        className="App"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '16px'
        }}>
        <AddColor />
        <ColorList />
      </div>
    </ColorState>
  );
}

const ColorState = ({ children }: any) => {
  return (
    <ColorsProvider>
      {children}
    </ColorsProvider>
  )
}

export default App;
