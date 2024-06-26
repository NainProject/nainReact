// src/components/SubscriptionChart.jsx
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { getSubscription } from "../../../api/statisticalAxios";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const SubscriptionChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Subscribers", "Non-Subscribers"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["rgba(54, 162, 235, 0.4)", "rgba(255, 99, 132, 0.4)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchSubscriptionData = async () => {
      try {
        const response = await getSubscription();
        const totalMembers = response.map((item) => item.memberCount);
        const subscribers = response.map((item) => item.subscriptionCount);
        const nonSubscribers = totalMembers - subscribers;

        setChartData({
          labels: ["Subscribers", "Non-Subscribers"],
          datasets: [
            {
              data: [subscribers, nonSubscribers],
              backgroundColor: [
                "rgba(54, 162, 235, 0.4)",
                "rgba(255, 99, 132, 0.4)",
              ],
              borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching subscription data:", error);
      }
    };

    fetchSubscriptionData();
  }, []);

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "구독비율",
            },
          },
        }}
      />
    </div>
  );
};

export default SubscriptionChart;
