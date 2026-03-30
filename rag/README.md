# RAG

uv project: chromadb, fastembed, requests. Minimal package for use by the backend (e.g. from `rag_query`).

## Install

```bash
uv sync
```

## Running Embeddings

To generate embeddings and store them in the vector database, add your content as **multiple separate files** under `rag/input-data/`, then run the following command from the `rag` directory:

```bash
uv run create-embeddings.py
```

### What to put in `rag/input-data/`

Put **anything you want the chatbot to know about**, ideally as separate files (this works much better than a single huge resume file):

- **Resume**: `resume.md` or `resume.txt`
- **Achievements**: `achievement_*.md` (competitions, awards, certifications, chess, hackathons, etc.)
- **Blog posts / writing**: `blog_*.md`
- **Portfolio / projects**: `portfolio_*.md` (project blurbs, case studies, FAQs, feature lists)
- **LinkedIn posts**: `linkedin-post_*.md`
- **Academics**: `marks-card_*.md` (or any transcripts/grades notes you want included)

The ingest script will **recursively read all files** under `rag/input-data/`, chunk them, generate embeddings, and persist them to the local ChromaDB store used by the backend.

### How it works
The script processes every file in `rag/input-data/` by splitting text into semantic chunks, generating vector embeddings using the `BAAI/bge-small-en-v1.5` model, and persisting them into a local ChromaDB collection for retrieval.

Package is `rag`. Extend with RAG logic and call from the backend’s `rag_query` module.
