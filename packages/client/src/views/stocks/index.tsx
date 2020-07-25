// // import React from 'react';
// // import { Seo } from 'src/components/seo';
// // import { useTranslation } from 'react-i18next';
// // import { Timetable } from 'src/components/timetable';

// // export const Activities = React.memo(() => {
// //   const { t } = useTranslation();

// //   return (
// //     <>
// //       <Seo
// //         title={t('activities.page_title', {
// //           defaultValue: 'Activities - Refined Itsukara.link',
// //         })}
// //         description={t('activities.description', {
// //           defaultValue: 'Recent activities of Nijisanji streamers',
// //         })}
// //       />

// //       <Timetable />
// //     </>
// //   );
// // });

// import React from 'react';
// import { Seo } from 'src/components/seo';
// import { useTranslation } from 'react-i18next';
// import { TimetableContainer } from 'src/containers/timetable-container';
// import { SidebarContainer } from 'src/containers/sidebar-container';
// import { StoreContext } from 'redux-react-hook';
// import { configureStore } from 'src/redux/store';

// import StockRow from '../../components/stockrow';

// const store = configureStore();

// export const　Stocks = React.memo(() => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <div className="App">
//         <div className="container">
//           <table className="table mt-5">
//             <thead>
//               <tr>
//                 <th>Ticker</th>
//                 <th>Price</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>OpenStop</th>
//                 <th>SL</th>
//                 <th>TP</th>
//               </tr>
//             </thead>
//             <tbody>
//               <StockRow ticker="aapl" />
//               <StockRow ticker="goog" />
//               <StockRow ticker="msft" />
//               <StockRow ticker="tsla" />
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// });

// import React from 'react';
// import { Seo } from 'src/components/seo';
// import { useTranslation } from 'react-i18next';
// import { Timetable } from 'src/components/timetable';

// export const Activities = React.memo(() => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <Seo
//         title={t('activities.page_title', {
//           defaultValue: 'Activities - Refined Itsukara.link',
//         })}
//         description={t('activities.description', {
//           defaultValue: 'Recent activities of Nijisanji streamers',
//         })}
//       />

//       <Timetable />
//     </>
//   );
// });

import React, { Component } from 'react';
import { styled } from 'src/styles';

import StockRow from '../../components/stockrow';

const Wrapper = styled.a`
  overflow-y: scroll;
`;

interface Props {
}
type dataState = {
  data: any
}

export class Stocks extends Component<Props, dataState>{
  constructor(props :Props) {
    super(props)
    this.state = {
        data:[
          // 'AAPL','AMZN','MSFT'
        ],
      }
  }

  componentDidMount() {
    const url = 
    // `/api/stock/${this.props.ticker}/intraday-prices?chartLast=1`
    // `/symbols`
    `http://localhost:3000/symbols`
    
    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((data) => {
        this.setState({
                data: data
        });
        console.log(data);
    })
  }

  
  
  render() {
    return (
      <>
      <Wrapper>
        <div className="App">
        <div className="container">
          <table className="table mt-5">
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Date</th>
                <th>Time</th>
                <th>OpenStop</th>
                <th>SL</th>
                <th>TP</th>
              </tr>
            </thead>
            <tbody>
            {this.state.data.map((value :any, index: any) => {
              if(value.type="cs" && value.exchange=="NAS" && index <60)
                return <StockRow key={index} ticker={value.symbol.toLowerCase()} />
                // return <div>{value.symbol}</div>
            })}
            {/* {this.state.data.map((value :any, index: any) => {
                return <StockRow key={index} ticker={value.toLowerCase()} />
            })} */}
              {/* <StockRow ticker="aapl" />
              <StockRow ticker="goog" />
              <StockRow ticker="msft" />
              <StockRow ticker="tsla" /> */}
            </tbody>
          </table>
        </div>
      </div>
      </Wrapper>
      </>
    );
}};
