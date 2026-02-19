import Bubble from "./Bubble"
import { styles } from "../Styles"

const positionMap = {
	"top-right": { top: 20, right: 20 },
	"top-left": { top: 20, left: 20 },
	"bottom-right": { bottom: 20, right: 20 },
	"bottom-left": { bottom: 20, left: 20 },
}

export default function BubbleContainer({ bubbles, onDismiss, position = "bottom-right" }){
	return (
		<div style={{
			...styles.container,
			...positionMap[position],
			alignItems: position.includes("right") ? "flex-end" : "flex-start",
		}}>
			{bubbles.map((b) => (
				<Bubble key={b.id} bubble={b} onDismiss={onDismiss} />
			))}
		</div>
	)
}