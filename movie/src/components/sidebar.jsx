import { SidebarWrapper, SidebarMenu, SidebarMenuText } from "../style/components/sidebar.js";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu to="/search">
        <SidebarMenuText>검색</SidebarMenuText>
      </SidebarMenu>
      <SidebarMenu to="/movies">
        <SidebarMenuText>영화</SidebarMenuText>
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;