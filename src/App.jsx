import Navbar from "./components/Navbar";
import routes from "./Routes";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="daddy min-w-screen min-h-screen">
      <Navbar />
      <AnimatePresence>
        <div>{routes}</div>
      </AnimatePresence>
    </div>
  );
}

export default App;
