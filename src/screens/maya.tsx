import { Screen } from "../components/screen";

export function Maya() {
	return (
		<Screen>
			<main className="flex flex-col gap-6 lg:gap-12 w-screen h-screen p-4 lg:p-20 snap-start text-xs lg:text-base">
				<div className="flex flex-col lg:flex-row items-end gap-6 lg:gap-12">
					<img
						src="/images/2.webp"
						loading="lazy"
						decoding="async"
						alt="Deon"
						className="size-full lg:size-80 object-cover"
					/>
					<p>
						Diplômé d’une École Nationale de Design Visuel Art et
						Communication, <strong>Patrick Déon crée DÉON</strong> :
						conseil en stratégie de marque où il applique sa propre
						méthodologie de travail « 
						<strong>Creative Design Branding®</strong> » pour
						accompagner les directions d’entreprises et les porteurs
						de projets sur le management de leurs marques.
					</p>
				</div>

				<p>
					Fondateur et Entrepreneur depuis plus de 30 ans, — de la
					Petite Entreprise en 1996 aux Fous du R.O.I en 2003 puis
					Territoire de marque en 2014 —{" "}
					<strong>
						DÉON développe une vision globale et transversale du
						management de la marque.
					</strong>
				</p>

				<p>
					Curieux et indépendant d’esprit, Patrick revendique
					volontiers son rôle{" "}
					<strong>« d’empêcheur de tourner en rond »</strong> : il
					accompagne{" "}
					<strong>
						les entreprises et les institutions pour les aider à
						clarifier leurs choix et à piloter leurs marques
					</strong>
					avec justesse : Cevinoglass, Cermix, Intellimind, TEC, TLM
					Volley, TEC.B, MEL, CAPH, ADEME, CFTC, OSE Roubaix,
					L’Avant-Poste, Mode in Roubaix, Mairie de Roubaix, Mairie de
					Lompret, Mairie d’Avesnelles…
				</p>

				<p>
					En parallèle,{" "}
					<strong>
						il enseigne depuis plus de 25 ans dans des écoles de
						communication, de commerce et de marketing
					</strong>{" "}
					(Université de Lille IAE, INFOCOM Roubaix et ISCOM Lille),
					où il forme les étudiants en Licence et en Master 1 & 2 en
					communication, commerce et marketing. Il y partage{" "}
					<strong>
						a passion pour la culture des marques, la création, la
						conduite de projets, la rédaction scientifique
					</strong>{" "}
					pour publication, l’accompagnement des mémoires et le suivi
					des alternants/tuteurs en entreprise.
				</p>
			</main>
		</Screen>
	);
}
