import Taro,{ Component } from '@tarojs/taro';
import { View} from '@tarojs/components';
import { AtTabs, AtTabsPane} from 'taro-ui';
import Cata from './cata';
import FoodList from './foodlist';
import './food.less';


export default class Food extends Component{

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      tabList:[
        { title: '点菜' },
        { title: '评价' },
        { title: '商家' },
      ],
      foodList:[],
      currentList:[],
      selectCata:null
    }
  }

  handleClick= (value)=> {
    this.setState({
      current: value,
    })
  }

  getData(selectCata){
    let count =Math.round(Math.random()*2);
    // let imgUrl =`../../images/food${count}.png`;
    return Array.from(Array(Math.round(Math.random()*20)),
      (v,k)=>({

        pid:selectCata.id,
        id:selectCata.id+'_'+k,
        title:"分类"+selectCata.id+"菜品"+(k+1),
        solo:Math.round(Math.random()*50),
        price:Math.round(Math.random()*20),
        count,
      }))
  }

  changeCata(selectCata){
    let arr =null;
    this.setState({
      selectCata
    });
    if(this.state.foodList.some(item => item.pid===selectCata.id)){
      arr=this.state.foodList.filter(item => item.pid===selectCata.id);
      this.setState({
        currentList:arr
      })
    }else{
      let temarr = this.getData(selectCata);
      arr=this.state.foodList.concat(temarr);
      this.setState({
        currentList:temarr,
        foodList:arr
      })
    }
  }

  render (){
    let {current, tabList ,currentList ,selectCata} =this.state;
    return (
      <View>
        <AtTabs current={current} tabList={tabList} onClick={this.handleClick}>
          <AtTabsPane>
            <View className={'food-body'}>
              <Cata onChangeCata={this.changeCata.bind(this)} />
              <FoodList currentList={currentList} selectCata />
            </View>

          </AtTabsPane>
        </AtTabs>
      </View>

    )
  }
}
