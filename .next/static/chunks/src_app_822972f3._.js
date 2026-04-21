(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components_css/Category_bar.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "Category_bar-module__R5AYLa__active",
  "categoryBar": "Category_bar-module__R5AYLa__categoryBar",
  "categoryIcon": "Category_bar-module__R5AYLa__categoryIcon",
  "categoryItem": "Category_bar-module__R5AYLa__categoryItem",
  "categoryLabel": "Category_bar-module__R5AYLa__categoryLabel",
  "categoryScroll": "Category_bar-module__R5AYLa__categoryScroll",
  "destinationsGrid": "Category_bar-module__R5AYLa__destinationsGrid",
  "header": "Category_bar-module__R5AYLa__header",
  "searchBox": "Category_bar-module__R5AYLa__searchBox",
});
}}),
"[project]/src/app/components/Categorybar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Categorybar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Category_bar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components_css/Category_bar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function Categorybar({ onCategoryClick, selectedCategory }) {
    const categoryIcons = [
        {
            id: 1,
            name: 'wifi',
            src: '/wifi.png',
            alt: 'wifi'
        },
        {
            id: 2,
            name: 'spa',
            src: '/spa.png',
            alt: 'spa'
        },
        {
            id: 3,
            name: 'phone',
            src: '/phone.png',
            alt: 'phone'
        },
        {
            id: 4,
            name: 'food',
            src: '/food.png',
            alt: 'food'
        },
        {
            id: 5,
            name: 'gym',
            src: '/gym.png',
            alt: 'gym'
        },
        {
            id: 6,
            name: 'kitchen',
            src: '/kitchen.png',
            alt: 'kitchen'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Category_bar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryBar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Category_bar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryScroll,
            children: categoryIcons.map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Category_bar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryItem} ${selectedCategory === icon.name ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Category_bar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                    onClick: ()=>onCategoryClick(icon.name),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Category_bar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryImageContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: icon.src,
                            alt: icon.alt,
                            width: 24,
                            height: 24,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Category_bar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryIcon
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Categorybar.jsx",
                            lineNumber: 26,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Categorybar.jsx",
                        lineNumber: 25,
                        columnNumber: 25
                    }, this)
                }, icon.id, false, {
                    fileName: "[project]/src/app/components/Categorybar.jsx",
                    lineNumber: 20,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Categorybar.jsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Categorybar.jsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = Categorybar;
var _c;
__turbopack_context__.k.register(_c, "Categorybar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components_css/Navbar.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "categoryBar": "Navbar-module__-qagsW__categoryBar",
  "categoryScroll": "Navbar-module__-qagsW__categoryScroll",
  "destinationsGrid": "Navbar-module__-qagsW__destinationsGrid",
  "header": "Navbar-module__-qagsW__header",
  "logo": "Navbar-module__-qagsW__logo",
  "searchBox": "Navbar-module__-qagsW__searchBox",
  "searchButton": "Navbar-module__-qagsW__searchButton",
  "searchInput": "Navbar-module__-qagsW__searchInput",
  "text": "Navbar-module__-qagsW__text",
  "userAvatar": "Navbar-module__-qagsW__userAvatar",
  "userInfo": "Navbar-module__-qagsW__userInfo",
});
}}),
"[project]/src/app/components/Navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components_css/Navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Navbar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSearch = ()=>{
        const trimmed = searchTerm.trim();
        if (trimmed) {
            router.push(`/Search?query=${encodeURIComponent(trimmed)}`);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            // 1) Grab userId & token from localStorage
            const userId = localStorage.getItem('userId');
            const token = localStorage.getItem('token');
            if (!userId || !token) {
                setLoading(false);
                return;
            }
            // 2) Fetch user profile
            fetch(`http://localhost:5000/api/auth/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then({
                "Navbar.useEffect": (res)=>res.json()
            }["Navbar.useEffect"]).then({
                "Navbar.useEffect": (data)=>{
                    if (!data.error) setUser(data);
                }
            }["Navbar.useEffect"]).catch(console.error).finally({
                "Navbar.useEffect": ()=>setLoading(false)
            }["Navbar.useEffect"]);
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                onClick: ()=>router.push('/home'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/image.png",
                    alt: "Logo",
                    width: 80,
                    height: 80
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Navbar.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Navbar.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search hotels",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput,
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value),
                        onKeyDown: handleKeyDown
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchButton,
                        onClick: handleSearch,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            fill: "currentColor",
                            viewBox: "0 0 16 16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbar.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Navbar.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                children: !loading && user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                            children: user.username
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbar.jsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userAvatar,
                            onClick: ()=>router.push('/UserInfo'),
                            children: user.profilePic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: user.profilePic,
                                alt: user.username,
                                width: 32,
                                height: 32,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userAvatar,
                                onError: (e)=>{
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = '/fallback.png';
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.jsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "32",
                                height: "32",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.jsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "7",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.jsx",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Navbar.jsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbar.jsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components_css$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginLink,
                    onClick: ()=>router.push('/login'),
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Navbar.jsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Navbar.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Navbar.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Navbar, "jhizRZ9c2JiIn1k+1a6tZ8H56yk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/CSS/home.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "cardContent": "home-module__GEvhma__cardContent",
  "cardImage": "home-module__GEvhma__cardImage",
  "categoryBar": "home-module__GEvhma__categoryBar",
  "categoryIcon": "home-module__GEvhma__categoryIcon",
  "categoryItem": "home-module__GEvhma__categoryItem",
  "categoryScroll": "home-module__GEvhma__categoryScroll",
  "container": "home-module__GEvhma__container",
  "destinationCard": "home-module__GEvhma__destinationCard",
  "destinationsGrid": "home-module__GEvhma__destinationsGrid",
  "header": "home-module__GEvhma__header",
  "location": "home-module__GEvhma__location",
  "noImage": "home-module__GEvhma__noImage",
  "price": "home-module__GEvhma__price",
  "ratingStars": "home-module__GEvhma__ratingStars",
  "searchBox": "home-module__GEvhma__searchBox",
  "starEmpty": "home-module__GEvhma__starEmpty",
  "starFilled": "home-module__GEvhma__starFilled",
  "thumbnailImg": "home-module__GEvhma__thumbnailImg",
  "viewContent": "home-module__GEvhma__viewContent",
  "viewDetail": "home-module__GEvhma__viewDetail",
});
}}),
"[project]/src/app/home/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Categorybar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Categorybar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/CSS/home.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Home() {
    _s();
    const [hotels, setHotels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            async function loadHotels() {
                try {
                    const res = await fetch('http://localhost:5000/api/hotels');
                    console.log('[Home] fetch status:', res.status);
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    const data = await res.json();
                    setHotels(data);
                } catch (err) {
                    console.error('Failed to fetch hotels:', err);
                    setError('Unable to load hotels.');
                } finally{
                    setLoading(false);
                }
            }
            loadHotels();
        }
    }["Home.useEffect"], []);
    const handleCategoryClick = (category)=>{
        console.log("Category clicked:", category);
        router.push(`/home/${category}`);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/home/page.jsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status,
                    children: "Loading hotels…"
                }, void 0, false, {
                    fileName: "[project]/src/app/home/page.jsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/page.jsx",
            lineNumber: 40,
            columnNumber: 13
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/home/page.jsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusError,
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/home/page.jsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home/page.jsx",
            lineNumber: 49,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/home/page.jsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Categorybar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onCategoryClick: handleCategoryClick
            }, void 0, false, {
                fileName: "[project]/src/app/home/page.jsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].destinationsGrid,
                children: hotels.map((hotel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].destinationCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImage,
                                children: hotel.thumbnailImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: hotel.thumbnailImage,
                                    alt: hotel.hotelName,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnailImg,
                                    onError: (e)=>{
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = '/fallback.png';
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home/page.jsx",
                                    lineNumber: 66,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/fallback.png",
                                    alt: "No image",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnailImg
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home/page.jsx",
                                    lineNumber: 76,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home/page.jsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].location,
                                        children: hotel.hotelName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home/page.jsx",
                                        lineNumber: 84,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].location,
                                        children: hotel.location
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home/page.jsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                        children: [
                                            "$",
                                            hotel.price,
                                            " / night"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home/page.jsx",
                                        lineNumber: 86,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ratingStars,
                                        children: [
                                            ...Array(5)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: i < (hotel.rating ?? 0) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].starFilled : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].starEmpty,
                                                children: "★"
                                            }, i, false, {
                                                fileName: "[project]/src/app/home/page.jsx",
                                                lineNumber: 89,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home/page.jsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewDetail,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$CSS$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewContent,
                                            onClick: ()=>router.push(`/details/${hotel._id}`),
                                            children: "View Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home/page.jsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home/page.jsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home/page.jsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this)
                        ]
                    }, hotel._id, true, {
                        fileName: "[project]/src/app/home/page.jsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/home/page.jsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home/page.jsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
_s(Home, "AxInbR7s+n71Fg3X34HLRIkslko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_822972f3._.js.map