/* Original SVG scenery for Little Bear's Night Out. Pure, dependency-free assets. */
(function (root) {
  'use strict';
  const C = { ink:'#29364b', cream:'#fff7e8', lilac:'#b7a9df', peach:'#f3b897', moss:'#889f79' };
  const number = (value, fallback=0) => Number.isFinite(Number(value)) ? Number(value) : fallback;
  const serif = "'Songti SC','STSong',serif";
  function label(text,x,y,size=16,fill=C.ink,extra='') {
    return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-family="${serif}" ${extra}>${text}</text>`;
  }
  function star(x,y,r=4,color='#e7d4a1') {
    return `<path d="M${x} ${y-r}q0 ${r} ${r} ${r}q-${r} 0-${r} ${r}q0-${r}-${r}-${r}q${r} 0 ${r}-${r}Z" fill="${color}"/>`;
  }
  function moon(x,y,r=23,bg='#69758e') {
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#f5dfae"/><circle cx="${x+r*.37}" cy="${y-r*.26}" r="${r*.9}" fill="${bg}"/>`;
  }
  function sprig(x,y,scale=1,tone=C.moss) {
    return `<g transform="translate(${x} ${y}) scale(${scale})"><path d="M0 0q-6-34 9-57M0-17q-25-5-25-25q24-4 27 15M2-31q22-4 25-24q-24-8-24 15" fill="${tone}"/><path d="M0 0q-5-32 9-57" fill="none" stroke="#627c63" stroke-width="2"/><path d="M-18-1h36l-5 31h-26Z" fill="#cb9577"/><path d="M-20-3h40v7h-40Z" fill="#e4b395"/></g>`;
  }
  function flower(x,y,s=1,petal='#efc5af') {
    return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0v18m0-5q-9-8-12-3q2 8 12 7" stroke="#778c70" stroke-width="2" fill="#9eaf88"/><g fill="${petal}"><circle cy="-5" r="5"/><circle cx="5" r="5"/><circle cy="5" r="5"/><circle cx="-5" r="5"/></g><circle r="3" fill="#bd9757"/></g>`;
  }
  function letter(x,y,s=1) {
    return `<g transform="translate(${x} ${y}) scale(${s})"><rect width="66" height="45" rx="4" fill="#fff0cd" stroke="#b5a58a" stroke-width="1.5"/><path d="M2 3l31 23L64 3M2 42l24-21m38 21L40 21" fill="none" stroke="#b5a58a" stroke-width="1.5"/><circle cx="33" cy="25" r="7" fill="#be816f"/><path d="M30 24q0-4 3-1q3-3 3 1l-3 4Z" fill="#ffe8cd"/></g>`;
  }
  function bear(x,y,scale=1,role='bear') {
    const detective = role === 'detective';
    return `<g transform="translate(${number(x)} ${number(y)}) scale(${number(scale,1)})" class="bear-character">
      <ellipse cx="0" cy="74" rx="32" ry="7" fill="#29364b18"/>
      <ellipse cx="0" cy="45" rx="23" ry="28" fill="#c69b7d"/>
      <ellipse cx="-14" cy="71" rx="12" ry="7" fill="#b88c70"/><ellipse cx="14" cy="71" rx="12" ry="7" fill="#b88c70"/>
      <ellipse cx="-25" cy="43" rx="7" ry="18" fill="#c69b7d" transform="rotate(15 -25 43)"/>
      <ellipse cx="25" cy="43" rx="7" ry="18" fill="#c69b7d" transform="rotate(-15 25 43)"/>
      <circle cx="-23" cy="-10" r="12" fill="#c69b7d"/><circle cx="23" cy="-10" r="12" fill="#c69b7d"/>
      <circle cx="-23" cy="-10" r="6" fill="#ead0b7"/><circle cx="23" cy="-10" r="6" fill="#ead0b7"/>
      <ellipse cy="10" rx="32" ry="29" fill="#d5ad8c"/>
      <ellipse cy="20" rx="13" ry="10" fill="#f0d9bb"/>
      <circle cx="-12" cy="8" r="2.7" fill="#39404a"/><circle cx="12" cy="8" r="2.7" fill="#39404a"/>
      <path d="M-4 17q4-3 8 0l-4 4Z" fill="#51463f"/><path d="M0 21v4m-5 0q5 4 10 0" stroke="#6b5143" stroke-width="1.3" fill="none"/>
      <ellipse cx="-21" cy="21" rx="5" ry="3" fill="#df9b8d" opacity=".7"/><ellipse cx="21" cy="21" rx="5" ry="3" fill="#df9b8d" opacity=".7"/>
      ${detective?`<path d="M-23 33h46v28h-46Z" fill="#a59ab9"/><path d="M-22 34l22 17 22-17M0 51v15" stroke="#80748e" stroke-width="2" fill="none"/><circle cy="57" r="2" fill="#f4d9ac"/>
      <path d="M-35-8h70q-1-8-11-9l-5-13h-39l-5 13q-9 1-10 9Z" fill="#a59ab9"/><path d="M-25-17h50" stroke="#776e88" stroke-width="5"/><circle cx="40" cy="41" r="12" fill="#d8e4d4aa" stroke="#7f7463" stroke-width="4"/><path d="M32 51l-9 15" stroke="#7f7463" stroke-width="5" stroke-linecap="round"/>`:
      `<path d="M-22 35q22 6 44 0v10q-22 6-44 0Z" fill="#a394c7"/><path d="M12 40v20h10V40" fill="#a394c7"/>`}
    </g>`;
  }
  function robot(x,y,scale=1) {
    return `<g transform="translate(${number(x)} ${number(y)}) scale(${number(scale,1)})" class="robot-character">
      <ellipse cx="0" cy="80" rx="32" ry="7" fill="#29364b18"/>
      <path d="M-14 63v13h-13m41-13v13h13" stroke="#697777" stroke-width="9" fill="none" stroke-linecap="round"/>
      <rect x="-23" y="25" width="46" height="43" rx="7" fill="#d6bd98" stroke="#ae9374" stroke-width="2"/>
      <path d="M-23 31h46" stroke="#ad9171" stroke-width="2"/><rect x="-12" y="38" width="24" height="18" rx="3" fill="#f5e5bc"/>
      <path d="M-3 44q-1-5-5-3q-7 4 8 11q15-7 8-11q-4-2-5 3Z" fill="#cf8d77"/>
      <path d="M-25 33l-12 16m62-16l12 16" stroke="#778281" stroke-width="6" stroke-linecap="round"/>
      <circle cx="-37" cy="51" r="6" fill="#d1b490"/><circle cx="37" cy="51" r="6" fill="#d1b490"/>
      <path d="M0-19v-13" stroke="#879387" stroke-width="3"/><circle cy="-35" r="5" fill="#b6a5d8"/>
      <rect x="-32" y="-19" width="64" height="48" rx="10" fill="#e0c6a0" stroke="#ad9171" stroke-width="2"/>
      <path d="M-29-11h58" stroke="#efd9b6" stroke-width="3"/><rect x="-21" y="-7" width="42" height="23" rx="7" fill="#536469"/>
      <path d="M-12 2v5m24-5v5" stroke="#f5e7bb" stroke-width="4" stroke-linecap="round"/><path d="M-5 10q5 4 10 0" stroke="#ead5ad" stroke-width="1.5" fill="none"/>
      <rect x="-37" y="-4" width="5" height="17" rx="2" fill="#b6a5d8"/><rect x="32" y="-4" width="5" height="17" rx="2" fill="#b6a5d8"/>
      <path d="M-7 22h14" stroke="#a48870" stroke-width="2"/><text x="0" y="64" font-size="6" text-anchor="middle" fill="#6e695c" font-family="sans-serif">阿饶</text>
    </g>`;
  }
  function bunny(x,y,s=1) {
    return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="-11" cy="-29" rx="9" ry="27" fill="#e6dac9" transform="rotate(-12 -11 -29)"/><ellipse cx="12" cy="-29" rx="9" ry="27" fill="#e6dac9" transform="rotate(9 12 -29)"/><path d="M-13-45l3 27m23-27l-2 27" stroke="#d6afac" stroke-width="5" stroke-linecap="round"/><ellipse cy="36" rx="23" ry="29" fill="#e6dac9"/><ellipse cy="2" rx="29" ry="26" fill="#eee3d2"/><circle cx="-10" cy="0" r="2.5" fill="#414b53"/><circle cx="10" cy="0" r="2.5" fill="#414b53"/><path d="M-3 8h6l-3 4Z" fill="#b98484"/><path d="M-20 26q20 8 40 0v10h-40Z" fill="#a2af88"/></g>`;
  }
  function cat(x,y,s=1) {
    return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M20 48q34 3 22-24" stroke="#9f9ba9" stroke-width="9" fill="none" stroke-linecap="round"/><ellipse cy="35" rx="22" ry="27" fill="#aca8b5"/><path d="M-26-7l4-24L-7-14Q0-18 8-14l16-17 4 25q10 37-28 37t-26-38Z" fill="#bcb7c2"/><path d="M-20-23l9 10h-11m42-10l-9 10h11" fill="#d4b2b2"/><path d="M-16 2h7m18 0h7" stroke="#414b53" stroke-width="2.3" stroke-linecap="round"/><path d="M-3 8h6l-3 4Z" fill="#8d6e79"/><path d="M-29 11l12 2m-12 5l12-1m34-4l12-2m-12 6l12 1" stroke="#8a8795" stroke-width="1.5"/><path d="M-18 29h36v10h-36Z" fill="#d1a17f"/></g>`;
  }
  function stars(id,width,height=230) {
    return Array.from({length:25},(_,i)=>{
      const x=35+(i*173%(width-70)),y=20+(i*79%(height-30));
      return i%4===0?star(x,y,3+(i%3),'#e8d7b2'):`<circle cx="${x}" cy="${y}" r="${i%3===0?2:1.3}" fill="#f5e5bf" opacity="${.35+(i%5)*.12}"/>`;
    }).join('');
  }
  function wrap(width,height,id,title,body,defs='') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${title}" class="bear-scene bear-scene-${id}"><defs>${defs}</defs>${body}</svg>`;
  }
  function hub() {
    const body=`
      <path d="M8 537V220C8 48 236-6 379 39Q585-17 773 39q209-43 419 158v342Z" fill="url(#hub-sky)"/>
      ${stars('hub',1200,240)}${moon(1087,91,30,'#69758e')}
      <path d="M30 340q118-133 252-26q110-102 238 1q165-102 314-6q170-119 335 12v246H30Z" fill="#89948e" opacity=".5"/>
      <path d="M0 458q177-84 350-29q179-72 358-2q231-83 492 35v158H0Z" fill="#a6b496"/>
      <path d="M0 526q215-28 374 17q204-54 392-7q206-35 434-4v88H0Z" fill="#c6ccb0"/>
      <path d="M177 455q-2 52 38 79q92 62 383 24q157-23 383-10q67 3 107-29" fill="none" stroke="#e8ddbf" stroke-width="48" stroke-linecap="round"/>
      <path d="M202 512q192 77 396 46q257-38 482-10" fill="none" stroke="#cbbd9f" stroke-width="2" stroke-dasharray="4 13"/>
      <ellipse cx="207" cy="496" rx="165" ry="23" fill="#4c594a20"/>
      <g class="agency-building">
      <path d="M71 282h282v205H71Z" fill="#d5c6d6" stroke="#82788b" stroke-width="3"/>
      <path d="M60 280l152-118 153 118Z" fill="#7e728f" stroke="#665c78" stroke-width="3"/>
      <path d="M83 264l129-99 129 99" stroke="#a091b0" stroke-width="4" fill="none"/>
      <path d="M109 247h206M139 225h145M170 203h83" stroke="#9687a6" stroke-width="2"/>
      <rect x="178" y="208" width="67" height="53" rx="23" fill="#efd5a1" stroke="#a69ab1" stroke-width="5"/>
      <path d="M211 210v48m-31-25h61" stroke="#9b8ca4" stroke-width="3"/>
      <path d="M72 311h280M72 346h280M72 381h280M72 416h280M72 451h280" stroke="#b5a9bb" stroke-width="1.6"/>
      <rect x="95" y="335" width="62" height="82" rx="23" fill="#f2dda9" stroke="#9a88a2" stroke-width="6"/><path d="M126 337v78m-29-37h58" stroke="#ac98af" stroke-width="3"/>
      <rect x="269" y="335" width="62" height="82" rx="23" fill="#f2dda9" stroke="#9a88a2" stroke-width="6"/><path d="M300 337v78m-29-37h58" stroke="#ac98af" stroke-width="3"/>
      <path d="M178 485V367q33-41 67 0v118Z" fill="#655d79"/><path d="M188 477V371q23-26 47 0v106Z" fill="#81718d"/>
      <circle cx="229" cy="421" r="3" fill="#edcd93"/><rect x="144" y="288" width="135" height="34" rx="5" fill="#fff1d5" stroke="#a3919c" stroke-width="2"/>
      ${label('小熊侦探社',211,311,17,'#5f5870','text-anchor="middle" letter-spacing="2"')}
      <path d="M163 487h96v10h-96Z" fill="#ad9d9b"/>
      <g transform="translate(53 349)"><path d="M0 0v99" stroke="#6d6c70" stroke-width="5"/><path d="M0 6h-25v-28h25" fill="#a99ec0" stroke="#746f83" stroke-width="2"/><circle cx="-13" cy="-10" r="6" fill="none" stroke="#fff2ce" stroke-width="2"/><path d="M-9-6l5 6" stroke="#fff2ce" stroke-width="2"/></g>
      </g>
      <ellipse cx="600" cy="500" rx="174" ry="24" fill="#4c594a20"/>
      <g class="factory-building">
      <rect x="440" y="277" width="321" height="213" rx="8" fill="#a8bbaf" stroke="#758b82" stroke-width="3"/>
      <path d="M426 282l80-66 83 66 82-66 104 66Z" fill="#668b83" stroke="#56776f" stroke-width="3"/>
      <path d="M470 255l35-28 35 28m84 0l46-28 45 28" stroke="#9eb7a7" stroke-width="3" fill="none"/>
      <rect x="714" y="192" width="26" height="66" fill="#8ba299"/><path d="M710 190h34v10h-34Z" fill="#b2beb0"/>
      <path d="M727 182q-23-20-1-40q18-14 1-31" fill="none" stroke="#d4d2cf" stroke-width="11" stroke-linecap="round" opacity=".6"/>
      <path d="M442 316h317M442 349h317M442 382h317M442 415h317M442 448h317" stroke="#90a89d" stroke-width="1.5"/>
      <rect x="464" y="346" width="70" height="88" rx="6" fill="#f3dda6" stroke="#779286" stroke-width="6"/><path d="M499 349v82m-31-43h62" stroke="#a3aa84" stroke-width="3"/>
      <rect x="666" y="346" width="70" height="88" rx="6" fill="#d0d9c4" stroke="#779286" stroke-width="6"/><path d="M701 349v82m-31-43h62" stroke="#8da18c" stroke-width="3"/>
      <rect x="557" y="350" width="87" height="140" rx="6" fill="#58716c"/><rect x="567" y="362" width="67" height="111" rx="3" fill="#789487"/><path d="M600 363v109" stroke="#56756b" stroke-width="3"/><circle cx="591" cy="421" r="3" fill="#e9d8a6"/><circle cx="609" cy="421" r="3" fill="#e9d8a6"/>
      <rect x="507" y="294" width="188" height="34" rx="5" fill="#fff1d5" stroke="#789186" stroke-width="2"/>
      ${label('阿饶回炉工坊',601,317,17,'#506e64','text-anchor="middle" letter-spacing="2"')}
      <g transform="translate(600 253)"><circle r="19" fill="#d9d3ad"/><path d="M0-24v12m24 12H12M0 24V12M-24 0h12M-17-17l8 8m26-8l-8 8m8 26l-8-8m-26 8l8-8" stroke="#d9d3ad" stroke-width="8"/><circle r="9" fill="#6d8b7b"/></g>
      <rect x="545" y="490" width="112" height="10" fill="#899b8b"/>
      </g>
      <ellipse cx="1000" cy="503" rx="174" ry="24" fill="#4c594a20"/>
      <g class="shop-building">
      <path d="M854 296h288v199H854Z" fill="#edc2a6" stroke="#b98d7b" stroke-width="3"/>
      <path d="M838 297l161-108 161 108Z" fill="#bd8c82" stroke="#a47472" stroke-width="3"/>
      <path d="M864 283l135-88 135 88M891 265h216M923 245h152M953 224h92" fill="none" stroke="#d2a79a" stroke-width="3"/>
      <rect x="970" y="228" width="56" height="47" rx="23" fill="#f7e3b1" stroke="#ba9085" stroke-width="5"/><path d="M998 230v42" stroke="#b88e80" stroke-width="3"/>
      <path d="M854 331h288M854 371h288M854 411h288M854 451h288" stroke="#d1a48e" stroke-width="1.5"/>
      <rect x="879" y="363" width="116" height="92" rx="5" fill="#f5dfac" stroke="#ba9580" stroke-width="6"/>
      <path d="M917 367v84m39-84v84" stroke="#c5a184" stroke-width="3"/>
      <g fill="#b9926f"><path d="M892 428q14-20 27 0Z"/><path d="M931 428q14-20 27 0Z"/><rect x="965" y="411" width="17" height="20" rx="3"/></g>
      <path d="M1030 495V380q36-45 72 0v115Z" fill="#957d77"/><path d="M1040 488V383q26-30 52 0v105Z" fill="#c8a194"/><rect x="1049" y="384" width="34" height="47" rx="14" fill="#f7e3b1"/><circle cx="1086" cy="447" r="3" fill="#fff1cf"/>
      <path d="M868 330h251v34H868Z" fill="#fff0d3"/>
      ${[0,1,2,3,4,5,6].map(i=>`<path d="M${868+i*36} 330h18v34q-9 11-18 0Z" fill="#bb8c88"/>`).join('')}
      <rect x="934" y="289" width="130" height="32" rx="5" fill="#fff1d5" stroke="#ba9580" stroke-width="2"/>
      ${label('深夜小店',999,311,18,'#916964','text-anchor="middle" letter-spacing="3"')}
      <rect x="1018" y="495" width="98" height="9" fill="#c2a08b"/>
      <g transform="translate(1125 421)"><rect width="45" height="57" rx="4" fill="#6d7d72" stroke="#bda083" stroke-width="4"/><text x="23" y="23" text-anchor="middle" font-size="9" fill="#f8ead0">OPEN</text><path d="M10 36h25m-25 9h19" stroke="#b9c5a8" stroke-width="2"/></g>
      </g>
      <path d="M274 163q287-83 568 4" fill="none" stroke="#d2ccc2" stroke-width="2" stroke-dasharray="6 9" opacity=".8"/>
      <g transform="translate(792 146) rotate(15)"><path d="M0 0l62-20-21 46-13-19Z" fill="#fff0d3"/><path d="M28 7l34-27" stroke="#c8c0ac" stroke-width="2"/></g>
      ${sprig(365,477,1.25,'#7c9777')}${sprig(816,491,1.4,'#7b9579')}${sprig(1147,510,1.1,'#839879')}
      ${bear(320,516,.8,'detective')}${robot(782,523,.7)}
      ${flower(112,556,.8)}${flower(102,574,.6,'#b5a6d8')}${flower(1090,576,.7)}${flower(1076,561,.55,'#d9c992')}
      <g fill="#8d9f7e" opacity=".55"><path d="M30 568l7-11 4 13m15-34l3-10 6 13m324 44l5-11 4 13m492 2l4-10 5 11m249-25l4-12 5 13"/></g>
      <path d="M24 610q576-18 1152 0" fill="none" stroke="#b2bb9c" stroke-width="2"/>
    `;
    return wrap(1200,620,'hub','夜色里并排亮着灯的小熊侦探社、阿饶回炉工坊和深夜小店，小熊侦探与纸箱机器人走在小路上',body,
      '<linearGradient id="hub-sky" x2="0" y2="1"><stop stop-color="#69758e"/><stop offset="1" stop-color="#9b9caf"/></linearGradient>');
  }
  function roomBase(id,wall='#ddd1ca',floor='#c8ae91') {
    return `<path d="M0 0h900v388H0Z" fill="${wall}"/><path d="M0 388h900v152H0Z" fill="${floor}"/><path d="M0 388h900" stroke="#a18f83" stroke-width="8"/>
      <path d="M0 435h900M0 484h900M95 388L39 540M276 388l-23 152M457 388v152M637 388l27 152M818 388l54 152" stroke="#af977e" stroke-width="1.6"/>
      <path d="M0 48h900M0 55h900" stroke="#c5b8b0" stroke-width="2"/>
      ${Array.from({length:14},(_,i)=>`<path d="M${27+i*66} ${86+i%3*20}v5m-2-2h4" stroke="#a9a0a1" stroke-width="1" opacity=".3"/>`).join('')}`;
  }
  function bedroom() {
    const body=`${roomBase('bedroom','#ddd0d2','#c7ad92')}
      <g transform="translate(55 87)"><path d="M0 175V77q0-77 76-77t76 77v98Z" fill="#94849c"/><path d="M10 165V77q0-67 66-67t66 67v88Z" fill="#626e85"/>${moon(107,58,22,'#626e85')}${star(38,50,4)}${star(101,128,3)}<path d="M76 10v155M10 98h132" stroke="#aa96aa" stroke-width="5"/><path d="M-10-3q38 54 8 122l-8 52h-16V-3Zm172 0q-38 54-8 122l8 52h16V-3Z" fill="#b7a4c9"/><path d="M-27-3h205" stroke="#887b8d" stroke-width="7" stroke-linecap="round"/></g>
      <g transform="translate(303 105)"><rect x="-47" y="-47" width="94" height="94" rx="47" fill="#9d8f9e"/><circle r="39" fill="#fff0d5"/><path d="M0-32v5M32 0h-5M0 32v-5M-32 0h5" stroke="#c3ae92" stroke-width="3"/><path d="M0-24V0l18 12" stroke="#536174" stroke-width="3" stroke-linecap="round"/><circle r="4" fill="#bc8d7e"/></g>
      <g transform="translate(400 76) rotate(3)"><rect width="105" height="127" rx="4" fill="#f9edd6" stroke="#b9a48f" stroke-width="2"/><rect width="105" height="27" rx="4" fill="#bc8b83"/><circle cx="24" cy="4" r="4" fill="#d7cac0"/><circle cx="80" cy="4" r="4" fill="#d7cac0"/>${label('NOVEMBER',52,20,9,'#fff3dc','text-anchor="middle"')}<text x="52" y="79" font-size="39" text-anchor="middle" fill="#7c6b75" font-family="Georgia,serif">03</text><path d="M17 99h71m-60 10h49" stroke="#d0b99c" stroke-width="2"/></g>
      <g transform="translate(560 83)"><rect width="114" height="147" rx="5" fill="#d8b59c" stroke="#a88e81" stroke-width="6"/><path d="M14 24h85M14 50h73M14 76h85M14 102h62" stroke="#b89482" stroke-width="2"/><g transform="translate(23 18) rotate(-9)"><rect width="61" height="38" fill="#f7edd1"/><path d="M10 11h42m-42 10h34m-34 9h37" stroke="#b7ae96" stroke-width="2"/></g><circle cx="44" cy="21" r="4" fill="#b47e78"/>${label('未发送',59,133,12,'#8e6b62','text-anchor="middle"')}</g>
      <g transform="translate(724 131)"><path d="M0 0h124v248H0Z" fill="#a08c86"/><path d="M9 9h106v226H9Z" fill="#776d72"/><path d="M0 83h124M0 164h124" stroke="#c1a89a" stroke-width="8"/>
      ${[0,1,2,3,4].map((v,i)=>`<rect x="${14+i*20}" y="${18+i%2*8}" width="15" height="${55-i%2*8}" fill="${['#aa9cc2','#d2b68b','#91a58b','#c18e7a','#b2b3bc'][i]}"/>`).join('')}
      ${bear(62,114,.44,'bear')}<rect x="20" y="187" width="83" height="35" rx="4" fill="#d3b39a"/><path d="M51 199h22v9H51Z" fill="#af8e7a"/></g>
      <ellipse cx="425" cy="463" rx="224" ry="45" fill="#ad9fbc"/><ellipse cx="425" cy="463" rx="199" ry="32" fill="none" stroke="#d6c4d3" stroke-width="2"/>
      <g transform="translate(246 298)"><path d="M0 0h395v28H0Z" fill="#d2b498" stroke="#aa8d7b" stroke-width="3"/><path d="M17 30v120h18V30m325 0v120h18V30" fill="#9f8779"/><rect x="43" y="32" width="308" height="64" rx="4" fill="#b49682" stroke="#947d71" stroke-width="3"/><path d="M50 39h294v49H50Z" fill="#c9aa91"/><path d="M183 58h38v12h-38Z" fill="#998876"/><circle cx="202" cy="65" r="3" fill="#e5d0a5"/></g>
      <g transform="translate(306 255) rotate(-8)"><rect width="47" height="72" rx="8" fill="#3e4859" stroke="#858894" stroke-width="3"/><rect x="5" y="8" width="37" height="53" rx="3" fill="#b7c9bd"/><path d="M14 3h19" stroke="#777c86" stroke-width="2"/><path d="M13 22h21m-21 8h15M13 45h5m5-8v8m6-17v17m6-10v10" stroke="#647b70" stroke-width="3"/><circle cx="24" cy="66" r="2" fill="#8d97a0"/></g>
      <g transform="translate(480 268)"><rect x="-32" y="-18" width="65" height="37" rx="3" fill="#eedfc3" transform="rotate(5)"/><path d="M-20-3h42m-42 8h35" stroke="#b4a58b" stroke-width="2"/><path d="M-30 23h65" stroke="#b49e82" stroke-width="3"/></g>
      <g transform="translate(587 237)"><path d="M0 60V-2" stroke="#7a7e73" stroke-width="5"/><ellipse cy="60" rx="26" ry="6" fill="#8e9181"/><path d="M-25-16h50l12 36h-74Z" fill="#b8b99a" stroke="#999b83" stroke-width="2"/><ellipse cy="20" rx="37" ry="6" fill="#f7e2ae"/><ellipse cy="31" rx="43" ry="15" fill="#fae1a8" opacity=".22"/></g>
      <g transform="translate(725 429)"><ellipse cy="-25" rx="32" ry="9" fill="#96979b"/><path d="M-31-25l7 66h48l7-66" fill="#aeb0af" stroke="#8c9292" stroke-width="2"/><path d="M-20-20l4 52M-7-18l1 51M7-18l-1 51M20-20l-4 52" stroke="#8f9895" stroke-width="2"/><path d="M-19-29l-9-18 17-10 9 24 14-19 19 16-18 15" fill="#f2e9d1" stroke="#c7bfa9" stroke-width="1.5"/></g>
      ${sprig(132,389,1.3,'#8ea18a')}
      <path d="M50 491h99v11H50Z" fill="#bca58e"/><rect x="60" y="476" width="79" height="13" rx="3" fill="#8c9c90"/><rect x="69" y="462" width="67" height="12" rx="3" fill="#bb9aa3"/>
      ${label('阿饶的房间',784,45,12,'#938591','text-anchor="middle" letter-spacing="2"')}
    `;
    return wrap(900,540,'bedroom','阿饶的房间，桌上的手机、抽屉、墙上的挂钟与日历、纸团垃圾篓等待小熊调查',body);
  }
  function kitchen() {
    const body=`${roomBase('kitchen','#e2ddc9','#c4b298')}
      <path d="M0 238h900v149H0Z" fill="#e9e6d5"/>
      ${[0,1,2,3,4].map(i=>`<path d="M0 ${238+i*30}h900" stroke="#d0d2bf" stroke-width="1.5"/>`).join('')}
      ${Array.from({length:16},(_,i)=>`<path d="M${i*60} 238v149" stroke="#d0d2bf" stroke-width="1.5"/>`).join('')}
      <g transform="translate(57 104)"><rect width="156" height="293" rx="17" fill="#a7bbab" stroke="#7e9789" stroke-width="4"/><path d="M3 106h150" stroke="#819c8c" stroke-width="4"/><rect x="126" y="38" width="7" height="45" rx="3" fill="#dae1c5"/><rect x="126" y="130" width="7" height="65" rx="3" fill="#dae1c5"/><rect x="23" y="35" width="65" height="49" fill="#f1e8c9" transform="rotate(-7 23 35)"/><path d="M35 51h40m-40 10h34m-34 9h22" stroke="#b2ac8a" stroke-width="2"/><circle cx="53" cy="34" r="6" fill="#b99aa5"/><path d="M41 271h73" stroke="#8da695" stroke-width="4"/></g>
      <g transform="translate(270 75)"><rect width="143" height="132" rx="5" fill="#bda68b" stroke="#9a8972" stroke-width="4"/><rect x="12" y="11" width="119" height="109" fill="#536d62"/>
      ${label('今日食谱',72,36,15,'#f1e3c2','text-anchor="middle"')}<path d="M31 51h82M31 73h66M31 95h74" stroke="#c8cdb0" stroke-width="2"/><circle cx="22" cy="51" r="2" fill="#f2dfb4"/><circle cx="22" cy="73" r="2" fill="#f2dfb4"/><circle cx="22" cy="95" r="2" fill="#f2dfb4"/></g>
      <g transform="translate(475 80)"><rect width="188" height="129" rx="5" fill="#c5bd9e" stroke="#9d987c" stroke-width="4"/><rect x="8" y="9" width="81" height="110" fill="#e0ddbd"/><rect x="98" y="9" width="81" height="110" fill="#e0ddbd"/><circle cx="77" cy="67" r="3" fill="#9c977c"/><circle cx="111" cy="67" r="3" fill="#9c977c"/></g>
      <g transform="translate(715 80)"><path d="M0 128V60q0-60 62-60t62 60v68Z" fill="#a8a18a"/><path d="M9 119V60q0-51 53-51t53 51v59Z" fill="#748693"/>${moon(89,43,18,'#748693')}<path d="M62 9v110M9 73h106" stroke="#c2b696" stroke-width="4"/></g>
      <path d="M246 311h609v31H246Z" fill="#a9977e"/><path d="M256 342h589v78H256Z" fill="#c0b198"/><path d="M449 346v70m201-70v70" stroke="#a2937e" stroke-width="3"/><path d="M335 358h33m191 0h33m155 0h33" stroke="#8c927b" stroke-width="5" stroke-linecap="round"/>
      <g transform="translate(742 284)"><ellipse rx="68" ry="21" fill="#8e9b8e"/><ellipse rx="55" ry="14" fill="#c9d2ba"/><path d="M-24-8v-49q0-25 23-25t23 25v10" fill="none" stroke="#929f93" stroke-width="7"/><path d="M-34-10h20" stroke="#d1d5bc" stroke-width="4"/></g>
      <g transform="translate(540 282)"><path d="M-27-20h47l-3 28-12 5-8-18-8 12-13 2Z" fill="#eee3c7" stroke="#b3a58a" stroke-width="2"/><path d="M20-16q20-4 17 12q-2 10-17 8" fill="none" stroke="#b3a58a" stroke-width="4"/><path d="M-33 20l11-9 9 13-17 2Zm35 7l12-7 7 10-13 6Z" fill="#eee3c7" stroke="#b3a58a" stroke-width="1.5"/><path d="M-27 6l12-7 8 12" fill="none" stroke="#917e72" stroke-width="2"/></g>
      <g transform="translate(320 282) rotate(4)"><path d="M-52-25h49q5 3 5 7v51q-4-6-10-6h-44Z" fill="#f3e5c8" stroke="#b6a88d" stroke-width="2"/><path d="M2-18q0-5 6-7h48v52H10q-6 0-8 6Z" fill="#eee0c4" stroke="#b6a88d" stroke-width="2"/><path d="M-42-12h30m-30 10h34m-34 10h28m25-20h29m-29 10h29m-29 10h23" stroke="#b9ad94" stroke-width="2"/><path d="M-4-26v57" stroke="#b18d7c" stroke-width="3"/></g>
      <g transform="translate(603 241)"><ellipse cx="0" cy="53" rx="24" ry="6" fill="#979c7e"/><path d="M-18 3h36l-3 47q-15 5-30 0Z" fill="#b7be98"/><path d="M-11 0l-7-41m16 41l1-46m10 46l12-40" stroke="#9c8c6f" stroke-width="5" stroke-linecap="round"/><ellipse cx="-18" cy="-45" rx="8" ry="13" fill="#b7a17e"/><path d="M-7-55h15v18H-7Z" fill="#b7a17e"/><ellipse cx="24" cy="-44" rx="7" ry="12" fill="#b7a17e"/></g>
      <ellipse cx="443" cy="481" rx="165" ry="31" fill="#a2b196"/><path d="M305 481h275" stroke="#c0c9a8" stroke-width="2" stroke-dasharray="5 6"/>
      ${sprig(830,432,1.15,'#7e9876')}${cat(682,447,.58)}
      ${label('安静的厨房',773,44,12,'#87917e','text-anchor="middle" letter-spacing="2"')}
    `;
    return wrap(900,540,'kitchen','安静的厨房，冰箱上的便条、墙上食谱、台面的碎杯和摊开的笔记本藏着线索',body);
  }
  function station() {
    const body=`${roomBase('station','#c9d2d2','#b5b7a8')}
      <path d="M0 48h900V0H0Z" fill="#7c9294"/>
      <path d="M52 93h493v225H52Z" fill="#71878b" stroke="#9eafb0" stroke-width="8"/>
      <path d="M64 105h469v202H64Z" fill="#5d7184"/>
      ${stars('station',550,220)}${moon(478,148,24,'#5d7184')}
      <path d="M64 267q80-68 161-10q82-65 161-12q74-41 147-2v64H64Z" fill="#748b83"/>
      <path d="M64 285q192-45 469-9v31H64Z" fill="#99a38f"/>
      <path d="M223 105v202m152-202v202M64 234h469" stroke="#a8b8b5" stroke-width="6"/>
      <g transform="translate(605 81)"><rect width="234" height="135" rx="6" fill="#667e7e" stroke="#aab9ad" stroke-width="6"/>
      ${label('夜间邮车时刻表',117,28,16,'#f7e8c7','text-anchor="middle" letter-spacing="2"')}
      <path d="M18 42h198M18 75h198M18 105h198" stroke="#94a7a0" stroke-width="1.5"/>
      <g font-family="monospace" fill="#ebdfbd" font-size="15"><text x="25" y="65">19:20</text><text x="25" y="96">20:10</text><text x="25" y="126">21:40</text></g>
      ${label('小城东站',135,65,12,'#d3dfc6')}${label('月亮路口',135,96,12,'#d3dfc6')}${label('最后一班',135,126,12,'#f0c5a7')}
      </g>
      <g transform="translate(112 335)"><path d="M0 27h433v24H0Z" fill="#b7947e" stroke="#8e7b71" stroke-width="3"/><path d="M13 49v70h15V49m377 0v70h15V49" fill="#6f7b78"/><path d="M12-21h409v19H12Zm0 27h409v19H12Z" fill="#c9a58a" stroke="#9d8474" stroke-width="2"/><path d="M28-30v80m378-80v80" stroke="#788683" stroke-width="7"/><path d="M0 31v-29m433 29v-29" stroke="#6f7b78" stroke-width="7" stroke-linecap="round"/></g>
      ${letter(380,347,.94)}
      <g transform="translate(661 256)"><rect width="141" height="204" rx="12" fill="#9faaa4" stroke="#6d8580" stroke-width="4"/><rect x="16" y="20" width="109" height="58" rx="5" fill="#dce4c3" stroke="#82968a" stroke-width="3"/>
      ${label('一张回程票',70,48,13,'#61776a','text-anchor="middle"')}<path d="M37 61h66" stroke="#9faf8b" stroke-width="2"/>
      <rect x="24" y="97" width="20" height="17" rx="3" fill="#d3bf9e"/><rect x="61" y="97" width="20" height="17" rx="3" fill="#c5b5d4"/><rect x="98" y="97" width="20" height="17" rx="3" fill="#dcad98"/>
      <rect x="31" y="140" width="79" height="19" rx="4" fill="#506a63"/><path d="M45 151h48v33H45Z" fill="#f2e6c6" stroke="#c8bda1" stroke-width="1.5"/><path d="M52 161h34m-34 9h26" stroke="#b1ab91" stroke-width="2"/>
      <circle cx="111" cy="183" r="5" fill="#748b7e"/>
      </g>
      <g transform="translate(848 331)"><path d="M0 0v122" stroke="#7c9184" stroke-width="6"/><path d="M-32 6h63v42h-63Z" fill="#b7c4aa" stroke="#7d9584" stroke-width="3"/>${label('候车',0,33,15,'#647c6c','text-anchor="middle"')}</g>
      <g transform="translate(69 440)"><rect x="-24" y="-24" width="52" height="54" rx="6" fill="#b2a2b9" stroke="#8c8299" stroke-width="3"/><path d="M-9-25v-14h23v14" fill="none" stroke="#7d788b" stroke-width="4"/><path d="M-10-22v50m23-50v50" stroke="#c7b9ca" stroke-width="4"/><circle cx="-14" cy="34" r="4" fill="#717d7b"/><circle cx="20" cy="34" r="4" fill="#717d7b"/></g>
      ${sprig(573,434,1.05,'#8aa18b')}${flower(558,487,.55)}
      <path d="M80 499h720" stroke="#d9d7bc" stroke-width="4" stroke-dasharray="12 15"/>
      ${label('最后一班车，也可以等一句说明',451,35,13,'#e5e8d1','text-anchor="middle" letter-spacing="2"')}
    `;
    return wrap(900,540,'station','夜晚的候车室，邮车时刻表、长椅上的信封、取票机和窗外月色',body);
  }
  function detective(roomIndex=0) {
    return [bedroom,kitchen,station][Math.max(0,Math.min(2,Math.trunc(number(roomIndex))))]();
  }
  function shop() {
    const body=`
      <defs><pattern id="shop-tiles" width="42" height="42" patternUnits="userSpaceOnUse"><rect width="42" height="42" fill="#ddc6ae"/><path d="M0 21h42M21 0v42" stroke="#c5af97" stroke-width="1.2"/></pattern></defs>
      <path d="M0 0h900v313H0Z" fill="#edcfb7"/><path d="M0 313h900v127H0Z" fill="url(#shop-tiles)"/>
      <path d="M0 0h900v39H0Z" fill="#ac8280"/>
      ${[0,1,2,3,4,5,6,7,8,9,10].map(i=>`<path d="M${i*90} 0h45v39q-22 18-45 0Z" fill="#fff0d7"/>`).join('')}
      <g transform="translate(45 80)"><path d="M0 171V70q0-70 69-70t69 70v101Z" fill="#c69f8d"/><path d="M10 161V70q0-60 59-60t59 60v91Z" fill="#65758b"/>${moon(98,49,20,'#65758b')}<path d="M69 12v148M10 101h118" stroke="#ddb99b" stroke-width="4"/><path d="M-8 172h155v12H-8Z" fill="#b68f7d"/></g>
      <g transform="translate(248 74)"><rect width="144" height="108" rx="5" fill="#697d70" stroke="#c1a084" stroke-width="6"/>${label('今夜菜单',72,29,16,'#f6e6c7','text-anchor="middle"')}<path d="M20 47h104M20 72h76M20 91h92" stroke="#c5ceaf" stroke-width="2"/>${label('MILK · TEA · COOKIES',72,61,7,'#d3d6ba','text-anchor="middle"')}
      </g>
      <g transform="translate(460 81)"><path d="M-8 83h228v13H-8Z" fill="#b5927c"/>
      <g fill="#cfad8c"><rect width="46" height="76" rx="8"/><rect x="60" y="17" width="42" height="59" rx="7"/><rect x="116" y="4" width="49" height="72" rx="7"/></g>
      <g fill="#e4c2a0"><path d="M-2 0h50v9H-2Zm60 17h46v9H58Zm56-13h53v9h-53Z"/></g>
      <g fill="#f5e6c4"><rect x="6" y="28" width="34" height="24" rx="3"/><rect x="65" y="39" width="31" height="20" rx="3"/><rect x="124" y="29" width="34" height="23" rx="3"/></g>
      ${label('茶',23,46,13,'#8c7a63','text-anchor="middle"')}${label('糖',81,54,12,'#8c7a63','text-anchor="middle"')}${label('豆',141,46,13,'#8c7a63','text-anchor="middle"')}
      <path d="M180 62h30v17h-30Z" fill="#bd9eb5"/><path d="M184 58h23v8h-23Z" fill="#e8c9c8"/></g>
      <g transform="translate(735 74)"><rect width="111" height="106" rx="7" fill="#b3b99e" stroke="#8f9c84" stroke-width="4"/><path d="M54 5v96" stroke="#95a38a" stroke-width="2"/><circle cx="43" cy="57" r="3" fill="#6f897a"/><circle cx="67" cy="57" r="3" fill="#6f897a"/><path d="M19 24h19m36 0h19" stroke="#d3d7b8" stroke-width="2"/></g>
      <path d="M188 249h666v30H188Z" fill="#c79e82" stroke="#a58170" stroke-width="3"/>
      <path d="M198 279h647v90H198Z" fill="#e3bca0"/><path d="M198 292h647M198 350h647" stroke="#cba188" stroke-width="2"/><path d="M224 292v57m61-57v57m61-57v57m61-57v57m61-57v57m61-57v57m61-57v57m61-57v57m61-57v57m61-57v57" stroke="#d5aa90" stroke-width="1.3"/>
      <g transform="translate(238 185)"><rect width="139" height="64" rx="6" fill="#999e99" stroke="#747f7a" stroke-width="3"/><rect x="12" y="16" width="81" height="37" rx="4" fill="#526c64"/><path d="M20 42q14-17 28 0m7 0q14-17 28 0" stroke="#d3b588" stroke-width="8" fill="none"/><circle cx="114" cy="21" r="8" fill="#d4c7a5"/><circle cx="114" cy="45" r="5" fill="#a8b8a0"/><path d="M21 9h64" stroke="#d0c6ad" stroke-width="3" stroke-linecap="round"/></g>
      <g transform="translate(432 218)"><ellipse cx="0" cy="25" rx="27" ry="6" fill="#be977f"/><path d="M-17-20h34l-3 42h-28Z" fill="#f7e8cd" stroke="#bca88a" stroke-width="1.5"/><path d="M-12-5h24v21h-24Z" fill="#c29975"/><path d="M-8-19v-21" stroke="#a695b6" stroke-width="3"/><path d="M17-10q17-2 15 11q-2 9-17 6" fill="none" stroke="#d3bd9f" stroke-width="4"/></g>
      <g transform="translate(497 221)"><ellipse cy="22" rx="25" ry="6" fill="#be977f"/><path d="M-17-17h34l-3 37h-28Z" fill="#d9c6df" stroke="#ad9bb9" stroke-width="1.5"/><path d="M-8-17l9-25" stroke="#b9b498" stroke-width="3"/><ellipse cy="-17" rx="17" ry="4" fill="#f7e7c6"/></g>
      <g transform="translate(577 225)"><ellipse rx="47" ry="16" fill="#ddd0af" stroke="#bdab8c" stroke-width="2"/>
      <g fill="#c99b6d" stroke="#b5895f" stroke-width="1.5"><circle cx="-22" cy="-3" r="12"/><circle cx="1" cy="1" r="13"/><circle cx="23" cy="-4" r="12"/></g><g fill="#795d4d"><circle cx="-25" cy="-5" r="2"/><circle cx="-17" cy="0" r="2"/><circle cx="-3" cy="-2" r="2"/><circle cx="5" cy="4" r="2"/><circle cx="20" cy="-5" r="2"/><circle cx="27" cy="0" r="2"/></g></g>
      <g transform="translate(736 225)"><path d="M-30-4h60v29h-60Z" fill="#b3bc9c" stroke="#8e9e82" stroke-width="2"/><path d="M-33-5l17-22h32l17 22Z" fill="#d2cfac" stroke="#a5ae8c" stroke-width="2"/><path d="M0-26v51" stroke="#dba7a5" stroke-width="6"/><path d="M-10-28q-23-20-13-22q13-3 23 20q9-24 21-22q12 2-12 24" fill="none" stroke="#dba7a5" stroke-width="5"/></g>
      <path d="M188 251h666" stroke="#e5c6a5" stroke-width="4"/>
      ${bunny(88,330,.82)}${cat(157,354,.65)}${robot(659,172,.73)}
      <g transform="translate(61 403)"><ellipse rx="62" ry="13" fill="#6d65502a"/></g>
      <g transform="translate(802 374)"><rect x="-27" y="-13" width="59" height="50" rx="4" fill="#9eafa1"/><path d="M-17-13v-18q0-15 20-15t20 15v18" fill="none" stroke="#768e7d" stroke-width="4"/><path d="M-15 0h35m-35 11h35m-35 11h35" stroke="#c2ccb2" stroke-width="2"/></g>
      ${sprig(867,330,.9,'#7c9b7b')}${flower(221,392,.5)}
      <g transform="translate(653 51)"><path d="M0 0v25" stroke="#877a76" stroke-width="2"/><path d="M-19 44q0-21 19-21t19 21Z" fill="#b7a2c3"/><ellipse cy="44" rx="19" ry="5" fill="#f8e5b9"/></g>
    `;
    return wrap(900,440,'shop','温暖的深夜小店，烤箱、饮料、饼干和包装礼物摆在柜台上，小兔和猫咪客人等待阿饶服务',body);
  }
  function afterhours(theme='moon', hideCharacters=false) {
    const chosen=['moon','sunset','stars'].includes(theme)?theme:'moon';
    const sky={moon:'#65758d',sunset:'#c9a0a0',stars:'#465879'}[chosen];
    const low={moon:'#abb5ac',sunset:'#e8c0a4',stars:'#839a9f'}[chosen];
    const river={moon:'#8bacae',sunset:'#b9acaa',stars:'#6b91a0'}[chosen];
    const body=`
      <path d="M0 0h1000v500H0Z" fill="url(#afterhours-sky-${chosen})"/>
      ${chosen==='sunset'?'<circle cx="785" cy="137" r="54" fill="#f4d9b3"/><path d="M652 140h237M696 160h208M650 186h239" stroke="#ddb2a2" stroke-width="5" opacity=".7"/>':stars('afterhours',1000,235)+moon(chosen==='stars'?817:825,107,chosen==='stars'?32:41,sky)}
      ${chosen==='stars'?'<path d="M170 42l97 57m-97-57l80 38" stroke="#f3e4bd" stroke-width="2" opacity=".75"/><path d="M482 58l12 16 30-9 24 34" stroke="#b8c9cf" stroke-width="1" opacity=".65"/>':''}
      <path d="M0 246q125-102 246-17q118-95 260-20q141-89 286-6q108-60 208-6v158H0Z" fill="#7e9388"/>
      <path d="M0 263q94-61 194-8q128-48 261-7q181-69 336-14q113-50 209-15v145H0Z" fill="#93a591"/>
      <path d="M0 285q238-44 493 5q226 31 507-35v153H0Z" fill="${river}"/>
      <g stroke="#d4dfcb" stroke-width="2" fill="none" opacity=".5"><path d="M43 310h108m37 14h93m19-26h53m320 22h92m-164 25h82m120-45h110M32 352h82m672-4h139"/></g>
      <path d="M0 355q214-29 361 15q230-40 409-11q128 10 230-3v144H0Z" fill="#b0bb9a"/>
      <path d="M-10 426q228-30 403-1q195 26 367 3q136-18 250 6" fill="none" stroke="#e2d8b9" stroke-width="63"/>
      <path d="M-5 449q245-18 409 0q210 22 369-2q123-19 228 1" fill="none" stroke="#c6baa0" stroke-width="1.6" stroke-dasharray="3 13"/>
      <g transform="translate(74 136)"><path d="M0 0v248" stroke="#627d6a" stroke-width="15"/><path d="M0 145l-34-44m35 3l26-44" stroke="#627d6a" stroke-width="8" stroke-linecap="round"/><path d="M-80 84q-20-61 27-83q-6-54 51-63q58-8 68 43q43 6 30 54q33 55-29 74q-34 33-62 13q-41 29-85-38Z" fill="#789777"/><path d="M-52 30q48-45 94-14m-79 53q40-29 73-10" fill="none" stroke="#8fa785" stroke-width="3" opacity=".7"/></g>
      <g transform="translate(916 216)"><path d="M0 0v172" stroke="#607b67" stroke-width="12"/><path d="M-59 39q-27-44 5-67q11-49 52-42q42-12 52 34q34 12 20 45q20 47-28 61q-40 29-62 5q-39 15-39-36Z" fill="#819e7c"/><path d="M-37-1q38-29 72-11" fill="none" stroke="#99b38b" stroke-width="3"/></g>
      <g transform="translate(625 329)"><path d="M0 13h193v18H0Z" fill="#b9967a" stroke="#8d7d6c" stroke-width="2"/><path d="M13 32v52h12V32m143 0v52h12V32" fill="#6e8277"/><path d="M12-41h169v16H12Zm0 25h169V0H12Z" fill="#c9a68a" stroke="#9b8975" stroke-width="2"/><path d="M23-48v79m148-79v79" stroke="#7a8b7b" stroke-width="6"/><path d="M0 16v-19m193 19V-3" stroke="#6e8277" stroke-width="6" stroke-linecap="round"/></g>
      <g transform="translate(835 225)"><path d="M0 0v172" stroke="#5c756f" stroke-width="6"/><path d="M-23 0q0-28 23-28t23 28Z" fill="#72877a"/><path d="M-16 0h32l-5 34h-22Z" fill="#f3de9f" stroke="#768a78" stroke-width="3"/><path d="M-7 3v28m14-28v28" stroke="#b9b389" stroke-width="2"/><ellipse cy="44" rx="47" ry="25" fill="#f7e5ac" opacity=".13"/></g>
      ${hideCharacters?'':bear(468,357,.9,'bear')+robot(543,363,.84)}
      ${flower(176,383,.9)}${flower(194,400,.65,'#b7a9df')}${flower(149,406,.65,'#f1dab1')}${flower(881,439,.85,'#d7b2c4')}${flower(897,454,.6)}${flower(299,472,.7,'#b7a9df')}${flower(316,483,.5,'#e2d4a8')}
      <path d="M341 361q8-18 15 0m-4-7q10-17 14 2m-121 84q8-17 15 1m587 39q8-18 15 1" fill="none" stroke="#819c77" stroke-width="3" stroke-linecap="round"/>
      <g transform="translate(362 412)"><path d="M-21 0l53-12-17 32-10-13Z" fill="#fff1d1"/><path d="M5 7l27-19" stroke="#c4baa0" stroke-width="1.5"/></g>
      <path d="M379 414q18-18 31-4" fill="none" stroke="#b4b69d" stroke-width="1.5" stroke-dasharray="3 4"/>
    `;
    return wrap(1000,500,'afterhours-'+chosen,'收店后的河边小路，小熊和阿饶并肩散步，长椅、花朵与'+(chosen==='sunset'?'夕阳':chosen==='stars'?'星星':'月亮')+'映在河水中',body,
      `<linearGradient id="afterhours-sky-${chosen}" x2="0" y2="1"><stop stop-color="${sky}"/><stop offset="1" stop-color="${low}"/></linearGradient>`);
  }
  root.BearArt = Object.freeze({hub,detective,shop,afterhours,bear,robot});
})(typeof window !== 'undefined' ? window : globalThis);
