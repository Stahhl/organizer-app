<script lang="ts">
	import { onMount } from 'svelte';
	import { openDB, deleteDB, wrap, unwrap } from 'idb';
	import type { Todo } from '../lib/types';

  let data: Todo[] = [];

	onMount(async () => {

    // await deleteDB("foo.db");

		const db = await openDB('foo.db', 1, {
			upgrade(db) {
				db.createObjectStore('todos', { 
          keyPath: "id", 
          autoIncrement: true 
        });
			}
		});

    // if(!db.objectStoreNames.contains("") == false){
    //   db.createObjectStore('todos', { keyPath: "id", autoIncrement: true });
    // }

		let obj: Todo = { title: '', description: '', done: false };

		let added = await db.add('todos', obj);

    data = await db.getAll("todos") as Todo[];
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>{data.length}</h2>
