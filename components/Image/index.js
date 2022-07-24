
import clsx from 'clsx';

import GradientImageWrapper from 'parts/GradientImageWrapper';
import { TwicImg } from '@twicpics/components/react';

const Image = ({
  alt,
  aspectRatio = 1,
  className,
  gradientOverlayEnabled,
  overlayClass,
  placeholderPath,
  src,
  ...rest
}) => {
  return (
    <>
      {/* TODO: it heavily depends on JS -> would be better to go with HTML and CSS */}
      <GradientImageWrapper
        className={overlayClass}
        overlayEnabled={gradientOverlayEnabled}>
            <TwicImg
                alt={alt}
                className={clsx('img', className)}
                ratio= {`${aspectRatio}`}
                src = {src || placeholderPath}
                mode={src ? `cover` : `contain`}
                {...rest}/>
      </GradientImageWrapper>
    </>
  );
};

export default Image;
