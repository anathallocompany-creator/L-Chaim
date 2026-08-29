"use client";

import { useState } from "react";

import {
  Search,
  ChevronDown,
  ShoppingBag,
  Truck,
  CreditCard,
  Cake,
  User,
  MessageCircle
} from "lucide-react";


export default function faq(){


const [active,setActive]=useState(null);
const [search,setSearch]=useState("");



const categories=[

{
title:"Orders",
icon:<ShoppingBag/>
},

{
title:"Delivery",
icon:<Truck/>
},

{
title:"Payments",
icon:<CreditCard/>
},

{
title:"Cakes & Products",
icon:<Cake/>
},

{
title:"Account",
icon:<User/>
}

];



const faqs=[


{
category:"Orders",
question:"How do I place an order?",
answer:
"Select your favourite cake, add it to your cart, continue to checkout and complete your payment."
},


{
category:"Orders",
question:"Can I customize my cake?",
answer:
"Yes. You can request custom designs, flavours and sizes. Contact our team before placing your order."
},



{
category:"Delivery",
question:"How long does delivery take?",
answer:
"Delivery usually takes between 24 to 48 hours depending on your location."
},



{
category:"Delivery",
question:"Can I track my order?",
answer:
"Yes. Visit the Track My Order page and enter your order number to see your delivery status."
},



{
category:"Payments",
question:"What payment methods do you accept?",
answer:
"We accept card payments, bank transfers and wallet payments."
},



{
category:"Payments",
question:"Is payment secure?",
answer:
"Yes. All payments are processed securely using trusted payment providers."
},



{
category:"Cakes & Products",
question:"How should I store my cake?",
answer:
"Keep your cake refrigerated and allow it to reach room temperature before serving."
},



{
category:"Account",
question:"How do I update my account details?",
answer:
"Go to your account page and update your profile information."
},



{
category:"Account",
question:"How do I reset my password?",
answer:
"Click forgot password on the login page and follow the instructions."
}

];



const filteredFaqs=faqs.filter(item=>

item.question
.toLowerCase()
.includes(search.toLowerCase())

);





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


{/* Header */}

<div className="
text-center
mb-12
">


<h1 className="
text-4xl
font-bold
">

Frequently Asked Questions

</h1>


<p className="
text-gray-500
mt-3
">

Find answers to common questions about L'Chaim Sweets

</p>




</div>







{/* Categories */}


<div className="
flex
flex-wrap
justify-center
gap-4
mb-10
">


{
categories.map(category=>(


<button

key={category.title}

className="
bg-white
border
border-gray-300
rounded-full
px-5
py-3
flex
items-center
gap-2
hover:border-[#ec008c]
hover:text-[#ec008c]
transition
"

>


{category.icon}

{category.title}


</button>


))

}


</div>







{/* FAQ List */}


<div className="
bg-white
border
border-gray-300
rounded-2xl
overflow-hidden
"
>


{
filteredFaqs.map((faq,index)=>(


<div
key={faq.question}
className="
border-b
border-gray-300
last:border-none
"
>


<button

onClick={()=>setActive(
active===index ? null : index
)}

className="
w-full
flex
justify-between
items-center
text-left
p-6
font-semibold
"


>


<span>

{faq.question}

</span>



<ChevronDown

size={20}

className={`
transition
${
active===index
?
"rotate-180 text-[#ec008c]"
:
""
}
`}

/>


</button>





{
active===index && (

<div className="
px-6
pb-6
text-gray-500
text-sm
leading-6
">

{faq.answer}

</div>

)

}


</div>


))

}



</div>







{/* Contact */}

<div
style={{ backgroundColor: "#bb2e83" }}
className="
mt-10
bg-[#ec008c]
rounded-2xl
p-8
text-white
text-center
">


<MessageCircle
className="
mx-auto
mb-4
"
size={40}
/>



<h2 className="
text-2xl
font-bold
">

Still need help?

</h2>


<p className="
mt-2
text-white/90
">

Our customer support team is ready to assist you.

</p>




<button
style={{ color: "#bb2e83" }}
className="
mt-5
bg-white
text-[#ec008c]
px-8
py-3
rounded-xl
font-semibold
"

>

Contact Support

</button>


</div>




</div>


</section>


)

}