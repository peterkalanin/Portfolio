const mobileMenuEl = $('#mobile-menu');
const mobileMenuButtonEl = $('#mobile-menu-button');

function closeNavbar() {
  mobileMenuButtonEl[0].ariaExpanded =
    mobileMenuButtonEl[0].ariaExpanded == 'false' ? 'true' : 'false';

  if (mobileMenuButtonEl[0].ariaExpanded == 'false') {
    mobileMenuEl.addClass('hidden');
    mobileMenuEl.removeClass('absolute');
  } else {
    mobileMenuEl.removeClass('hidden');
    mobileMenuEl.addClass('absolute');
  }
}

mobileMenuButtonEl.bind('click', (event) => {
  closeNavbar();
});
