import express from "express"
import mongoose, { Schema,connect } from "mongoose"
import "dotenv/config"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const categorySchema = new Schema(
    {
        image: String,
        title: String,
        category: String,
        price: Number
    }
)

const categoryModel = mongoose.model("category",categorySchema)

app.get("/category", async (req,res)=>{
    const categories = await categoryModel.find()
    res.send(categories)
})

app.get("/category/:id",async (req,res)=>{
    const {id} = req.params
    const categories = await categoryModel.findById(id)
    res.send(categories)
})

app.delete("/category/:id",async (req,res)=>{
    const {id} = req.params
    const categories = await categoryModel.findByIdAndDelete(id)
    res.send("Delete getti baga")
})

app.post("/category" , async (req,res)=>{
    const {image,title,category,price} =req.body
    const newCategory = new categoryModel({image,title,category,price})
    await newCategory.save()
    res.sendStatus(200).send("Data geldiiii")
})

app.listen(process.env.PORT, ()=>{
 console.log(`bu server isliyir balaskam burda- ${process.env.PORT}`)
})

connect(process.env.API_URL)
.then(()=>{
    console.log("Baglandi askm")
})
.catch((error)=>{
    console.log(error)
})