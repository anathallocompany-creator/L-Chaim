"use client";


import {
Heart,
ShoppingCart,
Trash2
} from "lucide-react";


export default function SavedItems(){


const products=[

{
id:1,
name:"Chocolate Cake",
price:"₦25,000",
image:"/cake11.jpg"
},

{
id:2,
name:"Wedding Cake",
price:"₦65,000",
image:"/promo2.jpg"
}


];



return (

<div className="
max-w-5xl
mx-auto
py-10
px-5
">


<h1 className="
text-3xl
font-bold
mb-8
">

Saved Items

</h1>



<div className="
grid
md:grid-cols-2
gap-6
">


{
products.map(product=>(


<div
key={product.id}
className="
border
rounded-xl
p-5
flex
gap-5
"
>


<img
src={product.image}
className="
w-32
h-32
rounded-lg
object-cover
"
/>




<div className="flex-1">


<h2 className="
font-bold
text-lg
">

{product.name}

</h2>


<p className="
text-[#ec008c]
font-bold
mt-2
">

{product.price}

</p>




<div className="
flex
gap-3
mt-5
">


<button
className="
bg-[#ec008c]
text-white
px-4
py-2
rounded-lg
flex
gap-2
text-sm
"
>

<ShoppingCart size={15}/>

Add Cart

</button>



<button
className="
border
p-2
rounded-lg
"
>

<Trash2 size={16}/>

</button>


</div>


</div>



</div>


))

}



</div>


</div>

)

}