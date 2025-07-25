function Registry() {
  const registries = [
    { name: 'Honeymoon Fund', url: '#' },
    { name: 'Crate & Barrel', url: 'https://www.crateandbarrel.com/' },
    { name: 'Williams Sonoma', url: 'https://www.williams-sonoma.com/' },
    { name: 'West Elm', url: 'https://www.westelm.com/' },
    { name: 'Pottery Barn', url: 'https://www.potterybarn.com/' },
    { name: 'Anthropology', url: 'https://www.anthropologie.com/' },
    { name: 'Target', url: 'https://www.target.com/gift-registry/' },
    { name: 'Amazon', url: 'https://www.amazon.com/wedding' },
  ];

  return (
    <section>
      <h2 style={{ marginBottom: '1rem' }}>Our Wedding Registry</h2>
      <p>We feel so lucky to celebrate this special day with you. If you'd like to contribute, please visit one of our registries below:</p>

      <div style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        marginTop: '2rem'
      }}>
        {registries.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1rem',
              backgroundColor: 'var(--accent)',
              color: 'white',
              textAlign: 'center',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--highlight)'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent)'}
          >
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Registry;
