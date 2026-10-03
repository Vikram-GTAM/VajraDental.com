import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "./components/Home";

const AboutUs = lazy(() => import("./components/AboutUs"));
const GeneralDentistry = lazy(() => import("./components/GeneralDentistry"));
const PediatricDentistry = lazy(() => import("./components/PediatricDentistry"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/pediatric-dentistry" element={<PediatricDentistry />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
