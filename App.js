import { View,Text,StyleSheet,Image,TouchableOpacity,Linking } from 'react-native'






export default function App() {
  return (
    <View style={styles.aboutContainer}>
    <Text style={styles.mainHeader}>Best Cafe Of Year </Text>

    <Text style={[styles.aboutPara,styles.paraStyle]}>food qulity With Awesome taste</Text>

    <View>

    <Image style={styles.imgStyle}
    source={require('./assets/burger.png')}
    
    />

    
    
    </View>

    <View style={styles.aboutLayout}>
    <Text style={styles.aboutSubHeader}>About Me</Text>
    <Text >best cafe with resturant,all type of service available like birthday party,family function,couple date etc, there are so many things like dj, enjoyment,singing,dancing. fast food with is famous foe night station"</Text>
    </View>

    <Text style={styles.mainHeader}>Follow me on Social Networks</Text>

    <View style={styles.menuContainer}>

    

    <TouchableOpacity 
    style={styles.iconStyle}
    onPress={() => Linking.openURL("https://www.youtube.com/@Veer_Agraval/playlists")}>
    <Image style={styles.iconStyle}
    source={require('./assets/favicon.png')}/>
    </TouchableOpacity>

    

    </View>
   
    </View>
  )
}

const styles = StyleSheet.create({
  aboutContainer:{
    display:"flex",
    alignItems:"center",

  },

  imgStyle:{
    width:150,
    height:150,
    borderRadius:100
  },

  mainHeader:{
    fontSize:18,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:50,
    marginBottom:10,
    lineHeight:30,

  },

  paraStyle:{
    fontSize:18,
    color:"#7d7d7d",
    paddingBottom:30,
  },

  aboutLayout:{
    backgroundColor:"4c5dab",
    paddingHorizontal:30,
    marginVertical:30,

  },

  aboutSubHeader:{
    fontSize:18,
    color:"f0f",
    textTransform:"uppercase",
    fontWeight:"500",
    marginVertical:15,
    lineHeight:30,
    alignSelf:"center"
  },

  aboutPara:{
    color:"fff"
  },
  menuContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly"

  },

  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1
  }




  
})



