/*
 *
 * Implementing a function to explore FP helpers of array
 * 
 * 
 * 
 */
function arrayOperatons(arr) {

    // double the array
    var double_arr = arr.map(function(x){
        return x * 2;
    });
    // filter the array based on value > 20
    var double_arr_filtered = double_arr.filter(function(x)
    {
         return x > 20;
    });
    // reducing the array
    var double_arr_filtered_sum = double_arr_filtered.reduce(function(sum,value)
    {
        return sum + value;
    });

    return double_arr_filtered_sum;

}
// invoking counterReducer
var arr = [10,8,12,36];
 var me = arrayOperatons(arr);
 console.log("Result: "+ me);
 


