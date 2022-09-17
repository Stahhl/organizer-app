<script lang="ts">
	import TodoStore from '$lib/store';
	import type { Todo } from '../lib/types';
	import ListItem from '../components/ListItem.svelte';

	let todos: Todo[] = [];
	let newTodo: Todo = { title: 'hej', description: 'värld', done: false };

	TodoStore.subscribe((data) => {
		todos = data;
	});

	function AddTodo() {
		TodoStore.update((current) => {
			return [newTodo, ...current];
		});
	}
</script>

<div class="flex flex-col h-screen m-1">
	<div class="bg-red-500 text-center">Hello World</div>
	<div class="flex-1 overflow-y-auto">
		{#each todos as todo}
			<ListItem bind:todo />
		{/each}
	</div>
	<div class="bg-blue-500 text-center mb-2">
		<button on:click={AddTodo}>Add Todo</button>
	</div>
</div>