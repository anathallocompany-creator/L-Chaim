"use client";

import { useState } from "react";

import {
  CalendarDays,
  MapPin,
  Users,
  Cake,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";


export default function BookingPage(){


const [form,setForm]=useState({

name:"",
email:"",
phone:"",
eventType:"",
category:"",
date:"",
location:"",
guests:"",
message:""

});



function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}



function submitBooking(e){

e.preventDefault();


console.log(form);


alert(
"Booking request submitted successfully"
);


}




const events=[

"Weddings",

"Birthday Parties",

"Corporate Events",

"Outdoor Celebrations",

"School Functions",

"Private Parties"

];



return (

<section className="
min-h-screen
bg-gray-50
py-12
px-5
">


<div className="
max-w-6xl
mx-auto
">


{/* Hero */}

<div
style={{ backgroundColor: "#1C1C1C" }}
className="

rounded-3xl
p-10
text-white
text-center
mb-12
">


<h1 className="
text-4xl
font-bold
">

Book Your Sweet Celebration

</h1>


<p className="
mt-3
text-white/90
max-w-2xl
mx-auto
">

From weddings to private parties, L'Chaim Sweets creates
beautiful cakes and desserts for every occasion.

</p>


</div>







<div className="
grid
lg:grid-cols-3
gap-8
">





{/* Left Content */}


<div className="
lg:col-span-1
space-y-6
">



<div className="
bg-white
rounded-2xl
border
p-6
">


<h2 className="
font-bold
text-xl
mb-5
">

Event Services

</h2>


<ul className="
space-y-4
text-gray-600
">


{
events.map(event=>(


<li
key={event}
className="
flex
gap-3
items-center
"
>

<CheckCircle

size={18}

className="
text-[#ec008c]
"

/>


{event}


</li>


))

}


</ul>


</div>






<div className="
bg-white
rounded-2xl
border
p-6
">


<h2 className="
font-bold
text-xl
mb-5
">

Need Help?

</h2>



<p className="
flex
gap-3
text-gray-600
mb-4
">

<Phone
size={18}
/>

0805 538 0547

</p>



<p className="
flex
gap-3
text-gray-600
">

<Mail
size={18}
/>

support@lchaimsweets.com

</p>


</div>




</div>









{/* Booking Form */}


<div className="
lg:col-span-2
bg-white
border
rounded-2xl
p-8
">



<h2 className="
text-2xl
font-bold
mb-8
">

Make A Booking

</h2>




<form
onSubmit={submitBooking}
className="
space-y-5
"
>




<div className="
grid
md:grid-cols-2
gap-5
">


<Input

label="Full Name"

name="name"

value={form.name}

onChange={handleChange}

placeholder="Enter your name"

/>



<Input

label="Email Address"

name="email"

value={form.email}

onChange={handleChange}

placeholder="Email"

/>



<Input

label="Phone Number"

name="phone"

value={form.phone}

onChange={handleChange}

placeholder="Phone number"

/>



<Input

label="Event Location"

name="location"

value={form.location}

onChange={handleChange}

placeholder="Venue address"

/>


</div>







<div className="
grid
md:grid-cols-2
gap-5
">



<div>

<label className="label">
Event Type
</label>


<select

name="eventType"

value={form.eventType}

onChange={handleChange}

className="input"

>


<option>
Select Event
</option>


{
events.map(event=>(

<option key={event}>
{event}
</option>

))

}


</select>


</div>







<div>


<label className="label">
Cake Category
</label>


<select

name="category"

value={form.category}

onChange={handleChange}

className="input"

>


<option>
All Category
</option>


<option>
Birthday Cakes
</option>


<option>
Wedding Cakes
</option>


<option>
Cupcakes
</option>


<option>
Pastries
</option>


<option>
Bread
</option>


</select>


</div>



</div>







<div className="
grid
md:grid-cols-2
gap-5
">



<div>


<label className="label">
Event Date
</label>


<div 
 
  
className="relative">





<input

type="date"

name="date"

value={form.date}

onChange={handleChange}

className="
input
pl-10
"

/>


</div>


</div>






<div>


<label className="label">
Number Of Guests
</label>


<div

className="relative flex items-center gap-2">





<input

name="guests"

value={form.guests}

onChange={handleChange}

placeholder="Example: 100 guests"

className="
input
pl-10
"

/>


</div>


</div>




</div>







<div>


<label className="label">
Special Request
</label>


<textarea

name="message"

value={form.message}

onChange={handleChange}

rows="4"

placeholder="Tell us about your cake design or event needs"

className="input"

/>


</div>







<button
style={{ backgroundColor: "#bb2e83" }}
className="
w-full
hover:bg-[#c80076]
text-white
py-4
rounded-xl
font-semibold
transition
"

>

Submit Booking Request

</button>



</form>



</div>






</div>



</div>


</section>


)

}





function Input({
label,
...props
}){


return (

<div>


<label className="
label
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