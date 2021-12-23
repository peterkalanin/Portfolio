const mobileMenuEl = $('#mobile-menu');
const mobileMenuButtonEl = $('#mobile-menu-button');

mobileMenuButtonEl.bind('click', (event) => {
  mobileMenuButtonEl[0].ariaExpanded =
    mobileMenuButtonEl[0].ariaExpanded == 'false' ? 'true' : 'false';

  if (mobileMenuButtonEl[0].ariaExpanded == 'false') {
    mobileMenuEl.addClass('hidden');
  } else {
    mobileMenuEl.removeClass('hidden');
  }
});
