"use client";

import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Star
} from "lucide-react";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
 


export default function SavedItemsPage() {


 const { user } = useUser();

const [liked, setLiked] = useState(false);

const [savedItems, setSavedItems] = useState([]);

useEffect(() => {

    fetch("/api/wishlist")
        .then(res => res.json())
        .then(data => setSavedItems(data));

}, []);

const removeItem = async (item) => {
  await fetch("/api/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  setSavedItems((prev) =>
    prev.filter((p) => p.productId !== item.productId)
  );
};



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
flex
items-center
justify-between
mb-10
">


<div>

<h1 className="
text-3xl
font-bold
text-gray-900
">

Saved Items

</h1>


<p className="
text-gray-500
mt-2
">

Your favourite cakes and desserts

</p>


</div>



<div
style={{ color: "#bb2e83" }}
className="
flex
items-center
gap-2
text-[#b9458b]
">

<Heart
fill="currentColor"

/>


<span className="font-semibold">

{savedItems.length} Items

</span>


</div>


</div>





{/* Products */}


{
savedItems.length === 0 ?


(
<div className="
bg-white
rounded-xl
p-16
text-center
">

<Heart
size={50}
className="
mx-auto
text-gray-300
"
/>


<h2 className="
text-xl
font-semibold
mt-5
">

No saved items

</h2>


<p className="
text-gray-500
mt-2
">

Save your favourite cakes to see them here.

</p>


</div>

)


:


(


<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
">


{
savedItems.map(item=>(


<div
key={item._id}
className="
bg-white
rounded-2xl
overflow-hidden
shadow-sm
border
hover:shadow-lg
transition
"
>



{/* Image */}

<div className="
relative
h-64
">


<Image

src={item.image}

alt={item.name}

fill

className="
object-cover
"

/>


<button
style={{ color: "#bb2e83" }}
className="
absolute
top-4
right-4
bg-white
rounded-full
p-2
shadow
text-[#ad3d80]
"

>

<Heart
fill="currentColor"
size={20}
/>


</button>


</div>





{/* Details */}

<div className="
p-5
">


<h2 className="
font-bold
text-lg
">

{item.name}

</h2>




<div className="
flex
items-center
gap-1
mt-2
text-yellow-500
">


{
Array.from({
length:item.rating
}).map((_,i)=>(

<Star
key={i}
size={15}
fill="currentColor"
/>

))

}


</div>





<p 
style={{ color: "#bb2e83" }}
className="
text-[#a73278]
font-bold
text-xl
mt-3
">

₦{item.price.toLocaleString()}

</p>





<div
 
className="
flex
gap-3
mt-5
">


<button
style={{ backgroundColor: "#bb2e83" }}
className="
flex-1
bg-[#bb2e83]
text-white
rounded-lg
py-3
flex
justify-center
items-center
gap-2
font-semibold
hover:bg-[#c90076]
transition
"

>


<ShoppingCart size={18}/>

Add Cart


</button>




<button
  onClick={() => removeItem(item)}
  className="border rounded-lg px-4 hover:bg-gray-100 transition"
>
  <Trash2 size={18} />
</button>



</div>



</div>



</div>


))

}


</div>


)

}


</div>


</section>


)

}