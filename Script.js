document.addEventListener('DOMContentLoaded', () => {
    // ⚙️ هزینه‌ها را اینجا تعریف کنید
    const mainCost = 150000; // هزینه ثبت نام اصلی (تومان)
    const guestCost = 80000;  // هزینه هر مهمان (تومان)
    const statueCost = 50000; // هزینه تندیس (تومان)

    // نمایش هزینه‌ها در صفحه
    document.getElementById('main-cost').textContent = mainCost.toLocaleString() + ' تومان';
    document.getElementById('guest-cost').textContent = guestCost.toLocaleString() + ' تومان';
    document.getElementById('statue-cost').textContent = statueCost.toLocaleString() + ' تومان';

    // المان‌های فرم
    const attendingCheckbox = document.getElementById('attending');
    const guestCountGroup = document.querySelector('.guest-count-group');
    const guestsSelect = document.getElementById('guests');
    const statueCheckbox = document.getElementById('statue');
    const finalCostDisplay = document.getElementById('final-cost');

    // تابع محاسبه هزینه
    function calculateTotalCost() {
        let totalCost = 0;

        if (attendingCheckbox.checked) {
            totalCost += mainCost;
            guestCountGroup.style.display = 'flex'; // نمایش بخش مهمان‌ها
            const guestCount = parseInt(guestsSelect.value);
            totalCost += guestCount * guestCost;
        } else {
            guestCountGroup.style.display = 'none'; // مخفی کردن بخش مهمان‌ها
            guestsSelect.value = 0; // ریست کردن تعداد مهمان
        }

        if (statueCheckbox.checked) {
            totalCost += statueCost;
        }

        finalCostDisplay.textContent = totalCost.toLocaleString();
    }

    // اضافه کردن Listener به المان‌ها
    attendingCheckbox.addEventListener('change', calculateTotalCost);
    guestsSelect.addEventListener('change', calculateTotalCost);
    statueCheckbox.addEventListener('change', calculateTotalCost);

    // محاسبه اولیه هنگام بارگذاری صفحه
    calculateTotalCost();
});