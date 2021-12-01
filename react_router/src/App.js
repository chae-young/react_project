import {BrowserRouter,HashRouter,Route,Routes, Link} from "react-router-dom"
import Post from "./post"

function App() {
  return (
    <BrowserRouter>
      <Link to="/post">내 포스트</Link>
      <Routes>
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
