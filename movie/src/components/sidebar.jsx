import * as S from "../style/components/sidebar.js";
import { CiSearch } from "react-icons/ci";
import { MdLocalMovies } from "react-icons/md";


const Sidebar = () => {
  return (
    <S.Container>
      <S.Wrapper to="/search">
        <S.Text><CiSearch />검색</S.Text>
      </S.Wrapper>
      <S.Wrapper to="/movies">
        <S.Text><MdLocalMovies />영화</S.Text>
      </S.Wrapper>
    </S.Container>
  );
};

export default Sidebar;