import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#4F46E5", "#22C55E", "#EC4899", "#FBBF24"];

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
];

const CustomBarChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales by Channel</h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart
            data={SALES_CHANNEL_DATA}
            layout="vertical" // Cambia el diseño a gráfico de barras verticales
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis type="number" stroke="#9CA3AF" />
            <YAxis type="category" dataKey="name" stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]} // Bordes redondeados en las esquinas superiores
            >
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CustomBarChart;
