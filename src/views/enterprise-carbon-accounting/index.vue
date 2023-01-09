<template>
  <div>
    <a-steps v-model:current="current" type="navigation">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <keep-alive>
        <component :is="steps[current].component"></component>
      </keep-alive>
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Next
      </a-button>
      <a-button v-if="current == steps.length - 1" type="primary" @click="done">
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
        Previous
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import StandardOfAccounting from './components/standard-of-accounting/index.vue'
  import EmissionSourceIdentification from './components/emission-source-identification/index.vue'
  import EmissionAccounting from './components/emission-accounting/index.vue'

  const current = ref<number>(0)
  const steps = [
    { title: '边界管理&核算标准', component: StandardOfAccounting },
    { title: '排放源识别', component: EmissionSourceIdentification },
    { title: '排放核算', component: EmissionAccounting },
  ]
  const next = () => {
    current.value += 1
  }
  const prev = () => {
    current.value -= 1
  }
  const done = () => {}
</script>

<style scoped></style>
