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
    <div className="text-center border-t pt-8">
      <div className="prose mx-auto max-w-none">
        <Markdown>{mainContent}</Markdown>
      </div>
      
      {hashtags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-gray-600">
          {hashtags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full">#{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}