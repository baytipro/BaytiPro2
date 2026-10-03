# 🏠 BaytiPro — متجر رشيد | سخان الماء الغازي 6L

موقع بيع من صفحة واحدة (Cash on Delivery) بالعربية — عرض الشتاء 890 درهم.
مبني بـ **Next.js + PostgreSQL (Drizzle) + Tailwind CSS**.

## 📁 بنية ملفات `src`

| الملف | الوصف |
|---|---|
| `src/app/page.tsx` | 🏠 الصفحة الرئيسية |
| `src/app/layout.tsx` | 🔖 العنوان + SEO + الخطوط |
| `src/app/globals.css` | 🎨 التصميم والحركات |
| `src/app/admin/page.tsx` | 🔐 لوحة التحكم (الطلبات + الواتساب + استخراج الملفات) |
| `src/app/api/orders/route.ts` | 📦 إنشاء الطلبات + تنبيه الواتساب |
| `src/app/api/orders/status/route.ts` | 🔄 تبديل حالة الطلب |
| `src/app/api/orders/notify/route.ts` | 📲 إعادة إرسال الطلب للواتساب |
| `src/app/api/whatsapp/route.ts` | 💬 إعدادات الواتساب |
| `src/app/api/source/route.ts` | 📁 استخراج ملفات المشروع |
| `src/app/api/health/route.ts` | 💚 فحص السيرفر |
| `src/components/landing.tsx` | 🔥 صفحة البيع كاملة |
| `src/db/index.ts` | 🔌 الاتصال بقاعدة البيانات |
| `src/db/schema.ts` | 🗄️ الجداول (orders + settings) |
| `src/lib/store.ts` | ⚙️ الثمن، المدن، العروض |
| `src/lib/whatsapp.ts` | 💬 مكتبة الواتساب |

> 💡 يمكنك استخراج أي ملف من لوحة التحكم `/admin` ← قسم **📁 استخراج ملفات المشروع**.

## 🚀 النشر على Vercel + Neon (مجاني)

### 1. قاعدة البيانات — Neon.tech
1. سجل في [neon.tech](https://neon.tech) وصايب مشروع جديد
2. كوبي رابط الاتصال `DATABASE_URL`

### 2. النشر — Vercel.com
1. ارفع المشروع لـ GitHub (ملف `.env` **لا يُرفع أبداً** — محمي في `.gitignore`)
2. سجل في [vercel.com](https://vercel.com) بحساب GitHub
3. **Add New → Project** → اختر المستودع
4. زيد Environment Variables قبل Deploy:
   ```
   DATABASE_URL=postgresql://... (رابط Neon)
   ADMIN_KEY=baytipro2026
   ```
5. ضغط **Deploy** 🎉

### 3. تفعيل الجداول (مرة واحدة)
```bash
DATABASE_URL="رابط-Neon" npx drizzle-kit push
```

## 💬 تفعيل إشعارات الواتساب (مجاني)
1. سجّل الرقم `+34 684 770 005` فالتيليفون (سميه CallMeBot)
2. صيفط ليه هاد الرسالة بالضبط: `I allow callmebot to send me messages`
3. تسنى حتى 2 دقائق — غادي يرجع ليك رسالة فيها الـ `apikey`
4. دخول `/admin` ← لصقو في قسم الواتساب ← حفظ ✅
5. ضغط زر 🧪 باش تجرب واش وصلاتك الرسالة التجريبية

> 🆘 الـ apikey ما وصلاتكش؟ تأكد من: الرقم الجديد فوق (القديم مات!) + الرسالة حرف بحرف +
> الصيفط من نفس الرقم (0651840540) + تسنى 2 دقائق. إلا باقي والو، عاود من بعد 24 ساعة
> (الحل الرسمي من CallMeBot). البديل: فعّل UltraMsg — كيغطي حتى تنبيهات المالك!

## 🔐 الدخول للوحة التحكم
- الرابط: `/admin`
- كلمة السر الافتراضية: `baytipro2026` (بدلها عبر `ADMIN_KEY`)

## 🛠️ التشغيل محلياً
```bash
npm install
npx drizzle-kit push
npm run dev
```
