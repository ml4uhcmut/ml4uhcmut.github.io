import Markdown from 'react-markdown';

interface RecruitFooterProps {
  content?: string;
}

export default function RecruitFooter({ content }: RecruitFooterProps) {
  // Parse hashtags from the content
  const hashtags: string[] = [];
  let mainContent = content || '';
  
  if (content) {
    // Extract lines that start with hashtags
    const hashtagRegex = /#[a-zA-Z0-9]+/g;
    const matches = content.match(hashtagRegex);
    
    if (matches) {
      // Extract hashtags
      hashtags.push(...matches.map(tag => tag.replace('#', '')));
      
      // Remove the line with hashtags from the main content if it's just hashtags
      const lines = content.split('\n');
      const contentLines = lines.filter(line => {
        const words = line.trim().split(' ');
        const isOnlyHashtags = words.every(word => word.startsWith('#') || word === '');
        return !isOnlyHashtags;
      });
      
      mainContent = contentLines.join('\n');
    }
  }

  return (
    <footer className="text-center">
      <div className="prose prose-slate mx-auto max-w-none prose-a:font-semibold prose-a:text-blue-600">
        <Markdown>{mainContent}</Markdown>
      </div>
      
      {hashtags.length > 0 && (
        <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-semibold text-slate-500">
          {hashtags.map((tag, idx) => (
            <span key={idx} className="rounded-full border border-slate-200 bg-white px-3 py-1.5">#{tag}</span>
          ))}
        </div>
      )}
    </footer>
  );
}
