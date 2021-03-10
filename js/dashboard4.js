$(function () {
  "use strict";
// ==============================================================
// Total sales
// ==============================================================

var total_sales_options = {
    series: [{
    name: 'PRODUCT A',
    data: [54, 44, 56, 35, 123, 56, 124, 75, 106, 85, 124, 54],
  }, {
    name: 'PRODUCT B',
    data: [44, 87, 72, 42, 53, 31, 32, 29, 79, 83, 50, 31],
  }, {
    name: 'PRODUCT C',
    data: [22, 107, 30, 95, 53, 20, 20, 46, 78, 31, 54, 20],
  }],
    chart: {
    type: 'bar',
    height: 280,
    width: '100%',
    stacked: true,
    offsetX: -7,
    offsetY: 0,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true
    }
  },
  colors: ["#0f8edd", "#11a0f8", "#51bdff",],
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0,
      }
    }
  }],
  plotOptions: {
    bar: {
      columnWidth: "50%",
      borderRadius: 8,
      horizontal: false,
      dataLabels: {
        position: 'top',
      }
      
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
  },
  xaxis: {
    type: 'category',
    categories: ['Jan', 'Feb', 'Mar', 'Apr',
      'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40,
    show:false,
  },
  fill: {
    opacity: 1
  },
  max:124,
  };

  var total_sales_chart = new ApexCharts(document.querySelector("#total-sales"), total_sales_options);
  total_sales_chart.render();

// ============================================================== 
// Sales Difference
// ============================================================== 
var options_sales_difference = {
    series: [50, 10, 40],
    chart: {
      width: 160,
      type: 'donut',
      offsetX: 0,
    },
    fill: {
      colors: ['#009efb', '#55ce63', '#edf1f5'],
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        }
      }
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
      position: 'right',
      offsetY: 0,
      height: 0,
      width: 0,
      show: false,
    }
  };

  var sales_difference = new ApexCharts(document.querySelector("#sale-diff-chart"), options_sales_difference);
  sales_difference.render();


// ============================================================== 
// Sales Prediction
// ============================================================== 

var options_sales_prediction = {
    series: [100],
    chart: {
    width: 200,
    type: 'radialBar',
    offsetY: -20,
    offsetX: 0,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: '45%',
      },
      
      track: {
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: '#745af2',
          opacity: 1,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: -2,
          fontSize: '22px',
          show:false,
        }
      }
    }
  },
  grid: {
    padding: {
      top: -10
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      colorStops: [
        {
          offset: 0,
          color: "#745af2",
          opacity: 1
        },
        {
          offset: 60,
          color: "#9e8afe",
          opacity: 1
        },
      ],
      type: 'horizontal',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 80, 100]
    },
  },
  labels: ['Average Results'],
  };
  
  var sales_prediction = new ApexCharts(document.querySelector("#sales-prediction"), options_sales_prediction);
  sales_prediction.render();


  jQuery("#visitfromworld").vectorMap({
    map: "world_mill_en",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderOpacity: 0.9,
    borderWidth: 1,
    zoomOnScroll: false,
    color: "#ddd",
    regionStyle: {
      initial: {
        fill: "rgba(0,0,0,0.1)",
      },
    },
    markerStyle: {
      initial: {
        r: 8,
        fill: "#55ce63",
        "fill-opacity": 1,
        stroke: "#000",
        "stroke-width": 0,
        "stroke-opacity": 1,
      },
    },
    enableZoom: true,
    hoverColor: "#79e580",
    markers: [
      {
        latLng: [21.0, 78.0],
        name: "India : 9347",
        style: { fill: "#55ce63" },
      },
      {
        latLng: [-33.0, 151.0],
        name: "Australia : 250",
        style: { fill: "#02b0c3" },
      },
      {
        latLng: [36.77, -119.41],
        name: "USA : 250",
        style: { fill: "#11a0f8" },
      },
      {
        latLng: [55.37, -3.41],
        name: "UK   : 250",
        style: { fill: "#745af2" },
      },
      {
        latLng: [25.2, 55.27],
        name: "UAE : 250",
        style: { fill: "#ffbc34" },
      },
    ],
    hoverOpacity: null,
    normalizeFunction: "linear",
    scaleColors: ["#fff", "#ccc"],
    selectedColor: "#c9dfaf",
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function (element, code, region) {
      var message =
        'You clicked "' +
        region +
        '" which has the code: ' +
        code.toUpperCase();
      alert(message);
    },
  });
  
});