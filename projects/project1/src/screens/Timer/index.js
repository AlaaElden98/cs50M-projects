import React from "react";
import { View, Button, Text } from "react-native";
import { vibrate } from "../../../utils";
import styles from "./styles";
export function Timer(props) {
  const [sec, setSec] = React.useState(8);
  const [timerIsRunning, setTimerIsRunning] = React.useState(false);
  const [interval, setInter] = React.useState();
  const [isWorkTime, setIsWorkTime] = React.useState(true);

  React.useEffect(() => {
    if (sec === 0) {
      //vibrate()
      if (isWorkTime) {
        setIsWorkTime(false);
        setSec(5);
      } else {
        setIsWorkTime(true);
        setSec(8);
      }
    }
  }, [sec]);

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
  function resetHandler() {
    startStopHandler();
    if (isWorkTime) {
      setSec(8);
    } else {
      setSec(5);
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
        <Button
          title={"Reset"}
          onPress={() => {
            resetHandler();
          }}
        />
      </View>
    </View>
  );
}
