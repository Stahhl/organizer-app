<script lang="ts">
	import { onMount } from 'svelte';
	import { openDB, deleteDB, wrap, unwrap } from 'idb';
	import type { Todo } from '../lib/types';
	import ListItem from '../components/ListItem.svelte';

	let data: Todo[] = [];

	onMount(async () => {
		//await deleteDB('todo.db');

		const db = await openDB('todo.db', 1, {
			upgrade(db) {
				db.createObjectStore('todos', {
					keyPath: 'id',
					autoIncrement: true
				});
			}
		});

		let obj: Todo = { title: 'hej', description: 'värld', done: false };

		await db.add('todos', obj);

		data = (await db.getAll('todos')) as Todo[];
	});
</script>

<div class="flex flex-col h-screen m-1">
	<div class="bg-red-500 text-center">
		Hello World
	</div>
	<div class="flex-1 overflow-y-auto">
		{#each data as todo}
			<ListItem bind:todo />
		{/each}
	</div>
	<div class="bg-blue-500 text-center h-10 mb-2">
		<button>Add Todo</button>
	</div>
</div>

<!-- <div class="row-span-1">
	<h1 class="font-medium">Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<h2>Todos: {data.length}</h2>

	{#each data as todo}
		<ListItem bind:todo />
	{/each}
</div>
<div class="row-span-1">
	<button>hej</button>
</div> -->
