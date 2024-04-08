import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stack";
import { useSelector } from "react-redux";
import Auth from "./Auth";


const RootStack = () => {
    const token = useSelector((state) => state.token)
    console.log("🚀 ~ App ~ user:", token)
    return (

            <NavigationContainer>

            {token? 
                <StackNavigator />
                
               
        
        : <Auth/>
        }
               
            </NavigationContainer>
    )
}

export default RootStack;