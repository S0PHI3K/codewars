// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name) {
  const splitString = name.split(" ");

  if (splitString.length > 2) {
    const separateMiddleNames = splitString.slice(1, -1);
    const firstLetter = separateMiddleNames
      .map((array) => array[0] + ".")
      .join(" ");

    return `${splitString[0]} ${firstLetter} ${
      splitString[splitString.length - 1]
    }`;
  } else {
    return name;
  }
}

// ALTERNATIVE SOLUTION

const initializeNames = (name) => name.replace(/(?<=\s)(\w)\w+(?=\s)/g, `$1.`);

// A few solutions using the .replace() function

function initializeNames(name) {
  return name.replace(/(?!^)\b\w+\b(?!$)/g, (w) => w[0] + ".");
}

function initializeNames(s) {
  return s.replace(/(?!^)\b\w+?\b(?!$)/g, (m) => m[0] + ".");
}
