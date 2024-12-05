import React, { useRef} from "react";
import AuthService, { runLogin, runRegister,sendEmailSuccessRegister } from "./authService";
function LoginRegister() {
  const containerRef = useRef(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

 
  const firstNameRef = useRef(null);
  
  const lastNameRef = useRef(null);
 
  const emailAddressRef = useRef(null);
  const phoneRef = useRef(null);
  

  function showSignUp() {
    if (containerRef.current) {
      containerRef.current.classList.add("right-panel-active");
    }
  }

  function showSignIn() {
    if (containerRef.current) {
      containerRef.current.classList.remove("right-panel-active");
    }
  }

  function doLogin() {
    
    runLogin({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        window.location.replace("/");
        

      })
      .catch((error) => {
        console.log(error);
      });
  }

  function doRegister() {
    runRegister({
      title:"",
      suffix: "",
      middleName: "",
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      emailAddress: emailAddressRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      role: "USER",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        
        
        
        sendEmailSuccessRegister(emailAddressRef.current.value);
        window.location.replace("/");
        
         
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
    {/* <button onClick={()=>sendEmailSuccessRegister("ciao@gmail.com")}>Ciao</button> */}
      <div class="container-fluid">
        <div class="row ">
          <div class="col-12 ">
            <h2 class="mb-4"> Sign in/up Form</h2>
            <div className="container" id="container" ref={containerRef}>
              <div className="form-container sign-up-container">
                <form action="#">
                  <h1>Create Account</h1>

                  <input type="text" placeholder="firstName" ref={firstNameRef} />
                  <input type="text" placeholder="lastName" ref={lastNameRef} /> 
                  <input type="email" placeholder="emailAddress" ref={emailAddressRef} />
                  <input type="number" placeholder="phone" ref={phoneRef} />
                  <input type="password" placeholder="Password" ref={passwordRef} />
                
                  <button type="submit" onClick={doRegister}>Sign Up</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form action="#">
                  <h1>Sign in</h1>

                  <input type="email" placeholder="Email" ref={emailRef} />
                  <input
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                  />

                  <button type="submit" onClick={doLogin}>
                    Sign In
                  </button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <button className="ghost" id="signIn" onClick={showSignIn}>
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>
                      Enter your personal details and start your journey with us
                    </p>
                    <button className="ghost" id="signUp" onClick={showSignUp}>
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;
