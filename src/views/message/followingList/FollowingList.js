import React,{Component} from 'react'
import { View, Text, ScrollView, Image,InteractionManager } from 'react-native'
import { List, Button } from '@ant-design/react-native'
import { connect } from 'react-redux'
import reduxActions from '../../../reduxActions'

const Item = List.Item
const Brief = Item.Brief

class FollowingList extends Component{
    componentDidMount(){

    }

    render(){
        return (
            <ScrollView>
                <List>
                    <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
                        extra={
                            <Button size='small' type='primary'>关注</Button>
                        }>
                        昵称<Brief>2019-06-05</Brief>
                    </Item>
                    <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
                        extra={
                            <Button size='small' type='ghost'>互相关注</Button>
                        }>
                        昵称<Brief>2019-06-05</Brief>
                    </Item>
                    <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
                        extra={
                            <Button size='small' type='primary'>关注</Button>
                        }>
                        昵称<Brief>2019-06-05</Brief>
                    </Item>
                    <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
                        extra={
                            <Button size='small' type='primary'>关注</Button>
                        }>
                        昵称<Brief>2019-06-05</Brief>
                    </Item>
                </List>
            </ScrollView>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        followingListReducer: state.followingListReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    getFollowingList: () => {
        dispatch(reduxActions.followingList.getFollowingList())
    },
    getFollowingListMore: () => {
        dispatch(reduxActions.followingList.getFollowingListMore())
    },
    getFollowingListWaiting: () => {
        dispatch(reduxActions.followingList.getFollowingListWaiting())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowingList)
