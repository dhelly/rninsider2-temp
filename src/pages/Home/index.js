import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'

const myList = [
    {
        "date": "03-23",
        "weekday": "Tue",
        "max": 29,
        "min": 24,
        "description": "Night partly cloudy",
        "condition": "cloud"
    },
    {
        "date": "03-24",
        "weekday": "Wed",
        "max": 29,
        "min": 24,
        "description": "Night Mostly cloudy",
        "condition": "clear_day"
    },
    {
        "date": "03-25",
        "weekday": "Thu",
        "max": 28,
        "min": 24,
        "description": "Scattered showers",
        "condition": "rain"
    },
    {
        "date": "03-26",
        "weekday": "Fri",
        "max": 28,
        "min": 24,
        "description": "Night partly cloudy",
        "condition": "cloudly_day"
    },
    {
        "date": "03-27",
        "weekday": "Sat",
        "max": 29,
        "min": 24,
        "description": "Scattered showers",
        "condition": "rain"
    },
    {
        "date": "03-28",
        "weekday": "Sun",
        "max": 25,
        "min": 25,
        "description": "Night partly cloudy",
        "condition": "cloud"
    }
]

export default function Home() {
    return(
        <SafeAreaView style={styles.container}>
            <Menu />
            <Header />
            <Conditions />
            <FlatList
                horizontal={true}
                contentContainerStyle={{paddingBottom: '5%'}}
                style={styles.list}
                data={myList}
                keyExtractor={ item => item.date }
                renderItem={ ({ item }) => <Forecast data={item}/>  }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    },
    list: {
        marginTop: 10,
        marginLeft: 10
    }
})