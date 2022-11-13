let clock = ()=>{
    let date = new Date()
    let ma = date.getMonth();
    let day = date.getDate();
   let hours = date.getHours();
   let minuts = date.getMinutes();
   let seconds = date.getSeconds();
   let miniseconds = date.getMilliseconds();
   let a = date.getDate();
   if (day <=9) day = '0' +day;
   if (hours <=9) hours = '0' + hours;
   if (minuts <=9) minuts = '0' +minuts;
   if (seconds <=9) seconds = '0' +seconds;
   if (miniseconds <=9) miniseconds = '0' +miniseconds;
   let month =['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','November','Декабрь'];
   let date_time =         + hours + ':' + minuts + ' '+ 'PM.' + seconds + ':' + miniseconds + ' ' + 'SEC.' +' ' + 'MONTH.' + ' ' + month[ma]
 let elemet = document.getElementById('time')
 elemet.innerHTML = date_time
   setTimeout('clock()', 1000);
//    setTimeout(() => {
//    clock()
//    }, 1000);
}
clock()


