import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import About from "./components/aboutPage/about";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import Projects from "./components/projectsPage/projects";
import Documents from "./components/documentsPage/documents";
import Blog from "./components/blogPage/blog";
import PrivacyPolicy from "./components/policyPage/privacyPolicy";
import Project from "./components/projectPage/project";
import Order from "./components/orderPage/order";
import FinishOrder from "./components/orderPage/finishOrder";

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
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/order" element={<Order />} />
            <Route path="/finish_order" element={<FinishOrder />} />
        </Routes>
    </Router>
  );
}

export default App;
