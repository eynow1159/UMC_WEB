import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

// 만든 페이지들을 import
import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";

// import LoginPage from "./pages/loginPage.jsx";
// import SignUpPage from "./pages/signupPage.jsx";

// import SearchPage from "./pages/searchPage.jsx";
// import MovieCategoryPage from "./pages/movieCategoryPage.jsx";

import SearchPage from "./pages/search.jsx";

import MovieCategoryPage from "./pages/movies.jsx";
import MoviesPage from "./pages/movies.jsx";
import RootLayout from "./layout/root-layout.jsx";

// 연결
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        // Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
        children: [
            {
                // index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                index: true,
                element: <HomePage/>
            },
            {
              path: 'search',
              element: <SearchPage/>
            },
            {
                // 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
                path: 'movies',
                element: <MovieCategoryPage/>
            },
            {
              // /:을 활용해서, 동적으로 바뀌는 부분의 이름을 정의해줍시다.
              path: 'movies/:movieId',
              element: <MoviesPage/>
            }
        ]
    },

])

function App() {
    return <RouterProvider router={router}/>
}

export default App
