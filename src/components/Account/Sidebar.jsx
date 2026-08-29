"use client";

import {
  UserRound,
  Package,
  Wallet,
  UserX
} from "lucide-react";


export default function Sidebar({
  active,
  setActive
}) {


const menus=[

{
title:"My Profile",
icon:<UserRound size={18}/>,
items:[
{
name:"Account Information",
id:"account"
},
{
name:"Delivery Address",
id:"address"
}
]
},


{
title:"My Orders",
icon:<Package size={18}/>,
items:[
{
name:"Order History",
id:"order-history"
},
{
name:"Pending Ratings",
id:"pending-ratings",
badge:0
}
]
},


{
title:"My Wallet",
icon:<Wallet size={18}/>,
items:[
{
name:"Wallet",
id:"wallet"
}
]
},


{
title:"Delete Account",
icon:<UserX size={18}/>,
items:[
{
name:"Delete Account",
id:"delete"
}
]
}

];



return (

<div className="
w-60
bg-white
rounded-md
shadow-sm
h-fit
">


{
menus.map(menu=>(

<div
key={menu.title}
className="
border-b
border-gray-300
p-5
"
>


<div className="
flex
items-center
gap-3
font-bold
text-sm
mb-3
">

{menu.icon}

{menu.title}

</div>



{
menu.items.map(item=>(


<button
key={item.id}
onClick={()=>setActive(item.id)}
className={`
flex
items-center
justify-between
w-full
text-left
text-sm
py-2
${
active===item.id
?
"text-[#ec008c]"
:
"text-gray-600"
}
`}
>


<span>
{item.name}
</span>


{
item.badge !== undefined &&
<span className="
bg-[#1a1a1a]
text-white
rounded-full
text-xs
px-2
">
{item.badge}
</span>
}


</button>


))

}


</div>

))

}


</div>

)

}