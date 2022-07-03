let hOut=[]
let res2=[]

const inputs=[1]
console.log("inputs:"+inputs)

const countOfNeurons=1
console.log("count of neurons:"+countOfNeurons)

//const weightsStart=addStartWeight(countOfNeurons)
let weightsStart=0.2
console.log("starting weights for first step:"+weightsStart)

const learningRate=1
console.log("learningRate:"+ learningRate)

const weightsLayout=[1]
const idealResult=1
console.log("idealResult:"+idealResult)
let resultInput=[]


//------------------------------------------------------------------
//formatting output
function formOut(value){
    console.log("+")  
    console.log("+++++++++++++++++++++++++++++++")
    console.log(value)
    console.log("+++++++++++++++++++++++++++++++")  
    console.log("+")  
}
//addind random weigth
function addStartWeight(count){
    let temp=[]
    for(let i=0;i<count;i++){
temp.push([weightRandom()])
    }
    return temp
}
//activation of neuron
function inputActivation(value){
    let temp=0
    temp=1/(1+Math.E**(-value))
    console.log(`inputActivation:${temp}`)
    return temp
}



function findError(idealResult,result){
    let temp=0
    temp=result-idealResult
    console.log("error:"+temp)
    return temp
}

//summary of inputs for neuron
function summaryInputs(inputs,weights){
 let temp=0
            temp+=inputs*weights
    console.log(`summary input: ${temp}`)
    return temp
}
//get random value for first step
function weightRandom(){
    return Number(Math.random().toFixed(2))
}

function derivativeOfActivation(value){
    let temp=0
    temp=inputActivation(value)*(1-inputActivation(value))
    return temp
}
function deltaWeight(error){
    
let temp=0
temp=error*derivativeOfActivation(error)
console.log("deltaWeight:"+temp)
    return temp
}



function newWeightValue(weight,output,delta,rate){
    let temp=0
    temp=weight-(delta*output*rate)
    console.log("newWeight:"+temp)
    return temp
}
//-----------------------------------------------------------
for (let jj=0;jj<2;jj++){
        console.log("fix:"+weightsStart)
        let res=inputActivation(summaryInputs(inputs,weightsStart)) 
        console.log("new Value of Neuron:"+res)
       
       // res2=inputActivation(summaryInputs(hOut,weightsLayout))
       ////////////////////////
       formOut(res)
       ////////////////////////
       const error=findError(idealResult,res)
       const delta=deltaWeight(error)
       weightsStart=newWeightValue(weightsStart,res,delta,learningRate)
       console.log("new weight:"+weightsStart)
       
       console.log("count with new weight")
       
}
 








