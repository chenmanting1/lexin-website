<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products } from '../data/siteData'
import { getProductImage } from '../utils/images'

const route = useRoute()
const router = useRouter()

const product = computed(() => products.find((item) => item.id === route.params.id))

const goBack = () => {
  router.push('/product')
}
</script>

<template>
  <section class="brand-section">
    <el-card v-if="product" class="brand-card">
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <h2 class="text-2xl font-bold text-slate-800">{{ product.name }}</h2>
          <el-button type="primary" plain @click="goBack">返回产品中心</el-button>
        </div>
      </template>

      <img :src="getProductImage(product.id)" :alt="product.name" class="w-full h-[320px] md:h-[420px] object-contain rounded-lg mb-6 bg-white" />
      <p class="text-slate-600 leading-8 mb-5">{{ product.detail }}</p>

      <div class="flex flex-wrap gap-2 mb-5">
        <el-tag v-for="tag in product.tags" :key="tag" type="primary" effect="plain">{{ tag }}</el-tag>
      </div>

      <el-row :gutter="20" class="mb-2">
        <el-col :xs="24" :md="12" class="mb-3">
          <el-card class="brand-card h-full">
            <h3 class="text-lg font-semibold text-slate-800 mb-2">开发周期</h3>
            <p class="text-slate-600">{{ product.devCycle }}</p>
          </el-card>
        </el-col>
        <el-col :xs="24" :md="12" class="mb-3">
          <el-card class="brand-card h-full">
            <h3 class="text-lg font-semibold text-slate-800 mb-2">应用场景</h3>
            <div class="flex flex-wrap gap-2">
              <el-tag v-for="item in product.applications" :key="item" effect="plain">{{ item }}</el-tag>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-divider content-position="left">核心规格</el-divider>
      <ul class="list-disc pl-5 text-slate-600 leading-8">
        <li v-for="item in product.specs" :key="item">{{ item }}</li>
      </ul>
    </el-card>

    <el-empty v-else description="未找到该产品，正在返回产品中心..." />
  </section>
</template>
