
const string = "Привет! Как дела?";
const Vowels = ["а","е","ё","и","о","у","э","ю","я"];
const getVowels = stringToFilter => {
    let extractedVovels = "";

    for (let i=0; i<stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i] .toLowerCase();

        if (Vowels.indexOf(currentLetter) != -1) {
            extractedVovels += currentLetter;
        }
    }

    return extractedVovels;
}

console.log(getVowels(string));

////////////////////////////////////////

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

const getWorthyWorkers = (workersArr) => {
    const worthyWorkers = [];

workersArr.forEach(currentWorker => {
    if (currentWorker.salary > 1000){
        worthyWorkers.push(currentWorker.name)
    }
    
});

    return worthyWorkers;
};

console.log(getWorthyWorkers(workers));
     
 
//////////////////////////////////////////

const path = "/users/download/index.html"

const isHtml = path => {
    const requiredExt =".html";
    const pathExt = path.slice(-5);

    if (pathExt == requiredExt){
        return true
    } else {
        return false
    }
}

console.log(isHtml(path));

////////////////////////////////////////

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num % 2 == 0;
}

const filterArray = (arrToFilter, filterFn) => {
    const filteredArray =[];

    arrToFilter.forEach(num => {
        if (filterFn(num)){
            filterArray.push(num);
        }
    })

    return filterArray;

}

console.log(filterArray(mixedArray, isEven));











    

    


