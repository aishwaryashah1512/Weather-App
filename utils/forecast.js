const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    request({url:'http://api.weatherstack.com/current?access_key=f70e40849398ac3c631d79746869849c&query='+latitude+','+longitude+'&units=m',
    json:true},
    (error,response)=>{
        if(error){
            console.log(error)
            callback("Unable to connect",undefined)
        }
        else if(response.body.error){
            callback("Unable to find the location.Try another search",undefined)
        }
        else{
            callback(undefined,'Current temperature is '+ response.body.current.temperature )
        }
    })
}
module.exports=forecast






