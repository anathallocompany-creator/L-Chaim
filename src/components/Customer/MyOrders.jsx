"use client";

import {
Package,
Truck,
ChevronRight
} from "lucide-react";


export default function MyOrders(){


const orders=[

{
id:"#LC10021",
date:"28 June 2026",
items:"Chocolate Birthday Cake",
price:"₦25,000",
status:"Delivered"
},


{
id:"#LC10022",
date:"30 June 2026",
items:"Wedding Cake",
price:"₦75,000",
status:"Processing"
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

My Orders

</h1>



<div className="
space-y-5
">


{
orders.map(order=>(


<div
key={order.id}
className="
bg-white
border
border-gray-300
rounded-xl
p-6
shadow-sm
"
>


<div className="
flex
justify-between
items-center
mb-5
">


<div>

<h2 className="font-bold">
Order {order.id}
</h2>

<p className="
text-sm
text-gray-500
">

{order.date}

</p>

</div>


<span className="
bg-green-100
text-green-700
px-4
py-1
rounded-full
text-sm
">

{order.status}

</span>


</div>




<div className="
flex
justify-between
items-center
"
>


<div className="
flex
gap-3
items-center
">

<Package
style={{ color: "#bb2e83" }}
className="text-[#9e477b]"
/>


<div>

<p className="font-semibold">

{order.items}

</p>

<p className="text-gray-500">

{order.price}

</p>

</div>


</div>





<div className="flex gap-3">


<button
className="
border
px-4
py-2
rounded-lg
text-sm
"
>

View Details

</button>



<button
style={{ backgroundColor: "#bb2e83" }}
className="
bg-[#a13f7a]
text-white
px-4
py-2
rounded-lg
text-sm
flex
gap-2
items-center
"
>

<Truck size={16}/>

Track

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