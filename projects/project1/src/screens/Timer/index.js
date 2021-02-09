import React from "react";
import { View, Button } from "react-native";
import { TimerCountDown } from "../../components/TimerCountDown";
import { AppButton } from "../../components/AppButton";
import styles from "./styles";
export const Timer = (props) => {
  return (
    <View style={styles.container}>
      <TimerCountDown />
      <View style={styles.buttonWrapper}>
        <AppButton
          title="Start"
          clickHandler={() => console.log("StartPressed")}
        />
        <AppButton
          title="Stop"
          clickHandler={() => console.log("StopPressed")}
        />
        <AppButton
          title="Reset"
          clickHandler={() => console.log("ResetPressed")}
        />
      </View>
    </View>
  );
};
