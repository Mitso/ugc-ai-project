import React, { useState } from "react";
import CMSHeader from "./cms/CMSHeader";
import ContentDashboard from "./cms/ContentDashboard";
import ContentEditor from "./cms/ContentEditor";

const Home = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentContentId, setCurrentContentId] = useState("");
  const [editorMode, setEditorMode] = useState<"create" | "edit">("create");

  // Sample content items for the dashboard
  const contentItems = [
    {
      id: "1",
      title: "Getting Started with Content Creation",
      excerpt:
        "Learn the basics of creating engaging content that resonates with your audience and drives engagement.",
      status: "published" as const,
      publishDate: "2023-05-10T14:30:00",
      thumbnail:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80",
    },
    {
      id: "2",
      title: "10 Tips for Better Engagement",
      excerpt:
        "Discover proven strategies to increase engagement with your content and build a loyal following.",
      status: "draft" as const,
      publishDate: "2023-06-15T10:00:00",
      thumbnail:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80",
    },
    {
      id: "3",
      title: "Content Marketing Strategies for 2023",
      excerpt:
        "Stay ahead of the curve with these cutting-edge content marketing strategies for the coming year.",
      status: "scheduled" as const,
      publishDate: "2023-07-22T09:15:00",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    },
    {
      id: "4",
      title: "The Art of Storytelling in Digital Media",
      excerpt:
        "Master the art of storytelling to create compelling narratives that captivate your audience.",
      status: "published" as const,
      publishDate: "2023-04-05T11:45:00",
      thumbnail:
        "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=400&q=80",
    },
    {
      id: "5",
      title: "SEO Fundamentals for Content Creators",
      excerpt:
        "Learn essential SEO techniques to ensure your content reaches the right audience and ranks well in search results.",
      status: "draft" as const,
      publishDate: "2023-06-30T16:20:00",
      thumbnail:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=80",
    },
    {
      id: "6",
      title: "Visual Content Creation Guide",
      excerpt:
        "Explore best practices for creating stunning visual content that complements your written material.",
      status: "scheduled" as const,
      publishDate: "2023-08-12T13:10:00",
      thumbnail:
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&q=80",
    },
  ];

  // Handle creating new content
  const handleCreateContent = () => {
    setEditorMode("create");
    setCurrentContentId("");
    setIsEditorOpen(true);
  };

  // Handle editing existing content
  const handleEditContent = (id: string) => {
    setEditorMode("edit");
    setCurrentContentId(id);
    setIsEditorOpen(true);
  };

  // Handle deleting content
  const handleDeleteContent = (id: string) => {
    // In a real implementation, this would delete the content from the database
    console.log(`Deleting content with ID: ${id}`);
  };

  // Handle closing the editor
  const handleCloseEditor = () => {
    setIsEditorOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <CMSHeader onCreateContent={handleCreateContent} />

      <main className="flex-1 flex flex-col overflow-hidden">
        <ContentDashboard
          contentItems={contentItems}
          onCreateContent={handleCreateContent}
          onEditContent={handleEditContent}
          onDeleteContent={handleDeleteContent}
        />
      </main>

      {/* Content Editor */}
      <ContentEditor
        isOpen={isEditorOpen}
        onClose={handleCloseEditor}
        contentId={currentContentId}
        mode={editorMode}
        initialContent={
          editorMode === "edit"
            ? "This is some sample content for editing."
            : ""
        }
        initialTitle={
          editorMode === "edit"
            ? contentItems.find((item) => item.id === currentContentId)
                ?.title || ""
            : ""
        }
        initialTags={[
          { id: "1", name: "Technology" },
          { id: "2", name: "Content" },
        ]}
      />
    </div>
  );
};

export default Home;
