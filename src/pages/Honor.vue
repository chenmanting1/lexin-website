<script setup>
import { computed } from 'vue'
import { certificates } from '../data/siteData'
import { getCertImage, getCertPreviewList } from '../utils/images'
import { Loading } from '@element-plus/icons-vue'

const previewList = computed(() => getCertPreviewList(certificates))
</script>

<template>
  <section class="brand-section">
    <h2 class="brand-title">资质荣誉 / 软件著作权</h2>
    <p class="brand-body text-center max-w-3xl mx-auto mb-10">
      深圳乐心信息技术有限公司深耕北斗通信、智能定位与物联网领域，坚持自主研发与技术创新。核心产品与系统均获得国家版权局计算机软件著作权登记，技术原创性、稳定性与安全性得到权威认可。
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <el-card
        v-for="(item, index) in certificates"
        :key="item.number"
        class="brand-card overflow-hidden"
      >
        <div class="cursor-zoom-in">
          <el-image
            :src="getCertImage(item.image)"
            :preview-src-list="previewList"
            :initial-index="index"
            fit="contain"
            lazy
            class="w-full h-[200px] bg-slate-50 rounded"
            :preview-teleported="true"
          >
            <template #placeholder>
              <div class="flex items-center justify-center h-full">
                <el-icon class="is-loading text-2xl text-slate-300"><Loading /></el-icon>
              </div>
            </template>
            <template #error>
              <div class="flex items-center justify-center h-full text-slate-400 text-sm">
                暂无图片
              </div>
            </template>
          </el-image>
        </div>
        <div class="mt-4">
          <h3 class="text-base font-bold text-slate-800 mb-2 leading-snug">{{ item.name }}</h3>
          <p class="text-sm text-slate-500 mb-1">登记号：{{ item.number }}</p>
          <p class="text-sm text-slate-500">发证：{{ item.date }}</p>
        </div>
      </el-card>
    </div>
  </section>
</template>
