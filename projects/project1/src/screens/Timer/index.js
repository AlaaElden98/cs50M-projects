import React from "react";
import { View, Button, Text } from "react-native";
import { vibrate } from "../../../utils";
import styles from "./styles";
export function Timer(props) {
  const [sec, setSec] = React.useState(8);
  const [timerIsRunning, setTimerIsRunning] = React.useState(false);
  const [interval, setInter] = React.useState();
  const [isWorkTime, setIsWorkTime] = React.useState(true);
  const deacreaseSeconds = () => {
    setSec((prevSecond) => prevSecond - 1);
  };

  function startStopHandler() {
    if (timerIsRunning) {
      clearInterval(interval);
      setTimerIsRunning(false);
    } else {
      setInter(setInterval(deacreaseSeconds, 1000));
      setTimerIsRunning(true);
    }
  }
  return (
    <View style={styles.container}>
      <Text>{sec}</Text>
      <View style={styles.buttonWrapper}>
        <Button
          title={"Start/Stop"}
          onPress={() => {
            startStopHandler();
          }}
        />
        <Button title={"Reset"} onPress={() => {}} />
      </View>
    </View>
  );
}
