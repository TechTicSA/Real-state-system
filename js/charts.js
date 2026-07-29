/* ============================================
   ميزان — تهيئة الرسومات البيانية
   كل دالة بتتأكد من وجود الـ canvas الخاص بيها الأول
   عشان نفس الملف يشتغل على أي صفحة من غير أخطاء
   ============================================ */

const CHART_FONT = { family: 'Cairo, sans-serif' };

function initMonthlyChart() {
    const el = document.getElementById('monthlyChart');
    if (!el) return;
    const d = window.APP_DATA;
    new Chart(el.getContext('2d'), {
        type: 'bar',
        data: {
            labels: d.months.slice(0, 7),
            datasets: [
                { label: 'الإيرادات', data: d.monthlyIncome.slice(0, 7), backgroundColor: '#2563eb', borderRadius: 4 },
                { label: 'المصروفات', data: d.monthlyExpense.slice(0, 7), backgroundColor: '#dc2626', borderRadius: 4 },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { font: CHART_FONT, usePointStyle: true, pointStyle: 'circle' } },
                tooltip: {
                    backgroundColor: 'rgba(24,24,27,.92)', titleFont: CHART_FONT, bodyFont: CHART_FONT,
                    callbacks: { label: (ctx) => ' ' + ctx.dataset.label + ': ' + formatMoney(ctx.raw) }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { font: CHART_FONT } },
                y: { grid: { color: '#f4f4f5' }, ticks: { font: CHART_FONT } }
            }
        }
    });
}

function initCategoryChart() {
    const el = document.getElementById('categoryChart');
    if (!el) return;
    const cats = window.APP_DATA.expenseByCategory;
    new Chart(el.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: cats.map(c => c.label),
            datasets: [{
                data: cats.map(c => c.value),
                backgroundColor: cats.map(c => c.color),
                borderColor: '#fff', borderWidth: 2, hoverOffset: 4
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false, cutout: '70%',
            plugins: {
                legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle', font: { ...CHART_FONT, size: 11 }, boxWidth: 8 } },
                tooltip: {
                    backgroundColor: 'rgba(24,24,27,.92)', titleFont: CHART_FONT, bodyFont: CHART_FONT,
                    callbacks: { label: (ctx) => ' ' + formatMoney(ctx.raw) }
                }
            }
        }
    });
}

function initBudgetVsActualChart() {
    const el = document.getElementById('budgetVsActualChart');
    if (!el) return;
    const income = window.APP_DATA.budget.income;
    new Chart(el.getContext('2d'), {
        type: 'bar',
        data: {
            labels: income.map(i => i.item),
            datasets: [
                { label: 'المتوقع', data: income.map(i => i.expected), backgroundColor: '#e4e4e7', borderRadius: 4 },
                { label: 'الفعلي', data: income.map(i => i.actual), backgroundColor: '#2563eb', borderRadius: 4 },
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { font: CHART_FONT, usePointStyle: true, pointStyle: 'circle' } },
                tooltip: { backgroundColor: 'rgba(24,24,27,.92)', titleFont: CHART_FONT, bodyFont: CHART_FONT }
            },
            scales: {
                x: { grid: { color: '#f4f4f5' }, ticks: { font: CHART_FONT } },
                y: { grid: { display: false }, ticks: { font: { ...CHART_FONT, size: 11 } } }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMonthlyChart();
    initCategoryChart();
    initBudgetVsActualChart();
});
