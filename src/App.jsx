import { Suspense } from "react";
import { Demo4 } from "./components/Demos/Demo4";

export function App() {
	return (
		<div className="p-5 w-full min-h-screen">
			<Suspense fallback={"Carregando..."}>
				<Demo4 />
			</Suspense>
		</div>
	);
}
