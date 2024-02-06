import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Layouts/Header/Header";
import Middle from "../pages/Solution/Middle/Middle";
import Middle2 from "../pages/Solution/Middle2/Middle2";
import SignIn from "../pages/Authorize/SignIn";
import Footer from "../Layouts/Footer/Footer";
import About from "../pages/About/About";
import Mian from "../pages/Pricing/Mian";
import AskQues from "../pages/Pricing/AskQues";
import BlogMain from "../pages/Blog/BlogMain";
import Nav from "../components/Nav/Nav";
import CardBox from "../components/CardBox/CardBox";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import { ROUTES } from "./routerConfig"; 

const AppRoutes = () => {
  const location = useLocation();

  const pathsWithoutFooter = ["/", "/price", "/blog"];

  const hideFooter = pathsWithoutFooter.includes(location.pathname);
 
  const RouteWithRole = ({ Element }) => (
    <PrivateRoute>
      <React.Fragment>
        {Element}
      </React.Fragment>
    </PrivateRoute>
  );
  return (
    <>
      <Routes> 
        <Route
          exact
          path={ROUTES.About}
          element={
            <PrivateRoute>
              <RouteWithRole Element={<About />} />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <>
              <SignIn />
            </>
          }
        />
        <Route
          path="/logout"
          element={
            <> 
              <SignIn />
            </>
          }
        />

<Route path={ROUTES.Price} 
         
           
                element={
                  <>
                    <Nav />
                    <Mian />
                    <AskQues />
                  </>

            
          }
        />

   <Route path={ROUTES.Blog}
          element={
          <>
              <Nav />
              <BlogMain />
              <CardBox />
              <Footer />
              </>
          }
        />

<Route path={ROUTES.Solution} element={
       <PrivateRoute>  
       <RouteWithRole
          Element={
            <>
              <Header />
              <Middle />
              <Middle2 /> 
              </>
                }
              />
            </PrivateRoute>
          }
        />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

export default AppRoutes;
