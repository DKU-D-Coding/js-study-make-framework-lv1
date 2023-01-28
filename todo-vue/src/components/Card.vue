<template>
  <li id="wrapper">
    <div id="title-container">
      <form v-if="isEditing" @submit="handleSubmit">
        <input type="text" id="edit-todo-input" />
      </form>
      <h3 id="title" :class="{ done: isDone }" v-else>
        {{ title }}
      </h3>
      <div id="created-at">{{ createdAt.toLocaleDateString() }}</div>
    </div>
    <div id="control-container">
      <v-icon class="icon" @click="toggleEdit">mdi-pencil</v-icon>
      <v-icon class="icon" @click="toggleDone">mdi-check</v-icon>
      <v-icon class="icon" @click="handleDelete">mdi-close</v-icon>
    </div>
  </li>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return { createdAt: new Date(), isEditing: false, isDone: false };
  },
  props: {
    title: { type: String, required: true },
    id: { type: Number, required: true },
  },
  methods: {
    toggleEdit: function () {
      this.isEditing = !this.isEditing;
    },
    toggleDone: function () {
      this.isDone = !this.isDone;
    },
    handleSubmit: function (e) {
      e.preventDefault();
      this.$emit("setTitle", { title: e.target[0].value, id: this.id });
      this.isEditing = false;
    },
    handleDelete: function () {
      this.$emit("delete", this.id);
    },
  },
};
</script>

<style lang="scss">
#wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  min-width: 20rem;
}
#title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#title {
  font-size: 1.2rem;
  margin: 0;
}
#created-at {
  font-size: 0.8rem;
  color: #999;
}
#control-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.icon {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 9999px;
  padding: 1.3rem;
  margin-left: 0.1rem;
  &:hover {
    background-color: #2c3e50;
    color: #eee;
  }
}
.done {
  text-decoration: line-through;
  color: #999;
}
</style>
