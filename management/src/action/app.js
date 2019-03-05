import {createAction} from 'redux-actions'
import * as types from '../constants/ActionTypes';
const  getData= ()=>{
  return {
    get: function(url) {
      // XMLHttpRequest对象用于在后台与服务器交换数据   
      return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();            
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
          // readyState == 4说明请求已完成
          if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) { 
            // 从服务器获得数据 
            let result = JSON.parse(this.responseText);
            if(result.code == 100){
              let res = result.data; 
              resolve(res); 
              console.log(res)      
            }
          }
        };
        xhr.send();
      })
    },
    // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
    post: function (url, data) {
      return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        // 添加http头，发送信息至服务器时内容编码类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
            let result = JSON.parse(this.responseText);
            if(result.code == 100){
              let res = result.data; 
              resolve(res); 
              console.log(res)      
            }
          }
        };
        xhr.send(data);
      })
      
    }
  }
}
const requestUser = createAction(types.REQUEST_USER);
const receiveUser = createAction(types.RECEIVE_USER);
const fetchUser = function(username,password) {
  let param = 'username='+username+'&password='+password;
  let state = getData().post('http://localhost:7070/managementApi/interface/loginInterface.php?method=login',param) 
  return state;
}
export const getUser = (username,password)=>async dispatch =>{
    dispatch(requestUser());
    let user = await fetchUser(username,password);
    console.log(user);
    dispatch(receiveUser(user));
}