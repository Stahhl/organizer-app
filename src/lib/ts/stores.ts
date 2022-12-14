import { writable } from 'svelte/store';
import { persist, createIndexedDBStorage } from '@macfja/svelte-persistent-store';
import { IntervalUnit, type Todo, type Interval } from './types';

export const TodoStore = persist<Todo[]>(writable([]), createIndexedDBStorage(), 'TodoStoreDb');
export const RecalcStore = persist<number>(writable(0), createIndexedDBStorage(), 'RecalcStoreDb');

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
		console.log(current.length);

		let todo: Todo = {
			id: current.length + 1,
			title: title,
			description: description,
			done: false,
			interval: interval,
			daysLeft: CalcDays(interval)
		};
		current.push(todo);
		console.log(current.length);
		return current;
	});
}

export function UpdateTodo(todo: Todo, remove: boolean) {
	TodoStore.update((current) => {
		console.log('UpdateTodo');
		console.log(remove);

		let index = current.findIndex((x) => x.id == todo.id);

		if (remove) {
			console.log('delete todo');
			console.log(current.length);
			current.splice(index, 1);
			console.log(current.length);
		} else {
			todo.daysLeft = CalcDays(todo.interval);
			current[index] = todo;
		}

		return current;
	});
}

export function ClearTodos() {
	TodoStore.update(() => {
		return [];
	});
}

export function RecalculateTodos(forceAmount: number = 0) {
	console.log(`RecalculateTodos: '${forceAmount}'`);

	let newDate: number = formatDate() + forceAmount;

	RecalcStore.update((oldDate) => {
		console.log(`oldDate = '${oldDate}', newDate = '${newDate}'`);
		if (oldDate == newDate) return oldDate;

		decrementTodos(newDate - oldDate);
		return newDate - forceAmount;
	});
}

export function decrementTodos(diff: number) {
	console.log('decrementTodos');

	if (diff <= 0) return;

	TodoStore.update((current) => {
		current.forEach((todo) => {
			todo.daysLeft -= diff;
			console.log(todo.daysLeft);
		});

		return current;
	});
}

export function formatDate(date = new Date()): number {
	return +[date.getFullYear(), date.getMonth(), date.getDate()].join('');
}

export const TodoFormOpen = writable(false);

export const TodoDetailsOpen = writable(false);

export const SelectedTodo = writable<Todo | null>();

export const IntervalValues = Object.values(IntervalUnit);
