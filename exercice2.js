const arr = [0,1,"","0",null,undefined,NaN,false,[],{}];

for (let i = 0; i < arr.length; i++) {
    if(i % 2 == 0){
        console.log(`${arr[i]} -> falsy`);
    }else{
        console.log(`${arr[i]} -> truthy`);
    }   
}