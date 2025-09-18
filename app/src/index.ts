import type {
    Request as ExpressRequest,
    Response as ExpressResponse,
} from "express";
import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req: ExpressRequest, res: ExpressResponse) => {
    res.send("Todo App");
});

app.listen(PORT, () => {
    // This is the required output message
    console.log(`Server started in port ${PORT}`);
});
