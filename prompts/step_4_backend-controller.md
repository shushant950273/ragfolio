You are an expert Python Backend Developer specializing in FastAPI and building robust APIs for AI applications.

Your goal is to generate a clean, production-ready FastAPI controller for a Retrieval-Augmented Generation (RAG) system.

---

### TASK

Build a FastAPI application that acts as the orchestration layer between a frontend and a RAG query engine.

The output should include:
1.  **FastAPI Setup**: Initialize the app with a descriptive title.
2.  **CORS Configuration**: Allow all origins, methods, and headers (for development flexibility).
3.  **Data Models**: Use Pydantic to define request and response schemas.
4.  **Endpoints**:
    *   `GET /api/health`: A simple health check returning `{"status": "ok"}`.
    *   `POST /api/ask`: The primary RAG endpoint that accepts a question and returns an AI-generated answer.
5.  **Integration**: Import and call the `answer_question` function from `rag_query.py`.
6.  **Error Handling**: Implement proper validation and exception handling with appropriate HTTP status codes.
7.  **Server Startup**: Include the `uvicorn` runner configuration.

---

### CRITICAL DO-NOT-BREAK RULES (MUST FOLLOW)

1. **Do NOT remove or break existing APIs**
   - If `backend/main.py` already contains any existing endpoints, routes, routers, middleware, models, startup/shutdown hooks, or app configuration: **keep them**.
   - You may add new endpoints or augment existing ones, but **do not delete, rename, or change paths/behavior** of existing endpoints unless this prompt explicitly instructs that change.

2. **All endpoints MUST be under `/api`**
   - Every route path must start with the `/api` prefix (example: `/api/health`, `/api/ask`).
   - If the existing code contains non-`/api` endpoints, **add `/api` equivalents without removing the originals** (to preserve backwards compatibility), and log a warning noting the legacy path.

3. **Add verbose debug logging across ALL endpoints**
   - Use Python `logging` (not `print`) and configure a logger for the app/module.
   - Emit debug logs for:
     - request start/end (method, path, status code, latency),
     - request body validation failures (safe summaries; do not log secrets),
     - exceptions with stack traces (`logger.exception`).

4. **RAG/Gemini observability MUST be visible in logs**
   - For `/api/ask`, log (at DEBUG level) the following in a structured, readable way:
     - the **incoming question**,
     - the **retrieved context items** chosen for the query:
       - identifiers (filename/source/id if available),
       - similarity scores/distances if available,
       - a short preview/snippet per item (truncate to avoid huge logs),
     - the **exact Gemini input prompt** (the full prompt string sent to Gemini, including context),
     - the **Gemini output** (the raw model response text),
     - and any model parameters (model name, temperature, etc.) if available.
   - If the current `answer_question` function does not expose these internals, then:
     - **do not remove or break it**,
     - but **add an alternative debug-capable path** (keeping the old one) such as:
       - a new function in `rag_query.py` that returns `(answer, debug_info)` or a dict with fields like `retrieved`, `gemini_prompt`, `gemini_output`,
       - or a wrapper in `main.py` that calls lower-level utilities (only if they already exist).
  - **ChromaDB compatibility requirement (avoid include validation errors)**
    - When adding a debug-capable retrieval path (e.g. `retrieve_context_debug()`), be careful with `collection.query(include=...)`:
      - Some Chroma versions **reject** `include=["ids"]` with an error like: `ValueError: ... got ids in query.`
      - Therefore, **do not pass `ids` inside `include`**. Only use allowed values such as: `documents`, `metadatas`, `distances`, `embeddings`, etc.
      - If you attempt to use `include`, implement a defensive fallback that catches **both** `TypeError` (older clients that don't support `include`) and **ValueError** (include validation differences), and retries `query()` without `include`.
      - If IDs are needed for logging, read them from the query result only **if present** (e.g. `result.get("ids")`), but do not require them.

### TECHNICAL REQUIREMENTS

1.  **Library Imports**:
    *   `FastAPI`, `HTTPException` from `fastapi`.
    *   `CORSMiddleware` from `fastapi.middleware.cors`.
    *   `BaseModel` from `pydantic`.
    *   Import `answer_question` from `rag_query`.

2.  **Request Schema (`AskRequest`)**:
    *   `question` (string): The user's query.

3.  **Response Schema (`AskResponse`)**:
    *   `answer` (string): The generated response from the RAG engine.

4.  **Logic for `/api/ask`**:
    *   Validate that the question is not an empty or whitespace-only string. Return a `400 Bad Request` if invalid.
    *   Call `answer_question(request.question)` within a try-except block.
    *   If an exception occurs during RAG processing, return a `500 Internal Server Error` with the error details.
    *   Add debug logging described above, including retrieved items (embeddings/chunks chosen), Gemini input prompt, and Gemini output.
    *   Ensure the debug-capable retrieval path is **Chroma-version-safe** (see ChromaDB compatibility requirement above) so it never crashes solely due to `include` validation.

---

### OUTPUT STYLE

*   Write clean, PEP 8 compliant Python code.
*   Include descriptive docstrings for the app and endpoints.
*   Use type hints for all parameters and return values.
*   Ensure the code is a "drop-in" replacement for `main.py`.

---

Now, generate the code for `backend/main.py` based on these instructions.
