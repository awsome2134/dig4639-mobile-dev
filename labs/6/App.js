import React from 'react';
import {View, Text, Card, StyleSheet } from 'react-native';

 class App extends React.Component {
   constructor(props){
     super(props);
     this.state= {trivia:[]};
   }

   componentDidMount(){
     console.log("Mounted");
     this.callApi();
   }

   async callApi(){
     let trivia= this.state.trivia;
    const retValue= await fetch("https://opentdb.com/api.php?amount=50");
    const obj = await retValue.json();
    console.log(obj);
    obj.results.map((v)=>
    trivia.push({"question": v.question, "answers": v.correct_answer +","+ v.incorrect_answers}));
    this.setState({trivia});
  }

  render() {
    return (
          <View style={styles.container}>
            {
              this.state.trivia.map((v, index)=>
                  <View style={styles.container} key={index}>
                    <Text>{v.question} {"\n"}</Text>
                    <Text>{v.answers}</Text>
                  </View>
              )
            }
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;