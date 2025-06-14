import MainDown from "./Component/MainDown";
import MainUp from "./Component/MainUp";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <MainUp />
      <MainDown />
    </div>
  );
};

export default App;
