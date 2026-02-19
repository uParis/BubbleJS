import { createContext, useContext, useState, useCallback } from "react"
import BubbleContainer from "../components/BubbleContainer"

const BubbleContext = createContext(null)

let bubbleId = 0
const genId = () => ++bubbleId

/**
 * BubbleProvider
 *
 * Wrap your app to enable notifications.
 *
 * @param {string} position - "top-right" | "top-left" | "bottom-right" | "bottom-left"
 */
export function BubbleProvider({ children, position = "bottom-right" }){
    const [bubbles, setBubbles] = useState([])

    const dismiss = useCallback((id) => {
        setBubbles((prev) => prev.filter((b) => b.id !== id))
    }, [])

    const add = useCallback((config) => {
        const id = genId()
        setBubbles((prev) => [...prev, { id, ...config }])
        return id
    }, [])

    const dismissAll = useCallback(() => {
        setBubbles([])
    }, [])

    const variant = (v) => (config) => add({ variant: v, ...config })

    const bubble = {
        show: add,
        dismiss,
        dismissAll,
        success: variant("success"),
        upload: variant("upload"),
        info: variant("info"),
        warning: variant("warning"),
        error: variant("error"),
        message: variant("message"),
        update: variant("update"),
    }

    return (
        <BubbleContext.Provider value={bubble}>
            {children}
            <BubbleContainer bubbles={bubbles} onDismiss={dismiss} position={position} />
        </BubbleContext.Provider>
    )
}

/**
 * useBubble
 *
 * @returns {object} bubble API
 *
 * bubble.success({ title, description, theme, actions })
 * bubble.error({ title, description, theme, actions })
 * bubble.warning({ title, description, theme, actions })
 * bubble.info({ title, description, theme, actions })
 * bubble.upload({ title, description, theme, autoDismiss, actions })
 * bubble.message({ title, description, theme, avatar, online, timestamp, actions })
 * bubble.update({ title, description, theme, badge, actions })
 * bubble.show({ variant, ...config })
 * bubble.dismiss(id)
 * bubble.dismissAll()
 */
export function useBubble() {
    const context = useContext(BubbleContext)
    if(!context){
        throw new Error("useBubble must be used within a <BubbleProvider>")
    }
    return context
}