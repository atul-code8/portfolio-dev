import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import { Navbar } from "./components/navbar";
import { AnimatePresence, motion } from "motion/react";

export function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.key}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="grid place-items-center p-16">
      <div className="text-2xl font-semibold">404 - Page Not Found</div>
      <div className="p-2 w-60 h-64 border overflow-hidden mt-16">
        <div className="bg-linear-to-r from-primary to-secondary w-full h-full"></div>
      </div>
    </div>
  );
};

export default App;
