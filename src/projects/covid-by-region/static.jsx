
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
  'midwest': ['ND', 'SD', 'NE', 'KS', 'WI', 'IA', 'MO', 'MI', 'IL', 'IN', 'OH', 'KY'],
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