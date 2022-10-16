import { writable } from 'svelte/store';
import { persist, createIndexedDBStorage } from '@macfja/svelte-persistent-store';
import { Todo, type Interval } from './types';

export const TodoStore = persist<Todo[]>(writable([]), createIndexedDBStorage(), 'TodoStoreDb');

export function AddTodo(title: string, description: string, interval: Interval) {
	TodoStore.update((current) => {
		let todo = new Todo(current.length + 1, title, description, interval);
        current.push(todo);
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
