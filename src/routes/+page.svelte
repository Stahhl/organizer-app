<script lang="ts">
	import TodoStore, { AddTodo, ClearTodos } from '$lib/ts/store';
	import type { Todo } from '$lib/ts/types';
	import ListItem from '$lib/components/ListItem.svelte';
	import Button from '$lib/components/Button.svelte';

	let todos: Todo[] = [];

	TodoStore.subscribe((data) => {
		todos = data;
	});

	function handleClick() {
		console.log('hello')
	}
</script>

<div class="flex flex-col h-screen m-1">
	<div class="bg-red-500 text-center">Hello World</div>
	<div class="flex-1 overflow-y-auto">
		{#each todos as todo}
			<ListItem bind:todo />
		{/each}
	</div>
	<div class="flex flex-row justify-center text-center mb-2">
		<form on:submit|preventDefault={() => AddTodo({ title: 'hej', description: 'värld', done: false })}>
			<Button>Add Todo</Button>
		</form>
		<form on:submit|preventDefault={ClearTodos}>
			<Button>Clear Todos</Button>
		</form>
	</div>
</div>
