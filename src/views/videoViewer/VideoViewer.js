import React,{Component} from 'react'
import {View ,Text} from 'react-native'

class VideoViewer extends Component{

    
    render(){
        console.log('this.props',this.props)
        return(
            <View>
                <Text>VideoViewer</Text>
            </View>
        )
    }
}

export default VideoViewer