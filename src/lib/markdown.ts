import { marked } from 'marked';
import hljs from 'highlight.js';

marked.use({
  renderer: {
    code(token: any) {
      const { text, lang } = token;
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre><code class="hljs ${lang}">${hljs.highlight(text, { language: lang }).value}</code></pre>`;
        } catch (err) {
          console.error(err);
        }
      }
      return `<pre><code class="hljs">${text}</code></pre>`;
    }
  },
  breaks: true,
  gfm: true
});

export function parseMarkdown(markdown: string): string {
  return marked.parse(markdown) as string;
}

export function extractHeadings(markdown: string): Array<{ level: number; text: string; id: string }> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; id: string }> = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    headings.push({ level, text, id });
  }

  return headings;
}
