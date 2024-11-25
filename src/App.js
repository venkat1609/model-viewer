import './App.css';
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <div className="App">
      <div className="model-viewer">
        <ModelViewer modelPath="/nissan_skyline_r35_gtr_nismo.glb" />
      </div>
    </div>
  );
}

export default App;
