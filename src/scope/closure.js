function greeting(){
    let username = 'Oscar';
    function displayUserName(){
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g()); // Returning function value 

// Summarize Closure function 


function sumElements(value1, value2){
    let sum = value1 + value2;
    function finalResult(){
        return `Hello, ${value1} + ${value2} is ${sum}`;
    }
    return finalResult;
}

const r = sumElements(5, 5); 
console.log(r());

// Multiple messages 

function createMessage(type, style){
    const whiteStyle = 'color: white;';
    return function message(text){
        console.log(`%c ${type}: ${text}`, whiteStyle + style);
    }
}

const error = createMessage('Error', 'background: red;')
const warning = createMessage('Warning', 'background: yellow; color: black;')
const success = createMessage('Success', 'background: green;;')
   