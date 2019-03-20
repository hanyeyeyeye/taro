import Taro,{ Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import {getEvent} from '../../utils/common';
import './cata.less';

let myEvent = getEvent();
export default class Cata extends Component{
  constructor (){
    super(...arguments);
    this.state={
      selectCata:null,
      cata:[
        {name:'专场',id:1},
        {name:'热销',id:2},
        {name:'折扣',id:3},
        {name:'主食',id:4},
        {name:'热菜',id:5},
        {name:'凉菜',id:6},
        {name:'特色菜',id:7},
      ]
    }
  }
  clickHandle(item){
    let {selectCata} =this.state;
    if(selectCata&&selectCata.id!=item.id){
      this.setState({
        selectCata:item
      },()=>{
        this.props.onChangeCata&&this.props.onChangeCata(this.state.selectCata)
      });
      myEvent.emit('change_cut')
    }else if(!selectCata){
      this.setState({
        selectCata:item
      },()=>{
        this.props.onChangeCata&&this.props.onChangeCata(this.state.selectCata)
      })
      myEvent.emit('change_cut')
    }
  }
  componentDidMount(){
    this.clickHandle({name:'专场',id:1})
  }
  render (){
    let {cata,selectCata} =this.state;
    return (
      <View className={'cata'}>
        {
          cata.map((item)=>{
            return (<Text onClick={this.clickHandle.bind(this,item)} key={item.id} className={'cata-name ' +((selectCata&&selectCata.id==item.id)?'selectCata':'')}>{item.name}</Text>)
          })
        }

      </View>
    )
  }
}
