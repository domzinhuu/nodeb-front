import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      Top
      <Outlet />
    </div>
  );
}
