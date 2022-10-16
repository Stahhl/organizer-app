<script lang="ts">
	import Button from './Button.svelte';
	import { TodoFormOpen, AddTodo } from '$lib/ts/stores';
	import { IntervalUnit, type Interval } from '$lib/ts/types';

	let title: string;
	let description: string;
	let interval: Interval = { unit: IntervalUnit.DAYS, amount: 1 };

	let values = Object.values(IntervalUnit);

	function handleClick() {
		console.log('false');
		AddTodo(title, description, interval);
		TodoFormOpen.set(false);
	}
</script>

<div
	class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center"
	on:click={handleClick}
>
	<div
		class="bg-teal-400 rounded-md px-8 py-10 relative max-w-lg opacity-80"
		on:click|stopPropagation
	>
		<form on:submit={handleClick} class="flex flex-col">
			<label class="flex flex-col">
				Title
				<input type="text" bind:value={title} />
			</label>
			<label class="flex flex-col">
				Description
				<input type="text" bind:value={description} />
			</label>
			<div>
				Every:
				<input type="number" bind:value={interval.amount} />
				<select bind:value={interval.unit}>
					{#each values as value}
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
