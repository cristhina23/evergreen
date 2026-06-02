<script>
	import { testimonials, sectionContent } from '../../data/site.js';
	import Container from '$lib/components/ui/Container.svelte';
	import TestimonialCard from '$lib/components/cards/TestimonialCard.svelte';
</script>

<section class="py-8">
	<Container>
		<h2 class="font-heading md:text-5xl  font-bold text-[var(--color-text-primary)] py-12">
			{sectionContent.testimonials.title}
		</h2>
		<div class="mt-6 grid gap-4 md:grid-cols-3">
			{#each testimonials as testimonial}
				<TestimonialCard {testimonial} />
			{/each}
		</div>
	</Container>
</section>
