function isJavaScriptFile (fileName){
    const file = fileName;
    if(file.endsWith(".js")){
        return true;
    }else{
        return false;
    }
}
const checkFile = isJavaScriptFile("assignment.png.js");
console.log(checkFile)