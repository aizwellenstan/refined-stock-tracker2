import React, { Component } from 'react';

interface Props {
   ticker?: any;
}

type dataState = {
    stockChartXValues: any[],
    stockChartYValues: any[],
    signal: any;
}

class StockRow extends Component<Props, dataState>{
    constructor(props :Props) {
        super(props)
        this.state = {
            stockChartXValues: ["fetching"],
            stockChartYValues: ["fetching"],
            signal:{}
        }
    }

    componentDidMount() {
        const url = 
        // `/api/stock/${this.props.ticker}/intraday-prices?chartLast=1`
        // `/api/stock/${this.props.ticker}/intraday-prices?chartInterval=15`
        `http://localhost:3000/api/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.props.ticker}&outputsize=compact`
        
        let stockChartXValuesFunc :any= [] ;
        let stockChartYValuesFunc :any= [];

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // for(var key in data['Time Series (Daily)']) {
            //         stockChartXValuesFunc.push(key)
            //         stockChartYValuesFunc.push(data['Time Series (Daily)']
            //         [key]['1. open']);
            // }

            if(data['Time Series (Daily)'] !== undefined) {
                for(var key in data['Time Series (Daily)']) {
                    if(Object.keys(data['Time Series (Daily)'][key]).length !== 0)
                    {
                        stockChartXValuesFunc.push(key)
                        stockChartYValuesFunc.push(data['Time Series (Daily)']
                        [key]);
                    }
                    
                }
            }

            
            // rebuild data
            let dataModified = stockChartYValuesFunc.map(
                (obj :any)=> {
                    return {
                        "open": obj["1. open"],
                        "high": obj["2. high"],
                        "low": obj["3. low"],
                        "close": obj["4. close"],
                        "adjusted_close" :obj["5. adjusted close"],
                        "volume": obj["6. volume"],
                        "devidend_amount": obj["7. devidend amount"],
                        "split_coefficient": obj["8. split coefficient"]
                    }
                }
            );
            console.log(dataModified)
            
            if(dataModified.length !== 0)
            {
                this.setState({
                    stockChartXValues: stockChartXValuesFunc,
                    stockChartYValues: dataModified
                })
            }
        })
        
        this.CheckSignal()
    }

    CheckSignal(){
        let data = this.state.stockChartYValues
        let length = data.length;
        
        if (length >= 4 && data[length-1].close!=="fetching")
        {
            let rr = 18;

            let lowArr = [data[length-1].low,data[length-2].low,data[length-3].low,data[length-4].low];
            let lower = Math.min(...lowArr);

            let highArr = [data[length-1].high,data[length-2].high,data[length-3].high,data[length-4].high];
            let upper = Math.max(...highArr);

            let open, sl, tp;

            if
            (
                data[length-1].close > data[length-2].close &&
                data[length-2].close > data[length-3].close &&
                data[length-3].close < data[length-4].close &&
                data[length-4].close < data[length-5].close
            )
            {
                open = upper;
                sl = upper-(upper-lower)/rr;
                tp = upper+(upper-(upper-(upper-lower)/rr))*30;
            }

            if
            (
                data[length-1].close < data[length-2].close &&
                data[length-2].close < data[length-3].close &&
                data[length-3].close > data[length-4].close &&
                data[length-4].close > data[length-5].close
            )
            {
                open = lower;
                sl = lower+(upper-lower)/rr;
                tp = lower-(lower+(upper-lower)/rr-lower)*30;
            }

            this.setState({
                signal: {
                    open: open,
                    sl: sl,
                    tp: tp
                }
            })

        }
        
    }

    render() {
        // if(this.state.data[this.state.data.length-1].close ==null)
        // {
        //     return(
        //         <tr>
        //             <td>{this.props.ticker}</td>
        //             <td />
        //             <td />
        //             <td />
        //             <td />
        //             <td />
        //             <td />
        //         </tr>
        //     )
        // }
        if(this.state.stockChartXValues[0]!=="fetching"){
            return (
                <tr>
                    <td>{this.props.ticker}</td>
                    <td>{this.state.stockChartYValues[0].close}</td>
                    <td>{this.state.stockChartXValues[0]}</td>
                    {/* <td>{this.state.data[this.state.data.length-1].close}</td>
                    <td>{this.state.data[this.state.data.length-1].date}</td>
                    <td>{this.state.data[this.state.data.length-1].label}</td> */}
                    {/* <td>{this.state.signal.open}</td>
                    <td>{this.state.signal.sl}</td>
                    <td>{this.state.signal.tp}</td> */}
                </tr>
            );
        }else{
            return<tr />
        }
        
    }
}

export default StockRow;