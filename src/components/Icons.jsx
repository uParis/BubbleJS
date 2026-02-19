export const CheckCircleIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M10 18a8 8 0 100-16 8 8 0 000 16z" fill="#17B26A" />
		<path d="M6.5 10l2.5 2.5L13.5 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

export const UploadIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5" stroke="#6941C6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M3 13v1a3 3 0 003 3h8a3 3 0 003-3v-1" stroke="#6941C6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

export const UpdateIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M10 1.667A8.333 8.333 0 1018.333 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
		<path d="M10 5v5l3.333 1.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
		<circle cx="17" cy="3" r="0.8" fill="currentColor" />
	</svg>
)

export const CloseIcon = ({ color = "currentColor" }) => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M12 4L4 12M4 4l8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
	</svg>
)

export const InfoIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<circle cx="10" cy="10" r="8" stroke="#6941C6" strokeWidth="1.5" />
		<path d="M10 9v4.5" stroke="#6941C6" strokeWidth="1.8" strokeLinecap="round" />
		<circle cx="10" cy="6.75" r="1" fill="#6941C6" />
	</svg>
)

export const WarningIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M10 2L1.5 17h17L10 2z" stroke="#DC6803" strokeWidth="1.5" strokeLinejoin="round" />
		<path d="M10 8v3.5" stroke="#DC6803" strokeWidth="1.8" strokeLinecap="round" />
		<circle cx="10" cy="14" r="0.8" fill="#DC6803" />
	</svg>
)

export const ErrorIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<circle cx="10" cy="10" r="8" stroke="#F04438" strokeWidth="1.5" />
		<path d="M12.5 7.5l-5 5M7.5 7.5l5 5" stroke="#F04438" strokeWidth="1.5" strokeLinecap="round" />
	</svg>
)