import Link from "next/link";
import type { ArticleBlock } from "@/types/blog";

function InlineContent({ text }: { text: string }) {
  const parts = text.split(/(<a href="[^"]+">.*?<\/a>)/g);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^<a href="([^"]+)">(.+)<\/a>$/);
        if (match) {
          return <Link key={index} href={match[1]}>{match[2]}</Link>;
        }
        return part;
      })}
    </>
  );
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-prose">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return <h2 id={block.id} key={`${block.id}-${index}`}>{block.text}</h2>;
        }
        if (block.type === "list") {
          return (
            <ul key={`list-${index}`}>
              {block.items.map((item) => <li key={item}><InlineContent text={item} /></li>)}
            </ul>
          );
        }
        return <p key={`paragraph-${index}`}><InlineContent text={block.text} /></p>;
      })}
    </div>
  );
}
