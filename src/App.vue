<script setup>
import { computed, ref } from "vue";
import Titulo from "./components/Titulo.vue";
import Spinner from "./components/Spinner.vue";
import Resultados from "./components/Resultados.vue";
import useCrypto from "./composables/useCrypto";
import Formulario from "./components/Formulario.vue";

import { getDataInfo } from "./api/index";

const { cotizacion, alerta, cargando } = useCrypto();
const resultado = ref({});

const obtenerDatosConsulta = async () => {
  try {
    resultado.value = {};
    cargando.value = true;
    const data = await getDataInfo(cotizacion);
    resultado.value = data[cotizacion.criptoMoneda][cotizacion.moneda];
  } catch (error) {
  } finally {
    cargando.value = false;
  }
};

const handleSubmit = () => {
  if (Object.values(cotizacion).includes("")) {
    alerta.value = "Todos los campos son Obligatorios";
    setTimeout(() => {
      alerta.value = "";
    }, 1500);
    return;
  }
  obtenerDatosConsulta();
};

const mostrarResultado = computed(() => {
  return Object.values(resultado.value).length > 0;
});
</script>

<template>
  <Titulo />
  <main
    class="contenedor grid gap-8 lg:grid-cols-2 lg:gap-5 lg:items-center lg:h-[60vh]"
  >
    <Formulario 
      v-bind:alerta="alerta"
      v-bind:cotizacion="cotizacion"
      @envio-datos="handleSubmit" />

    <Spinner v-if="cargando" />

    <Resultados
      v-if="mostrarResultado"
      v-bind:resultado="resultado"
    />
  </main>
</template>

<style>
body {
  min-height: 100vh;
  background-image: url("./assets/img/cripto.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.contenedor {
  @apply max-w-6xl mx-auto w-11/12 lg:w-full my-10;
}
</style>
