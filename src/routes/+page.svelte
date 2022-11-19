<script lang="ts">
	import {
		TodoStore,
		ClearTodos,
		RecalculateTodos,
		TodoFormOpen,
		SelectedTodo
	} from '$lib/ts/stores';
	import type { Todo } from '$lib/ts/types';
	import ListItem from '$lib/components/ListItem.svelte';
	import Button from '$lib/components/Button.svelte';
	import TodoForm from '$lib/components/TodoForm.svelte';
	import TodoDetails from '$lib/components/TodoDetails.svelte';

	// ClearTodos();

	let todos: Todo[] = [];
	let todo: Todo | null;

	TodoStore.subscribe((data) => (todos = data));
	SelectedTodo.subscribe((data) => (todo = data));

	function handleClick() {
		console.log('true');
		TodoFormOpen.set(true);
	}

	// ... shameful display
	// Force svelte to iterate over a store somehow.
	function foo() {
		console.log('foo');
		RecalculateTodos(0);
		return true;
	}
</script>

<body on:mouseenter={foo}>
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
		{#if todo != null}
			<TodoDetails bind:todo />
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
</body>
