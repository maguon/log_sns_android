import React from 'react'
import { View, Text } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Vote, VoteFooter, VoteHeader } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'

const VoteListForCommunity = props => {
    return (
        <View style={{ flex: 1 }}>
            <WingBlank size='md'>
                <WhiteSpace size='md' />
                <Card>

                    <VoteHeader />
                    <Vote />
                    <VoteFooter />

                </Card>
                <WhiteSpace size='md' />
            </WingBlank>
        </View>
    )
}

export default VoteListForCommunity