<script>
	import { stats } from '../../data/site.js';
	import Container from '$lib/components/ui/Container.svelte';
	import StatCard from '$lib/components/cards/StatCard.svelte';
</script>

<section class="relative z-20 -mt-8">
	<Container>
		<div
			class="rounded-3xl border border-[var(--color-border)] bg-white px-5 py-2 shadow-[0_24px_70px_rgba(15,39,68,0.12)] sm:grid sm:grid-cols-2 sm:py-5 lg:grid-cols-6"
		>
			{#each stats as stat}
				<StatCard {stat} />
			{/each}
		</div>
	</Container>
</section>
