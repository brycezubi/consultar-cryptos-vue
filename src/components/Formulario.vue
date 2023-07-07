<script setup>
  import Alerta from "../components/Alerta.vue";
  import useCrypto from "../composables/useCrypto"

  const { criptos , monedas } = useCrypto()

  defineEmits(["envio-datos"])

  defineProps({
  alerta: {
    type: String,
    required: true,
  },
  cotizacion: {
    type: Object,
    required: true,
  },
});

 
</script>
<template>
  <form
    v-on:submit.prevent="$emit('envio-datos')"
    class="bg-white p-8 rounded-md shadow-lg flex flex-col gap-5"
  >
    <Alerta v-if="alerta">{{ alerta }}</Alerta>
    <div class="flex flex-col gap-1">
      <label
        for="monedas"
        class="font-medium"
        >Monedas:</label
      >
      <select
        id="monedas"
        class="flex-1 border py-2 px-5 text-center font-medium text-slate-800 rounded-md"
        v-model="cotizacion.moneda"
      >
        <option value="">--- Seleccione ---</option>
        <option
          v-for="moneda in monedas"
          :value="moneda.value"
          :key="moneda.id"
        >
          {{ moneda.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-col gap-1">
      <label
        for="monedas"
        class="font-medium"
        >CryptoMonedas:</label
      >
      <select
        id="monedas"
        class="flex-1 border py-2 px-5 text-center font-medium text-slate-800 rounded-md"
        v-model="cotizacion.criptoMoneda"
      >
        <option value="">--- Seleccione ---</option>
        <option
          v-for="coin in criptos"
          :value="coin.CoinInfo.Name"
        >
          {{ coin.CoinInfo.FullName }}
        </option>
      </select>
    </div>
    <input
      class="py-2 w-[250px] bg-red-300 font-medium text-white rounded-md mx-auto hover:bg-red-400 hover:cursor-pointer hover:tracking-widest transition-all"
      type="submit"
      value="Consultar"
    />
  </form>
</template>
