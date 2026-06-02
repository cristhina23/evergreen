<script>
	import { Plus } from 'lucide-svelte';
	import { faq, sectionContent } from '../../data/site.js';
</script>

<section class="rounded-3xl bg-white p-5 shadow-[0_18px_50px_rgba(15,39,68,0.06)]">
	<h2 class="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
		{sectionContent.faq.title}
	</h2>
	<div class="mt-5 grid gap-3">
		{#each faq as question}
			<button
				class="flex items-center justify-between rounded-xl border border-[var(--color-border)] px-4 py-4 text-left text-sm font-bold text-[var(--color-text-primary)]"
			>
				<span>{question}</span>
				<Plus size={18} />
			</button>
		{/each}
	</div>
</section>
