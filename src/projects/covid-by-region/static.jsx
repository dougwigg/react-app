
export const months = ['Jan-', 'Feb-', 'Mar-', 'Apr-', 'May-', 'Jun-', 'July-', 'Aug-', 'Sep-', 'Oct-', 'Nov-', 'Dec-'];

export const stateNames = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
};

export const statesForRegion = {
  'northeast': ['ME', 'VT', 'NH', 'MA', 'CT', 'RI'],
  'midatlantic': ['NY', 'NJ', 'PA', 'DE', 'MD', 'VA', 'WV'],
  'southeast': ['AR', 'TN', 'NC', 'SC', 'LA', 'MS', 'AL', 'GA', 'FL'],
  'northwest': ['AK', 'WA', 'OR', 'ID', 'MT', 'WY'],
  'midwest': ['ND', 'SD', 'NE', 'KS', 'MN', 'IA', 'MO', 'WI', 'IL', 'MI', 'IN', 'OH', 'KY'],
  'southwest': ['UT', 'CO', 'NM', 'AZ', 'OK', 'TX'],
  'west': ['CA', 'NV', 'HI']
};

export const formatDate = (dateNum) => {
  const dateStr = dateNum.toString();
  const day = new Date(dateStr.substring(0,4) + '/' + dateStr.substring(4,6) + '/' +  dateStr.substring(6,8));
  return months[day.getUTCMonth()] + day.getDate();
};

export const getLatestData = (stateData, numDays) => {
  const latest = stateData['data'].slice(1, numDays + 1);
  const chartData = latest.map((day) => {
    return { 
      'state': day.state,
      'date': formatDate(day.date), 
      'case increase': day.positiveIncrease, 
      'death increase': day.deathIncrease
    }  
  });
  return chartData.reverse(); 
}

export const getWeeklyCasesAsPctOfPopulation = (data) => {
  const totalCases = data.reduce((a, b) => a + (b['case increase'] || 0), 0); 
  const asPct = parseFloat(totalCases/( popByState[data[0].state])*100).toFixed(3);
  return asPct > 1 ? asPct : asPct.substring(1);
}

// Wikipedia data from 6/2019
export const popByState = {
  "AK": 731545,
  "AL": 4903185,
  "AR": 3017825,
  "AZ": 7278717,
  "CA": 39512223,
  "CO": 5758736,
  "CT": 3565287,
  "DE": 973764,
  "FL": 21477737,
  "GA": 10617423,
  "GU": 165718,
  "HI": 1415872,
  "IA": 3155070,
  "ID": 1787065,
  "IL": 12671821,
  "IN": 6732219,
  "KS": 2913314,
  "KY": 4467673,
  "LA": 4648794,
  "MA": 6949503,
  "MD": 6045680,
  "ME": 1344212,
  "MI": 9986857,
  "MN": 5639632,
  "MO": 6137428,
  "MS": 2976149,
  "MT": 1068778,
  "NC": 10488084,
  "ND": 762062,
  "NE": 1934408,
  "NH": 1359711,
  "NJ": 8882190,
  "NM": 2096829,
  "NV": 3080156,
  "NY": 19453561,
  "OH": 11689100,
  "OK": 3956971,
  "OR": 4217737,
  "PA": 12801989,
  "PR": 3193694,
  "RI": 1059361,
  "SC": 5148714,
  "SD": 884659,
  "TN": 6833174,
  "TX": 28995881,
  "UT": 3205958,
  "VA": 8535519,
  "VT": 623989,
  "WA": 7614893,
  "WI": 5822434,
  "WV": 1792147,
  "WY": 578759
};