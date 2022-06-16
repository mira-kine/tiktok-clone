import './App.css';
import Video from './components/Video/Video';

function App() {
  return (
    // BEM
    <div className="app">
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
