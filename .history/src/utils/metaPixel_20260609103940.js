export function trackWhatsapp() {
	window.fbq?.('track', 'Contact');
}

export function trackLead() {
	window.fbq?.('track', 'Lead');
}

export function trackLocation() {
	window.fbq?.('track', 'FindLocation');
}

export function trackOpenFranchiseModal() {
	window.fbq?.('trackCustom', 'OpenFranchiseModal');
}

export function trackFranchiseLead() {
	window.fbq?.('trackCustom', 'FranchiseLead');
	window.fbq?.('track', 'Lead');
}