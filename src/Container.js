import React,{ Fragment } from 'react';
import img from '../src/img/login-logo.png';


const Container = () => {
    return (
 <Fragment>
    <div id="wrapper">
        <div id="left">
          <div id="signin">
              <div className="logo">
                  <img src={img} alt="slualpright" />
              </div>
              <form>
                  <div>
                      <label htmlFor="email">Email or username</label>
                      <input type='text' className="text-input" />
                  </div>
                  <div>
                      <label htmlFor="password">Password</label>
                      <input type='password' className="text-input"/>
                  </div>
                  <button type="submit" className="primary-btn">Sign In</button>
              </form>
              <div className="links">
                  <a href="#!">Forgot password</a>
                  <a href="#!">Sign in with Company and school </a>
              </div>
              <div className="or">
                  <hr className="bar" />
                  <span>Or</span>
                  <hr className="bar"/>
              </div>
              <a href="#!" className="secondary-btn">Create and Account</a>
          </div>
          <footer id="main-footer">
              <p>Copyright &copy; 2018, Sluralpright All Right Reserved</p>
              <div>
                  <a href="#!">Term of use</a> | <a href="#!">Privacy Policy</a>
              </div>
          </footer>
        </div>
        <div id="right">
          <div id="showcase">
              <div className="showcase-content">
                <h1 className="showcase-text">
                  Let's create the future <strong>together</strong>
                </h1>
                <a href="#!" className="secondary-btn">Start a FREE 10-day trial</a>
              </div>
            </div>
        </div>
    </div> 
</Fragment>
    )
}

export default Container
