<script>
	import { Plus, Minus } from 'lucide-svelte';
	import { faq, sectionContent } from '../../data/site.js';

	let openIndex = $state(0);
</script>

<section class="rounded-3xl bg-white p-5 shadow-[0_18px_50px_rgba(15,39,68,0.06)] lg:p-6">
	<h2
		class="font-heading md:text-5xl font-bold text-[var(--color-text-primary)] py-8"
	>
		{sectionContent.faq.title}
	</h2>

	<div class="mt-5 space-y-3">
		{#each faq as item, index}
			<div
				class="overflow-hidden rounded-2xl border border-[var(--color-border)] transition-all"
			>
				<button
					onclick={() =>
						(openIndex =
							openIndex === index ? -1 : index)}
					class="flex w-full items-center justify-between px-5 py-4 text-left"
				>
					<span
						class="pr-4 text-sm font-bold text-[var(--color-text-primary)] lg:text-base"
					>
						{item.question}
					</span>

					{#if openIndex === index}
						<Minus
							size={18}
							class="shrink-0 text-[var(--color-secondary)]"
						/>
					{:else}
						<Plus
							size={18}
							class="shrink-0 text-[var(--color-text-secondary)]"
						/>
					{/if}
				</button>

				{#if openIndex === index}
					<div
						class="border-t border-[var(--color-border)] px-5 py-4"
					>
						<p
							class="text-sm leading-7 text-[var(--color-text-secondary)]"
						>
							{item.answer}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>