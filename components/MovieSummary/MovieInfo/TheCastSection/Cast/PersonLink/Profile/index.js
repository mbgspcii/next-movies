

import Image from 'components/Image';
import { PROFILE_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const PROFILE_WIDTH = 44;
const PROFILE_HEIGHT = 44;

const Profile = ({ src, alt }) => (
  <>
    <div>
    <Image
      aspectRatio={PROFILE_WIDTH/PROFILE_HEIGHT}
      src={src}
      alt={alt}
      focus = "50px0p"
      className="center-profile profile-border-radius"
      placeholderPath={PROFILE_PLACEHOLDER_IMAGE_PATH}
    />
    </div>
    <style jsx>{`
      :global(.center-profile) {
        margin: 0 auto;
      }

      :global(.profile-border-radius) {
        width:44px;
        height:44px;
        border-radius: 50%;
      }
    `}</style>
  </>
);

export default Profile;
