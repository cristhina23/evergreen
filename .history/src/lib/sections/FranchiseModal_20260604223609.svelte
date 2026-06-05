<script>
	import { onMount } from 'svelte';
	import { X } from 'lucide-svelte';

	let { open = false, onClose = () => {} } = $props();

	function closeModal() {
		onClose();
	}

	function handleKeydown(event) {
		if (event.key === 'Escape' && open) {
			closeModal();
		}
	}

	$effect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	});

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
			document.body.style.overflow = '';
		};
	});
</script>

{#if open}
	<div class="fixed inset-0 z-[999] flex items-center justify-center p-4">
		<!-- Backdrop -->
		<button
			type="button"
			class="absolute inset-0 bg-black/60 backdrop-blur-sm"
			onclick={closeModal}
			aria-label="Cerrar modal"
		></button>

		<!-- Modal -->
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="franchise-modal-title"
			class="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(15,39,68,0.25)] sm:p-8"
		>
			<button
				type="button"
				onclick={closeModal}
				aria-label="Cerrar formulario"
				class="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-(--color-text-secondary) transition hover:bg-[var(--color-border)]"
			>
				<X size={20} />
			</button>

			<div class="pr-10">
				<p
					class="text-xs font-bold tracking-[0.15em] uppercase text-(--color-secondary)"
				>
					Franquicias Evergreen
				</p>

				<h2
					id="franchise-modal-title"
					class="mt-2 font-heading text-3xl font-bold text-(--color-text-primary)"
				>
					Solicita información
				</h2>

				<p
					class="mt-3 text-sm leading-7 text-(--color-text-secondary)"
				>
					Completa el formulario y uno de nuestros asesores se pondrá
					en contacto contigo para brindarte información sobre la
					franquicia, inversión estimada y requisitos.
				</p>

				<p
					class="mt-4 text-xs font-medium text-(--color-text-secondary)"
				>
					Los campos marcados con * son obligatorios.
				</p>
			</div>

			<form
				action="https://formsubmit.co/viszellechacon@gmail.com"
				method="POST"
				class="mt-8 space-y-5"
			>
				<input
					type="hidden"
					name="_subject"
					value="Nuevo interesado en Franquicia Evergreen"
				/>

				<input
					type="hidden"
					name="_captcha"
					value="false"
				/>

				<input
					type="hidden"
					name="_template"
					value="table"
				/>

				<input
					type="hidden"
					name="_next"
					value="https://evergreenlavanderias.com/gracias"
				/>

				<div>
					<label
						for="name"
						class="mb-2 block text-sm font-semibold text-(--color-text-primary)"
					>
						Nombre completo *
					</label>

					<input
						id="name"
						name="Nombre"
						type="text"
						required
						autocomplete="name"
						class="w-full rounded-2xl border border-(--color-border) px-4 py-3 outline-none transition focus:border-(--color-secondary) focus:ring-2 focus:ring-(--color-secondary)/20"
					/>
				</div>

				<div>
					<label
						for="email"
						class="mb-2 block text-sm font-semibold text-(--color-text-primary)"
					>
						Correo electrónico *
					</label>

					<input
						id="email"
						name="Correo"
						type="email"
						required
						autocomplete="email"
						class="w-full rounded-2xl border border-(--color-border) px-4 py-3 outline-none transition focus:border-(--color-secondary) focus:ring-2 focus:ring-(--color-secondary)/20"
					/>
				</div>

				<div>
					<label
						for="phone"
						class="mb-2 block text-sm font-semibold text-(--color-text-primary)"
					>
						Teléfono *
					</label>

					<input
						id="phone"
						name="Telefono"
						type="tel"
						required
						autocomplete="tel"
						class="w-full rounded-2xl border border-(--color-border) px-4 py-3 outline-none transition focus:border-(--color-secondary) focus:ring-2 focus:ring-(--color-secondary)/20"
					/>
				</div>

				<div>
					<label
						for="city"
						class="mb-2 block text-sm font-semibold text-(--color-text-primary)"
					>
						Ciudad *
					</label>

					<input
						id="city"
						name="Ciudad"
						type="text"
						required
						autocomplete="address-level2"
						class="w-full rounded-2xl border border-(--color-border) px-4 py-3 outline-none transition focus:border-(--color-secondary) focus:ring-2 focus:ring-(--color-secondary)/20"
					/>
				</div>

				<div class="flex items-start gap-3">
					<input
						id="consent"
						name="Consentimiento"
						type="checkbox"
						required
						class="mt-1"
					/>

					<label
						for="consent"
						class="text-sm leading-6 text-(--color-text-secondary)"
					>
						Acepto ser contactado para recibir información sobre la
						franquicia Evergreen.
					</label>
				</div>

				<button
					type="submit"
					class="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-secondary)] px-6 text-sm font-bold text-white shadow-[0_16px_35px_rgba(76,175,80,0.28)] transition hover:bg-[#43a047]"
				>
					Solicitar información
				</button>
			</form>
		</div>
	</div>
{/if}