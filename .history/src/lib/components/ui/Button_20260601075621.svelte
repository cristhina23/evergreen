<script>
	import { getIcon } from '$lib/iconRegistry.js';

	let {
		label,
		href = '/',
		variant = 'primary',
		icon = 'ArrowRight',
		class: className = ''
	} = $props();
	let Icon = $derived(getIcon(icon));

	const styles = {
		primary:
			'bg-[var(--color-secondary)] text-white shadow-[0_16px_35px_rgba(76,175,80,0.28)] hover:bg-[#3f9d43]',
		secondary:
			'border border-[var(--color-primary)] bg-white text-[var(--color-text-primary)] hover:bg-[var(--color-primary-soft)]',
		soft: 'bg-white text-[var(--color-secondary)] shadow-[0_10px_25px_rgba(15,39,68,0.08)] hover:bg-[var(--color-secondary-soft)]',
		ghost: 'text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]'
	};
</script>

<a
	{href}
	class={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${styles[variant]} ${className}`}
>
	<span>{label}</span>
	<Icon size={18} strokeWidth={2.4} />
</a>
