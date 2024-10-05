
console.log("Hello World!");

const dateElement = document.getElementById("date");
console.log(dateElement);

let currentDate = new Date();
console.log(currentDate);

// "dateOptions" Object will allow us to change the format retrieved from currentDate
let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

// Will allow the changing of format to US format using "dateOptions" object
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '6b75905215msh404e4d6516fa9e3p151ed9jsnb439eb8df112',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

// // Dummy Data to Comment Out
// let myPost = {
//     name:"#AlwaysToYouHannie",
//     query:"%23AlwaysToYouHannie",
//     url:"search?q=%23AlwaysToYouHannie",
//     volume:98800,
//     volumeShort:"97.9K",
//     domainContext:"Korean music",
//     groupedTrends:[]
// }

// console.log(myPost);
// console.log(myPost.name);

// //Array of objects
// let graphData = [
//     {
//         name:"2ne1",
//         query:"2ne1",
//         url:"search?q=2ne1",
//         volume:394000,
//         volumeShort:"394K",
//         domainContext:"K-pop",
//         groupedTrends:[]
//     },
//     {
//         name:"#FudgeeBarrxBINI",
//         query:"%23FudgeeBarrxBINI",
//         url:"search?q=%23FudgeeBarrxBINI",
//         volume:23200,
//         volumeShort:"22.6K",
//         domainContext:"",
//         groupedTrends:[]

//     }
// ];

// console.log(graphData);
// console.log(graphData[0]);
// console.log(graphData[0].name);

// //push() method - add element at the end of the array
// graphData.push(myPost);
// console.log(graphData);

// //End of Dummy Data to Comment Out

let graphData = [];

// Fetch Request

fetch(url, options)
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(graphData.length);

    // Loops are used to do repetitive
    // Print each individual element in the graphData
    for (let i = 0; i < 25; i++) {
        graphData.push(
            {
                "name": data.trends[i].name,
                "volume": data.trends[i].volume
            }
        )
    }
       
    // This will create a topics variable that contains the "object.name" property values
      let topics = graphData.map(object => {
        return object.name;
      });
    
      console.log(topics);
    
      // This will create volumes variable that contains "object.name" property values
      let volumes = graphData.map(object => {
        return object.volume;
      });
    
    console.log(volumes);
    
    const myChart = document.getElementById('myChart');
    
    let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: topics,
        datasets: [{
        label: '# of tweets/xeets',
        data: volumes,
        borderWidth: 2,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        hoverBackgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ]
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
});

// // Copy Paste to Fetch Request
// console.log(graphData.length);

// // Loops are used to do repetitive
// // Print each individual element in the graphData
// for (let i = 0; i < 2; i++) {
//     console.log(graphData[i]);
//     console.log(graphData[i].name);
//     console.log(graphData[i].volume);
//   }

//   // map method is used to loop through all elements items of an array and execute some code
//   //it creates a new array

// // This will create a topics variable that contains the "object.name" property values
//   let topics = graphData.map(object => {
//     return object.name;
//   });

//   console.log(topics);

//   // This will create volumes variable that contains "object.name" property values
//   let volumes = graphData.map(object => {
//     return object.volume;
//   });

// console.log(volumes);

// const myChart = document.getElementById('myChart');

// let barChart = new Chart(myChart, {
// type: 'bar',
// data: {
//     labels: topics,
//     datasets: [{
//     label: '# of tweets/xeets',
//     data: volumes,
//     borderWidth: 2,
//     backgroundColor: [
// 		'rgba(255, 99, 132, 0.2)',
// 		'rgba(255, 159, 64, 0.2)',
// 		'rgba(255, 205, 86, 0.2)',
// 		'rgba(75, 192, 192, 0.2)',
// 		'rgba(54, 162, 235, 0.2)',
// 		'rgba(153, 102, 255, 0.2)',
// 		'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
// 		'rgb(255, 99, 132)',
// 		'rgb(255, 159, 64)',
// 		'rgb(255, 205, 86)',
// 		'rgb(75, 192, 192)',
// 		'rgb(54, 162, 235)',
// 		'rgb(153, 102, 255)',
// 		'rgb(201, 203, 207)'
//     ],
//     hoverBackgroundColor: [
//     	'rgb(255, 99, 132)',
//     	'rgb(255, 159, 64)',
//     	'rgb(255, 205, 86)',
//     	'rgb(75, 192, 192)',
//     	'rgb(54, 162, 235)',
//     	'rgb(153, 102, 255)',
//     	'rgb(201, 203, 207)'
//     ]
//     }]
// },
// options: {
//     indexAxis: 'y',
//     scales: {
//     y: {
//         beginAtZero: true
//     }
//     }
// }
// });

// // End of Copy Paste to Fetch Request
