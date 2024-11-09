import { InputModeOptions, KeyboardTypeOptions } from "react-native";

export interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon?: React.ComponentType<any>;
  keyboardType?: KeyboardTypeOptions;
  inputMode?: InputModeOptions;
  fixedSize?: boolean;
}

export interface CustomTouchableProps {
    onPress?: () => void;
    text: string;
    whiteText?: boolean;
    icon?: React.ComponentType<any>;
    color?: string;
}