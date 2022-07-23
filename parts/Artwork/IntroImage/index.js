

import clsx from 'clsx';

import Image from 'components/Image';
import ImageLoadingPlaceholder from 'components/ImageLoadingPlaceholder';
import { NOTHING_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const IntroImage = ({
  className,
  width,
  height,
  ...rest
}) => (
  <>
    <Image
      aspectRatio={height ? width / height : 1}
      gradientOverlayEnabled
      className={clsx('intro-image', className)}
      loadingUI={<ImageLoadingPlaceholder />}
      placeholderPath={NOTHING_PLACEHOLDER_IMAGE_PATH}
      {...rest} />
  </>
);

export default IntroImage;
