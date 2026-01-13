import { Todo } from "../todos/models/todo.model";

export const FILTERS = {
  All: "all",
  Completed: "completed",
  Pending: "pending",
};

const state = {
  todos: [],
  filter: FILTERS.All,
};

const initStore = () => {
  loadStore();
  console.log("Store initialize 🥷");
};

const loadStore = () => {
  if (!localStorage.getItem("state")) return;

  const { todos = [], filter = FILTERS.All } = JSON.parse(
    localStorage.getItem("state")
  );
  state.todos = todos;
  state.filter = filter;
};

const getTodos = (filter = FILTERS.All) => {
  switch (filter) {
    case FILTERS.All:
      return [...state.todos];
    case FILTERS.Completed:
      return state.todos.filter((t) => t.done);
    case FILTERS.Pending:
      return state.todos.filter((t) => !t.done);
    default:
      throw new Error(`Option ${filter} is not valid.`);
  }
};

/**
 *
 * @param {String} description
 * @returns {Todo} new Object
 */
const addTodo = (description = "New task") => {
  if (!description) throw new Error("Description is required");

  state.todos.push(new Todo(description));

  saveStateToLocalStorage(state);
};

/**
 * boolean true to false, and viceverse
 * @param {UUID} todoId Example: '165ba9aa-9619-4576-a637-0339396edc1b'
 * @returns Example: a new object with done false or true
 */
const toggleTodo = (todoId) => {
  const todoFounded = state.todos.find((to) => to.id === todoId);
  if (!todoFounded) throw new Error(`Task with id: ${todoId} not founded`);
  todoFounded.done = !todoFounded.done;

  saveStateToLocalStorage(state);
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((t) => t.id !== todoId);

  saveStateToLocalStorage(state);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((t) => !t.done);

  saveStateToLocalStorage(state);
};

/**
 *
 * @param {FILTERS} newFilter
 * @returns
 */
const setFilter = (newFilter = FILTERS.All) => (state.filter = newFilter);

const getCurrentFilter = () => state.filter;

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  setFilter,
  toggleTodo,
};
