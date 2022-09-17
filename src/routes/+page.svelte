<script lang="ts">
	import { onMount } from 'svelte';
	import { openDB, deleteDB, wrap, unwrap } from 'idb';
	import type { Todo } from '../lib/types';

	let data: Todo[] = [];

	onMount(async () => {
		// await deleteDB("todo.db");

		const db = await openDB('todo.db', 1, {
			upgrade(db) {
				db.createObjectStore('todos', {
					keyPath: 'id',
					autoIncrement: true
				});
			}
		});

		let obj: Todo = { title: '', description: '', done: false };

		await db.add('todos', obj);

		data = (await db.getAll('todos')) as Todo[];
	});
</script>

<h1 class="font-medium">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>Todos: {data.length}</h2>
