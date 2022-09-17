<script lang="ts">
	import type { Todo } from '$lib/types';

	export let todo: Todo;
</script>

<div class="shadow-m bg-teal-200">
	<div class="m-1">
		{todo.title} <br>
		{todo.description}
	</div>
</div>
 