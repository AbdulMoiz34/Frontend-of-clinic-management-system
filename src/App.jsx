import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    // <Signup />
  )
}

export default App;