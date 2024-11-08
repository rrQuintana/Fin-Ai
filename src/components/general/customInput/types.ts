import { TextInputProps } from "react-native";
import { SvgProps } from "react-native-svg";

export interface CustomInputProps extends Omit<TextInputProps, 'placeholderTextColor'> {
  icon: React.FC<SvgProps>;
}