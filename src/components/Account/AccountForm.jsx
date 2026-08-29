"use client";


import {useState} from "react";
import {Eye,EyeOff} from "lucide-react";


export default function AccountForm(){


const [show,setShow]=useState(false);


const [form,setForm]=useState({

name:"Yemi Lisa",
email:"yemilisa@yahoo.com",
phone:"08055380547",
password:"",
newPassword:"",
confirmPassword:""

});



function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}



function save(e){

e.preventDefault();


console.log(form);

alert("Account updated successfully");


}



return (

<form
onSubmit={save}
>


<div className="
border-b
border-gray-300
px-8
py-5
font-semibold
text-sm
">

Account Details

</div>



<div className="
p-8
space-y-5
">


<Input
label="Name"
name="name"
value={form.name}
onChange={handleChange}
/>



<Input
label="Email Address"
name="email"
value={form.email}
onChange={handleChange}
/>



<Input
label="Phone Number"
name="phone"
value={form.phone}
onChange={handleChange}
/>



<PasswordInput
label="Current Password"
name="password"
value={form.password}
onChange={handleChange}
show={show}
setShow={setShow}
/>



<PasswordInput
label="New Password"
name="newPassword"
value={form.newPassword}
onChange={handleChange}
show={show}
setShow={setShow}
/>



<PasswordInput
label="Confirm Password"
name="confirmPassword"
value={form.confirmPassword}
onChange={handleChange}
show={show}
setShow={setShow}
/>




<button
className="
w-full
mt-8
bg-[#9e286f]
hover:bg-[#c80076]
text-white
py-4
rounded
font-semibold
transition
"
>

Save Changes

</button>



</div>


</form>

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
w-full
border
border-gray-300
rounded
px-4
py-3
outline-none
focus:border-[#a13d88]
"
/>


</div>

)

}



function PasswordInput({
label,
show,
setShow,
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


<div className="relative">


<input
{...props}
type={show?"text":"password"}
className="
w-full
border
border-gray-300
rounded
px-4
py-3
"
/>



<button
type="button"
onClick={()=>setShow(!show)}
className="
absolute
right-4
top-3
text-gray-400
"
>

{
show?
<EyeOff size={18}/>
:
<Eye size={18}/>
}

</button>


</div>


</div>

)

}