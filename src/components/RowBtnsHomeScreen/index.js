import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useDispatch, useSelector } from 'react-redux';
import { rowBtns } from '../../redux/slices';

const RowBtnsHomeScreen = ({onRowBtnsValues}) => {
const userInfo = useSelector((state)=> state.userInfo);
const dispatch = useDispatch();
const [rowBtns1, setRowBtns1] = useState(false);
const [rowBtns2, setRowBtns2] = useState(false);
const [rowBtns3, setRowBtns3] = useState(false);
const [rowBtns4, setRowBtns4] = useState(false);
const [rowBtns5, setRowBtns5] = useState(false);
const [rowBtns6, setRowBtns6] = useState(false);
const [rowBtns7, setRowBtns7] = useState(false);
const [rowBtns8, setRowBtns8] = useState(false);  

// const [btnValue, setBtnValue] = useState(
//    {
//       userId: userInfo?.id,
//       faith1: rowBtns1,
//       faith2: rowBtns2,
//       family1: rowBtns3,
//       family2: rowBtns4,
//       fitness1: rowBtns5,
//       fitness2: rowBtns6,
//       education: rowBtns7,
//       goals: rowBtns8
//    }

// );

useEffect(() => {
   // Assuming you need to pass all the rowBtns values
   onRowBtnsValues({
      userId: userInfo?.id,
       faith1: rowBtns1,
       faith2: rowBtns2,
       family1: rowBtns3,
       family2: rowBtns4,
       fitness1: rowBtns5,
       fitness2: rowBtns6,
       education: rowBtns7,
       goals: rowBtns8
   });

  

}, [rowBtns1, rowBtns2, rowBtns3, rowBtns4, rowBtns5, rowBtns6, rowBtns7, rowBtns8]);

// useEffect(() => {
//    setBtnValue({
//      faith1: rowBtns1,
//    //   faith2: rowBtns2,
//    //   family1: rowBtns3,
//    //   family2: rowBtns4,
//    //   fitness1: rowBtns5,
//    //   fitness2: rowBtns6,
//    //   education: rowBtns7,
//    //   goals: rowBtns8
//    });
// }, [rowBtns1, rowBtns2, rowBtns3, rowBtns4, rowBtns5, rowBtns6, rowBtns7, rowBtns8, userInfo?.id]);
// console.log("=============================1",btnValue.faith1);
// console.log("=============================2",btnValue.faith2);
// console.log("=============================2",btnValue.family1);
// console.log("=============================4",btnValue.family2);
// console.log("=============================5",btnValue.fitness1);
// console.log("=============================6",btnValue.fitness2);
// console.log("=============================7",btnValue.education);
// console.log("=============================8",btnValue.goals);





// useEffect(() => {
//    setTimeout(() => {
//       setRowBtns1(false);
//       setRowBtns2(false);
//       setRowBtns3(false);
//       setRowBtns4(false);
//       setRowBtns5(false);
//       setRowBtns6(false);
//       setRowBtns7(false);
//       setRowBtns8(false);

//    },  60000); 


//   }, [rowBtns1, rowBtns2, rowBtns3, rowBtns4, rowBtns5, rowBtns6, rowBtns7, rowBtns8]);

  return (
   <>
   
   <View style={styles.mainContainer}>
            
   <LinearGradient   
   colors={rowBtns1  ? ["#BA5DFE", "#5D36FE"] :  ['#FFFFFF', '#FFFFFF']}
   start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
   style={styles.liner}
   >
   <TouchableOpacity onPress={() => setRowBtns1(true)}   >
   <Text style={[styles.text, {  color:rowBtns1 ?"#fff"  : "#5D36FE", }]}>Faith</Text>
   
   <View style={styles.minContainer}>
   

   <Text style={[styles.tittle, {color:rowBtns1  ?"#fff"  : "#5D36FE", }]}>Pray or Meditate</Text>

   <View style={styles.innerContainer}>
   
   {rowBtns1  ?  <AntDesign name='check' size={17} color='#5D36FE'
   
   /> : <View style={styles.planContainer}>
   
   
   </View>
   }
   
   </View>
   
   </View>
   </TouchableOpacity>
   </LinearGradient>
   
   <LinearGradient   
   colors={rowBtns2? ["#BA5DFE", "#5D36FE"] :  ['#FFFFFF', '#FFFFFF']}
   start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
   style={styles.liner}
   >
   <TouchableOpacity onPress={() => setRowBtns2(true)}   >
   <Text style={[styles.text, {  color:rowBtns2 ?"#fff"  : "#5D36FE", }]}
   >Faith</Text>
   
   <View style={styles.minContainer}>
   <Text style={[styles.tittle, {color:rowBtns2  ?"#fff"  : "#5D36FE", }]}>Read Bible</Text>
   <View style={styles.innerContainer}>
   
   {rowBtns2 ?  <AntDesign name='check' size={17} color='#5D36FE'
   
   /> : <View style={styles.planContainer}>
   
   
   </View>
   }
   
   </View>
   
   </View>
   </TouchableOpacity>
   </LinearGradient>
   </View>

   
<View style={styles.mainContainer}>
   
<LinearGradient   
colors={rowBtns3  ? ["#BA5DFE", "#5D36FE"] :  ['#FFFFFF', '#FFFFFF']}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.liner}
>
<TouchableOpacity onPress={() => setRowBtns3(true)} >
<Text style={[styles.text, {  color:rowBtns3 ?"#fff"  : "#5D36FE", }]}>Family</Text>

<View style={styles.minContainer}>

<Text style={[styles.tittle, {color:rowBtns3  ?"#fff"  : "#5D36FE", }]}>Invest in marriage</Text>
<View style={styles.innerContainer}>

{rowBtns3  ?  <AntDesign name='check' size={17} color='#5D36FE'

/> : <View style={styles.planContainer}>


</View>
}

</View>

</View>
</TouchableOpacity>
</LinearGradient>

<LinearGradient   
colors={rowBtns4 ? ["#BA5DFE", "#5D36FE"] :  ['#FFFFFF', '#FFFFFF']}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.liner}
>
<TouchableOpacity  onPress={() => setRowBtns4(true)} >
<Text style={[styles.text, {  color:rowBtns4 ?"#fff"  : "#5D36FE", }]}>Family</Text>

 <View style={styles.minContainer}>
