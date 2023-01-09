<template>
  <div> StandardOfAccounting </div>
  <a-form>
    <a-form-item label="企业组织名称"></a-form-item>
    <a-form-item label="核算周期类型"></a-form-item>
    <a-form-item label="核算区间"></a-form-item>
    <a-form-item label="核算名称"></a-form-item>
    <a-form-item label="核算模型选择"></a-form-item>
    <a-form-item label="GWP选择"></a-form-item>
    <a-form-item label="补充数据表"></a-form-item>
  </a-form>
</template>

<script setup lang="ts">
  import { Form } from 'ant-design-vue'

  const { useForm } = Form
</script>
