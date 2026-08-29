"use client";


import {
WalletCards,
ArrowDownLeft,
ArrowUpRight
} from "lucide-react";



export default function Wallet(){



const transactions=[

{
type:"Credit",
amount:"₦20,000"
},

{
type:"Payment",
amount:"₦8,500"
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
My Wallet
</h2>

</div>





<div className="p-8">



<div className="
bg-[#a53a7a]
rounded-2xl
p-8
text-white
"
>


<div className="
flex
items-center
gap-3
">

<WalletCards/>

<h3>
Wallet Balance
</h3>


</div>


<h1 className="
text-4xl
font-bold
mt-5
">

₦25,000

</h1>


</div>







<h3 className="
font-semibold
mt-8
mb-5
">

Transactions

</h3>




<div className="space-y-4">


{
transactions.map((item,index)=>(


<div
key={index}
className="
border
border-gray-300
rounded-xl
p-4
flex
justify-between
"
>


<div className="flex gap-3">


{
item.type==="Credit"
?
<ArrowDownLeft
className="text-green-500"
/>

:

<ArrowUpRight
className="text-red-500"
/>

}


<span>
{item.type}
</span>


</div>



<b>
{item.amount}
</b>


</div>


))

}


</div>



</div>


</div>

)

}