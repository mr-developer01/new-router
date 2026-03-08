import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <h2>Authentication Pages</h2>
      <div style={{ border: "1px solid gray", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;