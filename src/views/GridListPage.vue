<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="count in 12"
        :key="count"
        cols="3"
      >
        <v-card
          class="pa-3"
          outlined
        >
          Hello
        </v-card>
      </v-col>
    </v-row>

    <v-card
      class="pa-3"
      outlined
    >
      <v-row
        justify="space-between"
      >
        <v-col
          cols="auto"
        >
          <v-card
            class="pa-3"
            outlined
          >
            Hello
          </v-card>
        </v-col>
        <v-col
          cols="auto"
        >
          <v-card
            class="pa-3"
            outlined
          >
            Hello
          </v-card>
        </v-col>
        <v-col
          cols="auto"
        >
          <v-card
            class="pa-3"
            outlined
          >
            Hello
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default{

}
</script>
<style lang="">
</style>
