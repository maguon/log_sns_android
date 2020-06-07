import React, { Component } from 'react'
import { View, Text, ScrollView, PermissionsAndroid } from 'react-native'
import { List, TextareaItem, Icon, Switch, Toast } from '@ant-design/react-native'
import { init, Geolocation } from "react-native-amap-geolocation"
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'
import { geoKey } from '../../../utils/keys'


const Item = List.Item
const Brief = Item.Brief

class CurrentLocation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            switchChecked: false
        }
    }

    componentWillUnmount() {
        this.props.removeCurrentLocation()
    }

    componentWillReceiveProps(nextProps) {
        const { currentLocationReducer: { data: nextPropsData } } = nextProps
        const { currentLocationReducer: { data: propsData }, input: { value, onChange } } = this.props
        if (nextPropsData.currentAddrName !== propsData.currentAddrName
            || nextPropsData.currentAddrReal !== propsData.currentAddrReal
            || nextPropsData.longitude !== propsData.longitude
            || nextPropsData.latitude !== propsData.latitude
        ) {
            if(this.state.switchChecked){
                onChange({ switchChecked:this.state.switchChecked, data: nextPropsData })

            }else{
                onChange({ switchChecked:this.state.switchChecked, data: {} })

            }
        }
    }

    render() {
        const { input: { value, onChange }, currentLocationReducer } = this.props
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 17 }}>显示定位</Text>
                    <Switch checked={this.state.switchChecked} onChange={(checked) => {
                        this.setState({ switchChecked: checked }, async () => {
                            if (checked) {
                                try {
                                    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
                                    await init({ android: geoKey })
                                    Geolocation.getCurrentPosition(({ coords }) => {
                                        this.props.getCurrentLocation({ longitude: coords.longitude, latitude: coords.latitude })
                                    })
                                } catch (err) { }
                            } else {
                                this.props.removeCurrentLocation()
                            }
                        })
                    }} />
                </View>
                {this.state.switchChecked&& <Brief>{currentLocationReducer.data.currentAddrName}</Brief>}
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        currentLocationReducer: state.currentLocationReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentLocation: reqParams => {
        dispatch(reduxActions.currentlocation.getCurrentLocation(reqParams))
    },
    removeCurrentLocation: () => {
        dispatch(reduxActions.currentlocation.removeCurrentLocation())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation)
