export default function App(){
    return (
        <body>
            <header className="hub-header">
            <div className="hub-title-block">
                <div className="hub-label">ambroise-is-coding.fr</div>
                <div className="hub-title">Project<span>_</span>Hub</div>
            </div>
            <div>
                <div className="hub-meta">
                <span className="dot"></span>
                <span id="live-count">4 projets en ligne</span>
                </div>
            </div>
            </header>

            <div className="filter-bar">
            <button className="filter-btn active">Tous</button>
            <button className="filter-btn">Live</button>
            <button className="filter-btn">En cours</button>
            <button className="filter-btn">Outils</button>
            <button className="filter-btn">Perso</button>
            </div>

            <div className="projects-grid" id="grid">

            <a className="project-card featured" href="https://portfolio.ambroise-is-coding.fr" target="_blank" data-status="live" data-type="perso">
                <div className="card-top">
                <div className="card-icon">🧑‍💻</div>
                <div className="card-badges">
                    <span className="badge badge-live">Live</span>
                    <span className="badge badge-perso">Perso</span>
                </div>
                </div>
                <div className="card-name">Portfolio</div>
                <div className="card-desc">Présentation de mes projets, compétences et parcours. Vitrine principale, déployée en production via cPanel.</div>
                <div className="card-tags">
                <span className="tag">react</span>
                <span className="tag">vite</span>
                <span className="tag">typescript</span>
                </div>
                <div className="card-url">
                portfolio.ambroise-is-coding.fr
                <span className="card-url-arrow">→</span>
                </div>
            </a>

            <div className="project-card" data-status="wip" data-type="tool">
                <div className="card-top">
                <div className="card-icon">🎴</div>
                <div className="card-badges">
                    <span className="badge badge-wip">WIP</span>
                    <span className="badge badge-tool">Outil</span>
                </div>
                </div>
                <div className="card-name">Fiche Creator</div>
                <div className="card-desc">Générateur de fiches de présentation structurées pour créateurs de contenu. En développement.</div>
                <div className="card-tags">
                <span className="tag">ui</span>
                <span className="tag">génération</span>
                </div>
                <div className="card-url">
                — non déployé
                <span className="card-url-arrow">→</span>
                </div>
            </div>

            <div className="project-card" data-status="wip" data-type="tool">
                <div className="card-top">
                <div className="card-icon">📋</div>
                <div className="card-badges">
                    <span className="badge badge-wip">WIP</span>
                    <span className="badge badge-tool">Outil</span>
                </div>
                </div>
                <div className="card-name">Backlog App</div>
                <div className="card-desc">Gestionnaire de backlog personnel pour tracker jeux, projets et idées. Interface minimaliste et rapide.</div>
                <div className="card-tags">
                <span className="tag">gestion</span>
                <span className="tag">productivité</span>
                </div>
                <div className="card-url">
                — non déployé
                <span className="card-url-arrow">→</span>
                </div>
            </div>

            </div>

            <footer className="hub-footer">
            <div className="footer-sig">Fait par <strong>Ambroise</strong> — ambroise-is-coding.fr</div>
            <div className="footer-count" id="footer-count">4 / 4 projets affichés</div>
            </footer>
        </body>
    );
}
