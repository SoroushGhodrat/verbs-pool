import { ImgHTMLAttributes } from 'react';
import Flag_of_UK_64x46 from '../../assets/images/Flag_of_UK_64x46.png';
import Flag_of_Norway_64x46 from '../../assets/images/Flag_of_Norway_64x46.png';

/**
 * The caller's className is merged with the default size rather than replacing
 * it - spreading props over className would drop the sizing and render the
 * source image at its natural 64x46.
 */
const Flag = ({
  src,
  alt,
  className = '',
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src={src}
    alt={alt}
    className={`h-5 w-5 shrink-0 object-contain ${className}`}
    {...props}
  />
);

const UkFlag = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <Flag {...props} src={Flag_of_UK_64x46} alt="UK Flag" />
);

const NoFlag = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <Flag {...props} src={Flag_of_Norway_64x46} alt="NO Flag" />
);

export { UkFlag, NoFlag };
