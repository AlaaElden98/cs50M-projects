import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";

export const AppButton = (props) => {
  return <Button title={props.title} onPress={() => props.clickHandler()} />;
};
