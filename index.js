import express from 'express'
import axios from 'axios'
import dotevn from 'dotenv'


dotevn.config()
const app=express()
app.use(express.json())

const PORT=process.env.PORT || 5000
const BASE_URL=process.env.BASE_URL
const API_KEY=process.env.API_KEY

app.listen(PORT,()=>{
   console.log("server is running on port ",PORT);
   
})
