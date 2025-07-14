import cors from "cors";
import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//! Import
import userRouter from "./routes/user.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import inquiryRoutes from "./routes/inquiry.routes.js";

import ErrorHandling from "./middleware/error.middleware.js";

const app = express();

//! static
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//! Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! routes

app.get("/", (req, res) => {
  res.send("✅ Server is working fine!");
});

app.use("/api/user", userRouter);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/inquiries", inquiryRoutes);

//! error Handling
app.use(ErrorHandling);

app.use((req, res, next) => {
  next(res.status(404).send(`req url not found ${req.url}`));
});

export default app;
