export class Solution {
    constructor(id: any) {
        console.log("Let's learn Typescript for digital mapping and visualization!!");
        console.log("03 Typescript, Data structure");
        console.log("==============================================================");

        // Codepan
        // https://codepen.io/NJStudio/pen/wvMabpp?editors=1010

        // Python version 
        // https://colab.research.google.com/drive/1hF5YaGvZxKX3ME1MJCTbZkeqPkALz0xS?usp=sharing

        // Data Structure
        // 8. .................... Array(List)

        // let theListA = [1,2,3,4,5]
        // let theListB = ["hello world"]
        // console.log(theListA)
        // console.log(theListA[3])

        // console.log(theListB)

        // theListB.push(3) // theListB.append(3) in Python
        // theListB.push(6)
        // console.log(theListB)

        // array

        // // Reference
        // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

        // // Create an Array
        // let fruits = ['Apple', 'Banana']
        // console.log('fruits length', fruits.length) // 2


        // // Access an Array item using the index position
        // let first = fruits[0]
        // console.log('first', first)

        // let last = fruits[fruits.length - 1]
        // console.log('last', last)

        // first = 'Fineapple';
        // console.log(fruits)


        // // Modify an iteam in an Array
        // fruits[0] = 'Fineapple';
        // console.log(fruits)


        // // Add an item to the end of an Array
        // fruits.push('Orange')
        // console.log(fruits)


        // // Remove an item from the end of an Array
        // let last = fruits.pop() // remove Orange (from the end)
        // console.log(fruits) // ["Fineapple", "Banana"]


        // // Add an item to the beginning of an Array
        // let newLength = fruits.unshift('Strawberry') // add to the front
        // console.log(fruits) // ["Strawberry", "Fineapple", "Banana"]


        // // Remove an item from the beginning of an Array
        // let indexNumber = fruits.indexOf('Fineapple')
        // console.log(indexNumber);


        // // Remove an item by index position
        // let removedItem = fruits.splice(indexNumber, 1) // this is how to remove an item         
        // console.log(fruits);


        // // Check an iteam
        // console.log('includes apple?',fruits.includes('banana'));
        // console.log('includes apple?',fruits.includes('Banana'));


        // // Merge arrays
        // let array1 = ['a', 'b', 'c'];
        // let array2 = ['d', 'e', 'f'];
        // let array3 = array1.concat(array2);
        // console.log(array3);


        // // Loop an array
        // // javascript function
        // for(let index = 0 ; index < array3.length; ++index) {
        // 	  console.log('by for loop :', array3[index], index);
        // }
        // array3.forEach(function(item, index) {
        //   console.log('by foreach :',item, index)
        // })
        // // Arrow function
        // array3.forEach((item, index) => {
        //   console.log('by arrow function :', item, index)
        // })


        // 9. .................... String
        // Python
        // myData = 'a,b,c,d,e,f';
        // print(myData)
        // dataArray = myData.split(',');
        // print(dataArray)
        // for i in dataArray:
        //   print(i)

        // let myData = 'a,b,c,d,e,f';
        // console.log(myData);
        // myData = myData.split(',');

        // for(let i = 0; i < myData.length; i++) {
        // 	console.log(myData[i]);
        // }

        // myData.forEach( (d) => {
        // 		console.log(d, 'from foreach')
        // 	}
        // );

        // Reference
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

        // Create an string
        let string1 = "A string primitive";
        let string2 = 'Also a string primitive';
        console.log(string1);

        let s3 = string1 + ' , ' + string2
        console.log(s3);


        let stringArray = s3.split(' ');
        console.log(stringArray);

        stringArray.forEach((item, index) => {
            console.log('by foreach :', item, index)
        })


        //
        let s4 = string1 + 123 + 456;
        console.log('add strings', s4);

        //
        let word1 = 'a'
        let word2 = 'A'
        console.log(word1 === word2);


        let word3 = '1'
        let word4 = 1
        // console.log('compare word1 with word2', word3 === word4);
        console.log('by the function', parseFloat(word3) === word4);
        console.log('by + ', +word3 === word4);


        // 9. .................... Matrix (list of list)

        // Python
        // myArrayOfArray = [
        //     [1,2,3],
        //     [4,5,6]
        // ]

        // for i in myArrayOfArray:
        //   # print(i)
        //   for j in i:
        //     print(j)

        // let myArrayOfArray = [
        //     [1,2,3],
        //     [4,5,6]
        // ]
        // for(let j = 0; j < myArrayOfArray.length; ++j) {
        // 	for(let i = 0; i < myArrayOfArray[j].length; ++i) {
        // 		console.log( myArrayOfArray[j][i] );
        // 	}
        // }

        // console.log( 'index [1][0] ', myArrayOfArray[1][0] )

    

        // 9. .................... Object
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

        // Python
        // https://alligator.io/js/for-of-for-in-loops/
        // https://jsonlint.com/
        // myObject = {
        //     'NJ': 1,
        //     'MJ': 2,
        //     'DJ': 3
        // }
        // print(myObject)
        // for i in myObject:
        //   print(myObject[i])
        //   # print( i, ': ', myObject[i])

        // let myObject = {
        //     'NJ': 1,
        //     'MJ': 2,
        //     'DJ': 3
        // };
        // for(let i in myObject) {
        // 	console.log('key', i, ', value: ', myObject[i]);
        // }

        // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

        // const object = { a: 1, b: 2, c: 3 };

        // for (const property in object) {
        //   console.log(`${property}: ${object[property]}`);
        // }



        // // JSON stringify
        // const stringJSon = JSON.stringify(myObject)
        // console.log(stringJSon);

        // // JSON parse
        // const jsonObject = JSON.parse(stringJSon);
        // console.log(jsonObject);


    }
    public destroy() {

    }
}



