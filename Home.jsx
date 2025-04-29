import React from "react";
import Header from "./componet/customer/Header"; // adjust path as needed
import Footer from "./componet/customer/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <style>{`
        .custom-navbar {
          background-color: rgba(143, 190, 212, 0.7);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 999;
        }

        .custom-navbar .nav > li > a {
          color: white !important;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .custom-navbar .nav > li > a:hover {
          color:rgb(121, 156, 189) !important;
        }

        .navbar-brand i {
          color: white !important;
        }

        #home {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url('https://images.unsplash.com/photo-1498050108023-c5249f4df085') no-repeat center center/cover;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 100px 20px 50px; /* top padding for navbar space */
        }

        #home h5 {
          font-size: 18px;
          color: #ccc;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        #home h1 {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        #home p {
          font-size: 20px;
          margin-bottom: 30px;
        }

        #home .btn {
          background-color:rgb(81, 124, 134);
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          font-size: 18px;
          border-radius: 30px;
          transition: background 0.3s ease;
        }

        #home .btn:hover {
          background-color:rgb(70, 100, 107);
        }

        @media (max-width: 768px) {
          #home h1 {
            font-size: 32px;
          }
          #home p {
            font-size: 16px;
          }
        }
      `}</style>

      <section id="home">
        <div className="animate__animated animate__fadeInUp">
          <h3>Hello, I’m</h3>
          <h2 className="animate__animated animate__zoomIn">
            A Passionate <span style={{ color: "#5F9EA0	" }}>Frontend Developer</span>
          </h2>
          <p className="animate__animated animate__fadeInUp">
            <br />
          </p>
          <a href="Projects" className="btn animate__animated animate__pulse animate__infinite">
            View My Work
          </a>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
