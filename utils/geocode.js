const request=require('request')
const geocode=(address,callback)=>{
    request({url:"https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiYWlzaHdhcnlhMTIxNSIsImEiOiJja2themhhM2QwMmxlMnBwYXBhZjQzcXZtIn0.sR_c3qntarjcPnE2kFwsGg",json:true}
    ,(error,response)=>{
        if(error){
            console.log(error)
            callback("Unable to connect",undefined)
        }
        else if(response.body.features.length===0){
            callback("Unable to find location.Try another search",undefined)
        }
        else{
            callback(undefined,{location:response.body.features[0].place_name,
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0]})
        }
    })
}
module.exports=geocode