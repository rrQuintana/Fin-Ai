import { InputModeOptions, KeyboardTypeOptions } from "react-native";

export interface CustomInputProps {
  placeholder: string;
  value: any;
  onChangeText: (text: any) => void;
  secureTextEntry?: boolean;
  icon?: React.ComponentType<any>;
  keyboardType?: KeyboardTypeOptions;
  inputMode?: InputModeOptions;
  isFixedSize?: boolean;
  fixedSize?: number;
}

export interface CustomTouchableProps {
    onPress?: () => void;
    text: string;
    whiteText?: boolean;
    icon?: React.ComponentType<any>;
    color?: string;
}