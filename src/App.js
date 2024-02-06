import "./Asserts/Style/styles.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "./Auth/AuthContext";

function App() {
  return (
    <Router>
      <div className=""> 
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      </div>
    </Router>
  );
}

export default App;