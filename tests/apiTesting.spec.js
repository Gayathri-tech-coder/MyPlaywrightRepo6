const {test,expect} = require('@playwright/test')
test.describe.configure({mode:"serial"})
var userID;
//Post
test.skip('POST Request',async({request})=>{
    const response = await request.post('/api/v1/create',{
        data : {
            "name":"Kiran",
            "salary":"30000",
            "age":"23"
        }
    })
    console.log(await response.json());
    var res = await response.json();
    userID = res.data?.id;//nested object
    console.log("**** ID ******",userID);//3308
})

test.skip('GET Request',async({request})=>{
    const getData = await request.get('/api/v1/employees'+userID)
    console.log(">>>>>>>> User Details <<<<<<<<<<<",userID);//3308
    console.log(await getData.json());
})

test.skip('PUT Request',async({request})=>{
    const response = await request.put('/api/v1/update/'+userID,{
        data : {
            "name":"Kiran Kumar",
            "salary":"35000",
            "age":"23"
        }
    })
    console.log(await response.json());
})

test('DELETE Request',async({request})=>{
    const response = await request.delete('/api/v1/delete/3308');
    console.log(await response.json());
    const statusCode =await  response.status();
    console.log(statusCode);
    await expect(statusCode).toBe(200);
    
})

