import Taro,{ Component } from '@tarojs/taro';
import { View ,Text,Image} from '@tarojs/components';
import {GetFoodCount,SetFoodCount,getEvent} from '../../utils/common';
import './addCut.less'
const myEvent =getEvent();
export default class AddCut extends Component{

  constructor () {
    super(...arguments);
    this.state = {
        count:0
    }
  }
  addCut(){
    let {count} =this.state;
    if(this.props.food){
      SetFoodCount(this.props.food,this.state.count,'add',()=>{
        this.setState({
          count:count+1
        });
        myEvent.emit('changeCut');
      });

    }
  }

  deleteCut(){
    let {count} =this.state;
    if(this.props.food){
      if(count>0){
        SetFoodCount(this.props.food,this.state.count,'delete',()=>{
          this.setState({
            count:count-1
          });
          myEvent.emit('changeCut')
        });

      }
    }
  }

  componentDidMount(){
    this.setState({
      count:GetFoodCount(this.props.food)
    });
    myEvent.on('change_cut',()=>{
      this.setState({
        count:GetFoodCount(this.props.food)
      })
    })
  }

  render (){

    return (
      <View className={'addcut'}>
        <Image src={require('../../images/food/delete.gif')} className={'addcut-img'} onClick={this.deleteCut.bind(this)} />
        <Text className={'addcut-text'}>{this.state.count}</Text>
        <Image src={require('../../images/food/add.jpg')} className={'addcut-img'} onClick={this.addCut.bind(this)} />
      </View>

    )
  }
}
