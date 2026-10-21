// WHITE MOUNTAIN: language board + order slip

const T = {
  en: {
    "skip": "Skip to products",
    "nav-menu": "Products", "nav-farm": "The farm", "nav-contact": "Contact",
    "hook": "Halal braised beef, herbal jerky and beef snacks, made by a cattle-raising community in Ban Khao Khao, Satun, southern Thailand.", "place": "Satun · Southern Thailand",
    "cta-quote": "Request a quote", "cta-line": "Chat on LINE",
    "hero-cap": "Chinese-style braised beef · 200 g box",
    "menu-title": "Today's board",
    "menu-note": "Retail prices in Thai baht. Export and wholesale prices on request.",
    "d-braise": "Slow-braised beef in Chinese herbal broth. 200 g net, boxed.",
    "d-jerky": "Farm beef cured with black pepper, turmeric and lemongrass to an old local recipe.",
    "d-crispy": "Oven-baked beef crisps. The pack reads 97% fat free, high protein, low carb.",
    "d-phukrak": "Southern Thai love-knot pastry with a beef filling, packed in jars.",
    "add": "Add to order", "added": "On the slip",
    "order-title": "Order slip",
    "order-note": "Add products from the board, tell us who you are, then send the slip by email or LINE. We reply with export prices and terms.",
    "slip-empty": "Nothing on the slip yet. Use “Add to order” on the board above.",
    "f-name": "Your name", "f-company": "Company", "f-country": "Country",
    "f-note": "Note (volumes, destination, questions)",
    "f-error": "Please add your name, and at least one product or a note.",
    "send-email": "Send by email", "send-line": "Copy & open LINE",
    "copied": "Slip copied. Paste it into the LINE chat that just opened.",
    "copy-fail": "Could not copy automatically. Copy the slip text below and paste it into the LINE chat.", "less": "Remove one", "more": "Add one",
    "farm-title": "From Ban Khao Khao, La‑ngu, Satun",
    "farm-1": "Families in Ban Khao Khao have raised cattle for around fifty years, first for weddings, religious occasions and village festivals, then as a living. Today the herd is run by Khao Khao Kho Khun Farm Community Enterprise.",
    "farm-2": "The cattle eat what the district grows: rice straw, coconut and oil-palm fronds, Napier and Ruzi grass, and corn stalks. The meat goes into recipes the community has cooked for generations, with black pepper, turmeric and lemongrass.",
    "m-halal": "Halal, Islamic Committee Office of Thailand mark on pack",
    "m-psu": "Selected for PSU Startup 2017, Prince of Songkla University",
    "m-otop": "OTOP community product",
    "m-geo": "Made in Satun, a UNESCO Global Geopark",
    "farm-cap": "The community's own brochure: the pens, the herbal beef label (beef 99%, herbs 0.9%, salt 0.2%), and the PSU Startup 2017 selection.",
    "contact-title": "Talk to the export desk",
    "role": "Export Manager", "phone": "Phone", "email": "Email", "map": "Farm on the map",
    "address": "159 Moo 4, Khao Khao, La-ngu, Satun 91110, Thailand",
    "sister": "Same export desk, Thai Wagyu cuts from Roi Et:",
    "slip-head": "Order slip: WHITE MOUNTAIN Halal Beef", "slip-from": "From", "slip-items": "Products", "slip-note": "Note",
    "subject": "Quote request: WHITE MOUNTAIN Halal Beef"
  },
  th: {
    "skip": "ข้ามไปที่สินค้า",
    "nav-menu": "สินค้า", "nav-farm": "ฟาร์ม", "nav-contact": "ติดต่อ",
    "hook": "เนื้อตุ๋น เนื้อสมุนไพร และขนมเนื้อฮาลาล ทำโดยชุมชนเลี้ยงวัวบ้านเขาขาว จังหวัดสตูล", "place": "สตูล · ภาคใต้ของไทย",
    "cta-quote": "ขอใบเสนอราคา", "cta-line": "คุยทาง LINE",
    "hero-cap": "เนื้อตุ๋นยาจีน · กล่อง 200 กรัม",
    "menu-title": "ป้ายสินค้าวันนี้",
    "menu-note": "ราคาขายปลีกเป็นบาท ราคาส่งและราคาส่งออกสอบถามได้",
    "d-braise": "เนื้อตุ๋นช้าในน้ำซุปยาจีน น้ำหนักสุทธิ 200 กรัม บรรจุกล่อง",
    "d-jerky": "เนื้อจากฟาร์ม หมักพริกไทยดำ ขมิ้น ตะไคร้ ตามสูตรโบราณของชุมชน",
    "d-crispy": "เนื้อแผ่นอบกรอบ บนซองระบุ ปราศจากไขมัน 97% โปรตีนสูง คาร์บต่ำ",
    "d-phukrak": "ขนมผูกรักแบบปักษ์ใต้ ไส้เนื้อ บรรจุกระปุก",
    "add": "ใส่ใบสั่ง", "added": "อยู่ในใบสั่งแล้ว",
    "order-title": "ใบสั่งสินค้า",
    "order-note": "เลือกสินค้าจากป้าย กรอกชื่อ แล้วส่งใบสั่งทางอีเมลหรือ LINE เราจะตอบกลับพร้อมราคาและเงื่อนไข",
    "slip-empty": "ยังไม่มีสินค้าในใบสั่ง กด “ใส่ใบสั่ง” ที่ป้ายด้านบน",
    "f-name": "ชื่อ", "f-company": "บริษัท/ร้าน", "f-country": "ประเทศ",
    "f-note": "หมายเหตุ (จำนวน ปลายทาง คำถาม)",
    "f-error": "กรุณากรอกชื่อ และเลือกสินค้าอย่างน้อยหนึ่งรายการหรือเขียนหมายเหตุ",
    "send-email": "ส่งทางอีเมล", "send-line": "คัดลอกแล้วเปิด LINE",
    "copied": "คัดลอกใบสั่งแล้ว วางในแชท LINE ที่เปิดขึ้นมาได้เลย",
    "copy-fail": "คัดลอกอัตโนมัติไม่ได้ กรุณาคัดลอกข้อความใบสั่งด้านล่างแล้ววางในแชท LINE", "less": "ลดหนึ่ง", "more": "เพิ่มหนึ่ง",
    "farm-title": "จากบ้านเขาขาว อำเภอละงู จังหวัดสตูล",
    "farm-1": "ชาวบ้านเขาขาวเลี้ยงวัวกันมาราว 50 ปี เริ่มจากเลี้ยงไว้ใช้ในงานแต่ง งานบุญ และงานประเพณีของหมู่บ้าน จนกลายเป็นอาชีพ ปัจจุบันดูแลโดยวิสาหกิจชุมชนเขาขาวโคขุนฟาร์ม",
    "farm-2": "วัวกินสิ่งที่มีในพื้นที่ ทั้งฟางข้าว ทางมะพร้าว ทางปาล์ม หญ้าเนเปียร์ หญ้ารูซี่ และต้นข้าวโพด เนื้อที่ได้นำมาทำตามสูตรที่ชุมชนสืบทอดกันมา ด้วยพริกไทยดำ ขมิ้น และตะไคร้",
    "m-halal": "ฮาลาล มีเครื่องหมายสำนักงานคณะกรรมการกลางอิสลามแห่งประเทศไทยบนบรรจุภัณฑ์",
    "m-psu": "ได้รับคัดเลือกในโครงการ PSU Startup 2017 มหาวิทยาลัยสงขลานครินทร์",
    "m-otop": "สินค้า OTOP ของชุมชน",
    "m-geo": "ผลิตในสตูล อุทยานธรณีโลกของยูเนสโก",
    "farm-cap": "แผ่นพับของชุมชน: คอกวัว ฉลากเนื้อสมุนไพร (เนื้อ 99% สมุนไพร 0.9% เกลือ 0.2%) และการคัดเลือก PSU Startup 2017",
    "contact-title": "ติดต่อฝ่ายส่งออก",
    "role": "ผู้จัดการฝ่ายส่งออก", "phone": "โทร", "email": "อีเมล", "map": "แผนที่ฟาร์ม",
    "address": "159 หมู่ 4 ต.เขาขาว อ.ละงู จ.สตูล 91110",
    "sister": "ฝ่ายส่งออกเดียวกัน เนื้อไทยวากิวจากร้อยเอ็ด:",
    "slip-head": "ใบสั่งสินค้า: WHITE MOUNTAIN เนื้อฮาลาล", "slip-from": "จาก", "slip-items": "สินค้า", "slip-note": "หมายเหตุ",
    "subject": "ขอใบเสนอราคา: WHITE MOUNTAIN เนื้อฮาลาล"
  },
  zh: {
    "skip": "跳到产品",
    "nav-menu": "产品", "nav-farm": "农场", "nav-contact": "联系",
    "hook": "清真炖牛肉、草本牛肉干和牛肉零食，由泰国南部沙敦府考考村的养牛社区制作。", "place": "沙敦 · 泰国南部",
    "cta-quote": "索取报价", "cta-line": "LINE 联系",
    "hero-cap": "中式药膳炖牛肉 · 200 克盒装",
    "menu-title": "今日招牌",
    "menu-note": "零售价以泰铢计。出口及批发价格请询价。",
    "d-braise": "以中式药材汤慢炖的牛肉。净重 200 克，盒装。",
    "d-jerky": "农场牛肉，按当地古方以黑胡椒、姜黄和香茅腌制。",
    "d-crispy": "烘烤牛肉脆片。包装标注：97% 无脂、高蛋白、低碳水。",
    "d-phukrak": "泰南同心结酥点，牛肉馅，罐装。",
    "add": "加入订单", "added": "已在订单中",
    "order-title": "订货单",
    "order-note": "从招牌上选择产品，填写您的信息，然后通过电子邮件或 LINE 发送。我们会回复出口价格和条款。",
    "slip-empty": "订单为空。请点击上方招牌中的“加入订单”。",
    "f-name": "姓名", "f-company": "公司", "f-country": "国家",
    "f-note": "备注（数量、目的地、问题）",
    "f-error": "请填写姓名，并至少选择一个产品或填写备注。",
    "send-email": "通过邮件发送", "send-line": "复制并打开 LINE",
    "copied": "订单已复制。请粘贴到刚打开的 LINE 对话中。",
    "copy-fail": "无法自动复制。请复制下方订单内容并粘贴到 LINE 对话中。", "less": "减少一个", "more": "增加一个",
    "farm-title": "来自沙敦府拉努县考考村",
    "farm-1": "考考村的村民养牛已有约五十年，最初用于婚礼、宗教节庆和村庄节日，后来成为生计。如今牛群由考考育肥牛农场社区企业经营。",
    "farm-2": "牛吃的是当地的作物：稻草、椰子和油棕叶、象草和鲁兹草，以及玉米秆。牛肉按社区世代相传的配方烹制，加入黑胡椒、姜黄和香茅。",
    "m-halal": "清真：包装上印有泰国伊斯兰中央委员会标志",
    "m-psu": "入选宋卡王子大学 PSU Startup 2017",
    "m-otop": "OTOP 社区产品",
    "m-geo": "产自联合国教科文组织世界地质公园沙敦",
    "farm-cap": "社区自己的宣传册：牛栏、草本牛肉标签（牛肉 99%、草药 0.9%、盐 0.2%）以及 PSU Startup 2017 入选。",
    "contact-title": "联系出口部",
    "role": "出口经理", "phone": "电话", "email": "电子邮件", "map": "农场地图",
    "address": "泰国沙敦府拉努县考考区 4 村 159 号 91110",
    "sister": "同一出口部门，来自黎逸府的泰国和牛：",
    "slip-head": "订货单：WHITE MOUNTAIN 清真牛肉", "slip-from": "发件人", "slip-items": "产品", "slip-note": "备注",
    "subject": "询价：WHITE MOUNTAIN 清真牛肉"
  },
  ar: {
    "skip": "انتقل إلى المنتجات",
    "nav-menu": "المنتجات", "nav-farm": "المزرعة", "nav-contact": "اتصل بنا",
    "hook": "لحم بقري حلال مطهو، ولحم مجفف بالأعشاب، ووجبات خفيفة من اللحم، من إنتاج مجتمع لتربية الماشية في قرية خاو خاو، ساتون، جنوب تايلاند.", "place": "ساتون · جنوب تايلاند",
    "cta-quote": "اطلب عرض سعر", "cta-line": "تواصل عبر LINE",
    "hero-cap": "لحم بقري مطهو بالأعشاب الصينية · علبة 200 غ",
    "menu-title": "لوحة اليوم",
    "menu-note": "أسعار التجزئة بالبات التايلاندي. أسعار التصدير والجملة عند الطلب.",
    "d-braise": "لحم بقري مطهو ببطء في مرق الأعشاب الصينية. الوزن الصافي 200 غ، في علبة.",
    "d-jerky": "لحم من المزرعة متبل بالفلفل الأسود والكركم وعشبة الليمون وفق وصفة محلية قديمة.",
    "d-crispy": "رقائق لحم مخبوزة في الفرن. مكتوب على العبوة: خالية من الدهون بنسبة 97%، غنية بالبروتين، قليلة الكربوهيدرات.",
    "d-phukrak": "معجنات «عقدة الحب» من جنوب تايلاند بحشوة اللحم، في برطمانات.",
    "add": "أضف إلى الطلب", "added": "في قائمة الطلب",
    "order-title": "قسيمة الطلب",
    "order-note": "أضف المنتجات من اللوحة، وأخبرنا من أنت، ثم أرسل القسيمة بالبريد الإلكتروني أو عبر LINE. سنرد بأسعار التصدير والشروط.",
    "slip-empty": "القسيمة فارغة. استخدم «أضف إلى الطلب» في اللوحة أعلاه.",
    "f-name": "الاسم", "f-company": "الشركة", "f-country": "الدولة",
    "f-note": "ملاحظة (الكميات، الوجهة، الأسئلة)",
    "f-error": "يرجى كتابة اسمك، واختيار منتج واحد على الأقل أو كتابة ملاحظة.",
    "send-email": "أرسل بالبريد الإلكتروني", "send-line": "انسخ وافتح LINE",
    "copied": "تم نسخ القسيمة. الصقها في محادثة LINE التي فُتحت الآن.",
    "copy-fail": "تعذّر النسخ تلقائيًا. انسخ نص القسيمة أدناه والصقه في محادثة LINE.", "less": "إزالة واحدة", "more": "إضافة واحدة",
    "farm-title": "من قرية خاو خاو، لانغو، ساتون",
    "farm-1": "تربي عائلات قرية خاو خاو الماشية منذ نحو خمسين عامًا، في البداية للأعراس والمناسبات الدينية واحتفالات القرية، ثم كمصدر رزق. واليوم يدير القطيع مشروع مزرعة خاو خاو المجتمعي لتسمين الماشية.",
    "farm-2": "تتغذى الماشية على ما تنتجه المنطقة: قش الأرز، وسعف جوز الهند ونخيل الزيت، وعشب نابير وروزي، وسيقان الذرة. ويُطهى اللحم وفق وصفات توارثها المجتمع عبر الأجيال، مع الفلفل الأسود والكركم وعشبة الليمون.",
    "m-halal": "حلال، عليها علامة مكتب اللجنة الإسلامية المركزية في تايلاند",
    "m-psu": "مختار ضمن برنامج PSU Startup 2017 بجامعة الأمير سونغكلا",
    "m-otop": "منتج مجتمعي OTOP",
    "m-geo": "صُنع في ساتون، حديقة جيولوجية عالمية لليونسكو",
    "farm-cap": "كتيّب المجتمع: الحظائر، وملصق اللحم بالأعشاب (لحم 99%، أعشاب 0.9%، ملح 0.2%)، واختيار PSU Startup 2017.",
    "contact-title": "تواصل مع قسم التصدير",
    "role": "مديرة التصدير", "phone": "الهاتف", "email": "البريد الإلكتروني", "map": "المزرعة على الخريطة",
    "address": "159 مو 4، خاو خاو، لانغو، ساتون 91110، تايلاند",
    "sister": "قسم التصدير نفسه، قطع واغيو تايلاندية من روي إت:",
    "slip-head": "قسيمة طلب: WHITE MOUNTAIN لحم حلال", "slip-from": "من", "slip-items": "المنتجات", "slip-note": "ملاحظة",
    "subject": "طلب عرض سعر: WHITE MOUNTAIN لحم حلال"
  }
};

