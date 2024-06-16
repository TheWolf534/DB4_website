
import React from 'react';

import {COLORS, FONT} from '../../Constants/theme.js';
import '../../styles/sensorPage.css';


type DailyStars = {
    date: Date,
    stars: number,
  }
  
  type Series = {
    label: string,
    data: DailyStars[]
  }
  
  const data: Series[] = [
    {
      label: 'React Charts',
      data: [
        {
          date: new Date(),
          stars: 202123,
        }
        // ...
      ]
    },
    {
      label: 'React Query',
      data: [
        {
          date: new Date(),
          stars: 10234230,
        }
        // ...
      ]
    }
  ]