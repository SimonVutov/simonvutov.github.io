document.getElementById('year').textContent = new Date().getFullYear()

const typingWords = ['Learning', 'Building', 'Debugging', 'Shipping', 'Testing']
const typingEl = document.getElementById('typing-word')
let typingIndex = 0

setInterval(() => {
    typingIndex = (typingIndex + 1) % typingWords.length
    typingEl.animate(
        [
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: 'translateY(8px)' },
        ],
        { duration: 160, easing: 'ease-out' }
    ).onfinish = () => {
        typingEl.textContent = typingWords[typingIndex]
        typingEl.animate(
            [
                { opacity: 0, transform: 'translateY(-8px)' },
                { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 180, easing: 'ease-out' }
        )
    }
}, 6800)

const root = document.documentElement

function mixChannel(start, end, amount) {
    return Math.round(start + (end - start) * amount)
}

function mixRgb(start, end, amount) {
    return start.map((channel, index) => mixChannel(channel, end[index], amount)).join(' ')
}

function updateSkyGlow() {
    const scrollProgress = Math.min((window.scrollY / Math.max(window.innerHeight, 1)) * 1.8, 1)
    const glowProgress = scrollProgress * 0.75
    const sizeProgress = scrollProgress

    root.style.setProperty('--sky-blue-glow', mixRgb([57, 189, 248], [255, 82, 82], glowProgress))
    root.style.setProperty('--sky-purple-glow', mixRgb([155, 92, 255], [255, 105, 180], glowProgress))
    root.style.setProperty('--sky-blue-size', `${28 + 112 * sizeProgress}rem`)
    root.style.setProperty('--sky-purple-size', `${22 + 88 * sizeProgress}rem`)
}

window.addEventListener('scroll', updateSkyGlow, { passive: true })
window.addEventListener('resize', updateSkyGlow)
updateSkyGlow()

const experiences = [
    {
        timeframe: 'May 2026 - Present',
        position: 'Software Engineer Intern',
        company: 'Deephaven',
        location: 'Minneapolis, MN',
        link: 'https://deephaven.io/',
        points: [
            'Shipped TypeScript/React improvements across Deephaven Iris and web-client, including query-server dashboard badges, dashboard tooltips, and advanced filter dialogs.',
            'Built algorithms and components for real-time tables with up to 10^15 cells, supporting Fortune 500 users processing live data.',
            'Parallelized plugin end-to-end tests by browser, reducing runtime by over 70%.',
        ],
        chips: ['TypeScript', 'React', 'Data Systems', 'Testing'],
    },
    {
        timeframe: 'Apr 2026 - Present',
        position: 'Firmware Developer',
        company: 'UW Orbital',
        location: 'Waterloo, ON',
        link: 'https://www.uworbital.com/',
        points: [
            'Built cross-repository binary log compression for satellite firmware and ground-station tooling, reducing representative logs from 271 to 69 bytes.',
            'Implemented host-testable C logging codec with generated file-ID tables, runtime-selectable binary output, and ARM cross-compile verification.',
            'Mirrored the wire format in Python ground-station utilities with stream resynchronization, round trips, CLI decoding, and 23 pytest cases.',
        ],
        chips: ['C', 'Python', 'Firmware', 'Binary Protocols'],
    },
    {
        timeframe: 'Sept 2025 - Dec 2025',
        position: 'Software Engineer Intern',
        company: 'BitGo',
        location: 'Palo Alto, CA',
        link: 'https://www.bitgo.com/',
        points: [
            "Shipped security-critical intent verification preventing blind signing in Wallet Platform's TSS flows.",
            'Built Prometheus metrics and Grafana dashboards tracking verification failures and improving incident response.',
            'Implemented feature-flagged rollout and reusable transaction parsing for safe deployment across blockchain protocols.',
        ],
        chips: ['Security', 'Backend', 'Prometheus', 'Grafana'],
    },
    {
        timeframe: 'Jan 2025 - Apr 2025',
        position: 'Software Engineer Intern',
        company: 'GenerativeModels.AI',
        location: 'Toronto, ON',
        link: 'https://www.generativemodels.ai/',
        points: [
            'Built full-stack React/Next.js and FastAPI product with custom editor, GPT co-writing, semantic search, and AI generation.',
            'Implemented FAISS-backed semantic search over 70k documents with sub-800ms responses.',
            'Automated Docker-based Airflow ingestion for 900k Amazon product listings.',
        ],
        chips: ['Next.js', 'FastAPI', 'FAISS', 'Airflow'],
    },
    {
        timeframe: 'Oct 2024 - Mar 2025',
        position: 'Game Developer',
        company: 'MOBOTIC GmbH',
        location: 'Munich, Germany',
        link: 'https://github.com/SimonVutov/mobotic2',
        points: [
            'Built Unity/C# simulation features for interactive mobile-robot demos and customer-facing visualization.',
            'Implemented real-time 3D rendering and physics behavior to communicate robot capabilities clearly.',
        ],
        chips: ['Unity', 'C#', 'Simulation', 'Physics'],
    },
]

