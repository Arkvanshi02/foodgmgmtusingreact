import { useEffect, useState } from 'react'
import AllCards from './allcards'
// import {data} from './datafile/alldata';
import './App.css'
// console.log(data);

 function App() {


  const [val, setVal] = useState('')
  const [fil, setfilterVal] = useState([])
  const [inetialData, setValInitial] = useState([])

  //  console.log(fil);
   async function FetchfoodData() {
     let respo = await fetch('https://dummyjson.com/recipes')
      let json = await  respo.json()
      // console.log(json.products); 
      setfilterVal(json.recipes)
      setValInitial(json.recipes) 
       // console.log(json.products)
    }
    useEffect(()=>{
      FetchfoodData();
    },[])


  function updateFilterData(){
    let res = inetialData.filter((item)=> item.name.toLowerCase().includes(val.toLowerCase()))
    console.log(res);
    setfilterVal(res)
 
  }


 return <>
 <div className="container">
    <h1 className='text-3xl text-white flex justify-center pt-3 bg-orange-700 h-16'>Foodiee Site</h1>
    <div>  
    <div className="font-sans text-black bg-white flex items-center justify-center">
  <div className="border rounded overflow-hidden flex border-black m-4">
    <input type="text" className="px-4 py-2" placeholder="Search..."
     onChange={(e)=>setVal(e.target.value)}
    />
    <button className="flex items-center justify-center px-4 border-l" onClick={updateFilterData} >
      <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </button>
  </div>
</div>
   <AllCards data={fil}></AllCards>
    </div>
    </div>
  </>
}

export default App
