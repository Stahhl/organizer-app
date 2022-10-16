<script lang="ts">
	import Button from './Button.svelte';
	import { TodoFormOpen } from '$lib/ts/stores';

    function handleClick(){
        console.log('false')
        TodoFormOpen.set(false)
    }
</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
	<div class="bg-gray-900 text-white rounded-md px-8 py-10 relative max-w-lg opacity-80">
		<!-- yolo
		<form on:submit|preventDefault={() => TodoFormOpen.set(false)}>
			<Button>Close</Button>
		</form> -->
        <button on:click={handleClick}>lol</button>
	</div>
</div>
