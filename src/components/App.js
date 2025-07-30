	import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  function handleDeleteTask(deletedTaskText) {
    const updatedTasks = tasks.filter(task => task.text !== deletedTaskText);
    setTasks(updatedTasks);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const visibleTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;