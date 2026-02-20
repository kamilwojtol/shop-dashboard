<script lang="ts" setup>
import Title from "../shared/Title/Title.vue";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.vue";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const routeName = computed(() => route.name?.toString() ?? "shop dashboard");

function goToDashboard() {
  router.push({ name: "dashboard" });
}
</script>

<template>
  <div class="rounded-lg mb-8">
    <Breadcrumbs :goToDashboard="goToDashboard" :routeName="routeName" />
    <header class="text-white mt-1">
      <Title>{{ routeName[0]?.toUpperCase() + routeName.slice(1) }}</Title>
    </header>
  </div>
</template>
