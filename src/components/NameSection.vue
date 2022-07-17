<template>
  <div class="tw-text-2xl">
    {{ typeValue }}
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NameSection',

  setup() {
    const typeValue = ref('')
    const typeStatus = ref(false)
    const typeArray = ref(['fun', 'awesome', 'a journey', 'a life'])
    const typingSpeed = ref(200)
    const erasingSpeed = ref(100)
    const newTextDelay = ref(2000)
    const typeArrayIndex = ref(0)
    const charIndex = ref(0)

    const eraseText = () => {
      if (charIndex.value > 0) {
        if (!typeStatus.value)
          typeStatus.value = true

        typeValue.value = typeArray.value[typeArrayIndex.value].substring(0, charIndex.value -1)
        charIndex.value -= 1 

        setTimeout(eraseText, erasingSpeed.value)
      } else {
        typeStatus.value = false
        typeArrayIndex.value += 1

        if (typeArrayIndex.value >= typeArray.value.length) {
          typeArrayIndex.value = 0

          setTimeout(typeText, typingSpeed.value + 1000)
        }
      }
    }
    eraseText()

    const typeText = () => {
      if (charIndex.value < typeArray.value[typeArrayIndex.value].length) {
        if (!typeStatus.value)
          typeStatus.value = true

        typeValue.value += typeArray.value[typeArrayIndex.value].charAt(charIndex.value)
        charIndex.value += 1

        setTimeout(typeText, typingSpeed.value)
      } else {
        typeStatus.value = false
        setTimeout(eraseText, newTextDelay.value)
      }
    }
    typeText()
    setTimeout(typeText(), newTextDelay.value + 200)

    return {
      typeValue,
      typeStatus,
      typeArray,
      typingSpeed, 
      erasingSpeed,
      newTextDelay,
      typeArrayIndex,
      charIndex
    }
  },
})
</script>