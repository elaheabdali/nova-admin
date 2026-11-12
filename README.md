# NOVA Admin

پنل مدیریتی مستقل NOVA با React، Vite و TypeScript. این پروژه مخزن مستقلی از `nova-store` است و هیچ وابستگی workspace یا کد مشترک اجرایی با آن ندارد.

## قابلیت‌ها

- ورود با `POST /auth/login` و محافظت از مسیرهای مدیریتی
- خروج از حساب و مدیریت وضعیت احراز هویت در Redux Toolkit
- فهرست و جستجوی محصولات و کاربران
- فرم ساخت محصول و کاربر با Formik و اعتبارسنجی Yup
- افزودن پاسخ موفق POST به state جاری بدون ادعای ذخیره دائمی
- زبان فارسی/انگلیسی با تغییر جهت RTL/LTR
- پوسته روشن/تیره با Styled Components
- مدیریت متمرکز Loading، Error، Empty و Success states

## فناوری‌ها

React 19، Vite 7، TypeScript 5، React Router، Redux Toolkit، React Redux، Axios، Styled Components، Formik، Yup و Lucide.

## پیش‌نیازها

- Node.js 20.19+ یا 22.12+ توصیه می‌شود.
- npm 10+
- دسترسی شبکه به `https://fakestoreapi.com`

## نصب و اجرا

```bash
npm install
cp .env.example .env.local
npm run dev
```

برنامه به‌صورت پیش‌فرض روی `http://localhost:5173` اجرا می‌شود.

## Build و بررسی TypeScript

```bash
npm run typecheck
npm run build
npm run preview
```

## متغیر محیطی

| Variable | Description | Default |
|---|---|---|
| `VITE_API_BASE_URL` | FakeStoreAPI base URL | `https://fakestoreapi.com` |

هیچ کلید خصوصی یا Secret در این پروژه لازم نیست. مقدار URL عمومی API از فایل محیطی خوانده می‌شود.

## ساختار پوشه‌ها

```text
src/
├── assets/                 # فونت‌ها، آیکون‌ها و تصاویر محلی
├── Components/             # اجزای مختص پوسته پنل
├── Dictionary/              # فرهنگ فارسی و انگلیسی
├── Modals/                  # رزرو برای مودال‌های آینده
├── Pages/                   # صفحات Login, Products, Users و فرم‌ها
├── Redux/                   # Store، Sliceها و typed hooks
├── Routes/                  # مسیرهای متمرکز و ProtectedRoute
├── Shared/                  # Theme، GlobalStyle، primitives و state views
├── Storage/                 # دسترسی محدود به token storage
├── types/Enums/              # Enumهای مستقل
├── Utils/api/                # AxiosInstance مستقل پروژه
├── Utils/services/           # سرویس‌های API
└── Validations/              # Schemaهای Yup
```

## معماری State

- `authSlice`: token و وضعیت ورود/خروج؛ Side effect ذخیره/پاک‌کردن token با Redux listener middleware اجرا می‌شود تا reducerها pure بمانند.
- `catalogSlice`: محصولات، وضعیت بارگذاری/خطا و پاسخ ساخت محصول؛ آیتم‌های ساخته‌شده تا پایان نشست جداگانه نگه‌داری می‌شوند تا GET اولیه نیز آن‌ها را حذف نکند.
- `usersSlice`: کاربران و پاسخ ساخت کاربر؛ فهرست اولیه با آیتم‌های موقت ایجادشده merge می‌شود.
- `settingsSlice`: زبان و theme.
- stateهای موقتی مثل عبارت جستجو، پیام نتیجه و وضعیت باز/بسته بودن فرم در خود کامپوننت با `useState` نگه‌داری می‌شوند.

## معماری API و Axios

تمام درخواست‌ها از `src/Utils/api/axiosInstance.ts` عبور می‌کنند. Base URL از `VITE_API_BASE_URL` می‌آید، token موجود در Storage به شکل Bearer در request interceptor اضافه می‌شود و خطاهای پاسخ در response interceptor به خطای قابل مدیریت تبدیل می‌شوند. کامپوننت‌ها مستقیماً Axios را فراخوانی نمی‌کنند؛ سرویس‌های `authService`، `productService` و `userService` مرز ارتباط با API هستند.

## احراز هویت و ملاحظات امنیتی

- فرم ورود credential را از کاربر می‌گیرد و هیچ رمز عبوری در source یا فایل محیطی قرار نگرفته است.
- FakeStoreAPI برای ورود به کاربران seed شده خود متکی است. نمونه credential عمومی که برای تست این API منتشر شده `mor_2314` / `83r5^_` است؛ در صورت تغییر داده‌های seed شده، از یک username/password معتبر موجود در کاربران API استفاده کنید. این مقدار در کد برنامه prefill یا hardcode نشده است.
- FakeStoreAPI امکان تنظیم cookie امن `HttpOnly` از سمت این SPA را ارائه نمی‌کند. برای این چالش، token در `localStorage` ذخیره می‌شود تا رفتار ورود/خروج و route guard قابل نمایش باشد. این انتخاب یک راهکار production-grade نیست و در برابر XSS محافظت کافی ایجاد نمی‌کند.
- ProtectedRoute کنترل سمت کلاینت است؛ مجوزدهی واقعی باید در Backend انجام شود.

## محدودیت‌های FakeStoreAPI و رفتار موقت

FakeStoreAPI سرویس Mock است. موفقیت `POST /products` یا `POST /users` فقط موفقیت پاسخ آزمایشی را نشان می‌دهد و به معنی ذخیره دائمی در دیتابیس نیست. بعد از پاسخ موفق، مورد جدید با شناسه برگشتی API در state فعلی Redux اضافه می‌شود تا در همین اجرای برنامه دیده شود. با Refresh یا دریافت مجدد داده‌ها، ممکن است مورد ایجادشده ناپدید شود. این اطلاعات با پروژه Store به اشتراک گذاشته نمی‌شوند.

در صورت Refresh صفحه، state فهرست‌ها دوباره از `GET` خوانده می‌شود. فهرست‌ها در localStorage ذخیره نمی‌شوند.

## فرض‌ها و تصمیم‌های فنی

- حذف و ویرایش در محدوده اجباری نیست و پیاده‌سازی نشده است.
- categoryها برای فرم محصول از endpoint دسته‌بندی API دریافت می‌شوند.
- برای ساخت کاربر، فیلدهای نام و نام خانوادگی در payload زیر `name.firstname` و `name.lastname` ارسال می‌شوند.
- در نبود پاسخ token معتبر، ورود موفق تلقی نمی‌شود.
- تغییر theme و locale در Redux نگهداری می‌شود و با Refresh به مقادیر پیش‌فرض برمی‌گردد.
- ساختار پوشه‌ها مطابق پیشنهاد سند فارسی نگه داشته شده است؛ `Modals` و `assets` در حال حاضر برای توسعه بعدی آماده‌اند.

## Git مستقل

این پوشه یک Git repository مستقل با تاریخچه commitهای مرحله‌ای است. برای انتشار در سرویس Git میزبان، remote مخزن خودتان را اضافه کنید:

```bash
git remote add origin https://github.com/elaheabdali/
git remote add origin https://github.com/elaheabdali/
git push -u origin main https://github.com/elaheabdali/nova-admin.git
```
