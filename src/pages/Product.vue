<script setup>
import { useRouter } from 'vue-router'
import { products } from '../data/siteData'

const router = useRouter()

const openDetail = (id) => {
  router.push(`/product/${id}`)
}
</script>

<template>
  <div class="brand-section">
    <h2 class="brand-title">产品中心</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <el-card
        v-for="item in products"
        :key="item.id"
        class="brand-card"
      >
        <img :src="`/product/${item.id}.png`" :alt="item.name" class="w-full h-[220px] object-contain rounded bg-white">
        <div class="pt-5">
          <h3 class="text-lg font-bold mb-2 text-slate-800">{{ item.name }}</h3>
          <p class="text-slate-500 mb-4">{{ item.shortDesc }}</p>
          <el-button type="primary" plain @click="openDetail(item.id)">查看详情</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>