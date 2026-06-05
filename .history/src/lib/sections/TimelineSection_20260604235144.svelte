<script>
	import { timeline, sectionContent } from '../../data/site.js';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="py-8 lg:py-12">
	<Container>
		<div class="rounded-4xl bg-(--color-primary-soft) p-6 lg:p-10">

			<!-- HEADER -->
			<div class="mb-12 text-center">
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
			<div class="overflow-x-auto pb-2">
				<div class="relative md:min-w-300">

					<div
						class="absolute top-7 left-0 right-0 h-0.5 bg-(--color-border)"
					></div>

					<div class="grid grid-cols-1 md:grid-cols-6 gap-4">
						{#each timeline as item}
							<article
								class="relative z-10 rounded-3xl bg-white p-5 text-center shadow-[0_10px_30px_rgba(15,39,68,0.05)]"
							>
								<div
									class="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border-2 border-(--color-secondary) bg-white font-bold text-(--color-secondary)"
								>
									{item.year}
								</div>

								<h3
									class="font-heading text-lg font-bold text-(--color-primary)"
								>
									{item.year}
								</h3>

								<p class="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
										{#if item.link}
											{item.text}
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												class="font-semibold text-[var(--color-primary)] hover:underline"
											>
												{item.linkText}
											</a>
											{item.textAfter}
										{:else}
											{item.text}
										{/if}
									</p>
							</article>
						{/each}
					</div>

				</div>
			</div>

		</div>
	</Container>
</section>