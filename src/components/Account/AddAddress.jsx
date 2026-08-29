"use client";


import {ArrowLeft} from "lucide-react";


export default function AddAddress({
back
}){


return (

<div>


<div className="
border-b
px-8
py-5
flex
gap-3
items-center
">


<button onClick={back}>
<ArrowLeft size={18}/>
</button>


<h2 className="font-semibold">
Add New Address
</h2>


</div>



<form className="
p-8
space-y-5
">


<Input label="Name" placeholder="Enter Full Name"/>

<Input label="Phone Number" placeholder="Mobile Number"/>

<Input label="Street Address" placeholder="Enter Delivery Address"/>

<Input label="Directions (Optional)" placeholder="Directions"/>

<Input label="City" placeholder="City"/>



<div className="
grid
grid-cols-2
gap-5
">


<select className="input">
<option>Select State</option>
</select>


<select className="input">
<option>Select LGA</option>
</select>


</div>



<label className="
flex
gap-2
text-sm
">

<input type="checkbox"/>

Set as default shipping address

</label>



<button
className="
w-full
bg-[#c4348a]
text-white
py-4
rounded
font-semibold
"
>

Continue

</button>



</form>


</div>

)

}



function Input({
label,
...props
}){


return (

<div>

<label className="
text-sm
font-semibold
block
mb-2
">

{label}

</label>


<input
{...props}
className="
input
"
/>


</div>

)

}