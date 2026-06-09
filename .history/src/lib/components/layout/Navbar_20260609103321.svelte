<script>
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { Menu, MessageCircle, X } from 'lucide-svelte';
	import { businessInfo } from '../../../data/site.js';

	let open = $state(false);
	let scrolled = $state(false);
	let activeId = $state('inicio');

	const items = [
		{ label: 'Inicio', href: '#inicio', id: 'inicio' },
		{ label: 'Sedes', href: '#sedes', id: 'sedes' },
		{ label: 'Servicios', href: '#servicios', id: 'servicios' },
		{ label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
		{ label: 'Franquicia', href: '#franquicia', id: 'franquicia' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 10;

		const offset = 160;

		const current = [...items]
			.reverse()
			.find((item) => {
				const section = document.getElementById(item.id);

				if (!section) return false;

				return section.offsetTop <= window.scrollY + offset;
			});

		if (current) {
			activeId = current.id;
		}
	}

	function navigate(event, item) {
		event.preventDefault();

		const section = document.getElementById(item.id);

		if (section) {
			const y =
				section.getBoundingClientRect().top +
				window.pageYOffset -
				88;

			window.scrollTo({
				top: y,
				behavior: 'smooth'
			});

			history.replaceState(null, '', item.href);

			activeId = item.id;
		}

		open = false;
	}

	onMount(() => {
		handleScroll();
	});
</script>

<svelte:window
	onscroll={handleScroll}
	onresize={handleScroll}
/>

<header
	class={`sticky top-0 z-40 bg-white transition-all duration-300 ${
		scrolled ? 'shadow-[0_10px_35px_rgba(15,39,68,0.08)]' : 'shadow-[0_1px_0_rgba(15,39,68,0.06)]'
	}`}
>
	<nav
		class="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
		aria-label="Navegacion principal"
	>
		<a
			href="#inicio"
			class="flex items-center"
			aria-label={`${businessInfo.name} ${businessInfo.subtitle}`}
			onclick={(event) => navigate(event, items[0])}
		>
			<img
				src="/logo.png"
				alt={`${businessInfo.name} ${businessInfo.subtitle}`}
				class="h-16 w-auto max-w-47.5 object-contain sm:h-[70px] sm:max-w-[225px] lg:h-[74px] lg:max-w-[250px]"
			/>
		</a>

		<div class="hidden items-center gap-9 lg:flex xl:gap-11">
			{#each items as item}
				<a
					href={item.href}
					class={`group relative text-sm font-semibold transition-colors duration-200 ${
						activeId === item.id
							? 'text-[var(--color-secondary)]'
							: 'text-[var(--color-text-primary)] hover:text-[var(--color-secondary)]'
					}`}
					aria-current={activeId === item.id ? 'page' : undefined}
					onclick={(event) => navigate(event, item)}
				>
					{item.label}
					<span
						class={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-[var(--color-secondary)] transition-all duration-200 ${
							activeId === item.id ? 'w-full' : 'w-0 group-hover:w-full'
						}`}
					></span>
				</a>
			{/each}
		</div>

		<a
			href={businessInfo.whatsappUrl}
			target="_blank"
			rel="noreferrer"
			aria-label={businessInfo.whatsappLabel}
			onccick=
			class="hidden min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-secondary)] px-7 text-sm font-bold text-white shadow-[0_12px_28px_rgba(76,175,80,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#43a047] hover:shadow-[0_16px_34px_rgba(76,175,80,0.28)] md:inline-flex"
		>
			<MessageCircle size={18} strokeWidth={2.4} />
			{businessInfo.whatsappLabel}
		</a>

		<button
			class="flex size-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] shadow-[0_8px_24px_rgba(15,39,68,0.06)] transition hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] lg:hidden"
			aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			{#if open}<X size={22} />{:else}<Menu size={22} />{/if}
		</button>
	</nav>

	{#if open}
		<div
			class="border-t border-[var(--color-border)] bg-white/98 px-4 py-4 shadow-[0_24px_50px_rgba(15,39,68,0.12)] backdrop-blur-xl lg:hidden"
			transition:slide={{ duration: 220 }}
		>
			<div class="mx-auto grid max-w-7xl gap-1" transition:fade={{ duration: 180 }}>
				{#each items as item}
					<a
						href={item.href}
						class={`rounded-2xl px-4 py-3.5 text-base font-semibold transition ${
							activeId === item.id
								? 'bg-[var(--color-secondary)] text-white'
								: 'text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-secondary)]'
						}`}
						aria-current={activeId === item.id ? 'page' : undefined}
						onclick={(event) => navigate(event, item)}
					>
						{item.label}
					</a>
				{/each}
				<a
					href={businessInfo.whatsappUrl}
					target="_blank"
					rel="noreferrer"
					class="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-secondary)] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(76,175,80,0.22)]"
					onclick={() => (open = false)}
				>
					<MessageCircle size={18} strokeWidth={2.4} />
					{businessInfo.whatsappLabel}
				</a>
			</div>
		</div>
	{/if}
</header>
