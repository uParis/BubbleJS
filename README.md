# 🫧 BubbleJS

Beautiful, stackable notifications for React.

---

## 🚀 Install

```bash
npm install bubblejs
```

## ⚙️ Setup

Wrap your app with `BubbleProvider`:

```jsx
import { BubbleProvider } from "bubblejs"

function App(){
	return (
		<BubbleProvider position="bottom-right">
			<MyApp />
		</BubbleProvider>
	)
}
```

## 💡 Usage

Call `useBubble()` from any child component:

```jsx
import { useBubble } from "bubblejs"

function SaveButton(){
	const bubble = useBubble()

	const handleSave = () => {
		bubble.success({
			title: "Saved",
			description: "Your changes are live.",
			theme: "dark"
		})
	}

	return <button onClick={handleSave}>Save</button>
}
```

## 🎨 Variants

```js
const bubble = useBubble()

// Simple notifications
bubble.success({ title: "Done", description: "..." })
bubble.error({ title: "Failed", description: "..." })
bubble.warning({ title: "Warning", description: "..." })
bubble.info({ title: "Tip", description: "..." })

// Upload with progress bar
bubble.upload({
	title: "Uploading 'file.fig'",
	description: "Please wait...",
	autoDismiss: false
})

// User message with avatar
bubble.message({
	title: "Sienna Hewitt",
	description: "Ready to review!",
	avatar: "SH",
	online: true,
	timestamp: "2 mins ago"
})

// App update with badge
bubble.update({
	title: "New update available",
	description: "Includes bug fixes.",
	badge: "v4.2"
})
```

## 🔘 Actions

Add buttons to any bubble:

```js
bubble.success({
	title: "Saved",
	description: "Your changes are live.",
	actions: [
		{ label: "Dismiss", variant: "outlined" },
		{ label: "View", variant: "filled" }
	]
})
```

Action options: `label`, `variant` (`"outlined"` | `"filled"`), `onClick`, `dismissOnClick` (default: `true`).

## ⚙️ Config

### BubbleProvider Props

| Prop | Type | Default |
|---|---|---|
| `position` | `"top-right"` \| `"top-left"` \| `"bottom-right"` \| `"bottom-left"` | `"bottom-right"` |

### Bubble options

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Required |
| `description` | `string` | — | Required |
| `theme` | `"light"` \| `"dark"` | `"light"` | Color scheme |
| `duration` | `number` | `6000` | Auto-dismiss delay (ms) |
| `autoDismiss` | `boolean` | `true` | Set `false` for upload |
| `actions` | `array` | `[]` | Action buttons |
| `avatar` | `string` | — | Message variant |
| `online` | `boolean` | — | Message variant |
| `timestamp` | `string` | — | Message variant |
| `badge` | `string` | — | Update variant |

### Control

```js
const id = bubble.success({ ... })   // returns id
bubble.dismiss(id)                   // dismiss one
bubble.dismissAll()                  // clear all
```

## License

⚠️ You may view, study, and contribute to this software, but you may NOT copy, modify, distribute, sublicense, or sell it without explicit permission. See [LICENSE](./LICENSE).
