import Taro,{ Component } from '@tarojs/taro';
import { View, Text ,Image} from '@tarojs/components'
import Top from './top';
import Activity from './activity';
import './head.less'

export default class Head extends Component{
  constructor(props){
    super(props);
    this.state={
      store:{
        title:'红玫瑰',
        notice:'欢迎光临～',
        text:[
          '颜色正','花期长','赠品多'
        ]
      }
    }
}

  render (){
    let {store} =this.state;
      return (
        <View className={'head'}>
          <Top />
          <Image src={require('../../images/head/head-bg.jpg')} className={'bg-image'} />
          <View className={'store'}>
            <Image src={require('../../images/head/rose.jpg')} className='store-image' />
            <View className={'store-text'}>
              <Text>{store.title}</Text>
              <Text>{store.notice}</Text>
              <View>
                {store.text.map((txt,index)=> <Text key={index} className={'tag-text'}>{txt}</Text>)}
                </View>

            </View>
          </View>
          <Activity>

          </Activity>
        </View>

      )
  }
}
