const { spawn } = require("child_process");
function runJAR(sentence) {
    return new Promise((resolve, reject) => {
        let lastLine = []
        const javaRun = spawn("java", ['-jar', 'text2asl_cmd.jar', sentence]);
        javaRun.stdout.on('data', (data)=>{
            //console.log(data.toString());
            const lines = data.toString().split('\n');
            //console.log(lastLine)
            lastLine = lastLine.concat(lines)
        })
        javaRun.on('close',(code)=>{
            console.log('code',code)
            console.log('line', lastLine[lastLine.length-3].toString())
            if(code == 0){
                resolve(lastLine[lastLine.length-3].toString())
            }
            else{
                reject('fail');
            }
        })
    })
}

module.exports = runJAR