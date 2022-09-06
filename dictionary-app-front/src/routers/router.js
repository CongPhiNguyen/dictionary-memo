import React from "react";

const SignUp = React.lazy(() => import("../authen/pages/Signup.js"));
const Search = React.lazy(() => import("../search/Search.js"));
const Home = React.lazy(() => import("../shared/pages/Home.js"));
const Test = React.lazy(() => import("../search/Test.js"));
const SpeechToText = React.lazy(() => import("../search/SpeechToText.js"));

// Những route chỉ truy xuất khi chưa đăng nhập
const publicRoute = [{ path: "/sign-up", name: "SignUp", element: <SignUp /> }];

// Những route dùng khi đã đăng nhập
const protectedRoute = [];

// route dùng cho mọi trường hợp
const commonRoute = [
  { path: "/search", name: "Search", element: <Search /> },
  { path: "/test", name: "Test", element: <Test /> },
  { path: "/speech-2-text", name: "SpeechToText", element: <SpeechToText /> },
  { path: "/", name: "Home", element: <Home /> },
];

// Route dùng cho manager
const managerRoute = [];

const routes = {
  publicRoute,
  commonRoute,
  protectedRoute,
  managerRoute,
};

export default routes;
