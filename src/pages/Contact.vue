<script setup>
import { companyProfile } from '../data/siteData'
const openPhone = () => { window.location.href = `tel:${companyProfile.phone}` }
const openEmail = () => { window.location.href = `mailto:${companyProfile.email}` }
</script>

<template>
  <section class="brand-section">
    <h2 class="brand-title">联系我们</h2>
    <p class="brand-body text-center max-w-2xl mx-auto mb-8">
      欢迎与我们联系，了解智能硬件定制与物联网整体解决方案。我们提供从研发到交付的一站式服务，快速响应企业需求。
    </p>

    <!-- 公司信息 -->
    <el-card class="brand-card mb-6">
      <h3 class="text-lg font-semibold text-slate-800 mb-3">{{ companyProfile.name }}</h3>
      <p class="text-slate-500 leading-7 mb-5">
        {{ companyProfile.qualification }} · 成立于 {{ companyProfile.founded }} 年，专注智能硬件与物联网定制开发，服务于文旅、应急、工业巡检、安防等多个行业。
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="px-4 py-3 bg-slate-50 rounded-lg">
          <p class="text-sm text-slate-500 mb-1">公司地址</p>
          <p class="text-slate-800 font-semibold">{{ companyProfile.address }}</p>
        </div>
        <div class="px-4 py-3 bg-slate-50 rounded-lg">
          <p class="text-sm text-slate-500 mb-1">联系电话</p>
          <p class="text-slate-800 font-semibold">{{ companyProfile.phone }}</p>
        </div>
        <div class="px-4 py-3 bg-slate-50 rounded-lg">
          <p class="text-sm text-slate-500 mb-1">联系邮箱</p>
          <p class="text-slate-800 font-semibold">{{ companyProfile.email }}</p>
        </div>
        <div class="px-4 py-3 bg-slate-50 rounded-lg">
          <p class="text-sm text-slate-500 mb-1">服务时间</p>
          <p class="text-slate-800 font-semibold">周一 至 周五 09:00 - 18:00</p>
        </div>
      </div>
    </el-card>

    <!-- 核心信息 & 咨询 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <el-card class="brand-card">
        <h3 class="text-lg font-semibold text-slate-800 mb-3">核心信息</h3>
        <div class="space-y-3">
          <div class="px-3 py-2 bg-slate-50 rounded text-center">
            <p class="text-sm text-slate-500">国家级资质</p>
            <p class="font-semibold text-slate-800">{{ companyProfile.qualification }}</p>
          </div>
          <div class="px-3 py-2 bg-slate-50 rounded text-center">
            <p class="text-sm text-slate-500">成立时间</p>
            <p class="font-semibold text-slate-800">{{ companyProfile.founded }}</p>
          </div>
          <div class="px-3 py-2 bg-slate-50 rounded text-center">
            <p class="text-sm text-slate-500">核心方向</p>
            <p class="font-semibold text-slate-800">智能硬件</p>
          </div>
        </div>
      </el-card>

      <el-card class="brand-card">
        <h3 class="text-lg font-semibold text-slate-800 mb-3">企业实力</h3>
        <div class="space-y-3">
          <div class="px-3 py-2 bg-slate-50 rounded text-center">
            <p class="text-2xl font-bold text-slate-900">{{ companyProfile.founded }}</p>
            <p class="text-sm text-slate-500">成立年份</p>
          </div>
          <div class="px-3 py-2 bg-slate-50 rounded text-center">
            <p class="text-2xl font-bold text-slate-900">17+</p>
            <p class="text-sm text-slate-500">年行业经验</p>
          </div>
          <div class="px-3 py-2 bg-slate-50 rounded text-center">
            <p class="text-2xl font-bold text-slate-900">全产业链</p>
            <p class="text-sm text-slate-500">研发 · 设计 · 生产 · 服务</p>
          </div>
        </div>
      </el-card>

      <el-card class="brand-card">
        <h3 class="text-lg font-semibold text-slate-800 mb-3">立即咨询</h3>
        <p class="text-slate-500 leading-7 mb-5">
          通过电话或邮件快速对接项目需求，获取智能硬件定制方案与专业建议。
        </p>
        <div class="space-y-3">
          <el-button type="primary" class="w-full" @click="openPhone">电话咨询</el-button>
          <el-button type="success" class="w-full" style="margin-left: 0;" @click="openEmail">邮件咨询</el-button>
        </div>
      </el-card>
    </div>
  </section>
</template>
