import bcrypt from "bcryptjs";

const password = "Anathallocompanyzion2026"; // Change to the password you want

const hash = await bcrypt.hash(password, 10);

console.log(hash);