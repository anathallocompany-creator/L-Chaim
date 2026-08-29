"use client";

import { Package, Calendar, ChevronRight } from "lucide-react";


export default function OrderHistory(){


const orders=[

{
id:"#LC10245",
date:"28 June 2026",
status:"Delivered",
total:"₦35,000"
},

{
id:"#LC10246",
date:"25 June 2026",
status:"Processing",
total:"₦18,500"
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
Order History
</h2>

</div>




<div className="
p-8
space-y-5
">


{
orders.map(order=>(


<div
key={order.id}
className="
border
border-gray-300
rounded-xl
p-5
flex
justify-between
items-center
hover:shadow-sm
transition
"
>



<div className="flex gap-4">


<div className="
bg-[#ffe1f0]
p-3
rounded-full
">

<Package
size={22}
className="text-[#9e3b77]"
/>

</div>




<div>

<h3 className="font-semibold">
Order {order.id}
</h3>


<p className="text-sm text-gray-500 flex gap-2 mt-2">

<Calendar size={14}/>

{order.date}

</p>


</div>


</div>





<div className="text-right">


<p className="font-bold">
{order.total}
</p>


<span className="
text-xs
bg-green-100
text-green-700
px-3
py-1
rounded-full
">

{order.status}

</span>



</div>



<ChevronRight size={18}/>


</div>


))

}


</div>


</div>


)

}