<template>
  <v-container fluid>
    <v-card class="mt-5">
      <v-card-text>
        {{ customValue }}
        <app-text-field
          v-model="customValue"
          label="Age"
        />
        {{ customName }}
        <app-text-field
          v-model="customName"
          label="Name"
        />
        {{ customNName }}
        <app-text-field
          v-model="customNName"
          label="Nick Name"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import AppTextField from "@/components/app/TextField"
export default {
  components: {
    AppTextField,
  },
  data: () => ({
    customValue: null,
    customName: null,
    customNName: null,
  }),
}
</script>
<style lang="">

</style>
