function fruits(){
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);

}

fruits();


function example() {

   
     for (let i = 0; i < 10; i++){
       setTimeout(function(){
         console.log(i)
       }, 1000)
     }
   }
   
   example()
