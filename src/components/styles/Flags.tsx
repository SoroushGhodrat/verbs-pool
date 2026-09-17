import { styled } from '@mui/material/styles';
import Flag_of_UK_64x46 from '../../assets/images/Flag_of_UK_64x46.png';
import Flag_of_Norway_64x46 from '../../assets/images/Flag_of_Norway_64x46.png';

import { ImgHTMLAttributes } from 'react';

const UkFlag = styled('img')({
  width: '15px',
  height: '15px',
});

const DefaultUkFlag = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <UkFlag src={Flag_of_UK_64x46} alt="UK Flag" {...props} />
);

const NoFlag = styled('img')({
  width: '15px',
  height: '15px',
});

const DefaultNoFlag = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <NoFlag src={Flag_of_Norway_64x46} alt="NO Flag" {...props} />
);

export { DefaultUkFlag as UkFlag };
export { DefaultNoFlag as NoFlag };
