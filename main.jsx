import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Instagram, Facebook, Youtube, MapPin, Mail, Phone, CalendarDays, Sparkles, HeartHandshake, BookOpen, Users, Leaf, Quote, ChevronRight } from 'lucide-react';
import './styles.css';

const activities = [
  { n: '01', type: 'LEARNING & GROWTH', title: 'Knowledge that moves us forward', copy: 'Learning spaces, meaningful conversations and opportunities for young minds to grow.', icon: BookOpen, tone: 'mint' },
  { n: '02', type: 'COMMUNITY SERVICE', title: 'Small acts. Lasting impact.', copy: 'Building a culture of care through local initiatives and service to the community.', icon: HeartHandshake, tone: 'sand' },
  { n: '03', type: 'YOUTH & CULTURE', title: 'Rooted in values, open to ideas', copy: 'Bringing people together through creativity, culture and purposeful participation.', icon: Users, tone: 'lilac' },
];
const events = [
  { day: '01', month: 'UPCOMING', title: 'Community Gathering', detail: 'A space to connect, share ideas and strengthen local bonds.', tag: 'COMMUNITY' },
  { day: '02', month: 'UPCOMING', title: 'Learning Circle', detail: 'An engaging session built around knowledge and discussion.', tag: 'EDUCATION' },
  { day: '03', month: 'UPCOMING', title: 'Service Initiative', detail: 'Coming together to make a practical difference around us.', tag: 'SERVICE' },
];
const leaders = [
  { role: 'UNIT PRESIDENT', name: 'Name to be added', initials: 'NP' },
  { role: 'UNIT SECRETARY', name: 'Name to be added', initials: 'NS' },
  { role: 'UNIT TREASURER', name: 'Name to be added', initials: 'NT' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const nav = ['Home', 'About', 'Activities', 'Events', 'Team', 'Contact'];
  const go = (label) => { setActive(label); setMenuOpen(false); document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); };
  return <div className="site-shell">
    <div className="topline"><span><span className="live-dot" /> A LOCAL UNIT. A SHARED PURPOSE.</span><span className="topline-right">PALekode · Kerala, India</span></div>
    <header className="header">
      <a className="brand" href="#home" onClick={() => setActive('Home')} aria-label="SSF Palekode Unit home">
        <span className="brand-mark"><span>SSF</span><i /></span>
        <span className="brand-text"><strong>SSF PALEKODE</strong><small>TOWN UNIT</small></span>
      </a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {nav.map(item => <button key={item} className={active === item ? 'nav-link active' : 'nav-link'} onClick={() => go(item)}>{item}</button>)}
        <button className="nav-cta" onClick={() => go('Contact')}>Connect with us <ArrowUpRight size={15}/></button>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A MOVEMENT BUILT ON MEANING</div>
          <h1>Good things<br/>happen when<br/><em>we come</em> <span>together.</span></h1>
          <p className="hero-desc">A community of purpose, learning and service. We bring people together to create meaningful change — starting right here in Palekode.</p>
          <div className="hero-actions"><button className="button-light" onClick={() => go('About')}>Discover our story <ArrowRight size={17}/></button><button className="text-link" onClick={() => go('Activities')}>Explore what we do <ArrowDownRight size={16}/></button></div>
          <div className="hero-note"><span className="note-icon"><Sparkles size={16}/></span><span><strong>Rooted locally.</strong><br/>Inspired by a bigger purpose.</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract editorial artwork">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="art-sun"/>
          <div className="art-arch"><div className="arch-inner"><div className="arch-star">✳</div><div className="arch-caption">GROW<br/>TOGETHER</div></div></div>
          <div className="art-leaf leaf-one"><Leaf/></div><div className="art-leaf leaf-two"><Leaf/></div>
          <div className="art-stamp"><span>COMMUNITY</span><b>✳</b><span>WITH PURPOSE</span></div>
          <div className="art-caption-bottom"><span>11° / KERALA</span><span>EST. WITH PURPOSE</span></div>
        </div>
        <div className="hero-bottom"><span>01 / A NOTE FROM OUR UNIT</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14}/></span></div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-kicker"><span>01</span><span>WHO WE ARE</span></div>
        <div className="intro-main">
          <h2>Not just an organisation.<br/><span>A place to belong.</span></h2>
          <div className="intro-copy"><p>SSF Palekode Unit is a local community platform shaped by shared values, meaningful connection and a commitment to positive action.</p><p>We believe every gathering can spark an idea, every act of service can make a difference, and every young person deserves a place to grow.</p><button className="underlined-link" onClick={() => go('Contact')}>Get to know us <ArrowUpRight size={16}/></button></div>
        </div>
        <div className="value-strip"><div><span className="value-no">01</span><strong>Purpose</strong><small>Move with intention.</small></div><div><span className="value-no">02</span><strong>People</strong><small>Grow side by side.</small></div><div><span className="value-no">03</span><strong>Service</strong><small>Make care visible.</small></div><div><span className="value-no">04</span><strong>Progress</strong><small>Keep learning.</small></div></div>
      </section>

      <section className="activities section-pad" id="activities">
        <div className="section-heading"><div><div className="section-kicker"><span>02</span><span>WHAT WE DO</span></div><h2>Ideas into action.<br/><em>Purpose into practice.</em></h2></div><p>Our work is about creating opportunities to learn, connect and contribute — with the community at the heart of every effort.</p></div>
        <div className="activity-grid">{activities.map((a) => { const Icon = a.icon; return <article className={`activity-card ${a.tone}`} key={a.n}><div className="card-top"><span>{a.n} / 03</span><Icon size={22} strokeWidth={1.6}/></div><div className="card-content"><span className="card-type">{a.type}</span><h3>{a.title}</h3><p>{a.copy}</p></div><button className="circle-arrow" aria-label={`Learn more about ${a.type}`} onClick={() => go('Contact')}><ArrowUpRight size={18}/></button></article>})}</div>
      </section>

      <section className="manifesto">
        <div className="manifesto-pattern" />
        <div className="manifesto-content"><Quote className="quote-icon" size={31}/><p>“The strongest communities are built when people choose to <em>show up</em> for one another.”</p><div className="manifesto-foot"><span>OUR SHARED BELIEF</span><span className="manifesto-star">✳</span><span>SSF PALEKODE UNIT</span></div></div>
      </section>

      <section className="events section-pad" id="events">
        <div className="section-heading events-heading"><div><div className="section-kicker"><span>03</span><span>MARK YOUR CALENDAR</span></div><h2>Meet. Learn.<br/><em>Make a difference.</em></h2></div><p>There is always more to do together. Event details will be updated here as programmes are confirmed.</p></div>
        <div className="event-list">{events.map(e => <article className="event-row" key={e.day}><div className="event-date"><strong>{e.day}</strong><span>{e.month}</span></div><div className="event-info"><span className="event-tag">{e.tag}</span><h3>{e.title}</h3><p>{e.detail}</p></div><div className="event-status"><CalendarDays size={18}/><span>Details soon</span></div><ChevronRight className="event-chevron" size={20}/></article>)}</div>
        <div className="events-note"><span className="live-dot"/><span>Have a programme to share? Get in touch with the unit.</span><button onClick={() => go('Contact')}>Share an update <ArrowUpRight size={15}/></button></div>
      </section>

      <section className="team section-pad" id="team">
        <div className="team-top"><div><div className="section-kicker"><span>04</span><span>THE PEOPLE BEHIND THE WORK</span></div><h2>Good leadership.<br/><em>Grounded in service.</em></h2></div><p>Meet the people helping bring our unit's vision to life. Official names and portraits can be added once confirmed.</p></div>
        <div className="team-grid">{leaders.map((l, i) => <article className="leader-card" key={l.role}><div className={`leader-art leader-art-${i+1}`}><span className="leader-initials">{l.initials}</span><span className="leader-number">0{i+1}</span><div className="leader-ring"/></div><div className="leader-meta"><div><span>{l.role}</span><h3>{l.name}</h3></div><ArrowUpRight size={17}/></div></article>)}</div>
        <p className="team-footnote">Leadership details are placeholders — replace with verified unit information before publishing.</p>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-left"><div className="section-kicker light-kicker"><span>05</span><span>LET'S CONNECT</span></div><h2>Have an idea?<br/><em>Let's make it real.</em></h2><p>Want to collaborate, share a programme or learn more about SSF Palekode Unit? We'd love to hear from you.</p><a className="contact-button" href="mailto:hello@example.com">Start a conversation <ArrowUpRight size={17}/></a><small className="placeholder-note">Replace this placeholder email before publishing.</small></div>
        <div className="contact-right"><div className="contact-detail"><span className="contact-icon"><MapPin size={18}/></span><div><small>FIND US</small><strong>Palekode, Kerala, India</strong><p>Exact address to be added</p></div></div><div className="contact-detail"><span className="contact-icon"><Mail size={18}/></span><div><small>EMAIL</small><strong>Official email to be added</strong><p>Use the verified unit contact</p></div></div><div className="contact-detail"><span className="contact-icon"><Phone size={18}/></span><div><small>PHONE</small><strong>Contact number to be added</strong><p>Official unit number</p></div></div><div className="social-row"><span>FOLLOW THE JOURNEY</span><div><a href="#contact" aria-label="Instagram"><Instagram size={17}/></a><a href="#contact" aria-label="Facebook"><Facebook size={17}/></a><a href="#contact" aria-label="YouTube"><Youtube size={17}/></a></div></div></div>
      </section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span>SSF</span><i/></span><span className="brand-text"><strong>SSF PALEKODE</strong><small>TOWN UNIT</small></span></a><p>Built on values. Moving with purpose.</p><div className="footer-right"><span>© {new Date().getFullYear()} SSF Palekode Unit</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);