import React from "react";

const SignUp = React.lazy(() => import("../authen/pages/Signup.js"));

// Những route chỉ truy xuất khi chưa đăng nhập
const publicRoute = [{ path: "/sign-up", name: "SignUp", element: <SignUp /> }];

// Những route dùng khi đã đăng nhập
const protectedRoute = [];

// route dùng cho mọi trường hợp
const commonRoute = [];

// Route dùng cho manager
const managerRoute = [];

const routes = {
  publicRoute,
  commonRoute,
  protectedRoute,
  managerRoute,
};

export default routes;
