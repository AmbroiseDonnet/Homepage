import { Badge, Button, Card, Grid, GridElement } from "@ambroise/designsystemlab";

export default function App(){
    return (
        <>
            <header className="hub-header">
            <div className="hub-title-block">
                <h1 className="hub-label">ambroise-is-coding.fr</h1>
                <h2 className="hub-title">Project<span>_</span>Hub</h2>
            </div>
            <div>
                <div className="hub-meta">
                <span className="dot"></span>
                <Badge badgeType="accent">1 projets en ligne / 3</Badge>
                </div>
            </div>
            </header>
            <Grid cols={7} gap="md" rows={1}>
                <GridElement><Button variant="secondary">Tous</Button></GridElement>
                <GridElement><Button variant="secondary">Live</Button></GridElement>
                <GridElement><Button variant="secondary">En cours</Button></GridElement>
                <GridElement><Button variant="secondary">Outils</Button></GridElement>
                <GridElement><Button variant="secondary">Perso</Button></GridElement>
            </Grid>

            <Grid cols={2} gap="2xl">
                <GridElement>
                    <Card accent={true} title="Portfolio">
                        <Badge badgeType="success">Live</Badge>
                        <Badge badgeType="neutral">Perso</Badge>
                        <p className="card-desc">Présentation de mes projets, compétences et parcours. Vitrine principale, déployée en production via cPanel.</p>
                        <div className="card-tags">
                            <Badge badgeType="accent">react</Badge>
                            <Badge badgeType="accent">vite</Badge>
                            <Badge badgeType="accent">typescript</Badge>
                        </div>
                        <a href="https://portfolio.ambroise-is-coding.fr" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" >
                                portfolio.ambroise-is-coding.fr →
                            </Button>
                        </a>
                    </Card>
                </GridElement>
                <GridElement>
                    <Card title="Grimoire">
                        <Badge badgeType="warning">WIP</Badge>
                        <Badge badgeType="neutral">Outil</Badge>
                        <p className="card-desc">Générateur de fiches de présentation structurées pour créateurs de contenu. En développement.</p>
                        <div className="card-tags">
                            <Badge badgeType="accent">ui</Badge>
                            <Badge badgeType="accent">génération</Badge>
                        </div>
                        <Button variant="ghost" isDisabled={true}> non déployé →</Button>
                    </Card>
                </GridElement>
                <GridElement>
                    <Card title="Backlog App">
                        <Badge badgeType="warning">WIP</Badge>
                        <Badge badgeType="neutral">Outil</Badge>
                        <p className="card-desc">Gestionnaire de backlog personnel pour tracker jeux, projets et idées. Interface minimaliste et rapide.</p>
                        <div className="card-tags">
                            <Badge badgeType="accent">gestion</Badge>
                            <Badge badgeType="accent">productivité</Badge>
                        </div>
                        <Button variant="ghost" isDisabled={true}>
                            non déployé →
                        </Button>
                    </Card>
                </GridElement>
            </Grid>

            <footer className="hub-footer">
                <div className="footer-sig">Fait par <strong>Ambroise</strong> - ambroise-is-coding.fr - Il y a 3 projets affichés</div>
            </footer>
        </>
    );
}