const LANG_ATTR = { en: "en", th: "th", zh: "zh-Hans", ar: "ar" };
const EMAIL = "ksskids@outlook.com";
const LINE_URL = "https://line.me/ti/p/smoS2zVStO";

let lang = "en";
const slip = new Map(); // id -> qty

const items = [...document.querySelectorAll(".item")];
const slipList = document.querySelector(".slip");
const form = document.querySelector(".chit-form");
const errorEl = form.querySelector(".form-error");
const copiedEl = form.querySelector(".copied");
const slipTextEl = form.querySelector(".slip-text");

const t = (key) => T[lang][key] ?? T.en[key];

function itemName(item, l = lang) {
  return item.querySelector(`.names [lang="${LANG_ATTR[l]}"]`).textContent.trim();
}

function setLang(next, animate = true) {
  lang = next;
  const root = document.documentElement;
  root.lang = LANG_ATTR[lang];
  root.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.querySelectorAll(".tag").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  document.querySelectorAll(".names").forEach((names) => {
    names.querySelectorAll("span").forEach((s) => s.classList.toggle("primary", s.lang === LANG_ATTR[lang]));
  });
  items.forEach(syncItem);
  document.querySelectorAll(".rail-name").forEach((el) => {
    el.textContent = itemName(items.find((i) => i.dataset.id === el.dataset.for));
    el.lang = LANG_ATTR[lang];
  });
  renderSlip();

  if (animate) {
    document.body.classList.remove("repaint");
    void document.body.offsetWidth;
    document.body.classList.add("repaint");
  }
  slipTextEl.setAttribute("aria-label", t("order-title"));
  try { localStorage.setItem("wm-lang", lang); } catch (e) {}
}

