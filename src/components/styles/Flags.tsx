import Flag_of_UK_64x46 from '../../assets/images/Flag_of_UK_64x46.png';
import Flag_of_Norway_64x46 from '../../assets/images/Flag_of_Norway_64x46.png';

import { ImgHTMLAttributes } from 'react';

const UkFlag = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src={Flag_of_UK_64x46}
    alt="UK Flag"
    className="h-[15px] w-[15px]"
    {...props}
  />
);

const NoFlag = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src={Flag_of_Norway_64x46}
    alt="NO Flag"
    className="h-[15px] w-[15px]"
    {...props}
  />
);

export { UkFlag, NoFlag };
