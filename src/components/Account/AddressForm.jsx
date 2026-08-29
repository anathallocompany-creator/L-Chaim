"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";


export default function AddressForm({
  mode="add",
  address,
  back
}) {


const [form,setForm]=useState({

name: address?.name || "",
phone: address?.phone || "",
street: address?.street || "",
directions: address?.directions || "",
city: address?.city || "",
state: address?.state || "",
lga: address?.lga || "",
default: address?.default || false

});



function handleChange(e){

const {name,value,type,checked}=e.target;


setForm({

...form,

[name]: type==="checkbox" ? checked : value

});

}



function submit(e){

e.preventDefault();


console.log(form);


// later connect API here


alert(
mode==="edit"
?
"Address updated successfully"
:
"Address added successfully"
);


back();

}



return (

<div>


<div className="
border-b
px-8
py-5
flex
items-center
gap-3
">


<button onClick={back}>
<ArrowLeft size={18}/>
</button>


<h2 className="font-semibold">

{
mode==="edit"
?
"Edit Address"
:
"Add New Address"
}

</h2>


</div>




<form
onSubmit={submit}
className="
p-8
space-y-5
"
>



<Input
label="Name"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Enter Full Name"
/>



<Input
label="Phone Number"
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="Mobile Number"
/>



<Input
label="Street Address"
name="street"
value={form.street}
onChange={handleChange}
placeholder="Enter Delivery Address"
/>



<Input
label="Directions (Optional)"
name="directions"
value={form.directions}
onChange={handleChange}
placeholder="Directions"
/>



<Input
label="City"
name="city"
value={form.city}
onChange={handleChange}
placeholder="City"
/>




<div className="
grid
grid-cols-2
gap-5
">


<select
name="state"
value={form.state}
onChange={handleChange}
className="input"
>

<option value="">
Select State
</option>

<option>
Lagos
</option>

<option>
Abuja
</option>

</select>




<select
name="lga"
value={form.lga}
onChange={handleChange}
className="input"
>

<option value="">
Select LGA
</option>

<option>
Eti-Osa
</option>

<option>
Ikeja
</option>

</select>


</div>




<label className="
flex
gap-2
text-sm
items-center
">


<input
type="checkbox"
name="default"
checked={form.default}
onChange={handleChange}
/>


Set as default shipping address


</label>




<button
className="
w-full
bg-[#a53578]
hover:bg-[#c80076]
text-white
py-4
rounded
font-semibold
transition
"
>


{
mode==="edit"
?
"Save Changes"
:
"Continue"
}


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
block
text-sm
font-semibold
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