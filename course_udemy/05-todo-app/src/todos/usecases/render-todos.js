import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo";

let element;

/**
 *
 * @param {HTML} elementId
 * @param {Array<Todo>} todos
 */
export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error(`Element no exists: ${elementId}`);

  element.innerHTML = "";
  todos.forEach((t) => element.append(createTodoHTML(t)));
};
