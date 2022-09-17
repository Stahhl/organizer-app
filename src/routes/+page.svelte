<script lang="ts">
	import TodoStore, {AddTodo, ClearTodos} from '$lib/store';
	import type { Todo } from '../lib/types';
	import ListItem from '../components/ListItem.svelte';

	let todos: Todo[] = [];
	
	TodoStore.subscribe((data) => {
		todos = data;
	});

	// let newTodo: Todo = { id: todos.length + 1, title: 'hej', description: 'värld', done: false };
</script>

<div class="flex flex-col h-screen m-1">
	<div class="bg-red-500 text-center">Hello World</div>
	<div class="flex-1 overflow-y-auto">
		{#each todos as todo}
			<ListItem bind:todo />
		{/each}
	</div>
	<div class="bg-blue-500 text-center mb-2">
		<button on:click={() => AddTodo({ title: 'hej', description: 'värld', done: false })}>Add Todo</button>
		<button on:click={ClearTodos}>Clear Todos</button>
	</div>
</div>