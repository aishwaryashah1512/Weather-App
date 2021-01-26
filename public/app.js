
const messageOne=document.querySelector('#message1')
const messageTwo=document.querySelector('#message2')
const weatherform=document.querySelector('form')
const inputvalue=document.querySelector('input')
weatherform.addEventListener('submit',(e)=>{
e.preventDefault()
const location=inputvalue.value
messageOne.textContent='..Loading'
messageTwo.textContent=''
fetch("http://localhost:3000/weather?search="+location).then(response=>{
   response.json().then(data=>{
       if(data.error){
           messageOne.textContent=data.error 
       }
       else{
           messageOne.textContent=data.forecast  
           messageTwo.textContent=data.location     
           console.log(data.forecast,data.location)    
       }
   })
})
})


