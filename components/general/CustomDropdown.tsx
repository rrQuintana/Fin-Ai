import React from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface CustomDropdownProps {
    placeholder: string;
    data: { label: string; value: any; }[];
    onChange: (value: { label: string; value: any }) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ placeholder, data, onChange }) => {
    return (
        <View className="bg-white border-gray-200 rounded-3xl border p-3 my-2">
            <Dropdown
                data={data}
                labelField="label"
                valueField="value"
                onChange={(value) => onChange(value)}
                placeholder={placeholder}
                maxHeight={150}
                placeholderStyle={{ color: "gray", fontSize: 14, marginVertical: 4, paddingLeft: 2 }}
                containerStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginTop: 10 }}
                itemTextStyle={{ color: "#231f20", fontSize: 14 }}
                selectedTextStyle={{ color: "#231f20", fontSize: 14, marginVertical: 4, paddingLeft: 2 }}
            />
        </View>
    );
};

export default CustomDropdown;