"use client";

import {MapPin, Phone, User, Edit} from "lucide-react";


export default function DeliveryAddress({
openAddAddress,
openEditAddress
}){


return (

<div>


<div className="
flex
justify-between
items-center
border-b
border-gray-300
px-8
py-5
">


<h2 className="
font-semibold
">
Delivery Address
</h2>


<button
onClick={openAddAddress}
className="
bg-[#af337e]
text-white
px-5
py-2
rounded
text-sm
"
>
Add New Address
</button>


</div>



<div className="
p-8
">


<div className="
border
border-gray-300
rounded-lg
w-full
max-w-md
"
>


<div className="
flex
justify-between
p-4
border-b
border-gray-300
">

<span className="text-sm">
Default Shipping Address
</span>


<button
onClick={() => openEditAddress()}
className="
text-[#b43080]
flex
items-center
gap-1
text-sm
"
>
<Edit size={14}/>
Edit
</button>

</div>



<div className="
p-5
space-y-4
text-sm
text-gray-600
">


<p className="
flex
gap-3
">
<User size={16}/>
Olayemi Omolisa
</p>



<p className="
flex
gap-3
">
<MapPin size={16}/>
Kusenla road, Lekki Ikate
</p>


<p className="
flex
gap-3
">
<Phone size={16}/>
08055380547
</p>


</div>


</div>


</div>


</div>

)

}