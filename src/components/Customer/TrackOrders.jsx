"use client";


import {
CheckCircle,
Package,
Truck,
MapPin
} from "lucide-react";


export default function TrackOrder(){



const steps=[

{
title:"Order Confirmed",
icon:<CheckCircle/>
},

{
title:"Processing",
icon:<Package/>
},

{
title:"Shipped",
icon:<Truck/>
},

{
title:"Delivered",
icon:<MapPin/>
}

];



return (

<div className="
max-w-4xl
mx-auto
py-10
px-5
">


<h1 className="
text-3xl
font-bold
mb-8
">

Track My Order

</h1>




<div className="
border
rounded-xl
p-8
">


<input
placeholder="Enter Order Number"
className="
w-full
border
rounded-lg
px-5
py-3
"
/>




<button
className="
mt-5
bg-[#ec008c]
text-white
px-8
py-3
rounded-lg
"
>

Track Order

</button>




<div className="
mt-10
space-y-8
">


{
steps.map((step,index)=>(


<div
key={step.title}
className="
flex
gap-5
items-center
"
>


<div className={`
p-3
rounded-full
${
index < 3
?
"bg-green-100 text-green-600"
:
"bg-gray-100 text-gray-400"
}
`}>

{step.icon}

</div>



<div>

<h3 className="font-semibold">

{step.title}

</h3>


<p className="text-sm text-gray-500">

Your order status update

</p>


</div>



</div>


))

}



</div>


</div>


</div>

)

}