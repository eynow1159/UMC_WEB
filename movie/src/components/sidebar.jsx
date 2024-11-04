import { SidebarWrapper, SidebarMenu, SidebarMenuText } from "../style/card.js";

import { SidebarWrapper, SidebarMenu, SidebarMenuText } from "../style/components/sidebar.js";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu to="/search">
        <BiSearch color="white" />
        <SidebarMenuText>검색</SidebarMenuText>
      </SidebarMenu>
      <SidebarMenu to="/movies">
        <BiSolidMoviePlay color="white" />
        <SidebarMenuText>영화</SidebarMenuText>
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;