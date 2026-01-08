import { cosineSimilarity } from './embeddings';

export interface VectorDocument {
  id: string;
  content: string;
  embedding: number[];
  metadata: {
    type: 'project' | 'skill' | 'experience' | 'blog' | 'general';
    title?: string;
    [key: string]: any;
  };
}

class VectorStore {
  private documents: VectorDocument[] = [];

  addDocument(doc: VectorDocument) {
    this.documents.push(doc);
  }

  addDocuments(docs: VectorDocument[]) {
    this.documents.push(...docs);
  }

  search(queryEmbedding: number[], topK: number = 5): VectorDocument[] {
    if (queryEmbedding.length === 0) return [];
    
    const results = this.documents
      .map(doc => ({
        doc,
        similarity: cosineSimilarity(queryEmbedding, doc.embedding)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK)
      .map(result => result.doc);
    
    return results;
  }

  clear() {
    this.documents = [];
  }

  getDocumentCount(): number {
    return this.documents.length;
  }
}

export const vectorStore = new VectorStore();
