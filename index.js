import { NativeModules, NativeEventEmitter } from 'react-native';

const { PedometerIos } = NativeModules;
const PedometerEvent = new NativeEventEmitter(PedometerIos);

let listener;
const Pedometer = {
  isStepCountingAvailable(callback) {
    PedometerIos.isStepCountingAvailable(callback);
  },

  isDistanceAvailable(callback) {
    PedometerIos.isDistanceAvailable(callback);
    callback(null, true);
  },

  isFloorCountingAvailable(callback) {
    PedometerIos.isFloorCountingAvailable(callback);
  },

  isPedometerEventTrackingAvailable(callback) {
    PedometerIos.isPedometerEventTrackingAvailable(callback);
  },

  isPaceAvailable(callback) {
    PedometerIos.isPaceAvailable(callback);
  },

  isCadenceAvailable(callback) {
    PedometerIos.isCadenceAvailable(callback);
  },

  startPedometerUpdatesFromDate(date, handler) {
    PedometerIos.startPedometerUpdatesFromDate(date);
    listener = PedometerEvent.addListener(
      'pedometerDataDidUpdate',
      handler
    );
  },

  stopPedometerUpdates() {
    PedometerIos.stopPedometerUpdates();
    listener = null;
  },

  queryPedometerDataBetweenDates(startDate, endDate, handler) {
    PedometerIos.queryPedometerDataBetweenDates(startDate, endDate, handler);
  },

  authorizationStatus(callback) {
      PedometerIos.authorizationStatus(callback);
  },
}

export default Pedometer;
