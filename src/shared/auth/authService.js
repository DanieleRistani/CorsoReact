
import React, { useState } from 'react';


function runLogin(credentials) {

return fetch("https://localhost:7233/LoginJwt/Login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(credentials) })

}

function runRegister(user) {
    return fetch("https://localhost:7233/Users/Register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(user) })
}

function logout() {
    localStorage.removeItem("token");
    window.location.reload();
}
export {runLogin, runRegister, logout};