const mongoose = require('mongoose')

const connectDatabase = () =>{
    try{
        mongoose.connect(`${process.env.MONGO_URL}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then((data)=>{
            console.log(`Mongodb connected to the server ${data.connection.host}`);
        })
    }
    catch { 
        console.log("Failed to connect the database");
    }
    
} 

module.exports=connectDatabase