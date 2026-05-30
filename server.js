import dotenv from "dotenv";
import app from "./app.js";
import { SessionsClient } from "@google-cloud/dialogflow-cx";
dotenv.config();

const PORT = process.env.PORT || 3000;

// CX client
const client = new SessionsClient({
  apiEndpoint: "us-central1-dialogflow.googleapis.com",
  keyFilename: "./searchprop-495615-ac4b365bbdad.json",
});
const projectId = "searchprop-495615";
const location = "us-central1";
const agentId = "c7c1e657-152d-49a6-b6f5-c0b0d4f3d975";
console.log("Project:", projectId);
console.log("Location:", location);
console.log("Agent:", agentId);
app.post("/chat", async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    const sessionPath = client.projectLocationAgentSessionPath(
      projectId,
      location,
      agentId,
      sessionId || Date.now().toString(),
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
        },
        languageCode: "en",
      },
    };

    const [response] = await client.detectIntent(request);

    const params = response.queryResult?.parameters || {};
    // Convert CX params → your filter structure
    const filters = {
      Type: params?.fields?.Type?.stringValue || "",
      BHK: params?.fields?.BHK?.stringValue || "",
      Furnishing: params?.fields?.Furnishing?.stringValue || "",
      Status: params?.fields?.Status?.stringValue || "",

      Price: {
        min: params?.fields?.price_min?.numberValue || 0,
        max: params?.fields?.price_max?.numberValue || Infinity,
      },

      Area: {
        min: params?.fields?.area_min?.numberValue || 0,
        max: params?.fields?.area_max?.numberValue || Infinity,
      },
    };

    res.json({
      reply:
        response.queryResult.responseMessages?.[0]?.text?.text?.[0] || "OK",

      filters,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Chat API failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
