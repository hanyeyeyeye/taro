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

    let name=selectCata?selectCata.name:'';

    return (
      <View className={'food-list'}>
        <Text>{name}</Text>
        <View className={'food-item'}>
          {
            currentList.map((item)=>{

              return  (
                <View key={item.id} className='food-list-item'>
                  <Image src={item.count==1?require('../../images/food/food1.png'):
                              item.count==2?require('../../images/food/food2.png'):
                                            require('../../images/food/food0.png')} className='food-item-img' />
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
