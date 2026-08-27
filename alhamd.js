// 1. تحديد العناصر من الـ HTML
const contactForm = document.getElementById('my-contact-form');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

// 2. استماع لحدث إرسال الفورم (Submit)
contactForm.addEventListener('submit', async function(event) {
  // منع السلوك الافتراضي للمتصفح (إعادة تحميل الصفحة)
  event.preventDefault(); 
  
  // تغيير نص الزر أثناء الإرسال لإعطاء انطباع للمستخدم أن هناك عملية تتم
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true; // تعطيل الزر مؤقتاً لمنع الضغط المتكرر

  // تجميع بيانات الفورم تلقائياً
  const formData = new FormData(contactForm);

  // 3. إرسال البيانات إلى السيرفر (Formspree API)
  try {
    // استبدل الرابط أدناه بالرابط الذي حصلت عليه من حسابك في Formspree
    const response = await fetch('https://formspree.io/f/xaqgorvk', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    // 4. التعامل مع استجابة السيرفر
    if (response.ok) {
      // إذا تم الإرسال بنجاح
      formStatus.innerText = "Thank you! Your message has been sent successfully. 🎉";
      formStatus.style.color = "#2ecc71"; // لون أخضر نجاح
      contactForm.reset(); // تفريغ الحقول بعد الإرسال
    } else {
      // إذا كان هناك خطأ في السيرفر
      const data = await response.json();
      if (data.errors) {
        formStatus.innerText = data.errors.map(error => error.message).join(", ");
      } else {
        formStatus.innerText = "Oops! There was a problem submitting your form.";
      }
      formStatus.style.color = "#e74c3c"; // لون أحمر خطأ
    }
  } catch (error) {
    // في حال حدوث مشكلة في الاتصال أو الشبكة
    formStatus.innerText = "Network error. Please check your connection.";
    formStatus.style.color = "#e74c3c";
  } finally {
    // إعادة الزر لحالته الطبيعية بعد انتهاء العملية بالكامل
    submitBtn.innerText = "sen message ✅";
    submitBtn.disabled = false;
  }
});

/* make nav dispear when scrolling */
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos < currentScrollPos) {
    // scrolling down → hide navbar
    navbar.style.top = "-80px";
  } else {
    // scrolling up → show navbar
    navbar.style.top = "0";
  }
  
  prevScrollPos = currentScrollPos;
};

