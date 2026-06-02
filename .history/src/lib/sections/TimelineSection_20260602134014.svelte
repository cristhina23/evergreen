<script>
	import { timeline, sectionContent } from '../../data/site.js';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="py-8 lg:py-12">
	<Container>
		<div class="rounded-[32px] bg-[var(--color-surface)] p-6 lg:p-8">
			<div class="grid gap-8 lg:grid-cols-[0.9fr_2.1fr] lg:items-center">
				<!-- CONTENIDO -->
				<div>
					<span
						class="inline-flex rounded-full bg-[var(--color-secondary-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-secondary)]"
					>
						15+ años de experiencia
					</span>

					<h2
						class="mt-4 font-heading text-3xl font-bold text-[var(--color-text-primary)] lg:text-4xl"
					>
						{sectionContent.timeline.title}
					</h2>

					<p
						class="mt-4 text-base leading-8 text-[var(--color-text-secondary)]"
					>
						{sectionContent.timeline.description}
					</p>

					<a
						href="/"
						class="mt-6 inline-flex items-center rounded-full border border-[var(--color-primary)] px-5 py-3 text-sm font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
					>
						{sectionContent.timeline.cta}
					</a>
				</div>

				<!-- TIMELINE -->
				<div class="relative">
					<!-- Línea desktop -->
					<div
						class="absolute top-8 left-0 right-0 hidden h-[2px] bg-[var(--color-border)] lg:block"
					></div>

					<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
						{#each timeline as item}
							<article
								class="relative rounded-3xl bg-white p-5 text-center shadow-[0_10px_30px_rgba(15,39,68,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,39,68,0.10)]"
							>
								<!-- Punto timeline -->
								<div
									class="relative z-10 mx-auto mb-4 flex size-14 items-center justify-center rounded-full border-2 border-[var(--color-secondary)] bg-white font-bold text-[var(--color-secondary)]"
								>
									{item.year}
								</div>

								<h3
									class="font-heading text-lg font-bold text-[var(--color-primary)]"
								>
									{item.year}
								</h3>

								<p
									class="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]"
								>
									{item.text}
								</p>
							</article>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</Container>
</section>