import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Paths from "./paths";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {Paths.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