function syncItem(item) {
  const on = slip.has(item.dataset.id);
  item.classList.toggle("on", on);
  const btn = item.querySelector(".add");
  btn.setAttribute("aria-pressed", String(on));
  btn.querySelector("span").textContent = on ? t("added") : t("add");
  btn.querySelector("use").setAttribute("href", on ? "#i-minus" : "#i-plus");
}

function renderSlip() {
  slipList.replaceChildren();
  for (const [id, qty] of slip) {
    const item = items.find((i) => i.dataset.id === id);
    const li = document.createElement("li");
    const name = itemName(item);
    li.innerHTML = `<span class="n"></span>
      <span class="qty"><button type="button" data-step="-1"><svg aria-hidden="true"><use href="#i-minus"/></svg></button><output></output><button type="button" data-step="1"><svg aria-hidden="true"><use href="#i-plus"/></svg></button></span>
      <bdi class="sub"></bdi>`;
    li.querySelector(".n").textContent = name;
    li.querySelector("[data-step='-1']").setAttribute("aria-label", `${t("less")}: ${name}`);
    li.querySelector("[data-step='1']").setAttribute("aria-label", `${t("more")}: ${name}`);
    li.querySelector("output").textContent = qty;
    li.querySelector(".sub").textContent = `${(qty * Number(item.dataset.price)).toLocaleString("en")} THB`;
    li.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => {
      const n = qty + Number(b.dataset.step);
      if (n <= 0) slip.delete(id); else slip.set(id, n);
      syncItem(item);
      renderSlip();
    }));
    slipList.append(li);
  }
  if (tried) validate();
}

