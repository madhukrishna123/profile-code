/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var rect = {
    perimeter: function(l,b){
        return 2(l+b);
        
    },
    area:function(l,b){
        return (l*b);
        
    }
};
function solverect(l,b){
    console.log("solving for the lenght l "+ l +"and breath"+ b);
    if(l<0 || b<0){
        console.log("l or b cannot be less than zero");
    }
    else{
        console.log("Area of the rectangle "+ rect.area(l,b));
        console.log("Perimeter of the rectangle "+ rect.perimeter(l,b));
    }
}
solverect(2,3);
solverect(-2,3);

