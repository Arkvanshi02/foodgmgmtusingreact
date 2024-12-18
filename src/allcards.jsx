// import { useState } from 'react'

function AllCards({data}){

        // const [query, setQuery] = useState('')
        // const foodname = data.map(item => item.name);
        // console.log(foodname);
        // const filteredFood=data.filter((item=>{
        //    return (item.name.includes('South Indian Masala Dosa'))
        // }))
        // console.log(filteredFood);
        // word => word !== word.toUpperCase() && word !== word.toLowerCase()

    return <>

    <div className="h-56 flex flex-wrap gap-4 justify-center">
        {data.map(singleItem=>(
        <div className="border p-3 rounded-md"  key={singleItem.id}>
         <img src={singleItem.image} className="w-60 h-auto" alt="Responsive Image"/>
         <div className="p-2 border">
         <h1 className="text-slate-700">{singleItem.name}</h1>
         <p className="text-slate-700">Rs-{singleItem.caloriesPerServing}</p>
         <p className="text-slate-700">Category-{singleItem.mealType}</p>
         <p>Ratings-{singleItem.rating}</p>
         <p className="text-slate-700">{singleItem.cuisine}</p>
         </div>
         </div>
        ))}
       
    </div>
    </>
}
export default AllCards;