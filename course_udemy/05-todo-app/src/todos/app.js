// with ?raw trae en crudo el html como texto
import html from "./app.html?raw";
import todoStore, { FILTERS } from "../store/todo.store";
import { renderTodos } from "./usecases/render-todos";
import { renderPending } from "./usecases/render-pending";

const ElementIDs = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  DeleteCompletedButton: ".clear-completed",
  Filters: ".filtro",
  PendingCountLabel: "#pending-count",
};

/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {
  const displaysTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    updatePendingCount();
  };

  const updatePendingCount = () => {
    renderPending(ElementIDs.PendingCountLabel);

  };

  // IIFE
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displaysTodos();
  })();

  // HTML refers
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
  const todoListUL = document.querySelector(ElementIDs.TodoList);
  const deleteCompleteBtn = document.querySelector(
    ElementIDs.DeleteCompletedButton
  );
  const filtersUL = document.querySelectorAll(ElementIDs.Filters);

  // listeners
  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displaysTodos();
    event.target.value = "";
  });

  todoListUL.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displaysTodos();
  });

  todoListUL.addEventListener("click", (event) => {
    const isDestroyElement = event.target.className === "destroy";
    const element = event.target.closest("[data-id]");

    if (!isDestroyElement || !element) return;

    todoStore.deleteTodo(element.getAttribute("data-id"));
    displaysTodos();
  });

  deleteCompleteBtn.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displaysTodos();
  });

  filtersUL.forEach((elem) =>
    elem.addEventListener("click", (element) => {
      filtersUL.forEach((el) => el.classList.remove("selected"));
      element.target.classList.add("selected");

      switch (element.target.text) {
        case "All":
          todoStore.setFilter(FILTERS.All);
          break;
        case "Pendings":
          todoStore.setFilter(FILTERS.Pending);
          break;
        case "Completed":
          todoStore.setFilter(FILTERS.Completed);
          break;
      }

      displaysTodos();
    })
  );
};
