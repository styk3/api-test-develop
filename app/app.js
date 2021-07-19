const express = require('express')
const app = express()
const splite3 = require('sqlite3')
const dbPath = "app/db/database.sqlite3"

//'/api/v1/hello'に格納されているAPIをたたくと、Hello, World！と出てくるAPI
    app.get('/api/v1/hello', (req,res) => { //app.method ('URI', function (req (request), res(responce)) =>
        //Connect database
        const db = new sqlite3.database(dbPath)

        db.all('SELECT * users', (err, rows) => {
        res.json(rows) //())内の引数をJSONでレスポンスする
        }) 
        db.close()
    })
    //Port指定する
    const port = process.env.port || 3000; //ローカルポートに指定があれば、それ使う。それ以外はデフォ3000
    app.listen(port);
    console.log("listen on port: " + port)



     
