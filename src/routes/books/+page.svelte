<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="grid grid-cols-4 gap-4">
	{#each data.books as book}
		<div class="card p-4 flex-auto">
			<h1>{book.title}</h1>
			<img src={book.book_image} alt={book.title} />

			<button type="button" class="btn-icon variant-ghost"> Wishlist</button>
			<!-- BUTTON SUPPOSED TO ADD THIS BOOK TO YOUR WISHLIST -->
		</div>
	{/each}
</div>

