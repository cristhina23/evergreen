<script>
	import { Leaf } from 'lucide-svelte';
	import { socialLinks, sectionContent } from '../../data/site.js';
	import { getIcon } from '$lib/iconRegistry.js';
</script>

<section class="relative overflow-hidden rounded-3xl bg-[var(--color-secondary-soft)] p-5">
	<Leaf class="absolute -bottom-6 -left-4 text-[var(--color-secondary)] opacity-30" size={96} />
	<div class="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
		<h2 class="font-heading text-xl font-bold text-[var(--color-secondary)]">
			{sectionContent.social.title}
		</h2>
		<div class="flex gap-3">
			{#each socialLinks as social}
				{@const Icon = getIcon(social.icon)}
				<a
					href={social.url}
					aria-label={social.label}
					class="flex size-11 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-sm"
				>
					<Icon size={22} />
				</a>
			{/each}
		</div>
	</div>
</section>
