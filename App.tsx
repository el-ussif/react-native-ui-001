import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from "./components/FlatCards";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";


const App = () => {
    //restartApp()
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards/>
                <ElevatedCard/>
                <FancyCard/>
                <FancyCard/>
                <FancyCard/>
                <FancyCard/>
                <ContactList/>
                <ActionCard/>
                <ActionCard/>
                <ActionCard/>
            </ScrollView>

        </SafeAreaView>
    );
}

export default App;
