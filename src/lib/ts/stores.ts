import { writable } from 'svelte/store';
import { persist, createIndexedDBStorage } from '@macfja/svelte-persistent-store';
import type { Todo } from './types';

export const TodoStore = persist<Todo[]>(writable([]), createIndexedDBStorage(), 'TodoStoreDb');

export function AddTodo(newTodo: Todo) {
	TodoStore.update((current) => {
		newTodo.id = current.length + 1;
        current.push(newTodo);
		return current;
	});
}

export function ClearTodos() {
	TodoStore.update(() => {
		return [];
	});
}

export function RecalculateTodos(){
	console.log('RecalculateTodos')
}

export const TodoFormOpen = writable(false);
