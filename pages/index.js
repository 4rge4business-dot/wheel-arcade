import Head from 'next/head'
import Wheel from '../components/Wheel'
import Settings from '../components/Settings'
import { DEFAULT_WHEELS, WHEEL_DESCRIPTIONS } from '../data/wheels'

export default function Home(){
  return (
    <div>
      <Head>
        <title>Wheel Arcade — Spin & Win</title>
        <meta name="description" content="Wheel Arcade — spin a 2D wheel, unlock premium wheels via Stripe, powered by Supabase." />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>🎡 Wheel Arcade</h1>
          <p>Spin the wheel. Win fun results. Unlock premium wheels.</p>
          <div className="ad-slot">Top Ad (placeholder)</div>
        </div>
      </header>
      <main className="container">
        <div style={{display:'flex',gap:20,alignItems:'flex-start',flexWrap:'wrap'}}>
          <div style={{flex:'1 1 640px',minWidth:320}}>
            <Wheel wheel={DEFAULT_WHEELS[0]} />
          </div>
          <aside style={{width:320}}>
            <h3>Wheels</h3>
            {DEFAULT_WHEELS.map(w => (
              <div key={w.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:8,marginBottom:8,background:'#071226',borderRadius:8}}>
                <div>
                  <strong>{w.title}</strong>
                  <div style={{fontSize:12,color:'#9fb8ff'}}>{w.subtitle}</div>
                </div>
                <div>
                  {!w.isPremium ? <button onClick={()=>{ window.location.reload() }}>Select</button> : <button onClick={()=>alert('Purchase via Stripe (not configured)')}>Buy</button>}
                </div>
              </div>
            ))}
            <div style={{marginTop:12}}><Settings /></div>
            <div style={{marginTop:16}} className="ad-slot">Inline Ad (placeholder)</div>
          </aside>
        </div>
        <section style={{marginTop:28}}>
          <h2>How it works</h2>
          {WHEEL_DESCRIPTIONS.map(d => (<div key={d.id} style={{marginBottom:12}}><h4>{d.title}</h4><p>{d.blurb}</p></div>))}
        </section>
      </main>
      <footer style={{padding:24,textAlign:'center'}}><a href="/policies/privacy-policy">Privacy</a> · <a href="/policies/terms-of-service">TOS</a></footer>
      <style jsx>{`.container{max-width:980px;margin:0 auto;padding:20px}.hero{padding:28px;background:linear-gradient(180deg,#071426,#041024);border-radius:12px;color:#eaf2ff}.ad-slot{border:2px dashed rgba(255,255,255,0.04);padding:12px;border-radius:10px;margin-top:12px}button{background:#ff7b7b;border:none;padding:8px 12px;border-radius:8px;color:white}`}</style>
    </div>
  )
}
