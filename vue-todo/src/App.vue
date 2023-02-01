<template>
  <div>
    <h1>To do List</h1>
    <form v-on:submit="addTodo">
      <input type="text" placeholder="할 일을 입력하세요." v-model="todo" />
      <button type="submit">추가</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <form v-on:submit="completeEditing" v-if="editing">
          <input type="text" v-model="editing.content" />
          <button type="submit">완료</button>
        </form>
        <div v-else>
          <label>
            <input type="checkbox" v-on:change="toggleIsDone($event, todo)" />
            {{ todo.content }}
          </label>
          <button v-on:click="startEditing(todo)">수정</button>
          <button v-on:click="deleteTodo(todo.id)" type="button">삭제</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo: "",
      todos: [],
      editing: null,
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      this.todos.push({
        id: this.todos.length > 0 ? this.todos.at(-1).id + 1 : 0,
        content: this.todo,
        isDone: false,
      });
      this.todo = "";
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((value) => value.id !== id);
    },
    toggleIsDone(e, todo) {
      this.todos = this.todos.filter((value) => value.id !== todo.id);
      this.todos.push({ ...todo, isDone: e.target.checked });
    },
    startEditing(todo) {
      this.editing = todo;
    },
    completeEditing(e) {
      e.preventDefault();

      if (!this.editing) {
        return;
      }
      this.todos = this.todos.filter((value) => value.id !== this.editing.id);
      this.todos.push(this.editing);
      this.editing = null;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
