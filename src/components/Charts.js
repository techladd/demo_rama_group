import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const DonutChart = ({ value = 40 }) => {
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Completed', 'Unfinished'],
    plotOptions: {
      pie: {
        donut: {
          size: '65%', // Adjust the size of the donut hole
        },
      },
    },
    colors: ['#BCEB00', '#DEDEDE'],
  }

  const chartSeries = [value, 100 - value] // Example data

  return (
    <ApexChart
      options={chartOptions}
      series={chartSeries}
      type="donut"
      height="300" // Adjust the height of the chart
    />
  )
}

export default DonutChart
