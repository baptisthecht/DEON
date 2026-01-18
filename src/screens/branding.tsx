import { Screen } from "../components/screen";

export function Branding() {
	return (
		<Screen>
			<main className="flex flex-col p-2 sm:p-4 md:p-8 lg:p-12 xl:p-20 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 w-screen h-screen justify-start sm:justify-center snap-start text-xs sm:text-xs md:text-sm lg:text-lg xl:text-base pt-6 sm:pt-4">
				<p>
					DÉON propose un accompagnement fondé sur une méthodologie
					éprouvée – <strong>« Creative Design Branding® »</strong> –
					articulée en trois temps :{" "}
					<strong>Inspiration, Idéation et Implémentation</strong>.
					Cette démarche collective et participative permet de faire
					émerger un ADN partagé, une plateforme de marque cohérente,
					un manifeste, des pitchs commerciaux in fine, une identité
					visuelle, une charte graphique cohérente et fédératrice qui
					donne du sens à votre relation client.
				</p>
				<p>
					<strong>L’objectif est clair</strong> : construire un
					territoire de marque solide, inspirant et mobilisateur,{" "}
					<strong>
						capable de guider les actions de communication, de
						soutenir la cohésion interne et de renforcer la fierté
						d’appartenance
					</strong>
					. Cette animation de travail propose ainsi une lecture
					méthodologique, un planning opérationnel et les livrables
					associés pour conduire ce projet dans un esprit de
					collaboration et d’efficacité.
				</p>
				<p>
					<strong>Ma Mission est simple</strong> : je remets vos
					clients au centre de votre marque — là où ils auraient
					toujours dû être — casser les illusions, et révéler ce qui
					crée réellement de la valeur pour votre marque.
				</p>
				<p>
					<strong>Ma Vision est optimiste</strong> : je rêve d’un
					monde où les marques ne jouent plus à séduire, mais à
					comprendre. Je crois à un marché où les marques osent être
					vraies, cohérentes, singulières — parce qu’elles écoutent
					profondément leurs clients.
				</p>
				<p>
					<strong>Ma conviction est profonde</strong> : je crois que
					les marques n’ont pas qu’une identité mais une raison
					d’être, une voix, une attitude.
				</p>
				<p>
					<strong>
						Faire « ce qu’il convient de faire », c’est construire
						des marques justes, cohérentes et durables — des marques
						qui inspirent confiance et créent de la valeur, pour
						aujourd’hui et pour demain.
					</strong>
				</p>
				<div className="h-8 sm:h-20 md:h-24 lg:h-16 xl:hidden" />
			</main>
		</Screen>
	);
}
