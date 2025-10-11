import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatCurrencyFromString } from "../utils/helper";

export default function LiveTokenWithWeeklyHistory() {
  // Helper: generate mock data for 7 days (every 2 hours)
  const generateWeekData = () => {
    const now = Date.now();
    const points = [];
    let price = 15000;
    for (let i = 7 * 12; i >= 0; i--) {
      const timestamp = new Date(now - i * 2 * 60 * 60 * 1000);
      const change = Math.random() * 2 - 1; // -1% to +1%
      price = parseFloat((price * (1 + change / 100)).toFixed(2));
      points.push({ time: timestamp.toLocaleString(), value: price });
    }
    return points;
  };

  const [data, setData] = useState(generateWeekData());
  const [price, setPrice] = useState(data[data.length - 1].value);
  const [change, setChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = (Math.random() * 2 - 1).toFixed(2); // -1% to +1%
      const newPrice = parseFloat(
        (price * (1 + randomChange / 100)).toFixed(2)
      );
      const newPoint = {
        time: new Date().toLocaleString(),
        value: newPrice,
      };

      setData((prev) => [...prev, newPoint]);
      setPrice(newPrice);
      setChange(randomChange);
    }, 3000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl w-[600px] space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">KITSUNE / IDR</div>
          <div className="text-3xl font-bold">Rp {price}</div>
        </div>
        <div
          className={`text-sm font-medium ${
            change >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {change >= 0 ? "+" : ""}
          {change}%
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis hide domain={["auto", "auto"]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              border: "none",
              color: "#fff",
            }}
            labelStyle={{ color: "#aaa" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={change >= 0 ? "#22c55e" : "#ef4444"}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* History List */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">
          Price History (Past Week)
        </h3>
        <div className="max-h-48 overflow-y-auto text-sm space-y-1">
          {[...data]
            .slice(-100) // limit display to last 100 points
            .reverse()
            .map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between border-b border-gray-800 pb-1"
              >
                <span className="text-gray-400">{item.time}</span>
                <span>
                  Rp {formatCurrencyFromString(item.value.toFixed(2))}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
