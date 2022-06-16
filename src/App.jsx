import './App.css';
import Video from './components/Video/Video';

function App() {
  return (
    // BEM
    <div className="app">
      <h1>My videos</h1>
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
