function Pipeline({ t, lang, openLead, project }) {
  const [q, setQ] = React.useState('');
  const [view, setView] = React.useState(0);
  const leads = AA_LEADS.filter(l => (project === 'all' || l.project === project) && (!q || (l.name + l.ar + l.phone + l.project).toLowerCase().includes(q.toLowerCase())));
  const card = l => (
    <div key={l.id} onClick={() => openLead(l.id)} className="aa-card" style={{ background: '#fff', borderRadius: 12, padding: 14, boxShadow: 'var(--ss-shadow-kpi)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <DS.Avatar initials={l.name.split(' ').map(x => x[0]).slice(0, 2).join('')} size={32} color={l.status === 'qualified' ? 'green' : l.status === 'unreachable' ? 'danger' : 'blue'} />
        <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 14, color: 'var(--ss-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lang === 'ar' ? l.ar : l.name}</div><div style={{ fontSize: 11, color: 'var(--ss-gray-550)' }}>{l.id} · {l.when}</div></div>
        {l.score != null ? <ScoreRing score={l.score} size={34} stroke={3} /> : l.status === 'calling' ? <LiveDot /> : null}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}><DS.Tag color="gray">{l.project}</DS.Tag><DS.Tag color="indigo">{l.lang}</DS.Tag>{l.unit !== '—' ? <DS.Tag color="blue">{l.unit}</DS.Tag> : null}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ss-gray-550)' }}><span>{l.channel}</span><span>{lang === 'ar' ? 'محاولة' : 'Attempt'} {l.attempts}/3</span></div>
      {l.odoo ? <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--ss-green-600)' }}><DS.Icon name="check" size={12} />Odoo {l.odoo} · WhatsApp ✓</div> : null}
      {l.callback ? <div style={{ fontSize: 11, color: 'var(--ss-orange-400)' }}>↻ {l.callback}</div> : null}
    </div>);
  return (
    <div>
      <PageHead title={t.pipeTitle} sub={t.pipeSub} right={<DS.SegmentedControls tabs={lang === 'ar' ? ['لوحة', 'قائمة'] : ['Board', 'List']} value={view} onChange={setView} />} />
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 260px', maxWidth: 420, minWidth: 0 }}><DS.SearchInput placeholder={t.search} value={q} onChange={e => setQ(e.target.value)} width="100%" /></div>
        <span style={{ fontSize: 13, color: 'var(--ss-gray-550)' }}>{leads.length} {lang === 'ar' ? 'عميل' : 'leads'}</span>
      </div>
      {view === 0 ? (
        <div style={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: 'minmax(min(78vw, 250px), 1fr)', gap: 14, overflowX: 'auto', paddingBottom: 12, scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
          {AA_STATUSES.map(s => {
            const col = leads.filter(l => l.status === s.id);
            return (
              <div key={s.id} style={{ scrollSnapAlign: 'start', background: 'rgba(255,255,255,0.55)', borderRadius: 14, padding: 10, display: 'flex', flexDirection: 'column', gap: 10, minHeight: 420 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 4px 6px' }}><DS.Tag color={s.color} variant={s.id === 'qualified' ? 'filled' : 'bordered'} size="md">{s[lang]}</DS.Tag><span style={{ fontSize: 12, color: 'var(--ss-gray-550)' }}>{col.length}</span></div>
                {col.map(card)}
              </div>);
          })}
        </div>
      ) : (<>
        <div className="aa-mob" style={{ flexDirection: 'column', gap: 10 }}>{leads.map(l => <div key={l.id} style={{ position: 'relative' }}>{card(l)}<span style={{ position: 'absolute', top: 14, insetInlineEnd: 56 }}><DS.Tag color={aaStatus(l.status).color} size="sm">{aaStatus(l.status)[lang]}</DS.Tag></span></div>)}</div>
        <div className="aa-desk" style={{ background: '#fff', borderRadius: 23, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '220px 150px 140px 160px 80px 90px 150px 140px', minWidth: 1130 }}>
              {(lang === 'ar' ? ['العميل', 'الهاتف', 'المشروع', 'القناة', 'اللغة', 'التقييم', 'الحالة', 'Odoo'] : ['Lead', 'Phone', 'Project', 'Channel', 'Lang', 'Score', 'Status', 'Odoo']).map(h => <DS.TableCell key={h} type="header">{h}</DS.TableCell>)}
              {leads.map((l, i) => {
                const c = i % 2 ? 'gray' : 'white', s = aaStatus(l.status);
                return (
                  <React.Fragment key={l.id}>
                    <DS.TableCell color={c} type="account" avatar={{ initials: l.name.split(' ').map(x => x[0]).slice(0, 2).join('') }} sub={l.id}><span style={{ cursor: 'pointer', color: 'var(--ss-teal-700)' }} onClick={() => openLead(l.id)}>{lang === 'ar' ? l.ar : l.name}</span></DS.TableCell>
                    <DS.TableCell color={c}><span dir="ltr">{l.phone}</span></DS.TableCell>
                    <DS.TableCell color={c}>{l.project}</DS.TableCell>
                    <DS.TableCell color={c}>{l.channel}</DS.TableCell>
                    <DS.TableCell color={c}>{l.lang}</DS.TableCell>
                    <DS.TableCell color={c}>{l.score != null ? l.score : '—'}</DS.TableCell>
                    <DS.TableCell color={c} type="tag" tagColor={s.color}>{s[lang]}</DS.TableCell>
                    <DS.TableCell color={c}>{l.odoo || '—'}</DS.TableCell>
                  </React.Fragment>);
              })}
            </div>
          </div>
        </div>
      </>)}
    </div>
  );
}
window.Pipeline = Pipeline;
