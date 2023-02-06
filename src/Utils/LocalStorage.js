const toLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const fromLocalStorage = () =>
JSON.parse(localStorage.getItem("tasks"))

export { toLocalStorage, fromLocalStorage };