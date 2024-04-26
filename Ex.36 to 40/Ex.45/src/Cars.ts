import { features } from "process";

function storeCareInfo(manufacture: string, modelName: string, ... extraOption: { [key : string]: any } [] ):object {

    const carInfo ={
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return carInfo;
};

let  answer = storeCareInfo('Honda', 'Civic', {color:'black'}, {feature:['Navigation', 'Power window']})

console.log(answer);





