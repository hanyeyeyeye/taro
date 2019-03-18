import Taro,{ Component } from '@tarojs/taro';
import { View, Text,Image } from '@tarojs/components';
import './top.less';

export default class Top extends Component{


  render (){
    return (
      <View className={'top'}>
        <View className={'left'}>
          <Image src={require('../../images/head/contract_cur_arrow@3x.png')} className={'image'} />
        </View>
        <View className={'right'}>
          <Image src={require('../../images/head/icon_add_contacts.png')} className={'image'} />
          <Image src={require('../../images/head/icon_add_contacts_gray.png')} className={'image'} />
          <Image src={require('../../images/head/icon_edit.png')} className={'image'} />
          <Image src={require('../../images/head/icon_form_delete.png')} className={'image'} />
        </View>

      </View>
    )
  }
}
