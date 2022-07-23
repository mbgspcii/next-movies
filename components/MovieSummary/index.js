

import SummaryWrapper from 'parts/SummaryWrapper';
import MovieArtwork from './MovieArtwork';
import MovieInfo from './MovieInfo';
import { W780H1170 } from 'config/image-sizes';

const MovieSummary = ({
  movie
}) => (
  <SummaryWrapper>
    <MovieArtwork
      width={W780H1170.WIDTH}
      height={W780H1170.HEIGHT}
      src={movie.poster_path} />
    <MovieInfo
      movie={movie} />
  </SummaryWrapper>
);

export default MovieSummary;
