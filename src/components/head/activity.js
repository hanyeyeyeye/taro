import Taro,{Component} from '@tarojs/taro';
import {View ,Text} from '@tarojs/components';
import './activity.less'

export default class Activety extends Component{
  constructor(props){
    super(props);
    this.state={
      activity:[
        {
          type:'cut',
          activity:[
            {total:30,cut:5},
            {total:48,cut:10},
            {total:100,cut:30}
          ]
        }
      ],

    }
  }
  getType = (type) => {
    return type === 'cut'? '减' : '满减'
  }

  render () {
    let {activity:[firstItem]} = this.state;
    return (
      <View className={'activity'}>
        <Text className={'type'}>{this.getType(firstItem.type)}</Text>
        <Text>
          {
            firstItem.activity.map((item)=>{
              return `满${item.total}减${item.cut}`;
            })
          }
        </Text>
        <Text className={'length'}>
          {firstItem.activity.length}个活动
        </Text>
      </View>
    )
  }
}
