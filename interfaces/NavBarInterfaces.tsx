import * as React from 'react';

export interface ImageMapping {
  [key: string]: React.ReactElement;
}

export interface CustomItemTabProps {
  focused: boolean;
  iconName: string;
  labelText: string; 
  isFirst?: boolean;
}

