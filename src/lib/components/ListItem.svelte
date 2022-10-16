<script lang="ts">
	import type { Todo } from '$lib/ts/types';

	export let todo: Todo;
</script>

<div class="shadow-m bg-teal-200">
	<div class="m-1">
		<p>{todo.id}</p>
		<p>{todo.title} {todo.description}</p>
	</div>
</div>
 