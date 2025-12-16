import mongoose from "mongoose";
import express, { response, urlencoded } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/Artgallary")
    .then(() => {
        console.log("Database is connected");
    })
    .catch((err) => {
        console.log(err);
    });

// Creating database collections
const orderSchema = new mongoose.Schema({
    title: String,
    Price: Number,
    description: String,
    image: String,
    rating: { rate: Number, count: Number },
    id: Number,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String, // Fixed type
    phno: String,
    address: String,
    password: String
});

const sellSchema = new mongoose.Schema({
    lname:String,
    pho:String,
    file: String,
    date: { type: Date, default: Date.now }, // Added default value
    price: Number,
});
const reviewSchema = new mongoose.Schema({
    fname: String,
    mail: String, // Added default value
    review:String,
    rate: Number
});
const LoginSchema = new mongoose.Schema({
    email: String, // Added default value
    Password: String
});

const orders = mongoose.model("orders", orderSchema);
const users = mongoose.model("User", userSchema);
const sell = mongoose.model("sell", sellSchema);
const review=mongoose.model("review",reviewSchema);
const login=mongoose.model("login",LoginSchema);

// API to add orders
app.post("/placeorder", (req, res) => {
    console.log("Data from FE", req.body);

    orders.findOne({ id: req.body.id }).then((exist) => {
        if (exist) {
            res.send("Order is already placed. Thank you");
        } else {
            // It will contain data sent from FE
            const newOrder = new orders(req.body);

            newOrder.save().then((isOrdered) => {
                if (isOrdered) {
                    res.send("Order placed.we will be at your doorstep within 7days!call us to know your order status");
                } else {
                    res.send("Something went wrong. Please try again");
                }
            });
        }
    });
});

// API to add users
app.post("/signup",(req, res)=>{
    console.log("data sent from front end is");
    console.log(req.body);
    users.findOne({email:req.body.email})
    .then((resp)=>{
        if(resp){
            console.log("user  exist");
            res.send({message:"user account exits..Go ahead with shopping",result:resp});

        }else {
            const user=new users({
                name:req.body.name,
                email:req.body.email,
                phno:req.body.phno,
                address:req.body.address,
                password:req.body.password

            });
            user.save().then((response)=>{
                if(response){
                    console.log("user registered successfully");
                    res.send({message:"user account registered succesfully"});
                }
                else{
                    console.log("error! Try again later");
                    res.send({
                        message:"error! Try again later"
                    });
                }
            });
        }
    })
    .catch((err)=>{
        console.log(err);
    });
});
// sell
app.post("/sell",(req, res)=>{
    console.log("data sent from front end is");
    console.log(req.body);
    const user=new sell({
        lname:req.body.lname, 
        pho:req.body.pho,
        file:req.body.file,
        date:req.body.date,
        price:req.body.price,
        

    });
    user.save().then((response)=>{
        if(response){
            console.log("successfully registeres for selling");
            res.send({message:"Successfull!  We will contact you soon through registered phone number"});
        }
        else{
            console.log("error! Try again later");
            res.send({
                message:"error! Try again later"
            });
        }
    })

.catch((err)=>{
console.log(err);
});
});


// for review
app.post("/review",(req, res)=>{
    console.log("data sent from front end is");
    console.log(req.body);
    users.findOne({email:req.body.mail})
    .then((resp)=>{
        if(resp){
            const user=new review({
            file:req.body.file,
            date:req.body.date,
            price:req.body.price,
        

            });
            user.save().then((response)=>{
            if(response){
                console.log("successfully reviewed");
                res.send({message:"Successfull reviewed! Your opinion matters "});
            }
            else{
                console.log("error! Try again later");
                res.send({
                    message:"error! Try again later"
                });
            }
        
    });
}
else{
    console.log("not registeres");
                res.send({message:"register yourself first"});
}
    })
        
.catch((err)=>{
console.log(err);
});
});


//for login
app.post("/login",(req, res)=>{
    console.log("data sent from front end is");
    console.log(req.body);
    users.findOne({email:req.body.mail})
    users.findOne({password:req.body.password})

    .then((resp)=>{
        if(resp){
            const user=new login({
            email:req.body.email,
            password:req.body.password
        

            });
            user.save().then((response)=>{
            if(response){
                console.log("successfully Logged");
                res.send({message:"Successfull Logged!\n Enjoy your shopping "});
            }
            else{
                console.log("not logged");
                res.send({
                    message:"register youselg 1st"
                });
            }
        
    });
}
else{
    console.log("not registeres");
                res.send({message:"register yourself first"});
}
    })
        
.catch((err)=>{
console.log(err);
});
});
app.listen(9000,() => {console.log("sever started at port 9000")});
