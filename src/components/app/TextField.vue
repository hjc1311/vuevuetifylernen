<template>
  <label>
    {{ label }}
    <v-text-field
      class="mt-1"
      :outlined="outlined"
      :dense="dense"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </label>
</template>

<script>
export default{
  name: "AppTextField",
  inheritAttrs: false,
  props: {
    outlined: {
      type: String,
      default: null
    },
    dense: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  }
}
</script>
<style lang="">
</style>
