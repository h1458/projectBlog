import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Home from './Page/Home';
import Allcourses from './Page/Allcourses';
// const Allcourses = lazy(()=> import('./Page/Allcourses'))
import AllBlog from './Page/AllBlog';
// const AllBlog = lazy(()=> import('./Page/AllBlog'))
import BlogDetails from './Page/BlogDetails';
// const BlogDetails = lazy(()=> import('./Page/BlogDetails'))
import Login from './Page/Login';
// const Login = lazy(()=> import('./Page/Login'))
import Category from './Page/Category';
// const Category = lazy(()=> import('./Page/Category'))
import Register from './Page/Register';
// const Register = lazy(()=> import('./Page/Register'))
import About from './Page/About';
// const About = lazy(()=> import('./Page/About'))
import ShowAllComt from './Page/ShowAllComt';
import Contact from './Page/Contact'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdatePassword from './Page/UpdatePassword';
const Home = lazy(()=> import('./Page/Home'))



function App() {
  function PrivateRoute({children}){
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to='/login'/>
    )
  }

  const publicRoute = [
    {
      path: '/login',
      componant: <Login/>
    },
    {
      path: '/register',
      componant: <Register/>
    }
  ]

  const privateRoute = [
    {
      path: '/',
      componant: <Home/>
    },
    {
      path: '/blog',
      componant: <AllBlog/>
    },
    {
      path: '/blogdetails/:id',
      componant: <BlogDetails/>
    },
    {
      path: '/allcourses',
      componant: <Allcourses/>
    },
    {
      path: '/categorydetails/:id',
      componant: <Category/>
    },
    {
      path: '/about',
      componant: <About/>
    },
    {
      path: '/showcomment',
      componant: <ShowAllComt/>
    },
    {
      path: '/contact',
      componant: <Contact/>
    },
    {
      path: '/updatepass',
      componant: <UpdatePassword/>
    }
  ]
  const queryClient = new QueryClient()
  return (
   <>
    <QueryClientProvider client={queryClient}>
  <Suspense fallback={<h1>loading...</h1>}>
  <Router>
   <ToastContainer/>
   <Routes>
   {
    privateRoute?.map((Private) => {
      return(
        <Route 
        path={Private.path}
        element={<PrivateRoute>{Private?.componant}</PrivateRoute>}
        />
      )
    })
   }
   {
    publicRoute?.map((Public)=> {
      return(
        <Route 
        path={Public.path}
        element={Public?.componant}
        />
      )
    })
   }
    </Routes> 
   </Router>
  </Suspense>
  </QueryClientProvider>
   </>
  );
}

export default App;
