// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/checkout"
          element={
            <>
              {" "}
              <div>Rest Check out page</div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
