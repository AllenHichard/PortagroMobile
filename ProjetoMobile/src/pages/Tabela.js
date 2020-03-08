import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

class Tabela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID','Tipo', 'Produto', 'Variável', 'Valor', 'Data'],
      widthArr: [50, 75, 75, 80, 80]
    }
  }
 
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 5; i += 1) {
      const rowData = [];
      for (let j = 0; j < 5; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
 
    return (
      <>
      <View>
         <Text style={styles.texto}>Leite - Feira de Santana</Text>
      </View>
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
    texto:{
      
      paddingLeft:90,
      fontFamily: "Roboto",
      fontSize: 20,
    }
});

export default Tabela;