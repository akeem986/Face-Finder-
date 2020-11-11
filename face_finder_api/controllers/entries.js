
const handleApiCall=(req, res, Clarifai)=>{

    input=req.body.input
    //validation
    if (!input){
        return res.status(400).json('invalid url')
    }

    //Configuring clarifai api
    const app = new Clarifai.App({
        apiKey: '00ed2940b25f48cf85e2c32f37c2dfcb'
        });
        app.models.predict("a403429f2ddf4b49b307e318f00e528b", input)
        .then(data=> res.json(data)).catch(err=> res.status(400).json('API call error'))
}

const handleEntries=(req, res, pool)=>{
 
    const {id}= req.body

    pool.getConnection(function(err, connection) {
    const SELECT_ENTRY=`SELECT * FROM user WHERE Id= '${id}'`
    connection.query(SELECT_ENTRY, (err, results)=>{
        if(err){
            connection.release();
            return res.send(err)
        }else{
           const newEntry= results[0].entries+1;
           
           const UPDATE_ENTRY=`UPDATE user SET entries='${newEntry}' WHERE Id= '${id}'`
           connection.query(UPDATE_ENTRY, (err)=>{
                if(err){
                    connection.release();
                    return res.send(err)
                }
        });
        const newVal= results[0].entries+1; 
        res.json(newVal);
        connection.release();
        }  
    });
});
}

module.exports={
    handleEntries: handleEntries,
    handleApiCall: handleApiCall
}