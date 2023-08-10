import { View } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import Button from "./Buttons";

export default function MyKeyboard() {
    return (
        <View style={Styles.viewBottom}>
            <View style={Styles.row}>
                <Button title="C" isGray onPress={() => console.log("Clear")} />
                <Button title="+/-" isGray onPress={() => alert("+/-")} />
                <Button title="%" isGray onPress={() => alert("%")} />
                <Button title="÷" isBlue onPress={() => alert("÷")} />
            </View>
            <View style={Styles.row}>
                <Button title="7" onPress={() => console.log("7")} />
                <Button title="8" onPress={() => alert("8")} />
                <Button title="9" onPress={() => alert("9")} />
                <Button title="×" isBlue onPress={() => alert("x")} />
            </View>
            <View style={Styles.row}>
                <Button title="4" onPress={() => console.log("4")} />
                <Button title="5" onPress={() => alert("5")} />
                <Button title="6" onPress={() => alert("6")} />
                <Button title="-" isBlue onPress={() => alert("-")} />
            </View>
            <View style={Styles.row}>
                <Button title="1" onPress={() => console.log("1")} />
                <Button title="2" onPress={() => alert("2")} />
                <Button title="3" onPress={() => alert("3")} />
                <Button title="+" isBlue onPress={() => alert("+")} />
            </View>
            <View style={Styles.row}>
                <Button title="." onPress={() => console.log(".")} />
                <Button title="0" onPress={() => alert("0")} />
                <Button title="⌫" onPress={() => alert("⌫")} />
                <Button title="=" isBlue onPress={() => alert("= ")} />
            </View>
        </View>
    )
};