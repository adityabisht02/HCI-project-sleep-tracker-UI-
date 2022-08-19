let timeelement=document.querySelector(".time");



function gettime(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let time=hours+":"+minutes+":"+seconds;
    console.log(time);
    timeelement.innerHTML=time;
}

setInterval(gettime,1000);



new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"],
      datasets: [{ 
          data: [6,7,5,6,6,8,8],
          label: "Average",
          borderColor: "blue",
          fill: false
        }, { 
          data: [5,6,6,6,6,8,9],
          label: "You",
          borderColor: "white",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Sleep duration (last week)'
      }
    }
  });