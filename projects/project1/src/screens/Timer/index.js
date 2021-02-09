import React from "react";
import { View, Button } from "react-native";
import { TimerCountDown } from "../../components/TimerCountDown";
import { AppButton } from "../../components/AppButton";
import styles from "./styles";
export const Timer = (props) => {
  let time = 25 * 60;
  return (
    <View style={styles.container}>
      <TimerCountDown time={time} />
      <View style={styles.buttonWrapper}>
        <AppButton
          title="Start"
          clickHandler={() => ((time = 25 * 60), console.log(time))}
        />
        <AppButton
          title="Stop"
          clickHandler={() => ((time = 0), console.log(time))}
        />
        <AppButton
          title="Reset"
          clickHandler={() => ((time = 25 * 60), console.log(time))}
        />
      </View>
    </View>
  );
};
