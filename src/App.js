import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";

function App() {
  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <Navbar />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
