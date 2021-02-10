import React from "react";
import { View, Button, Text } from "react-native";
import { formatTimer, vibration } from "../../../utils";
import styles from "./styles";

export function Timer(props) {
  const WORK_TIME = 25 * 60; //25 min * 60 sec
  const REST_TIME = 5 * 60; // 5 min * 60 sec
  const [sec, setSec] = React.useState(WORK_TIME);
  const [timerIsRunning, setTimerIsRunning] = React.useState(false);
  const [interval, setInter] = React.useState();
  const [isWorkTime, setIsWorkTime] = React.useState(true);

  //Switch the timer and vibrate when reach zero
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

  function startHandler() {
    if (!timerIsRunning) setInter(setInterval(deacreaseSeconds, 1000));
    setTimerIsRunning(true);
  }
  function stopHandler() {
    clearInterval(interval);
    setTimerIsRunning(false);
  }
  function resetHandler() {
    stopHandler();
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
          title={"Start"}
          onPress={() => {
            startHandler();
          }}
        />
        <Button
          title={"Stop"}
          onPress={() => {
            stopHandler();
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
