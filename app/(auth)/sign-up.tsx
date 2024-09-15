import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
          <View className="p-5">
            <InputField
              label="Name"
              placeholder="Enter your name"
              icon={icons.person}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <InputField
              label="Email"
              placeholder="Enter your email"
              icon={icons.email}
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <InputField
              label="Password"
              placeholder="Enter your Password"
              icon={icons.lock}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              secureTextEntry={true}
            />
            <CustomButton
              title="Sign Up"
              onPress={onSignUpPress}
              buttonStyle="mt-6"
            />
            <Link
              href="/sign-in"
              className="text-lg text-center mt-10 text-general-200"
            >
              <Text className="">Already have an account?</Text>
              <Text className="text-primary-500"> Log In</Text>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
