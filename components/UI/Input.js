import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, inputConfig, style, invalid }) => {
  const inputStyles = [styles.input];

  if (inputConfig && inputConfig.multiline) {
    inputStyles.push(styles.multilineInput);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...inputConfig} style={inputStyles} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    fontSize: 18,
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary800,
    borderRadius: 6,
    padding: 6,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
