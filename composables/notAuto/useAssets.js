export const useAssets = () => {
  // 使用computed 讓import的資料響應式，eager: 非懶加載模式
  const images = computed(() =>
    import.meta.glob('~/assets/images/room-*.png', { eager: true, import: 'default' })
  )

  // 過濾檔名 ./ or // / 開頭
  const getImageUrl = (filename) => {
    const url = `/assets/images/${String(filename).replace(/^(\.\/+|\/+)/, '')}`
    return images.value?.[url]
  }

  return {
    getImageUrl
  }
}

