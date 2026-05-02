import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="k-hero">
      <div className="k-hero-left">
        <div className="k-hbadge">
          <span className="k-badge-dot" />
          Now Accepting New Clients — Limited Spots
        </div>

        <h1>
          Your Customers
          <br />
          Deserve <span className="k-hl">World-Class</span>
          <br />
          Support.
        </h1>

        <p className="k-hero-sub">
          Kontivio gives you a dedicated, brand-trained support team across chat, email, voice & social — so you scale confidently while every customer feels valued.
        </p>

        <div className="k-hero-btns">
          <Link to="/contact">
            <button className="k-btn-hp">Get a Custom Quote →</button>
          </Link>
          <a href="#how">
            <button className="k-btn-hs">How It Works</button>
          </a>
        </div>

        <div className="k-hstats">
          <div className="k-hs">
            <div className="k-hs-n">&lt;60s</div>
            <div className="k-hs-l">Response SLA</div>
          </div>
          <div className="k-hs">
            <div className="k-hs-n">18+</div>
            <div className="k-hs-l">Languages</div>
          </div>
          <div className="k-hs">
            <div className="k-hs-n">24/7</div>
            <div className="k-hs-l">Coverage</div>
          </div>
          <div className="k-hs">
            <div className="k-hs-n">0</div>
            <div className="k-hs-l">Lock-in</div>
          </div>
        </div>
      </div>

      <div className="k-hero-right">
        {/* Floating cards */}
        <div className="k-fc k-fc1">
          <div className="k-fc-tag">
            <span className="k-live-d" />
            Live Operations
          </div>
          <div className="k-fc-val">Active Network</div>
          <div className="k-fc-sub">Global reach · 24/7 online</div>
        </div>
        <div className="k-fc k-fc3">
          <div className="k-fc-tag">Resolution Rate</div>
          <div className="k-fc-val">87% FCR</div>
          <div className="k-fc-sub">First contact, solved</div>
        </div>
        <div className="k-fc k-fc2">
          <div className="k-fc-tag">Onboarding</div>
          <div className="k-fc-val">3 Weeks Live</div>
          <div className="k-fc-sub">From discovery to full ops</div>
        </div>

        {/* HERO SVG: Animated globe with connections */}
        <svg
          viewBox="0 0 520 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', maxWidth: 520, height: 'auto', position: 'relative', zIndex: 2 }}
        >
          <defs>
            <radialGradient id="gb" cx="50%" cy="42%" r="55%">
              <stop offset="0%" stopColor="#1a4a5e" />
              <stop offset="100%" stopColor="#0b2333" />
            </radialGradient>
            <filter id="gw" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="gw2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="cbg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.09)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
            </linearGradient>
            <path id="op1" d="M260 250 m-170 0 a170 170 0 1 1 340 0 a170 170 0 1 1-340 0" />
            <path id="op2" d="M260 250 m-135 0 a135 135 0 1 0 270 0 a135 135 0 1 0-270 0" />
          </defs>

          {/* Ambient glow */}
          <circle cx="260" cy="250" r="200" fill="rgba(0,200,200,0.06)" />

          {/* Orbital rings */}
          <circle cx="260" cy="250" r="200" stroke="#00c8c8" strokeWidth=".8" strokeOpacity=".12" fill="none" strokeDasharray="4 7" />
          <circle cx="260" cy="250" r="170" stroke="#00c8c8" strokeWidth=".6" strokeOpacity=".08" fill="none" />

          {/* Globe */}
          <circle cx="260" cy="250" r="135" fill="url(#gb)" />
          <circle cx="260" cy="250" r="135" stroke="#00c8c8" strokeWidth="1" strokeOpacity=".2" fill="none" />

          {/* Globe grid */}
          <ellipse cx="260" cy="250" rx="135" ry="38" stroke="#00c8c8" strokeWidth=".5" strokeOpacity=".14" fill="none" />
          <ellipse cx="260" cy="250" rx="135" ry="75" stroke="#00c8c8" strokeWidth=".5" strokeOpacity=".14" fill="none" />
          <ellipse cx="260" cy="250" rx="135" ry="112" stroke="#00c8c8" strokeWidth=".4" strokeOpacity=".1" fill="none" />
          <line x1="260" y1="115" x2="260" y2="385" stroke="#00c8c8" strokeWidth=".5" strokeOpacity=".14" />
          <line x1="125" y1="250" x2="395" y2="250" stroke="#00c8c8" strokeWidth=".5" strokeOpacity=".14" />
          <path d="M190 120 Q260 190 190 380" stroke="#00c8c8" strokeWidth=".4" strokeOpacity=".1" fill="none" />
          <path d="M330 120 Q260 190 330 380" stroke="#00c8c8" strokeWidth=".4" strokeOpacity=".1" fill="none" />

          {/* Continents */}
          <path d="M165 175 Q183 166 205 174 Q218 181 220 193 Q215 208 202 213 Q186 218 172 208 Q159 198 158 186 Z" fill="#00c8c8" opacity=".26" />
          <path d="M183 145 Q193 140 200 148 Q204 155 199 162 Q192 166 184 161 Q178 155 180 149 Z" fill="#00c8c8" opacity=".16" />
          <path d="M194 230 Q210 224 220 236 Q226 250 222 270 Q215 285 202 288 Q190 287 184 274 Q178 258 181 242 Z" fill="#00c8c8" opacity=".2" />
          <path d="M258 158 Q273 152 284 160 Q292 167 289 178 Q281 185 268 183 Q257 178 254 167 Z" fill="#00c8c8" opacity=".28" />
          <path d="M267 196 Q286 192 296 206 Q304 224 300 248 Q294 265 278 268 Q263 268 256 254 Q249 236 252 214 Q256 198 267 196 Z" fill="#00c8c8" opacity=".2" />
          <path d="M295 188 Q310 182 322 190 Q329 198 324 208 Q315 215 302 212 Q291 206 291 197 Z" fill="#00c8c8" opacity=".22" />
          <path d="M308 152 Q342 143 368 154 Q383 164 382 180 Q377 196 356 200 Q332 203 312 195 Q295 186 296 170 Q299 157 308 152 Z" fill="#00c8c8" opacity=".22" />
          <path d="M348 283 Q367 275 378 286 Q386 297 381 310 Q372 320 357 318 Q342 313 338 300 Q337 287 348 283 Z" fill="#00c8c8" opacity=".16" />

          {/* Globe shine */}
          <ellipse cx="218" cy="200" rx="36" ry="26" fill="white" opacity=".04" />

          {/* Connection arcs - animated */}
          <path d="M272 173 Q240 135 208 182" stroke="#00c8c8" strokeWidth="1.5" fill="none" strokeOpacity=".7" strokeDasharray="5 4">
            <animate attributeName="stroke-dashoffset" from="45" to="0" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M295 210 Q282 185 272 173" stroke="#f0b429" strokeWidth="1.5" fill="none" strokeOpacity=".75" strokeDasharray="5 4">
            <animate attributeName="stroke-dashoffset" from="45" to="0" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path d="M295 210 Q318 196 325 196" stroke="#f0b429" strokeWidth="1.4" fill="none" strokeOpacity=".65" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="40" to="0" dur="3.2s" repeatCount="indefinite" />
          </path>
          <path d="M325 196 Q360 210 360 242" stroke="#00c8c8" strokeWidth="1.3" fill="none" strokeOpacity=".55" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="40" to="0" dur="3.8s" repeatCount="indefinite" />
          </path>
          <path d="M272 173 Q305 155 325 196" stroke="#6ef5f5" strokeWidth="1.2" fill="none" strokeOpacity=".4" strokeDasharray="4 5">
            <animate attributeName="stroke-dashoffset" from="40" to="0" dur="4.5s" repeatCount="indefinite" />
          </path>

          {/* New York */}
          <circle cx="208" cy="182" r="5.5" fill="#00c8c8" filter="url(#gw)" />
          <circle cx="208" cy="182" r="10" stroke="#00c8c8" strokeWidth="1" fill="none" opacity=".4">
            <animate attributeName="r" from="6" to="16" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" from=".5" to="0" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <text x="194" y="172" fontSize="7.5" fill="rgba(255,255,255,.65)" fontFamily="Inter,sans-serif" fontWeight="700">New York</text>

          {/* London */}
          <circle cx="272" cy="173" r="5.5" fill="#6ef5f5" filter="url(#gw)" />
          <circle cx="272" cy="173" r="10" stroke="#6ef5f5" strokeWidth="1" fill="none" opacity=".4">
            <animate attributeName="r" from="6" to="16" dur="3.1s" repeatCount="indefinite" />
            <animate attributeName="opacity" from=".5" to="0" dur="3.1s" repeatCount="indefinite" />
          </circle>
          <text x="259" y="163" fontSize="7.5" fill="rgba(255,255,255,.65)" fontFamily="Inter,sans-serif" fontWeight="700">London</text>

          {/* CAIRO HQ */}
          <circle cx="295" cy="210" r="8" fill="#f0b429" filter="url(#gw2)" />
          <circle cx="295" cy="210" r="14" stroke="#f0b429" strokeWidth="1.2" fill="none" opacity=".55">
            <animate attributeName="r" from="9" to="22" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from=".6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          <rect x="276" y="219" width="58" height="17" rx="5" fill="#f0b429" />
          <text x="280" y="231" fontSize="7.8" fill="#0b2333" fontFamily="Inter,sans-serif" fontWeight="800">📍 Cairo HQ</text>

          {/* Dubai */}
          <circle cx="325" cy="196" r="5.5" fill="#00c8c8" filter="url(#gw)" />
          <circle cx="325" cy="196" r="10" stroke="#00c8c8" strokeWidth="1" fill="none" opacity=".4">
            <animate attributeName="r" from="6" to="16" dur="3.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" from=".5" to="0" dur="3.4s" repeatCount="indefinite" />
          </circle>
          <text x="332" y="194" fontSize="7.5" fill="rgba(255,255,255,.62)" fontFamily="Inter,sans-serif" fontWeight="700">Dubai</text>

          {/* Singapore */}
          <circle cx="360" cy="242" r="5" fill="#6ef5f5" filter="url(#gw)" />
          <circle cx="360" cy="242" r="9" stroke="#6ef5f5" strokeWidth="1" fill="none" opacity=".4">
            <animate attributeName="r" from="6" to="15" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" from=".5" to="0" dur="4s" repeatCount="indefinite" />
          </circle>
          <text x="366" y="240" fontSize="7.5" fill="rgba(255,255,255,.58)" fontFamily="Inter,sans-serif" fontWeight="700">Singapore</text>

          {/* Orbiting dots */}
          <g filter="url(#gw)">
            <circle r="4" fill="#6ef5f5">
              <animateMotion dur="10s" repeatCount="indefinite">
                <mpath href="#op1" />
              </animateMotion>
            </circle>
          </g>
          <g filter="url(#gw)">
            <circle r="3" fill="#f0b429" opacity=".85">
              <animateMotion dur="14s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#op2" />
              </animateMotion>
            </circle>
          </g>

          {/* Dashboard card */}
          <rect x="398" y="52" width="112" height="100" rx="11" fill="url(#cbg)" stroke="rgba(255,255,255,0.11)" strokeWidth="1" />
          <rect x="398" y="52" width="112" height="3.5" rx="1.5" fill="#00c8c8" opacity=".7" />
          <text x="408" y="71" fontSize="6.5" fill="#00c8c8" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1">LIVE CSAT</text>
          <text x="408" y="87" fontSize="18" fill="white" fontFamily="Inter,sans-serif" fontWeight="800">98.4%</text>
          <text x="408" y="98" fontSize="6.5" fill="rgba(255,255,255,.38)" fontFamily="Inter,sans-serif">avg across all agents</text>
          <polyline points="408,132 418,122 430,126 442,116 454,118 466,108 478,112 490,104" stroke="#00c8c8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="490" cy="104" r="2.5" fill="#6ef5f5" />
          <text x="408" y="145" fontSize="6" fill="rgba(255,255,255,.28)" fontFamily="Inter,sans-serif">↑ improving weekly</text>

          {/* Agents card */}
          <rect x="10" y="320" width="120" height="108" rx="11" fill="url(#cbg)" stroke="rgba(255,255,255,0.11)" strokeWidth="1" />
          <rect x="10" y="320" width="120" height="3.5" rx="1.5" fill="#f0b429" opacity=".7" />
          <text x="20" y="338" fontSize="6.5" fill="#f0b429" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1">AGENTS ONLINE</text>
          <circle cx="26" cy="360" r="10" fill="#00a8a8" opacity=".8" />
          <text x="22" y="364" fontSize="8" fill="white" fontFamily="Inter,sans-serif" fontWeight="700">JK</text>
          <circle cx="48" cy="360" r="10" fill="#008888" opacity=".8" />
          <text x="44" y="364" fontSize="8" fill="white" fontFamily="Inter,sans-serif" fontWeight="700">SR</text>
          <circle cx="70" cy="360" r="10" fill="#006868" opacity=".8" />
          <text x="66" y="364" fontSize="8" fill="white" fontFamily="Inter,sans-serif" fontWeight="700">NA</text>
          <circle cx="92" cy="360" r="10" fill="rgba(0,200,200,.4)" />
          <text x="88" y="364" fontSize="8" fill="white" fontFamily="Inter,sans-serif" fontWeight="600">+9</text>
          <text x="20" y="383" fontSize="8.5" fill="white" fontFamily="Inter,sans-serif" fontWeight="700">12 Live Now</text>
          <text x="20" y="394" fontSize="6.5" fill="rgba(255,255,255,.32)" fontFamily="Inter,sans-serif">Multiple time zones</text>
          <circle cx="20" cy="410" r="3.5" fill="#4ade80">
            <animate attributeName="opacity" values="1;.25;1" dur="1.1s" repeatCount="indefinite" />
          </circle>
          <text x="29" y="414" fontSize="6.5" fill="#4ade80" fontFamily="Inter,sans-serif" fontWeight="700">All systems operational</text>

          {/* Channels card */}
          <rect x="398" y="350" width="112" height="115" rx="11" fill="url(#cbg)" stroke="rgba(255,255,255,0.11)" strokeWidth="1" />
          <rect x="398" y="350" width="112" height="3.5" rx="1.5" fill="#6ef5f5" opacity=".7" />
          <text x="408" y="368" fontSize="6.5" fill="#6ef5f5" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1">ACTIVE CHANNELS</text>
          <text x="408" y="383" fontSize="7.5" fill="rgba(255,255,255,.7)" fontFamily="Inter,sans-serif">💬 Live Chat</text>
          <rect x="408" y="387" width="40" height="4" rx="2" fill="#4ade80" opacity=".75" />
          <text x="408" y="402" fontSize="7.5" fill="rgba(255,255,255,.7)" fontFamily="Inter,sans-serif">📞 Voice</text>
          <rect x="408" y="406" width="28" height="4" rx="2" fill="#00c8c8" opacity=".75" />
          <text x="408" y="421" fontSize="7.5" fill="rgba(255,255,255,.7)" fontFamily="Inter,sans-serif">✉️ Email</text>
          <rect x="408" y="425" width="44" height="4" rx="2" fill="#6ef5f5" opacity=".75" />
          <text x="408" y="440" fontSize="7.5" fill="rgba(255,255,255,.7)" fontFamily="Inter,sans-serif">📱 Social</text>
          <rect x="408" y="444" width="20" height="4" rx="2" fill="#f0b429" opacity=".75" />
          <text x="408" y="458" fontSize="6" fill="rgba(255,255,255,.28)" fontFamily="Inter,sans-serif">18+ languages supported</text>

          {/* BIG K watermark inside globe */}
          <g opacity=".04" transform="translate(185,175) scale(0.55)">
            <polygon points="8,4 8,104 52,4" fill="#00c8c8" />
            <polygon points="8,104 52,4 82,4 44,104" fill="#00c8c8" />
            <polygon points="8,108 44,108 82,200 8,200" fill="#00c8c8" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
