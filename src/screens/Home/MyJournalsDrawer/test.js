// Assuming journalData is your array of journal entries
const sortedJournalData = journalData.sort((a, b) => {
    // Convert the dates to Date objects and compare them
    return new Date(b.createdAt) - new Date(a.createdAt);
   });
   
   // Now, map over the sorted array to render your components
   const journalComponents = sortedJournalData.slice(0, 5).map((data, index) => {
    const createdAtDate = data?.createdAt ? new Date(data.createdAt) : null;
    const formattedDate = createdAtDate ? `${createdAtDate.toLocaleDateString()} ${createdAtDate.toLocaleTimeString()}` : '';
    const dataId = data?._id;
   
    return (
       <TouchableOpacity style={styles.dataBtn} onPress={() => onClick({ type: "Journal", dataId: dataId })}>
         <View key={index}>
           <Text style={styles.currentDate}>{formattedDate}</Text>
           <Text style={[styles.dataBtnHeading, ]}>Journal</Text>
           <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 2, }}>
             <Text style={styles.currentData}>{data?.journalType}</Text>
             <Text style={styles.email}>{email}</Text>
           </View>
         </View>
       </TouchableOpacity>
    );
   });





   {journalData.slice(0,5).map((data, index) => {
    // console.log("🚀 Line No.140 ~ MyJournalsDrawer ~ journalData:", journalData)
    const createdAtDate = data?.createdAt ? new Date(data.createdAt) : null;
    const formattedDate = createdAtDate ? `${createdAtDate.toLocaleDateString()} ${createdAtDate.toLocaleTimeString()}` : '';
    const dataId = data?._id ;
    
    return (
        <TouchableOpacity style={styles.dataBtn} onPress={()=> onClick({type:"Journal", dataId: dataId})}>
            <View key={index}>
            <Text style={styles.currentDate}>{formattedDate}</Text>
            <Text style={[styles.dataBtnHeading, ]}>Journal</Text>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",marginTop:2,}}>
            <Text style={styles.currentData}>{data?.journalType}</Text>
                    
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
})}
   