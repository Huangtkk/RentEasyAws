const oracledb = require('oracledb');
require('dotenv').config() 


const cns = {
    user: process.env.user,
    password: process.env.password,
    connectString: process.env.connectString
}


async function Open(sql, binds, autoCommit) {

    try{

        let cnn = await oracledb.getConnection(cns);
        let result = await cnn.execute(sql, binds, { autoCommit });
        cnn.release(); 
        return result;

    }catch(error){
        console.log(error);
    }
        
}

exports.Open = Open;