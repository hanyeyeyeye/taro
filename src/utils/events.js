
class Event {
  constructor(){
    this.events={};
  }
  on(eventName,callback){
    if(this.events[eventName]){
      this.events[eventName].push(callback)
    }else{
      this.events[eventName]=[callback]
    }
  }
  emit(eventName,params){
    if(this.events[eventName]){
      this.events[eventName].map((il)=>{
        il(params);
      })
    }
  }
}

export default Event;
