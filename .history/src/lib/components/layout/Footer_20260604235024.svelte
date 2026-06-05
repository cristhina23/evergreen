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
	class="mx-auto max-w-7xl border-t border-white/15 px-4 py-5 sm:px-6 lg:px-8"
>
	<div
		class="flex flex-col items-center justify-between gap-4 text-xs text-white/75 md:flex-row"
	>
		<p>{footerData.copyright}</p>

		<div class="flex flex-wrap gap-4">
			<a href="/">{footerData.privacy}</a>
			<a href="/">{footerData.terms}</a>
		</div>
	</div>

	<a
			href="https://cctechsolutions.com"
			target="_blank"
			rel="noopener noreferrer"
			class="font-semibold text-white transition hover:text-white/80"
	>

	<p class="mt-5 flex items-center justify-center gap-2 text-sm text-white/70">
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

		
			CC Tech Solutions
		
	</p>
	</a>
</div>
</footer>
<style>
.heart-wrapper {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 18px;
}

.heart-beat {
	position: relative;
	z-index: 2;
	animation: heartbeat 2.2s infinite;
}

.heart-ripple {
	position: absolute;
	inset: 0;
	border: 1px solid rgba(255,255,255,.45);
	border-radius: 9999px;
	animation: ripple 2.2s infinite;
}

@keyframes heartbeat {
	0%,100% {
		transform: scale(1);
	}

	15% {
		transform: scale(1.3);
	}

	25% {
		transform: scale(1);
	}

	40% {
		transform: scale(1.2);
	}

	50% {
		transform: scale(1);
	}
}

@keyframes ripple {
	0% {
		transform: scale(.8);
		opacity: .7;
	}

	100% {
		transform: scale(3.5);
		opacity: 0;
	}
}
</style>