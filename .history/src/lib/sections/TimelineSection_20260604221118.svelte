<script>
	import { timeline, sectionContent } from '../../data/site.js';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="py-8 lg:py-12">
	<Container>
		<div class="rounded-4xl bg-(--color-primary-soft) p-6 lg:p-10">
			<!-- HEADER -->
			<div class="mx-auto mb-10 max-w-4xl text-center">
				<span
					class="inline-flex rounded-full bg-(--color-secondary-soft) px-4 py-2 text-sm font-semibold text-(--color-secondary)"
				>
					15+ años de experiencia
				</span>

				<h2
					class="mt-4 font-heading text-4xl font-bold text-(--color-text-primary) lg:text-5xl"
				>
					{sectionContent.timeline.title}
				</h2>

				<p
					class="mx-auto mt-4 max-w-3xl text-base leading-8 text-(--color-text-secondary)"
				>
					{sectionContent.timeline.description}
				</p>
			</div>

			<!-- TIMELINE -->
			<div class="relative">
				<!-- Línea central desktop -->
				<div
					class="absolute top-8 left-0 right-0 hidden h-0.5 bg-(--color-border) lg:block"
				></div>

				<div
					class="grid gap-4 md:grid-cols-2 lg:grid-cols-6"
				>
					{#each timeline as item}
						<article
							class="relative rounded-3xl bg-white p-4 text-center shadow-[0_10px_30px_rgba(15,39,68,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,39,68,0.10)]"
						>
							<!-- Círculo año -->
							<div
								class="relative z-10 mx-auto mb-4 flex size-14 items-center justify-center rounded-full border-2 border-(--color-secondary) bg-white font-bold text-(--color-secondary)"
							>
								{item.year}
							</div>

							<h3
								class="font-heading text-lg font-bold text-(--color-primary)"
							>
								{item.year}
							</h3>

							<p
								class="mt-3 text-sm leading-6 text-(--color-text-secondary)"
							>
								{item.text}
							</p>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</Container>
</section>