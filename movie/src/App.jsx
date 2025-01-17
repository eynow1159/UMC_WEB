import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

// 만든 페이지들을 import
import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";

import LogInPage from "./pages/logIn.jsx";
import SignUpPage from "./pages/signUp.jsx";
import SearchPage from "./pages/search.jsx";

import MovieCategoryPage from "./pages/movieCategory.jsx";
import MoviesPage from "./pages/movies.jsx";
import MovieDetail from "./pages/movieDetail.jsx";

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
                element: <MoviesPage/>
            },
            {
              path: 'logIn',
              element: <LogInPage/>
            },
            {
              path: 'signUp',
              element: <SignUpPage/>
            },
            {
              path: 'search',
              element: <SearchPage/>
            },
            {
              path: 'category',
              children: [
                {
                  index: true,
                  element: <MovieCategoryPage/>
                },
                {
                  path: ':movieCategoryId',
                  children: [
                    {
                      index: true,
                      element: <MoviesPage/>
                    }
                  ]
                }
              ]
            },
            {
              // 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
              path: 'movies',
              children: [
                {
                  index: true,
                  element: <MoviesPage/>
                },
                {
                  // /:을 활용해서, 동적으로 바뀌는 부분의 이름을 정의해줍시다.
                  path: ':movieCategoryId',
                  children: [
                    {
                      path: ':movieId',
                      element: <MovieDetail/>
                    }
                  ]
                }
              ]
            },
        ]
    },

])

function App() {
    return <RouterProvider router={router}/>
}

export default App
