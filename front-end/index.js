
// getcountry

const button = document.getElementById("getcountry").addEventListener('click',(e)=>{

  const displayContainer=document.getElementById('displayContainer1')
  displayContainer.innerHTML='';
  e.preventDefault();
  axios.get("http://localhost:4000/getdetails").then((result) => {
    console.log(result.data)
    const ul=document.createElement('ul')
    result.data.forEach(Country=>{
        const li=document.createElement('li')
        li.innerHTML=`
            <span> ${Country.name} :  </span>
          
        `
        ul.appendChild(li)

    })
    displayContainer.appendChild(ul)
    
  }).catch((err) => {
    console.log(err);
  });
})

//getestate
const button1 = document.getElementById("getstates").addEventListener('click',(e)=>{
   
  const displayContainer=document.getElementById('displayContainer2')
  displayContainer.innerHTML='';
  e.preventDefault();
  axios.get("http://localhost:4000/getstate").then((result) => {
    console.log(result.data)
    const ul=document.createElement('ul')
    result.data.forEach(Country=>{
        const li=document.createElement('li')
        li.innerHTML=`
            <span> ${Country.name} :  </span>
           
        `
        ul.appendChild(li)

    })
    displayContainer.appendChild(ul)
    
  }).catch((err) => {
    console.log(err);
  });
})

//getallcities
const button2 = document.getElementById("getcities").addEventListener('click',(e)=>{
  const displayContainer=document.getElementById('displayContainer3')
  displayContainer.innerHTML='';
  e.preventDefault();
  axios.get("http://localhost:4000/getcities").then((result) => {
    console.log(result.data)
    const ul=document.createElement('ul')
    result.data.forEach(City=>{
        const li=document.createElement('li')
        li.innerHTML=`
            <span> ${City.name} :  </span>
        `
        ul.appendChild(li)

    })
    displayContainer.appendChild(ul)
    
  }).catch((err) => {
    console.log(err);
  });
})


const button3 = document.getElementById("getpincode").addEventListener('click',(e)=>{
  const displayContainer=document.getElementById('displayContainer4')
  displayContainer.innerHTML='';
  e.preventDefault();
  axios.get("https://raw.githubusercontent.com/mithunsasidharan/India-Pincode-Lookup/master/pincodes.json").then((result) => {
    console.log(result.data)
    const ul=document.createElement('ul')
    result.data.forEach(City=>{
        const li=document.createElement('li')
        li.innerHTML=`
            <span> ${City.pincode}:</span>
        `
        ul.appendChild(li)

    })
    displayContainer.appendChild(ul)
    
  }).catch((err) => {
    console.log(err);
  });
})