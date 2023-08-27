// const okk = {
//     uname : "sattu",
//     getName:function(){
//         console.log(this.uname)
//     }
// }
// const ok={
//     uname:"tibbu"
// }
// okk.getName.call(ok)
// okk.getName.apply(ok)
// const okkk=okk.getName.bind(ok)
// console.log(okkk())
// // console.log(a)
// let a ="ssaattttyayyymm"
// let obj ={}
// for (let i =0;i<a.length;i++){
//     if(obj.hasOwnProperty(a[i])){
//         obj[a[i]]=++obj[a[i]]
//     }
//     else{obj[a[i]]=1}
// }
// console.log(obj)
// let str =""
// for(let x in obj){
//     str += x+obj[x]
// }
// console.log(str)


// var player = "Virat";
//   function displayPlayer() {
//     if (player === "Virat") {
//       var player = "VK";
//       console.log(player);
//     }
//     console.log(player);
//   }
//   displayPlayer();
//**********
  var length = 4;

  function callback() {
    console.log(this.length);
  }

  const object = {
    length: 5,
    method: function () {
      arguments[0]();
    },
  };

  object.method(callback, 2, 4);