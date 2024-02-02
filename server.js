const app = require("./app");
const PORT = 4089;


// GET,POST, PUT/PATCH , DELETE
// Middleware 

// static file serving

// app.use("/static",express.static("public"))
// MVC 



app.listen(PORT, function(){

    console.log(`Server is running on port ${PORT}`);
});