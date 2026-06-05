<script>
	import { onMount } from 'svelte';
	import { X } from 'lucide-svelte';

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