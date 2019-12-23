import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Content as CardContent, Footer, Header, Video, Image, Map } from '../../../components/card'
import { Tabs, Icon, Popover, WhiteSpace, WingBlank } from '@ant-design/react-native'

//我的文章
const SeekHelpArticleList = props => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <WhiteSpace size='md' />
            <WingBlank size='md'>
                <Card>
                    <Header />
                    <CardContent />
                    <Image />
                    <Footer />
                </Card>
                <WhiteSpace size='md' />
            </WingBlank>
        </ScrollView>
    )
}

export default SeekHelpArticleList