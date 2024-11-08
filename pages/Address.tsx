import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AddressInterface } from "../interfaces/AddressInterface";
import Geolocation from "react-native-geolocation-service";
import { request, PERMISSIONS } from "react-native-permissions";
import { generateClient } from "aws-amplify/api";
import { CreateAddressTableInput } from "../src/API";
import { getCurrentUser } from "aws-amplify/auth";
import { createAddressTable } from "@src/graphql/mutations";
import { listAddressTables } from "@src/graphql/queries";
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import {REACT_APP_GOOGLE_MAPS_APIKEY} from "@env"
import AddressCard from "@components/direcciones/addresscard/addressCard";

const client = generateClient();

export default function Address() {
    type Nav = {
        navigate: (value: string) => void;
    };

    const { navigate } = useNavigation<Nav>();

    const [addressess, setAddressess] = useState<AddressInterface[]>([]);

    /* const [address, setAddress] = useState<AddressInterface>({
        // initialize the address object with default values
        street: "",
        secondary_info: "",
        lat: 0,
        long: 0,
        references: "",
        ID_client: "",
    });

    const handleStreetChange = (newStreet: string) => {
        setAddress({ ...address, street: newStreet });
    };

     const handleHouseNumberChange = (newHouseNumber: string) => {
        // Convert to integer. If input is not a number, it defaults to 0.
        const numericValue = parseInt(newHouseNumber) || 0;
        setAddress({ ...address, house_number: numericValue });
    };

    const handleReferencesChange = (newReferences: string) => {
        setAddress({ ...address, references: newReferences});
    };

    const requestLocationPermission = async () => {
        let response = await request(
            Platform.OS === 'ios'
            ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );
    
        const { userId } = await getCurrentUser();
    
        if (response === 'granted') {
            Geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const updatedAddress = {
                        ...address,
                        lat: latitude,
                        long: longitude,
                        ID_client: userId,
                    };
                    setAddress(updatedAddress);
    
                    // Move the mutation logic here
                    try {
                        const data: CreateAddressTableInput = {
                            street: updatedAddress.street,
                            secondary_info: updatedAddress.secondary_info,
                            lat: updatedAddress.lat,
                            long: updatedAddress.long,
                            references: updatedAddress.references,
                            ID_client: updatedAddress.ID_client,
                        };
    
                        await client.graphql({
                            query: createAddressTable,
                            variables: {
                                input: data,
                            },
                        });
    
                        navigate("Account");
                    } catch (err) {
                        console.log(err);
                    }
                },
                // error callback and options
            );
        } else {
            // handle permission denied
        }
    };
    
    async function handleUpdateAddress() {
        requestLocationPermission();
    } */

    // Fetch the user's addresses on component mount
    React.useEffect(() => {
        handleGetAddressess();
    }, []);

    async function handleGetAddressess() {
        const { userId } = await getCurrentUser();

        const addressessList = await client.graphql({
            query: listAddressTables,
            variables: {
                filter: {
                    ID_client: {
                        eq: userId,
                    },
                },
            },
        });

        setAddressess(addressessList.data.listAddressTables.items);
    }

    async function handleaAddAddress(data: GooglePlaceData ,details: GooglePlaceDetail) {
        try {
            const { userId } = await getCurrentUser();

            const data_address: CreateAddressTableInput = {
                street: data.structured_formatting.main_text,
                secondary_info: data.structured_formatting.secondary_text,
                lat: details.geometry.location.lat,
                long: details.geometry.location.lng,
                references: data.reference,
                ID_client: userId,
            };

            await client.graphql({
                query: createAddressTable,
                variables: {
                    input: data_address,
                },
            });

            // Refresh the address list
            handleGetAddressess();
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <SafeAreaView className="bg-WaTou flex-1 items-center justify-center">
            <View
                className="bg-white p-4 w-screen h-screen mt-32 items-center justify-start "
                style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
            >

                    <Text className="text-WaTou text-center text-3xl font-semibold mt-10">
                        Agregar dirección
                    </Text>

                    <View className="flex flex-row items-center space-x-2 mt-5 shadow rounded-full w-80">
                        <GooglePlacesAutocomplete 
                            placeholder="Ingresar dirección nueva"
                            query={{key: REACT_APP_GOOGLE_MAPS_APIKEY, language: 'es'}}
                            fetchDetails={true}
                            onPress={(data, details = null) => 
                                handleaAddAddress(data, details!)
                            }
                            onFail={error => console.log(error)}
                            onNotFound={() => console.log('no results')}
                        />
                    </View>

                    <View className=" w-full items-center justify-center space-y-5">
                        <ScrollView className="w-full pb-10 mt-3" contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                            {addressess.map((address) => (
                                <AddressCard street={address.street} secondary_info={address.secondary_info} />
                            ))}
                        </ScrollView>
                    </View>

                <TouchableOpacity
                    onPress={() => navigate("Account")}
                    className="bg-WaTo w-80 h-14 rounded-3xl mt-16 items-center justify-center"
                >
                    <Text className="text-white text-center text-lg font-semibold">
                        Agregar Manualmente
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}