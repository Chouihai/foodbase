import NavBar from "@component/app/components/NavBar";
import MenuComponent from "../components/Menu";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";

export default function Menu() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavbar />
            <MenuComponent />
          </div>
        </div>
      </main>
    </main>
  );
}
