import React, { useState } from 'react';
import Header from './header/Header';

import { articleContent } from '../api/index';

import ContentDashboard from "./cms/ContentDashboard";
import ContentEditor from "./cms/ContentEditor";


const Home = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentContentId, setCurrentContentId] = useState("");
  const [editorMode, setEditorMode] = useState<"create" | "edit">("create");

  // Sample content items for the dashboard
  const contentItems = articleContent?.data;

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
      <Header onCreateContent={handleCreateContent} />

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
