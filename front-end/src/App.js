import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import InfoPage from "./pages/InfoPage"
import QuizPage from "./pages/QuizPage"
import SimPage from "./pages/SimPage"
import ReflectionPage from "./pages/ReflectionPage"
import Dashboard from "./pages/Dashboard"
import CoursePage from "./pages/CoursePage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/info" element={ <InfoPage/> } />
        <Route path="/course" element={ <CoursePage/> } />
        <Route path="/quizzes" element={ <QuizPage/> } />
        <Route path="/simulator" element={ <SimPage/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
        <Route path="/reflection" element={ <ReflectionPage/> } />
      </Routes>
    </div>
  );
}

export default App;
