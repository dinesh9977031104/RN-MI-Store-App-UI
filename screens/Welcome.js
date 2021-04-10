import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  scrollX = new Animated.Value(0);

  state = {
    showTerms: false
  };

  renderTermsService() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.showTerms}
        onRequestClose={() => this.setState({ showTerms: false })}
      >
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 light>
            Terms of Service
          </Text>

          <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              1. This document is an electronic record in terms of Information Technology Act, 
              2000 and rules there under as applicable and the amended provisions pertaining to electronic
               records in various statutes as amended by the Information Technology Act, 2000. This electronic 
               record is generated by a computer system and does not require any physical or digital signatures.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              2. This document is published in accordance with the provisions of Rule 3 (1) of 
              the Information Technology (Intermediaries guidelines) Rules, 2011 that require 
              publishing the rules and regulations, privacy policy and Terms of Use for access or
               usage of www.mi.com/in website..
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              3. The domain name www.mi.com (hereinafter referred to as "Website") is 
              owned by Xiaomi Singapore Pte. Limited, a company incorporated under the laws of 
              Singapore with registration no. 201334380Z having its registered office at 81 Highgate 
              Crescent, Singapore.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              4. Your use of the Website and services and tools are governed by the following terms and 
              conditions ("Terms of Use") as applicable to the Website including the applicable policies 
              which are incorporated herein by way of reference. If You transact on the Website, 
              You shall be subject to the policies that are applicable to the Website for such transaction.
               By mere use of the Website, You shall be contracting with Xiaomi Technology India Private
                Limited (hereinafter referred to as “Xiaomi”) and these terms and conditions including the 
                policies constitute Your binding obligations, with Xiaomi.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              5. For the purpose of these Terms of Use, wherFor the purpose of these Terms of Use,
               wherever the context so requires "You" or "User" shall mean any natural or legal person who 
               has agreed to become a buyer on the Website by providing registration data while registering 
               on the Website as registered user using the computer systems. Xiaomi also allows the User to 
               surf the Website or making purchases without registering on the Website. The term "We", "Us", 
               "Our" shall mean Xiaomi Technology India Private Limited.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              6.When You use any of the services provided by Us through the Website, including but not
               limited to, (e.g. product reviews, seller reviews), You will be subject to the rules,
                guidelines, policies, terms, and conditions applicable to such service, and they shall be
                 deemed to be incorporated into this Terms of Use and shall be considered as part and parcel
                  of this Terms of Use. We reserve the right, at Our sole discretion, to change, modify, 
                  add or remove portions of these Terms of Use, at any time without any prior written notice
                   to You. It is Your responsibility to review these Terms of Use periodically for 
                   updates/changes. Your continued use of the Website following the posting of changes 
                   will mean that You accept and agree to the revisions. As long as You comply with these 
                   Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege 
                   to enter and use the Website.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              7. ACCESSING, BROWSING OR OTHERWISE USING THE SITE INDICATES YOUR AGREEMENT TO ALL THE 
              TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE READ THE TERMS OF USE CAREFULLY 
              BEFORE PROCEEDING. By impliedly or expressly accepting these Terms of Use, You also accept 
              and agree to be bound by Xiaomi Policies (“Policies”) ((including but not limited to Privacy
               Policy available on https://www.mi.com/in/about/privacy/ as amended from time to time.
            </Text>
            
          </ScrollView>

          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button
              gradient
              onPress={() => this.setState({ showTerms: false })}
            >
              <Text center white>
                I understand
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  }

  renderIllustrations() {
    const { illustrations } = this.props;

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            //style={{ width, height: height / 2, overflow: "visible" }}
            style={styles.imageStyle}
          />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }
        ])}
      />
    );
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold red>
            MI 
            <Text h1 primary>
              {" "}
              Store
            </Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience.
          </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate("Login")}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
          <Button shadow onPress={() => navigation.navigate("SignUp")}>
            <Text center semibold>
              Signup
            </Text>
          </Button>
          <Button onPress={() => this.setState({ showTerms: true })}>
            <Text center caption gray>
              Terms of service
            </Text>
          </Button>
        </Block>
        {this.renderTermsService()}
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../images/welcome/welcome_4.png") },
    { id: 2, source: require("../images/welcome/welcome_2.png") },
    { id: 3, source: require("../images/welcome/welcome_5.png") }
  ]
};

export default Welcome;

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  },
  imageStyle:{
    height:250,
    width:350,
    justifyContent:'center',
  }
});