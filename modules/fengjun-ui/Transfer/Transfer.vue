<template>
  <div>
    <div>
      <selector :data="options" @selectChange="setTargetIndex"></selector>
    </div>
    <div class="transfer">
      <div class="box left-list">
        <h1 class="list-title">{{ leftTitle}}</h1>
        <div>
          <div v-for="item of leftListData" :key="item.id" :class="['list-item', item.disabled?'disabled':'']">
            <input type="checkbox" :disabled="item.disabled" :id="'__checkbox__'+item.id"
              @click="setCheckedData($event.target.checked,'left',item)">
            <label :for="'__checkbox__'+item.id">{{ item.phone_name }}</label>
          </div>
        </div>
      </div>
      <div class="box button-group">
        <button :disabled="transferButtonDisabled.left" @click="removeRightListData(checkedData.right)">&lt;</button>
        <button :disabled="transferButtonDisabled.right" @click="addRightListData(checkedData.left)">&gt;</button>
      </div>
      <div class="box right-list">
        <h1 class="list-title">{{ rightTitle }}</h1>
        <div>
          <div v-for="item of rightListData" :key="item.id" :class="['list-item', item.disabled ? 'disabled' : '']">
            <input type="checkbox" :disabled="item.disabled" :id="'__checkbox__' + item.id"
              @click="setCheckedData($event.target.checked, 'right', item)">
            <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import Selector from './components/Selector';
import propsDefination from './extends/props'
import { useTargetIndex, useComputedData, useRightListData, useCheckedData } from './extends/hooks'
const props = defineProps(propsDefination)

const options = props.data.map(({ title }) => title)

const [
  targetIndex,
  setTargetIndex
] = useTargetIndex(0)


const [
  checkedData,
  addCheckedData,
  removeCheckedData
] = useCheckedData()
const [
  rightListData,
  addRightListData,
  removeRightListData
] = useRightListData([], checkedData)

const { leftTitle, leftListData,transferButtonDisabled } = useComputedData(props.data, targetIndex, rightListData,checkedData)

const setCheckedData = (checked,leftOrRight,item) => {
  checked ? addCheckedData(leftOrRight, item) : removeCheckedData(leftOrRight, item.id)
}

</script>
<style scoped lang='scss'>
  .transfer{
    width: 360px;
    height: 300px;
    display: flex;
    flex-direction: row;
    border: 1px solid #efefef;
    .box{
      width: 120px;
      height: 100%;
      .list-title{
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-weight: normal;
        color: #666;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
        background-color: #efefef;
      }
    }
    .list-item{
      display: flex;
      align-items: center;
      font-style: 12px;
      height: 36px;
      color: #666;

      &.disabled{
        opacity: .6;
      }
    }
    .button-group{
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
      
      button{
        border: none;
        outline: none;
        width: 38px;
        height: 38px;
        background-color: orange;
        color:#fff;
        border-radius: 5px;
        &:disabled{
          opacity: .6;
        }
        &:nth-child(2){
          margin-left: 10px;
        }
      }
    }
  }
</style>
