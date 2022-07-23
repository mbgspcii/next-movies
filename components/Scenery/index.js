

import clsx from 'clsx';

import Image from 'components/Image';
import { NOTHING_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths';

const CLASS_NAME = 'scenery';

const Scenery = ({
  overlayClass,
  className = '',
  width,
  height,
  ...rest
}) => (
    <Image
    aspectRatio={width / height}
    width={width}
    height={height}
    gradientOverlayEnabled
    overlayClass={overlayClass}
    className={clsx(CLASS_NAME, className)}
    placeholderPath={NOTHING_PLACEHOLDER_IMAGE_PATH}
    alt='A poster'
    {...rest} />
);

export default Scenery;
