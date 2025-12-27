import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import { Navbar } from "./components/navbar";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Outlet />
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
