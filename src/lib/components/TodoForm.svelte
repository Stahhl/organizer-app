<script lang="ts">
	import Button from './Button.svelte';
	import { TodoFormOpen, AddTodo } from '$lib/ts/stores';
	import type { Todo } from '$lib/ts/types';

	export let todo: Todo = {title: '', description: '', done: false};

	function handleClick() {
		console.log('false');
		AddTodo(todo);
		TodoFormOpen.set(false);
	}
</script>

<div
	class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center"
	on:click={handleClick}
>
	<div
		class="bg-gray-900 rounded-md px-8 py-10 relative max-w-lg opacity-80"
		on:click|stopPropagation
	>
		<form on:submit={handleClick} class="flex flex-col">
			<label class="text-white">Title</label>
			<input type="text" bind:value={todo.title} />
			<label class="text-white">Description</label>
			<input type="text" bind:value={todo.description} />
			<br />
			<Button>Save</Button>
		</form>
	</div>
</div>
