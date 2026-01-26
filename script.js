document.getElementById('year').textContent = new Date().getFullYear()

const nowEl = document.getElementById('now')
const lines = ['Building projects + applying for co-ops.', 'Working on low-level + ML fundamentals.', 'Training: cycling + ultimate.']
nowEl.textContent = lines[Math.floor(Math.random() * lines.length)]
