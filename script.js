document.getElementById('year').textContent = new Date().getFullYear()

const nowEl = document.getElementById('now')
const lines = [
    'Attending Computer Engineering Lectures.',
    'Learning new DSA with C & Rust.',
    'Training for a marathon.',
    'Building physics simulations in Unity.',
    'Implementing neural networks from scratch.',
    'Exploring low-level systems programming.',
    'Running 10k in under 45 minutes.',
    'Cycling 35+ km/h on the road.',
    'Playing ultimate frisbee.',
    'Learning about a new interesting Rust Crate.',
    'Designing realistic vehicle physics.',
    'Studying differential equations and linear algebra.',
    'Learning about transformer architectures.',
    'Reading research papers on CS algorithms.',
    'Building full-stack web applications.',
    'Practicing sprint intervals on Zwift.',
    'Learning about numerical methods and floats.',
    'Debugging segmentation faults in C++.',
    'Writing API endpoints in FastAPI.',
    'Optimizing database queries with indexes.',
    'Implementing graph traversal algorithms.',
    'Refactoring code for better performance.',
    'Learning about memory management.',
    'Writing unit tests with Pytest.',
    'Configuring Docker containers.',
    'Studying computer architecture.',
]

// Fisher–Yates shuffle
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

let bag = [...lines]
shuffle(bag)
let idx = 0

nowEl.textContent = bag[idx]

setInterval(() => {
    nowEl.style.opacity = 0

    setTimeout(() => {
        idx++
        if (idx >= bag.length) {
            shuffle(bag)
            idx = 0
        }

        nowEl.textContent = bag[idx]
        nowEl.style.opacity = 1
    }, 300)
}, 3000)

// --- Experience data ---
const experiences = [
    {
        timeframe: 'Sept 2025 – Dec 2025',
        position: 'Software Engineer Intern',
        company: 'BitGo',
        location: 'Palo Alto, CA (Remote)',
        points: [
            "Shipped security-critical intent verification preventing blind signing in Wallet Platform's TSS flows.",
            'Built Prometheus metrics and Grafana dashboards tracking verification failures, improving incident response.',
            'Implemented feature-flagged rollout enabling safe staging and debugging of security safeguards.',
            'Designed reusable transaction parser for intent comparison across blockchain protocols.',
            'Improved platform reliability by resolving 5xx errors and transaction validation issues.',
        ],
        link: 'https://www.bitgo.com/',
    },
    {
        timeframe: 'Jan 2025 – Apr 2025',
        position: 'Software Engineer Intern',
        company: 'GenerativeModels.AI',
        location: 'Toronto, ON',
        points: [
            'Built full-stack app with React/Next.js featuring custom editor, GPT co-writing, and AI generation.',
            'Developed FastAPI backend with semantic search over 70k docs using FAISS, achieving sub 800ms responses.',
            'Automated data ingestion with Docker-based Airflow processing 900k Amazon product listings.',
        ],
        link: 'https://www.generativemodels.ai/',
    },
    {
        timeframe: 'Oct 2024 – Mar 2025',
        position: 'Unity Vehicle Simulation Developer (Repo Link)',
        company: 'MOBOTIC GmbH',
        location: 'Remote',
        points: ['Developed Unity C# simulation features showcasing mobile robot capabilities for customer demos.', 'Implemented realistic 3D rendering and physics to accurately represent product behavior.'],
        // optional if you want to link the title
        link: 'https://github.com/SimonVutov/mobotic2',
    },
]

// --- Experience renderer ---
function renderExperience(items) {
    const mount = document.getElementById('experience')
    if (!mount) return

    items.forEach((exp) => {
        const section = document.createElement('section')
        section.className = 'card'

        const header = document.createElement('div')
        header.className = 'entry-head'

        const title = document.createElement('div')
        title.className = 'entry-title'

        // Optional link on company/title
        if (exp.link) {
            const a = document.createElement('a')
            a.href = exp.link
            a.target = '_blank'
            a.rel = 'noreferrer'
            a.textContent = `${exp.position} — ${exp.company}`
            title.appendChild(a)
        } else {
            title.textContent = `${exp.position} — ${exp.company}`
        }

        const meta = document.createElement('div')
        meta.className = 'entry-meta'
        meta.textContent = `${exp.timeframe} • ${exp.location}`

        header.appendChild(title)
        header.appendChild(meta)

        const ul = document.createElement('ul')
        ul.className = 'entry-points'
        exp.points.forEach((p) => {
            const li = document.createElement('li')
            li.textContent = p
            ul.appendChild(li)
        })

        section.appendChild(header)
        section.appendChild(ul)
        mount.appendChild(section)
    })
}

