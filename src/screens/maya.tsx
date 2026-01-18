import { Screen } from "../components/screen";

export function Maya() {
	return (
		<Screen>
			<main className="flex flex-col w-screen h-screen snap-start text-xs md:text-sm lg:text-lg xl:text-base">
				<div className="flex relative">
					<div className="w-[45%] md:w-[40%] lg:w-[35%] max-h-60 md:max-h-72 lg:max-h-80 xl:max-h-none xl:w-1/4 shrink-0 relative">
						<img
							src="/images/2.webp"
							loading="lazy"
							decoding="async"
							alt="Deon"
							className="w-full h-full object-cover object-top"
						/>
						<div className="absolute bottom-10 md:bottom-12 lg:bottom-14 -right-11 md:-right-12 lg:-right-14 text-white rotate-270 p-3 text-[6px] md:text-[7px] lg:text-[8px]">
							Photo : Marc-Antoine Redien® 
						</div>
					</div>
					<div className="flex flex-col justify-center gap-6 md:gap-7 lg:gap-8 pb-0 md:pb-8 lg:pb-12 xl:pb-20 xl:mt-4 h-min p-4 md:p-8 lg:p-12 xl:p-20">
						<p>
							Diplômé d’une École Nationale de Design Visuel Art
							et Communication,{" "}
							<strong>Patrick Déon crée DÉON</strong> : conseil en
							stratégie de marque où il applique sa propre
							méthodologie de travail{" "}
							<strong className="whitespace-nowrap">
								« Creative Design Branding® »
							</strong>
							  pour accompagner les directions d’entreprises et
							les porteurs de projets sur le management de leurs
							marques.
						</p>
						<p className="hidden md:block">
							Fondateur et Entrepreneur depuis plus de 30 ans, —
							de la Petite Entreprise en 1996 aux Fous du R.O.I en
							2003 puis Territoire de marque en 2014 —{" "}
							<strong>
								DÉON développe une vision globale et
								transversale du management de la marque.
							</strong>
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-12 p-4 md:p-8 lg:p-12 xl:p-20">
					<p className="block md:hidden">
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
						</strong>{" "}
						avec justesse : Cevinoglass, Cermix, Intellimind, TEC,
						TLM Volley, TEC.B, MEL, CAPH, ADEME, CFTC, OSE Roubaix,
						L’Avant-Poste, Mode in Roubaix, Mairie de Roubaix,
						Mairie de Lompret, Mairie d’Avesnelles…
					</p>

					<p>
						En parallèle,{" "}
						<strong>
							il enseigne depuis plus de 25 ans dans des écoles de
							communication, de commerce et de marketing
						</strong>{" "}
						(Université de Lille IAE, INFOCOM Roubaix et ISCOM
						Lille), où il forme les étudiants en Licence et en
						Master 1 & 2 en communication, commerce et marketing. Il
						y partage{" "}
						<strong>
							sa passion pour la culture des marques, la création,
							la conduite de projets, la rédaction scientifique
						</strong>{" "}
						pour publication, l’accompagnement des mémoires et le
						suivi des alternants/tuteurs en entreprise.
					</p>
				</div>
			</main>
		</Screen>
	);
}
