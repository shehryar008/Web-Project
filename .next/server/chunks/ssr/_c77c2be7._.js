module.exports = {

"[project]/src/app/CSS/FAQ.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "aiMessage": "FAQ-module__Vyh-sq__aiMessage",
  "bounce": "FAQ-module__Vyh-sq__bounce",
  "chatContainer": "FAQ-module__Vyh-sq__chatContainer",
  "dot": "FAQ-module__Vyh-sq__dot",
  "errorMessage": "FAQ-module__Vyh-sq__errorMessage",
  "faqContainer": "FAQ-module__Vyh-sq__faqContainer",
  "inputContainer": "FAQ-module__Vyh-sq__inputContainer",
  "inputField": "FAQ-module__Vyh-sq__inputField",
  "loadingIndicator": "FAQ-module__Vyh-sq__loadingIndicator",
  "message": "FAQ-module__Vyh-sq__message",
  "messageContent": "FAQ-module__Vyh-sq__messageContent",
  "questionButton": "FAQ-module__Vyh-sq__questionButton",
  "questionButtons": "FAQ-module__Vyh-sq__questionButtons",
  "quickQuestions": "FAQ-module__Vyh-sq__quickQuestions",
  "submitButton": "FAQ-module__Vyh-sq__submitButton",
  "title": "FAQ-module__Vyh-sq__title",
  "userMessage": "FAQ-module__Vyh-sq__userMessage",
  "welcomeMessage": "FAQ-module__Vyh-sq__welcomeMessage",
});
}}),
"[project]/src/app/FAQ/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/CSS/FAQ.module.css [app-ssr] (css module)");
"use client";
;
;
;
const FAQ = ()=>{
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // API key should be stored securely in environment variables in production
    const API_KEY = process.env.OPEN_AI_API_KEY;
    // Common travel questions for quick access
    const commonQuestions = [
        "What are the best beach destinations in Europe?",
        "How to find affordable hotels in major cities?",
        "What's the best time to visit Japan?",
        "Tips for budget travel in Southeast Asia",
        "Best family-friendly destinations"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Scroll to bottom of chat whenever conversations update
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [
        conversations
    ]);
    const handleQueryChange = (e)=>{
        setQuery(e.target.value);
    };
    const handleCommonQuestionClick = (question)=>{
        setQuery(question);
        handleSubmit(question);
    };
    const handleSubmit = async (questionText = null)=>{
        const textToSubmit = questionText || query;
        if (!textToSubmit.trim()) return;
        if (!API_KEY) {
            setError('API key is missing. Please check your environment variables.');
            return;
        }
        setIsLoading(true);
        setError('');
        // Add user message to conversation immediately
        setConversations((prev)=>[
                ...prev,
                {
                    role: 'user',
                    content: textToSubmit
                }
            ]);
        // Clear input field after submission
        if (!questionText) setQuery('');
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-4-turbo',
                    messages: [
                        {
                            // System message for prompt engineering - constraining responses to travel topics
                            role: 'system',
                            content: `You are a specialized travel assistant focused only on providing information about:
              1. Hotel accommodations and rentals
              2. Travel destinations and best locations to visit
              3. Travel tips, budgeting, and planning
              4. Tourist attractions and activities
              5. Transportation options for travelers
              
              Important guidelines:
              - Only answer questions related to travel, tourism, accommodations, and locations.
              - If a question is not related to travel or hospitality, politely decline to answer and suggest asking a travel-related question instead.
              - Provide concise, practical advice for travelers.
              - Include specific location recommendations when appropriate.
              - Focus on being helpful for trip planning and travel decisions.
              
              Do not provide responses about topics unrelated to travel, even if requested.`
                        },
                        // Include previous conversation for context
                        ...conversations.slice(-4),
                        {
                            role: 'user',
                            content: textToSubmit
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 500
                })
            });
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            const data = await response.json();
            const aiResponse = data.choices[0].message.content;
            // Add AI response to conversation
            setConversations((prev)=>[
                    ...prev,
                    {
                        role: 'assistant',
                        content: aiResponse
                    }
                ]);
        } catch (err) {
            console.error('Error calling OpenAI API:', err);
            setError('Failed to get a response. Please try again later.');
        } finally{
            setIsLoading(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "Travel & Accommodation FAQ"
            }, void 0, false, {
                fileName: "[project]/src/app/FAQ/page.jsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickQuestions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Common Questions"
                    }, void 0, false, {
                        fileName: "[project]/src/app/FAQ/page.jsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].questionButtons,
                        children: commonQuestions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].questionButton,
                                onClick: ()=>handleCommonQuestionClick(question),
                                children: question
                            }, index, false, {
                                fileName: "[project]/src/app/FAQ/page.jsx",
                                lineNumber: 136,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/FAQ/page.jsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/FAQ/page.jsx",
                lineNumber: 132,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chatContainer,
                ref: chatContainerRef,
                children: [
                    conversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].welcomeMessage,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Hello, Traveler!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/FAQ/page.jsx",
                                lineNumber: 153,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Ask me anything about hotels, destinations, travel tips, or click one of the common questions above to get started."
                            }, void 0, false, {
                                fileName: "[project]/src/app/FAQ/page.jsx",
                                lineNumber: 154,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/FAQ/page.jsx",
                        lineNumber: 152,
                        columnNumber: 21
                    }, this) : conversations.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message} ${msg.role === 'user' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userMessage : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aiMessage}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageContent,
                                children: msg.content.split('\n').map((text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: text
                                    }, i, false, {
                                        fileName: "[project]/src/app/FAQ/page.jsx",
                                        lineNumber: 164,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/FAQ/page.jsx",
                                lineNumber: 162,
                                columnNumber: 29
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/FAQ/page.jsx",
                            lineNumber: 158,
                            columnNumber: 25
                        }, this)),
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingIndicator,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                            }, void 0, false, {
                                fileName: "[project]/src/app/FAQ/page.jsx",
                                lineNumber: 173,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                            }, void 0, false, {
                                fileName: "[project]/src/app/FAQ/page.jsx",
                                lineNumber: 174,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                            }, void 0, false, {
                                fileName: "[project]/src/app/FAQ/page.jsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/FAQ/page.jsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/FAQ/page.jsx",
                lineNumber: 147,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/FAQ/page.jsx",
                lineNumber: 180,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputField,
                        value: query,
                        onChange: handleQueryChange,
                        onKeyPress: handleKeyPress,
                        placeholder: "Ask about hotels, destinations, travel tips...",
                        rows: 2,
                        disabled: isLoading
                    }, void 0, false, {
                        fileName: "[project]/src/app/FAQ/page.jsx",
                        lineNumber: 183,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$FAQ$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                        onClick: ()=>handleSubmit(),
                        disabled: isLoading || !query.trim(),
                        children: isLoading ? 'Thinking...' : 'Ask'
                    }, void 0, false, {
                        fileName: "[project]/src/app/FAQ/page.jsx",
                        lineNumber: 192,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/FAQ/page.jsx",
                lineNumber: 182,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/FAQ/page.jsx",
        lineNumber: 129,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = FAQ;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_c77c2be7._.js.map