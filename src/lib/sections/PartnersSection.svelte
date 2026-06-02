<script>
	import { partners } from '../../data/site.js';
	import PartnerCard from '$lib/components/cards/PartnerCard.svelte';
</script>

<section class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
	{#each partners as partner}
		<PartnerCard {partner} />
	{/each}
</section>
