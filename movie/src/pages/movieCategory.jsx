import * as C from "../style/components/contents.js";

export default function MovieCategory() {

  return (
    <C.Container>
      <C.Title>카테고리</C.Title>
      <C.Wrapper>
        <MovieCategoryBox>
          <MovieCategory to={'./now_playing'}>
            {/* <Image
              src={"/src/asset/"}
            ></Image> */}
            <ImageText>현재 상영중인</ImageText>
          </MovieCategory>
          <MovieCategory to={'./popular'}>
            {/* <Image
              src={"/src/asset/"}
            ></Image> */}
            <ImageText>인기있는</ImageText>
          </MovieCategory>
          <MovieCategory to={'./top_rated'}>
            {/* <Image
              src={"/src/asset/"}
            ></Image> */}
            <ImageText>높은 평가를 받은</ImageText>
          </MovieCategory>
          <MovieCategory to={'./upcoming'}>
            {/* <Image
              src={"/src/asset/"}
            ></Image> */}
            <ImageText>개봉 예정중인</ImageText>
          </MovieCategory>
        </MovieCategoryBox>
      </C.Wrapper>
    </C.Container>
  );
}