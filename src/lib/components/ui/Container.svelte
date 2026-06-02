<script>
	let { class: className = '', children } = $props();
</script>

<div class={`mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8 ${className}`}>
	{@render children?.()}
</div>