renderExperience(experiences)

// --- Projects data ---
const projects = [
    {
        name: 'Rust Notes Web App',
        tech: 'Rust, HTTP, Auth, REST API',
        date: 'Dec 2025',
        link: 'https://github.com/SimonVutov/Rust-API-Project',
        points: ['Built Rust HTTP server with notes REST API supporting CRUD, pinning, tagging, and ordering.', 'Implemented secure auth with bcrypt hashing and expiring Bearer tokens.', 'Designed JSON persistence with timestamped change history for full auditability.'],
    },
    {
        name: 'SimpleCar2 - Realistic Car Physics',
        tech: 'Unity, C#, Physics Simulation',
        date: 'Aug 2025',
        link: 'https://github.com/SimonVutov/SimpleCar2',
        points: [
            'Engineered advanced vehicle physics with custom suspension, torque curves, and traction control systems.',
            'Implemented engine simulation with realistic gear ratios, RPM calculations, and angular acceleration.',
            'Created a Youtube tutorial with 50k+ views demonstrating wide applicability and usefullness.',
        ],
    },
    {
        name: 'Cadence - Cycling Game',
        tech: 'Unity, C#, Game Design',
        date: 'Aug 2025',
        link: 'https://github.com/SimonVutov/Cadence',
        points: ['Developed cycling game for Brackeys Game Jam 2025.2 with theme "risk it for the biscuit".', 'Designed gameplay mechanics balancing risk-reward systems with intuitive controls.'],
    },
    {
        name: 'C++ Neural Network',
        tech: 'C++, Machine Learning',
        date: 'May 2025',
        link: 'https://github.com/SimonVutov/CPPNN',
        points: ['Developed neural network implementation from scratch in C++.', 'Learned core machine learning concepts through low-level implementation.'],
    },
    {
        name: 'Agent0 - AI Agent',
        tech: 'Python, Jupyter Notebook, AI',
        date: 'Jan 2025',
        link: 'https://github.com/SimonVutov/Agent0',
        points: ['Developed AI agent that can answer questions based on a FAISS index of your google drive documents.', 'Uses langchain and python.'],
    },
    {
        name: 'MiniGPT Language Model',
        tech: 'Python, PyTorch, Hugging Face, CUDA',
        date: 'Aug 2024',
        link: 'https://github.com/SimonVutov/miniGPT',
        points: ['Developed transformer training framework using GPT architecture with mixed precision optimization.', 'Achieved 1.8x speedup leveraging FP16 mixed precision with NVIDIA Tensor Cores.'],
    },
    {
        name: 'Flight Management System',
        tech: 'C++, OOP, Data Structures, Algorithms',
        date: 'Jun 2024',
        link: 'https://github.com/SimonVutov/AirplaneManager',
        points: ['Designed flight routing system in C++ applying OOP principles (encapsulation, inheritance, polymorphism), pointers, and dynamic memory.', 'Implemented graph-based routing with BFS traversal for optimal flight path calculation.'],
    },
    {
        name: 'Node.js Tutorial Projects',
        tech: 'JavaScript, Node.js, Backend',
        date: 'Nov 2024',
        link: 'https://github.com/SimonVutov/nodeJSTutorial',
        points: ['Completed comprehensive Node.js tutorial projects.', 'Learned backend development with JavaScript.'],
    },
]

// --- Projects renderer ---
function renderProjects(items) {
    const mount = document.getElementById('projects')
    if (!mount) return

    items.forEach((p) => {
        const section = document.createElement('section')
        section.className = 'card'

        const header = document.createElement('div')
        header.className = 'entry-head'

        const title = document.createElement('div')
        title.className = 'entry-title'

        if (p.link) {
            const a = document.createElement('a')
            a.href = p.link
            a.target = '_blank'
            a.rel = 'noreferrer'
            a.textContent = p.name
            title.appendChild(a)
        } else {
            title.textContent = p.name
        }

        const meta = document.createElement('div')
        meta.className = 'entry-meta'
        meta.textContent = `${p.tech} • ${p.date}`

        header.appendChild(title)
        header.appendChild(meta)

        const ul = document.createElement('ul')
        ul.className = 'entry-points'
        p.points.forEach((pt) => {
            const li = document.createElement('li')
            li.textContent = pt
            ul.appendChild(li)
        })

        section.appendChild(header)
        section.appendChild(ul)
        mount.appendChild(section)
    })
}

renderProjects(projects)
