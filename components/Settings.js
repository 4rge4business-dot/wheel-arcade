import { useState, useEffect } from 'react'
export default function Settings(){
  const [sound,setSound]=useState(true), [vib,setVib]=useState(true)
  useEffect(()=>{ const s=localStorage.getItem('wheel.sound'); const v=localStorage.getItem('wheel.vibrate'); if(s!==null) setSound(s==='1'); if(v!==null) setVib(v==='1') },[])
  useEffect(()=> localStorage.setItem('wheel.sound', sound ? '1':'0'), [sound])
  useEffect(()=> localStorage.setItem('wheel.vibrate', vib ? '1':'0'), [vib])
  return (<div style={{background:'rgba(255,255,255,0.02)',padding:10,borderRadius:8}}><div style={{marginBottom:6}}>Settings</div><label style={{display:'flex',justifyContent:'space-between'}}><span>Sound</span><input type='checkbox' checked={sound} onChange={()=>setSound(s=>!s)} /></label><label style={{display:'flex',justifyContent:'space-between'}}><span>Vibration</span><input type='checkbox' checked={vib} onChange={()=>setVib(v=>!v)} /></label></div>)
}
