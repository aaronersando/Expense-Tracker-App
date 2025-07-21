import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({
  onCancel,
  submitButtonLabel,
  onSubmit,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function handleChangeInput(inputIdentifier, enteredValue) {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function handleSubmit() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: inputs.date.value,
      description: inputs.description.value,
    };

    const amountValid = expenseData.amount > 0 && !isNaN(expenseData.amount);
    const dateValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionValid = expenseData.description.trim().length > 0;

    if (!amountValid || !dateValid || !descriptionValid) {
      //   Alert.alert(
      //     "Invalid Input",
      //     "Please check your input values before proceeding!"
      //   );
      setInputs((prevInputs) => {
        return {
          amount: { value: prevInputs.amount.value, isValid: amountValid },
          date: { value: prevInputs.date.value, isValid: dateValid },
          description: {
            value: prevInputs.description.value,
            isValid: descriptionValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label={"Amount"}
          invalid={!inputs.amount.isValid}
          inputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: handleChangeInput.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          label={"Date"}
          invalid={!inputs.date.isValid}
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: handleChangeInput.bind(this, "date"),
            value: inputs.date.value,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label={"Description"}
        invalid={!inputs.description.isValid}
        inputConfig={{
          multiline: true,
          onChangeText: handleChangeInput.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {formInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - Please check your entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode={"flat"} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleSubmit}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
