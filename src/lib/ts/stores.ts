import { writable } from 'svelte/store';
import { persist, createIndexedDBStorage } from '@macfja/svelte-persistent-store';
import { IntervalUnit, type Todo, type Interval } from './types';

export const TodoStore = persist<Todo[]>(writable([]), createIndexedDBStorage(), 'TodoStoreDb');
export const RecalcStore = persist<Date>(
	writable(new Date()),
	createIndexedDBStorage(),
	'RecalcStoreDb'
);

function CalcDays(interval: Interval): number {
	switch (interval.unit) {
		case IntervalUnit.WEEK: {
			return interval.amount * 7;
		}
		case IntervalUnit.MONTH: {
			return interval.amount * 30;
		}
		case IntervalUnit.YEAR: {
			return interval.amount * 365;
		}
		default: {
			return interval.amount;
		}
	}
}

export function AddTodo(title: string, description: string, interval: Interval) {
	TodoStore.update((current) => {
		let todo: Todo = {
			id: current.length + 1,
			title: title,
			description: description,
			done: false,
			interval: interval,
			daysLeft: CalcDays(interval)
		};
		current.push(todo);
		return current;
	});
}

export function ClearTodos() {
	TodoStore.update(() => {
		return [];
	});
}

export function RecalculateTodos() {
	console.log('RecalculateTodos');
	const currentDat = new Date();
	console.log(currentDat.toISOString)

	// TodoStore.update((current) => {
	// 	current.forEach(todo => {
	// 		todo.daysLeft -= 1;
	// 	});

	// 	return current;
	// });
}

export const TodoFormOpen = writable(false);
