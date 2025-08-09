// App.jsx
import { Canvas } from "@react-three/fiber";
import { StarField } from "./StarFeild";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField count={5000} />
      </Canvas>
    </div>
  );
}

export default App;
