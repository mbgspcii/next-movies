
import SummarySectionHeading from 'parts/SummarySectionHeading';
import Cast from './Cast';

const TheCastSection = ({
  className,
  cast,
}) => (
  <div className={className}>
    <SummarySectionHeading>The Cast</SummarySectionHeading>
    <Cast
      cast={cast}
    />
  </div>
);

export default TheCastSection;
