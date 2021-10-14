import React from 'react'
import {View, Text, Image} from 'react-native'

export default function Login(){
    return (
    <View style = {{ flex:1 , justifyContent: "center", alignItems: "center"}} > 
    
    <Image 
    style = {{
        width : 170,
        height : 170,
        borderRadius : 15,
        marginBottom : 15,
        }
    }
    
    source = {{url: "https://ychef.files.bbci.co.uk/1376x774/p07phq4b.jpg"}} /> 
     <Text style= {{ color : "rgba(0,0,0,0.6)", fontSize : 35}}> Welcome to</Text>
     <Text style = {{color: "black", fontSize: 40, fontWeight : "600",}}>Power Bike Shop</Text>
     <TouchableOpacity style ={{
         backgroundColor:"grey", 
         padding : 10, 
         paddingHorizontal :60,
         marginTop: 20,
         }}
         >  
     <Text style= {{fontSize : 20}}>Login with Gmail</Text>
     </TouchableOpacity>

    </View> 
     )
    
}