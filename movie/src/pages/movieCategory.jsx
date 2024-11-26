import * as C from "../style/components/contents.js";
import * as P from "../style/pages/movieCategory.js";

export default function MovieCategory() {

  return (
    <C.Container>
      <C.Title>카테고리</C.Title>
      <C.Wrapper>
        <P.MovieCategoryBox>
          <P.MovieCategory to={'./now_playing'}>
            <P.Image src={"/src/asset/NowPlaying.jpg"}></P.Image>
            <P.ImageText>현재 상영중인</P.ImageText>
          </P.MovieCategory>
          <P.MovieCategory to={'./popular'}>
            <P.Image src={"/src/asset/Popular.jpg"}></P.Image>
            <P.ImageText>인기있는</P.ImageText>
          </P.MovieCategory>
          <P.MovieCategory to={'./top_rated'}>
            <P.Image src={"/src/asset/TopRated.jpg"}></P.Image>
            <P.ImageText>높은 평가를 받은</P.ImageText>
          </P.MovieCategory>
          <P.MovieCategory to={'./upcoming'}>
            <P.Image src={"/src/asset/UpComing.jpg"}></P.Image>
            <P.ImageText>개봉 예정중인</P.ImageText>
          </P.MovieCategory>
        </P.MovieCategoryBox>
      </C.Wrapper>
    </C.Container>
  );
}