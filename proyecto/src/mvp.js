// src/mvp.js

import './styleLayout.css';

export function mostrarMVP() {
    const app = document.getElementById('app');

    app.innerHTML = `
   <main class="main container">

    <!-- TopBar -->
    <div class="topbar">
        <div class="container-arrows">
            <div class="container-arrow-left">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="container-arrow-right">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>

    <!-- SideBar -->
    <nav class="navbar">
        <div class="container-logo">
            <a href="#" class="link-logo">
                <svg viewBox="0 0 1134 340" class="logo-svg"></svg>
            </a>
        </div>

        <ul class="nav-main">
            <li><a href="#"><i class="fa-solid fa-house"></i>Inicio</a></li>
            <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i>Buscar</a></li>
            <li><a href="#"><i class="fa-solid fa-bookmark"></i>Tu biblioteca</a></li>
        </ul>

        <div class="extra-options">
            <button class="btn-create-list"><i class="fa-solid fa-plus"></i> Crear Lista</button>
            <button class="btn-favorite-songs"><i class="fa-solid fa-heart"></i> Canciones que te gustan</button>
        </div>

        <div class="container-links">
            <div class="container-links-legal">
                <a href="#">Legal</a>
                <a href="#">Centro de Privacidad</a>
                <a href="#">Política de Privacidad</a>
                <a href="#">Cookies</a>
                <a href="#">Información sobre los anuncios</a>
            </div>

            <button class="btn-language">
                <i class="fa-solid fa-globe"></i> Español de España
            </button>
        </div>
    </nav>

    <!-- Contenido Principal -->
    <section class="main-content">

        <!-- 1 Fila: Concentración -->
        <div class="container-name-concentracion">
            <h1 class="title-playlist">Concentración</h1>

            <div class="container-card-concentracion">

                <div class="card-concentracion">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/concentracion/peaceful_piano.jpg" />
                        </div>
                        <h2>La Plena - W sound 5</h2>
                        <p>W sound, Beele, Ovy on The Drums</p>
                    </div>
                </div>

                <div class="card-concentracion">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/concentracion/deep_focus.jpg" />
                        </div>
                        <h2>VICE VERSA</h2>
                        <p>Rauw Alejandro</p>
                    </div>
                </div>

                <div class="card-concentracion">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/concentracion/instrumental_study.jpg" />
                        </div>
                        <h2>Formula, Vol 2</h2>
                        <p>Romeo Santos</p>
                    </div>
                </div>

                <div class="card-concentracion">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/concentracion/coding_mode.jpg" />
                        </div>
                        <h2>Top 50 Colombia</h2>
                    </div>
                </div>

                <div class="card-concentracion">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/concentracion/focus_flow.jpg" />
                        </div>
                        <h2>Trinidad Bendita</h2>
                        <p>Blessd</p>
                    </div>
                </div>

                <div class="card-concentracion">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/concentracion/workday_lounge.jpg" />
                        </div>
                        <h2>Cosa Nuestra</h2>
                        <p>Rauw Alejandro</p>
                    </div>
                </div>

                <div class="card-concentracion">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/concentracion/beats_to_think.jpg" />
                        </div>
                        <p>Blessd, Bad Bunny, Romeo Santos y más</p>
                    </div>
                </div>

            </div>
        </div>

        <!-- 2 Fila: Spotify Playlists -->
        <div class="container-name-spotify-playlists">
            <h1 class="title-playlist">Spotify Playlists</h1>

            <div class="container-card-spotify-playlists">

                <div class="card-spotify-playlists">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/spotify_playlists/today_hits.jpg" />
                        </div>
                        <p>Andrés Cepeda, Romeo Santos y más</p>
                    </div>
                </div>

                <div class="card-spotify-playlists">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/spotify_playlists/rap_caviar.jpg" />
                        </div>
                        <p>Young Cister, ROA y más</p>
                    </div>
                </div>

                <div class="card-spotify-playlists">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/spotify_playlists/all_out.jpg" />
                        </div>
                        <p>Slayter, Lana Del Rey y más</p>
                    </div>
                </div>

                <div class="card-spotify-playlists">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/spotify_playlists/rock_classics.jpg" />
                        </div>
                        <p>Kybba, txmmy y más</p>
                    </div>
                </div>

                <div class="card-spotify-playlists">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/spotify_playlists/chili_hits.jpg" />
                        </div>
                        <p>ROA, Maluma y más</p>
                    </div>
                </div>

                <div class="card-spotify-playlists">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/spotify_playlists/viva_latino.jpg" />
                        </div>
                        <p>Los mejores éxitos latinos</p>
                    </div>
                </div>

                <div class="card-spotify-playlists">
                    <div class="card">
                        <div class="card-img">
                            <img src="/img/spotify_playlists/mega_hit_mix.jpg" />
                        </div>
                        <p>Andrés Cepeda, Romeo Santos y más</p>
                    </div>
                </div>

            </div>
        </div>

    </section>

</main>

<div class="banner-bottom">
    <div class="content">
        <span>Muestra de Spotify</span>
        <p>Regístrate para disfrutar de canciones y podcasts sin límites.</p>
    </div>
</div>

<!-- REPRODUCTOR COMPLETO (FULL SCREEN) -->
<div id="fullPlayer" class="full-player hidden">
    
    <button id="closeFullPlayer" class="close-btn">x
        <i class="fa-solid fa-chevron-down"></i>
    </button>

    <img id="fullPlayerImg" class="full-cover" src="" />

    <div class="full-info">
        <h1 id="fullPlayerTitle">Título</h1>
        <p id="fullPlayerArtist">Artista</p>
    </div>

    <div class="full-controls">

        <input type="range" id="fullProgress" value="0" class="progress-range">

        <div class="control-buttons">
            <button><i class="fa-solid fa-backward-step"></i></button>
            <button id="fullPlayBtn" class="play-btn">
                <i class="fa-solid fa-play"></i>
            </button>
            <button><i class="fa-solid fa-forward-step"></i></button>
        </div>

    </div>

</div>
    `;

    // ========== EVENTO: ABRIR EL REPRODUCTOR ==========
    document.querySelectorAll(".card-concentracion").forEach(card => {
        card.addEventListener("click", () => {

            const img = card.querySelector("img")?.src || "";
            const title = card.querySelector("h2")?.textContent || "Canción";
            const artist = card.querySelector("p")?.textContent || "Artista";

            document.getElementById("fullPlayerImg").src = img;
            document.getElementById("fullPlayerTitle").textContent = title;
            document.getElementById("fullPlayerArtist").textContent = artist;

            document.getElementById("fullPlayer").classList.remove("hidden");
        });
    });

    // ========== EVENTO: CERRAR REPRODUCTOR ==========
    document.getElementById("closeFullPlayer").addEventListener("click", () => {
        document.getElementById("fullPlayer").classList.add("hidden");
    });
}
