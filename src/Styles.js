export const iconBgMap = {
	light: {
		success: "#ECFDF3", upload: "#F4F3FF", update: "#F2F4F7",
		info: "#F4F3FF", warning: "#FFFAEB", error: "#FEF3F2",
	},
	dark: {
		success: "rgba(23,178,106,0.15)", upload: "rgba(105,65,198,0.15)",
		update: "rgba(255,255,255,0.1)", info: "rgba(105,65,198,0.15)",
		warning: "rgba(220,104,3,0.15)", error: "rgba(240,68,56,0.15)",
	}
}

export const iconBorderMap = {
	light: {
		success: "#D1FADF", upload: "#EBE9FE", update: "#EAECF0",
		info: "#EBE9FE", warning: "#FEF0C7", error: "#FEE4E2",
	},
	dark: {
		success: "rgba(23,178,106,0.25)", upload: "rgba(105,65,198,0.25)",
		update: "rgba(255,255,255,0.08)", info: "rgba(105,65,198,0.25)",
		warning: "rgba(220,104,3,0.25)", error: "rgba(240,68,56,0.25)",
	}
}

export const filledBgMap = {
	success: "#17B26A", upload: "#6941C6", info: "#444CE7",
	warning: "#DC6803", error: "#F04438", message: "#444CE7", update: "#101828",
}

export const styles = {
	container: {
		position: "fixed",
		zIndex: 9999,
		display: "flex",
		flexDirection: "column",
		pointerEvents: "none",
	},
	bubble: {
		borderRadius: 12,
		padding: 16,
		width: "fit-content",
		minWidth: 280,
		maxWidth: 400,
		transition: "all 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
		pointerEvents: "auto",
	},
	bubbleInner: {
		display: "flex",
		gap: 12,
		alignItems: "flex-start",
	},
	iconWrap: {
		width: 40,
		height: 40,
		borderRadius: 10,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
	},
	avatarWrap: {
		position: "relative",
		flexShrink: 0,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		background: "linear-gradient(135deg, #E0C3FC, #8EC5FC)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: 14,
		fontWeight: 600,
		color: "#344054",
	},
	onlineDot: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: 12,
		height: 12,
		borderRadius: 6,
		background: "#17B26A",
	},
	content: {
		flex: 1,
		minWidth: 0,
	},
	header: {
		display: "flex",
		gap: 8,
		alignItems: "flex-start",
	},
	titleRow: {
		display: "flex",
		alignItems: "center",
		flexWrap: "wrap",
	},
	title: {
		fontSize: 14,
		fontWeight: 600,
		lineHeight: 1.4,
	},
	badge: {
		fontSize: 12,
		fontWeight: 500,
		marginLeft: 8,
		paddingLeft: 8,
	},
	timestamp: {
		fontSize: 12,
		fontWeight: 400,
		marginLeft: 8,
		paddingLeft: 8,
	},
	description: {
		fontSize: 13,
		lineHeight: 1.5,
		marginTop: 2,
	},
	closeBtn: {
		background: "none",
		border: "none",
		padding: 2,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		borderRadius: 4,
		opacity: 0.7,
		marginTop: -2,
		cursor: "pointer",
	},
	progressSection: {
		display: "flex",
		alignItems: "center",
		gap: 10,
		marginTop: 8,
	},
	progressTrack: {
		flex: 1,
		height: 6,
		borderRadius: 3,
		overflow: "hidden",
	},
	progressFill: {
		height: "100%",
		borderRadius: 3,
		transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
	},
	progressText: {
		fontSize: 13,
		fontWeight: 600,
		minWidth: 36,
		textAlign: "right",
	},
	actions: {
		display: "flex",
		gap: 8,
		marginTop: 12,
		alignItems: "center",
	},
	actionBtn: {
		fontSize: 13,
		fontWeight: 600,
		border: "none",
		background: "none",
		padding: 0,
		transition: "all 0.15s ease",
		cursor: "pointer",
	},
	actionOutlined: {
		padding: "7px 14px",
		borderRadius: 8,
		border: "1px solid",
	},
	actionFilled: {
		padding: "7px 14px",
		borderRadius: 8,
		border: "none",
	}
}