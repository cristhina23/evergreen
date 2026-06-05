<script>
	import { Leaf } from 'lucide-svelte';
	import Icon from '@iconify/svelte';

	import { socialLinks, sectionContent } from '../../data/site.js';
</script>

<section class="relative overflow-hidden rounded-3xl bg-(--color-secondary-soft) p-5">
	<Leaf
		class="absolute -bottom-6 -left-4 text-[var(--color-secondary)] opacity-30"
		size={96}
	/>

	<div
		class="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
	>
		<h2
			class="font-heading text-xl font-bold text-[var(--color-secondary)]"
		>
			{sectionContent.social.title}
		</h2>

		<div class="flex gap-3">
			{#each socialLinks as social}
				<a
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.label}
					class="flex size-11 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
				>
					<Icon icon={social.icon} width="22" height="22" />
				</a>
			{/each}
		</div>
	</div>
</section>