import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home page" },
        {   name: "Description", 
            content: "Home - Welcome to React Router!" 
        },
    ];
}
export default function Home() {
    return (
        <section className="home">
            <h1 className="text-3xl font-bold underline">
                Welcome to the homepage
            </h1>
        </section>
    )
}
// import { Suspense, useState } from 'react';
// Header Component

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