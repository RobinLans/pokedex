import Navbar from "./components/Navbar";
import routes from "./Routes";

function App() {
  return (
    <div className="min-w-screen min-h-screen font-['Press_Start_2P'] bg-[#9DB2D8]">
      <Navbar />
      <div>{routes}</div>
    </div>
  );
}

export default App;
