export class Solution {
    constructor(view: any) {
        console.log("Let's learn Typescript for digital mapping and visualization!!");
        console.log("04 Typescript, Function Class");
        console.log("=================================");
        // Codepan
        // https://codepen.io/NJStudio/pen/wvMabpp?editors=1010

        // Python version 
        // https://colab.research.google.com/drive/1hF5YaGvZxKX3ME1MJCTbZkeqPkALz0xS?usp=sharing

        // Data Structure
        // 12. .................... function

        // function add(a: number, b: number) {
        // //     console.log('a + b:', a + b, 'by Regular function')
        // }

        // const result = add(2, 3)


        // // .......................... arrow function
        // const myFnA = (a: number) => {
        // //     console.log(a * a, 'by Arrow function');
        // }
        // const myNum = 3;


        // // ......................... Parameters
        // const manyParams = (num: number, name: string) => {
        //     let names = ''
        //     for (let i = 0; i < num; ++i) {
        //         names += name;
        //     }
        //     return names;
        // }

        // console.log(manyParams(5, 'namju '));

        // // we can call other functions in my function too.
        // const multiply = (numA: number, numB: number) => {
        //     return numA * numB
        // }
        // const printName = (name: string) => {
        // //     console.log(name);
        // }

        // const callYourName = (name: string, numA: number, numB: number) => {
        //     const result = multiply(numA, numB);
        //     const names = manyParams(result, name);
        //     printName(names)
        // }
        // callYourName('lee ', 2, 4)


        // 13. .................... class
        // Programming paradigm : https://en.wikipedia.org/wiki/Programming_paradigm
        // Typescript Classes: https://www.typescriptlang.org/docs/handbook/classes.html

        // Typescript class example: https://codepen.io/NJStudio/pen/MWKJZQq?editors=1010
        // Python Class example: https://github.com/NamjuLee/Introduction-to-computational-design-python-notebook/blob/master/Workshop_03_PythonClassAdvanced.ipynb

        // function example
        const gsd = {
            numStudent: 100,
            numClassRoom: 5
        }

        const addStudent = (school: any, numStudent) => {
            school.numStudent += numStudent
        }
        const updateClassRoom = (school: any) => {
            const max = 20;
            school.numClassRoom = school.numStudent / max;
            return school
        }

        // addStudent(gsd, 40);
        // console.log(gsd);

        // updateClassRoom(gsd);
        // console.log(gsd);

        // class implementation
        class School {
            nameSchool: string;
            numStudent: number;
            numClassRoom: number;
            max: number = 20;
            constructor(name: string, numStu: number, numClass: number) {
                this.nameSchool = name;
                this.numStudent = numStu;
                this.numClassRoom = numClass;
            }
            addStudent = (numStudent) => {
                this.numStudent += numStudent;
                this.updateClassRoom();
                this.print();
            }
            updateClassRoom = () => {
                this.numClassRoom = this.numStudent / this.max;
            }
            print() {
            //     console.log('numStudent:', this.numStudent, 'numClassRoom', this.numClassRoom);
                // console.log(JSON.stringify(this));
            }

        }

        // const school_a = new School('Harvard GSD', 100, 5);
        // school_a.addStudent(40);
        // school_a.addStudent(-60);

        // const school_b = new School('MIT Architecture', 100, 5);
        // school_b.addStudent(20)

 

    }
    public destroy() {

    }
}
