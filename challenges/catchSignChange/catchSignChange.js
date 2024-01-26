// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5];

// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */

// catchSignChange(arr) == 2;

function catchSignChange(arr) {

    let changeCount = 0;
    
    for (let i = 0; i < arr.length -1; i++){
        ((arr[i] >= 0) && (arr[i+1] < 0)) || ((arr[i] < 0) && (arr[i+1] >= 0)) ? changeCount += 1 : changeCount += 0;
    catc 
    }
    return changeCount;
  }

  // Alternative Solutions

  function catchSignChange(arr) {
    return arr.slice(1).filter((e,i)=>(e<0)!==(arr[i]<0)).length;
  }

  const catchSignChange = a => a.reduce((s,b,i)=>s+((b>=0&&a[i+1]<0)||(b<0&&a[i+1]>=0)?1:0),0);