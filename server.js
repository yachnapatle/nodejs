let express=require('express')
let app=express();
// app.use((req,res)=>
//     {
//     res.send('mai to nhi jane dera');
//     })
app.get('/',(req,res)=>
{

res.send('hello this is you server');

})
app.get('/home',(req,res)=>
    {
    
    res.send('hello this is you server at home');
    
    })

    
app.listen(4000,()=>
{
    console.log('server running on port number 4000');
    
})
