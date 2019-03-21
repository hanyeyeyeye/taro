import Taro,{ Component } from '@tarojs/taro';
import { View,Image,Text } from '@tarojs/components';
import {GetAllFoodInfo,getEvent} from '../../utils/common';
import './bottom.less';

let myEvent =getEvent();
export default class Bottom extends Component{

  constructor () {
    super(...arguments);
    this.state = {
      num:0,
      sendPrice:3,
      isSupport:true,
      sendMustPrice:20,
      totalPrice:0
    }
  }

  componentDidMount(){
    let {total,numTotal}=GetAllFoodInfo();
    this.setState({
      num:numTotal,
      totalPrice:total
    });
    myEvent.on('changeCut',()=>{
      let {total,numTotal}=GetAllFoodInfo();
      this.setState({
        num:numTotal,
        totalPrice:total
      });
    })
  }
  render (){
    let {num,sendPrice,isSupport,sendMustPrice,totalPrice} =this.state;
    return (
      <View className={'bottom'}>
        <View className={'bottom-body'}>
          {num==0?'':<Text className={'num'}>{num}</Text>}
          <Image
            src={require(num==0?'../../images/bottom/car2.gif':'../../images/bottom/car1.gif')}
            className={'store-img'} />
          <View className={'info'}>
            {totalPrice==0?
              <Text>{sendPrice?`另需配送费¥${sendPrice}  |  `:''}</Text>:
              <Text className={'price'}>{`¥${totalPrice}`}</Text>
            }
            <Text>{isSupport?'支持自取':''}</Text>
          </View>
          {totalPrice==0?
            <View className={'submit'}>{sendMustPrice?`¥${sendMustPrice}起送`:''}</View>:
            <View className={'goPay'}>去结算</View>
          }

        </View>

      </View>

    )
  }
}
