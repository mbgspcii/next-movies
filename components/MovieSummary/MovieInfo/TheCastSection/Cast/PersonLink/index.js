

import Link from 'next/link';
import Profile from './Profile';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';

const PersonLink = ({
  person,
}) => (
  <>
    <Link
      href={{
        pathname: LINKS.PERSON.HREF,
        query: {
          [QUERY_PARAMS.ID]: person.id,
          [QUERY_PARAMS.PAGE]: 1
        }
      }}>
      <a>
        <Profile src={person.profile_path} alt={person.name} />
      </a>
    </Link>
    <style jsx>{`
      a {
        display: block;
      }
    `}</style>
  </>
);

export default PersonLink;
