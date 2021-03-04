// ============================================================== 
// Sales Comparison
// ============================================================== 
var options_sales_comparison = {
    series: [{
      name: "HostingPress Wordpress Theme",
      data: [[1, 19], [2, 20], [4, 33], [6, 41], [8, 25], [10, 23], [12, 28], [14, 45], [16.5, 50], [18.5, 39], [20.5, 26], [22.5, 22], [24.5, 30], [26.5, 41], [28.5, 39], [30, 22]]
    },
    {
      name: "MedicalPress Wordpress Theme",
      data: [[1, 31], [2, 32], [4, 30], [6, 24], [8, 19], [10, 18], [12, 18], [14, 19], [16.5, 21], [18.5, 30], [20.5, 39], [22.5, 35], [24.5, 26], [26.5, 21], [28.5, 18], [30, 17]]
    }
    ],
    colors: ['#009efb', '#55ce63'],
    chart: {
      height: 180,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      }
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      min: 1,
      max: 30
    },
    yaxis: {
      min: 0,
      max: 50
    },
  };

  var sales_comparison = new ApexCharts(document.querySelector("#chart"), options_sales_comparison);
  sales_comparison.render();

// ============================================================== 
// Sales of the Month
// ============================================================== 

var options_sales_of_the_month = {
    series: [15, 50, 20, 15],
    labels: ['Organic', 'Other', 'Marketing', 'Search Engine'],
    chart: {
    width: 350,
    type: 'donut',
  },

  plotOptions: {
    pie: {
        expandOnClick: true,
        donut: {
            size: '87',
            labels: {
                show: false,
                name: {
                    show: true,
                    offsetY: 7,

                },
                value: {
                    show: false,
                },
                total: {
                    show: false,
                    color: '#525c65',
                    fontSize: '30px',
                    fontFamily: 'Rubik, sans-serif',
                }
            },
        },
    },
  },

  fill: {
    colors: ['#745af2', '#edf1f5', '#009efb', '#55ce63'],
  },

  dataLabels: {
    enabled: false
  },

  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],

  legend: {
    show: false
  }
  };

  var sales_of_the_month = new ApexCharts(document.querySelector("#sale-of-the-month-chart"), options_sales_of_the_month);
  sales_of_the_month.render();


// ============================================================== 
//  Income of the Year
// ============================================================== 

  var options_income_of_the_year = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }],
    chart: {
    type: 'bar',
    height: 305,
    offsetY: 0,
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  colors: ['#009efb', '#55ce63'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart_income_of_the_year = new ApexCharts(document.querySelector("#income-of-the-year"), options_income_of_the_year);
  chart_income_of_the_year.render();
