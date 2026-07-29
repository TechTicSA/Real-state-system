/* ============================================
   ميزان — بيانات تجريبية موحدة (Dummy Data)
   نفس البيانات دي بتتغذى منها كل الصفحات
   ============================================ */

window.APP_DATA = {

    currency: 'ر.س',

    users: [
        { id: 1, name: 'أحمد المالكي', email: 'ahmed@example.com', role: 'owner', addedOn: '01-01-2026' },
        { id: 2, name: 'سارة العتيبي', email: 'sara@example.com', role: 'editor', addedOn: '14-02-2026' },
        { id: 3, name: 'محمد الحربي', email: 'mohammed@example.com', role: 'viewer', addedOn: '03-05-2026' },
        { id: 4, name: 'مكتب المحاسبة الخارجي', email: 'accounting@partner.com', role: 'viewer', addedOn: '20-06-2026' },
    ],

    kpis: {
        totalIncomeActual: 1084474,
        totalIncomeExpected: 3958778,
        totalExpenseActual: 649952,
        netPosition: 434522,
        completionRate: 0.189,
    },

    months: ['يناير','فبراير','مارس','ابريل','مايو','يونيو','يوليو','اغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمبر'],

    monthlyIncome: [78850, 108605, 113833, 103000, 83533, 73292, 149583, 0, 0, 0, 0, 0],
    monthlyExpense: [7000, 10800, 4062, 13210, 17874, 11997, 11912, 0, 0, 0, 0, 0],

    expenseByCategory: [
        { label: 'أقساط عقارية', value: 243100, color: '#2563eb' },
        { label: 'مصاريف تشغيلية', value: 57288, color: '#059669' },
        { label: 'مصاريف شخصية', value: 335562, color: '#d97706' },
        { label: 'عمولات مكاتب', value: 13202, color: '#7c3aed' },
    ],

    accounts: [
        { id: 'acc-salary', name: 'حساب الراتب', expected: 129937, actual: 61728, opening: 63625, statement: [
            { date: '27-07-2026', desc: 'إيداع مرتب شهر يوليو', deposit: 126120.5, withdraw: null, balance: 129598.76 },
            { date: '25-07-2026', desc: 'حوالة إلى حساب الأولاد', deposit: null, withdraw: 433, balance: 129165.76 },
            { date: '20-07-2026', desc: 'سداد قسط بنكي شهري', deposit: null, withdraw: 20000, balance: 109165.76 },
            { date: '10-07-2026', desc: 'فاتورة كهرباء', deposit: null, withdraw: 1228.6, balance: 107937.16 },
        ]},
        { id: 'acc-daily', name: 'حساب المصاريف اليومية', expected: 0, actual: 1823, opening: 472.89, statement: [
            { date: '25-07-2026', desc: 'حوالة من حساب الراتب', deposit: 433, withdraw: null, balance: 478.89 },
            { date: '25-07-2026', desc: 'شراء أغراض للبيت', deposit: null, withdraw: 468.59, balance: 10.3 },
            { date: '18-07-2026', desc: 'مصروف أكل وشرب شهري', deposit: null, withdraw: 6868.59, balance: -6858.29 },
        ]},
        { id: 'acc-savings', name: 'حساب الادخار', expected: 259, actual: 9571, opening: 40572, statement: [
            { date: '15-07-2026', desc: 'إيداع عائد استثمار العيادة', deposit: 42500, withdraw: null, balance: 83072 },
            { date: '05-07-2026', desc: 'سداد قسط عقار المونسية', deposit: null, withdraw: 20258, balance: 62814 },
            { date: '01-07-2026', desc: 'مصاريف محاسبية ومتابعة عقارات', deposit: null, withdraw: 2000, balance: 60814 },
        ]},
    ],

    budget: {
        income: [
            { item: 'إيراد عقار الخبر', expected: 306000, actual: 108125, overdue: 63625, notes: '' },
            { item: 'إيراد عقار المونسية', expected: 397085, actual: 131075, overdue: 43200, notes: 'يزود raito' },
            { item: 'إيراد عقار الشفا', expected: 241263, actual: 77297, overdue: 8500, notes: '20% إدارة + إيجار الشقق' },
            { item: 'إيراد عقار الازدهار', expected: 400000, actual: 100000, overdue: 300000, notes: 'متأخر' },
            { item: 'إيراد المطعم', expected: 50000, actual: 0, overdue: 0, notes: 'لم يتم العمل حتى الآن' },
            { item: 'أرباح الأسهم', expected: 27554, actual: 13777, overdue: 0, notes: '' },
            { item: 'الراتب الشخصي', expected: 1500000, actual: 140000, overdue: 0, notes: '' },
            { item: 'عائد استثمار العيادة', expected: 1020000, actual: 510000, overdue: 0, notes: 'رد رأس المال على 15 شهر' },
        ],
        expense: [
            { item: 'مصروفات تشغيل عقار الخبر', expected: -28620, actual: -15412, overdue: 0, notes: '' },
            { item: 'مصروفات تشغيل عقار المونسية', expected: -32824, actual: -29273, overdue: 0, notes: '' },
            { item: 'مصروفات تشغيل عقار الشفا', expected: -32197, actual: -16603, overdue: 0, notes: '' },
            { item: 'عمولات مكاتب عقارية', expected: -40651, actual: -13203, overdue: 0, notes: '5% من كل مبنى (3% الشفا)' },
            { item: 'أقساط عقار المونسية السنوية', expected: -486200, actual: -243100, overdue: 0, notes: 'تخص عام 26' },
            { item: 'مصاريف محاسبية ومتابعة عقارات', expected: -24000, actual: -12000, overdue: 0, notes: '' },
        ],
    },

    transactions: [
        { date: '27-07-2026', desc: 'إيداع إيجار عقار الخبر', account: 'حساب الراتب', category: 'إيراد عقاري', amount: 6000, type: 'in' },
        { date: '25-07-2026', desc: 'سداد قسط عقار المونسية', account: 'حساب الادخار', category: 'أقساط عقارية', amount: -20258, type: 'out' },
        { date: '22-07-2026', desc: 'إيداع إيجار عقار المونسية', account: 'حساب الراتب', category: 'إيراد عقاري', amount: 10000, type: 'in' },
        { date: '18-07-2026', desc: 'عمولة مكتب عقاري - الشفا', account: 'حساب الراتب', category: 'عمولات مكاتب', amount: -242, type: 'out' },
        { date: '15-07-2026', desc: 'إيداع عائد استثمار العيادة', account: 'حساب الادخار', category: 'استثمارات', amount: 42500, type: 'in' },
        { date: '10-07-2026', desc: 'سداد قسط بنكي شهري', account: 'حساب الراتب', category: 'أقساط بنكية', amount: -20000, type: 'out' },
        { date: '05-07-2026', desc: 'مصروف صيانة عقار الخبر', account: 'حساب المصاريف اليومية', category: 'مصروفات تشغيلية', amount: -402, type: 'out' },
        { date: '01-07-2026', desc: 'مصاريف محاسبية ومتابعة عقارات', account: 'حساب الادخار', category: 'مصاريف تشغيلية', amount: -2000, type: 'out' },
    ],

    reconciliation: [
        { account: 'حساب الراتب', expected: 129937.26, actual: 61728.03 },
        { account: 'حساب المصاريف اليومية', expected: 0, actual: 1822.89 },
        { account: 'حساب الادخار', expected: 259.33, actual: 9571 },
        { account: 'حساب الإنماء (العيادة)', expected: 48941.94, actual: 48941.94 },
    ],
};
