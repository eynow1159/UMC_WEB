import './App.css'

// 1. import를 해줍니다.
import {createBrowserRouter, RouterProvider} from "react-router-dom";

/*
(1) 유저가 이상한 경로에 접근했을 떄, 홈으로 이동시킬 수 있는 버튼을 제작. (UX)
(2) 각 페이지 별 다른 에러 처리
(3) ErrorBoundary 처리
*/
const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>홈 페이지입니다.</h1>,
        // 2. 없는 경로에 들어온 처리를 해줍니다.
        errorElement: <h1>너는 없는 경로에 들어왔다 ^ㅁ^ 야호~!</h1>
    },
    {
        path: '/movies',
        element: <h1>영화 페이지 입니다.</h1>
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
