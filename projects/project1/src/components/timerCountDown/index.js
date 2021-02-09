import React from "react";
import { Text, View } from "react-native";
import { formatTimer } from "../../../utils";

export const TimerCountDown = (props) => {
  [sec, setSec] = React.useState(props.time);
  let interval;
  React.useEffect(() => {
    interval = setInterval(() => {
      setSec((prevSecond) => prevSecond - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [sec]);

  React.useEffect(() => {
    if (sec === 0) {
      clearInterval(interval);
      return;
    }
  }, [sec]);
  return (
    <View>
      <Text>{formatTimer(sec)}</Text>
    </View>
  );
};
