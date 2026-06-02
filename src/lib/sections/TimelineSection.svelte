<script>
	import { timeline, sectionContent } from '../../data/site.js';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="py-2">
	<Container>
		<div class="rounded-3xl bg-[var(--color-surface)] p-6">
			<div class="grid gap-6 lg:grid-cols-[0.8fr_2.2fr]">
				<div>
					<h2 class="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
						{sectionContent.timeline.title}
					</h2>
					<p class="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
						{sectionContent.timeline.description}
					</p>
					<a
						href="/"
						class="mt-4 inline-flex rounded-full border border-[var(--color-primary)] px-4 py-2 text-sm font-bold text-[var(--color-primary)]"
						>{sectionContent.timeline.cta}</a
					>
				</div>
				<div class="grid gap-5 sm:grid-cols-5">
					{#each timeline as item}
						<article class="relative rounded-2xl bg-white p-4 text-center shadow-sm">
							<div
								class="mx-auto mb-3 flex size-10 items-center justify-center rounded-full border border-[var(--color-secondary)] bg-[var(--color-secondary-soft)] text-sm font-bold text-[var(--color-secondary)]"
							>
								{item.year.slice(2)}
							</div>
							<h3 class="font-heading text-sm font-bold text-[var(--color-primary)]">
								{item.year}
							</h3>
							<p class="mt-2 text-xs leading-5 text-[var(--color-text-secondary)]">{item.text}</p>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</Container>
</section>
