<script>
	import { onMount } from 'svelte';
	import { X } from 'lucide-svelte';
  import { Check } from 'lucide-svelte';

	let { open = false, onClose = () => {} } = $props();

	let alreadySubmitted = $state(false);
	let loading = $state(false);

	function closeModal() {
		onClose();
	}

	function handleKeydown(event) {
		if (event.key === 'Escape' && open) {
			closeModal();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);

		alreadySubmitted =
			localStorage.getItem('evergreen-franchise-form-sent') === 'true';

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	$effect(() => {
		document.body.style.overflow = open ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	});

	async function handleSubmit(event) {
		event.preventDefault();

		if (alreadySubmitted) return;

		loading = true;

		try {
			const formData = new FormData(event.currentTarget);

			const response = await fetch(
				'https://formsubmit.co/ajax/viszellechacon@gmail.com',
				{
					method: 'POST',
					body: formData
				}
			);

			if (response.ok) {
				localStorage.setItem(
					'evergreen-franchise-form-sent',
					'true'
				);

				localStorage.setItem(
					'evergreen-franchise-form-date',
					new Date().toISOString()
				);

				alreadySubmitted = true;
			}
		} catch (error) {
			console.error(error);
			alert(
				'No pudimos enviar tu solicitud. Por favor intenta nuevamente.'
			);
		} finally {
			loading = false;
		}
	}
</script>

{#if open}
	<div class="fixed inset-0 z-[999] flex items-center justify-center p-4">
		<button
			type="button"
			class="absolute inset-0 bg-black/60 backdrop-blur-sm"
			onclick={closeModal}
			aria-label="Cerrar modal"
		></button>

		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="franchise-modal-title"
			class="relative z-10 w-full max-w-2xl rounded-4xl bg-white shadow-[0_30px_80px_rgba(15,39,68,0.25)]"
		>
			<div
				class="custom-scrollbar max-h-[85vh] overflow-y-auto p-6 pr-4 sm:p-8"
			>
				<button
					type="button"
					onclick={closeModal}
					class="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full bg-(--color-surface)"
					aria-label="Cerrar formulario"
				>
					<X size={20} />
				</button>

				{#if alreadySubmitted}
					<div class="py-12 text-center">
						<div
							class="mx-auto flex size-20 items-center justify-center rounded-full bg-(--color-secondary-soft) text-4xl"
						>
							<Check size={40} color="var(--color-secondary)" />
						</div>

						<h2
							class="mt-6 font-heading text-3xl font-bold text-(--color-text-primary)"
						>
							Solicitud recibida
						</h2>

						<p
							class="mx-auto mt-4 max-w-md text-sm leading-7 text-(--color-text-secondary)"
						>
							Gracias por tu interés en una franquicia Evergreen.

							<br /><br />

							Ya recibimos tu información correctamente y uno de
							nuestros asesores se comunicará contigo muy pronto.
						</p>

						<button
							type="button"
							onclick={closeModal}
							class="mt-8 rounded-full bg-(--color-secondary) px-6 py-3 font-semibold text-white"
						>
							Cerrar
						</button>
					</div>
				{:else}
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
							class="mt-4 text-sm leading-7 text-(--color-text-secondary)"
						>
							Completa el formulario y recibe información sobre
							inversión, beneficios y requisitos para operar una
							franquicia Evergreen.
						</p>
					</div>

					<form
						onsubmit={handleSubmit}
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

						<div>
							<label for="name" class="mb-2 block font-semibold">
								Nombre completo *
							</label>

							<input
								id="name"
								name="Nombre"
								required
								type="text"
								autocomplete="name"
								class="w-full rounded-2xl border border-(--color-border) px-4 py-3"
							/>
						</div>

						<div>
							<label for="email" class="mb-2 block font-semibold">
								Correo electrónico *
							</label>

							<input
								id="email"
								name="Correo"
								required
								type="email"
								autocomplete="email"
								class="w-full rounded-2xl border border-(--color-border) px-4 py-3"
							/>
						</div>

						<div>
							<label for="phone" class="mb-2 block font-semibold">
								Teléfono *
							</label>

							<input
								id="phone"
								name="Telefono"
								required
								type="tel"
								autocomplete="tel"
								class="w-full rounded-2xl border border-(--color-border) px-4 py-3"
							/>
						</div>

						<div>
							<label for="city" class="mb-2 block font-semibold">
								Ciudad *
							</label>

							<input
								id="city"
								name="Ciudad"
								required
								type="text"
								autocomplete="address-level2"
								class="w-full rounded-2xl border border-(--color-border) px-4 py-3"
							/>
						</div>

						<div class="flex items-start gap-3">
							<input
								id="consent"
								type="checkbox"
								required
							/>

							<label
								for="consent"
								class="text-sm leading-6 text-(--color-text-secondary)"
							>
								Acepto ser contactado para recibir información
								sobre la franquicia Evergreen.
							</label>
						</div>

						<button
							type="submit"
							disabled={loading}
							class="w-full rounded-full bg-(--color-secondary) px-6 py-3 font-semibold text-white disabled:opacity-60"
						>
							{#if loading}
								Enviando...
							{:else}
								Solicitar información
							{/if}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.custom-scrollbar {
		scrollbar-width: thin;
		scrollbar-color: var(--color-secondary) transparent;
	}

	.custom-scrollbar::-webkit-scrollbar {
		width: 6px;
	}

	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}

	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: linear-gradient(
			180deg,
			var(--color-secondary),
			var(--color-primary)
		);
		border-radius: 999px;
	}
</style>