items.forEach((item) => {
  item.querySelector(".add").addEventListener("click", () => {
    if (slip.has(item.dataset.id)) slip.delete(item.dataset.id);
    else slip.set(item.dataset.id, 1);
    syncItem(item);
    renderSlip();
  });
});

// after the first failed send, the error clears as soon as the slip becomes valid
let tried = false;
function validate() {
  const hasName = !!form.elements.name.value.trim();
  const ok = hasName && (slip.size > 0 || !!form.elements.note.value.trim());
  form.elements.name.setAttribute("aria-invalid", String(tried && !hasName));
  errorEl.hidden = ok || !tried;
  return ok;
}
form.addEventListener("input", () => { if (tried) validate(); });

function slipText(data) {
  const lines = [t("slip-head"), ""];
  const from = [data.get("name"), data.get("company"), data.get("country")].filter(Boolean).join(", ");
  lines.push(`${t("slip-from")}: ${from}`, "");
  if (slip.size) {
    lines.push(`${t("slip-items")}:`);
    for (const [id, qty] of slip) {
      const item = items.find((i) => i.dataset.id === id);
      lines.push(`- ${itemName(item)} / ${itemName(item, "en")} × ${qty}`);
    }
    lines.push("");
  }
  if (data.get("note")) lines.push(`${t("slip-note")}: ${data.get("note")}`);
  return lines.join("\n");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  tried = true;
  copiedEl.hidden = true;
  slipTextEl.hidden = true;
  if (!validate()) {
    (form.elements.name.value.trim() ? form.elements.note : form.elements.name).focus();
    return;
  }

  const text = slipText(new FormData(form));
  if (e.submitter && e.submitter.dataset.via === "line") {
    // start the copy while this tab still has focus, then open LINE inside the click gesture, then wait
    const copying = navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject(new Error("no clipboard"));
    window.open(LINE_URL, "_blank", "noopener");
    try {
      await copying;
      copiedEl.textContent = t("copied");
    } catch (err) {
      copiedEl.textContent = t("copy-fail");
      slipTextEl.value = text;
      slipTextEl.hidden = false;
      slipTextEl.select();
    }
    copiedEl.hidden = false;
  } else {
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t("subject"))}&body=${encodeURIComponent(text)}`;
  }
});

document.querySelectorAll(".tag").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

// ?lang=th|zh|ar lets a link open in the buyer's language
let saved = new URLSearchParams(location.search).get("lang");
if (!T[saved]) { try { saved = localStorage.getItem("wm-lang"); } catch (e) {} }
setLang(T[saved] ? saved : "en", false);
