import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import About from "./components/about";
import Header from "./components/header";
import MainPage from "./components/mainPage";
import Projects from "./components/projects";
import Documents from "./components/documents";
import Blog from "./components/blog";
import PrivacyPolicy from "./components/privacyPolicy";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        </Routes>
    </Router>
  );
}

export default App;
