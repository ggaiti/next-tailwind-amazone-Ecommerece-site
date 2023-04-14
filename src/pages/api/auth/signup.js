import User from "../../../../models/User";
import db from "../../../../utils/db";
import bcryptjs from "bcryptjs";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 4
  ) {
    res.status(442).json({
      message: "Validation error",
    });
    return;
  }

  await db.connect();
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(442).json({ message: "User Already Registered" });
    await db.disconnect();
    return;
  }
  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();
  res.status(201).send({
    message: "Account Registered!",
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
}

export default handler;
