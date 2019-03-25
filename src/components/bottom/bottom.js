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

  componentDidMount (){
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
    let showNum=null,
      imgSrc=null,
      sendText=sendPrice?`另需配送费¥${sendPrice}  |  `:'',
      showInfo=null,
      showBtn=null,
      sendMustPriceText=sendMustPrice?`¥${sendMustPrice}起送`:'',
      showSupport=isSupport?'支持自取':'';

    if (num==0){
      showNum=''
      imgSrc=require('../../images/bottom/car2.gif');
    }else{
      showNum=(<Text className='num'>4</Text>)
      imgSrc=require('../../images/bottom/car1.gif')
    };

    if (totalPrice==0){
      showInfo=(<Text>{sendText}</Text>);
      showBtn=(<View className={'submit'}>{sendMustPriceText}</View>)
    }else{
      showInfo=(<Text className='price'>{`¥${totalPrice}`}</Text>);
      showBtn=(<View className={'goPay'}>去结算</View>);
    };

    return (
      <View className={'bottom'}>
        <View className={'bottom-body'}>
          {/*{showNum}*/}
          {/*{num==0?'':<Text className='num'>{num}</Text>}*/}
          <Text className='num'>{num}</Text>
          <Image
            src={imgSrc}
            className={'store-img'} />
          <View className={'info'}>
            {showInfo}
            <Text>{showSupport}</Text>
          </View>
          {showBtn}
        </View>

      </View>

    )
  }
}
