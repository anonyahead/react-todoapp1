// import React, { useState } from "react";
// import styles from "./todoitem.module.css";

// export default function TodoItem({ item, todos, setTodos }) {
//   const [editMode, setEditMode] = useState(false);
//   const [editedText, setEditedText] = useState(item.name);

//   function handleDelete(item) {
//     setTodos(todos.filter((todo) => todo !== item));
//   }

//   function handleEdit() {
//     setEditMode(true);
//   }

//   function handleSave() {
//     setTodos(
//       todos.map((todo) =>
//         todo.name === item.name ? { ...todo, name: editedText } : todo
//       )
//     );
//     setEditMode(false);
//   }

//   function handleClick(name) {
//     const newArray = todos.map((todo) =>
//       todo.name === name ? { ...todo, done: !todo.done } : todo
//     );
//     setTodos(newArray);
//   }

//   const className = item.done ? styles.completed : "";

//   return (
//     <div className={styles.item}>
//       <div className={styles.itemName}>
//         {editMode ? (
//           <div className={styles.inputContainer}>
//             <input
//               type="text"
//               value={editedText}
//               onChange={(e) => setEditedText(e.target.value)}
//             />
//             <button className={styles.saveButton} onClick={handleSave}>
//               Save
//             </button>
//           </div>
//         ) : (
//           <>
//             <span className={className} onClick={() => handleClick(item.name)}>
//               {item.name}
//             </span>
//             <button className={styles.editButton} onClick={handleEdit}>
//               Edit
//             </button>
//           </>
//         )}
//         <button
//           onClick={() => handleDelete(item)}
//           className={styles.deleteButton}
//         >
//           x
//         </button>
//       </div>
//       <hr className={styles.line} />
//     </div>
//   );
// }

import React, { useState } from "react";
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(item.name);

  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleSave() {
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, name: editedText } : todo
      )
    );
    setEditMode(false);
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      {editMode ? (
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </div>
      ) : (
        <div className={styles.itemName}>
          <span className={className} onClick={() => handleClick(item.name)}>
            {item.name}
          </span>
        </div>
      )}

      <div className={styles.buttonContainer}>
        {editMode ? (
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className={styles.editButton} onClick={handleEdit}>
            Edit
          </button>
        )}
        <button
          onClick={() => handleDelete(item)}
          className={styles.deleteButton}
        >
          x
        </button>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
