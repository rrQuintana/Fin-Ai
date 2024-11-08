export interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon: React.ComponentType<any>;
}

export interface CustomTouchableProps {
    onPress?: () => void;
    text: string;
    icon?: React.ComponentType<any>;
    color?: string;
}