/* ============================================
   ميزان — منطق مشترك بين كل الصفحات
   (صلاحيات الأدوار، القائمة الجانبية، الإشعارات)
   ============================================ */

const ROLE_LABELS = { owner: 'مالك', editor: 'محرر', viewer: 'مشاهد' };

// الدور الحالي بييجي من الرابط (?role=viewer) عشان يفضل ثابت
// وإحنا بنتنقل بين الصفحات، من غير أي browser storage.
function getCurrentRole() {
    const params = new URLSearchParams(window.location.search);
    const role = params.get('role');
    return (role === 'editor' || role === 'viewer') ? role : 'owner';
}

// بيحقن الدور الحالي في كل روابط الصفحة (عشان التنقل بين الصفحات يفضل بنفس الدور)
function propagateRoleToLinks(role) {
    document.querySelectorAll('a[href$=".html"]').forEach(a => {
        const url = new URL(a.getAttribute('href'), window.location.href);
        url.searchParams.set('role', role);
        a.setAttribute('href', url.pathname.split('/').pop() + url.search);
    });
}

function applyRoleVisibility(role) {
    const canEdit = (role === 'owner' || role === 'editor');
    const isOwner = (role === 'owner');

    document.querySelectorAll('.owner-editor-only').forEach(el => {
        el.classList.toggle('role-hidden', !canEdit);
    });
    document.querySelectorAll('.owner-only').forEach(el => {
        el.classList.toggle('role-hidden', !isOwner);
    });

    const banner = document.getElementById('viewerBanner');
    if (banner) banner.classList.toggle('hidden', role !== 'viewer');

    const roleLabel = document.getElementById('roleLabel');
    const avatarBadge = document.getElementById('avatarBadge');
    if (roleLabel) roleLabel.textContent = ROLE_LABELS[role];
    if (avatarBadge) avatarBadge.textContent = ROLE_LABELS[role][0];

    const switcher = document.getElementById('roleSwitcher');
    if (switcher) switcher.value = role;
}

// بتتنادى في الصفحات اللي مقفولة على الـ Owner بس (مثال: صفحة المستخدمين)
function enforcePageAccess(allowedRoles) {
    const role = getCurrentRole();
    if (!allowedRoles.includes(role)) {
        const content = document.getElementById('pageContent');
        const blocked = document.getElementById('accessBlocked');
        if (content) content.classList.add('hidden');
        if (blocked) blocked.classList.remove('hidden');
        return false;
    }
    return true;
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'app-toast';
    toast.innerHTML = `<i class="bi bi-check-circle-fill text-emerald-400 ml-2"></i>${message}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

function initSidebarToggle() {
    const sb = document.getElementById('appSidebar');
    const ov = document.getElementById('sidebarOverlay');
    document.getElementById('sidebarToggler')?.addEventListener('click', () => {
        sb?.classList.toggle('translate-x-full');
        ov?.classList.toggle('hidden');
    });
    ov?.addEventListener('click', () => {
        sb?.classList.add('translate-x-full');
        ov?.classList.add('hidden');
    });
}

function initActiveNav() {
    const page = document.body.dataset.page;
    document.querySelectorAll('.nav-link').forEach(link => {
        const isActive = link.dataset.page === page;
        link.classList.toggle('bg-zinc-900', isActive);
        link.classList.toggle('text-white', isActive);
        link.classList.toggle('text-zinc-600', !isActive);
        link.classList.toggle('hover:bg-zinc-100', !isActive);
    });
}

function initNotifications() {
    const bell = document.getElementById('bellBtn');
    const panel = document.getElementById('bellPanel');
    bell?.addEventListener('click', () => panel?.classList.toggle('hidden'));
    document.addEventListener('click', (e) => {
        if (!document.getElementById('bellWrap')?.contains(e.target)) {
            panel?.classList.add('hidden');
        }
    });
}

function initRoleSwitcher() {
    const switcher = document.getElementById('roleSwitcher');
    switcher?.addEventListener('change', (e) => {
        const url = new URL(window.location.href);
        url.searchParams.set('role', e.target.value);
        window.location.href = url.toString();
    });
}

function formatMoney(n) {
    const abs = Math.abs(n).toLocaleString('ar-EG', { maximumFractionDigits: 0 });
    return (n < 0 ? '-' : '') + abs + ' ' + window.APP_DATA.currency;
}

// نقطة الدخول المشتركة لكل صفحة
document.addEventListener('DOMContentLoaded', () => {
    const role = getCurrentRole();
    propagateRoleToLinks(role);
    applyRoleVisibility(role);
    initSidebarToggle();
    initActiveNav();
    initNotifications();
    initRoleSwitcher();
});
