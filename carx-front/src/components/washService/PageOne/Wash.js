import React, { useState, useEffect } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import tailwind from "tailwind-rn";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import { Root, Popup } from "popup-ui";

const LOCATION_TASK_NAME = "foreground-location-task";

export default function Wash({ navigation, user, fetch }) {
  const carTypePrice = { Regular: 0, Pickup: 3000, Van: 10000, Truck: 20000 };
  const washTypePrice = { Interior: 8000, Exterior: 12000, All: 18000 };
  let [carType, setCarType] = useState("");
  let [washType, setWashType] = useState("");
  let [price, setPrice] = useState(0);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let [secendDrop, setSecendDrop] = useState(true);
  let [confirmed, setConfirmed] = useState(false);
  let [but, setbut] = useState("Confirm");
  let [id, setid] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setid(user.id);
      
    })();
  }, []);

  let SendForm = () => {
    if (confirmed) {
      if (location && carType !== "" && washType !== "" && price !== 0) {
        axios
          .post(process.env.serv + `request`, {
            typeOfCar: carType,
            typeOfWash: washType,
            positionx: location.coords.longitude,
            positiony: location.coords.latitude,
            user: id,
            Price: price,
          })
          .then(() => {
            <Root>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    Popup.show({
                      type: "Success",
                      title: "Upload complete",
                      button: false,
                      textBody: "Congrats! Your upload successfully done",
                      buttontext: "Ok",
                      callback: () => Popup.hide(),
                    })
                  }
                >
                  <Text>Open Popup</Text>
                </TouchableOpacity>
              </View>
            </Root>;
            Popup.show({
              type: 'Success'
          })
            fetch();
            setTimeout(() => {
              navigation.navigate("Home");
            }, 1000);
          })
          // ; //alert from here 
      } else {
        <Root>
          <View>
            <TouchableOpacity
              onPress={() =>
                Popup.show({
                  type: "Success",
                  title: "Upload complete",
                  button: false,
                  textBody: "Congrats! Your upload successfully done",
                  buttontext: "Ok",
                  callback: () => Popup.hide(),
                })
              }
            >
              <Text>Open Popup</Text>
            </TouchableOpacity>
          </View>
        </Root>;
        setbut("Confirm");
      }
    } else {
      checkPrice();
      setbut("Send");
      setConfirmed(true);
    }
  };

  let hundlewash = (val) => {
    setWashType(val);
    setbut("Confirm");
    setConfirmed(false);
    setPrice(0);
  };

  let hundleType = (val) => {
    setCarType(val);
    setbut("Confirm");
    setConfirmed(false);
    setPrice(0);
  };

  let checkPrice = () => {
    console.log(carType, washType);
    console.log(process.env.serv)
    if (carType !== "" && washType !== "") {
      setPrice(carTypePrice[carType] + washTypePrice[washType]);
    }
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "Your localisation has been saved";
  }

  return (
    <View
      style={[
        { justifyContent: "center", alignContent: "center" },
        tailwind("flex"),
      ]}
    >
      <View
        style={[
          { justifyContent: "center", alignContent: "center", padding: 10 },
          tailwind("flex flex-row mt-16 ml-4"),
        ]}
      >
        <Image source={require("../../../../assets/MainLogo.png")} />
      </View>

      <View
        style={[
          { justifyContent: "center", alignContent: "center" },
          tailwind("flex flex-row "),
        ]}
      >
        <Image
          style={{ width: 400, height: 190 }}
          source={require("../../../../assets/washimg.png")}
        />
      </View>

      <View
        style={[
          { justifyContent: "center", alignContent: "center" },
          tailwind("flex flex-col "),
        ]}
      >
        <View
          style={[
            {
              width: 260,
              height: 50,
              borderColor: "#4398F8",
              borderWidth: 1,
              borderRadius: 40,
              alignSelf: "center",
            },
            tailwind("flex my-4 "),
          ]}
        >
          <Picker
            selectedValue={carType}
            onValueChange={(value) => hundleType(value)}
            style={[
              {
                width: 200,
                height: 50,
                padding: 10,
                alignSelf: "center",
                justifyContent: "center",
              },
              tailwind("-mt-1"),
            ]}
          >
            <Picker.Item label="Car Body" value="" />
            <Picker.Item label="Regular" value="Regular" />
            <Picker.Item label="Pickup" value="Pickup" />
            <Picker.Item label="Van" value="Van" />
            <Picker.Item label="Truck" value="Truck" />
          </Picker>
        </View>

        <View
          style={[
            {
              width: 260,
              height: 50,
              borderColor: "#4398F8",
              borderWidth: 1,
              borderRadius: 40,
              alignSelf: "center",
            },
            tailwind("flex my-4  "),
          ]}
        >
          <Picker
            selectedValue={washType}
            onValueChange={(value) => hundlewash(value)}
            style={[
              {
                width: 200,
                height: 50,
                padding: 10,
                alignSelf: "center",
                justifyContent: "center",
              },
              tailwind("-mt-1"),
            ]}
          >
            <Picker.Item label="Wash Type" value="" />
            <Picker.Item label="Interior" value="Interior" />
            <Picker.Item label="Exterior" value="Exterior" />
            <Picker.Item label="All" value="All" />
          </Picker>
        </View>

        <View
          style={[
            { justifyContent: "center", alignContent: "center" },
            tailwind("flex flex-row py-4"),
          ]}
        >
          <Text> Price : {price} DT</Text>
        </View>
      </View>

      <View
        style={[
          { justifyContent: "center", alignContent: "center", padding: 10 },
          tailwind("flex flex-row mt-10"),
        ]}
      >
        <TouchableOpacity onPress={() => SendForm()}>
          <LinearGradient
            colors={["#0857C1", "#4398F8"]}
            start={{ x: 0.7, y: 0.4 }}
            style={[{ borderRadius: 40, width: 250, height: 45, padding: 10 }]}
          >
            <View
              style={[
                { justifyContent: "space-between", alignContent: "center" },
                tailwind("flex flex-row"),
              ]}
            >
              <Text
                style={[
                  { justifyContent: "center", color: "white" },
                  tailwind("ml-4"),
                ]}
              >
                {but}
              </Text>
              <Image
                style={[{ width: 34, height: 15 }, tailwind("mr-4 mt-1 ")]}
                source={require("../../../../assets/Arrow1.png")}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    alert(error);
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    alert(JSON.stringify(locations)); //will show you the location object
    //lat is locations[0].coords.latitude & long is locations[0].coords.longitude
    // do something with the locations captured in the background, possibly post to your server with axios or fetch API
  }
});
