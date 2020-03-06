import React from 'react'
import { AreaChart, Grid, BarChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
//https://www.npmjs.com/package/react-native-svg-charts
//npm install react-native-svg@9.13.3

class Grafico extends React.Component {
    render() {
      const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
      const fill = 'rgb(134, 65, 244)'
      const data2   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ]
        return (
            <>
                <AreaChart
                    style={{ height: 200 }}
                    data={ data }
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={ shape.curveNatural }
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                >
                    <Grid/>
                </AreaChart>
                <BarChart
                    style={{ height: 200 }}
                    data={ data2 }
                    svg={{ fill }}
                    contentInset={{ top: 30, bottom: 30 }}
                >
                    <Grid/>
                </BarChart>

            </>
        )
    }
  }

  export default Grafico