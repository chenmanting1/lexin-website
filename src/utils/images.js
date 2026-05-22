// 使用 Vite 的 import.meta.glob 动态导入所有图片
// 这样 Vite 会自动处理 base 路径和文件 hash

const productImages = import.meta.glob('../assets/product/*.png', { eager: true, import: 'default' })
const certImages = import.meta.glob('../assets/certificates/*.jpg', { eager: true, import: 'default' })

/**
 * 获取产品图片 URL
 * @param {string} id - 产品 ID，如 'beidou-handset'
 * @returns {string} 图片 URL
 */
export function getProductImage(id) {
  const key = `../assets/product/${id}.png`
  return productImages[key] || ''
}

/**
 * 获取证书图片 URL
 * @param {string} filename - 证书图片文件名，如 'patent-4g-beidou-gps.jpg'
 * @returns {string} 图片 URL
 */
export function getCertImage(filename) {
  const key = `../assets/certificates/${filename}`
  return certImages[key] || ''
}

/**
 * 获取所有产品图片 URL 映射 { id: url }
 */
export function getAllProductImages() {
  const map = {}
  for (const [path, url] of Object.entries(productImages)) {
    const id = path.match(/\/([^/]+)\.png$/)?.[1] || ''
    if (id) map[id] = url
  }
  return map
}

/**
 * 获取所有证书图片预览列表
 * @param {Array} certificates - 证书数据数组
 * @returns {Array} 图片 URL 数组
 */
export function getCertPreviewList(certificates) {
  return certificates.map((item) => getCertImage(item.image))
}
