import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { BasePage } from "./pages/BasePage";
import { Config } from "./pages/Config";
import { Draw } from "./pages/Draw";

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<BasePage />}>
              <Route index element={<Config/>}/>
              <Route path="draw" element={<Draw/>}/>
            </Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
