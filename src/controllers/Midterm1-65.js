module.exports ={

    add1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = x '+ input)
        output = input % 2
        res.send(output.toString())
    }

}