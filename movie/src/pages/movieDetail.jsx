// import * as C from "../style/components/circle.js";

import * as C from "../style/components/contents.js";
import * as P from "../style/pages/movieDetail.js";

import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";

const MovieDetail = () => {
  const { movieId } = useParams();

  const { isLoading, data, error } = useCustomFetch(
    `/movie/${movieId}?language=ko-KR&append_to_response=credits`
  );


  return (
    <C.Container>
      <C.Title></C.Title>
      <C.Wrapper>{isLoading && <span>Loading...</span>}
      {!!data && (
        <>
          <P.Header>
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "8px",
              }}
            >
              <h1>{data?.original_title}</h1>
              <h2>{data?.release_date}</h2>
              <h3
                style={{
                  padding: "2px 4px 2px 4px",
                  background: "green",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                {data?.vote_average}
              </h3>
              <h4>{data?.runtime}분</h4>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} />
          </P.Header>

          <P.Content>
            <p style={{ padding: "63px 16px 64px 16px", fontStyle: "italic", color: "gray" }}>
              {data?.overview}
            </p>
            <P.Cast>
              <h2>감독/출연</h2>
                  {/* <P.Person>
                  {data?.credits?.cast?.map((person, i) => (
                    // <Circle key={person?.credit_id}>
                    //   <img src={`https://image.tmdb.org/t/p/original${person?.profile_path}`} />
                    //   <strong>{person?.original_name}</strong>
                    //   <CircleText>
                    //     {person?.character}
                    //   </CircleText>
                    // </Circle>
                  ))}
                  </P.Person> */}
            </P.Cast>
          </P.Content>
        </>
      )}
      {error && <span>Error!</span>}
      </C.Wrapper>
    </C.Container>
  );
}


export default MovieDetail;
