import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  const { secondary40, secondary60, secondary100 } = theme.colors; //80-100

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary40, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}