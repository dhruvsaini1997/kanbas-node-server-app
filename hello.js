function HelloRoutes(app){
    app.get("/",(req,res)=> {
        res.send("Hello, How are you doing?")
    });
    app.get("/kuhu",(req,res)=>{
        res.send("Welcome to node server!")
    })
    }
    
    export default HelloRoutes;