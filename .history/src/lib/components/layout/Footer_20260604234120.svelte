<script>
	import { Leaf, Mail, MapPin, MessageCircle, Phone } from 'lucide-svelte';
	import { businessInfo, footerData, socialLinks } from '../../../data/site.js';
	import Icon from '@iconify/svelte';
	import { Heart } from 'lucide-svelte';

</script>

<footer class="bg-gradient-to-br from-[#057485] via-[#069057] to-[#3ba916] text-white">
	<div
		class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr] lg:px-8"
	>
		<div>
			<div class="mb-5 flex items-center gap-3">
			
				<div class="flex items-center gap-3 bg-white/45 p-3 rounded-2xl">
					<img src="/logo.png" alt="Logo de lavanderias evergreen" class="w-50">
				</div>
			</div>
			<p class="max-w-sm text-sm leading-7 text-white/80">{footerData.description}</p>
			<div class="mt-5 flex gap-3">
				{#each socialLinks as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.label}
						class="flex size-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
					>
						<Icon icon={social.icon} width="18" height="18" />
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h3 class="mb-4 font-bold">{footerData.linksTitle}</h3>
			<div class="grid gap-3 text-sm text-white/80">
				{#each footerData.links as link, index}
					<a href={footerData.linkTargets[index]} class="hover:text-white">{link}</a>
				{/each}
			</div>
		</div>

		<div>
			<h3 class="mb-4 font-bold">{footerData.servicesTitle}</h3>
			<div class="grid gap-3 text-sm text-white/80">
				{#each footerData.services as service}<a href="#servicios" class="hover:text-white"
						>{service}</a
					>{/each}
			</div>
		</div>

		<div>
			<h3 class="mb-4 font-bold">{footerData.whatsappTitle}</h3>
			<div class="grid gap-3 text-sm text-white/80">
				<p class="flex gap-2"><Phone size={17} /> {businessInfo.phone}</p>
				
				<p class="flex gap-2"><MapPin size={17} /> {businessInfo.address}</p>
			</div>
			<p class="mt-4 text-sm leading-6 text-white/80">{footerData.whatsappText}</p>
			<a
				href={businessInfo.whatsappUrl}
				target="_blank"
				rel="noreferrer"
				class="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[var(--color-secondary)]"
			>
				<MessageCircle size={18} />
				{businessInfo.whatsappLabel}
			</a>
		</div>
	</div>
	<div
		class="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/15 px-4 py-5 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
	>
		<p>{footerData.copyright}</p>
		<div class="flex flex-wrap gap-4">
			<a href="/">{footerData.privacy}</a>
			<a href="/">{footerData.terms}</a>
		</div>
	</div>
	<a
		href={businessInfo.whatsappUrl}
		target="_blank"
		rel="noreferrer"
		class="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white shadow-[0_16px_35px_rgba(76,175,80,0.35)]"
		aria-label={businessInfo.whatsappLabel}
	>
		<MessageCircle size={28} />
	</a>
	<p class="mt-1 flex items-center text-c gap-2 text-white/60">
	Hecho con

	<span class="heart-wrapper">
		<Heart
			size={14}
			fill="currentColor"
			class="heart-beat text-white"
		/>
		<span class="heart-ripple"></span>
	</span>

	por

	<a
		href="https://cctechsolutions.com"
		target="_blank"
		rel="noopener noreferrer"
		class="font-semibold text-white/80 transition hover:text-white"
	>
		CC Tech Solutions
	</a>
</p>
</footer>
<style>
	.heart-wrapper {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.heart-beat {
		animation: heartbeat 2s ease-in-out infinite;
		transform-origin: center;
		z-index: 2;
	}

	.heart-ripple {
		position: absolute;
		width: 14px;
		height: 14px;
		border-radius: 9999px;
		background: rgba(255, 255, 255, 0.25);
		animation: ripple 2s ease-out infinite;
		z-index: 1;
	}

	@keyframes heartbeat {
		0%,
		100% {
			transform: scale(1);
		}

		15% {
			transform: scale(1.18);
		}

		30% {
			transform: scale(1);
		}

		45% {
			transform: scale(1.12);
		}

		60% {
			transform: scale(1);
		}
	}

	@keyframes ripple {
		0% {
			transform: scale(1);
			opacity: 0.45;
		}

		70% {
			transform: scale(2.8);
			opacity: 0;
		}

		100% {
			transform: scale(2.8);
			opacity: 0;
		}
	}
</style>