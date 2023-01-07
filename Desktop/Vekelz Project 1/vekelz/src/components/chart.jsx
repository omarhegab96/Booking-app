import React, { Component } from "react";
import PropTypes from "prop-types";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themesAnimated from "@amcharts/amcharts4/themes/animated";
import _ from "lodash";

export class BarChart extends Component {
  static propTypes = {
    chartId: PropTypes.string.isRequired,
    categoryLabel: PropTypes.string.isRequired,
    valueLabel: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
    rtl: PropTypes.bool,
  };

  static defaultProps = {
    rtl: false,
  };

  componentDidMount() {
    this.initChart();
  }

  componentDidUpdate(prevProps) {
    //Handle refreshing the chart when the dataset changes
    if (!_.isEqual(prevProps.data, this.props.data)) {
      if (this.chart._super) {
        this.chart.dispose();
      }
      this.initChart();
    }
  }

  componentWillUnmount() {
    if (this.chart._super) {
      this.chart.dispose();
    }
  }

  initChart() {
    //All of our work goes here now
    const { chartId } = this.props;
    am4core.useTheme(am4themesAnimated);
    this.chart = am4core.create(chartId, am4charts.XYChart);
  }

  render() {
    const { chartId, data, categoryLabel, valueLabel } = this.props;
    let formattedData = [];

    //construct category axis
    const categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = categoryLabel;

    //construct value axis
    const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

    //format data
    data.forEach((lineSeries) => {
      const name = lineSeries.groupName;
      lineSeries.data.forEach((dataRow) => {
        const result = {};
        result[categoryLabel] = dataRow.label;
        result[name] = dataRow.value;

        formattedData.push(result);
      });

      // Create data series
      const series = this.chart.series.push(new am4charts.ColumnSeries());

      series.dataFields.categoryX = categoryLabel;
      series.dataFields.valueY = name;
      series.name = name;
    });
    return <div id={this.props.chartId} className="graph" />;
  }
}
