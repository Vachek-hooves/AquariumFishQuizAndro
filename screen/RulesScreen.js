import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MainLayout from '../components/MainLayout';
import {COLOR} from '../const/colors';

const RulesScreen = () => {
  return (
    <ImageBackground
      style={{backgroundColor: COLOR.ocean, flex: 1}}
      source={require('../assets/img/bg/Aquabg5.jpg')}>
      <SafeAreaView style={{flex: 1, backgroundColor: COLOR.light + 90}}>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            padding: 10,
          }}>
          <Text style={{fontSize: 26, textAlign: 'center', color: COLOR.ocean}}>
            Aquarium Fish Quiz: Game Rules
          </Text>
          <Text style={styles.subHeader}>Game Overview:</Text>
          <Text style={styles.themesText}>
            Themes: The game consists of 9 themes, each represented in a grid on
            the main screen:
          </Text>
          <Text style={styles.themesText}>
            * Fish Species: Questions about different species of fish commonly
            found in aquariums.
          </Text>
          <Text style={styles.themesText}>
            * Aquarium Maintenance: Questions about proper maintenance and care
            for an aquarium.
          </Text>
          <Text style={styles.themesText}>
            * Aquarium Equipment: Questions about equipment like filters,
            heaters, and lighting.
          </Text>
          <Text style={styles.themesText}>
            * Aquarium Plants: Questions about aquatic plants and their care
            requirements.
          </Text>
          <Text style={styles.themesText}>
            * Aquarium Chemistry: Questions about water parameters like pH,
            ammonia, nitrite, and nitrate levels.
          </Text>
          <Text style={styles.themesText}>
            * Habitat and Ecosystems: Questions about recreating natural
            habitats and ecosystems in an aquarium.
          </Text>
          <Text style={styles.themesText}>
            * Aquarium Invertebrates: Questions about invertebrates such as
            shrimp, snails, and corals.
          </Text>
          <Text style={styles.themesText}>
            * Aquarium Diseases and Treatments: Questions about common fish
            diseases and their treatments.
          </Text>
          <Text style={styles.themesText}>
            * Famous Aquariums: Questions about well-known public aquariums and
            their notable exhibits.
          </Text>
          <Text style={styles.subHeader}>Starting the Game:</Text>
          <Text style={styles.themesText}>
            Upon starting the game, only the first two themes are unlocked and
            available for play.
          </Text>
          <Text style={styles.subHeader}>Questions and Scoring:</Text>
          <Text style={styles.themesText}>
            Each theme contains 10 questions.
          </Text>
          <Text style={styles.themesText}>
            For every correct answer, the player earns 1 point.
          </Text>
          <Text style={styles.themesText}>
            To unlock the next theme, the player must accumulate the required
            number of points.
          </Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.subHeader}>Gameplay Rules</Text>
          <Text style={styles.subHeader}>Choosing a Theme:</Text>
          <Text style={styles.themesText}>
            Players begin by selecting an unlocked theme from the grid.
            Initially, the first two themes are unlocked and available for play.
          </Text>
          <Text style={styles.subHeader}>Answering Questions:</Text>
          <Text style={styles.themesText}>
            Each theme has 10 questions. Players must select the correct answer
            from multiple-choice options.
          </Text>
          <Text style={styles.themesText}>
            There is no time limit to answer each question, allowing players to
            think carefully before making a selection.
          </Text>
          <Text style={styles.subHeader}>Scoring and Progression:</Text>
          <Text style={styles.themesText}>
            Players earn 1 point for each correct answer.
          </Text>
          <Text style={styles.themesText}>
            Points are tallied for each theme. To unlock the next theme, players
            must reach a specific point threshold.
          </Text>
          <Text style={styles.themesText}>
            The required number of points to unlock subsequent themes increases
            progressively, encouraging players to master each topic.
          </Text>
          <Text style={styles.subHeader}>Unlocking Themes:</Text>
          <Text style={styles.themesText}>
            New themes are unlocked once the player reaches the necessary number
            of points from the previous themes.
          </Text>
          <Text style={styles.themesText}>
            The game progresses through the themes in order, gradually
            increasing the challenge and complexity of questions.
          </Text>
          <Text style={styles.subHeader}>Completing the Game:</Text>
          <Text style={styles.themesText}>
            The goal is to unlock and complete all nine themes, demonstrating a
            comprehensive knowledge of aquarium fish and related subjects.
          </Text>
          <Text style={styles.subHeader}>Game Strategy:</Text>
          <Text style={styles.themesText}>
            Players are encouraged to revisit themes to improve their scores and
            unlock new themes. Mastery of each theme is key to advancing through
            the game.
          </Text>
        </ScrollView>
      </SafeAreaView>
      {/* </View> */}
    </ImageBackground>
  );
};

export default RulesScreen;

const styles = StyleSheet.create({
  themesText: {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: 20,
    marginTop: 5,
  },
  subHeader: {
    fontSize: 26,
    textAlign: 'center',
    color: COLOR.ocean,
    marginTop: 20,
  },
});
