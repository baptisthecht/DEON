import { Screen } from "../components/screen";

const clients = [
	"CEVINOGLASS",
	"CERMIX",
	"INTELLIMIND",
	"TLM VOLLEY",
	"TECB",
	"TEC",
	"MEL",
	"CAPH",
	"ADEME",
	"CFTC",
	"MAIRIE DE ROUBAIX",
	"MAIRIE DE LOMPRET",
	"MAIRIE D’AVESNELLES",
];

export function Clients() {
	return (
		<Screen>
			<main className="flex flex-col p-4 md:p-8 lg:p-12 xl:p-20 gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-screen h-screen justify-center snap-start text-xs md:text-sm lg:text-lg xl:text-base">
				<div>
					<strong>
						<p>PRINCIPAUX CLIENTS :</p>
					</strong>
					<p className="flex flex-wrap gap-2">
						{clients.map((client) => (
							<span key={client}>{client}</span>
						))}
					</p>
				</div>
			</main>
		</Screen>
	);
}
