import { atom, selector } from "recoil";

export const initialListState = atom({
  key: "initialListState", //key should be unique
  default: window.localStorage.getItem("adv-tasks-recoil")
    ? JSON.parse(window.localStorage.getItem("adv-tasks-recoil"))
    : []
});

export const StatsState = selector({
  key: "StatsState",
  get: ({ get }) => {
    const todoList = get(initialListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum
    };
  }
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All"
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(initialListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  }
});
