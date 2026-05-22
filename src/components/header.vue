<template>
    <header class="site-header w-full h-[70px] sticky top-0 z-50">
      <div class="max-w-[1200px] mx-auto h-full flex justify-between items-center px-5">
        <div class="text-2xl font-bold text-[#0b69d1]">深圳乐心信息技术有限公司</div>
  
        <!-- PC导航 -->
        <nav class="hidden md:flex gap-6">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/product" class="nav-link">产品中心</router-link>
          <router-link to="/about" class="nav-link">关于我们</router-link>
          <router-link to="/honor" class="nav-link">企业荣誉</router-link>
          <!-- <router-link to="/news" class="nav-link">c</router-link> -->
          <router-link to="/contact" class="nav-link">联系我们</router-link>
        </nav>
  
        <!-- 汉堡按钮 -->
        <div class="md:hidden text-2xl cursor-pointer text-slate-700" @click="showMenu = !showMenu">
          ☰
        </div>
      </div>
  
      <!-- 移动端菜单 -->
      <div v-if="showMenu" class="md:hidden absolute top-[70px] left-0 w-full bg-white border-t border-slate-200 shadow-lg">
        <router-link to="/" @click="showMenu=false" class="block py-3 px-5 text-slate-700 hover:bg-slate-50">首页</router-link>
        <router-link to="/product" @click="showMenu=false" class="block py-3 px-5 text-slate-700 hover:bg-slate-50">产品中心</router-link>
        <router-link to="/about" @click="showMenu=false" class="block py-3 px-5 text-slate-700 hover:bg-slate-50">关于我们</router-link>
        <router-link to="/honor" @click="showMenu=false" class="block py-3 px-5 text-slate-700 hover:bg-slate-50">企业荣誉</router-link>
        <!-- <router-link to="/news" @click="showMenu=false" class="block py-3 px-5 text-slate-700 hover:bg-slate-50">新闻资讯</router-link> -->
        <router-link to="/contact" @click="showMenu=false" class="block py-3 px-5 text-slate-700 hover:bg-slate-50">联系我们</router-link>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const showMenu = ref(false)
  </script>