const projects = [
    {
        name: 'Rust Notes Web App',
        tech: 'Rust, HTTP, Auth, REST API',
        date: 'Dec 2025',
        link: 'https://github.com/SimonVutov/Rust-API-Project',
        description:
            'Rust HTTP server with authenticated notes CRUD, pinning, tagging, ordering, bcrypt password hashing, expiring Bearer tokens, and timestamped JSON persistence.',
    },
    {
        name: 'Invariant',
        tech: 'C++17, CMake, Numerical Methods',
        date: '2026',
        link: 'https://github.com/SimonVutov/invariant',
        description:
            'Header-only C++17 linear algebra and numerical methods library with matrix/vector operations, interpolation, Gaussian elimination, Jacobi iteration, and tests.',
    },
    {
        name: 'SimpleCar2',
        tech: 'Unity, C#, Physics Simulation',
        date: 'Aug 2025',
        link: 'https://github.com/SimonVutov/SimpleCar2',
        description:
            'Vehicle physics simulation with custom suspension, tire traction, torque curves, gear ratios, RPM calculations, and a 50k+ view technical tutorial.',
    },
    {
        name: 'MiniGPT Language Model',
        tech: 'Python, PyTorch, CUDA',
        date: 'Aug 2024',
        link: 'https://github.com/SimonVutov/miniGPT',
        description:
            'Transformer training framework using GPT architecture and FP16 mixed precision, reaching a 1.8x speedup with NVIDIA Tensor Cores.',
    },
    {
        name: 'Rocket Landing Automation',
        tech: 'Unity, C#, Control Systems',
        date: 'Nov 2023',
        link: 'https://github.com/SimonVutov/SpacexRocketSimulation',
        description:
            'Autonomous rocket-landing simulation with thrust vectoring and trajectory-control logic inspired by Falcon 9 recovery.',
    },
    {
        name: 'Fluid Simulation',
        tech: 'Unity, C#, Particle Systems',
        date: 'Jul 2025',
        link: 'https://github.com/SimonVutov/Fluid',
        description:
            'Large-scale particle fluid simulation exploring force calculations, position updates, and real-time visual motion.',
    },
]

function renderExperience(items) {
    const mount = document.getElementById('experience')
    if (!mount) return

    items.forEach((exp) => {
        const marker = document.createElement('div')
        marker.className = 'timeline-marker reveal'
        marker.innerHTML = '<div class="timeline-dot"></div><div class="timeline-line"></div>'

        const section = document.createElement('article')
        section.className = 'experience-card reveal'

        const title = document.createElement('h3')
        title.className = 'entry-title'
        const linkStart = exp.link ? `<a href="${exp.link}" target="_blank" rel="noreferrer">` : ''
        const linkEnd = exp.link ? '</a>' : ''
        title.innerHTML = `${linkStart}${exp.position} <span class="entry-company">@ ${exp.company}</span>${linkEnd}`

        const meta = document.createElement('p')
        meta.className = 'entry-meta'
        meta.textContent = `${exp.location} • ${exp.timeframe}`

        const ul = document.createElement('ul')
        ul.className = 'entry-points'
        exp.points.forEach((point) => {
            const li = document.createElement('li')
            li.textContent = point
            ul.appendChild(li)
        })

        const chips = document.createElement('div')
        chips.className = 'chips'
        exp.chips.forEach((chip) => {
            const span = document.createElement('span')
            span.className = 'chip'
            span.textContent = chip
            chips.appendChild(span)
        })

        section.append(title, meta, ul, chips)
        mount.append(marker, section)
    })
}

