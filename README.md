# MCC Todo List App

## Introduction

The MCC Todo List App is a simple yet powerful todo list application built with React and Vite. This app allows users to add, edit, delete, and mark tasks as completed. The todos are persisted in the browser's `localStorage`, ensuring that the tasks are saved even after the page is refreshed.

## Features

- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as completed
- Persist todos in `localStorage`

## Tools and Technologies Used

### React

**React**: A JavaScript library for building user interfaces, developed by Facebook. React allows developers to create large web applications that can change data, without reloading the page. The core concepts include:

- **Components**: Independent, reusable pieces of UI.
- **JSX**: A syntax extension for JavaScript that looks similar to HTML and is used with React to describe what the UI should look like.
- **State and Props**: State is a built-in object that stores property values that belong to the component. Props are used to pass data from one component to another.

### Vite

**Vite**: A fast development build tool that leverages native ES modules. Vite is known for its rapid build times and modern feature set. It provides:

### React Hooks

#### useState

**useState**: A React Hook that allows you to add state to functional components. It is used to manage the state of the todos and the current input. Key features include:

- **State Initialization**: You can provide an initial state value.
- **State Update Function**: It returns a function to update the state, causing the component to re-render.

#### useRef

**useRef**: A React Hook that provides a way to access and interact with DOM elements directly. It is used here to manage the input field for new todos. Key features include:

- **Persistent Value**: It returns a mutable ref object whose `.current` property is initialized to the passed argument.
- **Direct DOM Access**: Useful for accessing and manipulating DOM elements directly.

### Browser Local Storage

**localStorage**: A web storage API provided by browsers that allows you to store key-value pairs in a web browser. The `localStorage` data persists even after the browser is closed and reopened. Key features include:

- **Persistence**: Data stored in `localStorage` is not cleared when the page session ends.
- **String Key-Value Storage**: Stores data as key-value pairs where both the key and the value are strings.

### JavaScript

**JavaScript**: The programming language used to build the React components and manage the application logic. JavaScript is a versatile language that enables interactive web pages and is an essential part of web applications.

### CSS

The application uses a CSS file (`styles.css`) to style the components, ensuring a consistent and visually appealing user interface.

### Assets

**Logo**: An image logo that is displayed in the navigation bar. It enhances the branding of the application.

## Code Explanation

### App Component

The main component of the application, responsible for rendering the todo list and handling all the interactions.

#### State Management

- **newTodo**: Holds the value of the current input for a new or edited todo.
- **todos**: An array of todo objects. Each object contains an `id`, `name`, and `completed` status.
- **editMode**: Holds the `id` of the todo being edited, if any.

#### Functions

- **handleSubmit**: Handles the form submission to add or edit a todo.
- **toggleTodo**: Toggles the completed status of a todo.
- **handleDelete**: Deletes a todo from the list.
- **handleEdit**: Sets the todo in edit mode and populates the input field with its name.
- **saveTodosToLocalStorage**: Saves the current state of todos to `localStorage`.

### JSX and Event Handling

The JSX structure includes:

- **Navigation Bar**: A header with a logo and title.
- **Form**: For adding new todos.
- **List**: Displaying all todos with options to edit, delete, and toggle completion status.

## Conclusion

The MCC Todo List App is a straightforward yet functional example of a React application. By using React hooks, Vite, and the browser's `localStorage`, it demonstrates how to build a modern web app that maintains state between sessions.
