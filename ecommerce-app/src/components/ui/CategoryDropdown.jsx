
// import { useState } from "react";

// const CATEGORIES = [
//   {
//     value: "",
//     label: "All Categories",
//     image: "https://cdn-icons-png.flaticon.com/512/709/709496.png"
//   },
//   {
//     value: "electronics",
//     label: "Electronics",
//     image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
//   },
//   {
//     value: "jewelery",
//     label: "Jewelery",
//     image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
//   },
//   {
//     value: "men's clothing",
//     label: "Men's Clothing",
//     image: "https://cdn-icons-png.flaticon.com/512/892/892458.png"
//   },
//   {
//     value: "women's clothing",
//     label: "Women's Clothing",
//     image: "https://cdn-icons-png.flaticon.com/512/892/892462.png"
//   }
// ];

// export default function CategoryDropdown({ value, onChange, placeholder }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const selected =
//     CATEGORIES.find((cat) => cat.value === value) || CATEGORIES[0];

//   return (
//     <div className="relative">
//       {/* Button (selected item) */}
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex items-center justify-between border border-gray-300 rounded-md p-2 bg-white"
//       >
//         <div className="flex items-center gap-2">
//           <img
//             src={selected.image}
//             alt={selected.label}
//             className="h-6 w-6 object-contain"
//           />
//           <span>{selected.label || placeholder}</span>
//         </div>
//         <span className="text-gray-500">▼</span>
//       </button>

//       {/* Dropdown menu */}
//       {isOpen && (
//         <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
//           {CATEGORIES.map((cat) => (
//             <li
//               key={cat.value}
//               onClick={() => {
//                 onChange(cat.value);
//                 setIsOpen(false);
//               }}
//               className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 ${
//                 value === cat.value ? "bg-gray-200" : ""
//               }`}
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.label}
//                 className="h-6 w-6 object-contain"
//               />
//               <span>{cat.label}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
