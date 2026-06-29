# Ingestion Script for Starfolio Data

## **Purpose**
The ingestion script will pre-process and convert the content of the Starfolio portfolio into a structured format compatible with the Multi-tenant RAG Engine’s vector database.

---

## **Core Requirements**

### 1. **Data Extraction**
   - Extract the content from `resume.tsx`, including:
     - Personal details (name, title, contact info).
     - Work experience.
     - Skills and tools.
     - Projects and links.

### 2. **Pre-Processing**
   - Clean and normalize the extracted content:
     - Split long text sections into smaller chunks.
     - Ensure proper removal of special characters, tags, or non-relevant metadata.
     - Apply relevancy filters (exclude placeholder text or redundant data).
  
### 3. **Embedding Generation**
   - Use a pre-defined embedding model or API to generate vector embeddings for structured text data:
     - Example: OpenAI Embedding Models, SentenceTransformers, etc.

### 4. **Namespace Assignment**
   - Organize vector data under a unique namespace for Starfolio inside the RAG engine’s vector database.

### 5. **Script Automation (Event-Driven)**
   - **Constraint:** Zero wasted compute. No interval cron jobs.
   - Use **Event-Driven Scheduling** via Airflow (e.g., HTTP event triggers or webhooks).
   - The DAG will only trigger when an explicit event (like a Git commit modifying `resume.tsx`) sends a secured webhook payload to the ingestion service.
   - Log successes, errors, and update statuses during every run.

---

## **Implementation Plan**

### Set up Apache Airflow
- Install and configure Apache Airflow as the orchestrator for RAG ingestion pipelines.
- Ensure logging and observability are configured for visualizing DAG executions.


### Step 1: Create the Script
- Develop the Python/Node.js script to:
  - Parse `resume.tsx`.
  - Extract all relevant fields.
  - Save as JSON for further processing.

### Step 2: Generate Embeddings
- Apply a local or remote API call to convert JSON data chunks into vector embeddings.
- Store embeddings temporarily in `JSONLines` format.

### Step 3: Push to Vector Database
- Use RAG engine API or direct DB connection to upload.

---

## **Target Pipeline Example for Starfolio**

### Core Tasks:
1. Extract data from `resume.tsx`.
2. Preprocess and clean the content, splitting into logical chunks.
3. Generate embeddings for text chunks and store them temporarily.
4. Push embeddings to the vector database under the Starfolio namespace.

### Workflow Steps:
`[Extract]` --> `[Preprocess]` --> `[Generate Embeddings]` --> `[Database Upload]` --> `[Log Status]`

---

## **Next Steps**
- [ ] Finalize the framework (Python or Node.js).
- [ ] Draft script logic for extraction.
- [ ] Test and iterate as needed.

---

Let me know if there are additional requirements or preferences to include!