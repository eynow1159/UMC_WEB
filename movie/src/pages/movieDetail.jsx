// import Circle from "../style/components/circle.js";

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
      {isLoading && <span>Loading...</span>}
      {!!data && (
        <>
          <C.Wrapper>
            <P.Section>
              <C.Title>{data?.original_title}</C.Title>
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
              <img src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} />
            </P.Section>
          </C.Wrapper>
          <C.Wrapper>
            <C.Title>감독/출연</C.Title>

            <p style={{ padding: "63px 16px 64px 16px", fontStyle: "italic", color: "gray" }}>
              {data?.overview}
            </p>
            
            {/* {data?.credits?.cast?.map((person, i) => (
                <Circle key={person.credit_id} person={person}/>
            ))} */}

            </C.Wrapper>
          </>
      )}
      {error && <span>Error!</span>}
      </C.Container>
  );
}


export default MovieDetail;
