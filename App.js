import React from "react";
import { StyleSheet } from "react-native";

import * as SplashScreen from 'expo-splash-screen';

import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import Navigation from "./navigation";
import { Block } from "./components";


// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error


export default class App extends React.Component {

  componentDidMount() {
    // Hides native splash screen after 2s
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }


  // state = {
  //   isLoadingComplete: false
  // };

  // handleResourcesAsync = async () => {
    
  //   const cacheImages = images.map(image => {
  //     return Asset.fromModule(image).downloadAsync();
  //   });

  //   return Promise.all(cacheImages);
  // };

  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this.handleResourcesAsync}
    //       onError={error => console.warn(error)}
    //       onFinish={() => this.setState({ isLoadingComplete: true })}
    //     />
    //   );
    // }

    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});