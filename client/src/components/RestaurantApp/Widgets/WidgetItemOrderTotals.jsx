// Import dependencies
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

<Doughnut data={...} />

// Import CSS
import '../../../styles/Widgets.css';

const WidgetTotalRevenue = (props) => {
  return (
    <div className="WidgetTotalRevenue widget widget-small">
      <div className="widget-header-icon mat-color-orange"><i class="material-icons">people</i></div>
      <div className="widget-header-text">Revenue</div>
      <div className="section info">
        <Doughnut data={...} />
      </div>
    </div>
  );
};

export default WidgetTotalRevenue;


// data: {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//           'rgba(255,99,132,1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//   }]
// },