$(document).ready(function(){
	$.ajax({
		url:"data.php",
		method: "GET",
		success: function(data){
			console.log(data);
			var player = [];
			var score = [];

			for (var i in data) {
				player.push("Player " + data[i].xaxis);
				score.push(data[i].yaxis);
			}

			var chartdata = {
				labels: player,
				datasets:[{
					label:'Player Score',
					/*backgroundColor:'rgba(200, 200, 200, 0.75)',
					borderColor:'rgba(200, 200, 200, 0.75)',*/
					backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
					hoverBackgroudColor:'rgba(200, 200, 200, 1)',
					hoverBorderColor:'rgba(200, 200, 200, 1)',
					data: score
				}]
			};

			var myChart1 = $("#myChart1");
			var barGraph = new Chart(myChart1, {
				type:'line',
				data: chartdata,

				options:{
					title:{
						display:true,
						text:'Chart 1'
					},
					legend:{
						display:false,
						position:'right',
						labels:{
							fontColor:'#000'
						}
					},
					layout:{
						padding:{
							left:50,
							right:0,
							bottom:0,
							top:0
						}
					},
					tooltips:{
						enabled:true
					},
					animation:{
				        duration: 0
				    }
				}
			});

			var myChart2 = $("#myChart2");
			var barGraph = new Chart(myChart2, {
				type:'bar',
				data: chartdata,

				options:{
					title:{
						display:true,
						text:'Chart 2'
					},
					legend:{
						display:false,
						position:'right',
						labels:{
							fontColor:'#000'
						}
					},
					layout:{
						padding:{
							left:50,
							right:0,
							bottom:0,
							top:0
						}
					},
					tooltips:{
						enabled:true
					},
					animation:{
				        duration: 0
				    }
				}
			});

			var myChart3 = $("#myChart3");
			var barGraph = new Chart(myChart3, {
				type:'doughnut',
				data: chartdata,

				options:{
					title:{
						display:true,
						text:'Chart 3'
					},
					legend:{
						display:true,
						position:'right',
						labels:{
							fontColor:'#000'
						}
					},
					layout:{
						padding:{
							left:50,
							right:0,
							bottom:0,
							top:0
						}
					},
					tooltips:{
						enabled:true
					},
					animation:{
				        duration: 0
				    }
				}
			});
		},
		error: function(data){
			console.log(data);
		}
	});
});