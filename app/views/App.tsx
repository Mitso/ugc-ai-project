import type { Route } from "./+types/App";
import { Outlet } from "react-router";
// import { Suspense, useState } from 'react';
// Header Component
// import Header from './components/header/Header';
//Page Components
// import Home from "./views/Home";
// import About from "./views/About";
// import Blog from "./views/Blog";
// function App() {
//   /* State Management */
//   const [isEditorOpen, setIsEditorOpen] = useState(false);
//   const [currentContentId, setCurrentContentId] = useState("");
//   const [editorMode, setEditorMode] = useState<"create" | "edit">("create");

//   // Handle creating new content
//   const handleCreateContent = () => {
//     setEditorMode("create");
//     setCurrentContentId("");
//     setIsEditorOpen(true);
//   };

//   /* Render: HTML + dynamic Hydrated JS */
//   return (
//     <Suspense fallback={<p className="paragraph">Loading...</p>}>
//       <>
//         <Header onCreateContent={handleCreateContent} ></Header>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about-us" element={<About />} />
//           <Route path="/blog" element={<Blog />} />
//         </Routes>
//       </>
//     </Suspense>
//   );
// }

export default function App() {
  return <Outlet />;
}