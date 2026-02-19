<script setup>
    import { ref } from "vue";
    import { registerUser } from "../services/authService";

    const email = ref("");
    const password = ref("");
    const name = ref("");

    async function register() {
    await registerUser(email.value, password.value, name.value);
    alert("Регистрация успешна");
    }
</script>

<template>
  <div>
    <input v-model="name" placeholder="Имя" />
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Пароль" />
    <button @click="register">Зарегистрироваться</button>
  </div>
</template>