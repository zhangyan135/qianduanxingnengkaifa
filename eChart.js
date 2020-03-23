$(function() {
  var myChart= echarts.init(document.getElementById('main'));
  var xData=[],
      yData=[];
for(var i=2000;i<=2020;i+=5){
  xData.push(i);
  yData.push(6,9,8,8,7)
}
  var option = {
            title: {
                text: 'JavaScript语言排名变化'
            },
            tooltip: {},
            legend: {
                data:['排名']
            },
            xAxis: {
                data: xData            
            },
            yAxis: {},
            series: [{
                name: '排名',
                type: 'line',
                data: yData            
            }]
        };
        myChart.setOption(option);   
});
