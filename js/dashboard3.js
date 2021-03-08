// ==============================================================
// Total Visits
// ==============================================================

var total_visit_options = {
  series: [
    {
      name: "Inflation",
      data: [52, 63, 55, 45, 40, 50],
    },
  ],
  chart: {
    height: 70,
    width: 65,
    offsetX: -2,
    offsetY: -5,
    sparkline: {
      enabled: true,
    },
    type: "bar",
  },
  fill: {
    colors: ['#009efb'],
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
    max: 63,
  },
};

var total_visit_chart = new ApexCharts(
  document.querySelector("#total-visit"),
  total_visit_options
);
total_visit_chart.render();

// ==============================================================
// Total Page Views
// ==============================================================

var total_page_views_options = {
  series: [
    {
      name: "Inflation",
      data: [52, 63, 55, 45, 40, 50],
    },
  ],
  chart: {
    height: 70,
    width: 70,
    offsetX: -3,
    offsetY: -5,
    sparkline: {
      enabled: true,
    },
    type: "bar",
  },
  fill: {
    colors: ['#55ce63'],
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
    max: 63,
  },
};

var total_page_views_chart = new ApexCharts(
  document.querySelector("#total-page-views"),
  total_page_views_options
);
total_page_views_chart.render();


// ==============================================================
// Unique Visits
// ==============================================================

var unique_visits_options = {
  series: [
    {
      name: "Inflation",
      data: [52, 63, 55, 45, 40, 50],
    },
  ],
  chart: {
    height: 70,
    width: 70,
    offsetX: -5,
    offsetY: -5,
    sparkline: {
      enabled: true,
    },
    type: "bar",
  },
  fill: {
    colors: ['#ffbc34'],
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
    max: 63,
  },
};

var unique_visits_chart = new ApexCharts(
  document.querySelector("#unique-visits"),
  unique_visits_options
);
unique_visits_chart.render();


// ==============================================================
// Bounce Rate
// ==============================================================

var bounce_rate_options = {
  series: [
    {
      name: "Inflation",
      data: [52, 63, 55, 45, 40, 50],
    },
  ],
  chart: {
    height: 70,
    width: 70,
    offsetX: -5,
    offsetY: -5,
    sparkline: {
      enabled: true,
    },
    type: "bar",
  },
  fill: {
    colors: ['#745af2'],
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
    max: 63,
  },
};

var bounce_rate_chart = new ApexCharts(
  document.querySelector("#bounce-rate"),
  bounce_rate_options
);
bounce_rate_chart.render();


// ==============================================================
// Total Revenue
// ==============================================================

var total_revenue_options = {
  series: [{
  name: 'series1',
  data: [[0,800], [7,1500],[10,2000],[18, 900],[23,1500],[28,2100]],
}, {
  name: 'series2',
  data: [[0,3000],[7,1500],[14,1200],[20,2700],[23,1500],[28,900]],
}],
  chart: {
    toolbar: {
      show: false,
    },
    height: 280,
    type: 'area'
},
legend: {
  show: false,
},
colors:['#33b2fb', '#59cf67'],
fill: {
  colors: ['#f5fcfd', '#f6fbff'],
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var total_revenue_chart = new ApexCharts(document.querySelector("#total-revenue"), total_revenue_options);
total_revenue_chart.render();