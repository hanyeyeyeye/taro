import Taro,{ Component } from '@tarojs/taro';
import { View ,Text , Image} from '@tarojs/components';
import AddCut from '../addcut/addCut';
import './foodlist.less';

export default class FoodList extends Component{

  constructor () {
    super(...arguments);
    this.state = {

    }
  }


  render (){
    let {selectCata ,currentList} =this.props;
    return (
      <View className={'food-list'}>
        <Text>{selectCata?selectCata.name:''}</Text>
        <View className={'food-item'}>
          {
            currentList.map((item)=>{
              // let url = `../../images/food/food${item.count}.png`;
              return  (
                <View key={item.id} className='food-list-item'>
                  <Image src={require(item.count==1?'../../images/food/food1.png':item.count==2?'../../images/food/food2.png':'../../images/food/food0.png')} className='food-item-img' />
                  <View className='food-item-info'>
                    <Text>{item.title}</Text>
                    <Text>月售{item.solo}</Text>
                    <Text className='price'>¥{item.price}</Text>
                  </View>
                  <AddCut food={item} />
                </View>
              )
            })
          }
        </View>
      </View>

    )
  }
}
