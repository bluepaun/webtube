import app from "./app";

console.log("init.js");
const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);