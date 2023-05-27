const express = require('express')
const runJAR = require('./utill/callJAR')
const app = express()

app.get('/getASL/:id', async(req, res)=>{
    let sentence = req.params.id;
    try{
        let asl = await runJAR(sentence);
        res.status(200).send(asl);
    }
    catch{
        res.status(500).send('error');
    }
})

const port = 3000; 
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});