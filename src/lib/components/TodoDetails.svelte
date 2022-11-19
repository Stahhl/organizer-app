<script lang="ts">
	import { TodoStore, SelectedTodo, IntervalValues, UpdateTodo } from '$lib/ts/stores';
	import type { Todo } from '$lib/ts/types';
	import Button from './Button.svelte';

	export let todo: Todo;

	function submit() {
		console.log('submit');
        UpdateTodo(todo);
        
        SelectedTodo.set(null);
	}

	function cancel() {
		console.log('cancel');
		SelectedTodo.set(null);
	}
</script>

<div
	class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center"
	on:click={cancel}
>
	<div
		class="bg-teal-400 rounded-md px-8 py-10 relative max-w-lg opacity-80"
		on:click|stopPropagation
	>
		<form on:submit={submit} class="flex flex-col">
			<label class="flex flex-col">
				Title
				<input type="text" bind:value={todo.title} />
			</label>
			<label class="flex flex-col">
				Description
				<input type="text" bind:value={todo.description} />
			</label>
			<div>
				Every:
				<input type="number" bind:value={todo.interval.amount} />
				<select bind:value={todo.interval.unit}>
					{#each IntervalValues as value}
						<option {value}>
							{value}
						</option>
					{/each}
				</select>
			</div>
			<br />
			<Button>Save</Button>
		</form>
	</div>
</div>
