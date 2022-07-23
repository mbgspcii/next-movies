
import SummaryWrapper from 'parts/SummaryWrapper';
import PersonArtwork from './PersonArtwork';
import PersonInfo from './PersonInfo';
import { W780H1170 } from 'config/image-sizes';

const PersonSummary = ({
  person
}) => (
  <SummaryWrapper>
    <PersonArtwork
      width={W780H1170.WIDTH}
      height={W780H1170.HEIGHT}
      src={person.profile_path} />
    <PersonInfo person={person} />
  </SummaryWrapper>
);

export default PersonSummary;