function renderProjects(items) {
    const mount = document.getElementById('projects')
    if (!mount) return

    items.forEach((project) => {
        const card = document.createElement('article')
        card.className = 'project-card reveal'

        const top = document.createElement('div')
        top.className = 'project-top'

        const title = document.createElement('h3')
        title.textContent = project.name

        const link = document.createElement('a')
        link.className = 'project-link'
        link.href = project.link
        link.target = '_blank'
        link.rel = 'noreferrer'
        link.ariaLabel = `${project.name} repository`
        link.textContent = '↗'

        const rule = document.createElement('div')
        rule.className = 'project-rule'

        const meta = document.createElement('p')
        meta.className = 'project-meta'
        meta.textContent = `${project.tech} • ${project.date}`

        const description = document.createElement('p')
        description.textContent = project.description

        top.append(title, link)
        card.append(top, rule, meta, description)
        mount.appendChild(card)
    })
}

renderExperience(experiences)
renderProjects(projects)

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                revealObserver.unobserve(entry.target)
            }
        })
    },
    { threshold: 0.12 }
)

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

const canvas = document.getElementById('stars')
const ctx = canvas.getContext('2d')
let stars = []
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function resizeStars() {
    const ratio = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * ratio
    canvas.height = window.innerHeight * ratio
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

    const count = Math.floor(window.innerWidth * window.innerHeight * 0.00017)
    stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 0.7 + 0.35,
        opacity: Math.random() * 0.55 + 0.35,
        speed: Math.random() * 0.8 + 0.4,
        phase: Math.random() * Math.PI * 2,
    }))
}

function drawStars() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    stars.forEach((star) => {
        const opacity = reducedMotion
            ? star.opacity
            : 0.3 + Math.abs(Math.sin(Date.now() * 0.001 * star.speed + star.phase)) * 0.55
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
    })

    if (!reducedMotion) requestAnimationFrame(drawStars)
}

resizeStars()
drawStars()
window.addEventListener('resize', resizeStars)

function createShootingStar() {
    if (reducedMotion) return

    const field = document.getElementById('shooting-stars')
    const star = document.createElement('span')
    star.className = 'shooting-star'

    const side = Math.floor(Math.random() * 4)
    const offset = Math.random()
    const starts = [
        { x: offset * window.innerWidth, y: -20, angle: 45 },
        { x: window.innerWidth + 20, y: offset * window.innerHeight, angle: 135 },
        { x: offset * window.innerWidth, y: window.innerHeight + 20, angle: 225 },
        { x: -20, y: offset * window.innerHeight, angle: 315 },
    ]
    const start = starts[side]
    const distance = Math.max(window.innerWidth, window.innerHeight) * 1.2
    const dx = Math.cos((start.angle * Math.PI) / 180) * distance
    const dy = Math.sin((start.angle * Math.PI) / 180) * distance

    star.style.left = `${start.x}px`
    star.style.top = `${start.y}px`
    star.style.transform = `rotate(${start.angle}deg)`
    field.appendChild(star)

    star.animate(
        [
            { transform: `translate(0, 0) rotate(${start.angle}deg) scaleX(0.8)`, opacity: 0 },
            { opacity: 1, offset: 0.08 },
            { transform: `translate(${dx}px, ${dy}px) rotate(${start.angle}deg) scaleX(1.6)`, opacity: 0 },
        ],
        { duration: Math.random() * 1000 + 1400, easing: 'linear' }
    ).onfinish = () => star.remove()
}

if (!reducedMotion) {
    createShootingStar()
    setInterval(createShootingStar, 1350)
}
