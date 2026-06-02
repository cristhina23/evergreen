<script>
	import { Leaf, Mail, MapPin, MessageCircle, Phone } from 'lucide-svelte';
	import { businessInfo, footerData, socialLinks } from '../../../data/site.js';
	import { getIcon } from '$lib/iconRegistry.js';
</script>

<footer class="bg-gradient-to-br from-[#057485] via-[#069057] to-[#3ba916] text-white">
	<div
		class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr] lg:px-8"
	>
		<div>
			<div class="mb-5 flex items-center gap-3">
			
				<div>
					<img src="/logo.png" alt="Logo de lavanderias evergreen" class="w">
				</div>
			</div>
			<p class="max-w-sm text-sm leading-7 text-white/80">{footerData.description}</p>
			<div class="mt-5 flex gap-3">
				{#each socialLinks as social}
					{@const Icon = getIcon(social.icon)}
					<a
						href={social.url}
						aria-label={social.label}
						class="flex size-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
					>
						<Icon size={18} />
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
				<p class="flex gap-2"><Mail size={17} /> {businessInfo.email}</p>
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
</footer>
