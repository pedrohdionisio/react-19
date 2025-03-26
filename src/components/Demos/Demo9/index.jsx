import { Button } from "@/components/Button";
import { useState } from "react";
import { preload } from "react-dom";

const imgURL =
	"https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export function Demo9() {
	const [hidden, setHidden] = useState(true);

	function handleMouseEnter() {
		preload(imgURL, { as: "image" });
	}

	return (
		<div>
			<Button onClick={() => setHidden(false)} onMouseEnter={handleMouseEnter}>
				Revelar imagem
			</Button>

			{!hidden && <img src={imgURL} alt="teste" />}
		</div>
	);
}
