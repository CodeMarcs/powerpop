/* =========================================================
   Studio Five — main.js
   Member profile data & slide card interaction
   ========================================================= */

const members = [
  {
    initials : 'A',
    name     : 'Araiza "Aiz" Sotto',
    role     : 'Team Lead',
    badge    : 'Team Lead',
    badgeBg  : '#EEEDFE',
    badgeColor: '#3C3489',
    avatarBg : '#EEEDFE',
    avatarColor: '#3C3489',
    bio      : 'Crafts intuitive interfaces with a focus on accessibility and motion design. Alex brings 4 years of product design experience across fintech and healthtech, and believes great UX starts long before the first wireframe.',
    tags     : ['Collaboration', 'Prototyping', 'Leadership'],
    links    : ['Portfolio', 'LinkedIn', 'Dribbble'],
  },
  {
    initials : 'JK',
    name     : 'Jennifer Kim Orallo',
    role     : 'Plan Lead',
    badge    : 'Strategist',
    badgeBg  : '#E1F5EE',
    badgeColor: '#085041',
    avatarBg : '#E1F5EE',
    avatarColor: '#085041',
    bio      : 'Builds fast, component-driven UIs with React and TypeScript. Blake is obsessed with performance optimization — Core Web Vitals are never an afterthought. Open source contributor with 2k+ GitHub stars.',
    tags     : ['Strategy', 'Research', 'Planning'],
    links    : ['GitHub', 'LinkedIn', 'Blog'],
  },
  {
    initials : 'KE',
    name     : 'Kisha Erica Narag',
    role     : 'Finance Lead',
    badge    : 'Gastador',
    badgeBg  : '#FAEEDA',
    badgeColor: '#633806',
    avatarBg : '#FAEEDA',
    avatarColor: '#633806',
    bio      : 'Designs scalable APIs and data pipelines that stay boring at 3 AM. Casey is a passionate open source contributor and DevOps enthusiast who believes good infrastructure is invisible.',
    tags     : ['Accounting', 'Financial Analysis', 'Budget Planning'],
    links    : ['GitHub', 'LinkedIn', 'Dev.to'],
  },
  {
    initials : 'JS',
    name     : 'Janna Sophia Garcia',
    role     : 'Marketing Lead',
    badge    : 'Marketer',
    badgeBg  : '#FAECE7',
    badgeColor: '#711B13',
    avatarBg : '#FAECE7',
    avatarColor: '#711B13',
    bio      : 'Defines visual identities and messaging frameworks that last. Dana bridges design thinking with business goals, helping companies find a voice that is unmistakably theirs.',
    tags     : ['Marketing', 'Socials', 'Network'],
    links    : ['Portfolio', 'LinkedIn', 'Twitter'],
  },
  {
    initials : 'JM',
    name     : 'John Marcus Manalo',
    role     : 'Tech Lead',
    badge    : 'Programming Lead',
    badgeBg  : '#FBEAF0',
    badgeColor: '#72243E',
    avatarBg : '#FBEAF0',
    avatarColor: '#72243E',
    bio      : 'Wake up, Eat, Program, Sleep.',
    tags     : ['HTML5', 'JavaScript', 'CSS', 'Python'],
    links    : ['Portfolio', 'LinkedIn', 'GitHub'],
  },
];

function showDetail(idx) {
  /* Highlight the active card */
  const cards = document.querySelectorAll('.member-card');
  cards.forEach((c, i) => c.classList.toggle('active', i === idx));

  const m = members[idx];
  const panel = document.getElementById('detailPanel');

  const tagsHTML  = m.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const linksHTML = m.links.map(l => `<button class="link-btn">${l} ↗</button>`).join('');

  panel.innerHTML = `
    <div class="detail-header">
      <div class="avatar" style="background:${m.avatarBg};color:${m.avatarColor};width:48px;height:48px;font-size:15px;flex-shrink:0;">${m.initials}</div>
      <div>
        <p class="detail-name">${m.name}</p>
        <p class="detail-role">${m.role}</p>
      </div>
      <span class="detail-badge tag" style="background:${m.badgeBg};color:${m.badgeColor};border:none;">${m.badge}</span>
    </div>
    <p class="detail-bio">${m.bio}</p>
    <div class="tags" style="margin-bottom:1rem;">${tagsHTML}</div>
    <div class="detail-links">${linksHTML}</div>
  `;

  panel.classList.add('visible');

  /* Scroll panel into view on mobile */
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}