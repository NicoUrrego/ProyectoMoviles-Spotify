// src/login.js
import { supabase } from './supabase.js';
import { mostrarRegistro } from './register.js'; // para poder ir al

console.log("✅ login.js cargado correctamente");

export function mostrarLogin() {
const app = document.getElementById('app');
app.innerHTML = `
<section id="formulario">
<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify">
<h2>Iniciar Sesión</h2><br />
<form id="login-form">
<input type="email" name="correo" placeholder="Correo" required
/>
<input type="password" name="password" placeholder="Contraseña"
required />
<button type="submit">Ingresar</button>
</form>
<p id="error" style="color:red;"></p>
<p>¿No tienes cuenta?</p>
<button id="ir-registro">Crear cuenta</button>

</section>
`;

const form = document.getElementById('login-form');
const errorMsg = document.getElementById('error');
const irRegistro = document.getElementById('ir-registro');

// Ir al registro
irRegistro.addEventListener('click', () => {
mostrarRegistro();
});

// Enviar login
form.addEventListener('submit', async (e) => {
errorMsg.textContent = '';
e.preventDefault();
const correo = form.correo.value.trim();
const password = form.password.value.trim();

if (!correo || !password) {
errorMsg.textContent = 'Por favor completa todos los campos.';
return;
}

// 🔐 Iniciar sesión en Supabase
const { data, error } = await supabase.auth.signInWithPassword({
email: correo,
password: password,
});

if (error) {
errorMsg.textContent = 'Error al iniciar sesión: ' + error.message;
return;
}

// ✅ Usuario autenticado

const usuario = data.user;
console.log('Usuario logueado:', usuario);

location.reload()
});
}