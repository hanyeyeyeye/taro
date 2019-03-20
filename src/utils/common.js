
import Taro from '@tarojs/taro';
import Event from './events';
let myEvent = new Event();
const foodKey = "taro_meituan";
export function GetFoodCount(food){
  let store =Taro.getStorageSync(foodKey);
    if(store){
      if(store[food.id]){
        return store[food.id].num
      }else{
        return 0;
      }
    }else{
      return 0;
    }
}

export function SetFoodCount(food,num,type,callback){
  if(!food){
    return;
  }
  let store =Taro.getStorageSync(foodKey);
  if(!store){
    store={};
  };
  if(type=='delete'){
    if(num<=1){
      if(store[food.id]){
        delete store[food.id]
      }
    }else{
      if(store[food.id]){
        store[food.id].num=num-1;
      }
    }
    Taro.setStorageSync(foodKey,store)
  }else{
    if(store[food.id]){
      store[food.id].num=num+1;
    }else{
      store[food.id]={

        num:1,
        ...food

      };
    }
    Taro.setStorageSync(foodKey,store)
  }
  callback&&callback()
}

export function getEvent(){
  return myEvent
}
