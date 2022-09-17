import { writable } from "svelte/store";
import { persist, createIndexedDBStorage } from "@macfja/svelte-persistent-store"
import type { Todo } from "./types";

const TodoStore = persist<Todo[]>(writable([]), createIndexedDBStorage(), "TodoStoreDb");

export default TodoStore;