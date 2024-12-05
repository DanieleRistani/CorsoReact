function runLogin(credentials) {
  return fetch("https://localhost:7233/LoginJwt/Login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
}

function runRegister(user) {
  return fetch("https://localhost:7233/Users/Register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
}

function sendEmailSuccessRegister(email) {
  return fetch("https://localhost:7233/Email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      toEmail: email,
      subject: "Test Register email",
      message: `<!DOCTYPE html>
    <html lang="it">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Conferma Registrazione</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 0;
                }
                .email-container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .header {
                    background-color: #FFC107; /* Giallo */
                    color: white;
                    padding: 20px;
                    text-align: center;
                }
                .content {
                    padding: 20px;
                    line-height: 1.6;
                    color: #333;
                }
                .button {
                    display: inline-block;
                    margin: 20px 0;
                    padding: 12px 20px;
                    background-color: #FFC107; /* Giallo */
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                }
                .footer {
                    background-color: #f1f1f1;
                    color: #777;
                    text-align: center;
                    padding: 10px 20px;
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <h1>Benvenuto/a!</h1>
                </div>
                <div class="content">
                    <p>Ciao <strong>${email}</strong>,</p>
                    <p>Grazie per esserti registrato/a al nostro servizio.</p> 
                    <p>Se non hai richiesto questa registrazione, puoi ignorare questa email.</p>
                    <p><a href="http://localhost:3000/categories" class="button">Go to Categories</a></p>
                    <p>Grazie,</p>
                    <p>Il Team Film CRUD</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Film CRUD. Tutti i diritti riservati.</p>
                </div>
            </div>
        </body>
    </html>
`,
    }),
  });
}
function logout() {
  localStorage.removeItem("token");
  window.location.replace("/");
}

function getAuthUser(email) {
  return fetch(`https://localhost:7233/Users/AuthUser/${email}`);
}
export { runLogin, runRegister, logout, getAuthUser, sendEmailSuccessRegister };
