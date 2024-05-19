import NavList from "./sub-components/NavList";
import NavMisc from "./sub-components/NavMisc";
import NavBrand from "./sub-components/NavBrand";
import NavContainer from "./sub-layouts/NavContainer";
import GlobalStore from "@/store/Global";

interface INavBar {}

const NavBar: React.FC<INavBar> = () => {
  const { navActive } = GlobalStore.useState();

  return (
    <NavContainer >
      <NavBrand />
      <NavList />
      <NavMisc />
    </NavContainer>
  );
};

export default NavBar;
