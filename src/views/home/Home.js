import React from 'react'
import { View, Text } from 'react-native'

import { Container, Content } from 'native-base'
import { Card, Content as CardContent, Footer, Header, Video,Image,Map } from '../../components/card'


const Home = props => {
    return (
        <Container style={{ padding: 7.5 }}>
            <Content>
                <Card>
                    <Header />
                    <CardContent />
                    <Video />
                    <Footer />
                </Card>
                <Card>
                    <Header />
                    <CardContent />
                    <Image />
                    <Footer />
                </Card>

                <Card>
                    <Header />
                    <CardContent />
                    <Map />
                    <Footer />
                </Card>
            </Content>
        </Container>
    )
}

export default Home