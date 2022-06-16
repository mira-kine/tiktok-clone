import './App.css';
import Video from './components/Video/Video';

function App() {
  return (
    // BEM - Block, Elements, Modifiers
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
