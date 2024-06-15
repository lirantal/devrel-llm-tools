import { OpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { WebBrowser } from "langchain/tools/webbrowser";

export const run = async () => {
  const model = new OpenAI({ temperature: 0 });
  const embeddings = new OpenAIEmbeddings();
  const tools = [new WebBrowser({ model, embeddings })];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: true,
  });

  const input = `List all the speakers who participate in the full agenda of the NodeTLV conference from their website https://www.nodetlv.com/agenda ?`;

  const result = await executor.invoke({ input });

  console.log(`Got output ${JSON.stringify(result, null, 2)}`);
};

run();
