import {myData, yourData  ,newData} from "../services/reqService"

function getData(req, res){
    console.log(req.query)
    res.status(200).send(myData() + " juhewr " + req.query.id)
}

function getYourData(req, res){
    res.send(yourData()).status(200)
}

function getNewData(req, res){
    // Access query parameters
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const operation = req.query.operation;

    // Check if both numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided');
    }

    let result;
    // Perform operation based on the 'operation' parameter
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).send('Cannot divide by zero');
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).send('Invalid operation');
    }
    console.log("on line 67",result)

    // Send the result in the response
    res.status(200).send(`Result of ${num1} ${operation} ${num2} = ${result}`);
    // res.status(200).send(`Result of ${num1} ${operation} ${num2} = ${result}`);
}
    
// http://localhost:3001/newData?num1=6&num2=7&operation=add
// http://localhost:3001/newData?num1=6&num2=7&operation=subtract
// http://localhost:3001/newData?num1=6&num2=7&operation=multiply
// http://localhost:3001/newData?num1=6&num2=7&operation=divide
// http://localhost:3001/newData/5/add/3

const addMyData = (req, res) => {
    console.log("Request body is ", req.body)
    res.send({reqBody: req.body})
}

const postData =(req,res)=>{
console.log("data in body",req.body.name,req.body.description)
res.status(200).send({reqBody:req.body})
}






module.exports =  {getData, getYourData,getNewData, addMyData,postData};