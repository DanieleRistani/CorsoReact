
import AuthService ,{  getAuthUser } from "./authService";
import { useState } from "react";
import {jwtDecode} from "jwt-decode";
import { useEffect } from "react";
function userProfile() {
  
    const [authUser, setAuthUser] = useState({}); 

    useEffect(() => {
        getAuthUser(jwtDecode(localStorage.getItem("token")).unique_name).then(res => res.json()).then(data => setAuthUser(data));
        
    },[]);

    return (
        <>
         <div class="container-fluid">
            <div class="row ">
                <div class="col-12 d-flex flex-column align-items-center justify-content-center">
                  <h1 class="dispay-5 text-center">{authUser.firstName}</h1> 
                  <h2 class="dispay-5 text-center">{authUser.lastName}</h2> 
                  <h2 class="dispay-5 text-center">{authUser.phone}</h2> 
                  <h2 class="dispay-5 text-center">{authUser.emailAddress}</h2> 
                  <h2 class="dispay-5 text-center">{authUser.role}</h2> 
                  
                </div>
            </div>
        </div>
        </>
    )
}    


export default userProfile