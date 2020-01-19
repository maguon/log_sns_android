import React,{Component} from 'react'
import { ScrollView, View } from 'react-native'
import { Card, ReplyContent, ReplyHeader } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'
import globalStyles from '../../../GlobalStyles'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

class MyCommentList extends Component{
    componentDidMount(){

    }
    
    render(){
        return (
            <View style={globalStyles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <Card style={{ backgroundColor: '#fff' }}>
                        <ReplyHeader />
                        <ReplyContent />
                    </Card>
                    <WhiteSpace size='md' />
    
                    <Card style={{ backgroundColor: '#fff' }}>
                        <ReplyHeader />
                        <ReplyContent />
                    </Card>
                    <WhiteSpace size='md' />
    
                    <Card style={{ backgroundColor: '#fff' }}>
                        <ReplyHeader />
                        <ReplyContent />
                    </Card>
                    <WhiteSpace size='md' />
    
                    <Card style={{ backgroundColor: '#fff' }}>
                        <ReplyHeader />
                        <ReplyContent />
                    </Card>
                    <WhiteSpace size='md' />
    
                    <Card style={{ backgroundColor: '#fff' }}>
                        <ReplyHeader />
                        <ReplyContent />
                    </Card>
                    <WhiteSpace size='md' />
    
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myCommentListReducer: state.myCommentListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommentList: () => {
        dispatch(reduxActions.myCommentList.getCommentList())
    },
    getCommentListWaiting: () => {
        dispatch(reduxActions.myCommentList.getCommentListWaiting())
    },
    getCommentListMore: () => {
        dispatch(reduxActions.myCommentList.getCommentListMore())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyCommentList)