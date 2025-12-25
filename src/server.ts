
import http from "http";
import { app } from "./app";
import dotenv from "dotenv";
import seedAdmin from "./app/utils/seedAdmin";
import { initSocket } from "./app/shared/socket";


dotenv.config();

async function runServer() {
  try {
    let server = http.createServer(app);
    initSocket(server);
    server.listen(process.env.PORT, () => {
      console.log(
        `🚀 Server running on port | ${process.env.PORT}`
      );
    });
  } catch (error) {
    console.error("❌ Server failed to start", error);
  }
}

(async () => {
  await runServer();
  await seedAdmin();
})();

