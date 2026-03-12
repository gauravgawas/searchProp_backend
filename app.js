import express from "express";
import userRoutes from "./src/routes/user.routes.js";
import geometryRoutes from "./src/routes/geometry.routes.js";
import errorHandler from "./src/middlewares/errorHandler.middleware.js";
import cors from "cors";
// import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/geometry", geometryRoutes);
app.use(errorHandler);

export default app;
