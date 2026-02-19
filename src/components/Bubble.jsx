import React, { useState, useEffect, useCallback, useRef } from "react"
import { CheckCircleIcon, UploadIcon, UpdateIcon, InfoIcon, WarningIcon, ErrorIcon, CloseIcon } from "./Icons"
import { styles, iconBgMap, iconBorderMap, filledBgMap } from "../Styles"

export default function Bubble({ bubble, onDismiss }){
	const [isExiting, setIsExiting] = useState(false)
	const [progress, setProgress] = useState(bubble.progress || 0)
	const timerRef = useRef(null)
	const isDark = bubble.theme === "dark"
	const displayProgress = Math.min(Math.round(progress), 100)

	const handleDismiss = useCallback(() => {
		setIsExiting(true)
		setTimeout(() => onDismiss(bubble.id), 320)
	}, [onDismiss, bubble.id])

	// Auto-dismiss
	useEffect(() => {
		if(bubble.autoDismiss !== false && bubble.variant !== "upload"){
			timerRef.current = setTimeout(handleDismiss, bubble.duration || 6000)
			return () => clearTimeout(timerRef.current)
		}
	}, [handleDismiss, bubble.autoDismiss, bubble.duration, bubble.variant])

	// Simulated upload progress
	useEffect(() => {
		if(bubble.variant === "upload" && progress < 100){
			const interval = setInterval(() => {
				setProgress((p) => {
					if(p >= 100){
						clearInterval(interval)
						setTimeout(handleDismiss, 1200)
						return 100
					}
					return p + Math.random() * 8 + 2
				})
			}, 400)
			return () => clearInterval(interval)
		}
	}, [bubble.variant])

	const renderIcon = () => {
		if(bubble.variant === "message" && bubble.avatar){
			return (
				<div style={styles.avatarWrap}>
					<div style={{
						...styles.avatar,
						border: isDark ? "2px solid #1D2939" : "2px solid #F2F4F7",
					}}>
						{bubble.avatar}
					</div>
					{bubble.online && (
						<div style={{
							...styles.onlineDot,
							border: isDark ? "2px solid #0C111D" : "2px solid #FFFFFF",
						}} />
					)}
				</div>
			)
		}

		const icons = {
			success: <CheckCircleIcon />,
			upload: <UploadIcon />,
			update: <UpdateIcon />,
			info: <InfoIcon />,
			warning: <WarningIcon />,
			error: <ErrorIcon />,
		}

		const t = isDark ? "dark" : "light"

		return (
			<div style={{
				...styles.iconWrap,
				background: iconBgMap[t][bubble.variant],
				border: `1px solid ${iconBorderMap[t][bubble.variant]}`,
			}}>
				{icons[bubble.variant]}
			</div>
		)
  	}

	const filledBg = isDark ? "#FFFFFF" : (filledBgMap[bubble.variant] || "#101828")
	const filledColor = isDark ? "#0C111D" : "#FFFFFF"

	return (
		<div
			style={{
				...styles.bubble,
				background: isDark ? "#0C111D" : "#FFFFFF",
				border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #EAECF0",
				color: isDark ? "#F5F5F6" : "#101828",
				boxShadow: isDark
					? "0 4px 24px rgba(0,0,0,0.5)"
					: "0 4px 24px rgba(16,24,40,0.08)",
				transform: isExiting ? "translateX(110%)" : "translateY(0)",
				opacity: isExiting ? 0 : 1,
				marginBottom: 12,
			}}
			onMouseEnter={() => timerRef.current && clearTimeout(timerRef.current)}
			onMouseLeave={() => {
				if(bubble.autoDismiss !== false && bubble.variant !== "upload"){
					timerRef.current = setTimeout(handleDismiss, 3000)
				}
			}}
		>
		<div style={styles.bubbleInner}>
			{renderIcon()}
			<div style={styles.content}>
				<div style={styles.header}>
					<div style={{ flex: 1 }}>
						<div style={styles.titleRow}>
							<span style={{
								...styles.title,
								color: isDark ? "#F5F5F6" : "#101828",
							}}>
								{bubble.title}
							</span>
							{bubble.badge && (
								<span style={{
									...styles.badge,
									color: isDark ? "#94969C" : "#475467",
									borderLeft: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid #D0D5DD",
								}}>
									{bubble.badge}
								</span>
							)}
							{bubble.timestamp && (
								<span style={{
									...styles.timestamp,
									color: isDark ? "#94969C" : "#475467",
									borderLeft: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid #D0D5DD",
								}}>
									{bubble.timestamp}
								</span>
							)}
						</div>
						<p style={{
							...styles.description,
							color: isDark ? "#94969C" : "#475467",
						}}>
							{bubble.description}
						</p>
					</div>
					<button onClick={handleDismiss} style={styles.closeBtn} aria-label="Close">
						<CloseIcon color={isDark ? "#667085" : "#98A2B3"} />
					</button>
				</div>

				{bubble.variant === "upload" && (
					<div style={styles.progressSection}>
						<div style={{
							...styles.progressTrack,
							background: isDark ? "rgba(255,255,255,0.1)" : "#EAECF0",
						}}>
							<div style={{
								...styles.progressFill,
								width: `${displayProgress}%`,
								background: displayProgress >= 100
									? "#17B26A"
									: isDark
									? "linear-gradient(90deg, #94969C, #F5F5F6)"
									: "linear-gradient(90deg, #444CE7, #6172F3)",
							}} />
						</div>
						<span style={{
							...styles.progressText,
							color: isDark ? "#CECFD2" : "#344054",
						}}>
							{displayProgress}%
						</span>
					</div>
				)}

				{bubble.actions?.length > 0 && (
					<div style={styles.actions}>
						{bubble.actions.map((action, i) => (
							<button
								key={i}
								onClick={() => {
									action.onClick?.()
									if(action.dismissOnClick !== false) handleDismiss()
								}}
								style={
									action.variant === "filled"
										? { ...styles.actionBtn, ...styles.actionFilled, background: filledBg, color: filledColor }
										: { ...styles.actionBtn, ...styles.actionOutlined, borderColor: isDark ? "rgba(255,255,255,0.15)" : "#D0D5DD", color: isDark ? "#CECFD2" : "#344054", background: isDark ? "transparent" : "#FFFFFF" }
								}
							>
								{action.label}
							</button>
						))}
					</div>
				)}
				</div>
			</div>
		</div>
	)
}