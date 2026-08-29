"use client";


import { Star } from "lucide-react";


export default function PendingRatings(){



const products=[

{
name:"Chocolate Birthday Cake",
image:"/cake11.jpg"
},

{
name:"Wedding Cake",
image:"/promo2.jpg"
}

];



return (

<div>


<div className="
border-b
px-8
py-5
">

<h2 className="font-semibold">
Pending Ratings
</h2>

</div>




<div className="
p-8
space-y-5
">


{
products.map(product=>(


<div
key={product.name}
className="
border
border-gray-300
rounded-xl
p-5
flex
items-center
justify-between
"
>



<div className="
flex
gap-5
items-center
">


<img
src={product.image}
className="
w-20
h-20
rounded-lg
object-cover
"
/>



<div>

<h3 className="font-semibold">

{product.name}

</h3>


<p className="
text-sm
text-gray-500
mt-2
">

Share your experience

</p>


</div>


</div>





<button
className="
flex
items-center
gap-2
bg-[#a03c78]
text-white
px-5
py-2
rounded
text-sm
"
>

<Star size={15}/>

Rate Product

</button>



</div>


))

}



</div>


</div>

)

}