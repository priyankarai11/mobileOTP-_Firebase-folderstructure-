/** @format */

import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

Highcharts.setOptions({
  colors: ["#FFA600", "#003F5C", "#58508D", "#BC5090", "#FF6361"],
});

function PieChartLib({ pieSize, pieInnerSize, data }) {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "pie",
    },
    credits: {
      enabled: false,
    },

    plotOptions: {
      // radius: "100%",
      // innerRadius: "100%",
      pie: {
        allowPointSelect: true,
        borderWidth: 8,

        dataLabels: {
          connectorShape: "crookedLine",
          crookDistance: "70%",
          connectorColor: "#CDCDCD",
          distance: 45,
          format: "<b>{point.y}</b>%<br />{point.name}",
          style: {
            fontSize: "13px",
            fontWeight: 400,
            textOverflow: "clip",
            fontFamily: "Inter, sans-serif",
            // color: "#FF703B",
          },
        },
      },
      series: {
        cursor: "pointer",
        states: {
          hover: {
            enabled: false,
          },
          inactive: {
            opacity: 1,
          },
        },
      },
    },
    title: {
      text: "Your Activity",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: 700,
        fontFamily: "Inter, sans-serif",
        color: "#252F40",
      },
    },
    tooltip: {
      enabled: true,
    },
  });

  useEffect(() => {
    setChartOptions({
      plotOptions: {
        pie: {
          size: pieSize,
          innerSize: pieInnerSize,
        },
      },
      series: [{ data }],
    });
  }, [pieSize, pieInnerSize, data]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      containerProps={{ style: { width: "100%", height: "100%" } }}
      options={chartOptions}
    />
  );
}

export { PieChartLib };
