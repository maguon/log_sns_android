import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Map } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import { ListEmpty, ListFooter } from '../../../components/list'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

class NearbyListForHome extends Component {
    
    componentDidMount() {
        // this.props.getArticleAllListWaiting()
        // InteractionManager.runAfterInteractions(this.props.getArticleAllList)
    }

    componentWillUnmount() {
        // this.props.rmArticleAllList()
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <WhiteSpace size='md' />
                <WingBlank size='md'>
                    <Card>
                        <Header />
                        <CardContent />
                        {/* <Video /> */}
                        <Footer />
                    </Card>
                    <WhiteSpace size='md' />
                </WingBlank>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nearbyListForHomeReducer: state.nearbyListForHomeReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getNearbyListForHome: () => {
        dispatch(reduxActions.nearbyListForHome.getNearbyListForHome())
    },
    getNearbyListForHomeWaiting: () => {
        dispatch(reduxActions.nearbyListForHome.getNearbyListForHomeWaiting())
    },
    getNearbyListForHomeMore: () => {
        dispatch(reduxActions.nearbyListForHome.getNearbyListForHomeMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NearbyListForHome)