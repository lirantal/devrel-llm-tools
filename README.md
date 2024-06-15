# AI-Powered Developer Relations

The current experiment is a Node.js program that leverages LLM Agents, powered by the LangChain framework, to answer questions about a conference agenda. Below is an example of the program's output when asked to list all the speakers who participate in the full agenda of the NodeTLV conference from their website:

```bash
> node --env-file=.env app.js

Loaded agent.
Executing with input "List all the speakers who participate in the full agenda of the NodeTLV conference from their website https://www.nodetlv.com/agenda ?"...
[chain/start] [1:chain:AgentExecutor] Entering Chain run with input: {
  "input": "List all the speakers who participate in the full agenda of the NodeTLV conference from their website https://www.nodetlv.com/agenda ?"
}
[chain/start] [1:chain:AgentExecutor > 2:chain:LLMChain] Entering Chain run with input: {
  "input": "List all the speakers who participate in the full agenda of the NodeTLV conference from their website https://www.nodetlv.com/agenda ?",
  "agent_scratchpad": "",
  "stop": [
    "\nObservation: "
  ]
}
[llm/start] [1:chain:AgentExecutor > 2:chain:LLMChain > 3:llm:OpenAI] Entering LLM run with input: {
  "prompts": [
    "Answer the following questions as best you can. You have access to the following tools:\n\nweb-browser: useful for when you need to find something on or summarize a webpage. input should be a comma separated list of \"ONE valid http URL including protocol\",\"what you want to find on the page or empty string for a summary\".\n\nUse the following format in your response:\n\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take, should be one of [web-browser]\nAction Input: the input to the action\nObservation: the result of the action\n... (this Thought/Action/Action Input/Observation can repeat N times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin!\n\nQuestion: List all the speakers who participate in the full agenda of the NodeTLV conference from their website https://www.nodetlv.com/agenda ?\nThought:"
  ]
}
[llm/end] [1:chain:AgentExecutor > 2:chain:LLMChain > 3:llm:OpenAI] [1.31s] Exiting LLM run with output: {
  "generations": [
    [
      {
        "text": " I should use a web-browser to find the list of speakers on the NodeTLV conference website.\nAction: web-browser\nAction Input: https://www.nodetlv.com/agenda, list of speakers",
        "generationInfo": {
          "finishReason": "stop",
          "logprobs": null
        }
      }
    ]
  ],
  "llmOutput": {
    "tokenUsage": {
      "completionTokens": 42,
      "promptTokens": 200,
      "totalTokens": 242
    }
  }
}
[chain/end] [1:chain:AgentExecutor > 2:chain:LLMChain] [1.31s] Exiting Chain run with output: {
  "text": " I should use a web-browser to find the list of speakers on the NodeTLV conference website.\nAction: web-browser\nAction Input: https://www.nodetlv.com/agenda, list of speakers"
}
[agent/action] [1:chain:AgentExecutor] Agent selected action: {
  "tool": "web-browser",
  "toolInput": "https://www.nodetlv.com/agenda, list of speakers",
  "log": " I should use a web-browser to find the list of speakers on the NodeTLV conference website.\nAction: web-browser\nAction Input: https://www.nodetlv.com/agenda, list of speakers"
}
[tool/start] [1:chain:AgentExecutor > 4:tool:WebBrowser] Entering Tool run with input: "https://www.nodetlv.com/agenda, list of speakers"
[tool/end] [1:chain:AgentExecutor > 4:tool:WebBrowser] [6.87s] Exiting Tool run with output: "Speakers:
1. Nitzan Uziely
2. Moshe Atlow
3. Benjamin Gruenbaum
4. Ziv Kalderon
5. Oren Efraim
6. Shai Yallin
7. Ron Klein
8. Noam Honig
9. Erick Wendel
10. Evyatar Alush
11. Yoni Goldberg
12. Gil Tayar

Relevant Links:
- https://www.nodetlv.com/events/performance-improvements-in-node-js/
- https://www.nodetlv.com/events/the-big-change/
- https://www.nodetlv.com/events/shifting-left-performance-testing-using-k6-by-grafanalabs/
- https://www.nodetlv.com/events/production-cpr-avoid-downtime-with-code-patching/
- https://www.nodetlv.com/events/nestjs-considered-harmful/
- https://www.nodetlv.com/events/first-in-fast-out-how-i-developed-a-queue-thats-faster-and-lighter/
- https://www.nodetlv.com/events/meet-your-new-bff-backend-to-frontend-without-the-duct-tape/
- https://"
[chain/start] [1:chain:AgentExecutor > 5:chain:LLMChain] Entering Chain run with input: {
  "input": "List all the speakers who participate in the full agenda of the NodeTLV conference from their website https://www.nodetlv.com/agenda ?",
  "agent_scratchpad": " I should use a web-browser to find the list of speakers on the NodeTLV conference website.\nAction: web-browser\nAction Input: https://www.nodetlv.com/agenda, list of speakers\nObservation: \n\nSpeakers:\n1. Nitzan Uziely\n2. Moshe Atlow\n3. Benjamin Gruenbaum\n4. Ziv Kalderon\n5. Oren Efraim\n6. Shai Yallin\n7. Ron Klein\n8. Noam Honig\n9. Erick Wendel\n10. Evyatar Alush\n11. Yoni Goldberg\n12. Gil Tayar\n\nRelevant Links:\n- https://www.nodetlv.com/events/performance-improvements-in-node-js/\n- https://www.nodetlv.com/events/the-big-change/\n- https://www.nodetlv.com/events/shifting-left-performance-testing-using-k6-by-grafanalabs/\n- https://www.nodetlv.com/events/production-cpr-avoid-downtime-with-code-patching/\n- https://www.nodetlv.com/events/nestjs-considered-harmful/\n- https://www.nodetlv.com/events/first-in-fast-out-how-i-developed-a-queue-thats-faster-and-lighter/\n- https://www.nodetlv.com/events/meet-your-new-bff-backend-to-frontend-without-the-duct-tape/\n- https://\nThought:",
  "stop": [
    "\nObservation: "
  ]
}
[llm/start] [1:chain:AgentExecutor > 5:chain:LLMChain > 6:llm:OpenAI] Entering LLM run with input: {
  "prompts": [
    "Answer the following questions as best you can. You have access to the following tools:\n\nweb-browser: useful for when you need to find something on or summarize a webpage. input should be a comma separated list of \"ONE valid http URL including protocol\",\"what you want to find on the page or empty string for a summary\".\n\nUse the following format in your response:\n\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take, should be one of [web-browser]\nAction Input: the input to the action\nObservation: the result of the action\n... (this Thought/Action/Action Input/Observation can repeat N times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin!\n\nQuestion: List all the speakers who participate in the full agenda of the NodeTLV conference from their website https://www.nodetlv.com/agenda ?\nThought: I should use a web-browser to find the list of speakers on the NodeTLV conference website.\nAction: web-browser\nAction Input: https://www.nodetlv.com/agenda, list of speakers\nObservation: \n\nSpeakers:\n1. Nitzan Uziely\n2. Moshe Atlow\n3. Benjamin Gruenbaum\n4. Ziv Kalderon\n5. Oren Efraim\n6. Shai Yallin\n7. Ron Klein\n8. Noam Honig\n9. Erick Wendel\n10. Evyatar Alush\n11. Yoni Goldberg\n12. Gil Tayar\n\nRelevant Links:\n- https://www.nodetlv.com/events/performance-improvements-in-node-js/\n- https://www.nodetlv.com/events/the-big-change/\n- https://www.nodetlv.com/events/shifting-left-performance-testing-using-k6-by-grafanalabs/\n- https://www.nodetlv.com/events/production-cpr-avoid-downtime-with-code-patching/\n- https://www.nodetlv.com/events/nestjs-considered-harmful/\n- https://www.nodetlv.com/events/first-in-fast-out-how-i-developed-a-queue-thats-faster-and-lighter/\n- https://www.nodetlv.com/events/meet-your-new-bff-backend-to-frontend-without-the-duct-tape/\n- https://\nThought:"
  ]
}
[llm/end] [1:chain:AgentExecutor > 5:chain:LLMChain > 6:llm:OpenAI] [1.52s] Exiting LLM run with output: {
  "generations": [
    [
      {
        "text": " I now know the final answer\nFinal Answer: The list of speakers who participate in the full agenda of the NodeTLV conference are Nitzan Uziely, Moshe Atlow, Benjamin Gruenbaum, Ziv Kalderon, Oren Efraim, Shai Yallin, Ron Klein, Noam Honig, Erick Wendel, Evyatar Alush, Yoni Goldberg, and Gil Tayar.",
        "generationInfo": {
          "finishReason": "stop",
          "logprobs": null
        }
      }
    ]
  ],
  "llmOutput": {
    "tokenUsage": {
      "completionTokens": 90,
      "promptTokens": 505,
      "totalTokens": 595
    }
  }
}
[chain/end] [1:chain:AgentExecutor > 5:chain:LLMChain] [1.52s] Exiting Chain run with output: {
  "text": " I now know the final answer\nFinal Answer: The list of speakers who participate in the full agenda of the NodeTLV conference are Nitzan Uziely, Moshe Atlow, Benjamin Gruenbaum, Ziv Kalderon, Oren Efraim, Shai Yallin, Ron Klein, Noam Honig, Erick Wendel, Evyatar Alush, Yoni Goldberg, and Gil Tayar."
}
[chain/end] [1:chain:AgentExecutor] [9.71s] Exiting Chain run with output: {
  "output": "The list of speakers who participate in the full agenda of the NodeTLV conference are Nitzan Uziely, Moshe Atlow, Benjamin Gruenbaum, Ziv Kalderon, Oren Efraim, Shai Yallin, Ron Klein, Noam Honig, Erick Wendel, Evyatar Alush, Yoni Goldberg, and Gil Tayar."
}
Got output {
  "output": "The list of speakers who participate in the full agenda of the NodeTLV conference are Nitzan Uziely, Moshe Atlow, Benjamin Gruenbaum, Ziv Kalderon, Oren Efraim, Shai Yallin, Ron Klein, Noam Honig, Erick Wendel, Evyatar Alush, Yoni Goldberg, and Gil Tayar."
}
```

## Tech stack

- LangChain JavaScript SDK
- OpenAI Agents with Tools and Embeddings API

## How to run

1. Install dependencies

```bash
npm install
```

2. Set the environment variables

Create a `.env` file in the root of the project and add the following:

```bash
OPENAI_API_KEY=sk-1234567890
```

3. Run the Node.js program

```bash
npm run start
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Author

[Liran Tal](https://www.lirantal.com)
