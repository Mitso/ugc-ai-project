export interface ContentItem {
    id: string;
    title: string;
    excerpt: string;
    status: string; //"draft" | "published" | "scheduled"
    publishDate: string;
    thumbnail: string;
}

export interface ContentDashboardProps {
    contentItems?: ContentItem[];
    onCreateContent?: () => void;
    onEditContent?: (id: string) => void;
    onDeleteContent?: (id: string) => void;
}


