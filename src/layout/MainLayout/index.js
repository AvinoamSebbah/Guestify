import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// style import
import { LayoutWrapper, Main } from "./index.styled";

// component import
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname]);
  
  return (
      <LayoutWrapper>
        {/* <Header /> */}
        <Main>
          <Outlet />
        </Main>
        {/* <Footer /> */}
      </LayoutWrapper>
  );
};

export default MainLayout;
