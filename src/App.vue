<script setup lang='ts'>
const data = [
  {
    title: '华为',
    children: [
      {
        id: 1,
        phone_name: 'Mate 70',
        disabled: false
      },
      {
        id: 2,
        phone_name: 'Mate 80',
        disabled: true
      },
      {
        id: 3,
        phone_name: 'Mate 90',
        disabled: false
      },
      {
        id: 4,
        phone_name: 'Mate 100',
        disabled: false
      }
    ]
  },
  {
    title: '小米',
    children: [
      {
        id: 5,
        phone_name: '小米11',
        disabled: false
      },
      {
        id: 6,
        phone_name: '小米12',
        disabled: true
      },
      {
        id: 7,
        phone_name: '小米13',
        disabled: false
      },
      {
        id: 8,
        phone_name: '小米14',
        disabled: false
      }
    ]
  },
  {
    title: 'iPhone',
    children: [
      {
        id: 9,
        phone_name: 'iPhone15',
        disabled: false
      },
      {
        id: 10,
        phone_name: 'iPhone16',
        disabled: true
      },
      {
        id: 11,
        phone_name: 'iPhone15 Pro',
        disabled: false
      },
      {
        id: 12,
        phone_name: 'iPhone15 Pro Max',
        disabled: false
      }
    ]
  }
]
</script>

<template>
  <div>
    <transfer :data="data" right-title="请选择手机"></transfer>
  </div>
</template>

<style scoped lang='scss'></style>
