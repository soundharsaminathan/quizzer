import "./App.scss"
import Quiz from "./Pages/Quiz"
import Quizzer from "./Pages/Quizzer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quizzer/>}/>
          <Route path="/quiz" element = {<Quiz/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;