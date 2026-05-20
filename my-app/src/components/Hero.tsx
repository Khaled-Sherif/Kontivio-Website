import React from 'react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n';

export const Hero: React.FC = () => {
  const t = useT();
  return (
    <section className="k-hero">
      <div className="k-hero-left">
        <div className="k-hbadge">
          <span className="k-badge-dot" />
          {t('hero.badge')}
        </div>
        <h1>
          {t('hero.h1.line1')}<br />
          {t('hero.h1.line2.before')} <span className="k-hl">{t('hero.h1.line2.highlight')}</span><br />
          {t('hero.h1.line3')}
        </h1>
        <p className="k-hero-sub">{t('hero.sub')}</p>
        <div className="k-hero-btns">
          <Link to="/pricing/recommend"><button className="k-btn-hp">{t('hero.cta.getStarted')} →</button></Link>
          <a href="#how"><button className="k-btn-hs">{t('hero.cta.howItWorks')}</button></a>
        </div>
        <div className="k-hstats">
          <div className="k-hs"><div className="k-hs-n">&lt;60s</div><div className="k-hs-l">{t('hero.stats.responseSLA')}</div></div>
          <div className="k-hs"><div className="k-hs-n">18+</div><div className="k-hs-l">{t('hero.stats.languages')}</div></div>
          <div className="k-hs"><div className="k-hs-n">24/7</div><div className="k-hs-l">{t('hero.stats.coverage')}</div></div>
          <div className="k-hs"><div className="k-hs-n">0</div><div className="k-hs-l">{t('hero.stats.lockIn')}</div></div>
        </div>
      </div>

      <div className="k-hero-right">
        <div className="k-fc k-fc1">
          <div className="k-fc-tag"><span className="k-live-d" />{t('hero.fc.liveOps')}</div>
          <div className="k-fc-val">{t('hero.fc.activeNetwork')}</div>
          <div className="k-fc-sub">{t('hero.fc.globalReach')}</div>
        </div>
        <div className="k-fc k-fc3">
          <div className="k-fc-tag">{t('hero.fc.resolutionRate')}</div>
          <div className="k-fc-val">{t('hero.fc.fcr')}</div>
          <div className="k-fc-sub">{t('hero.fc.firstContactSolved')}</div>
        </div>
        <div className="k-fc k-fc2">
          <div className="k-fc-tag">{t('hero.fc.onboarding')}</div>
          <div className="k-fc-val">{t('hero.fc.weeksLive')}</div>
          <div className="k-fc-sub">{t('hero.fc.discoveryToOps')}</div>
        </div>

        <svg viewBox="0 0 520 500" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', maxWidth: 520, height: 'auto', position: 'relative', zIndex: 2 }}>
          <defs>
            <radialGradient id="gb" cx="50%" cy="42%" r="55%">
              <stop offset="0%" stopColor="#1a4a5e" />
              <stop offset="100%" stopColor="#0b2333" />
            </radialGradient>
            <filter id="gw" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="gw2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="cbg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.09)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
            </linearGradient>
            <path id="op1" d="M260 250 m-170 0 a170 170 0 1 1 340 0 a170 170 0 1 1-340 0" />
            <path id="op2" d="M260 250 m-135 0 a135 135 0 1 0 270 0 a135 135 0 1 0-270 0" />
          </defs>
          <circle cx="260" cy="250" r="200" fill="rgba(0,200,200,0.06)" />
          <circle cx="260" cy="250" r="200" stroke="#00c8c8" strokeWidth=".8" strokeOpacity=".12" fill="none" strokeDasharray="4 7" />
          <circle cx="260" cy="250" r="170" stroke="#00c8c8" strokeWidth=".6" strokeOpacity=".08" fill="none" />
          <circle cx="260" cy="250" r="135" fill="url(#gb)" />
          <circle cx="260" cy="250" r="135" stroke="#00c8c8" strokeWidth="1" strokeOpacity=".2" fill="none" />
          <ellipse cx="260" cy="250" rx="135" ry="38" stroke="#00c8c8" strokeWidth=".5" strokeOpacity=".14" fill="none" />
          <ellipse cx="260" cy="250" rx="135" ry="75" stroke="#00c8c8" strokeWidth=".5" strokeOpacity=".14" fill="none" />
          <ellipse cx="260" cy="250" rx="135" ry="112" stroke="#00c8c8" strokeWidth=".4" strokeOpacity=".1" fill="none" />
          <line x1="260" y1="115" x2="260" y2="385" stroke="#00c8c8" strokeWidth=".5" strokeOpacity=".14" />
          <line x1="125" y1="250" x2="395" y2="250" stroke="#00c8c8" strokeWidth=".5" strokeOpacity=".14" />
          <path d="M165 175 Q183 166 205 174 Q218 181 220 193 Q215 208 202 213 Q186 218 172 208 Q159 198 158 186 Z" fill="#00c8c8" opacity=".26" />
          <path d="M194 230 Q210 224 220 236 Q226 250 222 270 Q215 285 202 288 Q190 287 184 274 Q178 258 181 242 Z" fill="#00c8c8" opacity=".2" />
          <path d="M258 158 Q273 152 284 160 Q292 167 289 178 Q281 185 268 183 Q257 178 254 167 Z" fill="#00c8c8" opacity=".28" />
          <path d="M267 196 Q286 192 296 206 Q304 224 300 248 Q294 265 278 268 Q263 268 256 254 Q249 236 252 214 Q256 198 267 196 Z" fill="#00c8c8" opacity=".2" />
          <path d="M308 152 Q342 143 368 154 Q383 164 382 180 Q377 196 356 200 Q332 203 312 195 Q295 186 296 170 Q299 157 308 152 Z" fill="#00c8c8" opacity=".22" />
          <path d="M348 283 Q367 275 378 286 Q386 297 381 310 Q372 320 357 318 Q342 313 338 300 Q337 287 348 283 Z" fill="#00c8c8" opacity=".16" />
          <ellipse cx="218" cy="200" rx="36" ry="26" fill="white" opacity=".04" />
          <circle cx="295" cy="210" r="8" fill="#f0b429" filter="url(#gw2)" />
          <rect x="276" y="219" width="58" height="17" rx="5" fill="#f0b429" />
          <text x="280" y="231" fontSize="7.8" fill="#0b2333" fontFamily="Inter,sans-serif" fontWeight="800">📍 Cairo HQ</text>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
