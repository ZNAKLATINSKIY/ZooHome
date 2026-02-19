<script setup>
    import { ref } from "vue";
    import { addAnimal } from "../services/animalService";

    const name = ref("");
    const type = ref("dog");
    const age = ref(1);
    const notes = ref("");

    async function saveAnimal() {
    await addAnimal(name.value, type.value, age.value, notes.value);
    alert("Животное добавлено");
    }
</script>

<template>
  <div>
    <input v-model="name" placeholder="Имя животного" />

    <select v-model="type">
      <option value="dog">Собака</option>
      <option value="cat">Кошка</option>
    </select>

    <input type="number" v-model="age" />

    <textarea v-model="notes"></textarea>

    <button @click="saveAnimal">Добавить</button>
  </div>
</template>