<template>
    <footer class="site-footer text-center py-10">
      <p class="text-white/90">
          © {{ currentYear }}
          <span>深圳乐心信息技术有限公司</span>
          All Rights Reserved.  
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="icp-link"
          >
            粤ICP备19132842号
          </a>
      </p>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentYear = ref(2026)

onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>