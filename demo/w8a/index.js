const myArray= [2, 5, 8, 20, 18]
console.log(myArray)

//traditional for loop
let sum= 0;
for(let index= 0; index < myArray.length; index++){
    sum+= myArray[index]
}
console.log(sum)

//for of loop
sum=0;
for(const item of myArray){
    sum+= item
}
console.log(sum)

//divided by 2 nontraditional
let newArray= []
for(let index= 0; index < myArray.length; index++){
    newArray.push(myArray[index] / 2)
}
console.log(newArray)

//divided by 2 traditional
for(let index= 0; index < myArray.length; index++){
    myArray[index]/= 2
}
console.log(myArray)

//add 2 traditional
function addTwo(value, index, array){
    return value + 2
}
const resultArray= myArray.map(addTwo)
console.log(resultArray)

//add 2 arrow function
const otherArray= myArray.map((value)=>{ return value + 2})
console.log(otherArray)

//html arrow function
const htmlArray= myArray.map((value) => `<p>${value}</p>`)
console.log(htmlArray)

//html traditional
function printItems(arrayInput){
    const newArray= arrayInput.map((value) => `<p>${value}</p>`)
    console.log(newArray)
}

printItems(myArray)

//html traditional sortes
function compareNumbers(a, b){
    return a-b
}
printItems(myArray.sort(compareNumbers))

//html arrow funciton sorted
printItems(myArray.sort((a, b)=> {return a-b}))

let todoList=[
    {content: "Task 1", prioity: 2, completed: true},
    {content: "Task 2", prioity: 1, completed: true},
    {content: "Task 3", prioity: 3, completed: false}
]
console.log(todoList)

function printTodo(arrayInput){
    const newArray= arrayInput.map((value) => 
    `<p ${value.content ? 'class="done"': ''}>
         ${value.prioity}: ${value.content}
    </p>`)
    return newArray
}
console.log(printTodo(todoList).join('\n'))

//if true (completed) traditional
const filteredArray=[]
for(const item of todoList){
    if(item.completed){
        filteredArray.push(item)
    }
}
console.log(printTodo(filteredArray).join('/n'))

//if false (not Completed) traditional
function evalItem(item){
    return !item.completed
}
console.log(printTodo(todoList.filter(evalItem)).join('/n'))

//if false arrow function
console.log(printTodo(todoList.filter((item =>{return !item.completed}))).join('/n'))