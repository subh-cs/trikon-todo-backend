# trikon-todo-backend

This is a simple Todo API that provides a set of RESTful endpoints for managing Todo cards.

## API Routes

The API consists of the following endpoints:

- `GET /`: A dummy endpoint that returns a success message.
- `GET /getAllTodoCards`: Returns all Todo cards.
- `GET /getTodoCard`: Returns a Todo card based on the given `id`.
- `POST /addtodoCard`: Adds a new Todo card.
- `PATCH /updateTodoCard`: Updates an existing Todo card based on the given `id`.
- `DELETE /deleteTodoCard`: Deletes a Todo card based on the given `id`.

## Running Locally

Here are the steps for running this API locally:

## Run Locally

Clone the project

```bash
  git clone https://github.com/subh-cs/trikon-todo-backend.git
```

Go to the project directory

```bash
  cd trikon-todo-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Now, Express server is running on `http://localhost:3001`

