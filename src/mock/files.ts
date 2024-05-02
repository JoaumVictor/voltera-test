export interface fileProps {
  id: string;
  title: string;
  documentPath: string;
}

export const files: fileProps[] = [
  {
    id: "file-id-1",
    title: "Markdown",
    documentPath: "/mock/markdown.md",
  },
  {
    id: "file-id-2",
    title: "América",
    documentPath: "/mock/america.md",
  },
  {
    id: "file-id-3",
    title: "Tipografia",
    documentPath: "/mock/tipografia.md",
  },
];
