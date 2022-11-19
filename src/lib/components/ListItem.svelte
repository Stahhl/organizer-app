<script lang="ts">
	import type { Todo } from '$lib/ts/types';
	import {SelectedTodo} from "$lib/ts/stores";

	export let todo: Todo;

	function onClick(){
		$SelectedTodo = todo;
		console.log(`selected ${$SelectedTodo.id}`);
	}
</script>

<div class="shadow-m bg-teal-200" on:click={onClick}>
	<div class="m-1">
		<p>{todo.title} {todo.description}</p>
		<p>{todo.daysLeft}</p>
	</div>
</div>
 