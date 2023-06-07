function detectPangram(string){
    
    //ATTEMPT ONE
    // const lowerCase = string.toLowerCase()
    // const noSpaces = lowerCase.split(" ").join("")
    // const noNumbers = noSpaces.replace(/[0-9]/g, '')
    // const noSpecialCharcaters = noNumbers.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    // const finalStrings = [...new Set(noSpecialCharcaters)]

    // if (finalStrings.length === 26) {
    //     return true
    // } else {
    //     return false
    // }

    //ATTEMPT TWO
    const removeSpacesAndSpecialCharacters = string.toLowerCase().split(" ").join("").replace(/[0-9&\/\\#,+()$~%.'":*?<>{}]/g, '')
    const finalString = [...new Set(removeSpacesAndSpecialCharacters)]
    const result = finalString.length === 26 ? true : false;
   
    return result
}

module.exports = detectPangram