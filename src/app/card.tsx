import React, { useState } from "react";
import { Factory, Leaf, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Replace with your actual icon import

export const CarbonFootprintCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Clickable Card */}
      <div
        className="cursor-pointer hover:scale-105 transition-transform"
        onClick={openModal}
      >
        <Card className="hover:scale-105 transition-transform border-orange-500 dark:border-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Factory className="h-6 w-6 mr-2 text-orange-500" />
              Carbon Footprint
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Coal mines in India contribute significantly to the country's
              carbon footprint, releasing methane, a potent greenhouse gas.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white dark:bg-black rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white border-b-2 border-orange-500 pb-2">
              🌏 Carbon Footprint Information
            </h2>
            <p className="mb-6 text-black dark:text-white leading-relaxed text-lg">
              Coal mining is a significant contributor to greenhouse gas
              emissions in India. The extraction and processing of coal release
              large amounts of methane, a greenhouse gas that is
              <span className="font-semibold text-red-600"> 28 times</span> more
              potent than carbon dioxide. Methane emissions fuel global warming
              and climate change, intensifying environmental challenges such as:
            </p>
            <ul className="mb-6 list-disc list-inside text-black dark:text-white">
              <li>🌡️ Rising global temperatures.</li>
              <li>🌊 Increasing sea levels threatening coastal regions.</li>
              <li>🌪️ Frequent extreme weather events.</li>
              <li>🌿 Loss of biodiversity and habitats.</li>
            </ul>
            <p className="mb-6 text-black dark:text-white leading-relaxed text-lg">
              However,{" "}
              <span className="text-orange-500 font-bold">there's hope</span>.
              Efforts to mitigate the carbon footprint include:
            </p>
            <ul className="mb-6 list-decimal list-inside text-black dark:text-white">
              <li>
                🌱 Implementing methane capture technologies to reuse waste
                emissions effectively.
              </li>
              <li>
                ☀️ Transitioning to renewable energy sources like solar and wind
                power.
              </li>
              <li>
                📜 Enforcing stricter environmental policies to curb harmful
                practices.
              </li>
              <li>🤝 Encouraging global cooperation to meet climate goals.</li>
            </ul>
            <p className="mb-6 text-black dark:text-white leading-relaxed text-lg">
              Together, we can reduce the impact of coal mining on the
              environment and build a sustainable future for the next
              generations. Every action counts in protecting our planet! 🌍
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export const CarbonNeutralityCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Clickable Card */}
      <div
        className="cursor-pointer hover:scale-105 transition-transform"
        onClick={openModal}
      >
        <Card className="hover:scale-105 transition-transform border-green-500 dark:border-green-500">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="h-6 w-6 mr-2 text-green-500" />
              Carbon Neutrality
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Achieving carbon neutrality involves clean technologies, energy
              efficiency, and investing in carbon offset projects like
              reforestation.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white dark:bg-black rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white border-b-2 border-green-500 pb-2">
              ⚖️ Carbon Neutrality Information
            </h2>
            <p className="mb-6 text-black dark:text-white leading-relaxed text-lg">
              Carbon neutrality, also known as **net-zero emissions**, refers to
              balancing the amount of greenhouse gases emitted with an
              equivalent amount removed from the atmosphere. Achieving carbon
              neutrality is essential in combating climate change and ensuring a
              sustainable future.
            </p>
            <ul className="mb-6 list-disc list-inside text-black dark:text-white">
              <li>
                🌱 Reducing greenhouse gas emissions from industries,
                transportation, and agriculture.
              </li>
              <li>🌳 Increasing forestation to absorb carbon dioxide.</li>
              <li>
                🔋 Investing in energy-efficient technologies and clean energy
                sources.
              </li>
              <li>
                🤝 Promoting international collaboration to achieve global
                net-zero goals.
              </li>
            </ul>
            <p className="mb-6 text-black dark:text-white leading-relaxed text-lg">
              <span className="text-green-600 font-bold">
                Why is it important?
              </span>{" "}
              Carbon neutrality helps to:
            </p>
            <ul className="mb-6 list-decimal list-inside text-black dark:text-white">
              <li>
                🌡️ Limit global warming to 1.5°C, as recommended by climate
                scientists.
              </li>
              <li>
                🌊 Reduce the risks of rising sea levels and extreme weather
                events.
              </li>
              <li>🌿 Protect biodiversity and natural ecosystems.</li>
              <li>
                💼 Foster innovation and create sustainable economic
                opportunities.
              </li>
            </ul>
            <p className="mb-6 text-black dark:text-white leading-relaxed text-lg">
              Achieving carbon neutrality requires collective effort.
              Governments, businesses, and individuals must work together to
              reduce emissions, adopt renewable energy, and invest in
              sustainable practices. Every action we take moves us closer to a
              carbon-neutral world. 🌏
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export const MitigationStrategiesCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Clickable Card */}
      <div
        className="cursor-pointer hover:scale-105 transition-transform"
        onClick={openModal}
      >
        <Card className="hover:scale-105 transition-transform border-blue-500 dark:border-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Truck className="h-6 w-6 mr-2 text-blue-500" />
              Mitigation Strategies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Strategies include methane capture, energy-efficient equipment,
              optimized transportation,land reclamation,and Switching to renewable energy sources.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          {/* Modal Content */}
          <div className="bg-white dark:bg-black rounded-lg shadow-lg max-w-3xl w-full p-6 relative ">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white border-b-2 border-blue-500 pb-2">
              🛠️ Mitigation Strategies
            </h2>
            <p className="mb-6 text-black dark:text-white leading-relaxed text-lg">
              Mitigation strategies are actions and approaches designed to
              reduce the adverse effects of climate change. These strategies
              focus on decreasing greenhouse gas emissions and enhancing the
              planet's ability to absorb carbon dioxide, ensuring a sustainable
              and resilient future.
            </p>
            <ul className="mb-6 list-disc list-inside text-black dark:text-white">
              <li>
                🌱 Transitioning to renewable energy sources like solar, wind,
                and hydro power.
              </li>
              <li>
                🚗 Promoting energy-efficient transportation and widespread use
                of electric vehicles.
              </li>
              <li>
                🏭 Retrofitting industries with clean and efficient
                technologies.
              </li>
              <li>
                🌳 Preserving and expanding forests to act as natural carbon
                sinks.
              </li>
            </ul>
            <p className="mb-6 text-black dark:text-white leading-relaxed text-lg">
              <span className="text-blue-600 font-bold">
                Why is mitigation essential?
              </span>
              Effective mitigation strategies help to:
            </p>
            <ul className="mb-6 list-decimal list-inside text-black dark:text-white">
              <li>
                🌡️ Slow the pace of global warming and maintain a stable
                climate.
              </li>
              <li>
                🌊 Protect vulnerable communities from rising sea levels and
                flooding.
              </li>
              <li>
                🌿 Safeguard ecosystems and biodiversity for future generations.
              </li>
              <li>
                💼 Drive innovation, economic growth, and job creation in
                sustainable sectors.
              </li>
            </ul>
            <p className="mb-6 text-black dark:text-white leading-relaxed text-lg">
              Implementing these strategies requires collaboration at local,
              national, and global levels. By adopting proactive measures today,
              we can minimize the risks of tomorrow and build a healthier, more
              sustainable planet. 🌍
            </p>
          </div>
        </div>
      )}
    </>
  );
};
