import React from "react";
import { View, Button, Text } from "react-native";
import { formatTimer, vibration } from "../../../utils";
import styles from "./styles";

export function Timer(props) {
  const [sec, setSec] = React.useState(8);
  const [timerIsRunning, setTimerIsRunning] = React.useState(false);
  const [interval, setInter] = React.useState();
  const [isWorkTime, setIsWorkTime] = React.useState(true);
  const WORK_TIME = 8;
  const REST_TIME = 5;
  React.useEffect(() => {
    if (sec === 0) {
      vibration();
      if (isWorkTime) {
        setIsWorkTime(false);
        setSec(REST_TIME);
      } else {
        setIsWorkTime(true);
        setSec(WORK_TIME);
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
    setTimerIsRunning(true);
    if (isWorkTime) {
      setSec(WORK_TIME);
    } else {
      setSec(REST_TIME);
    }
  }
  return (
    <View style={styles.container}>
      <Text>{formatTimer(sec)}</Text>
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
