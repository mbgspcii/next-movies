
import { useState, useEffect } from 'react';
import clsx from 'clsx';

import GradientImageWrapper from 'parts/GradientImageWrapper';
import { TwicImg } from '@twicpics/components/react';

const Image = ({
  aspectRatio,
  className,
  gradientOverlayEnabled,
  overlayClass,
  alt,
  ...rest
}) => {
  const [error, setError] = useState(false);
  

  

  return (
    <>
      {/* TODO: it heavily depends on JS -> would be better to go with HTML and CSS */}
      <GradientImageWrapper
        className={overlayClass}
        overlayEnabled={gradientOverlayEnabled}>
            <TwicImg alt={alt} className={clsx('img', className)} ratio={1/aspectRatio || 1}  {...rest}/>
        {/*<img
          className={clsx('img', className)}
          onLoad={onImageLoadHandler}
          onError={event => {
            setError(true);
            if (event.target.src !== placeholderPath) {
              event.target.src = placeholderPath;
            }
          }}
          style={{
            ...style,
            display: loaded ? 'block' : 'none'
          }}
          alt={alt ?? ''}
        {...rest} />*/}
      </GradientImageWrapper>
      <style jsx>{`
        .img {
          object-fit: ${error ? 'contain' : 'cover'};
        }
      `}</style>
    </>
  );
};

export default Image;
