// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { BarChart as BarChartIcon, PieChart as PieChartIcon, LineChart as LineChartIcon } from "lucide-react"
// import Link from "next/link"
// import { useEffect, useRef } from "react"
// import Chart from "chart.js/auto"

// export default function HomePage() {
//   const pieChartRef = useRef(null)
//   const lineChartRef = useRef(null)
//   const barChartRef = useRef(null)

//   useEffect(() => {
//     // Pie Chart - Emissions by Region
//     const pieChartCtx = pieChartRef.current.getContext("2d")
//     new Chart(pieChartCtx, {
//       type: "pie",
//       data: {
//         labels: ["Jharkhand", "Odisha", "Chhattisgarh", "West Bengal", "Madhya Pradesh", "Others"],
//         datasets: [{
//           data: [30, 25, 20, 10, 10, 5],
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.8)",
//             "rgba(54, 162, 235, 0.8)",
//             "rgba(255, 206, 86, 0.8)",
//             "rgba(75, 192, 192, 0.8)",
//             "rgba(153, 102, 255, 0.8)",
//             "rgba(255, 159, 64, 0.8)"
//           ],
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "bottom",
//           },
//           title: {
//             display: true,
//             text: "Emissions by Region (%)"
//           }
//         }
//       }
//     })

//     // Line Chart - Annual Emissions Trend
//     const lineChartCtx = lineChartRef.current.getContext("2d")
//     new Chart(lineChartCtx, {
//       type: "line",
//       data: {
//         labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
//         datasets: [{
//           label: "CO2 Emissions (Million Tonnes)",
//           data: [925, 940, 955, 970, 985, 960],
//           borderColor: "rgb(75, 192, 192)",
//           tension: 0.1
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "bottom",
//           },
//           title: {
//             display: true,
//             text: "Annual CO2 Emissions Trend"
//           }
//         }
//       }
//     })

//     // Bar Chart - Emission Sources
//     const barChartCtx = barChartRef.current.getContext("2d")
//     new Chart(barChartCtx, {
//       type: "bar",
//       data: {
//         labels: ["Coal Extraction", "Processing", "Transportation", "Methane Emissions", "Energy Use"],
//         datasets: [{
//           label: "CO2 Equivalent (Million Tonnes)",
//           data: [400, 250, 150, 100, 60],
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.8)",
//             "rgba(54, 162, 235, 0.8)",
//             "rgba(255, 206, 86, 0.8)",
//             "rgba(75, 192, 192, 0.8)",
//             "rgba(153, 102, 255, 0.8)"
//           ],
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "bottom",
//           },
//           title: {
//             display: true,
//             text: "Emission Sources"
//           }
//         }
//       }
//     })
//   }, [])

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <BarChartIcon className="h-6 w-6" />
//           <span className="ml-2 text-lg font-bold">CarbonTrack India</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             About
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Initiatives
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Contact
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                   Carbon Footprint & Neutrality
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
//                   Tracking and reducing carbon emissions in India's coal mines for a sustainable future.
//                 </p>
//               </div>
//               <Button className="bg-white text-black hover:bg-gray-200" size="lg">
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
//               Carbon Footprint Visualizations
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                   <CardTitle className="text-sm font-medium">Emissions by Region</CardTitle>
//                   <PieChartIcon className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">Regional Data</div>
//                   <div className="h-[200px] w-full">
//                     <canvas ref={pieChartRef}></canvas>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                   <CardTitle className="text-sm font-medium">Annual Emissions Trend</CardTitle>
//                   <LineChartIcon className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">Yearly Trend</div>
//                   <div className="h-[200px] w-full">
//                     <canvas ref={lineChartRef}></canvas>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                   <CardTitle className="text-sm font-medium">Emission Sources</CardTitle>
//                   <BarChartIcon className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">Source Breakdown</div>
//                   <div className="h-[200px] w-full">
//                     <canvas ref={barChartRef}></canvas>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
//               <div className="space-y-4">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Carbon Footprint</h2>
//                 <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   The carbon footprint of India's coal mines is significant, contributing to the country's overall
//                   greenhouse gas emissions. It includes direct emissions from coal extraction and processing, as well as
//                   indirect emissions from energy use in mining operations. As shown in our charts, the total emissions
//                   have been rising steadily, with major contributions from states like Jharkhand and Odisha.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Carbon Neutrality</h2>
//                 <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Achieving carbon neutrality in coal mines involves implementing strategies to reduce emissions and
//                   offset remaining emissions. This can include improving energy efficiency, adopting renewable energy
//                   sources, and investing in carbon capture and storage technologies. Our data shows that the main sources
//                   of emissions are coal extraction and processing, indicating areas where mitigation efforts should be focused.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Join the Movement Towards Sustainability
//                 </h2>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Be part of the solution. Learn more about how we can work together to reduce the carbon footprint of
//                   India's coal mines and move towards a more sustainable future. Our data shows the challenge, but also
//                   the opportunity for significant impact.
//                 </p>
//               </div>
//               <Button size="lg">Get Started</Button>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500">© 2023 CarbonTrack India. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }