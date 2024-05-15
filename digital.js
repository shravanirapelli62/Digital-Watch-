const result1=document.getElementById('time')
const result2=document.getElementById('time1')




let date= new Date()
 let hours=date.getHours()
 let mint=date.getMinutes()
 let sec=date.getSeconds()

 console.log(hours,mint,sec,date);

p=setInterval(()=>{
let date= new Date()
 let hours=date.getHours()
 let mint=date.getMinutes()
 let sec=date.getSeconds()

 console.log(hours,mint,sec,date);
 result1.innerHTML=`${hours}:${mint}:${sec}`
},1000)


p1=setInterval(()=>{
    let time=new Date().toLocaleTimeString();
    result2.innerHTML=`${time}`
    console.log(time)
},1000)
