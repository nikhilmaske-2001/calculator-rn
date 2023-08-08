import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    title: string,
    isBlue?: boolean,
    isGrey?: boolean,
    onPress: () => void
};


export default function Button({ title, isBlue, isGrey, onPress }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        < TouchableOpacity
            style={
                isBlue ? Styles.btnBlue :
                    isGrey ? Styles.btnGray :
                        theme === 'light' ? Styles.btnLight :
                            Styles.btnDark
            }
        >
            <Text
                style={
                    isBlue || isGrey ?
                        Styles.smallTextLight :
                        theme === 'light' ? Styles.smallTextDark : Styles.smallTextLight
                }
            >
                {title}
            </Text>
        </TouchableOpacity >
    );
}