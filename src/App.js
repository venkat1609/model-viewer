import './App.css';
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <div className="App">
      <div className="model-viewer">
        <ModelViewer modelPath="/models/home.glb" />
      </div>
    </div>
  );
}

export default App;
