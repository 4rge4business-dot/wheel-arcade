export const DEFAULT_WHEELS = [
  {
    id: 'classic',
    title: 'Classic Wheel',
    subtitle: 'Free — 8 slices',
    isPremium: false,
    segments: [
      { label: '10 pts', color: '#FF6B6B' },
      { label: '20 pts', color: '#FFB86B' },
      { label: 'LOSE', color: '#6BCB77' },
      { label: '5 pts', color: '#4D96FF' },
      { label: '50 pts', color: '#845EC2' },
      { label: 'Extra Spin', color: '#FFC75F' },
      { label: '100 pts', color: '#F0A0FF' },
      { label: 'Bankrupt', color: '#C0C0C0' }
    ]
  },
  {
    id: 'emoji_pack',
    title: 'Emoji Pack',
    subtitle: 'Premium — fun emojis',
    isPremium: true,
    segments: [
      { label: '😀', color: '#FF6B6B' },
      { label: '🎉', color: '#FFB86B' },
      { label: '😎', color: '#6BCB77' },
      { label: '🤖', color: '#4D96FF' },
      { label: '🚀', color: '#845EC2' },
      { label: '🦄', color: '#FFC75F' },
      { label: '🔥', color: '#F0A0FF' },
      { label: '💎', color: '#C0C0C0' }
    ]
  },
  {
    id: 'pirate_booty',
    title: 'Pirate Booty',
    subtitle: 'Free — for scallywags',
    isPremium: false,
    segments: [
      { label: 'Gold', color: '#FFD700' },
      { label: 'Rum', color: '#A0522D' },
      { label: 'Parrot', color: '#008000' },
      { label: 'Anchor', color: '#708090' },
      { label: 'Map', color: '#DEB887' },
      { label: 'Kraken', color: '#483D8B' },
      { label: 'Walk Plank', color: '#A9A9A9' },
      { label: 'Treasure', color: '#DAA520' }
    ]
  }
]

export const WHEEL_DESCRIPTIONS = [
  { id:'classic', title:'Classic Wheel', blurb:'A friendly 8-slice wheel with points, extra spins, and fun outcomes.' },
  { id:'emoji_pack', title:'Emoji Pack', blurb:'Premium emoji wheel packed with playful icons. Unlock via Stripe.' },
  { id:'pirate_booty', title:'Pirate Booty', blurb:'Arrr, matey! Spin for pirate treasure and adventure.' }
]
