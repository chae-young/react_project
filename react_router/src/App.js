import {BrowserRouter,HashRouter,Route,Routes, Link} from "react-router-dom"
import Post from "./post"
import AllRoute from "./AllRoute";

const App = ()=> {
  return (
    <BrowserRouter>
      {/* <Link to="/post">내 포스트</Link> */}

      <Link to="/event/post">내 포스트</Link>
      <Routes>
        
        {/* 라우팅 */}
        {/* <Route path="/post" element={<Post />} /> */}
        
        {/* 동적라우팅 */}
        <Route path="/event/:name" element={<AllRoute/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
