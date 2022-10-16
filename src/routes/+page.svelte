<script lang="ts">
	import { TodoStore, AddTodo, ClearTodos, TodoFormOpen } from '$lib/ts/stores';
	import type { Todo } from '$lib/ts/types';
	import ListItem from '$lib/components/ListItem.svelte';
	import Button from '$lib/components/Button.svelte';
	import TodoForm from '$lib/components/TodoForm.svelte';

	let todos: Todo[] = [];

	TodoStore.subscribe((data) => {
		todos = data;
	});

	function handleClick() {
		console.log('true');
		TodoFormOpen.set(true);
	}
</script>

<div class="flex flex-col h-screen m-1">
	<div class="bg-red-500 text-center">Hello World</div>
	<div class="flex-1 overflow-y-auto">
		{#each todos as todo}
			<ListItem bind:todo />
		{/each}
	</div>
	{#if $TodoFormOpen}
		<TodoForm />
	{/if}
	<div class="flex flex-row justify-center text-center mb-2">
		<form on:submit|preventDefault={handleClick}>
			<Button>Add Todo</Button>
		</form>
		<form on:submit|preventDefault={ClearTodos}>
			<Button>Clear Todos</Button>
		</form>
	</div>
</div>
