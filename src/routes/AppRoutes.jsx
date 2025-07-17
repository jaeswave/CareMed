import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Paths from "./paths";
import Layout from "../layout";
import NotFound from "../screens/NotFound"; 

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {Paths.map(({ path, element }, index) => (
          <Route key={index} path={path} element={<Layout>{element}</Layout>} />
        ))}

        {/* Catch-all 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
