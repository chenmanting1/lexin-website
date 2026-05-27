<script setup>
import { businessAreas, advantages, newsList, products } from '../data/siteData'
import { getProductImage } from '../utils/images'
import { useRouter } from 'vue-router'
const router = useRouter()

const openDetail = (id) => {
  router.push(`/product/${id}`)
}

const goToProduct = () => {
  router.push('/product')
}
</script>

<template>
  <!-- Banner -->
  <section class="w-full h-[500px] md:h-[520px] flex flex-col items-center justify-center text-white text-center
  bg-[linear-gradient(rgba(19,71,145,.58),rgba(19,71,145,.58)),url(https://picsum.photos/1920/1080)] bg-cover bg-center">
    <h1 class="text-[58px] font-bold mb-4 md:text-[44px] max-md:text-[28px] leading-tight">专注智能硬件 · 物联网技术</h1>
    <p class="text-xl md:text-[30px] max-md:text-[18px] mb-6">智能定位 | 智能硬件 | 手持热成像 | DMR对讲模块 | 北斗三号短报文 | 三防手机</p>
    <el-button type="primary" size="large" class="!px-10 !h-12 !text-base" @click="goToProduct">了解更多</el-button>
  </section>

  <!-- 产品预览 -->
  <section class="brand-section">
    <h2 class="brand-title">核心产品</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <el-card v-for="item in products.slice(0, 3)" :key="item.id" class="brand-card cursor-pointer" @click="openDetail(item.id)">
        <img :src="getProductImage(item.id)" class="w-full h-[220px] object-contain rounded bg-white">
        <div class="pt-5">
          <h3 class="text-lg font-bold mb-2 text-slate-800">{{ item.name }}</h3>
          <p class="text-slate-500">{{ item.shortDesc }}</p>
        </div>
      </el-card>
    </div>
  </section>

  <section class="brand-section !pt-0">
    <h2 class="brand-title">业务领域</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      <el-card v-for="item in businessAreas" :key="item" class="brand-card text-center !py-2">
        <div class="font-semibold text-slate-700">{{ item }}</div>
      </el-card>
    </div>

    <h2 class="brand-title">技术优势</h2>
    <el-row :gutter="20" class="mb-8">
      <el-col v-for="item in advantages" :key="item.title" :xs="24" :md="8" class="mb-4">
        <el-card class="brand-card h-full">
          <h3 class="text-lg font-bold text-slate-800 mb-2">{{ item.title }}</h3>
          <p class="text-slate-500 leading-7">{{ item.desc }}</p>
        </el-card>
      </el-col>
    </el-row>

    <!-- <el-row :gutter="20">
      <el-col :xs="24" :md="12" class="mb-4">
        <el-card class="brand-card h-full">
          <h3 class="text-xl font-bold text-slate-800 mb-3">公司介绍</h3>
          <p class="text-slate-500 leading-8">
            深圳乐心信息技术有限公司专注智能硬件研发与行业化应用，
            提供从技术研发、产品设计到规模交付的一体化服务。
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="12" class="mb-4">
        <el-card class="brand-card h-full">
          <h3 class="text-xl font-bold text-slate-800 mb-3">新闻动态</h3>
          <ul class="text-slate-500 leading-8">
            <li v-for="item in newsList" :key="item.title">{{ item.date }}｜{{ item.title }}</li>
          </ul>
        </el-card>
      </el-col>
    </el-row> -->
  </section>
</template>