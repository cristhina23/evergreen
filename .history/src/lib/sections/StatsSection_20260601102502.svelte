<script>
	import { stats } from '../../data/site.js';
	import StatCard from '$lib/components/cards/StatCard.svelte';
</script>

<section class="relative z-20 -mt-8 px-4 lg:px-8">
	<div
		class="w-full overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-white shadow-[0_24px_70px_rgba(15,39,68,0.12)]"
	>
		<div class="grid grid-cols-2 lg:grid-cols-4">
			{#each stats as stat, index}
				<div
					class:border-r={index < stats.length - 1}
					class="border-[var(--color-border)]"
				>
					<StatCard {stat} />
				</div>
			{/each}
		</div>
	</div>
</section>