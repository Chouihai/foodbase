import MenuComponent from "../components/Menu";
import RestaurantNavbar from "../components/RestaurantNavbar";

export default function Menu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar />
        <MenuComponent />
      </div>
    </>
  );
}
