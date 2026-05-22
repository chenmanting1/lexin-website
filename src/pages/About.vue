<script setup>
import { businessAreas, companyProfile } from '../data/siteData'
</script>

<template>
  <div class="brand-section">
    <h2 class="brand-title">关于我们</h2>
    <div class="brand-body text-base">
      <p v-for="item in companyProfile.intro" :key="item" class="mb-4">
        {{ item}}  
      </p>
      <el-card class="brand-card">
        <h3 class="text-lg font-semibold text-slate-800 mb-3">核心优势</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li v-for="item in companyProfile.strengths" :key="item">{{ item }}</li>
        </ul>
      </el-card>
      <el-card class="brand-card mt-5">
        <h3 class="text-lg font-semibold text-slate-800 mb-3">业务领域</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div v-for="item in businessAreas" :key="item" class="px-3 py-2 bg-slate-50 rounded text-center text-slate-700">
            {{ item }}
          </div>
        </div>
      </el-card>
      <el-card class="brand-card mt-5">
        <h3 class="text-lg font-semibold text-slate-800 mb-3">发展愿景</h3>
        <p>{{ companyProfile.mission }}</p>
        <p class="mt-2">{{ companyProfile.vision }}</p>
      </el-card>
    </div>
  </div>
</template>