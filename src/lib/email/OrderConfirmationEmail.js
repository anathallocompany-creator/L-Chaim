export function OrderConfirmationEmail({
  order,
  orderUrl,
}) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Order Confirmation</title>
</head>

<body style="
margin:0;
padding:0;
background:#f7f7f7;
font-family:Arial,sans-serif;
">

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="padding:40px 0;"
>

<tr>

<td align="center">

<table
width="650"
cellpadding="0"
cellspacing="0"
style="
background:#ffffff;
border-radius:18px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.08);
"
>

<!-- HEADER -->

<tr>

<td
style="
background:#922b6a;
padding:35px;
text-align:center;
"
>

<h1
style="
margin:0;
color:white;
font-size:34px;
font-family:Georgia,serif;
"
>
L'Chaim Cakes
</h1>

<p
style="
margin-top:10px;
color:#f7d9ea;
font-size:15px;
"
>
Luxury Cakes Crafted With Love
</p>

</td>

</tr>

<!-- BODY -->

<tr>

<td style="padding:40px;">

<h2 style="margin-top:0;">
Thank you for your order 🎉
</h2>

<p>
Hi <strong>${order.customer.name}</strong>,
</p>

<p>
We've successfully received your order and we'll begin processing it shortly.
</p>

<hr style="margin:30px 0;" />

<h3>Order Information</h3>

<table width="100%">

<tr>

<td><strong>Order Number</strong></td>

<td align="right">
${order.orderNumber}
</td>

</tr>

<tr>

<td><strong>Order Date</strong></td>

<td align="right">
${new Date(order.createdAt).toLocaleDateString()}
</td>

</tr>

<tr>

<td><strong>Payment Method</strong></td>

<td align="right">
${order.paymentMethod}
</td>

</tr>

<tr>

<td><strong>Payment Status</strong></td>

<td align="right">
${order.paymentStatus}
</td>

</tr>

<tr>

<td><strong>Order Status</strong></td>

<td align="right">
${order.orderStatus}
</td>

</tr>

</table>

<hr style="margin:30px 0;" />

<h3>Delivery Address</h3>

<p>

${order.customer.name}<br>

${order.shippingAddress.address}<br>

${order.shippingAddress.city},
${order.shippingAddress.state}<br>

${order.shippingAddress.country}<br>

${order.customer.phone}

</p>

<hr style="margin:30px 0;" />

<h3>Items Ordered</h3>

<table
width="100%"
cellpadding="12"
style="
border-collapse:collapse;
"
>

<tr style="background:#fafafa;">

<th align="left">
Item
</th>

<th align="center">
Qty
</th>

<th align="right">
Price
</th>

</tr>

${order.items
  .map(
    (item) => `
<tr>

<td
style="
border-bottom:1px solid #eee;
"
>
${item.name}
</td>

<td
align="center"
style="
border-bottom:1px solid #eee;
"
>
${item.quantity}
</td>

<td
align="right"
style="
border-bottom:1px solid #eee;
"
>
₦${(
  item.price * item.quantity
).toLocaleString()}
</td>

</tr>
`
  )
  .join("")}

</table>

<hr style="margin:30px 0;" />

<table width="100%">

<tr>

<td>
Subtotal
</td>

<td align="right">
₦${order.subtotal.toLocaleString()}
</td>

</tr>

<tr>

<td>
Delivery
</td>

<td align="right">
₦${order.deliveryFee.toLocaleString()}
</td>

</tr>

<tr>

<td
style="
font-size:20px;
font-weight:bold;
padding-top:15px;
"
>

Total

</td>

<td
align="right"
style="
font-size:20px;
font-weight:bold;
padding-top:15px;
color:#922b6a;
"
>

₦${order.total.toLocaleString()}

</td>

</tr>

</table>

<div
style="
text-align:center;
margin-top:45px;
"
>

<a
href="${orderUrl}"
style="
background:#922b6a;
color:white;
padding:15px 35px;
border-radius:8px;
text-decoration:none;
font-weight:bold;
display:inline-block;
"
>

View Your Order

</a>

</div>

<p
style="
margin-top:45px;
font-size:14px;
color:#666;
text-align:center;
line-height:24px;
"
>

Thank you for choosing
<strong>L'Chaim Cakes</strong>.

We appreciate your trust and look forward to serving you again.

</p>

</td>

</tr>

<!-- FOOTER -->

<tr>

<td
style="
background:#fafafa;
padding:25px;
text-align:center;
font-size:13px;
color:#777;
"
>

© ${new Date().getFullYear()} L'Chaim Cakes

<br><br>

Made with ❤️ for every celebration.

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;
}