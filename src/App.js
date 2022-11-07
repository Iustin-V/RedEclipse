import "./App.css";
import { Home } from "./components/Home";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  StyledWrapper } from "./components/Styles";
import {WorkInProgress} from "./components/WorkInProgress";

function App() {

    document.body.style.overflow="hidden";
  return (
    <StyledWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<WorkInProgress />} />
          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="/home" element={<Home />} />*/}
          {/*<Route path="/contact" element={<Home />} />*/}
        </Routes>
      </BrowserRouter>
    </StyledWrapper>
  );
}

export default App;
