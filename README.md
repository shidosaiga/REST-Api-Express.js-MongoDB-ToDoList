# REST-Api-Express.js-MongoDB-ToDoList
REST-Api Express.js MongoDB ToDoList

ตัวจัดทำเพื่อศึกษาและทำสอบการทำงานของ REST-Api ที่ทำการเชื่อมต่อจาก MongoDB ด้วย Node.js

# วิธีการใช้งาน
#### 1. ทำการ Clone จาก Github และติดตั้ง node.js
```sh
    git clone https://github.com/shidosaiga/REST-Api-Express.js-MongoDB-ToDoList.git
    npm i
    cd REST-Api-Express.js-MongoDB-ToDoList
```


#### 2. ทำการสร้าง Database จาก MongoDB และทำการเลือกเชื่อมต่อ  Connect your application
   ทำการหา File ที่ชื่อว่า App.js เพื่อทำการแก้ไข
```sh
    //Copy code from MongoDb
    mongoose.connect('Your code connection ')
    //example
    mongoose.connect('mongodb+srv://admin:1234@cluster0.kclgow9.mongodb.net/?retryWrites=true&w=majority ')
```

#### 3. ทำการเปิดใช้งานเพื่อทดสอบตัว  Server
```sh
    npm start
```
หรือทำการ Debug App
```sh
    npm debug
```

#### 4.  หลังจากเปิด   Server ให้ทำการไปที่
```sh
     http://localhost:3000
```
สามารถ เปลี่ยน Port ใน Package.json
```sh
     "nodemonConfig": {
    "restartable": "rs",
    "delay": 2000,
    "env": {
      "PORT": 3000 //  you can change port
    }
```
#### ตัว Rest Api สามารถทดสอบได้จาก Extensions Thunder Client
นำ http://localhost:3000 ไปเปิดใน Thunder Client
และ ทำการ  Get todolists
http://localhost:3000/todolists

#### การ post ข้อมูล สรามารถสร้างได้ใน body เลือก Form-encode หรือ json

ตัวอย่าง File json
```sh
    {
    "todo_task": "ทำการบ้านก่อนนอน",
    "todo_completed": true // flase
    }
    
```

