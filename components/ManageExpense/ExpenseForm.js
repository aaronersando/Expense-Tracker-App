import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../UI/Input";

const ExpenseForm = () => {
  function handleChangeAmount() {}
  return (
    <View>
      <Input
        label={"Amount"}
        inputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: handleChangeAmount,
        }}
      />
      <Input
        label={"Date"}
        inputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label={"Description"}
        inputConfig={{ multiline: true, onChangeText: () => {} }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
