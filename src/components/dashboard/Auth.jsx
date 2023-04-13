// import { useState } from "react";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
// } from "@chatscope/chat-ui-kit-react";

// const API_KEY = "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";
// const systemMessage = {
//   role: "system",
//   content:
//     "Habla como si estuvieras platicando con un nutriologo con mucha experiencia",
// };

// function App() {
//   const [messages, setMessages] = useState([]);

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: "outgoing",
//       sender: "user",
//     };

//     const newMessages = [...messages, newMessage];

//     setMessages(newMessages);

//     await processMessageToChatGPT(newMessages);
//   };

//   async function processMessageToChatGPT(chatMessages) {
//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.message };
//     });

//     const apiRequestBody = {
//       model: "gpt-3.5-turbo",
//       messages: [systemMessage, ...apiMessages],
//     };

//     await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: "Bearer " + API_KEY,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(apiRequestBody),
//     })
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         setMessages([
//           ...chatMessages,
//           {
//             message: data.choices[0].message.content,
//             sender: "ChatGPT",
//           },
//         ]);
//       });
//   }

//   return (
//     <div className='App'>
//       <div style={{ position: "relative", height: "800px", width: "700px" }}>
//         <MainContainer>
//           <ChatContainer>
//             <MessageList scrollBehavior='smooth'>
//               {messages.map((message, i) => {
//                 return <Message key={i} model={message} />;
//               })}
//             </MessageList>
//             <MessageInput placeholder='Type message here' onSend={handleSend} />
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   );
// }

// export default App;
