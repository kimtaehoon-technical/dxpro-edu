<template>
  <div class="course-card">
    <img :src="course.image" alt="Course Image" />
    <h3>{{ course.title }}</h3>
    <p>{{ course.description }}</p>
    <router-link :to="'/course/' + course.id">受講開始</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  mounted () {
    window.scrollTo(0, 0)
  },
  props: {
    course: {
      type: Object as PropType<{ id: number; title: string; description: string; image: string }>,
      required: true
    }
  }
})
</script>

<style scoped>
.course-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  width: 250px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.course-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
