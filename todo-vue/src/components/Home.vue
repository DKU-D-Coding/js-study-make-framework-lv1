<template>
  <div class="home">
    <header><h1>Todo App</h1></header>
    <main>
      <ul>
        <CardComponent
          v-for="todo in todos"
          :key="todo.id"
          :title="todo.title"
          :id="todo.id"
          @edit="editTodo"
          @delete="deleteTodo"
        />
      </ul>
      <form @submit.prevent="addTodo">
        <input
          id="new-todo-input"
          type="text"
          v-model="title"
          placeholder="add new todo..."
        />
      </form>
    </main>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "HomeComponent",
  data() {
    return {
      todos: [],
      title: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: this.todos.length + 1,
        title: this.title,
      };
      this.todos.push(newTodo);
    },
    editTodo: function (e) {
      this.todos.forEach((todo) => {
        if (todo.id === e.id) {
          todo.title = e.title;
        }
      });
    },
    deleteTodo: function (id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  components: { CardComponent: Card },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}
header {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #2c3e50;
  color: #fff;
  margin-bottom: 1.5rem;
}
#new-todo-input {
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  color: #2c3e50;
  border: none;
  outline: none;
}
</style>
