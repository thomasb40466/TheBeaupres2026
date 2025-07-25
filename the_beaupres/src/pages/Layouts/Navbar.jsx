import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header style={{ padding: '1rem', background: '#596347' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>The Future Beaupres' Wedding Page</h2>
      </div>
      <div>
        <button onClick={toggleMenu} style={{ fontSize: '1.5rem' }}>☰</button>
      </div>

      {open && (
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/q&a" onClick={() => setOpen(false)}>Q&A</Link>
          <Link to="/registry" onClick={() => setOpen(false)}>Registry</Link>
          <Link to="/rsvp" onClick={() => setOpen(false)}>RSVP</Link>
          <Link to="/things-to-do" onClick={() => setOpen(false)}>Things To Do</Link>
          <Link to="/travel" onClick={() => setOpen(false)}>Travel</Link>
          <Link to="/wedding-party" onClick={() => setOpen(false)}>Wedding Party</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
