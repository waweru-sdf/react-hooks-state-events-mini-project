import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Initialize state for controlled inputs
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]); // skip "All"

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      text,
      category,
    };

    // Call the parent callback
    onTaskFormSubmit(newTask);

    // Reset the form inputs
    setText("");
    setCategory(categories[1]);
  };

  // Create <option> elements for categories (excluding "All")
  const categoryOptions = categories
    .filter((cat) => cat !== "All")
    .map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ));

  return (
    <form
      className="new-task-form"
      onSubmit={handleSubmit}
      data-testid="task-form" // <-- for test targeting
    >
      {/* Label and controlled input for task text */}
      <label htmlFor="task-details">Details</label>
      <input
        id="task-details"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Label and controlled select for category */}
      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categoryOptions}
      </select>

      {/* Submit button */}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
