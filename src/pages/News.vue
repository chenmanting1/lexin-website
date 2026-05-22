<script setup>
import { newsList } from '../data/siteData'
</script>

<template>
  <section class="brand-section space-y-6">
    <div>
      <h1 class="brand-title !mb-3">新闻中心</h1>
      <p class="brand-body text-center">关注企业动态、技术洞察与行业观点。</p>
    </div>
    <el-card v-for="item in newsList" :key="item.title" class="brand-card">
      <div class="text-[#0b69d1] text-sm mb-2">{{ item.date }}</div>
      <h3 class="text-slate-800 text-xl mb-3 font-semibold">{{ item.title }}</h3>
      <p class="text-slate-500 leading-7">{{ item.summary }}</p>
    </el-card>
  </section>
</template>
