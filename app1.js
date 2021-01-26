const express=require('express')
const path=require('path')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const yargs=require('yargs')

const app=express()

app.set('view engine','hbs')

const pathname=(path.join(__dirname,'./public'))
const viewpath=path.join(__dirname,'./public/views')
hbs.registerPartials(path.join(__dirname,'./public/partials'))

app.set('views',viewpath)
app.use(express.static(pathname))

app.get('', (req, res) => {
    res.render('weather', {
        title: 'Weather'
       
    })
})
app.get("/help",(req,res)=>{
    res.render('help',{title:"HELP PAGE"})
    })
app.get("/about",(req,res)=>{
        res.render('help',{title:"ABOUT PAGE"})
})
app.get('/weather',(req,res)=>{
    if (!req.query.search) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    geocode(req.query.search, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
    
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
    
})


app.get('*',(req,res)=>{
    res.render('four')
})
app.listen(3000,()=>{
    console.log("Hello port 3000")
})











