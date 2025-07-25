import { View, Text, Pressable, StyleSheet, TextBase } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function handleExpensePress() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={handleExpensePress}
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: GlobalStyles.colors.primary400 }}
      >
        <View style={styles.expenseItem}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>₱{amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: { color: GlobalStyles.colors.primary500, fontWeight: "bold" },
  pressed: {
    opacity: 0.85,
  },
  outerContainer: {
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary500,
    overflow: "hidden",
    marginVertical: 8,
  },
});
