<script lang="ts">
	import Button from './Button.svelte';
	import { TodoFormOpen, AddTodo } from '$lib/ts/stores';
	import { IntervalUnit, type Interval } from '$lib/ts/types';

	export let title: string;
	export let description: string;
	export let interval: Interval = {unit: IntervalUnit.DAYS, amount: 1}

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
		class="bg-gray-900 rounded-md px-8 py-10 relative max-w-lg opacity-80"
		on:click|stopPropagation
	>
		<form on:submit={handleClick} class="flex flex-col">
			<label class="text-white flex flex-col">
				Title
				<input class="text-black" type="text" bind:value={title} />
			</label>
			<label class="text-white flex flex-col">
				Description
				<input class="text-black" type="text" bind:value={description} />
			</label>
			<br />
			<Button>Save</Button>
		</form>
	</div>
</div>