<Text style={[styles.tittle, {color:rowBtns4  ?"#fff"  : "#5D36FE", }]}>Invest in family</Text>
<View style={styles.innerContainer}>

{rowBtns4 ?  <AntDesign name='check' size={17} color='#5D36FE'

/> : <View style={styles.planContainer}>


</View>
}

</View>

</View>
</TouchableOpacity>
</LinearGradient>
</View>



<View style={styles.mainContainer}>
   
<LinearGradient   
colors={rowBtns5 ? ["#BA5DFE", "#5D36FE"] :  ['#FFFFFF', '#FFFFFF']}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.liner}
>
<TouchableOpacity  onPress={() => setRowBtns5(true)} >
<Text style={[styles.text, {  color:rowBtns5 ?"#fff"  : "#5D36FE", }]}>Fitness</Text>

 <View style={styles.minContainer}>
<Text style={[styles.tittle, {color:rowBtns5  ?"#fff"  : "#5D36FE", }]}>Exercise</Text>
<View style={styles.innerContainer}>

{rowBtns5  ?  <AntDesign name='check' size={17} color='#5D36FE'

/> : <View style={styles.planContainer}>


</View>
}

</View>

</View>
</TouchableOpacity>
</LinearGradient>

<LinearGradient   
colors={rowBtns6  ? ["#BA5DFE", "#5D36FE"] :  ['#FFFFFF', '#FFFFFF']}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.liner}
>
<TouchableOpacity  onPress={() => setRowBtns6(true)} >
<Text style={[styles.text, {  color:rowBtns6 ?"#fff"  : "#5D36FE", }]}>Fitness</Text>

 <View style={styles.minContainer}>
<Text style={[styles.tittle, {color:rowBtns6  ?"#fff"  : "#5D36FE", }]}>Morning Nutrition</Text>
<View style={styles.innerContainer}>

{rowBtns6  ?  <AntDesign name='check' size={17} color='#5D36FE'

/> : <View style={styles.planContainer}>


</View>
}

</View>

</View>
</TouchableOpacity>
</LinearGradient>
</View>


<View style={styles.mainContainer}>
   
<LinearGradient   
colors={rowBtns7 ? ["#BA5DFE", "#5D36FE"] :  ['#FFFFFF', '#FFFFFF']}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.liner}
>
<TouchableOpacity  onPress={() => setRowBtns7(true)} >
<Text style={[styles.text, {  color:rowBtns7 ?"#fff"  : "#5D36FE", }]}>Education</Text>

 <View style={styles.minContainer}>
<Text style={[styles.tittle, {color:rowBtns7  ?"#fff"  : "#5D36FE", }]}>Learn New</Text>
<View style={styles.innerContainer}>

{rowBtns7  ?  <AntDesign name='check' size={17} color='#5D36FE'

/> : <View style={styles.planContainer}>

</View>
}

</View>

</View>
</TouchableOpacity>
</LinearGradient>

<LinearGradient   
colors={rowBtns8 ? ["#BA5DFE", "#5D36FE"] :  ['#FFFFFF', '#FFFFFF']}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.liner}
>
<TouchableOpacity onPress={() => setRowBtns8(true)} >
<Text style={[styles.text, {  color:rowBtns8 ?"#fff"  : "#5D36FE", }]}>Goals</Text>

 <View style={styles.minContainer}>
<Text style={[styles.tittle, {color:rowBtns8  ?"#fff"  : "#5D36FE", }]}>Review & Grow</Text>
<View style={styles.innerContainer}>

{rowBtns8 ?  <AntDesign name='check' size={17} color='#5D36FE'

/> :<View style={styles.planContainer}>


</View>
}

</View>

</View>
</TouchableOpacity>
</LinearGradient>
</View>
   </>
  )
}

export default RowBtnsHomeScreen