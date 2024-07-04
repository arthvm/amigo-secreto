import { Outlet } from "react-router-dom";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export function BasePage() {
  return (
    <div className="bg-purple h-screen flex flex-col">
      <Header />
      <Card>
        <Outlet/>
      </Card>
    </div>
  );
}
