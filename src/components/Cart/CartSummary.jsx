"use client";


import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";



export default function CartSummary() {

const router = useRouter();

const cartItems = useSelector(
(state)=>state.cart.cartItems
);


const subtotal = cartItems.reduce(
(total,item)=> total + item.price * item.quantity,
0
);



return (

<div className="
bg-white
rounded-3xl
shadow-lg
border
border-gray-100
p-8
sticky
top-28
">


<h2 className="
text-3xl
font-bold
text-gray-900
mb-8
">
Order Summary
</h2>




<div className="
space-y-5
text-gray-600
">


<div className="flex justify-between">

<span>
Items ({cartItems.length})
</span>

<span>
₦{subtotal.toLocaleString()}
</span>

</div>



<div className="
flex
justify-between
">

<span>
Delivery
</span>

<span className="
text-sm
bg-gray-100
px-3
py-1
rounded-full
">

Calculated checkout

</span>


</div>


</div>




<div className="
border-t
my-8
"/>




<div className="
flex
justify-between
text-2xl
font-bold
text-gray-900
">


<span>
Total
</span>


<span className="text-[#4c4b4c]">

₦{subtotal.toLocaleString()}

</span>


</div>



    <button
      onClick={() => 
     {console.log("Button clicked");
        
        router.push("/checkout")}}
      className="
        w-full
        mt-8
        bg-[#1a1a1a]
        hover:bg-[#a8418b]
        text-white
        py-4
        rounded-xl
        font-semibold
        text-lg
        transition
        shadow-md
      "
    >
      Proceed To Checkout
    </button>




<p className="
text-center
text-sm
text-gray-400
mt-5
">

Secure checkout • Freshly baked with love 🍰

</p>



</div>

);

}