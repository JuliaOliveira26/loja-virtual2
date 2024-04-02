import { shallowRef, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
export default function useLayout(){
    const layout = shallowRef(null)

    const onResize = () => {
        if(width < 768) {
        layout.value = defineAsyncComponent(() => import('@/layouts/LayoutSmall.vue'))
            } else if (width < 1200){
             layout.value = defineAsyncComponent(() => import('@/layouts/LayoutMedium.vue'))
                 } else{
                     layout.value = defineAsyncComponent(() => import('@/layouts/LayoutLarge.vue'))
    }
}

onMounted(() => {
    window.addEventListener('resize', onResize)
    onResize()
})

onUnmounted(() => {
    window.removeEventListener('resize', onResize)
})

return { layout}

}