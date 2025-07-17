import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado.");
  } catch (err) {
    console.error("Erro na conexão com o banco:", err.message);
    process.exit(1);
  }
}
