var matrix1=[
    [40,50,60],
    [70,80,90]
    
    
]
var matrix2=[
    [10,20],
    [30,40],
    [50,60]
];
var multi=[];
for(let i=0; i<matrix1.length;i++){
    //console.log(i);
    var array=[];
    for(let j=0; j<matrix1[i].length-1;j++){
        //console.log(j);
        console.log(`[ [matrix1 (${[i]} ${j}) ${matrix1[i][j]} ] [matrix2 (${[i]} ${j}) ${matrix2[i][j]}] ]`);

        var number1=matrix1[i][j]
        //console.log(number1);
        var number2=matrix2[i][j];
        //console.log(number2);
        var result=matrix1[0][0]*matrix2[0][0]+matrix1[0][1]*matrix2[1][0]+matrix1[0][0]*matrix2[0][1]+matrix1[0][1]*matrix2[1][1]
        console.log(result);
        //array.push(result);
        
    }
    //multi.push(array);

}

// for(let i=0; i<multi.length;i++){
//     //console.log(i);
//     var res='';
//     for(let j =0; j<multi[i].length;j++){
//         //console.log(j);
//         res=res+multi + '\t'
//     }
//     console.log(res);
// }

// var matrix3=[
//     [40,50,60],
//    [70,80,90]
//     // [4,5,6],
//     // [2,3,4]
// ]
// var matrix4=[
//     // [2,4,6],
//     // [1,2,3]
//     [10,20],
//     [30,40],
//     [50,60]
// ]
// var matrixValue=[];

// var row1=matrix3.length;
// //console.log(row1);
// var column1=matrix3[0].length;
// //console.log(column1);

// var row2=matrix4.length;
// //console.log(row1);
// var column2=matrix4[0].length;
// //console.log(column1);

// for(let i=0;i<matrix3.length;i++){
//     //console.log(i);
//     var emptyArray=[];
//     for(let j=0; j<matrix3[i].length;j++){
//         //console.log(j);
//         console.log(`[ matrix3 [ ( ${i} ${j}) ${matrix3[i][j]}] matrix4 [ ( ${i} ${j}) ${matrix4[i][j]}] ]`);

//         var number1=matrix3[i][j];
//         var number2=matrix4[i][j]
//         var sub=matrix3[0][0]*matrix4[0][0] + matrix3[0][1]*matrix4[1][0] + matrix3[0][2]*
//         //+matrix3[0][0]*matrix4[0][1] + matrix3[0][1]+matrix4[1][1]+matrix3[0][2];
    
//         console.log(sub);

//         //emptyArray.push(sub);
        
//     }
//    // matrixValue.push(emptyArray);
//     //console.log(matrixValue);
// }

// // for(let i=0; i<matrixValue.length;i++){
    
// //     res='';
// //     for(let j=0; j<matrixValue[i].length;j++){
// //         var result5=matrixValue[i][j];
// //         //console.log(result5);
// //         res=res+result5 +'\t';
        
// //     }
// //     console.log(res);
// // }