import { StyleSheet } from 'react-native'
import React from 'react'
import Header from '../header/Header'
import { Accordion, Container, Content } from 'native-base'


const dataArray = [
    // { title: "English" ,  },
    { title: 'English', content: 'This is ENglish Home work' },
]

const CurriculumComp = () => {


    return (
        <Container>
            <Header title='Curriculum' />
            <Content padder>
                <Accordion dataArray={dataArray} expanded={0} />
            </Content>
        </Container>
    )
}

export default CurriculumComp

const styles = StyleSheet.create({})