// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
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
           <CheckoutPage/>
          }
        />
      </Routes>
    </>
  );
}

export default App;
